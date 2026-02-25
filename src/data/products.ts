import { Product } from "@/components/product/ProductCard";

export const products: Product[] = [
  // === PANTALONES ($1,300) ===
  {
    id: "1",
    slug: "pantalon-skinny-negro-clasico",
    name: "Pantalon Skinny Negro Clasico",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-skinny-negro-1.jpg"],
  },
  {
    id: "2",
    slug: "pantalon-skinny-celeste",
    name: "Pantalon Skinny Celeste",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-celeste-1.jpg"],
  },
  {
    id: "3",
    slug: "pantalon-oscuro-clasico",
    name: "Pantalon Oscuro Clasico",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L"],
    images: ["/images/products/jean-oscuro-1.jpg"],
  },
  {
    id: "4",
    slug: "pantalon-recto-azul",
    name: "Pantalon Recto Azul",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/hero-4.jpg"],
  },
  {
    id: "5",
    slug: "pantalon-negro-con-top-amarillo",
    name: "Pantalon Negro con Top Amarillo",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L"],
    images: ["/images/products/top-amarillo-1.jpg"],
  },
  {
    id: "6",
    slug: "pantalon-oscuro-con-blusa-blanca",
    name: "Pantalon Oscuro con Blusa Blanca",
    price: 1300,
    category: "pantalones",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/top-blanco-1.jpg"],
  },

  // === CONJUNTOS ($2,100) ===
  {
    id: "7",
    slug: "conjunto-deportivo-gris",
    name: "Conjunto Deportivo Gris",
    price: 2100,
    category: "conjuntos",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/conjunto-gris-1.jpg"],
  },
  {
    id: "8",
    slug: "conjunto-casual-negro",
    name: "Conjunto Casual Negro",
    price: 2100,
    category: "conjuntos",
    sizes: ["S", "M", "L"],
    images: ["/images/products/conjunto-beige-1.jpg"],
  },
  {
    id: "9",
    slug: "conjunto-denim-celeste",
    name: "Conjunto Denim Celeste",
    price: 2100,
    category: "conjuntos",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/hero-1.jpg"],
  },
  {
    id: "10",
    slug: "conjunto-deportivo-gris-vino",
    name: "Conjunto Deportivo Gris & Vino",
    price: 2100,
    category: "conjuntos",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/hero-2.jpg"],
  },

  // === MO'MS ($1,899) ===
  {
    id: "11",
    slug: "moms-jean-claro",
    name: "Mom's Jean Claro",
    price: 1899,
    category: "moms",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-wide-leg-1.jpg"],
  },

  // === CAMPANAS ($1,590) ===
  {
    id: "12",
    slug: "campana-minimalist-negro",
    name: "Campana Minimalist Negro",
    price: 1590,
    category: "campanas",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/hero-3.jpg"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(count: number = 4): Product[] {
  return products.slice(0, count);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}
