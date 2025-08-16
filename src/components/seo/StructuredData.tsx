// components/seo/StructuredData.tsx
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export function OrganizationStructuredData({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vooksio",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: isArabic
      ? "شركة متخصصة في هندسة البرمجيات والتعليم التقني واستشارات المنتجات للشركات الناشئة"
      : "Expert software engineering, technical education, and product consulting for startups",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: ["https://twitter.com/vooksio", "https://linkedin.com/company/vooksio", "https://github.com/vooksio"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}

export function ServiceStructuredData({ service, locale }: { service: string; locale: string }) {
  const isArabic = locale === "ar";
  const serviceData = getServiceStructuredData(service, isArabic);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      "@type": "Organization",
      name: "Vooksio",
      url: baseUrl,
    },
    serviceType: serviceData.serviceType,
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: serviceData.audienceType,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: serviceData.offerDescription,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}

export function WebsiteStructuredData({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vooksio",
    url: `${baseUrl}/${locale}`,
    description: isArabic
      ? "خدمات هندسة البرمجيات والتعليم التقني واستشارات المنتجات"
      : "Software engineering, technical education, and product consulting services",
    inLanguage: isArabic ? "ar" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Vooksio",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}

function getServiceStructuredData(service: string, isArabic: boolean) {
  const services = {
    "software-engineering": {
      en: {
        name: "Custom Software Engineering Services",
        description:
          "Professional software development, architecture design, and technical consulting for scalable applications",
        serviceType: "Software Development",
        audienceType: "Business",
        offerDescription: "Custom software engineering solutions for startups and enterprises",
      },
      ar: {
        name: "خدمات هندسة البرمجيات المخصصة",
        description: "تطوير البرمجيات المهني وتصميم الهندسة المعمارية والاستشارات التقنية للتطبيقات القابلة للتوسع",
        serviceType: "تطوير البرمجيات",
        audienceType: "الأعمال",
        offerDescription: "حلول هندسة البرمجيات المخصصة للشركات الناشئة والمؤسسات",
      },
    },
    "technical-education": {
      en: {
        name: "Technical Education Programs",
        description: "Comprehensive training programs for software engineering and modern development practices",
        serviceType: "Educational Service",
        audienceType: "Developers",
        offerDescription: "Professional technical education and training programs",
      },
      ar: {
        name: "برامج التعليم التقني",
        description: "برامج تدريب شاملة لهندسة البرمجيات وممارسات التطوير الحديثة",
        serviceType: "خدمة تعليمية",
        audienceType: "المطورين",
        offerDescription: "برامج التعليم والتدريب التقني المهني",
      },
    },
    "product-consulting": {
      en: {
        name: "Strategic Product Consulting",
        description: "Expert product strategy, technical architecture, and development roadmap consulting",
        serviceType: "Consulting Service",
        audienceType: "Startups",
        offerDescription: "Strategic product consulting and technical advisory services",
      },
      ar: {
        name: "استشارات المنتجات الاستراتيجية",
        description: "استراتيجية المنتج المتخصصة والهندسة المعمارية التقنية واستشارات خارطة الطريق للتطوير",
        serviceType: "خدمة استشارية",
        audienceType: "الشركات الناشئة",
        offerDescription: "استشارات المنتجات الاستراتيجية وخدمات الاستشارة التقنية",
      },
    },
  };

  const serviceConfig = services[service as keyof typeof services];
  return isArabic ? serviceConfig?.ar : serviceConfig?.en;
}

// Usage in layout or pages:
// Add these components to your pages for enhanced SEO
