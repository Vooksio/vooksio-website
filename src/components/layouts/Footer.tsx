import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Mail, Github, Twitter, Linkedin, ArrowRight, Code2, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { RefreshLink } from "../ui-actions/RefreshLink";

export function Footer() {
  const t = useTranslations("footer");

  const links = {
    services: [
      { name: t("links.services.softwareEngineering"), href: "#services" },
      { name: t("links.services.technicalEducation"), href: "#services" },
      { name: t("links.services.productConsulting"), href: "#services" },
      { name: t("links.services.mvpDevelopment"), href: "#services" },
    ],
    company: [
      { name: t("links.company.aboutUs"), href: "#about" },
      { name: t("links.company.ourValues"), href: "#about" },
      { name: t("links.company.caseStudies"), href: "#" },
      { name: t("links.company.blog"), href: "#" },
    ],
    resources: [
      { name: t("links.resources.learningPaths"), href: "#" },
      { name: t("links.resources.codeExamples"), href: "#" },
      { name: t("links.resources.documentation"), href: "#" },
      { name: t("links.resources.community"), href: "#" },
    ],
  };

  const features = [
    {
      icon: <Code2 className="w-5 h-5" style={{ color: "var(--vooksio-cyan)" }} />,
      title: t("features.buildFirst.title"),
      description: t("features.buildFirst.description"),
    },
    {
      icon: <BookOpen className="w-5 h-5" style={{ color: "var(--vooksio-emerald)" }} />,
      title: t("features.learnByDoing.title"),
      description: t("features.learnByDoing.description"),
    },
    {
      icon: <Users className="w-5 h-5" style={{ color: "var(--vooksio-orange)" }} />,
      title: t("features.expertMentorship.title"),
      description: t("features.expertMentorship.description"),
    },
  ];
  const locale = useLocale();
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Light Background with Subtle Brand Color Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-input-bg via-white to-[#F8F9FA]"></div>
      <div className="absolute inset-0 vooksio-animated-bg opacity-30"></div>

      {/* Subtle Background Elements with Brand Colors */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, var(--vooksio-purple), var(--vooksio-cyan))" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, var(--vooksio-emerald), var(--vooksio-lime))" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, var(--vooksio-pink), var(--vooksio-orange))" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, var(--vooksio-indigo), var(--vooksio-purple))" }}
        ></div>
      </div>

      <div className="relative z-10 text-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Brand & CTA */}
              <div className="space-y-8">
                {/* Logo & Description */}
                <div>
                  <div className="flex items-center mb-6">
                    <Image
                      src="/Vooksio-Logo.png"
                      alt="Vooksio Logo"
                      width={140}
                      height={50}
                      priority
                      className="h-[50px] object-cover"
                    />
                  </div>
                  <p className="text-muted-gray text-lg leading-relaxed max-w-md">{t("description")}</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {feature.icon}
                      <div>
                        <span className="font-medium text-dark-navy">{feature.title}</span>
                        <span className="text-muted-gray ml-2">- {feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Newsletter Signup with Light Theme */}
                <div className="vooksio-card rounded-lg p-6 backdrop-blur-sm border border-[#E5E7EB] bg-white/80">
                  <h3 className="font-semibold text-dark-navy mb-2">{t("newsletter.title")}</h3>
                  <p className="text-muted-gray text-sm mb-4">{t("newsletter.description")}</p>
                  <div className="flex items-center gap-2">
                    <Input
                      type="email"
                      placeholder={t("newsletter.placeholder")}
                      className="flex-1 px-4 py-2 bg-input-bg border border-[#E5E7EB] rounded-lg text-dark-navy placeholder-muted-gray focus:outline-none focus:border-[var(--vooksio-cyan)] focus:ring-2 focus:ring-[var(--vooksio-cyan)]/20 transition-all"
                    />
                    <Button size="icon" className="size-9 btn-vooksio-primary">
                      <ArrowRight className={cn("h-4 w-4", locale === "ar" ? "rotate-180" : "")} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Links */}
              <div className="grid sm:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h3 className="font-semibold text-dark-navy mb-4">{t("links.services.title")}</h3>
                  <ul className="space-y-3">
                    {links.services.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-gray hover:text-[var(--vooksio-cyan)] transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-semibold text-dark-navy mb-4">{t("links.company.title")}</h3>
                  <ul className="space-y-3">
                    {links.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-gray hover:text-[var(--vooksio-emerald)] transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-semibold text-dark-navy mb-4">{t("links.resources.title")}</h3>
                  <ul className="space-y-3">
                    {links.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-gray hover:text-[var(--vooksio-orange)] transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-[#E5E7EB] py-12">
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark-navy mb-4">{t("contact.title")}</h3>
                <p className="text-muted-gray max-w-2xl mx-auto">{t("contact.description")}</p>
              </div>

              <div className="flex justify-center">
                <RefreshLink
                  href={`/${locale}/contact-us`}
                  className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
                >
                  <Mail className="h-5 w-5" />
                  {t("contact.button")}
                </RefreshLink>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#E5E7EB] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-muted-gray text-sm">© 2025 Vooksio. {t("copyright")}</div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-gray hover:text-[var(--vooksio-purple)] transition-colors"
                  aria-label={t("ariaLabels.github")}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-gray hover:text-[var(--vooksio-cyan)] transition-colors"
                  aria-label={t("ariaLabels.twitter")}
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-gray hover:text-[var(--vooksio-emerald)] transition-colors"
                  aria-label={t("ariaLabels.linkedin")}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@vooksio.com"
                  className="text-muted-gray hover:text-[var(--vooksio-orange)] transition-colors"
                  aria-label={t("ariaLabels.email")}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
