export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Levanta Cola",
    slug: "pantalones",
    description: "Skinny jeans que resaltan tu figura",
    image: "/images/products/levanta-cola-1.jpg",
  },
  {
    name: "Conjuntos",
    slug: "conjuntos",
    description: "Looks completos listos para usar",
    image: "/images/products/set-conjunto-1.jpg",
  },
  {
    name: "Mo'ms",
    slug: "moms",
    description: "Estilo mom jean, cómodo y moderno",
    image: "/images/products/mom-jeans-3.jpg",
  },
  {
    name: "Campanas",
    slug: "campanas",
    description: "Pierna ancha con estilo campana",
    image: "/images/products/campana-1.jpg",
  },
];
