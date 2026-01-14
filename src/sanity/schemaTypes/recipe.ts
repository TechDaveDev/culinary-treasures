import { defineField, defineType } from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recetas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la receta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de la receta',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'time',
      title: 'Tiempo de preparación',
      type: 'string',
      placeholder: 'Ej: 1h 30min',
    }),
    defineField({
      name: 'difficulty',
      title: 'Dificultad',
      type: 'string',
      options: {
        list: [
          { title: 'Fácil', value: 'Fácil' },
          { title: 'Media', value: 'Media' },
          { title: 'Difícil', value: 'Difícil' },
        ],
      },
    }),
    defineField({
      name: 'servings',
      title: 'Porciones',
      type: 'number',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredientes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'steps',
      title: 'Pasos de preparación',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})