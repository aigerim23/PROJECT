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

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
          {[
            { value: "5+", label: t.about.stats.years },
            { value: "450+", label: t.about.stats.clients },
            { value: "15k+", label: t.about.stats.parts },
            { value: "24/7", label: t.about.stats.support },
          ].map((stat, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="border border-neutral-200 p-6 md:p-8 text-center bg-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300"
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

                <motion.div
  {...fadeInUp}
  className="text-center max-w-4xl mx-auto mb-16"
>
  <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">
    {t.about.label}
  </p>

  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-950 leading-tight">
    {t.about.title}
  </h2>
</motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div {...fadeInUp} className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">
             
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-950 leading-tight mb-6">
            
            </h2>

            {/* DESCRIPTION */}
            <div className="border-l-2 border-blue-600 pl-6 space-y-4">
              {t.about.description.map((text: string, index: number) => (
                <p
                  key={index}
                  className={`leading-relaxed ${
                    index === 0
                      ? "text-lg md:text-xl text-neutral-800 font-medium"
                      : "text-base md:text-lg text-neutral-600"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-xl lg:ml-auto"
          >
            <div className="space-y-4">
              {[
                { icon: Award, text: t.about.feature1, color: "bg-blue-600" },
                { icon: Truck, text: t.about.feature2, color: "bg-slate-700" },
                { icon: Handshake, text: t.about.feature3, color: "bg-blue-800" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-white border border-neutral-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className={`w-12 h-12 ${feature.color} flex items-center justify-center shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <span className="text-neutral-800 font-medium text-sm md:text-base">
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