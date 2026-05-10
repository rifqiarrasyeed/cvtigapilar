import Link from 'next/link';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import { getAllServicePackages } from '@/lib/data';
import styles from './page.module.css';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

export default async function LayananPage() {
  const packages = await getAllServicePackages();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ScrollReveal>
          <nav className="breadcrumb">
            <Link href="/">beranda</Link>
            <span className="breadcrumb__separator">/</span>
            <span>layanan</span>
          </nav>
          <h1 className={styles.title}>Layanan Penerbitan</h1>
          <p className={styles.subtitle}>
            Paket penerbitan profesional untuk kebutuhan akademis Anda.
          </p>
        </ScrollReveal>

        {/* Packages Grid */}
        {packages.length > 0 ? (
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg._id} delay={i * 100}>
                <div className={`${styles.packageCard} ${pkg.isPopular ? styles.packagePopular : ''}`}>
                  {pkg.isPopular && <span className={styles.popularTag}>Populer</span>}
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  {pkg.subtitle && <p className={styles.packageSubtitle}>{pkg.subtitle}</p>}
                  <div className={styles.packagePrice}>
                    <span className={styles.priceValue}>{formatPrice(pkg.price)}</span>
                    <span className={styles.priceUnit}>{pkg.priceUnit}</span>
                  </div>
                  <div className={styles.packageDivider} />
                  <ul className={styles.featuresList}>
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className={styles.featureItem}>
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
                    className={styles.packageCta}
                  >
                    <MessageCircle size={14} />
                    Pesan via WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Paket layanan segera hadir.</p>
          </div>
        )}

        {/* Process Steps */}
        <ScrollReveal>
          <section className={styles.processSection}>
            <div className={styles.processHeader}>
              <span className="section-number">—</span>
              <h2 className={styles.processTitle}>Alur Penerbitan</h2>
            </div>
            <div className={styles.processSteps}>
              {[
                { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan penerbitan via WhatsApp atau email.' },
                { step: '02', title: 'Submit Naskah', desc: 'Kirim naskah untuk proses review editorial.' },
                { step: '03', title: 'Layout & Design', desc: 'Tim kami mendesain layout buku sesuai standar akademis.' },
                { step: '04', title: 'ISBN & HKI', desc: 'Pengurusan ISBN Perpusnas dan pendaftaran HKI.' },
                { step: '05', title: 'Cetak & Terbit', desc: 'Buku dicetak dan didistribusikan.' },
              ].map((step, i) => (
                <div key={step.step} className={styles.stepItem}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>
              Punya pertanyaan? Konsultasikan kebutuhan penerbitan Anda.
            </p>
            <Link href="/kontak" className="btn btn--primary">
              Hubungi Kami <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
