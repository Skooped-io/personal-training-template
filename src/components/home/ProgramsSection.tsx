import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Dumbbell, Users, Wifi, UtensilsCrossed } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "1-on-1 Training",
    desc: "Fully customized programs with hands-on coaching. Every rep, every set, every meal — built for you.",
    link: "/programs",
  },
  {
    icon: Users,
    title: "Small Group",
    desc: "High-energy sessions with 4-6 people max. Community push with personal attention.",
    link: "/programs",
  },
  {
    icon: Wifi,
    title: "Online Coaching",
    desc: "Train anywhere with app-based programming, weekly check-ins, and macro tracking.",
    link: "/programs",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Meal Plans",
    desc: "Nutrition blueprints tailored to your goals, lifestyle, and food preferences.",
    link: "/programs",
  },
];

export default function ProgramsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <h2
          className={`text-5xl md:text-6xl font-heading text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: "1.05" }}
        >
          TRAINING <span className="text-primary">PROGRAMS</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-md mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
          Choose your path. Every program is built on science, driven by results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <Link
              key={p.title}
              to={p.link}
              className={`group relative bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3" style={{ lineHeight: "1.1" }}>{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 text-primary text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
