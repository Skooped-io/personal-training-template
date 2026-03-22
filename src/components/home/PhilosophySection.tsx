import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Brain, Apple, Repeat } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap: Record<string, any> = { Brain, Apple, Repeat };

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-secondary noise-overlay relative">
      <div className="container relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-heading text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: "1.05" }}
        >
          THE <span className="text-primary">PHILOSOPHY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.philosophy.map((p, i) => {
            const Icon = iconMap[p.icon] || Brain;
            return (
              <div
                key={p.title}
                className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-3xl mb-4" style={{ lineHeight: "1.1" }}>{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}