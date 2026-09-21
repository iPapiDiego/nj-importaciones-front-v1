import { SITE_CONFIG } from '../config/site';

/**
 * Formats a numeric price into Peruvian Soles (S/ XX.XX)
 */
export function formatPEN(amount: number): string {
  return `S/ ${amount.toFixed(2)}`;
}

/**
 * Generates an encoded WhatsApp API link with pre-filled text
 */
export function buildWhatsAppLink(
  message: string = SITE_CONFIG.whatsapp.defaultMessage,
  phone: string = SITE_CONFIG.whatsapp.number
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export interface MinimalCartItem {
  name: string;
  price: number;
  quantity: number;
}

/**
 * Generates the structured WhatsApp order message
 */
export function buildOrderMessage(items: MinimalCartItem[], subtotal: number): string {
  const shipping = subtotal >= SITE_CONFIG.shipping.freeThreshold
    ? 'GRATIS'
    : `S/ ${SITE_CONFIG.shipping.costLima.toFixed(2)} (Lima) / ${SITE_CONFIG.shipping.agencyProvincia} (Provincia)`;

  let text = `${SITE_CONFIG.whatsapp.orderIntro}\n\n`;
  items.forEach(item => {
    text += `• ${item.quantity}x ${item.name} - ${formatPEN(item.price * item.quantity)}\n`;
  });

  text += `\n*Total a Pagar: ${formatPEN(subtotal)}*\n`;
  text += `*Envío:* ${shipping}\n`;
  text += `*Método de pago preferido:* Yape / Tarjeta\n\n`;
  text += `Por favor envíenme los datos para realizar la transferencia / pago. ¡Muchas gracias!`;

  return text;
}
