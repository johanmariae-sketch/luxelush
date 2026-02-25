"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

const heroImages = [
  { src: "/images/products/hero-1.jpg", alt: "Modelo con jeans", rotate: -3 },
  { src: "/images/products/hero-2.jpg", alt: "Modelo con top", rotate: 1 },
  { src: "/images/products/hero-3.jpg", alt: "Modelo con conjunto", rotate: -2 },
  { src: "/images/products/hero-4.jpg", alt: "Modelo streetwear", rotate: 3 },
];

export default function HeroBanner() {
  return (
    <section className="bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding pt-16 pb-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="heading-xl mb-6">{BRAND.tagline}</h1>
          <p className="text-neutral-500 font-body text-base sm:text-lg leading-relaxed">
            {BRAND.description}
          </p>
        </motion.div>

        {/* Overlapping Tilted Product Photos — STITCH-inspired */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-12"
        >
          <div className="flex items-end justify-center -space-x-4 sm:-space-x-6 md:-space-x-8">
            {heroImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: img.rotate }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.15,
                  ease: "easeOut",
                }}
                className="relative w-40 sm:w-48 md:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 hover:z-10 transition-all duration-500 cursor-pointer"
                style={{
                  zIndex: i === 1 || i === 2 ? 5 : 1,
                  marginTop: i % 2 === 0 ? "20px" : "0px",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-cover"
                  priority={i < 2}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Bar — STITCH-inspired */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-neutral-100"
        >
          {/* Happy Customers */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-brand-gold-300 flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-brand-gold-600">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm font-body text-neutral-600">
              <strong className="text-brand-black">500+</strong> Clientes Felices
            </span>
          </div>

          {/* CTA */}
          <Link href="/catalogo" className="btn-dark text-sm">
            Descubrir Mas
          </Link>

          {/* Quality Badge */}
          <span className="text-sm font-body text-neutral-600">
            100% Calidad Premium
          </span>
        </motion.div>
      </div>
    </section>
  );
}
