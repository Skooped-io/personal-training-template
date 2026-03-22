import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/config";

export default function TransformationsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-light-section">
      <div className="container">
        <h2
          className={`text-5xl md:text-6xl font-heading text-center text-light-section-foreground mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: "1.05" }}
        >
          REAL <span className="text-primary">RESULTS</span>
        </h2>
        <p className={`text-center text-muted mb-16 max-w-md mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
          These aren't stock photos. These are real people who showed up and did the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.transformations.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-lg overflow-hidden bg-secondary ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {/* Placeholder before/after area */}
              <div className="grid grid-cols-2 h-64">
                <div className="bg-card flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest border-r border-border">Before</div>
                <div className="bg-primary/10 flex items-center justify-center text-primary text-xs uppercase tracking-widest">After</div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground mb-1" style={{ lineHeight: "1.1" }}>{t.name}</h3>
                <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">{t.program} · {t.time}</div>
                <p className="text-sm text-muted-foreground">{t.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
          <Link to="/results" className="text-primary font-semibold uppercase tracking-wider text-sm hover:underline">
            See All Transformations →
          </Link>
        </div>
      </div>
    </section>
  );
}