import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Categoria',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatorio'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Avatar - Image de la Categoria',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
