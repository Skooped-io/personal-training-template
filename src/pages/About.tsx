import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import trainerImg from "@/assets/trainer-portrait.jpg";
import { Shield, Dumbbell, Heart, Award } from "lucide-react";
import { siteConfig, getImage } from "@/lib/config";

const iconMap: Record<string, any> = { Dumbbell, Heart, Award };

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: vis2 } = useScrollReveal();

  return (
    <>
      <SEOHead page="about" />
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
                {siteConfig.aboutStory.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${100 + i * 100}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="opacity-0 animate-slide-right" style={{ animationDelay: "200ms" }}>
                <img
                  src={getImage(null, 'about', trainerImg)}
                  alt={siteConfig.businessName}
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
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
              {siteConfig.certifications.map((c, i) => (
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
              {siteConfig.trainingStyle.map((item, i) => {
                const Icon = iconMap[item.icon] || Dumbbell;
                return (
                  <div
                    key={item.title}
                    className={`text-center ${vis2 ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl mb-3" style={{ lineHeight: "1.1" }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;