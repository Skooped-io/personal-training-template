import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Users, Wifi, UtensilsCrossed, Check, ArrowRight } from "lucide-react";
import { siteConfig, slugify } from "@/lib/config";

const iconMap: Record<string, any> = { Dumbbell, Users, Wifi, UtensilsCrossed };

const Programs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <SEOHead page="programs" />
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-secondary noise-overlay">
          <div className="container text-center">
            <h1 className="text-6xl md:text-7xl font-heading mb-4 opacity-0 animate-fade-up" style={{ lineHeight: "0.95" }}>
              FIND YOUR <span className="text-primary">PROGRAM</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              No matter where you are in your journey, there's a path here for you.
            </p>
          </div>
        </section>

        <section ref={ref} className="py-24 bg-background">
          <div className="container space-y-16">
            {siteConfig.programs.map((p, i) => {
              const Icon = iconMap[p.icon] || Dumbbell;
              return (
                <div
                  key={p.fullTitle}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-card rounded-lg p-8 md:p-12 border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl" style={{ lineHeight: "1.05" }}>{p.fullTitle}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">{p.who}</p>
                    <p className="text-xs text-primary uppercase tracking-wider font-semibold">{p.sessions}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-4" style={{ lineHeight: "1.1" }}>WHAT'S INCLUDED</h3>
                    <ul className="space-y-3 mb-8">
                      {p.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check size={16} className="text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/schedule">
                        <Button variant="hero" size="lg">{p.cta}</Button>
                      </Link>
                      <Link to={`/services/${slugify(p.title)}`}>
                        <Button variant="outline" size="lg" className="gap-2">
                          Learn More <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;