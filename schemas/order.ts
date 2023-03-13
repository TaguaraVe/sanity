import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'order',
  title: 'Ordenes',
  type: 'document',
  fields: [
    defineField({
      name: 'order_id',
      title: 'Numero de la orden',
      type: 'string',
    }),
    defineField({
      name: 'total',
      title: 'total de la orden',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Estado de la orden',
      type: 'string',
    }),
  ],
})
