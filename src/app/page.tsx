import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon, { type HomeIconName } from "@/component/HomeIcon";
import PhotoCarousel from "@/component/PhotoCarousel";
import PartnersCarousel from "@/component/PartnersCarousel";
import ScrollReveal from "@/component/ScrollReveal";
import styles from "./home.module.css";

const careers: { label: string; icon: HomeIconName; href: string }[] = [
  { label: "Ing. Industrial", icon: "gear", href: "https://www.cientifica.edu.pe/carreras/ingenieria-industrial/" },
  { label: "Ing. Empresarial y de Sistemas", icon: "network", href: "https://www.cientifica.edu.pe/carreras/ingenieria-empresarial-y-de-sistemas/" },
  { label: "Ing. Software", icon: "laptop", href: "https://www.cientifica.edu.pe/carreras/ingenieria-de-software/" },
  { label: "Ing. IA y Ciencia de Datos", icon: "chart", href: "https://www.cientifica.edu.pe/carreras/ingenieria-inteligencia-artificial-ciencia-datos/" },
];
const principles: { label: string; description: string; icon: HomeIconName }[] = [
  { label: "Hacemos que suceda", description: "Convertimos ideas en experiencias y proyectos reales.", icon: "rocket" },
  { label: "Crecemos juntos", description: "Aprendemos en comunidad y compartimos lo que sabemos.", icon: "people" },
  { label: "Impulsamos el talento", description: "Abrimos espacios para que cada estudiante desarrolle su potencial.", icon: "chart" },
  { label: "Construimos con integridad", description: "Actuamos con responsabilidad, respeto y compromiso.", icon: "shield" },
  { label: "Aprendemos para avanzar", description: "Exploramos nuevas ideas para enfrentar los retos de la ingeniería.", icon: "book" },
];
function SectionTitle({ children, id }: { children: ReactNode; id: string }) {
  return <div className={styles.sectionTitle} id={id} data-reveal><span className={styles.titleRule} /><h2>{children}</h2></div>;
}

