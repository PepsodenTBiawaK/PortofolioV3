import Image from "next/image";
import {
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiGit,
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import SiteHeader from "@/components/SiteHeader";
import HeroLanyard from "@/components/HeroLanyard";
import ProjectGallery from "@/components/ProjectGallery";
import { ArrowRight, ArrowUpRight, Plus } from "@/components/Icons";
import { certificates, projects, socialLinks } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Langsung ke konten
      </a>
      <SiteHeader />
      <main id="main">
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> UI/UX Designer · Web & Mobile
            </div>
            <div className="hero-name-row">
              <h1 id="hero-title">
                Fadilah
                <br />
                <span>Aprianto</span>
                <span className="hero-period">.</span>
              </h1>
              <div className="mobile-portrait">
                <Image
                  src="/assets/images/profil.webp"
                  alt=""
                  width={90}
                  height={112}
                  sizes="90px"
                  className="portrait-image"
                />
              </div>
            </div>
            <p className="hero-description">
              Merancang pengalaman digital yang terasa jelas, berguna, dan dekat
              dengan penggunanya.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Jelajahi karya <ArrowUpRight />
              </a>
              <a className="text-link" href="#about">
                Sedikit tentang saya <ArrowRight />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="fine-line" />
              <span>
                Desain dengan empati.
                <br />
                Dikembangkan dengan rasa ingin tahu.
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" aria-hidden="true" />
            <div className="visual-orbit orbit-two" aria-hidden="true" />
            <div className="visual-corner corner-top" aria-hidden="true">
              <Plus />
            </div>
            <div className="visual-corner corner-bottom" aria-hidden="true">
              <Plus />
            </div>
            <span className="visual-index eyebrow">Personal, by design.</span>
            <HeroLanyard />
            <div className="visual-caption">
              <span>FADILAH APRIANTO</span>
              <span>DESIGN & DEVELOPMENT</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>PORTOFOLIO / {new Date().getFullYear()}</span>
            <a href="#projects">
              Pilihan karya di bawah <span aria-hidden="true">↓</span>
            </a>
            <span>UI/UX · WEB · MOBILE</span>
          </div>
        </section>

        <section
          id="projects"
          className="section shell work-section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">01 / KARYA PILIHAN</p>
              <h2 id="work-title">
                Dari gagasan,
                <br />
                menjadi <em>pengalaman.</em>
              </h2>
            </div>
            <p className="section-intro">
              Pilihan eksplorasi antarmuka dan pengembangan web. Setiap proyek
              membawa konteks dan tantangannya sendiri.
            </p>
          </div>
          <ProjectGallery projects={projects} />
        </section>

        <section
          id="about"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="shell about-grid">
            <div className="about-portrait-wrap">
              <div className="about-portrait">
                <Image
                  src="/assets/images/profil.webp"
                  alt="Fadilah Aprianto"
                  width={900}
                  height={1100}
                  sizes="(min-width: 900px) 380px, 80vw"
                  className="portrait-image"
                />
                <span className="portrait-note">
                  A PERSON BEHIND THE PIXELS.
                </span>
              </div>
              <div className="portrait-credit">
                <span>Fadilah Aprianto</span>
                <span>
                  Designer & curious mind <ArrowUpRight />
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow section-index">02 / TENTANG SAYA</p>
              <h2 id="about-title">
                Rasa ingin tahu.
                <br />
                <em>Sudut pandang baru.</em>
              </h2>
              <p className="about-lead">
                Saya percaya desain yang baik dimulai dari memahami manusia di
                balik layar.
              </p>
              <p>
                Saya Fadilah, UI/UX Designer di PT Nusantara Infrastructure,
                Tbk. sekaligus mahasiswa Teknik Informatika di Universitas
                Paramadina. Fokus saya ada pada antarmuka web dan mobile yang
                menyatukan kejelasan, fungsi, dan karakter visual.
              </p>
              <p>
                Perjalanan dari Tata Boga ke dunia digital membentuk perhatian
                saya pada detail. Kini, kreativitas itu bertemu dengan logika,
                kolaborasi, dan keinginan untuk terus belajar.
              </p>
              <div className="experience-list">
                <div>
                  <span className="experience-label">PENGALAMAN</span>
                  <div>
                    <h3>UI/UX Designer</h3>
                    <p>PT Nusantara Infrastructure, Tbk.</p>
                  </div>
                  <ArrowUpRight />
                </div>
                <div>
                  <span className="experience-label">PENDIDIKAN</span>
                  <div>
                    <h3>Teknik Informatika</h3>
                    <p>Universitas Paramadina</p>
                  </div>
                  <ArrowUpRight />
                </div>
              </div>
              <a
                className="text-link"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kenal lebih jauh di LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="section shell"
          aria-labelledby="approach-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">03 / PENDEKATAN</p>
              <h2 id="approach-title">
                Detail yang dipikirkan.
                <br />
                <em>Tujuan yang dijaga.</em>
              </h2>
            </div>
            <p className="section-intro">
              Tampilan yang menarik mendapat perhatian. Kejelasan dan kegunaan
              memberi alasan untuk tetap menggunakannya.
            </p>
          </div>
          <div className="approach-grid">
            <article>
              <span className="approach-number">01</span>
              <Plus />
              <h3>Pahami konteks.</h3>
              <p>
                Melihat kebutuhan pengguna, tujuan produk, dan batasan yang
                perlu dipertimbangkan sebelum menentukan bentuk.
              </p>
            </article>
            <article>
              <span className="approach-number">02</span>
              <Plus />
              <h3>Susun pengalaman.</h3>
              <p>
                Menghubungkan informasi, alur, dan interaksi agar setiap langkah
                terasa jelas dan memiliki arah.
              </p>
            </article>
            <article>
              <span className="approach-number">03</span>
              <Plus />
              <h3>Perhatikan detail.</h3>
              <p>
                Menjaga tipografi, ruang, dan konsistensi antarmuka, lalu
                mengeksplorasi bagaimana desain dapat diwujudkan.
              </p>
            </article>
          </div>
          <div className="tools-row">
            <span className="eyebrow">PERANGKAT KERJA</span>
            <ul aria-label="Tools dan teknologi">
              <li>
                <SiFigma />
                Figma
              </li>
              <li>
                <SiReact />
                React
              </li>
              <li>
                <SiNextdotjs />
                Next.js
              </li>
              <li>
                <SiFlutter />
                Flutter
              </li>
              <li>
                <SiGit />
                Git
              </li>
            </ul>
          </div>
        </section>

        <section
          id="certificates"
          className="section shell learning-section"
          aria-labelledby="learning-title"
        >
          <div className="learning-heading">
            <div>
              <p className="eyebrow section-index">04 / TERUS BELAJAR</p>
              <h2 id="learning-title">
                Selalu ada ruang
                <br />
                untuk <em>bertumbuh.</em>
              </h2>
            </div>
            <p className="section-intro">
              Sebagian langkah kecil dalam perjalanan memahami desain.
            </p>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate, index) => (
              <a
                key={certificate.href}
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-row"
              >
                <span className="certificate-number">0{index + 1}</span>
                <div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                </div>
                <span className="certificate-action">
                  Lihat sertifikat <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="contact-top">
              <p className="eyebrow section-index">05 / MULAI PERCAKAPAN</p>
              <span className="contact-spark" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="contact-content">
              <h2 id="contact-title">
                Punya gagasan?
                <br />
                <em>Mari bicarakan.</em>
              </h2>
              <div>
                <p>
                  Tentang desain, kolaborasi, atau kesempatan baru—saya senang
                  mendengar cerita Anda.
                </p>
                <a
                  className="button button-primary"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terhubung di LinkedIn <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <span>IDE YANG BAIK DIMULAI DARI PERCAKAPAN.</span>
              <div>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                  <ArrowUpRight />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                  <span>GitHub</span>
                  <ArrowUpRight />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram />
                  <span>Instagram</span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="footer-signature" href="#top">
          Fadilah Aprianto<span>·</span>
        </a>
        <span>© {new Date().getFullYear()} Fadilah Aprianto</span>
        <a href="#top">Kembali ke atas ↑</a>
      </footer>
    </>
  );
}
