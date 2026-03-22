import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Quote } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <h2
          className={`text-5xl md:text-6xl font-heading text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: "1.05" }}
        >
          WHAT THEY <span className="text-primary">SAY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-lg p-8 border border-border relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div>
                <div className="font-heading text-xl text-foreground" style={{ lineHeight: "1.1" }}>{t.name}</div>
                <div className="text-primary text-xs font-semibold uppercase tracking-wider mt-1">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}