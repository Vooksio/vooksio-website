import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Code2, GraduationCap, Target, Smartphone, Globe, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";

export function Services() {
  const t = useTranslations("services");
  const servicesLocales = t.raw("services") as Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  const specialtiesLocales = t.raw("specialties") as Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-[#007BFF]" />,
      ...servicesLocales[0],
      color: "from-[#007BFF]/10 to-[#007BFF]/5",
      borderColor: "border-[#007BFF]/20",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#32D6A0]" />,
      ...servicesLocales[1],
      color: "from-[#32D6A0]/10 to-[#32D6A0]/5",
      borderColor: "border-[#32D6A0]/20",
    },
    {
      icon: <Target className="w-8 h-8 text-[#FF715B]" />,
      ...servicesLocales[2],
      color: "from-[#FF715B]/10 to-[#FF715B]/5",
      borderColor: "border-[#FF715B]/20",
    },
  ];

  const specialties = specialtiesLocales.map((spec: any, index: number) => ({
    icon: [
      <Globe className="w-6 h-6 text-[#007BFF]" />,
      <Smartphone className="w-6 h-6 text-[#32D6A0]" />,
      <BookOpen className="w-6 h-6 text-[#FF715B]" />,
      <Users className="w-6 h-6 text-[#1E2A38]" />,
    ][index],
    ...spec,
  }));

  return (
    <section id="services" className="py-20 vooksio-animated-bg relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-32 right-32 w-48 h-48 rounded-full blur-3xl"
          style={{ background: "linear-gradient(to bottom right, var(--vooksio-purple), var(--vooksio-cyan))" }}
        />
        <div
          className="absolute bottom-32 left-32 w-40 h-40 rounded-full blur-3xl"
          style={{ background: "linear-gradient(to bottom right, var(--vooksio-pink), var(--vooksio-orange))" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#007BFF]/10 rounded-full border border-[#007BFF]/20 mb-6">
            <Lightbulb className="w-4 h-4 text-[#007BFF] mr-2" />
            <span className="text-[#1E2A38] text-sm font-medium">{t("sectionTitle")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E2A38] mb-6">{t("mainTitle")}</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br ${service.color} border ${service.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <ArrowRight className="w-5 h-5 text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl text-[#1E2A38]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#6B7280] leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#1E2A38]">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-[#1E2A38]/20 text-[#1E2A38] hover:bg-[#1E2A38] hover:text-white"
                >
                  {t("learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-[#F5F7FA] rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1E2A38] mb-4">{t("specialtiesTitle")}</h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto">{t("specialtiesDescription")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, index) => (
              <div key={index + spec} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5F7FA] rounded-lg mb-4">
                  {spec.icon}
                </div>
                <h4 className="font-semibold text-[#1E2A38] mb-2">{spec.title}</h4>
                <p className="text-sm text-[#6B7280]">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#007BFF] hover:bg-[#1E2A38] text-white px-8 py-4">
              {t("startProject")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
