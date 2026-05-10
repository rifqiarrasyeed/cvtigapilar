import Link from 'next/link';
import { MapPin, Target, BookOpen, Users, Award, Shield } from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import styles from './page.module.css';

export default function TentangPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ScrollReveal>
          <nav className="breadcrumb">
            <Link href="/">beranda</Link>
            <span className="breadcrumb__separator">/</span>
            <span>tentang</span>
          </nav>
          <h1 className={styles.title}>Tentang Kami</h1>
        </ScrollReveal>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <ScrollReveal>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutLeft}>
                <span className="section-number">01</span>
                <span className="section-label">Profil</span>
              </div>
              <div className={styles.aboutRight}>
                <p className={styles.aboutLead}>
                  CV Tiga Pilar adalah penerbit buku akademis profesional yang berkomitmen 
                  untuk mendukung kemajuan ilmu pengetahuan melalui penerbitan karya ilmiah berkualitas.
                </p>
                <p className={styles.aboutBody}>
                  Berlokasi di Malang, Jawa Timur, kami melayani penerbitan berbagai jenis karya 
                  ilmiah—mulai dari buku kolaborasi <em>(book chapter)</em>, monograf, buku ajar, 
                  hingga buku referensi—dengan komitmen pada kualitas editorial, legalitas penerbitan, 
                  dan layanan yang profesional.
                </p>
                <p className={styles.aboutBody}>
                  Setiap buku terbitan kami dilengkapi dengan ISBN resmi dari Perpustakaan Nasional 
                  Republik Indonesia dan perlindungan HKI (Hak Kekayaan Intelektual), sehingga 
                  karya para penulis terjamin legalitas dan kredibilitasnya.
                </p>
                <div className={styles.addressBlock}>
                  <MapPin size={16} className={styles.addressIcon} />
                  <div>
                    <span className={styles.addressLabel}>Alamat</span>
                    <span className={styles.addressText}>
                      Jl. Belakang RSU No. 10, Malang, Jawa Timur, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Vision / Mission */}
        <section className={styles.vmSection}>
          <ScrollReveal>
            <div className={styles.vmGrid}>
              <div className={styles.vmLeft}>
                <span className="section-number">02</span>
                <span className="section-label">Visi & Misi</span>
              </div>
              <div className={styles.vmRight}>
                <div className={styles.vmCard}>
                  <Target size={20} className={styles.vmIcon} />
                  <h3 className={styles.vmTitle}>Visi</h3>
                  <p className={styles.vmText}>
                    Menjadi penerbit buku akademis terpercaya yang berkontribusi aktif 
                    dalam pengembangan ilmu pengetahuan dan literasi di Indonesia.
                  </p>
                </div>
                <div className={styles.vmCard}>
                  <BookOpen size={20} className={styles.vmIcon} />
                  <h3 className={styles.vmTitle}>Misi</h3>
                  <ul className={styles.missionList}>
                    <li>Menerbitkan buku akademis berkualitas tinggi dengan standar editorial profesional</li>
                    <li>Memfasilitasi kolaborasi akademis antar-institusi melalui program book chapter</li>
                    <li>Memastikan legalitas penerbitan dengan ISBN dan HKI yang resmi</li>
                    <li>Memberikan layanan penerbitan yang efisien, transparan, dan terjangkau</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Values */}
        <section className={styles.valuesSection}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-number">03</span>
              <span className="section-label">Nilai-Nilai Kami</span>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {[
              { icon: Award, title: 'Kualitas', desc: 'Standar editorial tinggi untuk setiap karya yang kami terbitkan.' },
              { icon: Shield, title: 'Legalitas', desc: 'ISBN resmi dan HKI terdaftar untuk setiap buku terbitan.' },
              { icon: Users, title: 'Kolaborasi', desc: 'Memfasilitasi kerja sama akademis lintas institusi dan bidang ilmu.' },
              { icon: BookOpen, title: 'Integritas', desc: 'Transparansi proses dan komitmen pada etika penerbitan akademis.' },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className={styles.valueCard}>
                  <value.icon size={24} className={styles.valueIcon} />
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
