export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Pantalones",
    slug: "pantalones",
    description: "Cortes que resaltan tu figura",
    image: "/images/categories/jeans.jpg",
  },
  {
    name: "Conjuntos",
    slug: "conjuntos",
    description: "Looks completos listos para usar",
    image: "/images/categories/conjuntos.jpg",
  },
  {
    name: "Mo'ms",
    slug: "moms",
    description: "Estilo mom jean, cómodo y moderno",
    image: "/images/categories/nuevo.jpg",
  },
  {
    name: "Campanas",
    slug: "campanas",
    description: "Pierna ancha con estilo campana",
    image: "/images/categories/tops.jpg",
  },
];
