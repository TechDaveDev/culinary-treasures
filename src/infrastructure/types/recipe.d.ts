export type Recipe = {
  id: number;
  title: string;
  slug: string;
  ingredients: string[];
  steps: string[];
  image: string;
  time: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  servings: number;
};