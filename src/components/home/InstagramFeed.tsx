"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { BRAND } from "@/lib/constants";

const instagramImages = [
  { src: "/images/instagram/insta-1.jpg", alt: "Outfit denim completo" },
  { src: "/images/instagram/insta-2.jpg", alt: "Look casual con jeans" },
  { src: "/images/instagram/insta-3.jpg", alt: "Conjunto deportivo rojo" },
  { src: "/images/instagram/insta-4.jpg", alt: "Jeans bordados" },
  { src: "/images/instagram/insta-5.jpg", alt: "Wide leg con top blanco" },
  { src: "/images/instagram/insta-6.jpg", alt: "Jeans flare clasicos" },
];

export default function InstagramFeed() {
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
            Siguenos
          </p>
          <h2 className="heading-lg mb-4">@luxelush</h2>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-brand-gold-500 transition-colors"
          >
            <Instagram size={16} />
            Seguir en Instagram
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {instagramImages.map((img, i) => (
            <motion.a
              key={i}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
