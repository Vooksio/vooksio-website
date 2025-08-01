"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "../ui/button";

export function Header({ params }: { params: Promise<{ locale: string }> }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-input-bg/95 to-white/95 backdrop-blur-sm border-b border-[#007BFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#services" className="text-dark-navy hover:text-[#007BFF] transition-colors">
              {t("services")}
            </a>
            <a href="#about" className="text-dark-navy hover:text-[#007BFF] transition-colors">
              {t("about")}
            </a>
            <a href="#audience" className="text-dark-navy hover:text-[#007BFF] transition-colors">
              {t("whoWeHelp")}
            </a>
            <a href="#contact" className="text-dark-navy hover:text-[#007BFF] transition-colors">
              {t("contact")}
            </a>
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <LocaleSwitcher />
            <Button
              variant="outline"
              className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
              outlineColor="primary"
              rounded="full"
            >
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <LocaleSwitcher />
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-dark-navy" /> : <Menu className="h-6 w-6 text-dark-navy" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-dark-navy hover:text-[#007BFF] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-dark-navy hover:text-[#007BFF] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </a>
              <a
                href="#audience"
                className="block px-3 py-2 text-dark-navy hover:text-[#007BFF] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("whoWeHelp")}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-dark-navy hover:text-[#007BFF] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </a>
              <div className="px-3 py-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                  outlineColor="primary"
                  rounded="full"
                >
                  {t("getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
