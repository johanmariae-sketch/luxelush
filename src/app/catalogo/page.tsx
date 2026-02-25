"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { CATEGORIES } from "@/lib/constants";

const filters = [
  { label: "Todos", slug: "todos" },
  ...CATEGORIES.map((c) => ({ label: c.name, slug: c.slug })),
];

export default function CatalogoPage() {
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-500 mb-3">
              Nuestra Coleccion
            </p>
            <h1 className="heading-lg">Catalogo</h1>
          </motion.div>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={`font-accent text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${
                  active === f.slug
                    ? "bg-brand-black text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center font-body text-neutral-400 py-20">
              No hay productos en esta categoria aun.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
