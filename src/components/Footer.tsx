"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Footer() {

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const getLinkHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <footer className="bg-white pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center pb-4">
          <ul className="flex flex-col gap-2 font-medium text-center">
            {
              isHomePage
                ? <li><a href={getLinkHref('recetas-populares')}>Inicio</a></li>
                : <li><Link href="/">Inicio</Link></li>
            }
            <li><a href={getLinkHref('recetas-populares')}>Recetas Populares</a></li>
            <li><a href={getLinkHref('sobre-el-proyecto')}>Sobre el Proyecto</a></li>
            <li><Link href="/recetas">Todas las Recetas</Link></li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600 text-center md:text-left text-sm">
              © {new Date().getFullYear()} Tesoros Culinarios <br /> Todos los derechos reservados
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-orange-500 hover:text-orange-700 text-sm font-medium">
              Términos
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700 text-sm font-medium">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
