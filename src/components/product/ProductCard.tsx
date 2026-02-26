"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  images: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [zoomOpen, setZoomOpen] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(buildWhatsAppUrl({ productName: product.name, productSlug: product.slug }), "_blank");
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group"
      >
        {/* Image */}
        <div
          onClick={handleImageClick}
          className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 mb-3 cursor-zoom-in"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Zoom icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
              <ZoomIn size={14} className="text-brand-black" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-brand-black text-white text-[10px] font-accent font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Nuevo
              </span>
            )}
            {product.isOnSale && (
              <span className="bg-brand-rose text-white text-[10px] font-accent font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Oferta
              </span>
            )}
          </div>

          {/* Quick WhatsApp CTA on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleWhatsAppClick}
              className="block w-full text-center bg-brand-gold-500 text-white text-xs font-accent font-bold uppercase tracking-wider py-2.5 rounded-full hover:bg-brand-gold-600 transition-colors"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-body text-sm font-semibold text-brand-black group-hover:text-brand-gold-500 transition-colors truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            {product.isOnSale && product.salePrice ? (
              <>
                <span className="font-body text-sm font-bold text-brand-rose">
                  RD${product.salePrice.toFixed(0)}
                </span>
                <span className="font-body text-xs text-neutral-400 line-through">
                  RD${product.price.toFixed(0)}
                </span>
              </>
            ) : (
              <span className="font-body text-sm font-bold text-brand-black">
                RD${product.price.toFixed(0)}
              </span>
            )}
          </div>
          <div className="flex gap-1 pt-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-[10px] font-body text-neutral-400 border border-neutral-200 px-1.5 py-0.5 rounded"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setZoomOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setZoomOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Zoomable image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg aspect-[3/4] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full overflow-auto touch-pinch-zoom">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={800}
                  height={1067}
                  className="w-full h-auto object-contain select-none"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Product info below image */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="font-body text-white text-sm font-semibold">
                {product.name}
              </p>
              <p className="font-body text-brand-gold-500 text-sm font-bold">
                RD${product.price.toLocaleString()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
