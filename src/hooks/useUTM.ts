import { useMemo } from "react";

/**
 * Captures query params from the current page URL
 * and provides a helper to append/override them on outbound links.
 */
export function useUTM() {
  const currentParams = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);

  /** Append current page params to a destination URL, overriding duplicates. */
  const appendUTM = (href: string): string => {
    if (!href) return href;

    // Skip non-http links
    if (
      href.startsWith("#") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("javascript:")
    ) {
      return href;
    }

    try {
      const url = new URL(href);
      // Override: incoming page params always win
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      return url.toString();
    } catch {
      return href;
    }
  };

  return { appendUTM };
}
