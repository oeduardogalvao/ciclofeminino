import { Button } from "@/components/ui/button";
import { useUTM } from "@/hooks/useUTM";

interface SectionCTAProps {
  text: string;
}

const SectionCTA = ({ text }: SectionCTAProps) => {
  const { appendUTM } = useUTM();
  return (
    <div className="text-center mt-10">
      <Button variant="cta" size="lg" className="px-10 py-5 text-base bg-accent text-accent-foreground hover:bg-accent/85" asChild>
        <a href={appendUTM("https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10")} target="_blank" rel="noopener noreferrer">{text}</a>
      </Button>
    </div>
  );
};

export default SectionCTA;
