import Link from 'next/link';
import Image from 'next/image';

import { SanityRecipe } from '@/infrastructure/types/recipe';

const difficultyColors = {
  Fácil: 'bg-green-100 text-green-800',
  Media: 'bg-yellow-100 text-yellow-800',
  Difícil: 'bg-red-100 text-red-800',
};

export default function RecipeCard({ recipe }: { recipe: SanityRecipe }) {
  return (
    <Link href={`/recetas/${recipe.slug}`} className="group block">
      <div className="border border-orange-200/80 rounded-2xl overflow-hidden h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative w-full h-48">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-xl mb-2 text-orange-900 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>
          <div className="mt-auto flex items-center gap-4 text-sm text-orange-800/90 pt-4">
            <span>⏱️ {recipe.time}</span>
            <span>🍽️ {recipe.servings} porciones</span>
          </div>
        </div>
      </div>
    </Link>
  );
}