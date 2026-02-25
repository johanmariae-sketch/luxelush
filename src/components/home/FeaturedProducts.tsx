"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-500 mb-3">
              Lo Mas Buscado
            </p>
            <h2 className="heading-lg">Productos Destacados</h2>
          </div>
          <Link
            href="/catalogo"
            className="text-sm font-body font-medium text-brand-gold-500 hover:text-brand-gold-600 transition-colors underline underline-offset-4"
          >
            Ver Todo
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
