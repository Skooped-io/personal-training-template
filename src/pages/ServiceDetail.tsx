import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig, slugify, getProgramBySlug } from "@/lib/config";
import { Check, Phone, MapPin, ChevronRight, ArrowRight, Dumbbell, Users, Wifi, UtensilsCrossed } from "lucide-react";

const iconMap: Record<string, any> = { Dumbbell, Users, Wifi, UtensilsCrossed };

const serviceContent: Record<string, { paragraphs: string[]; process: string[] }> = {
  "1-on-1-training": {
    paragraphs: [
      "One-on-one personal training is the fastest route to real, lasting transformation. Every session is designed exclusively for your body, goals, and schedule — no templates, no guesswork. Whether you're starting from zero or chasing a competitive edge, this is where the work gets personal.",
      "Your program is built from a comprehensive assessment of your movement patterns, body composition, lifestyle, and injury history. From there, we design a periodized training plan that evolves with you — adjusting volume, intensity, and focus every month based on measurable progress.",
      "Beyond the gym floor, you'll receive hands-on nutrition guidance, weekly accountability check-ins, and direct access to coaching support. This isn't a gym membership — it's a partnership built around getting you where you want to be."
    ],
    process: ["Initial body composition & movement assessment", "Custom periodized program design", "Hands-on coaching every session", "Monthly program updates based on progress", "Nutrition guidance & macro targets", "Weekly accountability check-ins"]
  },
  "small-group": {
    paragraphs: [
      "Small group training combines the energy of a team environment with the precision of personalized coaching. With a strict cap of six people per session, every member gets real attention — no one fades into the background.",
      "Sessions are structured around strength, conditioning, and movement quality. You'll train alongside people at similar commitment levels, pushing each other through carefully programmed workouts that change daily but follow a long-term progression.",
      "This format is ideal if you thrive on community energy but still want technique coaching, progress tracking, and a structured plan. It's the best of both worlds — camaraderie without compromise."
    ],
    process: ["Structured programming with daily variety", "Partner & team-based workout formats", "Technique coaching in every session", "Flexible scheduling with multiple time slots", "Monthly progress tracking & assessments", "Cap of 6 per session for quality coaching"]
  },
  "online-coaching": {
    paragraphs: [
      "Online coaching delivers expert programming and accountability regardless of where you train. Through a dedicated app, you'll follow a custom program built for your goals, equipment access, and schedule — with video demonstrations for every movement.",
      "Bi-weekly video check-ins keep the coaching relationship real and responsive. We review your form through submitted training videos, adjust programming based on your feedback, and refine nutrition targets as your body composition changes.",
      "This is not a cookie-cutter PDF plan. It's a living, breathing coaching relationship that happens to work across any distance. If you're disciplined enough to train independently but want expert eyes on your program, this is your lane."
    ],
    process: ["App-based custom training program", "Video form reviews & corrections", "Bi-weekly video coaching calls", "Macro tracking & nutrition planning", "24/7 messaging support", "Program adjustments based on progress"]
  },
  "custom-meal-plans": {
    paragraphs: [
      "Nutrition is the foundation that training is built on. A custom meal plan eliminates the guesswork — giving you a clear, sustainable blueprint for fueling your goals, whether that's fat loss, muscle gain, or performance optimization.",
      "Every plan is built around your caloric needs, macronutrient targets, food preferences, allergies, and lifestyle. You'll get meal templates, recipes, and grocery lists that make execution simple. No rigid meal timing, no banned food groups — just a flexible framework that works.",
      "Plans are updated monthly based on your progress and evolving goals. As your body changes, your nutrition changes with it. This can be a standalone service or a powerful add-on to any training program."
    ],
    process: ["Comprehensive nutrition assessment", "Calorie & macronutrient blueprint", "Meal templates & recipe library", "Weekly grocery list generator", "Flexible dieting approach", "Monthly plan updates based on progress"]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  if (!program) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl mb-4">Program Not Found</h1>
            <Link to="/programs"><Button variant="hero">View All Programs</Button></Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const content = slug ? serviceContent[slug] : undefined;
  const Icon = iconMap[program.icon] || Dumbbell;
  const relatedPrograms = siteConfig.programs.filter((p) => p.title !== program.title).slice(0, 3);
  const city = siteConfig.address.city;
  const state = siteConfig.address.state;
  const pageTitle = `${program.fullTitle} in ${city}, ${state} | ${siteConfig.businessName}`;
  const pageDesc = `${program.shortDesc} Located in ${city}, ${state}. ${siteConfig.programs.length}+ training options available.`;

  return (
    <>
      <SEOHead page="programs" overrideTitle={pageTitle} overrideDescription={pageDesc} />

      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": program.fullTitle,
        "description": program.shortDesc,
        "provider": {
          "@type": "LocalBusiness",
          "name": siteConfig.businessName,
          "telephone": siteConfig.phone,
          "address": { "@type": "PostalAddress", "streetAddress": siteConfig.address.street, "addressLocality": city, "addressRegion": state, "postalCode": siteConfig.address.zip }
        },
        "areaServed": siteConfig.serviceArea
      })}} />

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary noise-overlay">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 opacity-0 animate-fade-up">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{program.title}</span>
            </nav>

            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "80ms" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={28} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-heading" style={{ lineHeight: "0.95" }}>
                {program.fullTitle}
              </h1>
            </div>
            <p className="text-muted-foreground max-w-xl text-lg opacity-0 animate-fade-up" style={{ animationDelay: "160ms" }}>
              {program.who}
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section ref={ref} className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                  {content?.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{p}</p>
                  ))}
                </div>

                {/* What's Included */}
                <div className={`bg-card rounded-lg border border-border p-8 md:p-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
                  <h2 className="font-heading text-2xl md:text-3xl mb-6" style={{ lineHeight: "1.05" }}>WHAT'S INCLUDED</h2>
                  <ul className="space-y-4">
                    {(content?.process || program.includes).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-primary uppercase tracking-wider font-semibold">{program.sessions}</p>
                </div>

                {/* CTA */}
                <div className={`bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-10 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                  <h2 className="font-heading text-3xl mb-3" style={{ lineHeight: "1.05" }}>READY TO START?</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">Book your free assessment session and see if this program is the right fit.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/schedule">
                      <Button variant="hero" size="lg">{program.cta}</Button>
                    </Link>
                    <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
                      <Button variant="outline" size="lg" className="gap-2">
                        <Phone size={16} /> {siteConfig.phone}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "160ms" }}>
                {/* NAP */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-heading text-xl mb-4" style={{ lineHeight: "1.1" }}>LOCATION</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{siteConfig.businessName}</p>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{siteConfig.address.full}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary shrink-0" />
                      <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
                    </div>
                    <p className="text-xs text-muted-foreground/70 pt-2">{siteConfig.hours}</p>
                  </div>
                </div>

                {/* Related Programs */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-heading text-xl mb-4" style={{ lineHeight: "1.1" }}>OTHER PROGRAMS</h3>
                  <div className="space-y-3">
                    {relatedPrograms.map((rp) => {
                      const RpIcon = iconMap[rp.icon] || Dumbbell;
                      return (
                        <Link
                          key={rp.title}
                          to={`/services/${slugify(rp.title)}`}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <RpIcon size={16} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{rp.title}</p>
                          </div>
                          <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Programs Full Width */}
        <section ref={ref2} className="py-20 bg-secondary noise-overlay">
          <div className="container">
            <h2 className={`text-4xl md:text-5xl font-heading text-center mb-12 ${isVisible2 ? "animate-fade-up" : "opacity-0"}`} style={{ lineHeight: "1.05" }}>
              EXPLORE MORE <span className="text-primary">PROGRAMS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPrograms.map((rp, i) => {
                const RpIcon = iconMap[rp.icon] || Dumbbell;
                return (
                  <Link
                    key={rp.title}
                    to={`/services/${slugify(rp.title)}`}
                    className={`group bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${isVisible2 ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <RpIcon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl text-foreground mb-3" style={{ lineHeight: "1.1" }}>{rp.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rp.shortDesc}</p>
                    <div className="mt-6 text-primary text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </div>
                  </Link>
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

export default ServiceDetail;
