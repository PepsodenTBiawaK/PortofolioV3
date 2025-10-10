"use client";

/* ==== IMPORTS (komponen kamu) ==== */
import Lanyard from "@/components/Lanyard";
import RotatingText from "@/components/RotatingText";
import ScrambledText from "@/components/ScrambledText";
import SplitText from "@/components/SplitText";
import Silk from "@/components/Silk";
import SplashCursor from "@/components/SplashCursor";
import AnimatedContent from "@/components/AnimatedContent";
import StarBorder from "@/components/StarBorder";
import ScrollFloat from "@/components/ScrollFloat";
import TiltedCard from "@/components/TiltedCard";
import BlurText from "@/components/BlurText";
import CircularGallery from "@/components/CircularGallery";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import MovingBorderDemo from "@/components/MovingBorderDemo";
import FocusCardsDemo from "@/components/FocusCardsDemo";

// function MovingBorderDemo() {
//   return (
//     <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
//       <Button
//         onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
//         borderRadius="9999px"
//         // ⬇️ matikan w/h default & bikin tombol mengikuti isi
//         containerClassName="!w-auto !h-auto !p-[1px] rounded-full"
//         // ⬇️ isi tombol (konten)
//         className="
//           inline-flex items-center justify-center
//           px-8 sm:px-10 py-3 sm:py-3.5
//           whitespace-nowrap leading-none
//           text-sm sm:text-base font-semibold
//           text-[#03fa97] hover:text-white
//           bg-[#06090E]/90 backdrop-blur-md
//           border border-[#03fa97]/40 hover:border-[#03fa97]/80
//           rounded-full
//           shadow-[0_0_8px_rgba(3,250,151,0.35)]
//           hover:shadow-[0_0_16px_rgba(3,250,151,0.6)]
//           transition-all duration-300 ease-in-out
//         "
//         // ⬇️ warna “glow” si titik yang muter
//         borderClassName="bg-[radial-gradient(#03fa97_40%,transparent_60%)] opacity-80"
//         duration={4000}
//       >
//         Lihat Portofolio Saya
//       </Button>
//     </div>
//   );
// }

/* ==== DEMO WRAPPER UNTUK FocusCards (biarkan, hanya pembungkus data) ==== */
// function FocusCardsDemo() {
//   const cards = [
//     {
//       title: "Undangan Pernikahan Digital",
//       src: "/assets/projects/Project1.svg",
//     },
//     {
//       title: "Aplikasi AbsenKuy",
//       src: "/assets/projects/Project2.svg",
//     },
//     {
//       title: "Mobile App Nita",
//       src: "/assets/projects/Project3.svg",
//     },
//     {
//       title: "Web App Nusafin",
//       src: "/assets/projects/Project4.svg",
//     },
//     {
//       title: "Mobile App Otto Parking",
//       src: "/assets/projects/Project5.svg",
//     },
//     {
//       title: "Mobile App Otto Parking",
//       src: "/assets/projects/Project6.svg",
//     },
//   ];

//   return <FocusCards cards={cards} />;
// }

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

