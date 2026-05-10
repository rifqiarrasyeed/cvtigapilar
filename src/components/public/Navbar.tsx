'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'beranda' },
  { href: '/katalog', label: 'katalog' },
  { href: '/kolaborasi', label: 'kolaborasi' },
  { href: '/layanan', label: 'layanan' },
  { href: '/tentang', label: 'tentang' },
  { href: '/kontak', label: 'kontak' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Navigasi utama">
        <Link href="/" className={styles.brand} aria-label="CV Tiga Pilar - Beranda">
          <span className={styles.brandText}>CV Tiga Pilar</span>
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.linkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6283835352717"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waButton}
            aria-label="Hubungi via WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </header>
  );
}
