import { client } from '@/sanity/lib/client'
import {
  allBooksQuery,
  featuredBooksQuery,
  bookBySlugQuery,
  bookSlugsQuery,
  relatedBooksQuery,
  allCategoriesQuery,
  allCollaborationsQuery,
  allServicePackagesQuery,
  siteSettingsQuery,
  statsQuery,
} from '@/sanity/lib/queries'
import type {
  BookSummary,
  BookDetail,
  Category,
  Collaboration,
  ServicePackage,
  SiteSettings,
  SiteStats,
} from '@/lib/types'

// --- BOOKS ---
export async function getAllBooks(): Promise<BookSummary[]> {
  return client.fetch<BookSummary[]>(allBooksQuery)
}

export async function getFeaturedBooks(): Promise<BookSummary[]> {
  return client.fetch<BookSummary[]>(featuredBooksQuery)
}

export async function getBookBySlug(slug: string): Promise<BookDetail | null> {
  return client.fetch<BookDetail | null>(bookBySlugQuery, { slug })
}

export async function getBookSlugs(): Promise<{ slug: string }[]> {
  return client.fetch<{ slug: string }[]>(bookSlugsQuery)
}

export async function getRelatedBooks(categoryRef: string, currentId: string): Promise<BookSummary[]> {
  return client.fetch<BookSummary[]>(relatedBooksQuery, { categoryRef, currentId })
}

// --- CATEGORIES ---
export async function getAllCategories(): Promise<Category[]> {
  return client.fetch<Category[]>(allCategoriesQuery)
}

// --- COLLABORATIONS ---
export async function getAllCollaborations(): Promise<Collaboration[]> {
  return client.fetch<Collaboration[]>(allCollaborationsQuery)
}

// --- SERVICE PACKAGES ---
export async function getAllServicePackages(): Promise<ServicePackage[]> {
  return client.fetch<ServicePackage[]>(allServicePackagesQuery)
}

// --- SITE SETTINGS ---
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(siteSettingsQuery)
}

// --- STATS ---
export async function getSiteStats(): Promise<SiteStats> {
  return client.fetch<SiteStats>(statsQuery)
}
