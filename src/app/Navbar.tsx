"use client";

import { useState } from "react";
import { BASE, IMG } from "./imagenes";

const LINKS = [
  { href: `${BASE}/#inicio`, label: "Inicio" },
  { href: `${BASE}/#historia`, label: "Historia" },
  { href: `${BASE}/#rutas`, label: "Rutas y eventos" },
  { href: `${BASE}/#galeria`, label: "Galería" },
  { href: `${BASE}/#integrantes`, label: "Integrantes" },
  { href: `${BASE}/blog`, label: "Blog" },
  { href: `${BASE}/#contacto`, label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-negro/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href={`${BASE}/#inicio`} aria-label="Originarios — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.logo} alt="Originarios Band of Brothers" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-titulo text-sm uppercase tracking-[0.18em] text-hueso/80 transition hover:text-bronce"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden rounded border border-white/20 px-3 py-2 font-titulo text-xs uppercase tracking-widest"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-label="Abrir menú"
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </div>

      {abierto && (
        <nav className="lg:hidden border-t border-white/10 bg-negro px-5 py-4">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAbierto(false)}
                  className="font-titulo text-lg uppercase tracking-[0.18em] text-hueso/90 hover:text-bronce"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
