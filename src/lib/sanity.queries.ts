import { SanityRecipe } from "@/infrastructure/types/recipe"
import { client } from "@/sanity/lib/client"

export async function getRecipes(): Promise<SanityRecipe[]> {
  return await client.fetch(`*[_type == "recipe"]{
    title,
    "slug": slug.current,
    "image": image.asset->url,
    time,
    difficulty,
    servings,
    ingradients
  }`)
}

export async function getRecipeBySlug(slug: string): Promise<SanityRecipe> {
  return await client.fetch(`*[_type == "recipe" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "image": image.asset->url,
    time,
    difficulty,
    servings,
    ingredients,
    steps
  }`, { slug })
}

export async function getPopularRecipes(): Promise<SanityRecipe[]> {
  return await client.fetch(`*[_type == "recipe"] | order(_createdAt desc) [0...3]{
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    time,
    difficulty,
    servings
  }`)
}