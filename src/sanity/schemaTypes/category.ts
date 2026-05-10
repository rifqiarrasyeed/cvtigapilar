import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  icon: () => '📂',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Kategori',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Urutan',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Urutan', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] },
    { title: 'Nama A-Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name' },
  },
})
