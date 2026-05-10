import { groq } from 'next-sanity'

// --- BOOKS ---

export const allBooksQuery = groq`
  *[_type == "book" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    cover,
    isbn,
    bookType,
    synopsis,
    isFeatured,
    publishedAt,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "authorCount": count(authors),
    "firstAuthor": authors[0].name
  }
`

export const featuredBooksQuery = groq`
  *[_type == "book" && isPublished == true && isFeatured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    cover,
    isbn,
    bookType,
    synopsis,
    isFeatured,
    publishedAt,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "authorCount": count(authors),
    "firstAuthor": authors[0].name
  }
`

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    cover,
    isbn,
    editor,
    bookType,
    pageCount,
    bookSize,
    synopsis,
    publishedAt,
    authors[] { name, titleDegree },
    "categoryName": category->name,
    "categorySlug": category->slug.current
  }
`

export const bookSlugsQuery = groq`
  *[_type == "book" && isPublished == true && defined(slug.current)] { "slug": slug.current }
`

export const relatedBooksQuery = groq`
  *[_type == "book" && isPublished == true && category._ref == $categoryRef && _id != $currentId] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    cover,
    isbn,
    bookType,
    "categoryName": category->name,
    "firstAuthor": authors[0].name
  }
`

// --- CATEGORIES ---

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(sortOrder asc) {
    _id,
    name,
    slug,
    "bookCount": count(*[_type == "book" && category._ref == ^._id && isPublished == true])
  }
`

// --- COLLABORATIONS ---

export const allCollaborationsQuery = groq`
  *[_type == "collaboration"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    cover,
    status,
    pricePerChapter,
    coordinatorPrice,
    deadline,
    "totalChapters": count(chapters),
    "filledChapters": count(chapters[status != "available"]),
    chapters[] { chapterNumber, chapterTitle, authorName, status }
  }
`

// --- SERVICE PACKAGES ---

export const allServicePackagesQuery = groq`
  *[_type == "servicePackage" && isActive == true] | order(sortOrder asc) {
    _id,
    name,
    subtitle,
    price,
    priceUnit,
    features,
    isPopular,
    sortOrder
  }
`

// --- SITE SETTINGS ---

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    logo,
    address,
    phone,
    email,
    whatsapp,
    instagram,
    facebook
  }
`

// --- STATS ---

export const statsQuery = groq`{
  "bookCount": count(*[_type == "book" && isPublished == true]),
  "collabCount": count(*[_type == "collaboration"]),
  "authorCount": count(*[_type == "book" && isPublished == true][].authors[].name),
  "categoryCount": count(*[_type == "category"])
}`
