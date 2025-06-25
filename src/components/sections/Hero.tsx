export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight shadow-text">
          Tesoros Culinarios 🥖
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto shadow-text">
          Descubre los sabores tradicionales que han endulzado nuestra familia por generaciones.
        </p>
        <a
          href="/recetas"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium 
                     transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Explorar Recetas
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}