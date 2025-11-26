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
      en: "Build Your App",
      ar: "اصنع تطبيقك",
    },
    subtitle: {
      en: "From Idea to App Store",
      ar: "من الفكرة إلى متجر التطبيقات",
    },
    description: {
      en: "We build apps that users love and businesses depend on. Modern tech, proven results.",
      ar: "نبني تطبيقات يحبها المستخدمون وتعتمد عليها الأعمال. تقنيات حديثة، نتائج مثبتة.",
    },
    hero: {
      en: "Got an app idea? We'll turn it into reality. Fast, reliable, and built to scale.",
      ar: "لديك فكرة تطبيق؟ سنحولها إلى واقع. سريع، موثوق، ومبني للتوسع.",
    },
    features: [
      {
        icon: <Code className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
        title: {
          en: "Clean Code That Lasts",
          ar: "كود نظيف يدوم",
        },
        description: {
          en: "Easy to maintain, debug, and expand when your app grows.",
          ar: "سهل الصيانة والتصحيح والتوسع عندما ينمو تطبيقك.",
        },
      },
      {
        icon: <Zap className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
        title: {
          en: "Lightning Fast",
          ar: "سريع كالبرق",
        },
        description: {
          en: "Your users won't wait. We build apps that load instantly.",
          ar: "مستخدموك لن يَنتظروا. نبني تطبيقات تُحمّل فوراً.",
        },
      },
      {
        icon: <Target className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Grows With You",
          ar: "ينمو معك",
        },
        description: {
          en: "Handle 10 users or 10 million. Your app scales automatically.",
          ar: "تعامل مع 10 مستخدمين أو 10 مليون. تطبيقك يتوسع تلقائياً.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Launch in Weeks, Not Months",
          ar: "أطلق في أسابيع، ليس شهور",
        },
        description: {
          en: "Skip the learning curve. We know what works and ship fast.",
          ar: "تجاوز منحنى التعلم. نحن نعرف ما ينجح ونُسلم بسرعة.",
        },
      },
      {
        title: {
          en: "Save Money on Mistakes",
          ar: "وفّر المال من الأخطاء",
        },
        description: {
          en: "Avoid costly rewrites. We build it right the first time.",
          ar: "تجنب إعادة الكتابة المكلفة. نبنيه بشكل صحيح من المرة الأولى.",
        },
      },
      {
        title: {
          en: "Future-Ready Technology",
          ar: "تقنية جاهزة للمستقبل",
        },
        description: {
          en: "Modern stack that won't become outdated next year.",
          ar: "مجموعة تقنيات حديثة لن تصبح قديمة العام القادم.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Understand Your Vision",
          ar: "نفهم رؤيتك",
        },
        description: {
          en: "What problem are you solving? Who are your users? Let's get clear on the details.",
          ar: "ما المشكلة التي تحلها؟ من هم مستخدموك؟ دعنا نوضح التفاصيل.",
        },
      },
      {
        step: 2,
        title: {
          en: "Plan Your App",
          ar: "نخطط تطبيقك",
        },
        description: {
          en: "Map out features, choose the right tech, and create a timeline that works.",
          ar: "نرسم خريطة الميزات، نختار التقنية المناسبة، وننشئ جدولاً زمنياً يعمل.",
        },
      },
      {
        step: 3,
        title: {
          en: "Build & Test",
          ar: "نبني ونختبر",
        },
        description: {
          en: "Weekly updates, continuous testing. You'll see progress every step of the way.",
          ar: "تحديثات أسبوعية، اختبار مستمر. ستشاهد التقدم في كل خطوة.",
        },
      },
      {
        step: 4,
        title: {
          en: "Launch & Support",
          ar: "نُطلق وندعم",
        },
        description: {
          en: "Go live smoothly and get ongoing support when you need it.",
          ar: "انطلق بسلاسة واحصل على دعم مستمر عندما تحتاجه.",
        },
      },
    ],
    technologies: ["React", "React Native", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker"],
    deliverables: [
      {
        en: "Complete app with source code",
        ar: "تطبيق كامل مع الكود المصدري",
      },
      {
        en: "App store deployment",
        ar: "نشر في متاجر التطبيقات",
      },
      {
        en: "Admin dashboard (if needed)",
        ar: "لوحة تحكم إدارية (عند الحاجة)",
      },
      {
        en: "Documentation & training",
        ar: "التوثيق والتدريب",
      },
      {
        en: "3 months free support",
        ar: "3 أشهر دعم مجاني",
      },
    ],
    pricing: {
      starting: "$8,000",
      description: {
        en: "For a complete mobile or web app",
        ar: "لتطبيق موبايل أو ويب كامل",
      },
    },
  },
  "technical-education": {
    id: "technical-education",
    title: {
      en: "Learn to Code",
      ar: "تعلم البرمجة",
    },
    subtitle: {
      en: "Build Real Apps While Learning",
      ar: "اصنع تطبيقات حقيقية أثناء التعلم",
    },
    description: {
      en: "Skip the tutorials. Learn by building apps that people actually use and love.",
      ar: "تجاوز الدروس التعليمية. تعلم ببناء تطبيقات يستخدمها الناس فعلاً ويحبونها.",
    },
    hero: {
      en: "Tired of tutorial hell? Learn coding by building real apps with expert mentors by your side.",
      ar: "سئمت من جحيم الدروس؟ تعلم البرمجة ببناء تطبيقات حقيقية مع مرشدين خبراء بجانبك.",
    },
    features: [
      {
        icon: <BookOpen className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Real Projects Only",
          ar: "مشاريع حقيقية فقط",
        },
        description: {
          en: "Build apps that solve real problems. No fake to-do lists here.",
          ar: "اصنع تطبيقات تحل مشاكل حقيقية. لا قوائم مهام وهمية هنا.",
        },
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: "var(--vooksio-purple)" }} />,
        title: {
          en: "Personal Code Mentor",
          ar: "مرشد كود شخصي",
        },
        description: {
          en: "Get unstuck fast with 1-on-1 help from experienced developers.",
          ar: "تخلص من العقد بسرعة مع مساعدة فردية من مطورين ذوي خبرة.",
        },
      },
      {
        icon: <Award className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
        title: {
          en: "Job-Ready Skills",
          ar: "مهارات جاهزة للعمل",
        },
        description: {
          en: "Learn what companies actually want, not outdated curriculum.",
          ar: "تعلم ما تريده الشركات فعلاً، ليس مناهج قديمة.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Portfolio That Gets You Hired",
          ar: "معرض أعمال يوظفك",
        },
        description: {
          en: "Show real apps, not practice projects. Employers notice the difference.",
          ar: "اعرض تطبيقات حقيقية، ليس مشاريع تدريبية. أصحاب العمل يلاحظون الفرق.",
        },
      },
      {
        title: {
          en: "Learn Faster, Retain More",
          ar: "تعلم أسرع، احتفظ بأكثر",
        },
        description: {
          en: "Building real things sticks better than watching tutorials.",
          ar: "بناء أشياء حقيقية يعلق أفضل من مشاهدة الدروس.",
        },
      },
      {
        title: {
          en: "Confidence to Build Anything",
          ar: "ثقة لبناء أي شيء",
        },
        description: {
          en: "Once you've built real apps, new projects feel less scary.",
          ar: "بمجرد أن تبني تطبيقات حقيقية، المشاريع الجديدة تبدو أقل رعباً.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Find Your Level",
          ar: "اكتشف مستواك",
        },
        description: {
          en: "Quick assessment to see where you are and where you want to go.",
          ar: "تقييم سريع لرؤية أين أنت وأين تريد أن تذهب.",
        },
      },
      {
        step: 2,
        title: {
          en: "Your Learning Path",
          ar: "مسار التعلم الخاص بك",
        },
        description: {
          en: "Custom curriculum based on your goals. Frontend, backend, or full-stack.",
          ar: "منهج مخصص بناءً على أهدافك. واجهة أمامية، خلفية، أو مكدس كامل.",
        },
      },
      {
        step: 3,
        title: {
          en: "Build Real Apps",
          ar: "اصنع تطبيقات حقيقية",
        },
        description: {
          en: "Work on progressively harder projects with mentor support throughout.",
          ar: "اعمل على مشاريع أصعب تدريجياً مع دعم المرشد طوال الوقت.",
        },
      },
      {
        step: 4,
        title: {
          en: "Get Job Ready",
          ar: "استعد للوظيفة",
        },
        description: {
          en: "Portfolio review, interview prep, and job search guidance.",
          ar: "مراجعة معرض الأعمال، التحضير للمقابلات، وإرشاد البحث عن عمل.",
        },
      },
    ],
    deliverables: [
      {
        en: "Personal learning roadmap",
        ar: "خارطة طريق تعلم شخصية",
      },
      {
        en: "Weekly 1-on-1 mentor sessions",
        ar: "جلسات إرشاد فردية أسبوعية",
      },
      {
        en: "3-5 real apps in your portfolio",
        ar: "3-5 تطبيقات حقيقية في معرض أعمالك",
      },
      {
        en: "Code review and feedback",
        ar: "مراجعة الكود والملاحظات",
      },
      {
        en: "Job search and interview prep",
        ar: "البحث عن عمل والتحضير للمقابلات",
      },
      {
        en: "Certificate of completion",
        ar: "شهادة إتمام",
      },
    ],
    pricing: {
      starting: "$800",
      description: {
        en: "Per month for complete mentorship program",
        ar: "شهرياً لبرنامج الإرشاد الكامل",
      },
    },
  },
  "product-consulting": {
    id: "product-consulting",
    title: {
      en: "Grow Your Product",
      ar: "طوّر منتجك",
    },
    subtitle: {
      en: "From Idea to Market Success",
      ar: "من الفكرة إلى نجاح السوق",
    },
    description: {
      en: "Turn your idea into a product people actually want to buy and use.",
      ar: "حوّل فكرتك إلى منتج يريد الناس شراءه واستخدامه فعلاً.",
    },
    hero: {
      en: "Got a great idea but not sure if it'll work? Let's validate it and build something people actually want.",
      ar: "لديك فكرة رائعة لكن لست متأكداً إن كانت ستنجح؟ دعنا نؤكدها ونبني شيئاً يريده الناس فعلاً.",
    },
    features: [
      {
        icon: <Lightbulb className="w-6 h-6" style={{ color: "var(--vooksio-yellow)" }} />,
        title: {
          en: "Idea Validation",
          ar: "تأكيد الفكرة",
        },
        description: {
          en: "Test if people actually want your product before you build it.",
          ar: "اختبر إذا كان الناس يريدون منتجك فعلاً قبل أن تبنيه.",
        },
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
        title: {
          en: "Know Your Users",
          ar: "اعرف مستخدميك",
        },
        description: {
          en: "Understand who will use your product and what they really need.",
          ar: "افهم من سيستخدم منتجك وما يحتاجونه حقاً.",
        },
      },
      {
        icon: <Target className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
        title: {
          en: "Market Strategy",
          ar: "استراتيجية السوق",
        },
        description: {
          en: "Plan how to reach customers and beat the competition.",
          ar: "خطط كيف تصل للعملاء وتتفوق على المنافسة.",
        },
      },
    ],
    benefits: [
      {
        title: {
          en: "Avoid Expensive Mistakes",
          ar: "تجنب الأخطاء المكلفة",
        },
        description: {
          en: "Don't build something nobody wants. Validate first, build second.",
          ar: "لا تبنِ شيئاً لا يريده أحد. أكّد أولاً، ابنِ ثانياً.",
        },
      },
      {
        title: {
          en: "Find Product-Market Fit Faster",
          ar: "اعثر على ملاءمة المنتج للسوق أسرع",
        },
        description: {
          en: "Get to product-market fit in months, not years.",
          ar: "اصل لملاءمة المنتج للسوق في شهور، ليس سنوات.",
        },
      },
      {
        title: {
          en: "Focus on What Matters",
          ar: "ركز على ما يهم",
        },
        description: {
          en: "Build features users actually want, not what you think they want.",
          ar: "اصنع ميزات يريدها المستخدمون فعلاً، ليس ما تعتقد أنهم يريدونه.",
        },
      },
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Understand the Problem",
          ar: "افهم المشكلة",
        },
        description: {
          en: "What problem are you solving? Is it a real problem people will pay for?",
          ar: "ما المشكلة التي تحلها؟ هل هي مشكلة حقيقية سيدفع الناس لحلها؟",
        },
      },
      {
        step: 2,
        title: {
          en: "Research the Market",
          ar: "ابحث في السوق",
        },
        description: {
          en: "Who are your competitors? What makes you different and better?",
          ar: "من هم منافسوك؟ ما الذي يجعلك مختلفاً وأفضل؟",
        },
      },
      {
        step: 3,
        title: {
          en: "Test Your Assumptions",
          ar: "اختبر افتراضاتك",
        },
        description: {
          en: "Talk to real users, run experiments, gather data.",
          ar: "تحدث مع مستخدمين حقيقيين، أجرِ تجارب، اجمع البيانات.",
        },
      },
      {
        step: 4,
        title: {
          en: "Plan Your Launch",
          ar: "خطط لإطلاقك",
        },
        description: {
          en: "Create a roadmap and strategy to bring your product to market.",
          ar: "أنشئ خارطة طريق واستراتيجية لجلب منتجك للسوق.",
        },
      },
    ],
    deliverables: [
      {
        en: "Market research report",
        ar: "تقرير بحث السوق",
      },
      {
        en: "User persona profiles",
        ar: "ملفات شخصيات المستخدمين",
      },
      {
        en: "Competitive analysis",
        ar: "تحليل المنافسة",
      },
      {
        en: "Product roadmap & strategy",
        ar: "خارطة طريق المنتج والاستراتيجية",
      },
      {
        en: "Go-to-market plan",
        ar: "خطة الوصول للسوق",
      },
      {
        en: "Validation experiment results",
        ar: "نتائج تجارب التأكيد",
      },
    ],
    pricing: {
      starting: "$3,500",
      description: {
        en: "For complete product strategy and validation",
        ar: "لاستراتيجية المنتج والتأكيد الكاملة",
      },
    },
  },
};
