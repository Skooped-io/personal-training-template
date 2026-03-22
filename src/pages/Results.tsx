import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const Results = () => {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollReveal();
  const filtered = active === "All" ? siteConfig.results : siteConfig.results.filter((r) => r.category === active);

  return (
    <>
      <SEOHead page="results" />
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-secondary noise-overlay">
          <div className="container text-center">
            <h1 className="text-6xl md:text-7xl font-heading mb-4 opacity-0 animate-fade-up" style={{ lineHeight: "0.95" }}>
              REAL <span className="text-primary">TRANSFORMATIONS</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Every result here is earned, not given. Real people, real work, real change.
            </p>
          </div>
        </section>

        <section ref={ref} className="py-24 bg-background">
          <div className="container">
            {/* Filters */}
            <div className={`flex flex-wrap gap-3 justify-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              {siteConfig.resultCategories.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 active:scale-[0.97] ${
                    active === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((r, i) => (
                <div
                  key={r.name}
                  className={`rounded-lg overflow-hidden bg-card border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + i * 80}ms` }}
                >
                  <div className="grid grid-cols-2 h-48">
                    <div className="bg-secondary flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest border-r border-border">Before</div>
                    <div className="bg-primary/10 flex items-center justify-center text-primary text-xs uppercase tracking-widest">After</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-1" style={{ lineHeight: "1.1" }}>{r.name}</h3>
                    <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{r.program} · {r.time}</div>
                    <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">{r.category}</div>
                    <p className="text-sm text-muted-foreground">{r.result}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`text-center mt-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "800ms" }}>
              <h3 className="font-heading text-3xl mb-4" style={{ lineHeight: "1.1" }}>YOUR TRANSFORMATION STARTS HERE</h3>
              <Link to="/schedule">
                <Button variant="hero" size="xl">Book Your Free Session</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Results;