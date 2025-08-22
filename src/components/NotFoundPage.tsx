import { ArrowLeft, Home, Search, Code, Compass } from "lucide-react";
import SubPageHeader from "./layouts/SubPageHeader";
import { useLocale } from "next-intl";
import { ServerActionLink } from "./ui-actions/ServerActionLink";
import { useSwitchData } from "@/app/hooks/useSwitchData";
import { RefreshLink } from "./ui-actions/RefreshLink";

export function NotFoundPage() {
  const language = useLocale() as "en" | "ar";
  const { switchData } = useSwitchData();
  const suggestions = [
    {
      icon: <Home className="w-5 h-5" style={{ color: "var(--vooksio-cyan)" }} />,
      title: {
        en: "Go to Homepage",
        ar: "اذهب للصفحة الرئيسية",
      },
      description: {
        en: "Start fresh from our main page",
        ar: "ابدأ من جديد من صفحتنا الرئيسية",
      },
      action: `/${language}`,
    },
    {
      icon: <Code className="w-5 h-5" style={{ color: "var(--vooksio-emerald)" }} />,
      title: {
        en: "View Our Services",
        ar: "اطلع على خدماتنا",
      },
      description: {
        en: "Explore our software development services",
        ar: "استكشف خدمات تطوير البرمجيات لدينا",
      },
      action: `/${language}#services`,
    },
    {
      icon: <Search className="w-5 h-5" style={{ color: "var(--vooksio-orange)" }} />,
      title: {
        en: "Contact Us",
        ar: "تواصل معنا",
      },
      description: {
        en: "Let us help you find what you need",
        ar: "دعنا نساعدك في العثور على ما تحتاجه",
      },
      action: `/${language}/contact-us`,
    },
  ];

  const features = [
    {
      title: {
        en: "Software Engineering",
        ar: "هندسة البرمجيات",
      },
      color: "var(--vooksio-cyan)",
    },
    {
      title: {
        en: "Technical Education",
        ar: "التعليم التقني",
      },
      color: "var(--vooksio-emerald)",
    },
    {
      title: {
        en: "Product Consulting",
        ar: "استشارات المنتجات",
      },
      color: "var(--vooksio-orange)",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <SubPageHeader />

      {/* Main Content */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 vooksio-animated-bg"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-[var(--vooksio-emerald)] to-[var(--vooksio-lime)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-br from-[var(--vooksio-pink)] to-[var(--vooksio-orange)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[var(--vooksio-indigo)] to-[var(--vooksio-purple)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Error Display */}
          <div className="text-center space-y-8 mb-16">
            {/* Large 404 Number */}
            <div className="relative">
              <h1 className="text-9xl lg:text-[12rem] font-bold opacity-20 text-[#1E2A38] select-none">404</h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass
                  className="w-20 h-20 lg:w-24 lg:h-24 text-[var(--vooksio-purple)] animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 -mt-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1E2A38]">
                {switchData("الصفحة غير موجودة", "Page Not Found")}
              </h2>
              <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                {switchData(
                  "يبدو أن هذه الصفحة سلكت طريقاً مختلفاً. دعنا نعيدك إلى المسار الصحيح لبناء شيء مذهل!",
                  "Looks like this page took a different route. Let's get you back on track to build something amazing!"
                )}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <RefreshLink
                variant="outline"
                className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
                href={`/${language}`}
              >
                <Home className=" h-5 w-5" />
                {switchData("اذهب للرئيسية", "Go Home")}
              </RefreshLink>
            </div>
          </div>

          {/* Suggestion Cards */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                {language === "en" ? "What would you like to do?" : "ماذا تود أن تفعل؟"}
              </h3>
              <p className="text-[#6B7280]">
                {switchData(
                  "إليك بعض الاقتراحات لمساعدتك في العثور على ما تبحث عنه",
                  "Here are some suggestions to help you find what you're looking for"
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {suggestions.map((suggestion, index) => (
                <ServerActionLink
                  key={index}
                  href={suggestion.action}
                  variant="none"
                  className={`relative overflow-hidden group h-full`}
                >
                  <div
                    key={index}
                    className="vooksio-card p-8 rounded-xl text-center cursor-pointer transition-all duration-300 hover:scale-105 w-full"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-white to-[#F5F7FA] rounded-full flex items-center justify-center border border-[var(--vooksio-purple)]/10">
                        {suggestion.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-[#1E2A38] mb-4">{suggestion.title[language]}</h4>
                    <p className="text-[#6B7280] leading-relaxed mb-6">{suggestion.description[language]}</p>
                    <RefreshLink
                      href={suggestion.action}
                      variant="outline"
                      className="w-full border-[#1E2A38]/20 text-[#1E2A38] hover:bg-[#1E2A38] hover:text-white"
                    >
                      {switchData("اذهب هناك", "Go there")}
                    </RefreshLink>
                  </div>
                </ServerActionLink>
              ))}
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-20 pt-16 border-t border-[#E5E7EB]">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                {switchData("اكتشف ما نقوم به", "Discover What We Do")}
              </h3>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                {switchData(
                  "بما أنك هنا، تعرف على المزيد حول خدماتنا وكيف يمكننا مساعدتك في بناء منتجات رقمية مذهلة",
                  "While you're here, learn more about our services and how we can help you build amazing digital products"
                )}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/80 border rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
                  style={{ borderColor: feature.color + "20" }}
                >
                  <span className="font-medium text-sm" style={{ color: feature.color }}>
                    {feature.title[language]}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <ServerActionLink
                variant="outline"
                className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
                href={`/${language}#services`}
              >
                {switchData("استكشف جميع الخدمات", "Explore All Services")}
                <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
              </ServerActionLink>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-20 bg-gradient-to-r from-[var(--vooksio-purple)]/5 to-[var(--vooksio-cyan)]/5 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
              {language === "en" ? "Still Need Help?" : "ما زلت تحتاج مساعدة؟"}
            </h3>
            <p className="text-[#6B7280] mb-8 max-w-2xl mx-auto">
              {switchData(
                "Our team is here to help! Reach out to us and we'll make sure you find exactly what you're looking for.",
                "فريقنا هنا لمساعدتك! تواصل معنا وسنتأكد من أنك تجد ما تبحث عنه بالضبط."
              )}
            </p>
            <ServerActionLink
              variant="outline"
              className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
              href={`/${language}/contact-us`}
            >
              <Search className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
              {switchData("تواصل مع الدعم", "Contact Support")}
            </ServerActionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
