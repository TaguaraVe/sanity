import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Descripción Corta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image del Restaurant',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'lat',
      title: 'Latitud del Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitud del Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Dirección del Restaurant',
      type: 'string',
    }),
    defineField({
      name: 'deliveryFee',
      title: 'Costo del envio',
      type: 'number',
    }),
    defineField({
      name: 'minDeliveryTime',
      title: 'Tiempo minimo de envio',
      type: 'number',
    }),
    defineField({
      name: 'maxDeliveryTime',
      title: 'Tiempo maximo de envio',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'Introduzca un rating desde (1 - 5 estrellas)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Introduzca una clasificacion '),
    }),
    defineField({
      name: 'dishes',
      title: 'Platos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],
})
