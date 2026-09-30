"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const pending = new Set<HTMLElement>();
    const startedCounters = new Set<HTMLElement>();
    const counterFrames = new Map<HTMLElement, number>();
    const counterTimers = new Set<number>();
    let frame = 0;
    const animateCount = (card: HTMLElement) => {
      const counter = card.querySelector<HTMLElement>("[data-count]");
      if (!counter || startedCounters.has(counter)) return;
      startedCounters.add(counter);

      const target = Number(counter.dataset.count);
      if (card.getBoundingClientRect().bottom <= 0) {
        counter.textContent = `+${target}`;
        return;
      }

      const start = () => {
        const startTime = performance.now();
        const tick = (time: number) => {
          const progress = Math.min((time - startTime) / 1400, 1);
          const eased = 1 - (1 - progress) ** 3;
          counter.textContent = `+${Math.round(target * eased)}`;
          if (progress < 1) counterFrames.set(counter, requestAnimationFrame(tick));
          else counterFrames.delete(counter);
        };
        counterFrames.set(counter, requestAnimationFrame(tick));
      };

      const delay = Number(card.dataset.revealDelay ?? 0) * 70;
      if (delay) {
        const timer = window.setTimeout(() => {
          counterTimers.delete(timer);
          start();
        }, delay);
        counterTimers.add(timer);
      } else start();
    };
    const reveal = (element: HTMLElement) => {
      element.classList.remove("reveal-pending");
      pending.delete(element);
      observer.unobserve(element);
      animateCount(element);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        reveal(entry.target as HTMLElement);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });

    const revealPassed = () => {
      frame = 0;
      for (const element of pending) {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.95) reveal(element);
      }
    };
    const scheduleReveal = () => {
      if (!frame) frame = requestAnimationFrame(revealPassed);
    };

    for (const element of elements) {
      const bounds = element.getBoundingClientRect();
      const counter = element.querySelector<HTMLElement>("[data-count]");
      if (counter && bounds.bottom > 0) counter.textContent = "+0";
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        animateCount(element);
        continue;
      }
      if (bounds.bottom <= 0) continue;
      element.classList.add("reveal-pending");
      pending.add(element);
      observer.observe(element);
    }

    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    return () => {
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      cancelAnimationFrame(frame);
      counterTimers.forEach(clearTimeout);
      counterFrames.forEach(cancelAnimationFrame);
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((counter) => {
        counter.textContent = `+${counter.dataset.count}`;
      });
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
