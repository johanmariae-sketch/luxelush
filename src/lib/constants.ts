export const BRAND = {
  name: "LuxeLush",
  fullName: "LuxeLush SRL",
  tagline: "Estilo Atemporal, Creado con Intencion",
  description:
    "Disenada con intencion, nuestras colecciones combinan siluetas refinadas, telas de calidad y estetica moderna.",
  whatsappNumber: "18096321220",
  whatsappDefaultMessage:
    "Hola! Me gustaria obtener mas informacion sobre sus productos.",
  instagram: "https://www.instagram.com/exitofashioncollectionusa/",
  facebook: "https://facebook.com/luxelush",
  tiktok: "https://tiktok.com/@luxelush",
  email: "info@luxelush.com",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Nosotros", href: "/nosotros" },
] as const;

export const CATEGORIES = [
  { name: "Pantalones", slug: "pantalones", description: "Cortes que resaltan tu figura", image: "/images/categories/jeans.jpg" },
  { name: "Conjuntos", slug: "conjuntos", description: "Looks completos listos para usar", image: "/images/categories/conjuntos.jpg" },
  { name: "Mo'ms", slug: "moms", description: "Estilo mom jean, comodo y moderno", image: "/images/categories/nuevo.jpg" },
  { name: "Campanas", slug: "campanas", description: "Pierna ancha con estilo campana", image: "/images/categories/tops.jpg" },
] as const;
