"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Mail, Github, Twitter, Linkedin, ArrowRight, Code2, BookOpen, Users, Share2, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { RefreshLink } from "../ui-actions/RefreshLink";
import { sendGAEvent } from "@next/third-parties/google";
import { ar } from "zod/locales";
// Social Share Buttons Component integrated into Footer
function SocialShareButtons({ url, title, className = "" }: { url: string; title: string; className?: string }) {
  const t = useTranslations("footer");
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:text-[var(--vooksio-cyan)]",
      ariaLabel: t("ariaLabels.shareTwitter"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[var(--vooksio-emerald)]",
      ariaLabel: t("ariaLabels.shareLinkedIn"),
    },
  ];

  const handleShareClick = (platform: string, url: string) => {
    // Send GA event for social sharing
    sendGAEvent("event", "social_share", {
      method: platform.toLowerCase(),
      content_type: "website",
      item_id: "vooksio_main_site",
    });

    // Open the share URL
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Share2 className="w-5 h-5 text-muted-gray" />
      <span className="text-sm text-muted-gray font-medium">{t("share.text")}</span>
      {shareLinks.map((social) => (
        <button
          key={social.name}
          onClick={() => handleShareClick(social.name, social.url)}
          className={`text-muted-gray ${social.color} transition-colors p-2 rounded-full hover:bg-white/50`}
          aria-label={social.ariaLabel}
        >
          <social.icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  // Get current page URL and title for sharing
  const [mounted, setMounted] = React.useState(false);
  const pageTitle = t("share.title") || "Vooksio - Software Engineering & Technical Education";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentUrl = mounted ? window.location.href : "";

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

  // Social media links for footer
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/vooksio",
      color: "hover:text-[var(--vooksio-purple)]",
      ariaLabel: t("ariaLabels.github"),
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   href: "https://twitter.com/vooksio",
    //   color: "hover:text-[var(--vooksio-cyan)]",
    //   ariaLabel: t("ariaLabels.twitter"),
    // },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   href: "https://linkedin.com/company/vooksio",
    //   color: "hover:text-[var(--vooksio-emerald)]",
    //   ariaLabel: t("ariaLabels.linkedin"),
    // },
    {
      name:"Facebook",
      icon:Facebook,
      href:"https://www.facebook.com/people/Vooksio/61579309577376",
      color:"hover:text-[var(--vooksio-blue)]",
      ariaLabel:t("ariaLabels.facebook"),
    },
    // instagram
    {
      name:"Instagram",
      icon:Instagram,
      href:"https://www.instagram.com/vooksio/",
      
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@vooksio.com",
      color: "hover:text-[var(--vooksio-orange)]",
      ariaLabel: t("ariaLabels.email"),
    },
  ];

  const handleSocialClick = (platform: string) => {
    sendGAEvent("event", "social_follow", {
      event_category: "social_media",
      event_label: platform.toLowerCase(),
      value: 1,
    });
  };
  const handleContactClick = () => {
    sendGAEvent("event", "contact_cta_click", {
      event_category: "lead_generation",
      event_label: "footer_contact_button",
      value: 1,
    });
  };
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
                <div className="vooksio-card rounded-lg p-6 backdrop-blur-sm border border-switch-background bg-white/80">
                  <h3 className="font-semibold text-dark-navy mb-2">{t("newsletter.title")}</h3>
                  <p className="text-muted-gray text-sm mb-4">{t("newsletter.description")}</p>
                  <div className="flex items-center gap-2">
                    <Input
                      type="email"
                      placeholder={t("newsletter.placeholder")}
                      className="flex-1 px-4 py-2 bg-input-bg border border-switch-background rounded-lg text-dark-navy placeholder-muted-gray focus:outline-none focus:border-[var(--vooksio-cyan)] focus:ring-2 focus:ring-[var(--vooksio-cyan)]/20 transition-all"
                    />
                    <Button
                      size="icon"
                      className="size-9 btn-vooksio-primary"
                      aria-label={t("newsletter.subscribeToNewsletter")}
                    >
                      <ArrowRight
                        className={cn("h-4 w-4", locale === "ar" ? "rotate-180" : "")}
                        suppressHydrationWarning
                      />
                    </Button>
                  </div>
                </div>

                {/* Social Share Section - NEW */}
                <div className="vooksio-card rounded-lg p-6 backdrop-blur-sm border border-switch-background bg-white/80">
                  <h3 className="font-semibold text-dark-navy mb-4">{t("share.sectionTitle") || "Share Vooksio"}</h3>
                  {currentUrl && <SocialShareButtons url={currentUrl} title={pageTitle} className="justify-start" />}
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
                          className="!text-muted-gray hover:text-[var(--vooksio-cyan)] transition-colors text-sm"
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
          <div className="border-t border-switch-background py-12">
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark-navy mb-4">{t("contact.title")}</h3>
                <p className="text-muted-gray max-w-2xl mx-auto">{t("contact.description")}</p>
              </div>

              <div className="flex justify-center">
                <RefreshLink
                  href={`/${locale}/contact-us`}
                  onClick={handleContactClick}
                  className="btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
                  aria-label="Contact Vooksio for software engineering services"
                  title="Get in touch with our team"
                >
                  <Mail className="h-5 w-5" />
                  {t("contact.button")}
                </RefreshLink>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-switch-background py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-muted-gray text-sm">© 2025 Vooksio. {t("copyright")}</div>

              {/* Social Links - Updated for consistency */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <RefreshLink
                    key={social.name}
                    href={social.href}
                    onClick={() => handleSocialClick(social.name)}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    className={`text-muted-gray ${social.color} transition-colors p-1 rounded-full hover:bg-white/20`}
                    aria-label={social.ariaLabel}
                    disableRefresh={true}
                  >
                    <social.icon className="h-5 w-5" />
                  </RefreshLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
