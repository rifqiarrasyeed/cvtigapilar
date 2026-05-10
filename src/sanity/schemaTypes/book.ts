import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Buku',
  type: 'document',
  icon: () => '📖',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Buku',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 120 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Cover Buku',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'synopsis',
      title: 'Sinopsis',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'editor',
      title: 'Editor',
      type: 'string',
    }),
    defineField({
      name: 'bookType',
      title: 'Jenis Buku',
      type: 'string',
      options: {
        list: [
          { title: 'Referensi', value: 'Referensi' },
          { title: 'Monograf', value: 'Monograf' },
          { title: 'Book Chapter', value: 'Book Chapter' },
          { title: 'Buku Ajar', value: 'Buku Ajar' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pageCount',
      title: 'Jumlah Halaman',
      type: 'string',
      description: 'Contoh: ix, 200',
    }),
    defineField({
      name: 'bookSize',
      title: 'Ukuran Buku',
      type: 'string',
      description: 'Contoh: 15,5 × 23 cm',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Penulis',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'author',
          title: 'Penulis',
          fields: [
            defineField({ name: 'name', title: 'Nama', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'titleDegree', title: 'Gelar', type: 'string', description: 'Contoh: S.Pd., M.Pd.' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'titleDegree' },
          },
        },
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Tampilkan di Beranda',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isPublished',
      title: 'Sudah Terbit',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'date',
    }),
  ],
  orderings: [
    { title: 'Terbaru', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: 'Judul A-Z', name: 'titleAsc', by: [{ field: 'title', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'isbn',
      media: 'cover',
    },
  },
})
