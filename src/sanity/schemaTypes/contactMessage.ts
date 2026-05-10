import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'Pesan Masuk',
  type: 'document',
  icon: () => '✉️',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'No. Telepon', type: 'string' }),
    defineField({ name: 'subject', title: 'Subjek', type: 'string' }),
    defineField({ name: 'message', title: 'Pesan', type: 'text' }),
    defineField({
      name: 'isRead',
      title: 'Sudah Dibaca',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    { title: 'Terbaru', name: 'createdDesc', by: [{ field: '_createdAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'subject' },
  },
})
