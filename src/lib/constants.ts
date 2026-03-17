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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04609788986!2d-69.98857045!3d18.486057749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo!5e0!3m2!1ses!2sdo!4v1709500000000!5m2!1ses!2sdo",
    googleMapsLink: "https://maps.google.com/?q=Santo+Domingo,+República+Dominicana",
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
