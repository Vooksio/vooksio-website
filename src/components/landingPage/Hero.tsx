import { Button } from "../ui/button";
import { ArrowRight, Play, Code, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden vooksio-animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 rounded-full vooksio-border-gradient backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" style={{ color: "var(--vooksio-emerald)" }} />
              <span className="text-dark-navy text-sm font-medium">{t("badge")}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-dark-navy leading-tight">
                {t("headline")}
                <span className="block vooksio-text-gradient">{t("headlineAccent")}</span>
              </h1>
              <p className="text-xl text-muted-gray leading-relaxed max-w-xl">{t("description")}</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Code className="w-5 h-5 mr-2" style={{ color: "var(--vooksio-purple)" }} />
                <span className="text-dark-navy">{t("point1")}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" style={{ color: "var(--vooksio-cyan)" }} />
                <span className="text-dark-navy">{t("point2")}</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" style={{ color: "var(--vooksio-orange)" }} />
                <span className="text-dark-navy">{t("point3")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-vooksio-primary px-8 py-4 text-lg vooksio-hover-shadow">
                {t("ctaPrimary")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="btn-vooksio-secondary px-8 py-4 text-lg vooksio-hover-shadow">
                <Play className="mr-2 h-5 w-5" /> {t("ctaSecondary")}
              </Button>
            </div>

            {/* <div className="pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-muted-gray mb-4">{t("socialProof")}</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark-navy">50+</div>
                  <div className="text-sm text-muted-gray">{t("appsBuilt")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark-navy">200+</div>
                  <div className="text-sm text-muted-gray">{t("devsMentored")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark-navy">98%</div>
                  <div className="text-sm text-muted-gray">{t("successRate")}</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative z-10 vooksio-card rounded-2xl vooksio-shadow p-8">
              <div className="bg-dark-navy rounded-lg p-4 font-mono text-sm" dir="ltr">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--vooksio-pink)" }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--vooksio-emerald)" }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--vooksio-purple)" }}></div>
                  </div>
                  <span className="text-muted-gray ml-4">app.tsx</span>
                </div>
                <div style={{ color: "var(--vooksio-emerald)" }}>
                  <span style={{ color: "var(--vooksio-pink)" }}>function</span>{" "}
                  <span className="text-white">BuildAmazingApp</span> <span className="text-muted-gray">() {`{`}</span>
                </div>
                <div className="text-muted-gray ml-4">
                  <span style={{ color: "var(--vooksio-orange)" }}>return</span>{" "}
                  <span style={{ color: "var(--vooksio-cyan)" }}>&lt;YourDream</span>
                </div>
                <div className="text-muted-gray ml-8">
                  <span style={{ color: "var(--vooksio-lime)" }}>reality</span>=
                  <span style={{ color: "var(--vooksio-yellow)" }}>{`{true}`}</span>
                </div>
                <div className="text-muted-gray ml-8">
                  <span style={{ color: "var(--vooksio-lime)" }}>speed</span>=
                  <span style={{ color: "var(--vooksio-yellow)" }}>&quot;lightning&quot;</span>
                </div>
                <div className="text-muted-gray ml-4">
                  <span style={{ color: "var(--vooksio-purple)" }}>/&gt;</span>
                </div>
                <div className="text-muted-gray">{`}`}</div>
              </div>

              <div className="mt-6 space-y-3">
                <div
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ background: "rgba(16, 185, 129, 0.1)" }}
                >
                  <span className="text-dark-navy">{t("buildStatus")}</span>
                  <span style={{ color: "var(--vooksio-emerald)" }} className="font-medium">
                    {t("value1")}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ background: "rgba(139, 92, 246, 0.1)" }}
                >
                  <span className="text-dark-navy">{t("deployment")}</span>
                  <span style={{ color: "var(--vooksio-purple)" }} className="font-medium">
                    {t("value2")}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl"
              style={{
                background: "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
              }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full blur-3xl"
              style={{
                background: "linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(249, 115, 22, 0.2))",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
