import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

interface SEOHeadProps {
  page: keyof typeof siteConfig.seo;
}

export default function SEOHead({ page }: SEOHeadProps) {
  const seo = siteConfig.seo[page];

  useEffect(() => {
    if (seo?.title) {
      document.title = seo.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo?.description) {
      metaDesc.setAttribute("content", seo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && seo?.title) {
      ogTitle.setAttribute("content", seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && seo?.description) {
      ogDesc.setAttribute("content", seo.description);
    }
  }, [seo]);

  return null;
}

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
    },
    "areaServed": siteConfig.serviceArea,
    "description": siteConfig.seo.home.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}