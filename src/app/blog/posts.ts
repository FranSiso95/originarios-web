import { IMG } from "../imagenes";

export type Post = {
  slug: string; // va en la dirección: /blog/<slug>
  titulo: string;
  fecha: string; // formato AAAA-MM-DD
  resumen: string;
  imagen: string;
  contenido: string[]; // cada elemento es un párrafo
  muestra: boolean; // true = se muestra la etiqueta "Contenido de muestra"
};

// Para publicar un artículo nuevo: copiá un bloque, cambiá los datos
// y ponele muestra: false. Se ordenan solos por fecha (el más nuevo primero).
export const POSTS: Post[] = [
  {
    slug: "asi-se-vive-una-rodada",
    titulo: "Así se vive una rodada",
    fecha: "2026-10-10",
    resumen:
      "Un recorrido por lo que pasa antes, durante y después de salir a la ruta con el grupo.",
    imagen: IMG.aereaLago,
    muestra: true,
    contenido: [
      "Este es un texto de ejemplo para mostrar cómo se vería un artículo del blog. El cliente puede reemplazarlo por su propia crónica.",
      "Cada artículo puede tener varios párrafos, una foto de portada y una fecha. El diseño se adapta solo al celular y a la computadora.",
      "Cuando el club envíe sus textos y fotos reales, se cargan en este mismo formato y la página se actualiza.",
    ],
  },
  {
    slug: "cronica-de-un-encuentro",
    titulo: "Crónica de un encuentro",
    fecha: "2026-09-20",
    resumen:
      "Ejemplo de crónica de un encuentro multitudinario, con fotos y anécdotas del día.",
    imagen: IMG.grupo,
    muestra: true,
    contenido: [
      "Texto de ejemplo. Acá iría el relato real del encuentro: cómo arrancó el día, quiénes llegaron y qué se vivió.",
      "Las crónicas pueden acompañarse con las fotos de la galería del club.",
    ],
  },
  {
    slug: "cuando-la-ruta-es-larga",
    titulo: "Cuando la ruta es larga",
    fecha: "2026-08-30",
    resumen:
      "Ejemplo de artículo sobre viajes largos y la hermandad que se arma kilómetro a kilómetro.",
    imagen: IMG.ushuaia,
    muestra: true,
    contenido: [
      "Texto de ejemplo para una nota sobre rutas largas. Se reemplaza con la historia real del grupo.",
      "También se pueden contar los preparativos, los consejos de ruta y las anécdotas del viaje.",
    ],
  },
];

export function ordenados(): Post[] {
  return [...POSTS].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function ultimos(n: number): Post[] {
  return ordenados().slice(0, n);
}

export function buscar(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatearFecha(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