/* ==== PAGE ==== */
export default function HomePage() {
  /* -- tombol shortcut scroll ke section -- */
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#06090E] text-white overflow-x-hidden">
      {/* cursor efek */}
      <SplashCursor />

      <section className="relative w-full min-h-screen overflow-hidden bg-[#06090E] text-white">
        {/* BG Silk */}
        <div className="absolute inset-0">
          <Silk speed={5} scale={0.6} color="#051E1F" noiseIntensity={1} rotation={0} />
        </div>

        {/* Grid konten (tanpa container) */}
        <div className="relative z-10 w-full h-full grid grid-cols-12 overflow-visible pt-3 sm:pt-4 md:pt-0 pb-6">
          {/* ===== Kolom kiri: LANYARD (tetap di atas saat mobile) ===== */}
          <div
            className="
        col-span-12 md:col-span-6
        flex justify-center md:justify-end items-center
        overflow-visible
        /* override tinggi anak pertama (div pembungkus internal Lanyard) */
        [&>div]:h-[46vh] sm:[&>div]:h-[54vh] md:[&>div]:h-screen
      "
          >
            <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
          </div>

          {/* ===== Kolom kanan: TEKS ===== */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center px-4 sm:px-8 md:px-0">
            {/* === Kolom teks kanan === */}
            <div className="flex flex-col items-start justify-center text-left w-full space-y-3 sm:space-y-4 md:space-y-6">
              {/* “Saya Seorang” + RotatingText */}
              <div className="flex items-center gap-3 sm:gap-4">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-medium">Saya Seorang</h1>
                <RotatingText
                  texts={["UI/UX Designer", "Web Enthusiast", "Mobile Enthusiast"]}
                  mainClassName="px-3 sm:px-4 md:px-6 bg-[#03fa97] py-1 rounded-full text-base sm:text-lg md:text-xl font-bold text-[#092627] inline-flex"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              {/* “Halo, Saya” */}
              <div className="flex flex-wrap gap-x-2">
                <SplitText
                  text="Halo, Saya"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-start text-white overflow-visible"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>
              {/* “Fadilah Aprianto” */}
              <div className="flex flex-wrap gap-x-2">
                <SplitText
                  text="Fadilah Aprianto"
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-start text-[#03fa97] overflow-visible"
                  delay={200}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>
              {/* Deskripsi singkat */}
              <ScrambledText className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-2 sm:mt-4 md:mt-6" radius={100} duration={1.2} speed={0.5} scrambleChars=".:">
                Kreator digital yang senang mengeksplorasi pengalaman baru
              </ScrambledText>
              {/* Tombol scroll ke “about” */}

              <MovingBorderDemo />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
     SECTION: ABOUT (Revisi)
     - Soft divider di atas (transition dari hero)
     - Heading konsisten (ScrollFloat)
     - Grid kiri (foto TiltedCard) / kanan (deskripsi)
     - Baris "Quick Stats" (kartu kecil)
     - Marquee/Running logos: pakai CircularGallery (reactbits)
     - Spacing responsif & balanced
   ========================================= */}
      <section id="about" className="relative min-h-screen flex flex-col justify-start bg-[#06090E] text-white">
        {/* ---- Soft divider dari HERO  ---- */}
        <div
          className="pointer-events-none absolute -top-12 sm:-top-16 md:-top-20 w-full h-12 sm:h-16 md:h-20
               bg-gradient-to-b from-transparent via-[#06090E]/40 to-[#06090E] z-[5]"
          aria-hidden
        />

        {/* ---- Container konten ---- */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
          {/* ---- Heading ---- */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.06}
            textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-[#03fa97]"
            containerClassName="w-full text-center"
          >
            About Me
          </ScrollFloat>

          {/* ---- Grid utama: Foto / Deskripsi ---- */}
          <div className="mt-10 md:mt-12 grid grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Kiri: Foto / TiltedCard */}
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="w-56 sm:w-72 md:w-[420px] lg:w-[520px] aspect-square">
                <TiltedCard
                  imageSrc="/assets/images/profil.jpg"
                  altText="Fadilah Aprianto"
                  captionText="Manusia Biasa"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  overlayContent={<p className="tilted-card-demo-text">Manusia Biasa</p>}
                />
              </div>
            </div>

            {/* Kanan: Deskripsi */}
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center">
                <BlurText
                  text="Saya Fadilah Aprianto (22), seorang mahasiswa Teknik Informatika di Universitas Paramadina sekaligus UI/UX Designer yang saat ini bekerja di PT Nusantara Infrastructure, Tbk. Perjalanan saya dimulai dari jurusan Tata Boga di SMK Negeri 32 Jakarta, di mana saya terbiasa dengan disiplin, detail, dan kreativitas. Dari sana, saya menemukan passion baru di dunia teknologi dan desain digital. Perpindahan jalur ini membuka kesempatan untuk menggabungkan sisi kreatif dengan logika, terutama dalam merancang pengalaman pengguna. Kini saya berfokus pada pengembangan antarmuka web dan mobile yang tidak hanya menarik secara visual, tetapi juga mudah digunakan dan bermanfaat bagi pengguna. Pengalaman kuliah dan pekerjaan membuat saya terbiasa bekerja dengan tim lintas bidang, menerima masukan, serta terus belajar untuk meningkatkan kualitas setiap desain yang saya buat."
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="w-full text-sm sm:text-base md:text-lg leading-relaxed text-justify tracking-wide md:pr-4"
                />
              </div>

              {/* ---- Quick Stats (mini cards) ---- */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Card 1 */}
                <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power2.out" initialOpacity={0.0} animateOpacity threshold={0.15}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03fa97]">1+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Tahun di UI/UX</div>
                  </div>
                </AnimatedContent>

                {/* Card 2 */}
                <AnimatedContent distance={40} direction="vertical" duration={0.9} ease="power2.out" initialOpacity={0.0} animateOpacity threshold={0.15} delay={0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03fa97]">20+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Project Digital</div>
                  </div>
                </AnimatedContent>

                {/* Card 3 */}
                <AnimatedContent distance={40} direction="vertical" duration={1} ease="power2.out" initialOpacity={0.0} animateOpacity threshold={0.15} delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03fa97]">Active</div>
                    <div className="text-xs sm:text-sm text-gray-300">PT Nusantara Infrastructure</div>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          {/* ---- Tools / Running Logos (CircularGallery) ---- */}
          <div className="mt-12 md:mt-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.06}
              textClassName="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
              containerClassName="w-full text-start"
            >
              Tools &amp; Stack
            </ScrollFloat>

            {/* Catatan: CircularGallery jalan memutar (bisa dianggap 'running logos') */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80 mt-4">
              <CircularGallery
                items={[
                  { image: "/assets/tools/Tools1.svg", text: "Figma" },
                  { image: "/assets/tools/Tools2.svg", text: "Canva" },
                  { image: "/assets/tools/Tools3.svg", text: "VS Code" },
                  { image: "/assets/tools/Tools4.svg", text: "Flutter" },
                  { image: "/assets/tools/Tools5.svg", text: "React" },
                  { image: "/assets/tools/Tools6.svg", text: "Tailwind" },
                  { image: "/assets/tools/Tools7.svg", text: "Next Js" },
                  { image: "/assets/tools/Tools8.svg", text: "MongoDB" },
                  { image: "/assets/tools/Tools9.svg", text: "My Sql" },
                  { image: "/assets/tools/Tools10.svg", text: "Git" },
                ]}
                bend={18}
                textColor="#03FA97"
                borderRadius={0.06}
                scrollEase={0.08}
                scrollSpeed={1.6}
              />
            </div>

            {/* Alternatif tambahan chips (opsional, feel free to remove) */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-center">
              {["UI Design", "UX Research", "Wireframing", "Prototyping", "Design System", "Full Stack", "Mobile Dev"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-gray-200 hover:bg-[#03fa97]/10 transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
     SECTION: PROJECTS (Revisi)
     - Heading konsisten (ScrollFloat)
     - Transition lembut dari About
     - FocusCardsDemo di tengah (responsif)
     - Tambahan teks pembuka (opsional)
   ========================================= */}
      <section id="projects" className="relative min-h-screen flex flex-col justify-start bg-[#06090E] text-white">
        {/* ---- Soft Divider Transition dari About ---- */}
        <div
          className="pointer-events-none absolute -top-12 sm:-top-16 md:-top-20 w-full h-12 sm:h-16 md:h-20
               bg-gradient-to-b from-transparent via-[#06090E]/40 to-[#06090E] z-[5]"
          aria-hidden
        />

        {/* ---- Container Utama ---- */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
          {/* ---- Heading ---- */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.06}
            textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-[#03fa97]"
            containerClassName="w-full text-center"
          >
            Projects
          </ScrollFloat>

          {/* ---- Subtitle (opsional) ---- */}
          <p className="mt-4 text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Beberapa proyek yang pernah saya kerjakan mulai dari desain antarmuka hingga pengembangan aplikasi web & mobile.</p>

          {/* ---- FocusCards Container ---- */}
          <div className="mt-10 md:mt-14 flex justify-center">
            <div className="w-full max-w-6xl">
              <FocusCardsDemo />
            </div>
          </div>

          {/* ---- Button CTA (opsional) ---- */}
          {/* <div className="flex justify-center mt-12 md:mt-16">
            <button
              onClick={() => window.open("https://dribbble.com/", "_blank")}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-[#03fa97]/40 bg-white/5 hover:bg-[#03fa97]/10
                   text-sm sm:text-base font-medium text-white hover:scale-105 transition duration-300"
            >
              Lihat Semua Proyek →
            </button>
          </div> */}
        </div>

        {/* ---- Background Subtle Gradient (opsional, dekoratif) ---- */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#03fa97]/10 to-transparent" aria-hidden />
      </section>

      {/* =========================================
     SECTION: CERTIFICATES (grid interaktif, no double-scroll)
     - Soft divider di atas untuk transisi halus dari Projects
   ========================================= */}
      <section id="certificates" className="relative min-h-screen flex flex-col justify-start bg-[#06090E] text-white">
        {/* Soft divider dari Projects */}
        <div
          className="pointer-events-none absolute -top-12 sm:-top-16 md:-top-20 w-full h-12 sm:h-16 md:h-20
               bg-gradient-to-b from-transparent via-[#06090E]/40 to-[#06090E] z-[5]"
          aria-hidden
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
          {/* Heading */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.06}
            textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-[#03fa97]"
            containerClassName="w-full text-center"
          >
            Certificates
          </ScrollFloat>

          {/* Subtitle (opsional) */}
          <p className="mt-4 text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Bukti pembelajaran & pencapaian yang relevan dengan bidang saya.</p>

          {/* Grid kartu sertifikat (tanpa scroll di dalam) */}

          <div className="mt-10 md:mt-12 grid grid-cols-12 gap-6 md:gap-8 ">
            {[
              { title: "Figma (Skill Test Certification)", desc: "Sribu Academy", img: "/assets/certificates/Certificate1.svg", link: "https://academy.sribu.com/certificate/SRB-230925-14D8-1048" },
              { title: "Intro To UI/UX Design", desc: "Purwadhika Digital Technology School", img: "/assets/certificates/Certificate2.svg", link: "https://purwadhika.com/verify-certificate/PWDK-ITUUDFC-250923-0000002" },
              { title: "Intro To UI/UX Design", desc: "Le Wagon", img: "/assets/certificates/Certificate3.svg", link: "https://app.lewagon.school/certificates/qsdaxvpjbw" },
              
            ].map((c, i) => (
              <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power2.out" initialOpacity={0.0} animateOpacity threshold={0.15} delay={i * 0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#03fa97]/30 transition">
                    {/* Gambar dengan tilt */}
                    <div className="w-full aspect-video">
                      <TiltedCard
                        imageSrc={c.img}
                        altText={c.title}
                        captionText=""
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={6}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold text-white">{c.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{c.desc}</p>

                      <button
                        onClick={() => window.open(c.link, "_blank")}
                        className="mt-3 inline-flex px-4 py-2 rounded-full border border-[#03fa97]/40 bg-white/5
                             hover:bg-[#03fa97]/10 text-sm text-white transition"
                      >
                        Lihat Sertifikat
                      </button>
                    </div>
                  </div>
                </AnimatedContent>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Logo Loop */}
      <div style={{ height: "100px", position: "relative", overflow: "hidden" }}>
        <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} pauseOnHover scaleOnHover fadeOut fadeOutColor="#000000" ariaLabel="Technology partners" />
      </div>

      {/* =========================================
          FOOTER (opsional simple)
        ========================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">© {new Date().getFullYear()} Fadilah Aprianto. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
