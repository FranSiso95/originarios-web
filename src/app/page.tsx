/* eslint-disable @next/next/no-img-element */
import Navbar from "./Navbar";
import Link from "next/link";
import { IMG, REDES } from "./imagenes";
import { formatearFecha, ultimos } from "./blog/posts";

function Muestra({ children = "Contenido de muestra" }: { children?: string }) {
  return (
    <span className="inline-block rounded-sm border border-bronce/50 px-2 py-0.5 font-titulo text-[10px] uppercase tracking-[0.2em] text-bronce">
      {children}
    </span>
  );
}

function Titulo({
  etiqueta,
  children,
}: {
  etiqueta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <p className="font-titulo text-sm uppercase tracking-[0.35em] text-rojo">
        {etiqueta}
      </p>
      <h2 className="mt-2 font-titulo text-4xl font-semibold uppercase leading-tight sm:text-5xl">
        {children}
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-oxido to-transparent" />
    </div>
  );
}

const EVENTOS = [
  {
    img: IMG.vueltaAlPerro,
    nombre: "La Vuelta al Perro — 5ª edición",
    fecha: "20 de junio",
    texto: "Una de las rodadas emblema del grupo. Datos del flyer del club.",
    real: true,
  },
  {
    img: IMG.rodadaNocturna,
    nombre: "Rodada Nocturna",
    fecha: "Fecha a confirmar",
    texto:
      "“La rodada nocturna más grande del mundo”, según el material del propio club.",
    real: true,
  },
  {
    img: IMG.ushuaia,
    nombre: "Expedición al fin del mundo",
    fecha: "Fecha a confirmar",
    texto: "Espacio para contar las rutas largas del grupo.",
    real: false,
  },
];

