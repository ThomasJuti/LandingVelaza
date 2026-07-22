export interface Producto {
  nombre: string;
  cat: string;
  desc: string;
  precioU: string;
  unidad: string;
  precioM: string;
  ph: string;
}

/** TODO: reemplazar por el WhatsApp real de Velaza (solo dígitos, con código de país). */
export const WHATSAPP_NUMBER = "573000000000";

export const PRODUCTOS: Producto[] = [
  {
    nombre: "Vela Virgen",
    cat: "Devocional",
    desc: "Figura devocional en cera de soya. Un detalle con significado.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela virgen",
  },
  {
    nombre: "Ángeles",
    cat: "Devocional",
    desc: "Angelitos aromatizados, ideales para recuerdos y bautizos.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela ángel",
  },
  {
    nombre: "Vela León",
    cat: "Figuras",
    desc: "Leoncitos tiernos en varios colores. Decoran y enamoran.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela león",
  },
  {
    nombre: "Margaritas en bolsa",
    cat: "Margaritas",
    desc: "Margaritas aromatizadas presentadas en bolsa individual.",
    precioU: "$8.000",
    unidad: "/u",
    precioM: "$6.000",
    ph: "margarita en bolsa",
  },
  {
    nombre: "Margaritas en ramo",
    cat: "Margaritas",
    desc: "Ramo de margaritas envuelto en kraft. Perfecto para regalar.",
    precioU: "$10.000",
    unidad: "/u",
    precioM: "$8.000",
    ph: "ramo de margaritas",
  },
  {
    nombre: "Burbuja pequeña",
    cat: "Burbujas",
    desc: "Vela burbuja de cubos, tamaño pequeño. Minimal y moderna.",
    precioU: "$8.000",
    unidad: "/u",
    precioM: "$6.000",
    ph: "burbuja pequeña",
  },
  {
    nombre: "Burbuja grande",
    cat: "Burbujas",
    desc: "Vela burbuja de cubos, tamaño grande. Pieza central de mesa.",
    precioU: "$18.000",
    unidad: "/u",
    precioM: "$16.000",
    ph: "burbuja grande",
  },
  {
    nombre: "Velas de deseos navideñas",
    cat: "Temporada",
    desc: "Caja x6 velas de deseos para las fiestas decembrinas.",
    precioU: "$20.000",
    unidad: "/caja x6",
    precioM: "$16.000",
    ph: "velas de deseos · caja x6",
  },
  {
    nombre: "Velas en frasco",
    cat: "Aromáticas",
    desc: "Velas aromáticas en frasco de vidrio. Aroma a elección.",
    precioU: "Consultar",
    unidad: "",
    precioM: "por mayor",
    ph: "vela en frasco",
  },
];

export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function waLinkGeneral(): string {
  return waLink("Hola Velaza, vi su catálogo y quiero hacer un pedido.");
}

export function waLinkProducto(p: Producto): string {
  return waLink(
    `Hola Velaza, me interesa: ${p.nombre} (${p.precioU} ${p.unidad}). ¿Me das más info?`,
  );
}
