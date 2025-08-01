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
      icon: <Code2 className="w-8 h-8 text-primary-blue" />,
      ...servicesLocales[0],
      color: "from-primary-blue/10 to-primary-blue/5",
      borderColor: "border-primary-blue/20",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-success-green" />,
      ...servicesLocales[1],
      color: "from-success-green/10 to-success-green/5",
      borderColor: "border-success-green/20",
    },
    {
      icon: <Target className="w-8 h-8 text-warning-orange" />,
      ...servicesLocales[2],
      color: "from-warning-orange/10 to-warning-orange/5",
      borderColor: "border-warning-orange/20",
    },
  ];

  const specialties = specialtiesLocales.map((spec: any, index: number) => ({
    icon: [
      <Globe className="w-6 h-6 text-primary-blue" />,
      <Smartphone className="w-6 h-6 text-success-green" />,
      <BookOpen className="w-6 h-6 text-warning-orange" />,
      <Users className="w-6 h-6 text-dark-navy" />,
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
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary-blue mr-2" />
            <span className="text-dark-navy text-sm font-medium">{t("sectionTitle")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-dark-navy mb-6">{t("mainTitle")}</h2>
          <p className="text-xl text-muted-gray max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
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
                  <ArrowRight className="w-5 h-5 text-muted-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl text-dark-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-gray leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-sm text-dark-navy">
                      <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-dark-navy/20 text-dark-navy hover:bg-dark-navy hover:text-white"
                >
                  {t("learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-input-bg rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-navy mb-4">{t("specialtiesTitle")}</h3>
            <p className="text-muted-gray max-w-2xl mx-auto">{t("specialtiesDescription")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, index) => (
              <div key={index + spec} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-input-bg rounded-lg mb-4">
                  {spec.icon}
                </div>
                <h4 className="font-semibold text-dark-navy mb-2">{spec.title}</h4>
                <p className="text-sm text-muted-gray">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="primary">
              {t("startProject")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
