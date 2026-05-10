import Link from 'next/link';
import Image from 'next/image';
import type { BookSummary } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import styles from './BookCard.module.css';

interface BookCardProps {
  book: BookSummary;
  size?: 'small' | 'medium' | 'large';
  showMeta?: boolean;
}

export default function BookCard({ book, size = 'medium', showMeta = true }: BookCardProps) {
  const hasCover = !!book.cover;
  const authorLabel = book.firstAuthor
    ? `${book.firstAuthor}${book.authorCount > 1 ? ` +${book.authorCount - 1}` : ''}`
    : '';

  return (
    <Link href={`/katalog/${book.slug.current}`} className={`${styles.card} ${styles[size]}`}>
      <div className={styles.coverWrap}>
        <div className={styles.cover} style={{ backgroundColor: '#e2ddd5' }}>
          {hasCover ? (
            <Image
              src={urlFor(book.cover!).width(400).height(560).url()}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.coverPlaceholder}>
              <span className={styles.coverIcon}>📖</span>
              <span className={styles.coverTitle}>{book.title}</span>
            </div>
          )}
        </div>
        {book.categoryName && (
          <span className={styles.categoryBadge}>{book.categoryName}</span>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{book.title}</h3>
        {showMeta && (
          <>
            {authorLabel && (
              <p className={styles.author}>{authorLabel}</p>
            )}
            <span className={styles.isbn}>{book.isbn}</span>
          </>
        )}
        <span className={styles.typeBadge}>{book.bookType}</span>
      </div>
    </Link>
  );
}
