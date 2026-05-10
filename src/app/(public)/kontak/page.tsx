'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import styles from './page.module.css';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with actual Supabase insert
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ScrollReveal>
          <nav className="breadcrumb">
            <Link href="/">beranda</Link>
            <span className="breadcrumb__separator">/</span>
            <span>kontak</span>
          </nav>
          <h1 className={styles.title}>Kontak</h1>
          <p className={styles.subtitle}>
            Hubungi kami untuk konsultasi penerbitan atau pertanyaan lainnya.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Contact Info */}
          <ScrollReveal>
            <div className={styles.infoCol}>
              <div className={styles.infoHeader}>
                <span className="section-number">01</span>
                <span className="section-label">Informasi</span>
              </div>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <MapPin size={18} className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoCardTitle}>Alamat</h3>
                    <p className={styles.infoCardText}>
                      Jl. Belakang RSU No. 10<br />
                      Malang, Jawa Timur
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <Phone size={18} className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoCardTitle}>Telepon</h3>
                    <a href="tel:+6283835352717" className={styles.infoCardLink}>
                      +62 838-3535-2717
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <Mail size={18} className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoCardTitle}>Email</h3>
                    <a href="mailto:info@cvtigapilar.com" className={styles.infoCardLink}>
                      info@cvtigapilar.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6283835352717?text=Halo%20CV%20Tiga%20Pilar%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20penerbitan%20buku."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waButton}
              >
                <MessageCircle size={18} />
                Chat via WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className="section-number">02</span>
                <span className="section-label">Kirim Pesan</span>
              </div>

              {submitted ? (
                <div className={styles.successMsg}>
                  <CheckCircle2 size={40} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Pesan Terkirim!</h3>
                  <p className={styles.successText}>
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                  </p>
                  <button
                    className="btn btn--ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Nama Lengkap</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Dr. Nama Lengkap, S.Pd., M.Pd."
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="nama@email.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>No. Telepon</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="08xx-xxxx-xxxx"
                        className={styles.input}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>Subjek</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        placeholder="Konsultasi penerbitan buku"
                        className={styles.input}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Pesan</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tuliskan pesan atau pertanyaan Anda..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    <Send size={16} />
                    {loading ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
