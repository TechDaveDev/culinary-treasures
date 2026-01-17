export default function AboutProject() {
  return (
    <section id="sobre-el-proyecto" className="relative w-full py-24 bg-orange-50">
      <div className="absolute top-0 left-0 right-0 w-full h-14 bg-gradient-to-t from-transparent to-white"></div>
      <div className="container mx-auto px-4 flex flex-col items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl text-center font-bold text-orange-900 mb-4">Sobre Este Proyecto</h2>
          <p className="text-lg text-orange-800 mb-4 leading-relaxed">
            Tesoros Culinarios es un proyecto que nació de la idea de compartir las recetas de las comidas que acompañaron a mi familia a lo largo de los años.
          </p>
          <p className="text-lg text-orange-800 leading-relaxed">
            Me emociona saber que cualquier persona, en cualquier parte del mundo, podrá preparar las comidas que yo tanto disfruté =)
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-14 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}