export interface Aroma {
  icon:
    | "moon"
    | "corazon"
    | "sol"
    | "flor"
    | "sonrisa"
    | "hoja"
    | "rayo"
    | "palmera"
    | "loto"
    | "casa";
  nombre: string;
  desc: string;
}

export const AROMAS: Aroma[] = [
  {
    icon: "moon",
    nombre: "Lavanda",
    desc: "Calma la mente, relaja el cuerpo y favorece un sueño profundo.",
  },
  {
    icon: "corazon",
    nombre: "Vainilla",
    desc: "Transmite calidez, dulzura y bienestar. Ideal para crear ambientes acogedores.",
  },
  {
    icon: "sol",
    nombre: "Frutos amarillos",
    desc: "Aporta energía, alegría y vitalidad. Perfecto para levantar el ánimo.",
  },
  {
    icon: "flor",
    nombre: "Frutos silvestres",
    desc: "Estimula los sentidos, genera armonía y crea un ambiente envolvente.",
  },
  {
    icon: "sonrisa",
    nombre: "Fresa",
    desc: "Aroma dulce y afrutado que brinda frescura, ternura y buen humor.",
  },
  {
    icon: "hoja",
    nombre: "Eucalipto",
    desc: "Purifica el ambiente, descongestiona y aporta sensación de frescura.",
  },
  {
    icon: "rayo",
    nombre: "Cítricos",
    desc: "Revitaliza, limpia y llena de energía. Ideal para empezar el día.",
  },
  {
    icon: "palmera",
    nombre: "Coco",
    desc: "Relajante y tropical, evoca descanso, playa y tranquilidad mental.",
  },
  {
    icon: "loto",
    nombre: "Jazmín",
    desc: "Promueve la paz interior, eleva el ánimo y aporta un toque romántico.",
  },
  {
    icon: "casa",
    nombre: "Canela y naranja",
    desc: "Aporta calidez, bienestar y sensación de hogar. Ideal para compartir.",
  },
];
