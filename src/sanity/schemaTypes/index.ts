import { type SchemaTypeDefinition } from 'sanity'
import { recipeType } from './recipe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipeType],
}
