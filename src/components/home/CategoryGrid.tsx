"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";

export default function CategoryGrid() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-500 mb-3">
            Colecciones
          </p>
          <h2 className="heading-lg">Explora Nuestras Categorias</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/catalogo?categoria=${cat.slug}`}
                className="group block"
              >
                <div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm font-body">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
