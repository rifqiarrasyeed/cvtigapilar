import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, CheckCircle2, MessageCircle, Sparkles, Star } from 'lucide-react';
import BookCard from '@/components/public/BookCard';
import ScrollReveal from '@/components/public/ScrollReveal';
import { getFeaturedBooks, getAllCollaborations, getAllServicePackages, getSiteStats } from '@/lib/data';
import styles from './page.module.css';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

export default async function HomePage() {
  const [books, allCollabs, packages, stats] = await Promise.all([
    getFeaturedBooks(),
    getAllCollaborations(),
    getAllServicePackages(),
    getSiteStats(),
  ]);

  const activeCollabs = allCollabs.filter((c) => c.status === 'open');
  const displayBooks = books.length > 0 ? books : [];

  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <div className={styles.heroGradient} />
          <div className={styles.heroPattern} />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <ScrollReveal direction="left">
              <span className={styles.heroLabel}>CV Tiga Pilar · Malang</span>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={100}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroLine1}>Menerbitkan</span>
                <span className={styles.heroLine2}>Karya Ilmiah</span>
                <span className={styles.heroLine3}>Berkualitas</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <p className={styles.heroSubtitle}>
                Penerbit buku akademis profesional dengan layanan ISBN, HKI, 
                dan pendaftaran Perpustakaan Nasional.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={300}>
              <div className={styles.heroCtas}>
                <Link href="/katalog" className={styles.heroCtaPrimary}>
                  Jelajahi Katalog <ArrowRight size={16} />
                </Link>
                <Link href="/kontak" className={styles.heroCtaSecondary}>
                  Hubungi Kami
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.heroVisual}>
            <ScrollReveal direction="right" delay={200}>
              <div className={styles.bookStack}>
                <div className={`${styles.bookFloat} ${styles.bookFloat1}`}>
                  <div className={styles.bookCover}>
                    <span className={styles.bookCoverLabel}>Referensi</span>
                    <span className={styles.bookCoverTitle}>Administrasi Publik</span>
                  </div>
                </div>
                <div className={`${styles.bookFloat} ${styles.bookFloat2}`}>
                  <div className={styles.bookCover}>
                    <span className={styles.bookCoverLabel}>Book Chapter</span>
                    <span className={styles.bookCoverTitle}>Transformasi Digital</span>
                  </div>
                </div>
                <div className={`${styles.bookFloat} ${styles.bookFloat3}`}>
                  <div className={styles.bookCover}>
                    <span className={styles.bookCoverLabel}>Monograf</span>
                    <span className={styles.bookCoverTitle}>Ekonomi Syariah</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === DIVIDER === */}
      <div className="divider divider--diamond" />

      {/* === ABOUT STRIP === */}
      <section className={styles.aboutStrip}>
        <div className={styles.aboutInner}>
          <ScrollReveal direction="left">
            <div className={styles.aboutLeft}>
              <span className="section-number">01</span>
              <span className="section-label">Tentang Kami</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className={styles.aboutRight}>
              <p className={styles.aboutText}>
                CV Tiga Pilar adalah penerbit buku akademis yang berlokasi di Malang, 
                Jawa Timur. Kami melayani penerbitan berbagai jenis karya ilmiah—mulai 
                dari buku kolaborasi <em>(book chapter)</em>, monograf, buku ajar, hingga buku 
                referensi—dengan komitmen pada kualitas editorial dan legalitas penerbitan.
              </p>
              <address className={styles.aboutAddress}>
                Jl. Belakang RSU No. 10, Malang, Jawa Timur
              </address>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === FEATURED BOOKS === */}
      {displayBooks.length > 0 && (
        <section className={styles.booksSection}>
          <div className={styles.booksInner}>
            <ScrollReveal direction="left">
              <div className={styles.sectionHeader}>
                <div>
                  <span className="section-number">02</span>
                  <span className="section-label">Terbitan Terbaru</span>
                </div>
                <Link href="/katalog" className="btn btn--ghost">
                  Lihat Semua <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
            
            <div className={styles.booksGrid}>
              {displayBooks.slice(0, 1).map((book) => (
                <ScrollReveal key={book._id} delay={100} direction="left" className={styles.bookFeatured}>
                  <BookCard book={book} size="large" />
                </ScrollReveal>
              ))}
              <div className={styles.booksSmallStack}>
                {displayBooks.slice(1, 3).map((book, i) => (
                  <ScrollReveal key={book._id} delay={150 + i * 100} direction="right">
                    <BookCard book={book} size="small" />
                  </ScrollReveal>
                ))}
              </div>
              {displayBooks.slice(3, 6).map((book, i) => (
                <ScrollReveal key={book._id} delay={200 + i * 100} direction="scale" className={styles.bookRegular}>
                  <BookCard book={book} size="medium" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === STATS === */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          {[
            { number: stats.bookCount > 0 ? `${stats.bookCount}+` : '120+', label: 'Buku Terbit', icon: BookOpen },
            { number: stats.authorCount > 0 ? `${stats.authorCount}+` : '500+', label: 'Penulis', icon: Users },
            { number: '100%', label: 'Ber-ISBN', icon: Award },
            { number: stats.categoryCount > 0 ? `${stats.categoryCount}+` : '50+', label: 'Kategori', icon: CheckCircle2 },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction="scale">
              <div className={styles.statItem}>
                <stat.icon size={20} className={styles.statIcon} />
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* === COLLABORATION BANNER === */}
      <section className={styles.collabBanner}>
        <div className={styles.collabInner}>
          <ScrollReveal direction="left">
            <div className={styles.collabContent}>
              <div className={styles.collabLeft}>
                <span className="section-number" style={{ color: 'rgba(247,243,237,0.15)' }}>03</span>
                <h2 className={styles.collabTitle}>Kolaborasi Buku</h2>
                <p className={styles.collabSubtitle}>
                  Bergabunglah sebagai penulis dalam buku kolaborasi ber-ISBN dan HKI. 
                  Bisa klaim BKD, SINTA, SISTER, Jabfung, dan Tukin.
                </p>
              </div>
              <div className={styles.collabRight}>
                {activeCollabs.length > 0 && (
                  <ScrollReveal direction="right" delay={200}>
                    <div className={styles.collabPreview}>
                      <span className={styles.collabSlotsLabel}>
                        {activeCollabs[0].filledChapters}/{activeCollabs[0].totalChapters} Slot Terisi
                      </span>
                      <div className={styles.collabProgressBar}>
                        <div
                          className={styles.collabProgressFill}
                          style={{
                            width: `${
                              ((activeCollabs[0].filledChapters || 0) /
                                (activeCollabs[0].totalChapters || 1)) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                )}
                <ScrollReveal direction="right" delay={300}>
                  <Link href="/kolaborasi" className={styles.collabCta}>
                    Lihat Tema Terbuka <ArrowRight size={16} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === SERVICES === */}
      {packages.length > 0 && (
        <section className={styles.servicesSection}>
          <div className={styles.servicesInner}>
            <ScrollReveal direction="right">
              <div className={styles.sectionHeader}>
                <div>
                  <span className="section-number">04</span>
                  <span className="section-label">Layanan</span>
                </div>
                <Link href="/layanan" className="btn btn--ghost">
                  Detail Lengkap <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>

            <div className={styles.servicesGrid}>
              {packages.map((pkg, i) => (
                <ScrollReveal key={pkg._id} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`${styles.serviceCard} ${pkg.isPopular ? styles.servicePopular : ''}`}>
                    {pkg.isPopular && <span className={styles.popularTag}>Populer</span>}
                    <h3 className={styles.serviceName}>{pkg.name}</h3>
                    <p className={styles.serviceSubtitle}>{pkg.subtitle}</p>
                    <div className={styles.servicePrice}>
                      <span className={styles.servicePriceValue}>{formatPrice(pkg.price)}</span>
                      <span className={styles.servicePriceUnit}>{pkg.priceUnit}</span>
                    </div>
                    <div className={styles.serviceDivider} />
                    <ul className={styles.serviceFeatures}>
                      {pkg.features.slice(0, 5).map((f, fi) => (
                        <li key={fi} className={styles.serviceFeature}>
                          <CheckCircle2 size={14} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/6283835352717?text=${encodeURIComponent(
                        `Halo CV Tiga Pilar, saya tertarik dengan paket ${pkg.name}. Mohon info lebih lanjut.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.serviceCta}
                    >
                      <MessageCircle size={14} />
                      Pesan via WhatsApp
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === TESTIMONIAL === */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialInner}>
          <ScrollReveal direction="scale">
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className={styles.testimonialQuote}>
                &ldquo;Proses penerbitan sangat profesional dan transparan. Buku saya terbit tepat 
                waktu dengan kualitas editorial yang sangat baik. Sangat direkomendasikan untuk 
                rekan-rekan dosen yang ingin menerbitkan karya ilmiah.&rdquo;
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <span>NR</span>
                </div>
                <div>
                  <span className={styles.testimonialName}>Dr. Nur Rahmawati, M.Pd.</span>
                  <span className={styles.testimonialRole}>Dosen — Universitas Negeri Malang</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <ScrollReveal direction="scale">
            <h2 className={styles.ctaTitle}>
              Siap Menerbitkan<br />Karya Anda?
            </h2>
            <p className={styles.ctaText}>
              Konsultasikan kebutuhan penerbitan buku Anda bersama kami. 
              Gratis konsultasi awal.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/6283835352717?text=Halo%20CV%20Tiga%20Pilar%2C%20saya%20ingin%20konsultasi%20penerbitan%20buku."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--large"
              >
                <MessageCircle size={18} />
                Konsultasi via WhatsApp
              </a>
              <Link href="/kontak" className="btn btn--outline btn--large">
                Kirim Pesan
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
