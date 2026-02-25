"use client";

import { motion } from "framer-motion";

const videos = [
  { src: "/videos/lookbook-1.mp4" },
  { src: "/videos/lookbook-2.mp4" },
  { src: "/videos/lookbook-3.mp4" },
  { src: "/videos/promo-1.mp4" },
  { src: "/videos/promo-2.mp4" },
];

export default function VideoLookbook() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-500 mb-3">
            Mira Nuestros Estilos
          </p>
          <h2 className="heading-lg">Lookbook en Video</h2>
        </motion.div>

        {/* Horizontal scroll on mobile, 5-col grid on desktop */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:overflow-visible sm:pb-0 sm:grid sm:grid-cols-5 scrollbar-hide">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100 shrink-0 w-[55vw] sm:w-auto snap-center"
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
