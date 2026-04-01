"use client"

import { Award, Truck, Handshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function AboutSection() {
  const { t } = useLanguage()

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Сетка статистики (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
          {[
            { value: "5+", label: t.about.stats.years, bg: "bg-blue-50" },
            { value: "450+", label: t.about.stats.clients, bg: "bg-blue-50" },
            { value: "15k+", label: t.about.stats.parts, bg: "bg-blue-50" },
            { value: "24/7", label: t.about.stats.support, bg: "bg-blue-50" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`border border-neutral-100 p-6 md:p-8 text-center ${stat.bg} hover:bg-white hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl md:text-5xl font-medium text-neutral-950 mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Основной контент: Заголовок и Описание */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <motion.div {...fadeInUp}>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-950 leading-[1.1]">
              {t.about.title}
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="text-neutral-600 text-base md:text-lg leading-relaxed border-l-4 border-blue-600 pl-6 whitespace-pre-line">
              {t.about.description}
            </div>
          </motion.div>
        </div>

        {/* 3. Преимущества (Features) в ряд под текстом */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 bg-neutral-50 border border-neutral-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm group"
            >
              <div className={`w-12 h-12 ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-neutral-900 font-semibold text-sm md:text-base leading-snug">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
