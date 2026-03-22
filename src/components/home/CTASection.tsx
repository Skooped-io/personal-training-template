import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig } from "@/lib/config";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 gradient-orange relative noise-overlay overflow-hidden">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)"
      }} />

      <div className="container relative z-10 text-center">
        <h2
          className={`text-5xl md:text-7xl font-heading text-accent-foreground mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: "0.95", whiteSpace: "pre-line" }}
        >
          {siteConfig.cta.headline}
        </h2>
        <p
          className={`text-accent-foreground/80 text-lg mb-10 max-w-md mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "150ms" }}
        >
          {siteConfig.cta.subtext}
        </p>
        <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <Link to="/schedule">
            <Button variant="hero" size="xl" className="bg-secondary text-foreground hover:bg-secondary/90 shadow-xl shadow-black/20">
              {siteConfig.cta.button} <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}