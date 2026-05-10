import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CV Tiga Pilar — Penerbit Buku Akademis Profesional",
    template: "%s — CV Tiga Pilar",
  },
  description:
    "Penerbit buku akademis profesional di Malang. Layanan penerbitan buku kolaborasi, monograf, buku ajar, referensi ber-ISBN dan HKI. Terdaftar di Perpustakaan Nasional.",
  keywords: [
    "penerbit buku",
    "penerbit buku malang",
    "penerbit buku akademis",
    "ISBN",
    "HKI",
    "buku kolaborasi",
    "book chapter",
    "monograf",
    "buku ajar",
    "CV Tiga Pilar",
    "perpustakaan nasional",
  ],
  authors: [{ name: "CV Tiga Pilar" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "CV Tiga Pilar",
    title: "CV Tiga Pilar — Penerbit Buku Akademis Profesional",
    description:
      "Penerbit buku akademis profesional di Malang. Layanan penerbitan buku kolaborasi, monograf, buku ajar, referensi ber-ISBN dan HKI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
