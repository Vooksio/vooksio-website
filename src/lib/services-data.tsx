import { Award, BookOpen, Code, Lightbulb, Target, Users, Zap } from "lucide-react";

export interface ServiceData {
  id: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  hero: { en: string; ar: string };
  features: Array<{
    icon: React.ReactNode;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
  benefits: Array<{
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
  process: Array<{
    step: number;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
  technologies?: Array<string>;
  deliverables: Array<{ en: string; ar: string }>;
  pricing?: {
    starting: string;
    description: { en: string; ar: string };
  };
}

export const servicesData: Record<string, ServiceData> = {
  "software-engineering": {
    id: "software-engineering",
    title: {
      en: "Software Engineering",
      ar: "هندسة البرمجيات",
    },
    subtitle: {
      en: "Building Scalable Digital Solutions",
      ar: "بناء حلول رقمية قابلة للتوسع",
    },
    description: {
      en: "We create robust, scalable software solutions using modern technologies and best practices.",
      ar: "نقوم بإنشاء حلول برمجية قوية وقابلة للتوسع باستخدام التقنيات الحديثة وأفضل الممارسات.",
    },
    hero: {
      en: "Transform your ideas into powerful, production-ready applications with our expert software engineering services.",
      ar: "حوّل أفكارك إلى تطبيقات قوية وجاهزة للإنتاج مع خدمات هندسة البرمجيات المتخصصة لدينا.",
    },
    features: [
      {
        icon: <Code className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
        title: {
          en: "Modern Architecture",
          ar: "البنية الحديثة",
        },
        description: {
          en: "Clean, maintainable code following industry standards and best practices.",
          ar: "كود نظيف وقابل للصيانة يتبع معايير الصناعة وأفضل الممارسات.",
        },
      },
      {
        icon: <Zap className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
        title: {
          en: "Performance Optimized",
          ar: "محسّن للأداء",
        },
        description: {
          en: "High-performance applications built for speed and efficiency.",
          ar: "تطبيقات عالية الأداء مبنية للسرعة والكفاءة.",
        },
      },
      {
        icon: <Target className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Scalable Solutions",
          ar: "حلول قابلة للتوسع",
        },
        description: {
          en: "Built to grow with your business and handle increased load.",
          ar: "مبنية لتنمو مع أعمالك وتتعامل مع الأحمال المتزايدة.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Reduced Time to Market",
          ar: "تقليل الوقت للوصول للسوق",
        },
        description: {
          en: "Faster development cycles with proven methodologies and experienced team.",
          ar: "دورات تطوير أسرع مع منهجيات مثبتة وفريق ذو خبرة.",
        },
      },
      {
        title: {
          en: "Cost-Effective Development",
          ar: "تطوير فعال التكلفة",
        },
        description: {
          en: "Avoid common pitfalls and technical debt with expert guidance.",
          ar: "تجنب المشاكل الشائعة والديون التقنية مع التوجيه المتخصص.",
        },
      },
      {
        title: {
          en: "Future-Proof Technology",
          ar: "تقنية مقاومة للمستقبل",
        },
        description: {
          en: "Modern tech stack that evolves with industry trends.",
          ar: "مجموعة تقنيات حديثة تتطور مع اتجاهات الصناعة.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Discovery & Planning",
          ar: "الاستكشاف والتخطيط",
        },
        description: {
          en: "Understanding your requirements and creating a detailed project roadmap.",
          ar: "فهم متطلباتك وإنشاء خارطة طريق مفصلة للمشروع.",
        },
      },
      {
        step: 2,
        title: {
          en: "Architecture Design",
          ar: "تصميم البنية",
        },
        description: {
          en: "Designing scalable system architecture and selecting optimal technologies.",
          ar: "تصميم بنية نظام قابلة للتوسع واختيار التقنيات المثلى.",
        },
      },
      {
        step: 3,
        title: {
          en: "Development & Testing",
          ar: "التطوير والاختبار",
        },
        description: {
          en: "Iterative development with continuous testing and quality assurance.",
          ar: "تطوير تكراري مع اختبار مستمر وضمان الجودة.",
        },
      },
      {
        step: 4,
        title: {
          en: "Deployment & Support",
          ar: "النشر والدعم",
        },
        description: {
          en: "Smooth deployment and ongoing maintenance support.",
          ar: "نشر سلس ودعم صيانة مستمر.",
        },
      },
    ],
    technologies: ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL"],
    deliverables: [
      {
        en: "Complete source code with documentation",
        ar: "كود المصدر الكامل مع التوثيق",
      },
      {
        en: "Deployment and hosting setup",
        ar: "إعداد النشر والاستضافة",
      },
      {
        en: "Testing suite and quality assurance",
        ar: "مجموعة اختبارات وضمان الجودة",
      },
      {
        en: "Technical documentation and handover",
        ar: "التوثيق التقني والتسليم",
      },
    ],
    pricing: {
      starting: "$5,000",
      description: {
        en: "Starting price for small to medium applications",
        ar: "السعر الأساسي للتطبيقات الصغيرة إلى المتوسطة",
      },
    },
  },
  "technical-education": {
    id: "technical-education",
    title: {
      en: "Technical Education",
      ar: "التعليم التقني",
    },
    subtitle: {
      en: "Learn by Building Real Projects",
      ar: "تعلم من خلال بناء مشاريع حقيقية",
    },
    description: {
      en: "Hands-on learning programs designed to build practical skills through real-world projects.",
      ar: "برامج تعلم عملية مصممة لبناء مهارات عملية من خلال مشاريع حقيقية.",
    },
    hero: {
      en: "Master modern development skills through our practical, project-based learning approach.",
      ar: "أتقن مهارات التطوير الحديثة من خلال نهجنا العملي في التعلم القائم على المشاريع.",
    },
    features: [
      {
        icon: <BookOpen className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Project-Based Learning",
          ar: "التعلم القائم على المشاريع",
        },
        description: {
          en: "Build real applications while learning fundamental concepts.",
          ar: "ابنِ تطبيقات حقيقية أثناء تعلم المفاهيم الأساسية.",
        },
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: "var(--vooksio-purple)" }} />,
        title: {
          en: "Expert Mentorship",
          ar: "التوجيه المتخصص",
        },
        description: {
          en: "One-on-one guidance from experienced developers.",
          ar: "توجيه فردي من مطورين ذوي خبرة.",
        },
      },
      {
        icon: <Award className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
        title: {
          en: "Industry-Relevant Skills",
          ar: "مهارات متعلقة بالصناعة",
        },
        description: {
          en: "Learn technologies and practices used in modern companies.",
          ar: "تعلم التقنيات والممارسات المستخدمة في الشركات الحديثة.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Portfolio Development",
          ar: "تطوير المحفظة",
        },
        description: {
          en: "Build a strong portfolio of real projects to showcase your skills.",
          ar: "ابنِ محفظة قوية من المشاريع الحقيقية لعرض مهاراتك.",
        },
      },
      {
        title: {
          en: "Career Advancement",
          ar: "التقدم المهني",
        },
        description: {
          en: "Gain skills that directly translate to career opportunities.",
          ar: "اكتسب مهارات تترجم مباشرة إلى فرص مهنية.",
        },
      },
      {
        title: {
          en: "Practical Experience",
          ar: "الخبرة العملية",
        },
        description: {
          en: "Learn through doing, not just theoretical concepts.",
          ar: "تعلم من خلال الممارسة، وليس فقط المفاهيم النظرية.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Skills Assessment",
          ar: "تقييم المهارات",
        },
        description: {
          en: "Evaluate current skill level and identify learning goals.",
          ar: "تقييم مستوى المهارات الحالي وتحديد أهداف التعلم.",
        },
      },
      {
        step: 2,
        title: {
          en: "Custom Learning Path",
          ar: "مسار تعلم مخصص",
        },
        description: {
          en: "Design personalized curriculum based on your goals and experience.",
          ar: "تصميم منهج شخصي بناءً على أهدافك وخبرتك.",
        },
      },
      {
        step: 3,
        title: {
          en: "Hands-On Projects",
          ar: "مشاريع عملية",
        },
        description: {
          en: "Work on progressively complex real-world projects.",
          ar: "العمل على مشاريع حقيقية متزايدة التعقيد.",
        },
      },
      {
        step: 4,
        title: {
          en: "Portfolio & Certification",
          ar: "المحفظة والشهادة",
        },
        description: {
          en: "Complete portfolio review and receive completion certification.",
          ar: "مراجعة شاملة للمحفظة وتلقي شهادة الإنجاز.",
        },
      },
    ],
    deliverables: [
      {
        en: "Personalized learning curriculum",
        ar: "منهج تعلم شخصي",
      },
      {
        en: "Weekly mentorship sessions",
        ar: "جلسات توجيه أسبوعية",
      },
      {
        en: "Portfolio of completed projects",
        ar: "محفظة من المشاريع المكتملة",
      },
      {
        en: "Certificate of completion",
        ar: "شهادة إتمام",
      },
      {
        en: "Career guidance and job search support",
        ar: "التوجيه المهني ودعم البحث عن عمل",
      },
    ],
    pricing: {
      starting: "$500",
      description: {
        en: "Per month for comprehensive learning program",
        ar: "شهرياً لبرنامج التعلم الشامل",
      },
    },
  },
  "product-consulting": {
    id: "product-consulting",
    title: {
      en: "Product Consulting",
      ar: "استشارات المنتجات",
    },
    subtitle: {
      en: "Strategic Product Development Guidance",
      ar: "توجيه استراتيجي لتطوير المنتجات",
    },
    description: {
      en: "Expert guidance to help you build products that users love and businesses thrive on.",
      ar: "توجيه متخصص لمساعدتك في بناء منتجات يحبها المستخدمون وتزدهر بها الأعمال.",
    },
    hero: {
      en: "Turn your product vision into reality with strategic consulting and hands-on guidance.",
      ar: "حوّل رؤية منتجك إلى واقع مع الاستشارات الاستراتيجية والتوجيه العملي.",
    },
    features: [
      {
        icon: <Lightbulb className="w-6 h-6" style={{ color: "var(--vooksio-yellow)" }} />,
        title: {
          en: "Product Strategy",
          ar: "استراتيجية المنتج",
        },
        description: {
          en: "Define product vision, roadmap, and go-to-market strategy.",
          ar: "تحديد رؤية المنتج وخارطة الطريق واستراتيجية الوصول للسوق.",
        },
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
        title: {
          en: "User Experience Design",
          ar: "تصميم تجربة المستخدم",
        },
        description: {
          en: "Create intuitive and engaging user experiences.",
          ar: "إنشاء تجارب مستخدم بديهية وجذابة.",
        },
      },
      {
        icon: <Target className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Market Validation",
          ar: "التحقق من السوق",
        },
        description: {
          en: "Validate product-market fit before full development.",
          ar: "التحقق من ملاءمة المنتج للسوق قبل التطوير الكامل.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Reduced Risk",
          ar: "تقليل المخاطر",
        },
        description: {
          en: "Make informed decisions based on market research and user feedback.",
          ar: "اتخذ قرارات مدروسة بناءً على أبحاث السوق وملاحظات المستخدمين.",
        },
      },
      {
        title: {
          en: "Faster Product-Market Fit",
          ar: "ملاءمة أسرع للمنتج والسوق",
        },
        description: {
          en: "Identify and address market needs more effectively.",
          ar: "تحديد ومعالجة احتياجات السوق بشكل أكثر فعالية.",
        },
      },
      {
        title: {
          en: "Optimized Resources",
          ar: "الموارد المحسنة",
        },
        description: {
          en: "Focus development efforts on features that matter most.",
          ar: "تركيز جهود التطوير على الميزات الأكثر أهمية.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Product Discovery",
          ar: "اكتشاف المنتج",
        },
        description: {
          en: "Deep dive into your vision, market, and user needs.",
          ar: "غوص عميق في رؤيتك والسوق واحتياجات المستخدمين.",
        },
      },
      {
        step: 2,
        title: {
          en: "Strategy Development",
          ar: "تطوير الاستراتيجية",
        },
        description: {
          en: "Create comprehensive product strategy and roadmap.",
          ar: "إنشاء استراتيجية شاملة للمنتج وخارطة طريق.",
        },
      },
      {
        step: 3,
        title: {
          en: "Validation & Testing",
          ar: "التحقق والاختبار",
        },
        description: {
          en: "Test assumptions and validate concepts with real users.",
          ar: "اختبار الافتراضات والتحقق من المفاهيم مع مستخدمين حقيقيين.",
        },
      },
      {
        step: 4,
        title: {
          en: "Implementation Support",
          ar: "دعم التنفيذ",
        },
        description: {
          en: "Guide the implementation and launch of your product.",
          ar: "توجيه تنفيذ وإطلاق منتجك.",
        },
      },
    ],
    deliverables: [
      {
        en: "Product strategy document",
        ar: "وثيقة استراتيجية المنتج",
      },
      {
        en: "User research and persona development",
        ar: "بحث المستخدمين وتطوير الشخصيات",
      },
      {
        en: "Product roadmap and feature prioritization",
        ar: "خارطة طريق المنتج وترتيب أولوية الميزات",
      },
      {
        en: "Market analysis and competitive research",
        ar: "تحليل السوق والبحث التنافسي",
      },
      {
        en: "Go-to-market strategy",
        ar: "استراتيجية الوصول للسوق",
      },
    ],
    pricing: {
      starting: "$2,500",
      description: {
        en: "For comprehensive product consulting engagement",
        ar: "لمشاركة استشارية شاملة للمنتج",
      },
    },
  },
};
