import { ArrowLeft, Check, Code, Users, BookOpen, Lightbulb, Target, Zap, Clock, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { servicesData } from "@/lib/services-data";
import { LinkButton } from "../LinkButton";
interface ServicePageProps {
  currentService?: string;
  language: "ar" | "en";
}

export const ServicePage: React.FC<ServicePageProps> = ({ currentService, language }) => {
  const t = useTranslations("services");

  if (!currentService || !servicesData[currentService]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1E2A38] mb-4">Service not found</h1>
          <LinkButton href={`/${language}`} className="text-blue-500 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            {t("backToHome")}
          </LinkButton>
        </div>
      </div>
    );
  }

  const service = servicesData[currentService];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-[#F5F7FA]/95 to-white/95 backdrop-blur-sm border-b border-[#007BFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/Vooksio-Logo.png"
                alt="Vooksio Logo"
                width={140}
                height={50}
                priority
                className="h-[50px] object-cover"
              />
            </div>
            <LinkButton
              href={`/${language}`}
              variant="outline"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t("backToHome")}</span>
            </LinkButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden vooksio-animated-bg py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--vooksio-emerald)] to-[var(--vooksio-orange)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1E2A38]">{service.title[language]}</h1>
              <p className="text-xl lg:text-2xl text-[#6B7280] max-w-3xl mx-auto">{service.subtitle[language]}</p>
            </div>
            <p className="text-lg text-[#6B7280] max-w-4xl mx-auto leading-relaxed">{service.hero[language]}</p>
            <Button size="lg" className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow">
              {language === "en" ? "Get Started" : "ابدأ الآن"}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">
              {language === "en" ? "Key Features" : "الميزات الرئيسية"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="vooksio-card p-8 rounded-xl text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1E2A38] mb-4">{feature.title[language]}</h3>
                <p className="text-[#6B7280] leading-relaxed">{feature.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F7FA]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">{language === "en" ? "Benefits" : "الفوائد"}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E2A38] mb-4">{benefit.title[language]}</h3>
                <p className="text-[#6B7280] leading-relaxed">{benefit.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">{language === "en" ? "Our Process" : "عمليتنا"}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--vooksio-emerald)] to-[var(--vooksio-cyan)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1E2A38] mb-4">{step.title[language]}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (if available) */}
      {service.technologies && (
        <section className="py-20 bg-[#F5F7FA]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">
                {language === "en" ? "Technologies We Use" : "التقنيات التي نستخدمها"}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-[var(--vooksio-purple)]/20 rounded-full text-[#1E2A38] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">
              {language === "en" ? "What You Get" : "ما ستحصل عليه"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[var(--vooksio-emerald)] flex-shrink-0" />
                <span className="text-[#6B7280]">{deliverable[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--vooksio-purple)]/5 to-[var(--vooksio-cyan)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-8">
            {language === "en" ? "Ready to Get Started?" : "مستعد للبدء؟"}
          </h2>
          {service.pricing && (
            <div className="mb-8">
              <p className="text-2xl font-bold text-[var(--vooksio-purple)] mb-2">
                {language === "en" ? "Starting at " : "يبدأ من "}
                {service.pricing.starting}
              </p>
              <p className="text-[#6B7280]">{service.pricing.description[language]}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow">
              {language === "en" ? "Get in Touch" : "تواصل معنا"}
            </Button>

            <LinkButton variant="outline" className="px-8 py-4" href={`/${language}`}>
              {language === "en" ? "Explore Other Services" : "استكشف خدمات أخرى"}
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};
