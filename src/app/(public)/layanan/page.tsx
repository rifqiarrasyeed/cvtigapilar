import Link from 'next/link';
import { MessageCircle, CheckCircle2, ArrowRight, Sparkles, FileText, Palette, Award, Printer } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import { getAllServicePackages } from '@/lib/data';
import styles from './page.module.css';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

const dummyPackages = [
  {
    _id: 'dummy-1',
    name: 'Book Chapter',
    subtitle: 'Kolaborasi penulisan bab buku',
    price: 1200000,
    priceUnit: '/bab',
    isPopular: false,
    features: [
      'Penulisan 1 bab dalam buku kolaborasi',
      'ISBN resmi Perpustakaan Nasional',
      'Sertifikat HKI terdaftar',
      'Layout dan desain profesional',
      'Buku cetak 1 eksemplar',
      'E-book PDF untuk portofolio',
    ],
  },
  {
    _id: 'dummy-2',
    name: 'Buku Ajar',
    subtitle: 'Penerbitan buku ajar perguruan tinggi',
    price: 5500000,
    priceUnit: '/buku',
    isPopular: true,
    features: [
      'Penerbitan buku ajar lengkap',
      'ISBN resmi Perpustakaan Nasional',
      'Sertifikat HKI terdaftar',
      'Review editorial profesional',
      'Desain cover premium',
      'Layout isi sesuai standar BAN-PT',
      'Cetak 10 eksemplar',
      'E-book PDF',
    ],
  },
  {
    _id: 'dummy-3',
    name: 'Monograf',
    subtitle: 'Penerbitan buku monograf hasil riset',
    price: 6000000,
    priceUnit: '/buku',
    isPopular: false,
    features: [
      'Penerbitan monograf lengkap',
      'ISBN resmi Perpustakaan Nasional',
      'Sertifikat HKI terdaftar',
      'Proofreading & editing mendalam',
      'Desain cover eksklusif',
      'Layout profesional',
      'Cetak 10 eksemplar',
    ],
  },
  {
    _id: 'dummy-4',
    name: 'Buku Referensi',
    subtitle: 'Penerbitan buku referensi akademis',
    price: 7500000,
    priceUnit: '/buku',
    isPopular: false,
    features: [
      'Penerbitan buku referensi lengkap',
      'ISBN resmi Perpustakaan Nasional',
      'Sertifikat HKI terdaftar',
      'Review editorial mendalam',
      'Desain premium custom',
      'Cetak 15 eksemplar',
      'Distribusi nasional',
      'E-book + registrasi Perpusnas',
    ],
  },
];

const processSteps = [
  { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan penerbitan via WhatsApp atau email. Kami akan membantu menentukan paket yang sesuai.', icon: MessageCircle },
  { step: '02', title: 'Submit Naskah', desc: 'Kirim naskah untuk proses review editorial. Tim editor kami akan memberikan masukan perbaikan.', icon: FileText },
  { step: '03', title: 'Layout & Desain', desc: 'Tim desainer menata layout buku sesuai standar akademis dengan cover premium.', icon: Palette },
  { step: '04', title: 'ISBN & HKI', desc: 'Pengurusan ISBN Perpustakaan Nasional dan pendaftaran Hak Kekayaan Intelektual (HKI).', icon: Award },
  { step: '05', title: 'Cetak & Terbit', desc: 'Buku dicetak berkualitas tinggi dan didistribusikan sesuai jumlah eksemplar.', icon: Printer },
];

export default async function LayananPage() {
  const sanityPackages = await getAllServicePackages();
  const packages = sanityPackages.length > 0 ? sanityPackages : dummyPackages;

  return (
    <div className={styles.page}>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} />
        <div className={styles.heroInner}>
          <ScrollReveal direction="left">
            <nav className="breadcrumb">
              <Link href="/">beranda</Link>
              <span className="breadcrumb__separator">/</span>
              <span>layanan</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroLine1}>Layanan</span>
              <span className={styles.heroLine2}>Penerbitan</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className={styles.heroDesc}>
              Paket penerbitan profesional untuk kebutuhan akademis Anda. 
              Dari book chapter hingga buku referensi, semua dilengkapi ISBN 
              resmi dan sertifikat HKI.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* === PACKAGES === */}
      <section className={styles.packagesSection}>
        <div className={styles.packagesInner}>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg._id} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`${styles.packageCard} ${pkg.isPopular ? styles.packagePopular : ''}`}>
                  {pkg.isPopular && (
                    <span className={styles.popularTag}>
                      <Sparkles size={10} /> Populer
                    </span>
                  )}
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
                    className={`${styles.packageCta} ${pkg.isPopular ? styles.packageCtaPopular : ''}`}
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

      {/* === PROCESS TIMELINE === */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <ScrollReveal direction="right">
            <div className={styles.processHeader}>
              <span className="section-number">—</span>
              <h2 className={styles.processTitle}>Alur Penerbitan</h2>
              <p className={styles.processSubtitle}>
                Proses penerbitan yang transparan dan terstruktur dari awal hingga buku Anda terbit.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.processTimeline}>
            <div className={styles.processLine} />
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={styles.processStep}>
                  <div className={styles.processStepDot}>
                    <step.icon size={16} />
                  </div>
                  <div className={styles.processStepContent}>
                    <span className={styles.processStepNumber}>{step.step}</span>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <ScrollReveal direction="left">
            <h2 className={styles.faqTitle}>Pertanyaan Umum</h2>
          </ScrollReveal>
          <div className={styles.faqGrid}>
            {[
              { q: 'Berapa lama proses penerbitan?', a: 'Proses penerbitan rata-rata memakan waktu 2-4 minggu, tergantung kesiapan naskah dan jumlah revisi yang diperlukan.' },
              { q: 'Apakah ISBN yang diterbitkan resmi?', a: 'Ya, semua ISBN yang kami terbitkan adalah ISBN resmi yang terdaftar di Perpustakaan Nasional Republik Indonesia.' },
              { q: 'Bisa untuk klaim BKD dan SINTA?', a: 'Tentu. Buku terbitan kami dilengkapi ISBN dan HKI yang sah, sehingga dapat digunakan untuk klaim BKD, SINTA, SISTER, Jabfung, dan Tukin.' },
              { q: 'Bagaimana cara mendaftar?', a: 'Anda bisa langsung menghubungi kami via WhatsApp untuk konsultasi gratis. Tim kami akan memandu proses selanjutnya.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="scale">
                <div className={styles.faqCard}>
                  <h4 className={styles.faqQuestion}>{faq.q}</h4>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className={styles.ctaSection}>
        <ScrollReveal direction="scale">
          <div className={styles.ctaCard}>
            <p className={styles.ctaText}>
              Punya pertanyaan? Konsultasikan kebutuhan penerbitan Anda.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/6283835352717?text=Halo%20CV%20Tiga%20Pilar%2C%20saya%20ingin%20konsultasi%20layanan%20penerbitan."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--large"
              >
                <MessageCircle size={16} />
                Konsultasi via WhatsApp
              </a>
              <Link href="/kontak" className="btn btn--outline btn--large">
                Hubungi Kami <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
