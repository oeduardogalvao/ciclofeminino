import { Button } from "@/components/ui/button";

interface SectionCTAProps {
  text: string;
}

const SectionCTA = ({ text }: SectionCTAProps) => {
  return (
    <div className="text-center mt-10">
      <Button variant="cta" size="lg" className="px-10 py-5 text-base bg-accent text-accent-foreground hover:bg-accent/85" asChild>
        <a href="#oferta">{text}</a>
      </Button>
    </div>
  );
};

export default SectionCTA;
