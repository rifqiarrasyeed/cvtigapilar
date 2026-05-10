import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicePackage',
  title: 'Paket Layanan',
  type: 'document',
  icon: () => '💼',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Paket',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Deskripsi singkat paket',
    }),
    defineField({
      name: 'price',
      title: 'Harga (Rupiah)',
      type: 'number',
      validation: (r) => r.required().positive(),
    }),
    defineField({
      name: 'priceUnit',
      title: 'Satuan Harga',
      type: 'string',
      description: 'Contoh: /chapter, /buku',
      initialValue: '/buku',
    }),
    defineField({
      name: 'features',
      title: 'Fitur',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'isPopular',
      title: 'Tandai sebagai Populer',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true,
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
  ],
  preview: {
    select: { title: 'name', subtitle: 'subtitle' },
  },
})
