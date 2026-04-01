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
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
          {[
            { value: "5+", label: t.about.stats.years, bg: "bg-blue-200" },
            { value: "450+", label: t.about.stats.clients, bg: "bg-blue-200" },
            { value: "15k+", label: t.about.stats.parts, bg: "bg-blue-200" },
            { value: "24/7", label: t.about.stats.support, bg: "bg-blue-200" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`border border-neutral-200 p-6 md:p-8 text-center ${stat.bg} hover:bg-white hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-3xl md:text-5xl font-medium text-neutral-950 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div {...fadeInUp}>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-950 leading-[1.2]">
              {t.about.title}
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            {/* whitespace-pre-line позволяет делать переносы строк через \n в файле перевода */}
            <p className="text-neutral-600 text-sm md:text-base lg:text-lg leading-relaxed mb-8 border-l-2 border-blue-600 pl-6 whitespace-pre-line">
              {t.about.description}
            </p>

            <div className="space-y-3">
              {[
                { icon: Award, text: t.about.feature1, color: "bg-blue-600" },
                { icon: Truck, text: t.about.feature2, color: "bg-slate-700" },
                { icon: Handshake, text: t.about.feature3, color: "bg-blue-800" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white border border-neutral-200 hover:border-blue-300 transition-colors shadow-sm"
                >
                  <div className={`w-10 h-10 ${feature.color} flex items-center justify-center shrink-0`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-neutral-800 font-medium text-xs md:text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
