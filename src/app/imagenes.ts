// Rutas de las imágenes (están en public/images).
// Si alguna tiene otra extensión (por ejemplo logo.jpg en vez de logo.png),
// cambiala solo acá y se actualiza en toda la web.
// Prefijo de la carpeta del sitio. Está vacío en tu computadora y vale
// "/originarios-web" cuando se publica en GitHub Pages (lo define next.config.ts).
const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const IMG = {
  logo: `${B}/images/logo.jpg`,
  portada: `${B}/images/portada.jpg`,
  rodadaNocturna: `${B}/images/rodada-nocturna.jpg`,
  vueltaAlPerro: `${B}/images/vuelta-al-perro.jpg`,
  grupo: `${B}/images/grupo-vuelta-al-perro.jpg`,
  moto: `${B}/images/moto.jpg`,
  aereaLago: `${B}/images/aerea-lago.jpg`,
  ushuaia: `${B}/images/ushuaia.jpg`,
  stand: `${B}/images/stand.jpg`,
} as const;

export const BASE = B;

export const REDES = {
  instagram: "https://www.instagram.com/originarios_band_of_brothers/?hl=es",
  facebook: "https://www.facebook.com/profile.php?id=61578624557053",
} as const;
