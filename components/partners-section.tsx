"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

const partners = [
  { name: "KTZ EXPRESS", logo: "/ktz-express.png" },
  { name: "PTC HOLDING", logo: "/logo-ptc.png" },
  { name: "АО НК КТЖ", logo: "/ktz_logo.png" },
  { name: "KAMKOR VAGON", logo: "/kamkor.png" },
]

export function PartnersSection() {
  const { t } = useLanguage()

  return (
    <section id="partners" className="py-16 md:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 font-medium text-center mb-10 md:mb-12">
          {t.partners.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              // Увеличили высоту контейнера с h-16 до h-24
              className="relative w-full h-24 transition-transform duration-300 flex items-center justify-center hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                // Увеличили max-w с 160px до 220px. 
                // Свойства max-h-full заставят логотип занять всю высоту h-24
                className="max-h-full max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}