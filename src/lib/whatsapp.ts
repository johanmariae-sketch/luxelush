import { BRAND } from "./constants";

interface WhatsAppMessageOptions {
  productName?: string;
  size?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(options?: WhatsAppMessageOptions): string {
  let message = BRAND.whatsappDefaultMessage;

  if (options?.productName) {
    message = `Hola! Me interesa el producto: ${options.productName}`;
    if (options.size) {
      message += ` - Talla: ${options.size}`;
    }
    message += ". Me gustaria hacer un pedido.";
  }

  if (options?.customMessage) {
    message = options.customMessage;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
}
