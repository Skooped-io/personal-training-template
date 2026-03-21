import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Users, Wifi, UtensilsCrossed, Check } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "1-ON-1 PERSONAL TRAINING",
    who: "For anyone serious about transformation — beginners to advanced athletes.",
    includes: ["Initial body composition assessment", "Custom training program (updated monthly)", "Nutrition guidance & macro targets", "Weekly accountability check-ins", "Form correction & injury prevention"],
    sessions: "60 min sessions, 3-5x/week recommended",
    cta: "Apply for 1-on-1",
  },
  {
    icon: Users,
    title: "SMALL GROUP TRAINING",
    who: "For those who thrive on community energy with a cap of 6 per session.",
    includes: ["Structured programming with variety", "Partner & team-based workouts", "Technique coaching in every session", "Flexible schedule with multiple time slots", "Monthly progress tracking"],
    sessions: "50 min sessions, schedule varies",
    cta: "Join a Group",
  },
  {
    icon: Wifi,
    title: "ONLINE COACHING",
    who: "For self-starters who want expert programming without geographic limits.",
    includes: ["App-based custom program", "Video form reviews", "Bi-weekly video check-ins", "Macro tracking & nutrition plan", "24/7 messaging support"],
    sessions: "Train on your schedule, check-ins bi-weekly",
    cta: "Start Online Coaching",
  },
  {
    icon: UtensilsCrossed,
    title: "CUSTOM MEAL PLANS",
    who: "For anyone who needs nutrition dialed in — standalone or as an add-on.",
    includes: ["Calorie & macro blueprint", "Meal templates & recipes", "Grocery list generator", "Flexible dieting approach", "Monthly plan updates"],
    sessions: "Updated monthly based on progress",
    cta: "Get Your Plan",
  },
];

const Programs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
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
            {programs.map((p, i) => (
              <div
                key={p.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-card rounded-lg p-8 md:p-12 border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl" style={{ lineHeight: "1.05" }}>{p.title}</h2>
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
                  <Link to="/schedule">
                    <Button variant="hero" size="lg">{p.cta}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
