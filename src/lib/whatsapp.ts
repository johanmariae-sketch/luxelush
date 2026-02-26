import { BRAND } from "./constants";

interface WhatsAppMessageOptions {
  productName?: string;
  productSlug?: string;
  size?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(options?: WhatsAppMessageOptions): string {
  let message = BRAND.whatsappDefaultMessage;

  if (options?.productName) {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const productUrl = options.productSlug
      ? `${baseUrl}/producto/${options.productSlug}`
      : "";

    message = `¡Hola! Me interesa el producto: ${options.productName}`;
    if (options.size) {
      message += ` - Talla: ${options.size}`;
    }
    if (productUrl) {
      message += `\n${productUrl}`;
    }
    message += "\nMe gustaría hacer un pedido.";
  }

  if (options?.customMessage) {
    message = options.customMessage;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
}
