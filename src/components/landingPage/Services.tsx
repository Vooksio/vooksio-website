import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code2, GraduationCap, Target, Smartphone, Globe, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { ServerActionLink } from "../ui-actions/ServerActionLink";
import { RefreshLink } from "../ui-actions/RefreshLink";
type Specialty = {
  title: string;
  description: string;
  features: string[];
};
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
      icon: <Code2 className="w-8 h-8 text-primary-blue" />,
      ...servicesLocales[0],
      color: "from-primary-blue/10 to-primary-blue/5",
      borderColor: "border-primary-blue/20",
      id: "software-engineering",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-success-green" />,
      ...servicesLocales[1],
      color: "from-success-green/10 to-success-green/5",
      borderColor: "border-success-green/20",
      id: "technical-education",
    },
    {
      icon: <Target className="w-8 h-8 text-warning-orange" />,
      ...servicesLocales[2],
      color: "from-warning-orange/10 to-warning-orange/5",
      borderColor: "border-warning-orange/20",
      id: "product-consulting",
    },
  ];

  const icons = [
    <Globe key="globe" className="w-6 h-6 text-primary-blue" />,
    <Smartphone key="smartphone" className="w-6 h-6 text-success-green" />,
    <BookOpen key="book" className="w-6 h-6 text-warning-orange" />,
    <Users key="users" className="w-6 h-6 text-dark-navy" />,
  ];

  const specialties = specialtiesLocales.map((spec: Specialty, index: number) => ({
    icon: icons[index],
    ...spec,
  }));
  const locale = useLocale();

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
        <div className="text-center mb-16 space-y-3.5">
          <Badge variant="primary" rounded={"full"} size={"lg"}>
            <Lightbulb className="w-4 h-4 text-primary-blue" />
            <span className="text-dark-navy text-sm font-medium">{t("sectionTitle")}</span>
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-dark-navy mb-6">{t("mainTitle")}</h2>
          <p className="text-xl text-muted-gray max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index + service.title}
              className={`relative overflow-hidden bg-gradient-to-br ${service.color} border ${service.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <ArrowRight className="w-5 h-5 text-muted-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl text-dark-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-gray leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex + feature} className="flex items-center text-sm text-dark-navy gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ServerActionLink
                  variant="outline"
                  className="w-full mt-4 border-dark-navy/20 text-dark-navy hover:bg-dark-navy hover:text-white"
                  href={`/${locale}/services/${service.id}`}
                >
                  {t("learnMore")}
                </ServerActionLink>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-input-bg rounded-2xl p-8 lg:p-12 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-navy mb-4">{t("specialtiesTitle")}</h3>
            <p className="text-muted-gray max-w-2xl mx-auto">{t("specialtiesDescription")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, index) => (
              <div
                key={spec.title + index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-input-bg rounded-lg mb-4">
                  {spec.icon}
                </div>
                <h4 className="font-semibold text-dark-navy mb-2">{spec.title}</h4>
                <p className="text-sm text-muted-gray">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <RefreshLink href={`/${locale}/contact-us`} variant="primary">
              {t("startProject")}
              <ArrowRight className={cn("h-5 w-5", locale === "ar" ? "mr-2 rotate-180" : "ml-2")} />
            </RefreshLink>
          </div>
        </div>
      </div>
    </section>
  );
}
