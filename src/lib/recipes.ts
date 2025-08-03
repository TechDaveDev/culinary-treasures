import { Recipe } from "@/infrastructure/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Empanadas de queso fritas',
    slug: 'empanadas-de-queso-fritas',
    image: '/images/empanadas-de-queso-fritas.webp',
    time: '1h 30min',
    difficulty: 'Fácil',
    servings: 10,
    ingredients: ['2 1/2 tazas de harina', '1 cuchara de polvo de hornear', '1 cucharada de sal', '1 cucharada de azúcar', '4 cucharaditas de manteca animal o vegetal', '2 cucharaditas de mantequilla', '1 taza de agua tibia', '150 gr de queso duro cortado en cubitos'],
    steps: ['En un bowl cernir la harina y el polvo de hornear.', 'Hacer un volcan e incorporar la sal, manteca, mantequilla y el agua tibia.', 'Amasar durante 3 minutos.', 'Freir en aceite caliente.'],
  },
  {
    id: 2,
    title: 'Fetuccini Alfredo',
    slug: 'fetuccini-alfredo',
    image: '/images/fetuccini-alfredo.webp',
    time: '25min',
    difficulty: 'Media',
    servings: 4,
    ingredients: ['8 onzas de fettuccine crudo o linguini', '1 cucharada de aceite de oliva', '8 oz de tocino cortado en cubitos', '3 cucharadas de mantequilla', '2 cucharaditas de ajo picado', '2 oz de queso crema envasado, a temperatura ambiente', '1 1/2 tazas de crema espesa', '3/4 cucharadita de cebolla en polvo', '3/4 cucharadita de ajo en polvo', '1 cucharadita de condimento italiano', '1/4 cucharadita de sal', '1/8 cucharadita de pimienta', 'Una pizca de hojuelas de chile rojo', '4 oz de queso parmesano finamente rallado, con extra para servir',],
    steps: ['Hervir los fettuccine en una olla grande con agua y sal hasta que estén al dente (recién cocidos). Reservar 1/4 de taza del agua de cocción y escurrir la pasta. Reservar.', 'Mientras hierve la pasta, calienta una sartén a fuego medio. Fríe el tocino hasta que esté crujiente. Con una espumadera, pásalo a un plato cubierto con papel absorbente.', 'Reserva solo 1 cucharada de grasa de tocino en la sartén y desecha el resto. Agrega la mantequilla y deja que se derrita, raspando los restos del fondo de la sartén. Saltea el ajo hasta que desprenda su aroma, unos 30 segundos.', 'Añade el queso crema y deja que se derrita mientras lo deshaces con la punta de una cuchara de madera, unos 2-3 minutos.', 'Una vez que el queso crema se haya diluido, incorpore la crema espesa y deje hervir a fuego lento, mientras bate, hasta que el queso crema se haya disuelto, aproximadamente de 4 a 5 minutos.', 'Condimentar con cebolla en polvo, ajo en polvo, condimento italiano, sal, pimienta y hojuelas de chile rojo.', 'Reduce el fuego a medio-bajo y deja cocinar a fuego lento hasta que espese un poco. Agrega el queso parmesano y deja cocinar a fuego lento hasta que el parmesano se haya derretido en la salsa, unos 2-3 minutos.', 'Retire la sartén del fuego. Vierta la pasta cocida en la salsa junto con 1/4 de taza del agua reservada. Mezcle bien para cubrir uniformemente con la salsa.', 'Añade el tocino crujiente nuevamente a la sartén; mezcla bien.', 'Sirva inmediatamente con queso parmesano adicional, si lo desea.',],
  },
];