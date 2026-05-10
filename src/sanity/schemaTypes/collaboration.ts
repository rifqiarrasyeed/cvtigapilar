import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'collaboration',
  title: 'Kolaborasi Buku',
  type: 'document',
  icon: () => '🤝',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Tema',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 120 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'cover',
      title: 'Cover Tema',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pendaftaran Terbuka', value: 'open' },
          { title: 'Slot Penuh', value: 'full' },
          { title: 'Sudah Terbit', value: 'published' },
          { title: 'Ditutup', value: 'closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'open',
    }),
    defineField({
      name: 'pricePerChapter',
      title: 'Harga per Bab (Rp)',
      type: 'number',
      initialValue: 150000,
    }),
    defineField({
      name: 'coordinatorPrice',
      title: 'Harga Koordinator (Rp)',
      type: 'number',
      initialValue: 200000,
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
    }),
    defineField({
      name: 'chapters',
      title: 'Daftar Bab',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'chapter',
          title: 'Bab',
          fields: [
            defineField({
              name: 'chapterNumber',
              title: 'Nomor Bab',
              type: 'number',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'chapterTitle',
              title: 'Judul Bab',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Nama Penulis',
              type: 'string',
              description: 'Kosongkan jika belum ada penulis',
            }),
            defineField({
              name: 'authorPhone',
              title: 'No. HP Penulis',
              type: 'string',
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Tersedia', value: 'available' },
                  { title: 'Terisi', value: 'filled' },
                  { title: 'Naskah Masuk', value: 'submitted' },
                  { title: 'Sudah Review', value: 'reviewed' },
                ],
              },
              initialValue: 'available',
            }),
          ],
          preview: {
            select: {
              chapterNumber: 'chapterNumber',
              title: 'chapterTitle',
              status: 'status',
            },
            prepare({ chapterNumber, title, status }) {
              return {
                title: `Bab ${chapterNumber}: ${title}`,
                subtitle: status === 'available' ? '🟢 Tersedia' : '🔴 Terisi',
              }
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    { title: 'Terbaru', name: 'createdDesc', by: [{ field: '_createdAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'status', media: 'cover' },
  },
})
