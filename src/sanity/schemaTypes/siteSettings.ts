import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({ name: 'siteName', title: 'Nama Website', type: 'string', initialValue: 'CV Tiga Pilar' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'address', title: 'Alamat', type: 'string' }),
    defineField({ name: 'phone', title: 'Nomor Telepon', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'Nomor WhatsApp (dengan kode negara)', type: 'string', description: 'Contoh: 6283835352717' }),
    defineField({ name: 'instagram', title: 'Instagram', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook', type: 'string' }),
  ],
  preview: {
    select: { title: 'siteName' },
  },
})
