import Link from 'next/link';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import { getAllCollaborations } from '@/lib/data';
import styles from './page.module.css';

const statusLabels: Record<string, string> = {
  open: 'Pendaftaran Terbuka',
  full: 'Slot Penuh',
  published: 'Sudah Terbit',
  closed: 'Ditutup',
};

const statusBadge: Record<string, string> = {
  open: 'badge--sage',
  full: 'badge--warning',
  published: 'badge--terracotta',
  closed: 'badge--charcoal',
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

export default async function KolaborasiPage() {
  const collaborations = await getAllCollaborations();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ScrollReveal>
          <nav className="breadcrumb">
            <Link href="/">beranda</Link>
            <span className="breadcrumb__separator">/</span>
            <span>kolaborasi</span>
          </nav>
          <h1 className={styles.title}>Kolaborasi Buku</h1>
          <p className={styles.subtitle}>
            Bergabunglah sebagai penulis dalam program book chapter kolaborasi ber-ISBN dan HKI.
            <br />Bisa klaim BKD, SINTA, SISTER, Jabfung, dan Tukin.
          </p>
        </ScrollReveal>

        {collaborations.length > 0 ? (
          <div className={styles.themesGrid}>
            {collaborations.map((theme, i) => {
              const progress = theme.totalChapters > 0
                ? Math.round((theme.filledChapters / theme.totalChapters) * 100)
                : 0;

              return (
                <ScrollReveal key={theme._id} delay={i * 100}>
                  <div className={styles.themeCard}>
                    <div className={styles.themeHeader}>
                      <span className={`badge ${statusBadge[theme.status]}`}>
                        {statusLabels[theme.status]}
                      </span>
                      <span className={styles.themeSlots}>
                        {theme.filledChapters}/{theme.totalChapters} bab terisi
                      </span>
                    </div>

                    <h2 className={styles.themeName}>{theme.title}</h2>
                    {theme.description && (
                      <p className={styles.themeDesc}>{theme.description}</p>
                    )}

                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                    </div>

                    <div className={styles.themePrice}>
                      <div>
                        <span className={styles.priceLabel}>Penulis</span>
                        <span className={styles.priceValue}>{formatPrice(theme.pricePerChapter)}/bab</span>
                      </div>
                      <div>
                        <span className={styles.priceLabel}>Koordinator</span>
                        <span className={styles.priceValue}>{formatPrice(theme.coordinatorPrice)}/bab</span>
                      </div>
                    </div>

                    {/* Chapter Slots */}
                    {theme.chapters && theme.chapters.length > 0 && (
                      <div className={styles.chapterSlots}>
                        {theme.chapters.map((ch, ci) => (
                          <div key={ci} className={styles.chapterSlot}>
                            <span className={styles.chapterNum}>Bab {ch.chapterNumber}</span>
                            <span className={styles.chapterTitle}>{ch.chapterTitle}</span>
                            <span className={`status-dot ${ch.status === 'available' ? 'status-dot--available' : 'status-dot--active'}`} />
                            {ch.authorName ? (
                              <span className={styles.chapterAuthor}>{ch.authorName}</span>
                            ) : (
                              <span className={styles.chapterOpen}>tersedia</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {theme.status === 'open' && (
                      <a
                        href={`https://wa.me/6283835352717?text=${encodeURIComponent(
                          `Halo CV Tiga Pilar, saya ingin mendaftar sebagai penulis pada kolaborasi buku "${theme.title}". Mohon info lebih lanjut.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.themeCta}
                      >
                        <MessageCircle size={16} />
                        Daftar via WhatsApp
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Belum ada tema kolaborasi yang tersedia saat ini.</p>
          </div>
        )}

        {/* Info Blocks */}
        <ScrollReveal>
          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Apa yang Didapatkan?</h3>
            <div className={styles.infoGrid}>
              {[
                'Buku terbit ber-ISBN resmi Perpusnas',
                'Sertifikat HKI (Hak Kekayaan Intelektual)',
                'Buku cetak eksemplar penulis',
                'E-book PDF untuk portofolio',
                'Bisa klaim BKD, SINTA, SISTER',
                'Pendampingan editorial profesional',
              ].map((item) => (
                <div key={item} className={styles.infoItem}>
                  <CheckCircle2 size={16} className={styles.infoCheck} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
