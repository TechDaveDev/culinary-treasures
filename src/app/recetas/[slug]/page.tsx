import { notFound } from 'next/navigation';
import Image from 'next/image';
import { recipes } from '@/lib/recipes';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipe = recipes.find(recipe => recipe.slug === params.slug);

  if (!recipe) {
    return {
      title: 'Receta no encontrada',
      description: 'La receta que buscas no existe o ha sido movida.',
    };
  }

  return {
    title: `${recipe.title} | Tesoros Culinarios`,
    description: `Aprende a preparar ${recipe.title}.`,
  };
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipeDetailPage({ params }: Props) {
  const recipe = recipes.find(recipe => recipe.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <main className="container relative mx-auto px-4 pt-28 pb-20">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="relative w-full h-64 md:h-96">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">{recipe.title}</h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-orange-800">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {recipe.time}
                </span>
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {recipe.servings} porciones
                </span>
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Dificultad {recipe.difficulty}
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <aside className="md:col-span-1">
                <h2 className="text-2xl font-bold text-orange-900 border-b-2 border-orange-200 pb-2 mb-4">Ingredientes</h2>
                <ul className="space-y-2 list-disc list-inside text-orange-800">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </aside>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-orange-900 border-b-2 border-orange-200 pb-2 mb-4">Preparación</h2>
                <ol className="space-y-4 text-orange-900/90 leading-relaxed">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 bg-orange-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
        <div className="absolute bottom-0 left-0 right-0 w-full h-14 bg-gradient-to-b from-transparent to-white"></div>
      </main>
    </div>
  );
}