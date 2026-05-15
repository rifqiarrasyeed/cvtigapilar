'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
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

    return result;
  }, [books, activeCategory, searchQuery, sortBy]);

  return (
    <div className={styles.page}>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} />
        <div className={styles.heroInner}>
          <ScrollReveal direction="left">
            <div>
              <nav className="breadcrumb">
                <a href="/">beranda</a>
                <span className="breadcrumb__separator">/</span>
                <span>katalog</span>
              </nav>
              <h1 className={styles.title}>
                <span className={styles.titleLine1}>Katalog</span>
                <span className={styles.titleLine2}>Buku</span>
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className={styles.subtitle}>
              Jelajahi koleksi lengkap buku terbitan kami — dari monograf, buku ajar, 
              hingga buku referensi akademis.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className={styles.container}>
        {/* Filter Bar */}
        <ScrollReveal delay={100} direction="scale">
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
                direction={i % 3 === 0 ? 'left' : i % 3 === 1 ? 'scale' : 'right'}
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
            <div className={styles.emptyIcon}>
              <BookOpen size={40} />
            </div>
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
