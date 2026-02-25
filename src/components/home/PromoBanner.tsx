"use client";

import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-neutral-900 to-brand-black" />

      {/* Decorative gold lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-brand-gold-500" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-brand-gold-500" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-brand-gold-500" />
      </div>

      <div className="relative max-w-7xl mx-auto section-padding py-20 sm:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="font-accent text-xs font-bold uppercase tracking-[0.4em] text-brand-gold-500">
            Coleccion Exclusiva
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            Tu Estilo,<br />
            <span className="text-brand-gold-500 italic">Tu Confianza</span>
          </h2>
          <p className="text-neutral-400 font-body text-base sm:text-lg max-w-xl mx-auto">
            Piezas disenadas para mujeres que marcan tendencia.
            Haz tu pedido directo por WhatsApp.
          </p>
          <div className="pt-4">
            <a
              href={buildWhatsAppUrl({
                customMessage:
                  "Hola! Estoy interesada en la coleccion exclusiva. Me gustaria ver las opciones disponibles.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Comprar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
