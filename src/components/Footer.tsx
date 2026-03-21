import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-4xl text-primary mb-4">MARCUS COLE</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
              Certified personal trainer helping you build the body and mindset you deserve. Based in Austin, TX.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              {[
                { to: "/programs", label: "Programs" },
                { to: "/results", label: "Results" },
                { to: "/schedule", label: "Book a Session" },
                { to: "/about", label: "About Me" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">GET IN TOUCH</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Iron District Gym, Austin, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>(512) 555-0147</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>marcus@coletraining.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marcus Cole Training. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
