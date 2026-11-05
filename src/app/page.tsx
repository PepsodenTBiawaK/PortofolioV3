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
import {
  certificates,
  projects,
  socialLinks,
  profile,
  pageContent,
} from "@/data/portfolio";
import type { EditorialHeading } from "@/types/content";

const toolIcons: Record<string, typeof SiFigma> = {
  Figma: SiFigma,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Flutter: SiFlutter,
  Git: SiGit,
};
const socialItems = [
  { name: "LinkedIn", href: socialLinks.linkedin, Icon: FaLinkedinIn },
  { name: "GitHub", href: socialLinks.github, Icon: SiGithub },
  { name: "Instagram", href: socialLinks.instagram, Icon: SiInstagram },
].filter((item) => item.href.trim());

function Heading({ id, content }: { id: string; content: EditorialHeading }) {
  return (
    <h2 id={id}>
      {content.firstLine}
      <br />
      {content.secondLine ? `${content.secondLine} ` : null}
      <em>{content.accent}</em>
    </h2>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Langsung ke konten
      </a>
      <SiteHeader
        brand={profile}
        navigation={pageContent.navigation}
        contact={{
          href: socialLinks.linkedin,
          label: pageContent.headerContactLabel,
        }}
      />
      <main id="main">
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              {profile.role}
            </div>
            <div className="hero-name-row">
              <h1 id="hero-title">
                {profile.firstName}
                <br />
                <span>{profile.lastName}</span>
                <span className="hero-period">.</span>
              </h1>
              <div className="mobile-portrait">
                <Image
                  src={profile.image}
                  alt=""
                  width={90}
                  height={112}
                  sizes="90px"
                  className="portrait-image"
                />
              </div>
            </div>
            <p className="hero-description">{pageContent.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {pageContent.hero.primaryButton}
                <ArrowUpRight />
              </a>
              <a className="text-link" href="#about">
                {pageContent.hero.secondaryButton}
                <ArrowRight />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="fine-line" />
              <span>
                {pageContent.hero.footnote.map((line, index) => (
                  <span key={index}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
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
            <span className="visual-index eyebrow">{profile.visualLabel}</span>
            <HeroLanyard
              imageSrc={profile.image}
              imageAlt={profile.fullName}
              enabled3D={profile.showLanyard}
            />
            <div className="visual-caption">
              <span>{profile.fullName.toUpperCase()}</span>
              <span>{profile.visualCaption}</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              {pageContent.hero.editionLabel} / {new Date().getFullYear()}
            </span>
            <a href="#projects">
              {pageContent.hero.scrollLabel}
              <span aria-hidden="true">↓</span>
            </a>
            <span>{pageContent.hero.disciplines}</span>
          </div>
        </section>

        <section
          id="projects"
          className="section shell work-section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">
                {pageContent.work.eyebrow}
              </p>
              <Heading id="work-title" content={pageContent.work.heading} />
            </div>
            <p className="section-intro">{pageContent.work.intro}</p>
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
                  src={profile.image}
                  alt={profile.fullName}
                  width={900}
                  height={1100}
                  sizes="(min-width: 900px) 380px, 80vw"
                  className="portrait-image"
                />
                <span className="portrait-note">{profile.portraitNote}</span>
              </div>
              <div className="portrait-credit">
                <span>{profile.fullName}</span>
                <span>
                  {profile.portraitCaption}
                  <ArrowUpRight />
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow section-index">
                {pageContent.about.eyebrow}
              </p>
              <Heading id="about-title" content={pageContent.about.heading} />
              <p className="about-lead">{pageContent.about.lead}</p>
              {pageContent.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="experience-list">
                {profile.experience.map((item, index) => (
                  <div key={index}>
                    <span className="experience-label">{item.label}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                    <ArrowUpRight />
                  </div>
                ))}
              </div>
              <a
                className="text-link"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pageContent.about.linkLabel}
                <ArrowUpRight />
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
              <p className="eyebrow section-index">
                {pageContent.approach.eyebrow}
              </p>
              <Heading
                id="approach-title"
                content={pageContent.approach.heading}
              />
            </div>
            <p className="section-intro">{pageContent.approach.intro}</p>
          </div>
          <div className="approach-grid">
            {pageContent.approach.items.map((item, index) => (
              <article key={index}>
                <span className="approach-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Plus />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="tools-row">
            <span className="eyebrow">{pageContent.approach.toolsLabel}</span>
            <ul aria-label="Tools dan teknologi">
              {pageContent.approach.tools.map((tool) => {
                const Icon = toolIcons[tool];
                return (
                  <li key={tool}>
                    {Icon && <Icon />}
                    {tool}
                  </li>
                );
              })}
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
              <p className="eyebrow section-index">
                {pageContent.learning.eyebrow}
              </p>
              <Heading
                id="learning-title"
                content={pageContent.learning.heading}
              />
            </div>
            <p className="section-intro">{pageContent.learning.intro}</p>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate, index) => (
              <a
                key={`${certificate.title}-${index}`}
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-row"
              >
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                </div>
                <span className="certificate-action">
                  Lihat sertifikat
                  <ArrowUpRight />
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
              <p className="eyebrow section-index">
                {pageContent.contact.eyebrow}
              </p>
              <span className="contact-spark" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="contact-content">
              <Heading
                id="contact-title"
                content={pageContent.contact.heading}
              />
              <div>
                <p>{pageContent.contact.description}</p>
                <a
                  className="button button-primary"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pageContent.contact.buttonLabel}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <span>{pageContent.contact.footnote}</span>
              <div>
                {socialItems.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                    <span>{name}</span>
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="footer-signature" href="#top">
          {profile.fullName}
          <span>·</span>
        </a>
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <a href="#top">{pageContent.footer.backToTopLabel}</a>
      </footer>
    </>
  );
}
