export const BRAND = {
  name: "LuxeLush",
  fullName: "LuxeLush SRL",
  tagline: "Estilo Atemporal, Creado con Intención",
  description:
    "Diseñada con intención, nuestras colecciones combinan siluetas refinadas, telas de calidad y estética moderna.",
  whatsappNumber: "18096321220",
  whatsappDefaultMessage:
    "¡Hola! Me gustaría obtener más información sobre sus productos.",
  instagram: "https://www.instagram.com/luxelush.srl/",
  facebook: "https://facebook.com/luxelush",
  tiktok: "https://tiktok.com/@luxelush",
  email: "info@luxelush.com",
  location: {
    address: "Santo Domingo, República Dominicana",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d-69.939683!3d18.503583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sdo",
    googleMapsLink: "https://maps.app.goo.gl/S87zpLvvUXz17d9u5",
  },
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Nosotros", href: "/nosotros" },
] as const;

export const CATEGORIES = [
  { name: "Levanta Cola", slug: "pantalones", description: "Skinny jeans que resaltan tu figura", image: "/images/products/levanta-cola-1.jpg" },
  { name: "Conjuntos", slug: "conjuntos", description: "Looks completos listos para usar", image: "/images/products/set-conjunto-1.jpg" },
  { name: "Mo'ms", slug: "moms", description: "Estilo mom jean, cómodo y moderno", image: "/images/products/mom-jeans-3.jpg" },
  { name: "Campanas", slug: "campanas", description: "Pierna ancha con estilo campana", image: "/images/products/campana-1.jpg" },
] as const;
