import { useMemo } from "react";

/**
 * Captures UTM (and any other) query params from the current page URL
 * and provides a helper to append them to outbound links.
 */
export function useUTM() {
  const currentParams = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);

  /** Append current page params to a destination URL, avoiding duplicates. */
  const appendUTM = (href: string): string => {
    if (!href || currentParams.size === 0) return href;

    // Skip non-http links (tel:, mailto:, javascript:, anchors, relative #)
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
      currentParams.forEach((value, key) => {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
      return url.toString();
    } catch {
      return href;
    }
  };

  return { appendUTM };
}
