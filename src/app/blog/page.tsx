/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { formatearFecha, ordenados } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Originarios Band of Brothers",
  description: "Crónicas, rutas y novedades del grupo.",
};

export default function BlogPage() {
  const posts = ordenados();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-14">
        <p className="font-titulo text-sm uppercase tracking-[0.35em] text-rojo">
          Crónicas y novedades
        </p>
        <h1 className="mt-2 font-titulo text-5xl font-bold uppercase leading-tight sm:text-6xl">
          Blog
        </h1>
        <div className="mt-5 h-px w-24 bg-gradient-to-r from-oxido to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
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
              <h2 className="font-titulo text-2xl uppercase">{p.titulo}</h2>
              <p className="text-hueso/70">{p.resumen}</p>
              {p.muestra && (
                <span className="inline-block rounded-sm border border-bronce/50 px-2 py-0.5 font-titulo text-[10px] uppercase tracking-[0.2em] text-bronce">
                  Contenido de muestra
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
