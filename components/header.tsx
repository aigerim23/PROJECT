"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-neutral-950" : "text-white"
              }`}
            >
              Astana Railway Company
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { key: "about", label: t.nav.about },
              { key: "products", label: t.nav.products },
              { key: "partners", label: t.nav.partners },
              { key: "contact", label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-950"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className={`flex items-center text-sm font-medium ${
                isScrolled ? "text-neutral-600" : "text-white/80"
              }`}
            >
              <button
                onClick={() => setLanguage("ru")}
                className={`px-2 py-1 transition-colors ${
                  language === "ru"
                    ? isScrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : ""
                }`}
              >
                RU
              </button>
              <span className="opacity-40">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 transition-colors ${
                  language === "en"
                    ? isScrolled
                      ? "text-neutral-950"
                      : "text-white"
                    : ""
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2.5 text-sm font-medium transition-all ${
                isScrolled
                  ? "bg-neutral-950 text-white hover:bg-neutral-800"
                  : "bg-white text-neutral-950 hover:bg-neutral-100"
              }`}
            >
              {t.nav.contactBtn}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language Switcher Mobile */}
            <div
              className={`flex items-center text-xs font-medium ${
                isScrolled ? "text-neutral-600" : "text-white/80"
              }`}
            >
              <button
                onClick={() => setLanguage("ru")}
                className={language === "ru" ? (isScrolled ? "text-neutral-950" : "text-white") : ""}
              >
                RU
              </button>
              <span className="mx-1 opacity-40">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? (isScrolled ? "text-neutral-950" : "text-white") : ""}
              >
                EN
              </button>
            </div>

            {/* Burger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-neutral-950" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-neutral-100 px-4 py-6">
          <nav className="flex flex-col gap-1">
            {[
              { key: "about", label: t.nav.about },
              { key: "products", label: t.nav.products },
              { key: "partners", label: t.nav.partners },
              { key: "contact", label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="w-full text-left px-4 py-3 text-neutral-950 font-medium hover:bg-neutral-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-neutral-950 text-white py-3.5 font-medium hover:bg-neutral-800 transition-colors"
            >
              {t.nav.contactBtn}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
