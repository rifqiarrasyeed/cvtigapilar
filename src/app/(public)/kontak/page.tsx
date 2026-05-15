'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
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
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

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
              <span>kontak</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroLine1}>Hubungi</span>
              <span className={styles.heroLine2}>Kami</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className={styles.heroDesc}>
              Hubungi kami untuk konsultasi penerbitan atau pertanyaan lainnya. 
              Tim kami siap membantu Anda menerbitkan karya ilmiah berkualitas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* === MAIN GRID === */}
      <section className={styles.mainSection}>
        <div className={styles.mainInner}>
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className={styles.infoCol}>
              <div className={styles.infoHeader}>
                <span className="section-number">01</span>
                <span className="section-label">Informasi</span>
              </div>

              <div className={styles.infoCards}>
                {[
                  {
                    icon: MapPin,
                    title: 'Alamat',
                    content: <>Jl. Belakang RSU No. 10<br />Malang, Jawa Timur</>,
                    isLink: false,
                  },
                  {
                    icon: Phone,
                    title: 'Telepon',
                    content: '+62 838-3535-2717',
                    href: 'tel:+6283835352717',
                    isLink: true,
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@cvtigapilar.com',
                    href: 'mailto:info@cvtigapilar.com',
                    isLink: true,
                  },
                  {
                    icon: Clock,
                    title: 'Jam Kerja',
                    content: 'Senin – Jumat, 08:00 – 17:00 WIB',
                    isLink: false,
                  },
                ].map((card, i) => (
                  <ScrollReveal key={card.title} delay={i * 100} direction="left">
                    <div className={styles.infoCard}>
                      <card.icon size={18} className={styles.infoIcon} />
                      <div>
                        <h3 className={styles.infoCardTitle}>{card.title}</h3>
                        {card.isLink ? (
                          <a href={card.href} className={styles.infoCardLink}>
                            {card.content}
                          </a>
                        ) : (
                          <p className={styles.infoCardText}>{card.content}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="left" delay={400}>
                <a
                  href="https://wa.me/6283835352717?text=Halo%20CV%20Tiga%20Pilar%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20penerbitan%20buku."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waButton}
                >
                  <MessageCircle size={18} />
                  Chat via WhatsApp
                </a>
              </ScrollReveal>

              {/* Map embed */}
              <ScrollReveal direction="scale" delay={500}>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.28942365289!2d112.6300024!3d-7.9778136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62822032f5201%3A0x78db761a7a9b3b0!2sMalang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1698765432100!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi CV Tiga Pilar - Malang, Jawa Timur"
                  />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className="section-number">02</span>
                <span className="section-label">Kirim Pesan</span>
              </div>

              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIconWrap}>
                    <CheckCircle2 size={40} className={styles.successIcon} />
                  </div>
                  <h3 className={styles.successTitle}>Pesan Terkirim!</h3>
                  <p className={styles.successText}>
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda 
                    dalam 1x24 jam kerja.
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
      </section>
    </div>
  );
}
