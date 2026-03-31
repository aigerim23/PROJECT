"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay restricted by browser
      })
    }
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
  }

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-950">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1920"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/trane.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.1] tracking-tight text-balance">
            {t.hero.title}
            <br />
            <span className="text-neutral-400">{t.hero.titleHighlight}</span>
          </h1>
          
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("products")}
              className="inline-flex items-center justify-center bg-white text-neutral-950 px-8 py-4 text-base font-medium transition-all hover:bg-neutral-100 active:scale-[0.98]"
            >
              {t.hero.catalogBtn}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-base font-medium transition-all hover:bg-blue-800"
            >
              {t.hero.learnMoreBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
