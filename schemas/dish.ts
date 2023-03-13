import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Plato',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
    }),
  ],
})
