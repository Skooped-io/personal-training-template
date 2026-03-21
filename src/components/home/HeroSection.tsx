import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Dark gym interior with dramatic lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Diagonal cut overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "polygon(0 100%, 100% 40%, 100% 100%)"
      }} />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading leading-[0.9] text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ textWrap: "balance" }}
          >
            YOUR BODY.<br />
            <span className="text-primary">YOUR RULES.</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-lg mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "150ms", textWrap: "pretty" }}
          >
            Personalized training programs designed to push your limits and unlock the strongest version of you.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Link to="/schedule">
              <Button variant="hero" size="xl">
                Book Your First Session — Free
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" size="xl">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
