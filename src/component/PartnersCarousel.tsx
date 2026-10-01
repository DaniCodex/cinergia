"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "@/app/home.module.css";

const partners = [
  { name: "CONEII", image: "/home/alliances/coneii.webp" },
  { name: "AIESEC", image: "/home/alliances/aiesec.webp" },
  { name: "Todo de Ingeniería Industrial", image: "/home/alliances/todo-industrial.webp" },
  { name: "Good Finance", image: "/home/alliances/good-finance.webp" },
  { name: "LEAD", image: "/home/alliances/lead.webp" },
  { name: "Núcleo Centro Cultural", image: "/home/alliances/nucleo.webp" },
  { name: "TechSpira", image: "/home/alliances/techspira.webp" },
  { name: "Club de Tecnología y Electrónica", image: "/home/alliances/club-tecnologia.webp" },
];

export default function PartnersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ previous: false, next: true });

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScroll({
      previous: track.scrollLeft > 2,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 2,
    });
  };

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.78,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <div className={styles.partnerCarousel} role="region" aria-roledescription="carrusel" aria-label="Aliados de CINERGIA" data-reveal>
      <div className={styles.partnerTrack} ref={trackRef} onScroll={updateControls}>
        {partners.map(({ name, image }) => (
          <div className={styles.partnerTile} key={name}>
            <Image src={image} alt={`Logo de ${name}`} fill sizes="(max-width: 760px) 45vw, 20vw" />
          </div>
        ))}
      </div>
      <div className={styles.partnerControls}>
        <span>Desliza para descubrir más aliados</span>
        <div className={styles.partnerArrows}>
          <button type="button" aria-label="Ver aliados anteriores" onClick={() => scroll(-1)} disabled={!canScroll.previous}>‹</button>
          <button type="button" aria-label="Ver más aliados" onClick={() => scroll(1)} disabled={!canScroll.next}>›</button>
        </div>
      </div>
    </div>
  );
}
