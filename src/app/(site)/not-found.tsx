// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center px-4">
      <div className="absolute flex flex-col items-center mx-4">
        <h1 className="text-9xl font-bold text-orange-200">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4 text-center">
          ¡Ups! Esta receta no existe (aún)
        </h2>
        <p className="text-orange-700 text-lg mb-8 text-center max-w-md">
          No pudimos encontrar la página que buscas. Es probable que la receta haya cambiado de nombre o el enlace esté mal.
        </p>
        <Link
          href="/recetas"
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          Ir a las recetas
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-14 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
}