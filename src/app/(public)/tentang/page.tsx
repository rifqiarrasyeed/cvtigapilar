import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Target, BookOpen, Users, Award, Shield,
  Sparkles, Calendar, TrendingUp, Globe, Heart, Lightbulb,
} from 'lucide-react';
import ScrollReveal from '@/components/public/ScrollReveal';
import styles from './page.module.css';

const milestones = [
  { year: '2019', title: 'Berdiri', desc: 'CV Tiga Pilar resmi didirikan di Malang sebagai penerbit buku akademis.' },
  { year: '2020', title: 'Penerbitan Pertama', desc: 'Menerbitkan 15 buku akademis ber-ISBN pertama di tengah pandemi.' },
  { year: '2021', title: 'Kolaborasi Nasional', desc: 'Memulai program book chapter kolaborasi lintas universitas se-Indonesia.' },
  { year: '2022', title: 'Sertifikasi HKI', desc: 'Mendapatkan lisensi pengurusan HKI untuk seluruh terbitan.' },
  { year: '2023', title: '100+ Terbitan', desc: 'Mencapai milestone 100 buku terbitan dengan 500+ penulis.' },
  { year: '2024', title: 'Ekspansi Digital', desc: 'Meluncurkan platform digital dan distribusi e-book nasional.' },
];

const teamMembers = [
  { name: 'Dr. Ahmad Fauzi, M.Pd.', role: 'Direktur Utama', desc: 'Berpengalaman 15+ tahun di bidang penerbitan akademis.', photo: '/images/team-1.png' },
  { name: 'Siti Nurhaliza, S.S., M.Hum.', role: 'Kepala Editorial', desc: 'Spesialis penyuntingan naskah ilmiah dan akademis.', photo: '/images/team-2.png' },
  { name: 'Rizky Pratama, S.Kom.', role: 'Layout & Desain', desc: 'Desainer buku profesional dengan sentuhan modern.', photo: '/images/team-3.png' },
  { name: 'Dewi Safitri, S.H.', role: 'Legal & HKI', desc: 'Menangani ISBN, HKI, dan aspek legalitas penerbitan.', photo: '/images/team-4.png' },
];

const stats = [
  { number: '120+', label: 'Buku Terbit', icon: BookOpen },
  { number: '500+', label: 'Penulis', icon: Users },
  { number: '50+', label: 'Universitas Mitra', icon: Globe },
  { number: '100%', label: 'Ber-ISBN Resmi', icon: Award },
];

