import type { ImageMetadata } from "astro";

import imgVirgen from "../assets/products/vela-virgen.png";
import imgAngeles from "../assets/products/angeles.png";
import imgLeon from "../assets/products/vela-leon.png";
import imgMargaritasBolsa from "../assets/products/margaritas-bolsa.png";
import imgMargaritasRamo from "../assets/products/margaritas-ramo.png";
import imgBurbuja from "../assets/products/burbuja.png";
import imgDeseos from "../assets/products/velas-deseos.png";
import imgFrasco from "../assets/products/vela-frasco.png";

export interface Producto {
  nombre: string;
  cat: string;
  desc: string;
  precioU: string;
  unidad: string;
  precioM: string;
  /** Texto de fallback si aún no hay foto. */
  ph: string;
  imagen?: ImageMetadata;
  alt: string;
}

/** WhatsApp de Velaza (solo dígitos, con código de país). */
export const WHATSAPP_NUMBER = "573142365003";

export const PRODUCTOS: Producto[] = [
  {
    nombre: "Vela Virgen",
    cat: "Devocional",
    desc: "Figura devocional en cera de soya. Un detalle con significado.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela virgen",
    imagen: imgVirgen,
    alt: "Velas Virgen de Velaza en blanco con detalles dorados y empaque de regalo",
  },
  {
    nombre: "Ángeles",
    cat: "Devocional",
    desc: "Angelitos aromatizados, ideales para recuerdos y bautizos.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela ángel",
    imagen: imgAngeles,
    alt: "Vela ángel y vela virgen artesanales de Velaza con detalles dorados",
  },
  {
    nombre: "Vela León",
    cat: "Figuras",
    desc: "Leoncitos tiernos en varios colores. Decoran y enamoran.",
    precioU: "$7.000",
    unidad: "/u",
    precioM: "$5.000",
    ph: "vela león",
    imagen: imgLeon,
    alt: "Leoncitos de cera Velaza en varios colores",
  },
  {
    nombre: "Margaritas en bolsa",
    cat: "Margaritas",
    desc: "Margaritas aromatizadas presentadas en bolsa individual.",
    precioU: "$8.000",
    unidad: "/u",
    precioM: "$6.000",
    ph: "margarita en bolsa",
    imagen: imgMargaritasBolsa,
    alt: "Margaritas aromatizadas Velaza en bolsas con etiquetas de regalo",
  },
  {
    nombre: "Margaritas en ramo",
    cat: "Margaritas",
    desc: "Ramo de margaritas envuelto en kraft. Perfecto para regalar.",
    precioU: "$10.000",
    unidad: "/u",
    precioM: "$8.000",
    ph: "ramo de margaritas",
    imagen: imgMargaritasRamo,
    alt: "Ramos de margaritas aromatizadas Velaza envueltos en kraft",
  },
  {
    nombre: "Burbuja pequeña",
    cat: "Burbujas",
    desc: "Vela burbuja de cubos, tamaño pequeño. Minimal y moderna.",
    precioU: "$8.000",
    unidad: "/u",
    precioM: "$6.000",
    ph: "burbuja pequeña",
    imagen: imgBurbuja,
    alt: "Velas burbuja de cubos Velaza en azul, blanco y amarillo",
  },
  {
    nombre: "Burbuja grande",
    cat: "Burbujas",
    desc: "Vela burbuja de cubos, tamaño grande. Pieza central de mesa.",
    precioU: "$18.000",
    unidad: "/u",
    precioM: "$16.000",
    ph: "burbuja grande",
    imagen: imgBurbuja,
    alt: "Velas burbuja de cubos Velaza en azul, blanco y amarillo",
  },
  {
    nombre: "Velas de deseos navideñas",
    cat: "Temporada",
    desc: "Caja x6 velas de deseos para las fiestas decembrinas.",
    precioU: "$20.000",
    unidad: "/caja x6",
    precioM: "$16.000",
    ph: "velas de deseos · caja x6",
    imagen: imgDeseos,
    alt: "Caja x6 velas de deseos Velaza con palabras de intención",
  },
  {
    nombre: "Velas en frasco",
    cat: "Aromáticas",
    desc: "Velas aromáticas en frasco de vidrio. Aroma a elección.",
    precioU: "Consultar",
    unidad: "",
    precioM: "por mayor",
    ph: "vela en frasco",
    imagen: imgFrasco,
    alt: "Vela aromática Velaza encendida en frasco de vidrio",
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
