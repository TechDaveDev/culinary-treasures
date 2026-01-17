export interface SanityRecipe {
  _id?: string;
  title: string;
  slug: string;
  image: string;
  time: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  servings: number;
  ingredients: string[];
  steps: string[];
}