export default function Home() {
  return <main className={styles.home}>
    <ScrollReveal />
    <section id="inicio" className={styles.hero}>
      <Image src="/home/hero.webp" alt="Estudiantes de CINERGIA reunidos en el campus" fill preload sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroShade} />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1>CINERGIA</h1>
          <p className={styles.heroTagline}>Cruza la meta,<br /><strong>dejando huella.</strong></p>
          <p className={styles.heroDescription}>Conectamos estudiantes, ideas y oportunidades para impulsar un futuro como ingenieros.</p>
          <div className={styles.heroActions}>
            <Link href="#contacto" className={styles.primaryButton}>Únete a CINERGIA <HomeIcon name="arrow" size={18} /></Link>
            <Link href="#nosotros" className={styles.outlineButton}>Conoce más</Link>
          </div>
        </div>
        <p className={styles.heroNote}><span>Más</span><br />que ingeniería,<br />comunidad</p>
      </div>
    </section>

    <div className={styles.content}>
      <section className={styles.about} aria-labelledby="nosotros">
        <PhotoCarousel variant="about" />
        <div className={styles.aboutCopy}>
          <SectionTitle id="nosotros">¿QUIÉNES SOMOS?</SectionTitle>
          <p data-reveal>Una comunidad de estudiantes de ingeniería que conecta ideas, personas y oportunidades para seguir creciendo dentro y fuera de las aulas.</p>
          <div className={styles.aboutValues}>
            <div data-reveal><span><HomeIcon name="people" size={30} /></span><strong>Estudiantes</strong></div>
            <div data-reveal data-reveal-delay="1"><span><HomeIcon name="idea" size={30} /></span><strong>Ideas</strong></div>
            <div data-reveal data-reveal-delay="2"><span><HomeIcon name="chart" size={30} /></span><strong>Oportunidades</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="carreras">
        <SectionTitle id="carreras">NUESTRAS CARRERAS</SectionTitle>
        <div className={styles.careerGrid}>{careers.map(({ label, icon, href }, index) => <a className={styles.careerCard} href={href} target="_blank" rel="noopener noreferrer" key={label} data-reveal data-reveal-delay={index}><HomeIcon name={icon} size={34} /><strong>{label}</strong></a>)}</div>
      </section>

      <section className={styles.section} aria-labelledby="mision-vision">
        <SectionTitle id="mision-vision">NUESTRA MISIÓN Y VISIÓN</SectionTitle>
        <div className={styles.missionGrid}>
          <article className={styles.missionCard} data-reveal><div className={styles.missionHeading}><HomeIcon name="target" size={39} /><h3>MISIÓN</h3></div><p>Contribuir al desarrollo profesional de los estudiantes de ingeniería creando espacios de aprendizaje, networking y diálogo sobre temas emergentes.</p></article>
          <div className={styles.missionMascot} data-reveal data-reveal-delay="1"><Image src="/home/mission-mascot.webp" alt="Mascota de CINERGIA compartiendo una idea" width={363} height={368} sizes="(max-width: 760px) 210px, 250px" /></div>
          <article className={styles.missionCard} data-reveal data-reveal-delay="2"><div className={styles.missionHeading}><HomeIcon name="eye" size={39} /><h3>VISIÓN</h3></div><p>Ser una comunidad que forme líderes para la ingeniería del futuro.</p></article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="principios">
        <SectionTitle id="principios">NUESTROS PRINCIPIOS</SectionTitle>
        <div className={styles.principlesGrid}>
          <div className={styles.principleList}>{principles.map(({ label, description, icon }, index) => <details className={styles.principle} key={label} data-reveal data-reveal-delay={index}><summary><HomeIcon name={icon} size={27} /><strong>{label}</strong><HomeIcon name="chevron" size={19} className={styles.principleChevron} /></summary><p>{description}</p></details>)}</div>
          <PhotoCarousel variant="principles" />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="impacto">
        <SectionTitle id="impacto">NUESTRO IMPACTO</SectionTitle>
        <div className={styles.impactGrid}>
          <div className={`${styles.impactCard} ${styles.orange}`} data-reveal><strong data-count="600">+600</strong><span>Estudiantes<br />alcanzados</span></div>
          <div className={styles.impactPhoto} data-reveal data-reveal-delay="1"><Image src="/home/impact-mentoring.webp" alt="Estudiantes en una actividad de aprendizaje" fill sizes="(max-width: 760px) 50vw, 25vw" /></div>
          <div className={`${styles.impactCard} ${styles.navy}`} data-reveal data-reveal-delay="2"><strong data-count="12">+12</strong><span className={styles.impactUppercase}>Alianzas</span></div>
          <div className={styles.impactPhoto} data-reveal data-reveal-delay="3"><Image src="/home/impact-community.webp" alt="Comunidad de estudiantes frente al campus" fill sizes="(max-width: 760px) 50vw, 25vw" /></div>
          <div className={styles.impactPhoto} data-reveal><Image src="/home/impact-visit.webp" alt="Estudiantes de CINERGIA durante una visita a Gloria" fill sizes="(max-width: 760px) 50vw, 25vw" /></div>
          <div className={`${styles.impactCard} ${styles.navy}`} data-reveal data-reveal-delay="1"><strong data-count="17">+17</strong><span>Charlas<br />Mentorías<br />Visitas</span></div>
          <div className={styles.impactPhoto} data-reveal data-reveal-delay="2"><Image src="/home/impact-certificate.webp" alt="Certificado de una actividad de CINERGIA" fill sizes="(max-width: 760px) 50vw, 25vw" /></div>
          <div className={`${styles.impactCard} ${styles.orange}`} data-reveal data-reveal-delay="3"><span className={styles.impactUppercase}>Respaldo<br />institucional</span></div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="equipo">
        <SectionTitle id="equipo">CONOCE AL EQUIPO</SectionTitle>
        <div className={styles.teamGrid}>
          <article className={styles.teamCard} data-reveal><div className={styles.avatar} aria-label="Retrato pendiente">JE</div><h3>Joaquín<br />Espichán</h3><p>Presidente</p></article>
          <article className={styles.teamCard} data-reveal data-reveal-delay="1"><div className={styles.avatar} aria-label="Retrato pendiente">CC</div><h3>Christofaith<br />Contreras</h3><p>Vicepresidente</p></article>
          <article className={styles.teamCard} data-reveal data-reveal-delay="2"><div className={styles.avatar} aria-label="Retrato pendiente">LB</div><h3>Lucero<br />Bernal</h3><p>Directora de Eventos</p></article>
          <Link href="#contacto" className={styles.teamCta} data-reveal data-reveal-delay="3"><HomeIcon name="people" size={42} /><strong>Un equipo con grandes ideas para llegar más lejos.</strong><span><HomeIcon name="chevron" size={22} /></span></Link>
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="partners">
        <div className={styles.partnersMain}>
          <SectionTitle id="partners">NUESTROS PARTNERS</SectionTitle>
          <p data-reveal>Aliados que creen en el talento joven y en el poder de la colaboración.</p>
          <PartnersCarousel />
        </div>
        <div className={styles.partnersMascot} data-reveal data-reveal-delay="2"><Image src="/home/partners-mascot.jpg" alt="Mascota de CINERGIA celebrando sus alianzas" fill sizes="(max-width: 760px) 190px, 250px" /></div>
      </section>
    </div>

    <footer className={styles.footer} id="contacto"><div className={styles.footerInner}>
      <div className={styles.footerBrand} data-reveal><Link href="#inicio" className={styles.footerLogo}>CINERGIA</Link><p>Conectamos estudiantes con oportunidades profesionales e ideas que impulsan <strong>su futuro como ingenieros.</strong></p></div>
      <div className={styles.footerLinks} data-reveal data-reveal-delay="1"><h3>EXPLORA</h3><Link href="#nosotros">Nosotros</Link><Link href="#impacto">Eventos</Link><Link href="#principios">Proyectos</Link><Link href="#carreras">Cursos y Becas</Link><Link href="#equipo">Conoce al equipo</Link></div>
      <div className={styles.footerContact} data-reveal data-reveal-delay="2"><h3>CONTACTO</h3><p><HomeIcon name="mail" size={18} /> adm.cinergia.ucsur@gmail.com</p><p><HomeIcon name="pin" size={18} /> Universidad Científica del Sur,<br />Lima, Perú</p><div className={styles.footerSocials}><HomeIcon name="instagram" size={19} /><HomeIcon name="linkedin" size={19} /><HomeIcon name="whatsapp" size={19} /></div></div>
      <div className={styles.footerBottom}><span>© 2026 CINERGIA, Asociación Estudiantil de la Universidad Científica del Sur.<br />Todos los derechos reservados.</span><span>Privacidad&nbsp;&nbsp; | &nbsp;&nbsp;Términos de uso</span></div>
    </div></footer>
  </main>;
}
