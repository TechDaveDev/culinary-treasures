import Link from 'next/link';

import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/lib/recipes';

export default function PopularRecipes() {
  const popularRecipes = recipes.slice(0, 3);

  return (
    <section id="recetas-populares" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-900 mb-2">Recetas Populares</h2>
          <p className="text-lg text-orange-700">Las favoritas de la familia que todos deberían probar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/recetas"
            className="bg-orange-100 text-orange-800 font-semibold px-6 py-3 rounded-full hover:bg-orange-200 transition-colors">
            Ver todas las recetas
          </Link>
        </div>
      </div>
    </section>
  );
}