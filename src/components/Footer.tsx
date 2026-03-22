import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-4xl text-primary mb-4">{siteConfig.brandName}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
              Certified personal trainer helping you build the body and mindset you deserve. Based in {siteConfig.address.city}, {siteConfig.address.state}.
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
                <span>{siteConfig.address.venue}, {siteConfig.address.city}, {siteConfig.address.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href={siteConfig.socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.socialLinks.youtube} className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.businessName} Training. All rights reserved.
        </div>
      </div>
    </footer>
  );
}