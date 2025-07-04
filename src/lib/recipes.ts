import { Recipe } from "@/infrastructure/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Empanadas de queso fritas',
    slug: 'empanadas-de-queso-fritas',
    image: 'https://i.imgur.com/Icd1xcp.png',
    time: '1h 30min',
    difficulty: 'Fácil',
    servings: 10,
    ingredients: ['2 1/2 tazas de harina', '1 cuchara de polvo de hornear', '1 cucharada de sal', '1 cucharada de azúcar', '4 cucharaditas de manteca animal o vegetal', '2 cucharaditas de mantequilla', '1 taza de agua tibia', '150 gr de queso duro cortado en cubitos'],
    steps: ['En un bowl cernir la harina y el polvo de hornear.', 'Hacer un volcan e incorporar la sal, manteca, mantequilla y el agua tibia.', 'Amasar durante 3 minutos.', 'Freir en aceite caliente.'],
  },
];