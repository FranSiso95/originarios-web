/* eslint-disable @next/next/no-img-element */
import Navbar from "../Navbar";
import { IMG } from "../imagenes";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-white/10 py-10 text-center">
        <img
          src={IMG.logo}
          alt="Originarios Band of Brothers"
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-4 text-sm text-hueso/50">
          Propuesta de diseño — las notas marcadas como “contenido de muestra”
          son ejemplos.
        </p>
      </footer>
    </>
  );
}
