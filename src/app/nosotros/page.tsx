"use client";

import { motion } from "framer-motion";
import { Heart, Star, Truck, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const values = [
  {
    icon: Heart,
    title: "Pasión por la Moda",
    description:
      "Seleccionamos cada prenda pensando en resaltar la belleza y confianza de nuestras clientas.",
  },
  {
    icon: Star,
    title: "Calidad Premium",
    description:
      "Ropa de excelente calidad que combina comodidad, estilo y durabilidad en cada pieza.",
  },
  {
    icon: Truck,
    title: "Envío Rápido",
    description:
      "Brindamos una experiencia de compra fácil, rápida y confiable desde tu casa.",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description:
      "Atención personalizada por WhatsApp para que te sientas segura con tu pedido.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-neutral-900 to-brand-black" />

        {/* Decorative gold lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-brand-gold-500" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-brand-gold-500" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-brand-gold-500" />
        </div>

        <div className="relative max-w-4xl mx-auto section-padding py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-accent text-xs font-bold uppercase tracking-[0.4em] text-brand-gold-500">
              Quiénes Somos
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
              Moda Femenina con{" "}
              <span className="text-brand-gold-500 italic">Propósito</span>
            </h1>
            <div className="w-16 h-px bg-brand-gold-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Text Section */}
      <section className="bg-brand-cream py-20 sm:py-28">
        <div className="max-w-3xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8"
          >
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-brand-black leading-relaxed">
              En <span className="text-brand-gold-500 italic">Luxelush</span>{" "}
              ofrecemos ropa femenina moderna, cómoda y de excelente calidad
              para mujeres que quieren verse seguras y con estilo.
            </p>
            <div className="w-12 h-px bg-brand-gold-300 mx-auto" />
            <p className="font-body text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Seleccionamos cada prenda pensando en resaltar la belleza y
              confianza de nuestras clientas, brindando una experiencia de
              compra fácil, rápida y confiable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-500 mb-3">
              Nuestros Valores
            </p>
            <h2 className="heading-lg">Por Qué Elegirnos</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold-500 transition-colors duration-300">
                  <item.icon
                    size={24}
                    className="text-brand-gold-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-black mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-2xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="heading-md">
              ¿Lista para descubrir tu{" "}
              <span className="text-brand-gold-500 italic">nuevo estilo</span>?
            </h2>
            <p className="font-body text-neutral-500">
              Escríbenos por WhatsApp y te ayudamos a encontrar la prenda
              perfecta para ti.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppUrl({
                  customMessage:
                    "¡Hola! Me gustaría conocer más sobre sus productos.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
