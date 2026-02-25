import { Product } from "@/components/product/ProductCard";

export const products: Product[] = [
  {
    id: "1",
    slug: "jean-skinny-negro-clasico",
    name: "Jean Skinny Negro Clasico",
    price: 2800,
    category: "jeans",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-skinny-negro-1.jpg"],
    isNew: true,
  },
  {
    id: "2",
    slug: "jean-wide-leg-claro",
    name: "Jean Wide Leg Claro",
    price: 3200,
    category: "jeans",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-wide-leg-1.jpg"],
    isNew: true,
  },
  {
    id: "3",
    slug: "top-amarillo-lace-up",
    name: "Top Amarillo Lace Up",
    price: 1500,
    category: "tops",
    sizes: ["S", "M", "L"],
    images: ["/images/products/top-amarillo-1.jpg"],
  },
  {
    id: "4",
    slug: "conjunto-deportivo-gris-vino",
    name: "Conjunto Deportivo Gris & Vino",
    price: 4500,
    salePrice: 3600,
    category: "conjuntos",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/conjunto-gris-1.jpg"],
    isOnSale: true,
  },
  {
    id: "5",
    slug: "jean-skinny-celeste",
    name: "Jean Skinny Celeste",
    price: 2800,
    category: "jeans",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/jean-celeste-1.jpg"],
  },
  {
    id: "6",
    slug: "jean-wide-leg-oscuro",
    name: "Jean Wide Leg Oscuro",
    price: 3200,
    category: "jeans",
    sizes: ["S", "M", "L"],
    images: ["/images/products/jean-oscuro-1.jpg"],
    isNew: true,
  },
  {
    id: "7",
    slug: "top-blanco-basico",
    name: "Top Blanco Basico",
    price: 1200,
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/top-blanco-1.jpg"],
  },
  {
    id: "8",
    slug: "conjunto-casual-beige",
    name: "Conjunto Casual Beige",
    price: 4200,
    salePrice: 3400,
    category: "conjuntos",
    sizes: ["S", "M", "L"],
    images: ["/images/products/conjunto-beige-1.jpg"],
    isOnSale: true,
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
