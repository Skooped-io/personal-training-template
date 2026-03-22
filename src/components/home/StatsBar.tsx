import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig } from "@/lib/config";

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="bg-secondary py-12 relative noise-overlay">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${isVisible ? "animate-count-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-heading text-5xl md:text-6xl text-primary mb-1">{stat.value}</div>
              <div className="font-body text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}