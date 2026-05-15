import Link from 'next/link';
import { MessageCircle, CheckCircle2, Users, BookOpen, Award, FileText } from 'lucide-react';
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

const dummyCollaborations = [
  {
    _id: 'dc-1',
    title: 'Transformasi Digital dalam Pendidikan Tinggi',
    description: 'Buku kolaborasi yang mengkaji dampak transformasi digital terhadap metode pengajaran, kurikulum, dan manajemen perguruan tinggi di era Society 5.0.',
    status: 'open',
    totalChapters: 12,
    filledChapters: 8,
    pricePerChapter: 1200000,
    coordinatorPrice: 900000,
    chapters: [
      { chapterNumber: 1, chapterTitle: 'Konsep Transformasi Digital', status: 'filled', authorName: 'Dr. Bambang Irawan' },
      { chapterNumber: 2, chapterTitle: 'E-Learning & Blended Learning', status: 'filled', authorName: 'Prof. Siti Aminah' },
      { chapterNumber: 3, chapterTitle: 'AI dalam Pendidikan', status: 'filled', authorName: 'Dr. Rizky Pratama' },
      { chapterNumber: 4, chapterTitle: 'Big Data Analytics', status: 'available', authorName: null },
      { chapterNumber: 5, chapterTitle: 'Cybersecurity di Kampus', status: 'available', authorName: null },
      { chapterNumber: 6, chapterTitle: 'IoT untuk Smart Campus', status: 'filled', authorName: 'Ir. Dewi Lestari' },
    ],
  },
  {
    _id: 'dc-2',
    title: 'Manajemen Sumber Daya Manusia Berkelanjutan',
    description: 'Eksplorasi mendalam tentang praktik MSDM berkelanjutan yang mendukung kesejahteraan karyawan dan pertumbuhan organisasi.',
    status: 'open',
    totalChapters: 10,
    filledChapters: 5,
    pricePerChapter: 1200000,
    coordinatorPrice: 900000,
    chapters: [
      { chapterNumber: 1, chapterTitle: 'Paradigma MSDM Modern', status: 'filled', authorName: 'Dr. Ahmad Fauzi' },
      { chapterNumber: 2, chapterTitle: 'Work-Life Balance', status: 'filled', authorName: 'Dr. Nur Aini' },
      { chapterNumber: 3, chapterTitle: 'Talent Management', status: 'available', authorName: null },
      { chapterNumber: 4, chapterTitle: 'Employee Well-being', status: 'available', authorName: null },
      { chapterNumber: 5, chapterTitle: 'Green HRM', status: 'available', authorName: null },
    ],
  },
  {
    _id: 'dc-3',
    title: 'Ekonomi Kreatif & Kewirausahaan',
    description: 'Kajian komprehensif tentang ekosistem ekonomi kreatif Indonesia dan peluang kewirausahaan di era digital.',
    status: 'full',
    totalChapters: 10,
    filledChapters: 10,
    pricePerChapter: 1200000,
    coordinatorPrice: 900000,
    chapters: [],
  },
];

const benefits = [
  { icon: Award, text: 'Buku terbit ber-ISBN resmi Perpusnas' },
  { icon: FileText, text: 'Sertifikat HKI (Hak Kekayaan Intelektual)' },
  { icon: BookOpen, text: 'Buku cetak eksemplar penulis' },
  { icon: FileText, text: 'E-book PDF untuk portofolio' },
  { icon: CheckCircle2, text: 'Bisa klaim BKD, SINTA, SISTER' },
  { icon: Users, text: 'Pendampingan editorial profesional' },
];

export default async function KolaborasiPage() {
  const sanityCollabs = await getAllCollaborations();
  const collaborations = sanityCollabs.length > 0 ? sanityCollabs : dummyCollaborations;

  return (
    <div className={styles.page}>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} />
        <div className={styles.heroInner}>
          <ScrollReveal direction="left">
            <div>
              <nav className="breadcrumb">
                <Link href="/">beranda</Link>
                <span className="breadcrumb__separator">/</span>
                <span>kolaborasi</span>
              </nav>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroLine1}>Kolaborasi</span>
                <span className={styles.heroLine2}>Buku Akademis</span>
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div>
              <p className={styles.heroDesc}>
                Bergabunglah sebagai penulis dalam program book chapter kolaborasi ber-ISBN dan HKI.
                Bisa klaim BKD, SINTA, SISTER, Jabfung, dan Tukin.
              </p>
              <div className={styles.heroBadges}>
                {['ISBN Resmi', 'HKI Terdaftar', 'BKD/SINTA'].map((b) => (
                  <span key={b} className={styles.heroBadge}>{b}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === THEMES === */}
      <section className={styles.themesSection}>
        <div className={styles.themesInner}>
          {collaborations.length > 0 ? (
            <div className={styles.themesGrid}>
              {collaborations.map((theme, i) => {
                const progress = theme.totalChapters > 0
                  ? Math.round((theme.filledChapters / theme.totalChapters) * 100)
                  : 0;

                return (
                  <ScrollReveal key={theme._id} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                    <div className={`${styles.themeCard} ${theme.status !== 'open' ? styles.themeCardInactive : ''}`}>
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

                      <div className={styles.progressWrap}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                        <span className={styles.progressPercent}>{progress}%</span>
                      </div>

                      <div className={styles.themePrice}>
                        <div className={styles.priceBlock}>
                          <span className={styles.priceLabel}>Penulis</span>
                          <span className={styles.priceValue}>{formatPrice(theme.pricePerChapter)}/bab</span>
                        </div>
                        <div className={styles.priceBlock}>
                          <span className={styles.priceLabel}>Koordinator</span>
                          <span className={styles.priceValue}>{formatPrice(theme.coordinatorPrice)}/bab</span>
                        </div>
                      </div>

                      {theme.chapters && theme.chapters.length > 0 && (
                        <div className={styles.chapterSlots}>
                          <span className={styles.chapterSlotsTitle}>Daftar Bab</span>
                          {theme.chapters.map((ch, ci) => (
                            <div key={ci} className={`${styles.chapterSlot} ${ch.status === 'filled' ? styles.chapterFilled : ''}`}>
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
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsInner}>
          <ScrollReveal direction="right">
            <h2 className={styles.benefitsTitle}>Apa yang Didapatkan?</h2>
            <p className={styles.benefitsSubtitle}>
              Setiap penulis dalam program kolaborasi mendapatkan manfaat lengkap berikut.
            </p>
          </ScrollReveal>
          <div className={styles.benefitsGrid}>
            {benefits.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 100} direction="scale">
                <div className={styles.benefitCard}>
                  <item.icon size={20} className={styles.benefitIcon} />
                  <span className={styles.benefitText}>{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
