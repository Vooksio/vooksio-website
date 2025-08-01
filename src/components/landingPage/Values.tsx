import { Heart, BookOpen, MessageSquare, Target, Zap, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

export function Values() {
  const t = useTranslations("values");

  const valuesLocales = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  const traitsLocales = t.raw("traits") as Array<{
    title: string;
    description: string;
  }>;

  const values = valuesLocales.map((item, index) => {
    const base = [
      {
        icon: <Target className="w-8 h-8 text-[#007BFF]" />,
        color: "from-[#007BFF]/10 to-[#007BFF]/5",
        borderColor: "border-[#007BFF]/20",
      },
      {
        icon: <BookOpen className="w-8 h-8 text-[#32D6A0]" />,
        color: "from-[#32D6A0]/10 to-[#32D6A0]/5",
        borderColor: "border-[#32D6A0]/20",
      },
      {
        icon: <MessageSquare className="w-8 h-8 text-[#FF715B]" />,
        color: "from-[#FF715B]/10 to-[#FF715B]/5",
        borderColor: "border-[#FF715B]/20",
      },
      {
        icon: <Heart className="w-8 h-8 text-[#1E2A38]" />,
        color: "from-[#1E2A38]/10 to-[#1E2A38]/5",
        borderColor: "border-[#1E2A38]/20",
      },
      {
        icon: <Zap className="w-8 h-8 text-[#007BFF]" />,
        color: "from-[#007BFF]/10 to-[#007BFF]/5",
        borderColor: "border-[#007BFF]/20",
      },
    ];

    return {
      ...item,
      ...base[index % base.length],
    };
  });

  const principles = t.raw("principles") as string[];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#F5F7FA] via-[#F5F7FA]/50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#007BFF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#32D6A0] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF715B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#32D6A0]/10 rounded-full border border-[#32D6A0]/20 mb-6">
            <Heart className="w-4 h-4 text-[#32D6A0] mr-2" />
            <span className="text-[#1E2A38] text-sm font-medium">{t("sectionTitle")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E2A38] mb-6">{t("mainTitle")}</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br ${value.color} border ${value.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <CardContent className="p-8">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#1E2A38] mb-4">{value.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Persona Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[#E5E7EB]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1E2A38] mb-6">{t("approachTitle")}</h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">{t("approachP1")}</p>
              <p className="text-[#6B7280] leading-relaxed mb-8">{t("approachP2")}</p>

              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#32D6A0] mr-3 flex-shrink-0" />
                    <span className="text-[#1E2A38]">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Personality Traits */}
              <div className="space-y-4">
                {traitsLocales.map((trait, index) => {
                  const colors = [
                    { bg: "#007BFF", border: "#007BFF" },
                    { bg: "#32D6A0", border: "#32D6A0" },
                    { bg: "#FF715B", border: "#FF715B" },
                    { bg: "#1E2A38", border: "#1E2A38" },
                  ];
                  const color = colors[index % colors.length];
                  return (
                    <div
                      key={index}
                      className={`bg-[${color.bg}]/10 rounded-lg p-6 border border-[${color.border}]/20`}
                    >
                      <h4 className="font-semibold text-[#1E2A38] mb-2">{trait.title}</h4>
                      <p className="text-sm text-[#6B7280]">{trait.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#007BFF]/20 to-[#32D6A0]/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
