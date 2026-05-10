// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

// --- Book ---
export interface BookSummary {
  _id: string
  title: string
  slug: { current: string }
  cover?: SanityImageSource
  isbn: string
  bookType: string
  synopsis: string
  isFeatured: boolean
  publishedAt?: string
  categoryName: string
  categorySlug: string
  authorCount: number
  firstAuthor: string
}

export interface BookDetail {
  _id: string
  title: string
  slug: { current: string }
  cover?: SanityImageSource
  isbn: string
  editor?: string
  bookType: string
  pageCount?: string
  bookSize?: string
  synopsis: string
  publishedAt?: string
  authors?: { name: string; titleDegree?: string }[]
  categoryName: string
  categorySlug: string
}

// --- Category ---
export interface Category {
  _id: string
  name: string
  slug: { current: string }
  bookCount: number
}

// --- Collaboration ---
export interface Chapter {
  chapterNumber: number
  chapterTitle: string
  authorName?: string
  status: 'available' | 'filled' | 'submitted' | 'reviewed'
}

export interface Collaboration {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  cover?: SanityImageSource
  status: 'open' | 'full' | 'published' | 'closed'
  pricePerChapter: number
  coordinatorPrice: number
  deadline?: string
  totalChapters: number
  filledChapters: number
  chapters: Chapter[]
}

// --- Service Package ---
export interface ServicePackage {
  _id: string
  name: string
  subtitle?: string
  price: number
  priceUnit: string
  features: string[]
  isPopular: boolean
  sortOrder: number
}

// --- Site Settings ---
export interface SiteSettings {
  siteName: string
  tagline?: string
  description?: string
  logo?: SanityImageSource
  address?: string
  phone?: string
  email?: string
  whatsapp?: string
  instagram?: string
  facebook?: string
}

// --- Stats ---
export interface SiteStats {
  bookCount: number
  collabCount: number
  authorCount: number
  categoryCount: number
}
