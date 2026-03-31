"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <PartnersSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
