import { type StructureResolver, type ListItemBuilder } from 'sanity/structure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId() || ''
  return !['book', 'category', 'collaboration', 'servicePackage', 'siteSettings', 'contactMessage'].includes(id)
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('CV Tiga Pilar — Admin')
    .items([
      // --- Buku ---
      S.listItem()
        .title('📖 Buku')
        .child(
          S.list()
            .title('Manajemen Buku')
            .id('buku-list')
            .items([
              S.listItem()
                .title('Semua Buku')
                .child(S.documentTypeList('book').title('Semua Buku')),
              S.listItem()
                .title('Unggulan (Beranda)')
                .child(
                  S.documentList()
                    .title('Buku Unggulan')
                    .filter('_type == "book" && isFeatured == true')
                ),
              S.divider(),
              S.listItem()
                .title('Berdasarkan Kategori')
                .child(
                  S.documentTypeList('category')
                    .title('Pilih Kategori')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Buku')
                        .filter('_type == "book" && category._ref == $categoryId')
                        .params({ categoryId })
                    )
                ),
              S.divider(),
              S.listItem()
                .title('Kelola Kategori')
                .child(S.documentTypeList('category').title('Kategori')),
            ])
        ),

      // --- Kolaborasi ---
      S.listItem()
        .title('🤝 Kolaborasi')
        .child(
          S.list()
            .title('Kolaborasi Buku')
            .id('kolaborasi-list')
            .items([
              S.listItem()
                .title('Semua Kolaborasi')
                .child(S.documentTypeList('collaboration').title('Semua Kolaborasi')),
              S.divider(),
              S.listItem()
                .title('Pendaftaran Terbuka')
                .child(
                  S.documentList()
                    .title('Terbuka')
                    .filter('_type == "collaboration" && status == "open"')
                ),
              S.listItem()
                .title('Slot Penuh')
                .child(
                  S.documentList()
                    .title('Penuh')
                    .filter('_type == "collaboration" && status == "full"')
                ),
              S.listItem()
                .title('Sudah Terbit')
                .child(
                  S.documentList()
                    .title('Terbit')
                    .filter('_type == "collaboration" && status == "published"')
                ),
            ])
        ),

      // --- Paket Layanan ---
      S.listItem()
        .title('💼 Paket Layanan')
        .child(S.documentTypeList('servicePackage').title('Paket Layanan')),

      S.divider(),

      // --- Pesan Masuk ---
      S.listItem()
        .title('✉️ Pesan Masuk')
        .child(
          S.list()
            .title('Pesan')
            .id('pesan-list')
            .items([
              S.listItem()
                .title('Semua Pesan')
                .child(
                  S.documentTypeList('contactMessage')
                    .title('Semua Pesan')
                    .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Belum Dibaca')
                .child(
                  S.documentList()
                    .title('Belum Dibaca')
                    .filter('_type == "contactMessage" && isRead != true')
                    .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                ),
            ])
        ),

      // --- Pengaturan ---
      S.listItem()
        .title('⚙️ Pengaturan Website')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // Catch-all
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
