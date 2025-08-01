import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Lightbulb, Code, BookOpen, Building, Globe, ArrowRight, Users, Target, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export function Audience() {
  const t = useTranslations("audience");
  const statsLocales = t.raw("stats") as Array<{
    number: string;
    label: string;
    description: string;
  }>;

  const audiencesLocales = t.raw("audiences") as Array<{
    title: string;
    description: string;
    needs: string[];
    ctaText: string;
  }>;
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-[#007BFF]" />,
      ...statsLocales[0],
    },
    {
      icon: <Target className="w-6 h-6 text-[#32D6A0]" />,
      ...statsLocales[1],
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FF715B]" />,
      ...statsLocales[2],
    },
  ];

  const audiences = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#FF715B]" />,
      color: "from-[#FF715B]/10 to-[#FF715B]/5",
      borderColor: "border-[#FF715B]/20",
      ...audiencesLocales[0],
    },
    {
      icon: <Code className="w-8 h-8 text-[#007BFF]" />,
      color: "from-[#007BFF]/10 to-[#007BFF]/5",
      borderColor: "border-[#007BFF]/20",
      ...audiencesLocales[1],
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#32D6A0]" />,
      color: "from-[#32D6A0]/10 to-[#32D6A0]/5",
      borderColor: "border-[#32D6A0]/20",
      ...audiencesLocales[2],
    },
    {
      icon: <Building className="w-8 h-8 text-[#1E2A38]" />,
      color: "from-[#1E2A38]/10 to-[#1E2A38]/5",
      borderColor: "border-[#1E2A38]/20",
      ...audiencesLocales[3],
    },
    {
      icon: <Globe className="w-8 h-8 text-[#007BFF]" />,
      color: "from-[#007BFF]/10 to-[#007BFF]/5",
      borderColor: "border-[#007BFF]/20",
      ...audiencesLocales[4],
    },
  ];

  return (
    <section
      id="audience"
      className="py-20 bg-gradient-to-br from-white via-[#F5F7FA]/30 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[rgba(53,10,10,0)]">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#32D6A0] to-[#007BFF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[#FF715B] to-[#32D6A0] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#FF715B]/10 rounded-full border border-[#FF715B]/20 mb-6">
            <Users className="w-4 h-4 text-[#FF715B] mr-2" />
            <span className="text-[#1E2A38] text-sm font-medium">{t("sectionHeader.badge")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E2A38] mb-6">{t("sectionHeader.title")}</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">{t("sectionHeader.description")}</p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F7FA] rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#1E2A38] mb-2">{stat.number}</div>
              <div className="font-semibold text-[#1E2A38] mb-1">{stat.label}</div>
              <div className="text-sm text-[#6B7280]">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br ${audience.color} border ${audience.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  {audience.icon}
                  <ArrowRight className="w-5 h-5 text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl text-[#1E2A38]">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <div className="space-y-4 mb-6">
                  <p className="text-[#6B7280] leading-relaxed">{audience.description}</p>
                  <ul className="space-y-2">
                    {audience.needs.map((need, needIndex) => (
                      <li key={needIndex} className="flex items-center text-sm text-[#1E2A38]">
                        <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mr-3 flex-shrink-0"></div>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#1E2A38]/20 text-[#1E2A38] hover:bg-[#1E2A38] hover:text-white"
                >
                  {audience.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1E2A38] to-[#007BFF] rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t("cta.title")}</h3>
          <p className="text-[#F5F7FA] text-lg mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1E2A38] hover:bg-[#F5F7FA] px-8 py-4">
              {t("cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
