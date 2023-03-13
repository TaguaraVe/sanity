import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Agrupación de Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Caracteristicas',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'string',
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurantes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
    }),
  ],
})
