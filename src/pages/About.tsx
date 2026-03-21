import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import trainerImg from "@/assets/trainer-portrait.jpg";
import { Shield, Award, Dumbbell, Heart } from "lucide-react";

const certs = ["NASM Certified Personal Trainer", "ACE Health Coach", "Precision Nutrition Level 2", "CrossFit Level 1", "CPR/AED Certified"];

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: vis2 } = useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-secondary noise-overlay">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl font-heading mb-6 opacity-0 animate-fade-up" style={{ lineHeight: "0.95" }}>
                  THE <span className="text-primary">STORY</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  At 19, I was 260 lbs with no direction. A friend dragged me to a gym. That single hour changed the trajectory of my life. Within a year, I'd lost 80 lbs. Within two, I'd earned my first certification.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
                  I've spent the last 12 years refining my craft — studying biomechanics, nutrition science, and behavioral psychology. I don't just train bodies. I build mindsets that last.
                </p>
                <p className="text-muted-foreground leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
                  Based in Austin, TX, I work out of Iron District Gym — a no-frills warehouse space where the work speaks for itself. If you're looking for fancy smoothie bars, this isn't the place. If you're looking for results, welcome home.
                </p>
              </div>
              <div className="opacity-0 animate-slide-right" style={{ animationDelay: "200ms" }}>
                <img src={trainerImg} alt="Marcus Cole" className="rounded-lg shadow-2xl w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container max-w-3xl">
            <h2 className={`text-5xl font-heading text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ lineHeight: "1.05" }}>
              CERTIFICATIONS & <span className="text-primary">CREDENTIALS</span>
            </h2>
            <div className="space-y-4">
              {certs.map((c, i) => (
                <div
                  key={c}
                  className={`flex items-center gap-4 bg-card rounded-lg p-4 border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + i * 80}ms` }}
                >
                  <Shield size={20} className="text-primary shrink-0" />
                  <span className="font-body text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training style */}
        <section ref={ref2} className="py-24 bg-secondary">
          <div className="container">
            <h2 className={`text-5xl font-heading text-center mb-16 ${vis2 ? "animate-fade-up" : "opacity-0"}`} style={{ lineHeight: "1.05" }}>
              TRAINING <span className="text-primary">STYLE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Dumbbell, title: "Strength First", desc: "Every program is built on progressive overload and compound movements. We build a foundation before we sculpt." },
                { icon: Heart, title: "Mind-Body", desc: "Training isn't just physical. We work on discipline, self-image, and mental resilience alongside every lift." },
                { icon: Award, title: "Results-Driven", desc: "Biweekly assessments, body composition tracking, and program adjustments. Data, not guesswork." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`text-center ${vis2 ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl mb-3" style={{ lineHeight: "1.1" }}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
