"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/app/home.module.css";

type Variant = "about" | "principles";

const photoSets: Record<Variant, { src: string; alt: string }[]> = {
  about: [
    { src: "/home/about.webp", alt: "Integrantes de CINERGIA frente a la universidad" },
    { src: "/home/about-community.webp", alt: "Integrantes de CINERGIA en una feria de ingeniería" },
    { src: "/home/about-presentation.webp", alt: "Comunidad de CINERGIA durante una presentación en el aula" },
  ],
  principles: [
    { src: "/home/principles.webp", alt: "Estudiantes de ingeniería durante una visita industrial" },
    { src: "/home/principles-campus.webp", alt: "Estudiantes de ingeniería reunidos en el campus" },
    { src: "/home/principles-community.webp", alt: "Integrantes de CINERGIA reunidos junto a su banner" },
  ],
};

export default function PhotoCarousel({ variant }: { variant: Variant }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const photos = photoSets[variant];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") setActiveIndex((index) => (index + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isVisible, isPaused, photos.length]);

  const goTo = (step: number) => setActiveIndex((index) => (index + step + photos.length) % photos.length);

  return (
    <div
      ref={carouselRef}
      className={variant === "about" ? styles.aboutImage : styles.principlesImage}
      role="region"
      aria-roledescription="carrusel"
      aria-label={variant === "about" ? "Fotos de quiénes somos" : "Fotos de CINERGIA"}
      data-reveal
      data-reveal-delay={variant === "principles" ? "1" : undefined}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      {photos.map(({ src, alt }, index) => (
        <div className={`${styles.carouselSlide} ${index === activeIndex ? styles.carouselSlideActive : ""}`} key={src} aria-hidden={index !== activeIndex}>
          <Image src={src} alt={index === activeIndex ? alt : ""} fill sizes={variant === "about" ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 58vw"} />
        </div>
      ))}
      <button className={`${styles.carouselArrow} ${styles.carouselPrevious}`} type="button" aria-label="Foto anterior" onClick={() => goTo(-1)}>‹</button>
      <button className={`${styles.carouselArrow} ${styles.carouselNext}`} type="button" aria-label="Foto siguiente" onClick={() => goTo(1)}>›</button>
      <div className={styles.carouselDots} aria-label="Elegir foto">
        {photos.map(({ src }, index) => (
          <button
            className={`${styles.carouselDot} ${index === activeIndex ? styles.carouselDotActive : ""}`}
            type="button"
            key={src}
            aria-label={`Ver foto ${index + 1} de ${photos.length}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
