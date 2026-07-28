export interface WhyItem {
  icon: "manoCorazon" | "hoja" | "escudo" | "regalo" | "pata" | "corazon";
  title: string;
  desc: string;
}

export const WHY_CHOOSE_US: WhyItem[] = [
  {
    icon: "manoCorazon",
    title: "Hechas con amor",
    desc: "Cada vela es elaborada artesanalmente con dedicación y detalle.",
  },
  {
    icon: "hoja",
    title: "Aromas cuidadosamente seleccionados",
    desc: "Utilizamos fragancias de alta calidad para crear experiencias que despiertan emociones.",
  },
  {
    icon: "escudo",
    title: "Materiales de calidad",
    desc: "Elegimos cuidadosamente cada insumo para garantizar productos seguros y duraderos.",
  },
  {
    icon: "regalo",
    title: "Detalles que hacen la diferencia",
    desc: "Diseños únicos y presentaciones pensadas para regalar, decorar y recordar momentos especiales.",
  },
  {
    icon: "pata",
    title: "Amigables con el entorno y libres de crueldad animal",
    desc: "Cuidamos el planeta y a los animales en cada elección que hacemos.",
  },
  {
    icon: "corazon",
    title: "Intenciones que iluminan",
    desc: "Más que velas, creamos recuerdos, compañía y pequeños momentos que se convierten en grandes historias.",
  },
];
