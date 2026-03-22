import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-secondary noise-overlay">
          <div className="container text-center">
            <h1 className="text-6xl md:text-7xl font-heading mb-4 opacity-0 animate-fade-up" style={{ lineHeight: "0.95" }}>
              LET'S <span className="text-primary">CONNECT</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Questions? Want to learn more before committing? Reach out — I respond within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="font-heading text-3xl mb-8" style={{ lineHeight: "1.1" }}>SEND A MESSAGE</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Name</label>
                    <input type="text" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Email</label>
                    <input type="email" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Message</label>
                    <textarea rows={5} className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary font-body resize-none" placeholder="How can I help?" />
                  </div>
                  <Button variant="hero" size="lg" className="w-full" type="submit">Send Message</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-3xl mb-8" style={{ lineHeight: "1.1" }}>CONTACT INFO</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg" style={{ lineHeight: "1.1" }}>LOCATION</h3>
                      <p className="text-muted-foreground text-sm">{siteConfig.address.venue}<br />{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg" style={{ lineHeight: "1.1" }}>PHONE</h3>
                      <p className="text-muted-foreground text-sm">{siteConfig.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg" style={{ lineHeight: "1.1" }}>EMAIL</h3>
                      <p className="text-muted-foreground text-sm">{siteConfig.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-heading text-lg mb-4" style={{ lineHeight: "1.1" }}>FOLLOW THE JOURNEY</h3>
                  <div className="flex gap-4">
                    <a href={siteConfig.socialLinks.instagram} className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href={siteConfig.socialLinks.youtube} className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all" aria-label="YouTube">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;