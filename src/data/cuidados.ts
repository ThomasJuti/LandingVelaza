export interface Cuidado {
  icon: "vela" | "reloj" | "viento" | "pata" | "ojo" | "copo";
  title: string;
  desc: string;
}

export const CUIDADOS: Cuidado[] = [
  {
    icon: "vela",
    title: "En cada uso",
    desc: "Deja que la superficie de la cera se derrita de manera uniforme antes de apagarla. Así evitarás que se forme un túnel.",
  },
  {
    icon: "reloj",
    title: "No la mantengas encendida por más de 2 horas continuas",
    desc: "En vasos pequeños como el tuyo, lo ideal es entre 1 y 2 horas para evitar exceso de temperatura.",
  },
  {
    icon: "viento",
    title: "Mantén la vela",
    desc: "Lejos de corrientes de aire, cortinas y materiales inflamables.",
  },
  {
    icon: "pata",
    title: "Mantén fuera del alcance de niños y mascotas.",
    desc: "",
  },
  {
    icon: "ojo",
    title: "Nunca dejes",
    desc: "Una vela encendida sin supervisión.",
  },
  {
    icon: "copo",
    title: "Deja que el vaso se enfríe",
    desc: "Completamente antes de volver a moverlo o encenderla nuevamente.",
  },
];
