"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(buildWhatsAppUrl({ productName: product.name }), "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <Link href={`/producto/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 mb-3">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

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

          {/* Quick WhatsApp CTA on hover — uses button to avoid nested <a> */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleWhatsAppClick}
              className="block w-full text-center bg-brand-gold-500 text-white text-xs font-accent font-bold uppercase tracking-wider py-2.5 rounded-full hover:bg-brand-gold-600 transition-colors"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      </Link>

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
  );
}
