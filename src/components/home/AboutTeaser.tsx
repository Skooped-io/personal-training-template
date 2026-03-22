import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trainerImg from "@/assets/trainer-portrait.jpg";
import { siteConfig, getImage } from "@/lib/config";

export default function AboutTeaser() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative">
              <img
                src={getImage(null, 'about', trainerImg)}
                alt={`${siteConfig.businessName}, personal trainer`}
                className="rounded-lg w-full max-w-md mx-auto shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg gradient-green flex items-center justify-center">
                <span className="font-heading text-3xl text-primary-foreground">{siteConfig.stats[1]?.value}+</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <h2 className="text-5xl md:text-6xl font-heading mb-6" style={{ lineHeight: "1.05" }}>
              MEET YOUR <span className="text-primary">TRAINER</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {siteConfig.about}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {siteConfig.aboutExtended}
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                My Full Story →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}