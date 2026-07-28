export interface GiftIdea {
  icon:
    | "edificio"
    | "arbol"
    | "pastel"
    | "sonaja"
    | "anillos"
    | "paloma"
    | "flor"
    | "bigote"
    | "estrella";
  label: string;
}

export const GIFT_IDEAS: GiftIdea[] = [
  { icon: "edificio", label: "Empresas" },
  { icon: "arbol", label: "Navidad" },
  { icon: "pastel", label: "Cumpleaños" },
  { icon: "sonaja", label: "Baby Shower" },
  { icon: "anillos", label: "Matrimonios" },
  { icon: "paloma", label: "Bautizos" },
  { icon: "flor", label: "Día de la Madre" },
  { icon: "bigote", label: "Día del Padre" },
  { icon: "estrella", label: "Fechas especiales" },
];
