export default function AboutProject() {
  return (
    <section id="sobre-el-proyecto" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://cesarpiqueras.com/wp-content/uploads/2016/04/escribir-un-libro.png"
            alt="Libro de recetas antiguo"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Sobre Este Rincón</h2>
          <p className="text-lg text-orange-800 mb-4 leading-relaxed">
            Tesoros Culinarios nació del deseo de preservar y compartir el legado más delicioso de mi familia: las recetas de mi madre. Cada plato cuenta una historia, cada ingrediente es un recuerdo.
          </p>
          <p className="text-lg text-orange-800 leading-relaxed">
            Este proyecto es más que un simple blog; es un homenaje digital a su amor, paciencia y al increíble sabor de su cocina. Espero que disfrutes preparando estas recetas tanto como nosotros hemos disfrutado comiéndolas.
          </p>
        </div>
      </div>
    </section>
  );
}