import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const Schedule = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: vis2 } = useScrollReveal();
  const [goals, setGoals] = useState<string[]>([]);

  const toggleGoal = (g: string) => {
    setGoals((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-secondary noise-overlay">
          <div className="container text-center">
            <h1 className="text-6xl md:text-7xl font-heading mb-4 opacity-0 animate-fade-up" style={{ lineHeight: "0.95" }}>
              BOOK YOUR <span className="text-primary">SESSION</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Your first assessment is free. Fill out the form below and let's get started.
            </p>
          </div>
        </section>

        {/* Group Schedule */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container max-w-4xl">
            <h2 className={`text-4xl font-heading text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ lineHeight: "1.05" }}>
              GROUP <span className="text-primary">SCHEDULE</span>
            </h2>
            <div className={`bg-card rounded-lg border border-border overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
              <div className="grid grid-cols-3 gap-0 text-xs uppercase tracking-widest text-muted-foreground font-semibold border-b border-border">
                <div className="p-4">Day</div>
                <div className="p-4">Time</div>
                <div className="p-4">Class</div>
              </div>
              {siteConfig.groupSchedule.map((s, i) => (
                <div key={i} className="grid grid-cols-3 gap-0 border-b border-border last:border-0 text-sm">
                  <div className="p-4 font-semibold text-foreground">{s.day}</div>
                  <div className="p-4 text-primary font-semibold">{s.time}</div>
                  <div className="p-4 text-muted-foreground">{s.type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section ref={ref2} className="py-24 bg-secondary">
          <div className="container max-w-2xl">
            <h2 className={`text-4xl font-heading text-center mb-12 ${vis2 ? "animate-fade-up" : "opacity-0"}`} style={{ lineHeight: "1.05" }}>
              BOOK A FREE <span className="text-primary">ASSESSMENT</span>
            </h2>

            <form
              className={`space-y-6 ${vis2 ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "150ms" }}
              onSubmit={(e) => { e.preventDefault(); }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Name</label>
                  <input type="text" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Phone</label>
                  <input type="tel" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Email</label>
                <input type="email" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="you@email.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Fitness Goals</label>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.fitnessGoals.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggleGoal(g)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all active:scale-[0.97] ${
                        goals.includes(g)
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Current Activity Level</label>
                <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body">
                  <option value="">Select level</option>
                  {siteConfig.activityLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Preferred Time</label>
                <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body">
                  <option value="">Select time</option>
                  {siteConfig.preferredTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <Button variant="hero" size="xl" className="w-full" type="submit">
                Book Free Assessment
              </Button>
            </form>

            {/* Location */}
            <div className={`mt-16 text-center ${vis2 ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <MapPin size={16} className="text-primary" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock size={16} className="text-primary" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;