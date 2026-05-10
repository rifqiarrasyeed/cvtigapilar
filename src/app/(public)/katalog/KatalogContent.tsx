'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import BookCard from '@/components/public/BookCard';
import ScrollReveal from '@/components/public/ScrollReveal';
import type { BookSummary, Category } from '@/lib/types';
import styles from './page.module.css';

interface Props {
  books: BookSummary[];
  categories: Category[];
}

export default function KatalogContent({ books, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'az'>('newest');

  const filteredBooks = useMemo(() => {
    let result = [...books];

    if (activeCategory !== 'all') {
      result = result.filter((b) => b.categorySlug === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.isbn.toLowerCase().includes(q) ||
          b.firstAuthor?.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // default 'newest' is already sorted by the GROQ query

    return result;
  }, [books, activeCategory, searchQuery, sortBy]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <nav className="breadcrumb">
              <a href="/">beranda</a>
              <span className="breadcrumb__separator">/</span>
              <span>katalog</span>
            </nav>
            <h1 className={styles.title}>Katalog</h1>
            <p className={styles.subtitle}>—koleksi lengkap buku terbitan kami</p>
          </div>
        </ScrollReveal>

        {/* Filter Bar */}
        <ScrollReveal delay={100}>
          <div className={styles.filterBar}>
            <div className={styles.categoryPills}>
              <button
                className={`${styles.pill} ${activeCategory === 'all' ? styles.pillActive : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Semua
              </button>
              {categories.slice(0, 8).map((cat) => (
                <button
                  key={cat._id}
                  className={`${styles.pill} ${activeCategory === cat.slug.current ? styles.pillActive : ''}`}
                  onClick={() => setActiveCategory(cat.slug.current)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className={styles.searchWrap}>
              <Search size={16} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Cari buku, penulis, ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Info Bar */}
        <div className={styles.infoBar}>
          <span className={styles.resultCount}>
            Menampilkan {filteredBooks.length} dari {books.length} buku
          </span>
          <button
            className={styles.sortToggle}
            onClick={() => setSortBy(sortBy === 'newest' ? 'az' : 'newest')}
          >
            <SlidersHorizontal size={14} />
            urutkan: {sortBy === 'newest' ? 'terbaru' : 'A–Z'}
          </button>
        </div>

        {/* Book Grid */}
        {filteredBooks.length > 0 ? (
          <div className={styles.booksGrid}>
            {filteredBooks.map((book, i) => (
              <ScrollReveal
                key={book._id}
                delay={Math.min(i * 80, 400)}
                className={`${styles.gridItem} ${i === 0 ? styles.gridItemLarge : ''}`}
              >
                <BookCard
                  book={book}
                  size={i === 0 ? 'large' : 'medium'}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              {searchQuery
                ? `Tidak ada buku ditemukan untuk pencarian "${searchQuery}"`
                : 'Belum ada buku yang dipublikasikan.'}
            </p>
            <button
              className="btn btn--ghost"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Reset pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
