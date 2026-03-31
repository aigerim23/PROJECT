"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const productImages = [
  "/product1.png",
  "/balka.png",
  "/123456.jpg",
  "/para.jpg",
]

export function ProductsSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
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
    <section id="products" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-4">
              {t.products.title}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-950 leading-[1.2]">
              {t.products.title}
            </h2>
          </div>
          <button
            onClick={scrollToContact}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-medium text-neutral-950 hover:opacity-70 transition-opacity"
          >
            {t.products.requestBtn}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.products.items.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 overflow-hidden transition-all hover:border-neutral-400"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                <Image
                  src={productImages[index]}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-medium text-neutral-950 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                  {product.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-neutral-950 text-white py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  {t.products.requestBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
