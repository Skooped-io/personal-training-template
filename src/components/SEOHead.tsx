import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

interface SEOHeadProps {
  page: keyof typeof siteConfig.seo;
  overrideTitle?: string;
  overrideDescription?: string;
}

export default function SEOHead({ page, overrideTitle, overrideDescription }: SEOHeadProps) {
  const seo = siteConfig.seo[page];
  const title = overrideTitle || seo?.title;
  const description = overrideDescription || seo?.description;

  useEffect(() => {
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute("content", description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute("content", description);
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