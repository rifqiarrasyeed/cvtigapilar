import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              CV Tiga Pilar
            </Link>
            <p className={styles.tagline}>
              Menerbitkan karya ilmiah berkualitas untuk kemajuan akademis Indonesia.
            </p>
            <div className={styles.dividerShort} />
            <p className={styles.license}>
              Penerbit terdaftar di Perpustakaan Nasional Republik Indonesia
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigasi</h4>
            <nav aria-label="Footer navigation">
              <Link href="/katalog" className={styles.navLink}>Katalog Buku</Link>
              <Link href="/kolaborasi" className={styles.navLink}>Kolaborasi</Link>
              <Link href="/layanan" className={styles.navLink}>Layanan</Link>
              <Link href="/tentang" className={styles.navLink}>Tentang Kami</Link>
              <Link href="/kontak" className={styles.navLink}>Kontak</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Kontak</h4>
            <div className={styles.contactItem}>
              <MapPin size={14} className={styles.contactIcon} />
              <span>Jl. Belakang RSU No. 10, Malang</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={14} className={styles.contactIcon} />
              <a href="tel:+6283835352717">+62 838-3535-2717</a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={14} className={styles.contactIcon} />
              <a href="mailto:info@cvtigapilar.com">info@cvtigapilar.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLine} />
          <p className={styles.copyright}>
            © {currentYear} CV Tiga Pilar. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
