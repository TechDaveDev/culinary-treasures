"use client";

import { useState, useEffect } from 'react';
import { Recipe } from '@/infrastructure/types/recipe';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/lib/recipes';

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();

    if (!lowercasedQuery) {
      setFilteredRecipes(recipes);
      return;
    }

    const results = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowercasedQuery) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercasedQuery))
    );

    setFilteredRecipes(results);

  }, [searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-4 pt-32 pb-12">

        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-900 mb-4">Encuentra tu Próxima Receta</h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto mb-8">
            Usa el buscador para encontrar un plato por su nombre o por alguno de sus ingredientes.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ej: Pollo, Tarta de Manzana, Lentejas..."
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-orange-200 text-lg text-orange-900 placeholder-orange-400  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <IconSearch />
            </div>
          </div>
        </section>

        <section>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-orange-900 mb-2">Sin resultados</h2>
              <p className="text-orange-600">No hemos encontrado recetas para {searchQuery}.<br />¡Intenta con otra búsqueda!</p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}