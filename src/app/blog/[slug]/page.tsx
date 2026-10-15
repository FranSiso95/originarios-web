/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, buscar, formatearFecha } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = buscar(slug);
  if (!post) return {};
  return {
    title: `${post.titulo} — Originarios Band of Brothers`,
    description: post.resumen,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = buscar(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <img
          src={post.imagen}
          alt={post.titulo}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/50 to-negro/20" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-5 pb-10">
          <p className="font-titulo text-sm uppercase tracking-[0.3em] text-bronce">
            {formatearFecha(post.fecha)}
          </p>
          <h1 className="mt-2 font-titulo text-4xl font-bold uppercase leading-tight sm:text-6xl">
            {post.titulo}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12">
        {post.muestra && (
          <span className="mb-8 inline-block rounded-sm border border-bronce/50 px-2 py-0.5 font-titulo text-[10px] uppercase tracking-[0.2em] text-bronce">
            Contenido de muestra
          </span>
        )}
        <div className="space-y-6 text-lg leading-relaxed text-hueso/85">
          {post.contenido.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            href="/blog"
            className="font-titulo text-sm uppercase tracking-[0.2em] text-bronce transition hover:text-rojo"
          >
            ← Volver al blog
          </Link>
        </div>
      </div>
    </article>
  );
}
