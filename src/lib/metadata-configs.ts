// lib/metadata-configs.ts
import { Metadata, Viewport } from "next";
import { getBaseUrl } from "@/lib/config";
import { servicesData } from "./services-data";
import { headers } from "next/headers";

const baseUrl = getBaseUrl();

// Homepage Metadata
// Separate viewport configuration
export async function generateHomeViewport({ params }: { params: Promise<{ locale: string }> }): Promise<Viewport> {
  return {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };
}

export async function generateHomeMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    // Add metadataBase to resolve social images properly
    metadataBase: new URL(baseUrl),

    // 1. FIXED: Shortened titles to under 580 pixels (~60 characters)
    title: isArabic ? "فوكسيو - هندسة البرمجيات والتعليم التقني" : "Vooksio - Software Engineering & Tech Education",

    // 2. FIXED: Shortened meta description to under 1000 pixels (~155 characters)
    description: isArabic
      ? "خدمات هندسة البرمجيات المتخصصة والتعليم التقني الشامل. بناء تطبيقات حقيقية مهمة مع فريق فوكسيو المتخصص في التطوير والاستشارات."
      : "Expert software engineering services and comprehensive technical education. Build real apps that matter with Vooksio's specialized development and consulting team.",

    keywords: [
      "software engineering",
      "technical education",
      "product consulting",
      "هندسة البرمجيات",
      "التعليم التقني",
      "استشارات المنتجات",
      "MVP development",
      "startup consulting",
      "web development",
      "mobile development",
      "vooksio",
      "tech training",
      "software services",
    ],

    authors: [{ name: "Vooksio Team" }],
    creator: "Vooksio",
    publisher: "Vooksio",

    // 3. FIXED: Added favicon and Apple touch icons
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      // 5. FIXED: Apple touch icons
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180" },
        { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
        { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
        { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      ],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    },

    // Web app manifest
    manifest: "/site.webmanifest",

    // NOTE: themeColor moved to viewport export

    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      title: isArabic ? "فوكسيو - هندسة البرمجيات والتعليم التقني" : "Vooksio - Software Engineering & Tech Education",
      description: isArabic
        ? "خدمات هندسة البرمجيات المتخصصة والتعليم التقني الشامل"
        : "Expert software engineering services and comprehensive technical education",
      url: `${baseUrl}/${locale}`,
      siteName: "Vooksio",
      images: [
        {
          url: `${baseUrl}/og-home.jpg`,
          width: 1200,
          height: 630,
          alt: isArabic ? "فوكسيو - بناء تطبيقات حقيقية مهمة" : "Vooksio - Build Real Apps That Matter",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@vooksio",
      creator: "@vooksio",
      title: isArabic ? "فوكسيو - هندسة البرمجيات والتعليم التقني" : "Vooksio - Software Engineering & Tech Education",
      description: isArabic
        ? "بناء تطبيقات حقيقية مهمة مع خبرتنا في هندسة البرمجيات"
        : "Build real apps that matter with our software engineering expertise",
      images: [`${baseUrl}/twitter-home.jpg`],
    },

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },

    // 10 & 13. FIXED: Combined other properties
    other: {
      "X-Robots-Tag": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vooksio",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: isArabic
          ? "خدمات هندسة البرمجيات المتخصصة والتعليم التقني الشامل"
          : "Expert software engineering services and comprehensive technical education",
        sameAs: ["https://twitter.com/vooksio", "https://linkedin.com/company/vooksio", "https://github.com/vooksio"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
        },
        areaServed: "Worldwide",
        serviceType: ["Software Engineering", "Technical Education", "Product Consulting", "MVP Development"],
      }),
    },

    // Additional SEO optimizations
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification tags for search engines
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

// Services Index Page Metadata

