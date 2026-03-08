import HeroSection from "@/components/HeroSection";
import WhyItWorks from "@/components/WhyItWorks";
import ProblemSection from "@/components/ProblemSection";
import WhatYouLearn from "@/components/WhatYouLearn";
import ForWhoSection from "@/components/ForWhoSection";
import AboutSection from "@/components/AboutSection";
import WhatYouGet from "@/components/WhatYouGet";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhyItWorks />
      <ProblemSection />
      <WhatYouLearn />
      <ForWhoSection />
      <AboutSection />
      <WhatYouGet />
      <OfferSection />
      <FAQSection />
      <StickyBar />

      <footer className="py-8 text-center text-xs text-muted-foreground font-sans-body border-t border-border">
        © 2026 Mente, Corpo e Emoções · Todos os direitos reservados
      </footer>
    </main>
  );
};

export default Index;
