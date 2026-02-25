export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Jeans",
    slug: "jeans",
    description: "Cortes que resaltan tu figura",
    image: "/images/categories/jeans.jpg",
  },
  {
    name: "Tops",
    slug: "tops",
    description: "Estilos unicos para cada ocasion",
    image: "/images/categories/tops.jpg",
  },
  {
    name: "Conjuntos",
    slug: "conjuntos",
    description: "Looks completos listos para usar",
    image: "/images/categories/conjuntos.jpg",
  },
  {
    name: "Lo Nuevo",
    slug: "nuevo",
    description: "Ultimas tendencias recien llegadas",
    image: "/images/categories/nuevo.jpg",
  },
];