export async function generateServicesMetadata({
  params,
}: {
  params: Promise<{ locale: "ar" | "en"; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const isArabic = locale === "ar";
  type ServiceType = keyof typeof servicesData;
  const serviceData = servicesData[service as ServiceType];
  const keywords = [
    "vooksio",
    "software engineering",
    "technical education",
    "consulting",
    ...(serviceData.technologies || []),
  ];
  const serviceUrl = `${baseUrl}/${locale}/services/${service}`;
  return {
    title: isArabic ? `${serviceData.title.ar} | فوكسيو` : `${serviceData.title.en} | Vooksio`,
    description: isArabic
      ? `اكتشف مجموعة شاملة من خدمات هندسة البرمجيات، وبرامج التعليم التقني، واستشارات تطوير المنتجات. خدمات تطوير الويب، والتطبيقات المحمولة، وتطوير MVP للشركات الناشئة والمطورين.`
      : `Discover our comprehensive range of software engineering services, technical education programs, and product development consulting. Web development, mobile apps, and MVP development for startups and developers.`,
    keywords,
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: serviceUrl,
      title: `${serviceData.title[locale]} | Vooksio`,
      description: serviceData.description[locale],
      siteName: "Vooksio",
      images: [
        {
          url: `/og-services-${service}.jpg`,
          width: 1200,
          height: 630,
          alt: `${serviceData.title[locale]} - Vooksio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title[locale]} | Vooksio`,
      description: serviceData.description[locale],
      creator: "@vooksio",
      images: [`/twitter-services-${service}.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        en: `${baseUrl}/en/services`,
        ar: `${baseUrl}/ar/services`,
      },
    },
  };
}

// =============================================
// SERVICE PAGE METADATA & VIEWPORT
// =============================================

// Individual Service Page Metadata - FIXED
export async function generateServiceMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const isArabic = locale === "ar";
  const serviceData = getServiceData(service, isArabic);

  if (!serviceData) {
    // Fallback metadata for unknown services
    return {
      metadataBase: new URL(baseUrl), // FIXED: Added metadataBase
      title: isArabic ? `خدمة ${service} | فوكسيو` : `${service} Service | Vooksio`,
      description: isArabic ? `خدمات متخصصة في ${service} من فوكسيو` : `Professional ${service} services from Vooksio`,
      alternates: {
        canonical: `${baseUrl}/${locale}/services/${service}`,
      },
    };
  }

  return {
    metadataBase: new URL(baseUrl), // FIXED: Added metadataBase
    title: isArabic ? `${serviceData.title} | فوكسيو` : `${serviceData.title} | Vooksio`,

    description: serviceData.description,
    keywords: serviceData.keywords,
    openGraph: {
      title: serviceData.title,
      description: serviceData.description,
      url: `${baseUrl}/${locale}/services/${service}`,
      images: [
        {
          url: `/og-${service}.jpg`, // Will be resolved with metadataBase
          width: 1200,
          height: 630,
          alt: serviceData.title,
        },
      ],
    },
    twitter: {
      title: serviceData.title,
      description: serviceData.shortDescription || serviceData.description,
      images: [`/twitter-${service}.jpg`], // Will be resolved with metadataBase
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/${service}`,
      languages: {
        en: `${baseUrl}/en/services/${service}`,
        ar: `${baseUrl}/ar/services/${service}`,
      },
    },
  };
}

// Service Page Viewport - NEW
export async function generateServiceViewport({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Viewport> {
  return {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}

// =============================================
// CONTACT PAGE METADATA & VIEWPORT
// =============================================

// Contact Page Metadata - FIXED
export async function generateContactMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    metadataBase: new URL(baseUrl), // FIXED: Added metadataBase
    title: isArabic ? "اتصل بنا | احصل على استشارة مجانية - فوكسيو" : "Contact Us | Get Free Consultation - Vooksio",
    description: isArabic
      ? "تواصل مع فريق خبراء هندسة البرمجيات والتعليم التقني لدينا. احصل على استشارة مجانية لمشروعك التقني، أو خدمات التطوير، أو برامج التدريب. نحن هنا لمساعدتك في تحقيق أهدافك التقنية وتطوير حلول برمجية مبتكرة."
      : "Get in touch with our expert software engineering and technical education team. Schedule a free consultation for your technical project, development services, or training programs. We're here to help you achieve your technical goals and build innovative software solutions.",
    keywords: [
      "contact software engineering",
      "technical consultation",
      "free consultation",
      "software engineering consultation",
      "technical education consultation",
      "product consulting contact",
      "MVP development consultation",
      "تواصل معنا",
      "استشارة تقنية مجانية",
      "خدمات البرمجة",
      "استشارة هندسة البرمجيات",
      "استشارة التعليم التقني",
    ],
    openGraph: {
      title: isArabic ? "اتصل بنا - فوكسيو" : "Contact Us - Vooksio",
      description: isArabic
        ? "تواصل معنا للحصول على استشارة تقنية مجانية"
        : "Get in touch for a free technical consultation",
      url: `${baseUrl}/${locale}/contact-us`,
      images: [
        {
          url: "/og-contact.jpg", // Will be resolved with metadataBase
          width: 1200,
          height: 630,
          alt: isArabic ? "تواصل مع فوكسيو" : "Contact Vooksio",
        },
      ],
    },
    twitter: {
      title: isArabic ? "اتصل بنا - فوكسيو" : "Contact Us - Vooksio",
      description: isArabic ? "احصل على استشارة تقنية مجانية" : "Get your free technical consultation",
      images: ["/twitter-contact.jpg"], // Will be resolved with metadataBase
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact-us`,
      languages: {
        en: `${baseUrl}/en/contact-us`,
        ar: `${baseUrl}/ar/contact-us`,
      },
    },
  };
}

// Contact Page Viewport - NEW
export async function generateContactViewport({ params }: { params: Promise<{ locale: string }> }): Promise<Viewport> {
  return {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}

// Service data configuration
function getServiceData(service: string, isArabic: boolean) {
  const services = {
    "software-engineering": {
      en: {
        title: "Custom Software Engineering Services | Expert Development - Vooksio",
        description:
          "Professional custom software engineering services for startups and enterprises. Expert software development, architecture design, and technical consulting to build scalable, robust applications that drive business growth and innovation.",
        shortDescription: "Professional custom software engineering services for startups and enterprises",
        keywords: [
          "custom software engineering",
          "software development services",
          "enterprise software",
          "software architecture",
          "technical consulting",
          "scalable applications",
          "custom software development",
          "enterprise development",
          "software engineering consulting",
        ],
      },
      ar: {
        title: "خدمات هندسة البرمجيات المخصصة | التطوير المتخصص - فوكسيو",
        description:
          "خدمات هندسة البرمجيات المخصصة المهنية للشركات الناشئة والمؤسسات. تطوير البرمجيات المتخصص، وتصميم الهندسة المعمارية، والاستشارات التقنية لبناء تطبيقات قابلة للتوسع وقوية تدفع نمو الأعمال والابتكار.",
        shortDescription: "خدمات هندسة البرمجيات المخصصة المهنية للشركات الناشئة والمؤسسات",
        keywords: [
          "هندسة البرمجيات المخصصة",
          "خدمات تطوير البرمجيات",
          "برمجيات المؤسسات",
          "هندسة البرمجيات",
          "الاستشارات التقنية",
          "التطبيقات القابلة للتوسع",
        ],
      },
    },
    "technical-education": {
      en: {
        title: "Technical Education Programs | Software Engineering Training - Vooksio",
        description:
          "Comprehensive technical education programs for developers and teams. Learn software engineering best practices, modern development frameworks, and cutting-edge technologies through hands-on training, expert instruction, and real-world projects.",
        shortDescription: "Comprehensive technical education programs for developers and teams",
        keywords: [
          "technical education",
          "software engineering training",
          "developer education",
          "programming courses",
          "technical training programs",
          "coding bootcamp",
          "software development training",
          "technical skills training",
          "developer bootcamp",
        ],
      },
      ar: {
        title: "برامج التعليم التقني | تدريب هندسة البرمجيات - فوكسيو",
        description:
          "برامج تعليم تقني شاملة للمطورين والفرق. تعلم أفضل ممارسات هندسة البرمجيات وأطر التطوير الحديثة والتقنيات المتطورة من خلال التدريب العملي والتعليم المتخصص والمشاريع الحقيقية.",
        shortDescription: "برامج تعليم تقني شاملة للمطورين والفرق",
        keywords: [
          "التعليم التقني",
          "تدريب هندسة البرمجيات",
          "تعليم المطورين",
          "دورات البرمجة",
          "برامج التدريب التقني",
          "معسكر البرمجة",
        ],
      },
    },
    "product-consulting": {
      en: {
        title: "Strategic Product Consulting | Startup Technical Advisory - Vooksio",
        description:
          "Strategic product consulting and technical advisory services for startups and growing companies. Get expert guidance on product strategy, technical architecture, development roadmaps, and scaling solutions to accelerate your business growth and market success.",
        shortDescription: "Strategic product consulting and technical advisory services for startups",
        keywords: [
          "product consulting",
          "startup consulting",
          "technical advisory",
          "product strategy",
          "technical architecture",
          "development roadmap",
          "startup technical advisory",
          "product development consulting",
          "business growth consulting",
        ],
      },
      ar: {
        title: "استشارات المنتجات الاستراتيجية | الاستشارات التقنية للشركات الناشئة - فوكسيو",
        description:
          "استشارات المنتجات الاستراتيجية وخدمات الاستشارات التقنية للشركات الناشئة والشركات النامية. احصل على إرشادات الخبراء حول استراتيجية المنتج والهندسة المعمارية التقنية وخرائط طريق التطوير لتسريع نمو أعمالك ونجاحك في السوق.",
        shortDescription: "استشارات المنتجات الاستراتيجية وخدمات الاستشارات التقنية للشركات الناشئة",
        keywords: [
          "استشارات المنتجات",
          "استشارات الشركات الناشئة",
          "الاستشارات التقنية",
          "استراتيجية المنتج",
          "الهندسة المعمارية التقنية",
          "خريطة طريق التطوير",
        ],
      },
    },
    "mvp-development": {
      en: {
        title: "MVP Development Services | Minimum Viable Product Creation - Vooksio",
        description:
          "Fast-track your startup success with our MVP development services. Build and launch your minimum viable product quickly with expert software engineering, user-focused design, agile development methodologies, and rapid market validation strategies.",
        shortDescription: "Fast-track your startup success with our MVP development services",
        keywords: [
          "MVP development",
          "minimum viable product",
          "startup development",
          "rapid prototyping",
          "agile development",
          "product launch",
          "MVP development services",
          "startup MVP",
          "rapid product development",
        ],
      },
      ar: {
        title: "خدمات تطوير MVP | إنشاء المنتج الأدنى القابل للتطبيق - فوكسيو",
        description:
          "سرّع نجاح شركتك الناشئة مع خدمات تطوير MVP. ابنِ وأطلق منتجك الأدنى القابل للتطبيق بسرعة مع هندسة البرمجيات المتخصصة والتصميم المركز على المستخدم ومنهجيات التطوير السريع واستراتيجيات التحقق من السوق.",
        shortDescription: "سرّع نجاح شركتك الناشئة مع خدمات تطوير MVP",
        keywords: [
          "تطوير MVP",
          "المنتج الأدنى القابل للتطبيق",
          "تطوير الشركات الناشئة",
          "النمذجة السريعة",
          "التطوير السريع",
          "إطلاق المنتج",
        ],
      },
    },
    "web-development": {
      en: {
        title: "Professional Web Development Services | Modern Web Applications - Vooksio",
        description:
          "Professional web development services for businesses and startups. Build modern, responsive, and scalable web applications with cutting-edge technologies, exceptional user experience, and robust backend systems that drive business growth.",
        shortDescription: "Professional web development services for businesses and startups",
        keywords: [
          "web development",
          "web application development",
          "responsive web design",
          "modern web development",
          "full-stack development",
          "web development services",
          "custom web development",
          "enterprise web development",
          "startup web development",
        ],
      },
      ar: {
        title: "خدمات تطوير المواقع المهنية | تطبيقات الويب الحديثة - فوكسيو",
        description:
          "خدمات تطوير المواقع المهنية للشركات والشركات الناشئة. ابنِ تطبيقات ويب حديثة ومتجاوبة وقابلة للتوسع بتقنيات متطورة وتجربة مستخدم استثنائية وأنظمة خلفية قوية تدفع نمو الأعمال.",
        shortDescription: "خدمات تطوير المواقع المهنية للشركات والشركات الناشئة",
        keywords: [
          "تطوير المواقع",
          "تطوير تطبيقات الويب",
          "تصميم الويب المتجاوب",
          "تطوير الويب الحديث",
          "التطوير الشامل",
          "خدمات تطوير المواقع",
        ],
      },
    },
    "mobile-development": {
      en: {
        title: "Mobile App Development Services | iOS & Android Development - Vooksio",
        description:
          "Professional mobile app development services for iOS and Android platforms. Build native and cross-platform mobile applications with exceptional user experience, robust performance, and seamless integration with modern backend systems.",
        shortDescription: "Professional mobile app development services for iOS and Android platforms",
        keywords: [
          "mobile app development",
          "iOS development",
          "Android development",
          "mobile application development",
          "cross-platform development",
          "native app development",
          "mobile development services",
          "app development company",
          "custom mobile apps",
        ],
      },
      ar: {
        title: "خدمات تطوير التطبيقات المحمولة | تطوير iOS و Android - فوكسيو",
        description:
          "خدمات تطوير التطبيقات المحمولة المهنية لمنصات iOS و Android. ابنِ تطبيقات محمولة أصلية ومتعددة المنصات بتجربة مستخدم استثنائية وأداء قوي وتكامل سلس مع الأنظمة الخلفية الحديثة.",
        shortDescription: "خدمات تطوير التطبيقات المحمولة المهنية لمنصات iOS و Android",
        keywords: [
          "تطوير التطبيقات المحمولة",
          "تطوير iOS",
          "تطوير Android",
          "تطوير تطبيقات الهاتف",
          "التطوير متعدد المنصات",
          "تطوير التطبيقات الأصلية",
        ],
      },
    },
  };

  const serviceConfig = services[service as keyof typeof services];
  return isArabic ? serviceConfig?.ar : serviceConfig?.en;
}

//not found

// Function to get locale from headers
async function getLocale() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Extract locale from pathname (assuming /en or /ar prefix)
  const localeMatch = pathname.match(/^\/([a-z]{2})/);
  return localeMatch ? localeMatch[1] : "en";
}

// Generate metadata for the 404 page
export async function generate404Metadata(): Promise<Metadata> {
  const locale = await getLocale();

  const isArabic = locale === "ar";

  // Multilingual content
  const content = {
    en: {
      title: "Page Not Found | Vooksio",
      description:
        "Sorry, the page you're looking for doesn't exist. Explore our software development services, technical education, and product consulting solutions.",
      keywords: "404, page not found, software development, web development, technical education, product consulting",
      alternateTitle: "404 - Page Not Found | Vooksio",
    },
    ar: {
      title: "الصفحة غير موجودة | Vooksio",
      description:
        "عذراً، الصفحة التي تبحث عنها غير موجودة. استكشف خدمات تطوير البرمجيات، التعليم التقني، واستشارات المنتجات لدينا.",
      keywords: "404, صفحة غير موجودة, تطوير البرمجيات, تطوير المواقع, التعليم التقني, استشارات المنتجات",
      alternateTitle: "404 - الصفحة غير موجودة | Vooksio",
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.en;

  return {
    title: currentContent.title,
    description: currentContent.description,
    keywords: currentContent.keywords,

    // Open Graph metadata
    openGraph: {
      title: currentContent.title,
      description: currentContent.description,
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      siteName: "Vooksio",
      images: [
        {
          url: "/images/og-404.jpg", // You'll need to create this image
          width: 1200,
          height: 630,
          alt: isArabic ? "صفحة غير موجودة - Vooksio" : "Page Not Found - Vooksio",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: currentContent.title,
      description: currentContent.description,
      images: ["/images/twitter-404.jpg"], // You'll need to create this image
      creator: "@vooksio",
      site: "@vooksio",
    },

    // Additional metadata
    robots: {
      index: false, // Don't index 404 pages
      follow: true, // But allow following links
      noarchive: true,
      nosnippet: false,
      noimageindex: true,
    },

    // Canonical URL (optional, usually not set for 404 pages)
    // alternates: {
    //   canonical: `https://vooksio.com/404`
    // },

    // Language alternatives
    alternates: {
      languages: {
        en: "/en/404",
        ar: "/ar/404",
      },
    },

    // Additional meta tags
    other: {
      "theme-color": "#6366f1", // Vooksio purple color
      "color-scheme": "light",
      "format-detection": "telephone=no",
    },

    // Verification (if needed)
    verification: {
      google: "your-google-verification-code",
      // other verification codes as needed
    },

    // App-specific metadata
    applicationName: "Vooksio",
    referrer: "origin-when-cross-origin",

    // Authors and creator info
    authors: [{ name: "Vooksio Team", url: "https://vooksio.com" }],
    creator: "Vooksio",
    publisher: "Vooksio",

    // Category
    category: "Technology",
  };
}

// You can also create a static metadata object if you don't need dynamic content
export const staticMetadata: Metadata = {
  title: {
    default: "Page Not Found | Vooksio",
    template: "%s | Vooksio",
  },
  description:
    "Sorry, the page you're looking for doesn't exist. Explore our software development services, technical education, and product consulting solutions.",
  keywords: [
    "404",
    "page not found",
    "software development",
    "web development",
    "technical education",
    "product consulting",
  ],

  openGraph: {
    title: "Page Not Found | Vooksio",
    description:
      "Sorry, the page you're looking for doesn't exist. Explore our software development services and solutions.",
    type: "website",
    siteName: "Vooksio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Vooksio",
    description:
      "Sorry, the page you're looking for doesn't exist. Explore our software development services and solutions.",
  },

  robots: {
    index: false,
    follow: true,
    noarchive: true,
  },

  other: {
    "theme-color": "#6366f1",
  },
};

// JSON-LD structured data for 404 pages
export const generate404JsonLd = (locale: string) => {
  const isArabic = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isArabic ? "الصفحة غير موجودة" : "Page Not Found",
    description: isArabic
      ? "الصفحة التي تبحث عنها غير موجودة. استكشف خدماتنا الأخرى."
      : "The page you are looking for does not exist. Explore our other services.",
    url: `https://vooksio.com/${locale}/404`,
    inLanguage: locale === "ar" ? "ar-EG" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Vooksio",
      url: "https://vooksio.com",
      description: isArabic
        ? "حلول تطوير البرمجيات والتعليم التقني"
        : "Software development and technical education solutions",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isArabic ? "الرئيسية" : "Home",
          item: `https://vooksio.com/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isArabic ? "صفحة غير موجودة" : "Page Not Found",
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "Vooksio",
      url: "https://vooksio.com",
      logo: "https://vooksio.com/images/logo.png",
      sameAs: ["https://twitter.com/vooksio", "https://linkedin.com/company/vooksio", "https://github.com/vooksio"],
    },
  };
};