export default function TentangPage() {
  return (
    <div className={styles.page}>
      {/* === HERO SECTION === */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <div className={styles.heroCircle1} />
          <div className={styles.heroCircle2} />
          <div className={styles.heroLine} />
        </div>
        <div className={styles.heroInner}>
          <ScrollReveal direction="left">
            <nav className="breadcrumb">
              <Link href="/">beranda</Link>
              <span className="breadcrumb__separator">/</span>
              <span>tentang</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine1}>Menerbitkan</span>
              <span className={styles.heroTitleLine2}>Karya Ilmiah</span>
              <span className={styles.heroTitleLine3}>Terpercaya.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <p className={styles.heroDesc}>
              Sejak 2019, CV Tiga Pilar telah menjadi mitra terpercaya para akademisi 
              Indonesia dalam menerbitkan karya ilmiah berkualitas tinggi. Berlokasi di 
              Malang, Jawa Timur, kami menggabungkan ketelitian editorial dengan 
              komitmen pada legalitas penerbitan.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <MapPin size={16} />
                <span>Malang, Jawa Timur</span>
              </div>
              <div className={styles.heroMetaItem}>
                <Calendar size={16} />
                <span>Berdiri sejak 2019</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === STATS BAR === */}
      <section className={styles.statsBar}>
        <div className={styles.statsInner}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 120} direction="scale">
              <div className={styles.statItem}>
                <stat.icon size={22} className={styles.statIcon} />
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* === ABOUT PROFILE === */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <ScrollReveal direction="left">
            <div className={styles.aboutLeft}>
              <span className="section-number">01</span>
              <span className="section-label">Profil Perusahaan</span>
              <div className={styles.aboutImage}>
                <Image
                  src="/images/books-stack.png"
                  alt="Koleksi buku terbitan CV Tiga Pilar"
                  width={600}
                  height={450}
                  className={styles.aboutPhoto}
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className={styles.aboutRight}>
              <h2 className={styles.aboutHeading}>
                Penerbit Buku Akademis <em>Profesional</em>
              </h2>
              <p className={styles.aboutLead}>
                CV Tiga Pilar adalah penerbit buku akademis profesional yang berkomitmen 
                untuk mendukung kemajuan ilmu pengetahuan melalui penerbitan karya ilmiah berkualitas.
              </p>
              <p className={styles.aboutBody}>
                Kami melayani penerbitan berbagai jenis karya ilmiah—mulai dari buku kolaborasi 
                <em> (book chapter)</em>, monograf, buku ajar, hingga buku referensi—dengan komitmen 
                pada kualitas editorial, legalitas penerbitan, dan layanan yang profesional.
              </p>
              <p className={styles.aboutBody}>
                Setiap buku terbitan kami dilengkapi dengan ISBN resmi dari Perpustakaan Nasional 
                Republik Indonesia dan perlindungan HKI (Hak Kekayaan Intelektual), sehingga 
                karya para penulis terjamin legalitas dan kredibilitasnya.
              </p>
              <div className={styles.addressBlock}>
                <MapPin size={16} className={styles.addressIcon} />
                <div>
                  <span className={styles.addressLabel}>Alamat Kantor</span>
                  <span className={styles.addressText}>
                    Jl. Belakang RSU No. 10, Malang, Jawa Timur, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === VISION / MISSION === */}
      <section className={styles.vmSection}>
        <div className={styles.vmInner}>
          <ScrollReveal direction="right">
            <div className={styles.vmHeader}>
              <span className="section-number">02</span>
              <span className="section-label">Visi & Misi</span>
            </div>
          </ScrollReveal>
          <div className={styles.vmGrid}>
            <ScrollReveal direction="left" delay={100}>
              <div className={styles.vmCard}>
                <div className={styles.vmCardAccent} />
                <Target size={28} className={styles.vmIcon} />
                <h3 className={styles.vmTitle}>Visi Kami</h3>
                <p className={styles.vmText}>
                  Menjadi penerbit buku akademis terpercaya yang berkontribusi aktif 
                  dalam pengembangan ilmu pengetahuan dan literasi di Indonesia, serta 
                  menjadi rujukan utama para akademisi dalam menerbitkan karya ilmiah 
                  berkualitas internasional.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className={styles.vmCard}>
                <div className={styles.vmCardAccent2} />
                <BookOpen size={28} className={styles.vmIcon} />
                <h3 className={styles.vmTitle}>Misi Kami</h3>
                <ul className={styles.missionList}>
                  <li>
                    <Sparkles size={14} className={styles.missionIcon} />
                    Menerbitkan buku akademis berkualitas tinggi dengan standar editorial profesional
                  </li>
                  <li>
                    <Sparkles size={14} className={styles.missionIcon} />
                    Memfasilitasi kolaborasi akademis antar-institusi melalui program book chapter
                  </li>
                  <li>
                    <Sparkles size={14} className={styles.missionIcon} />
                    Memastikan legalitas penerbitan dengan ISBN dan HKI yang resmi
                  </li>
                  <li>
                    <Sparkles size={14} className={styles.missionIcon} />
                    Memberikan layanan penerbitan yang efisien, transparan, dan terjangkau
                  </li>
                  <li>
                    <Sparkles size={14} className={styles.missionIcon} />
                    Mendukung peningkatan karier akademis dosen melalui publikasi terindeks
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineInner}>
          <ScrollReveal>
            <div className={styles.timelineHeader}>
              <span className="section-number">03</span>
              <span className="section-label">Perjalanan Kami</span>
              <h2 className={styles.timelineHeading}>Milestone & Pencapaian</h2>
            </div>
          </ScrollReveal>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {milestones.map((item, i) => (
              <ScrollReveal 
                key={item.year} 
                direction={i % 2 === 0 ? 'left' : 'right'} 
                delay={i * 120}
              >
                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === VALUES === */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <ScrollReveal>
            <div className={styles.valuesHeader}>
              <span className="section-number">04</span>
              <span className="section-label">Nilai-Nilai Kami</span>
              <h2 className={styles.valuesHeading}>Prinsip yang Kami Pegang</h2>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {[
              { icon: Award, title: 'Kualitas', desc: 'Standar editorial tinggi untuk setiap karya yang kami terbitkan. Setiap naskah melalui proses review mendalam.', color: 'terracotta' },
              { icon: Shield, title: 'Legalitas', desc: 'ISBN resmi dari Perpusnas dan HKI terdaftar untuk setiap buku. Legalitas penuh untuk kepentingan akademis.', color: 'sage' },
              { icon: Users, title: 'Kolaborasi', desc: 'Memfasilitasi kerja sama akademis lintas institusi dan bidang ilmu untuk menghasilkan karya kolaboratif.', color: 'charcoal' },
              { icon: Heart, title: 'Integritas', desc: 'Transparansi proses, komitmen pada etika penerbitan akademis, dan kejujuran dalam setiap layanan.', color: 'terracotta' },
              { icon: Lightbulb, title: 'Inovasi', desc: 'Terus berinovasi dalam metode penerbitan digital untuk mempermudah akses dan distribusi karya ilmiah.', color: 'sage' },
              { icon: TrendingUp, title: 'Dampak', desc: 'Berkontribusi pada peningkatan kualitas pendidikan tinggi dan pengembangan SDM Indonesia.', color: 'charcoal' },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100} direction={i < 3 ? 'left' : 'right'}>
                <div className={`${styles.valueCard} ${styles[`valueCard--${value.color}`]}`}>
                  <div className={styles.valueIconWrap}>
                    <value.icon size={24} className={styles.valueIcon} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === TEAM === */}
      <section className={styles.teamSection}>
        <div className={styles.teamInner}>
          <ScrollReveal direction="left">
            <div className={styles.teamHeader}>
              <span className="section-number">05</span>
              <span className="section-label">Tim Kami</span>
              <h2 className={styles.teamHeading}>Dikelola oleh Profesional</h2>
            </div>
          </ScrollReveal>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 120} direction="scale">
                <div className={styles.teamCard}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className={styles.teamAvatarImage}
                  />
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamDesc}>{member.desc}</p>
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
            <h2 className={styles.ctaTitle}>
              Siap Berkolaborasi<br />dengan Kami?
            </h2>
            <p className={styles.ctaDesc}>
              Konsultasikan kebutuhan penerbitan buku akademis Anda. Tim kami siap membantu 
              dari awal hingga terbit.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/kontak" className="btn btn--primary btn--large">
                Hubungi Kami
              </Link>
              <Link href="/layanan" className="btn btn--outline btn--large">
                Lihat Layanan
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
