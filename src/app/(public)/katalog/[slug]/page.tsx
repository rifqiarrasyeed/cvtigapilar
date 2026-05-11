import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, FileText, Layers, BookOpen, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import BookCard from '@/components/public/BookCard';
import { getBookBySlug, getBookSlugs } from '@/lib/data';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { relatedBooksQuery } from '@/sanity/lib/queries';
import styles from './page.module.css';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const slugs = await getBookSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);
  if (!book) notFound();

  // Fetch related books by same category
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let relatedBooks: any[] = [];
  if (book.categorySlug) {
    const catRef = await client.fetch<string | null>(
      `*[_type == "book" && slug.current == $slug][0].category._ref`,
      { slug }
    );
    if (catRef) {
      relatedBooks = await client.fetch<any[]>(relatedBooksQuery, {
        categoryRef: catRef,
        currentId: book._id,
      });
    }
  }

  const hasCover = !!book.cover;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ScrollReveal>
          <nav className="breadcrumb">
            <Link href="/">beranda</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/katalog">katalog</Link>
            <span className="breadcrumb__separator">/</span>
            <span>{book.title}</span>
          </nav>
        </ScrollReveal>

        <Link href="/katalog" className={styles.backLink}>
          <ArrowLeft size={16} /> Kembali ke Katalog
        </Link>

        <div className={styles.detailGrid}>
          {/* Cover */}
          <ScrollReveal className={styles.coverCol}>
            <div className={styles.coverSticky}>
              <div className={styles.coverImage}>
                {hasCover ? (
                  <Image
                    src={urlFor(book.cover!).width(480).height(680).url()}
                    alt={book.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.coverPlaceholder}>
                    <span className={styles.coverIcon}>📖</span>
                    <span className={styles.coverTitle}>{book.title}</span>
                  </div>
                )}
              </div>
              <a
                href={`https://wa.me/6283835352717?text=${encodeURIComponent(
                  `Halo CV Tiga Pilar, saya ingin bertanya tentang buku "${book.title}" (ISBN: ${book.isbn}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--large"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                Tanya via WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={150} className={styles.infoCol}>
            <span className={`badge ${book.bookType === 'Book Chapter' ? 'badge--terracotta' : 'badge--sage'}`}>
              {book.bookType}
            </span>
            <h1 className={styles.bookTitle}>{book.title}</h1>

            <div className={styles.metaBlock}>
              <div className="dot-leader">
                <span className="dot-leader__label">ISBN</span>
                <span className="dot-leader__dots" />
                <span className="dot-leader__value">{book.isbn}</span>
              </div>
              {book.categoryName && (
                <div className="dot-leader">
                  <span className="dot-leader__label">Kategori</span>
                  <span className="dot-leader__dots" />
                  <span className="dot-leader__value">{book.categoryName}</span>
                </div>
              )}
              {book.editor && (
                <div className="dot-leader">
                  <span className="dot-leader__label">Editor</span>
                  <span className="dot-leader__dots" />
                  <span className="dot-leader__value">{book.editor}</span>
                </div>
              )}
              {book.pageCount && (
                <div className="dot-leader">
                  <span className="dot-leader__label">Halaman</span>
                  <span className="dot-leader__dots" />
                  <span className="dot-leader__value">{book.pageCount}</span>
                </div>
              )}
              {book.bookSize && (
                <div className="dot-leader">
                  <span className="dot-leader__label">Ukuran</span>
                  <span className="dot-leader__dots" />
                  <span className="dot-leader__value">{book.bookSize}</span>
                </div>
              )}
              {book.publishedAt && (
                <div className="dot-leader">
                  <span className="dot-leader__label">Terbit</span>
                  <span className="dot-leader__dots" />
                  <span className="dot-leader__value">
                    {new Date(book.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
              )}
            </div>

            {/* Synopsis */}
            <div className={styles.synopsisBlock}>
              <h2 className={styles.sectionTitle}>Sinopsis</h2>
              <p className={styles.synopsisText}>{book.synopsis}</p>
            </div>

            {/* Authors */}
            {book.authors && book.authors.length > 0 && (
              <div className={styles.authorsBlock}>
                <h2 className={styles.sectionTitle}>Penulis</h2>
                <div className={styles.authorsList}>
                  {book.authors.map((author, i) => (
                    <div key={i} className={styles.authorItem}>
                      <span className={styles.authorNumber}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <span className={styles.authorName}>{author.name}</span>
                        {author.titleDegree && (
                          <span className={styles.authorDegree}>{author.titleDegree}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className={styles.relatedSection}>
            <ScrollReveal>
              <h2 className={styles.relatedTitle}>Buku Terkait</h2>
            </ScrollReveal>
            <div className={styles.relatedGrid}>
              {relatedBooks.map((rb: any, i: number) => (
                <ScrollReveal key={rb._id} delay={i * 100}>
                  <BookCard book={rb} size="small" />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