const GALERIA = [
  { src: IMG.aereaLago, alt: "Vista aérea del encuentro junto al lago", span: "row-span-2" },
  { src: IMG.moto, alt: "Moto con la gráfica oxidada de Originarios", span: "" },
  { src: IMG.stand, alt: "Stand de Originarios en un encuentro", span: "" },
  { src: IMG.grupo, alt: "Foto grupal con la bandera argentina", span: "sm:col-span-2" },
  { src: IMG.ushuaia, alt: "Tres integrantes con la bandera en Ushuaia", span: "" },
  { src: IMG.rodadaNocturna, alt: "Ruta iluminada durante la rodada nocturna", span: "" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* INICIO */}
        <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden">
          <img
            src={IMG.portada}
            alt="Vista aérea de un encuentro de Originarios al atardecer"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/60 to-negro/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-negro/80 via-transparent to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40">
            <p className="font-titulo text-sm uppercase tracking-[0.4em] text-bronce">
              Grupo motero
            </p>
            <h1 className="mt-3 font-titulo text-6xl font-bold uppercase leading-[0.95] sm:text-8xl">
              Originarios
              <span className="block text-3xl font-medium tracking-[0.25em] text-hueso/90 sm:text-5xl">
                Band of Brothers
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-hueso/80">
              Rutas, caminos y hermandad sobre dos ruedas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#rutas"
                className="rounded-sm bg-rojo px-7 py-3 font-titulo text-sm uppercase tracking-[0.2em] transition hover:bg-oxido"
              >
                Ver rutas y eventos
              </a>
              <a
                href="#contacto"
                className="rounded-sm border border-bronce px-7 py-3 font-titulo text-sm uppercase tracking-[0.2em] text-bronce transition hover:bg-bronce hover:text-negro"
              >
                Sumate
              </a>
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section id="historia" className="mx-auto max-w-7xl px-5 py-24">
          <Titulo etiqueta="Quiénes somos">Nuestra historia</Titulo>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-hueso/80">
              <Muestra>Texto de muestra</Muestra>
              <p>
                Originarios — Band of Brothers es un grupo de motociclistas unido por
                el camino, la amistad y el compromiso entre hermanos.
              </p>
              <p>
                Acá va el relato real del club: cómo nació, quiénes lo fundaron y
                qué lo hace distinto. El cliente aporta esta información y la
                convertimos en una historia a medida.
              </p>
            </div>
            <div className="relative">
              <img
                src={IMG.grupo}
                alt="Integrantes de Originarios con la bandera argentina"
                className="w-full rounded-sm border border-white/10 object-cover shadow-2xl shadow-black"
              />
              <div className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-oxido/60" />
            </div>
          </div>
        </section>

        {/* RUTAS Y EVENTOS */}
        <section id="rutas" className="bg-carbon py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Titulo etiqueta="Sobre dos ruedas">Rutas y eventos</Titulo>
            <div className="grid gap-8 md:grid-cols-3">
              {EVENTOS.map((e) => (
                <article
                  key={e.nombre}
                  className="group overflow-hidden rounded-sm border border-white/10 bg-negro transition hover:border-bronce/60"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.nombre}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="font-titulo text-xs uppercase tracking-[0.25em] text-rojo">
                      {e.fecha}
                    </p>
                    <h3 className="font-titulo text-2xl uppercase">{e.nombre}</h3>
                    <p className="text-hueso/70">{e.texto}</p>
                    {!e.real && <Muestra />}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="mx-auto max-w-7xl px-5 py-24">
          <Titulo etiqueta="Momentos">Galería</Titulo>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-3">
            {GALERIA.map((g) => (
              <div
                key={g.src + g.alt}
                className={`group relative overflow-hidden rounded-sm border border-white/10 ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-negro/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRANTES */}
        <section id="integrantes" className="bg-carbon py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Titulo etiqueta="Hermanos de ruta">Integrantes</Titulo>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {["A", "B", "C", "D"].map((n) => (
                <div
                  key={n}
                  className="rounded-sm border border-white/10 bg-negro p-6 text-center"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-bronce/50 font-titulo text-4xl text-bronce">
                    {n}
                  </div>
                  <p className="mt-4 font-titulo text-lg uppercase">Nombre / apodo</p>
                  <p className="text-sm text-hueso/60">Rol en el grupo</p>
                  <div className="mt-3">
                    <Muestra />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG / NOTICIAS */}
        <section id="noticias" className="mx-auto max-w-7xl px-5 py-24">
          <Titulo etiqueta="Del blog">Últimas novedades</Titulo>
          <div className="grid gap-8 md:grid-cols-3">
            {ultimos(3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-sm border border-white/10 bg-carbon transition hover:border-bronce/60"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="font-titulo text-xs uppercase tracking-[0.25em] text-bronce">
                    {formatearFecha(p.fecha)}
                  </p>
                  <h3 className="font-titulo text-2xl uppercase">{p.titulo}</h3>
                  <p className="text-hueso/70">{p.resumen}</p>
                  {p.muestra && <Muestra />}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-sm border border-bronce px-7 py-3 font-titulo text-sm uppercase tracking-[0.2em] text-bronce transition hover:bg-bronce hover:text-negro"
            >
              Ver todo el blog
            </Link>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="bg-carbon py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Titulo etiqueta="Hablemos">Contacto</Titulo>
            <p className="text-lg text-hueso/80">
              ¿Querés sumarte a una rodada o conocer al grupo? Escribinos por las
              redes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={REDES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-rojo px-7 py-3 font-titulo text-sm uppercase tracking-[0.2em] transition hover:bg-oxido"
              >
                Instagram
              </a>
              <a
                href={REDES.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-bronce px-7 py-3 font-titulo text-sm uppercase tracking-[0.2em] text-bronce transition hover:bg-bronce hover:text-negro"
              >
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center">
        <img src={IMG.logo} alt="Originarios Band of Brothers" className="mx-auto h-12 w-auto" />
        <p className="mt-4 text-sm text-hueso/50">
          Propuesta de diseño — las secciones marcadas como “contenido de muestra”
          son ejemplos.
        </p>
      </footer>
    </>
  );
}
