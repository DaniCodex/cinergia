import type { ReactNode } from "react";

export type HomeIconName =
  | "people" | "idea" | "chart" | "gear" | "network" | "laptop"
  | "target" | "eye" | "rocket" | "shield" | "book" | "presentation"
  | "handshake" | "building" | "arrow" | "chevron" | "mail" | "pin"
  | "instagram" | "linkedin" | "youtube" | "whatsapp" | "menu" | "close";

const paths: Record<HomeIconName, ReactNode> = {
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20v-2a6 6 0 0 1 12 0v2H3Zm12 0v-2a5 5 0 0 0-1.2-3.3A5 5 0 0 1 21 19v1h-6Z" /></>,
  idea: <><path d="M9 17h6m-5 3h4m-5-3c0-2-4-4-4-9a7 7 0 0 1 14 0c0 5-4 7-4 9" /><path d="M12 1v2M3 8H1m22 0h-2M4 2l1.5 1.5M20 2l-1.5 1.5" /></>,
  chart: <><path d="M3 21h18M5 17v-5h3v5m3 0V8h3v9m3 0V4h3v13" /><path d="m5 8 5-4 4 2 5-4" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="m10 2-.5 2.2-2 1L5.4 4 3 6.4l1.2 2.1-1 2L1 11v3l2.2.5 1 2L3 18.6 5.4 21l2.1-1.2 2 1L10 23h4l.5-2.2 2-1 2.1 1.2 2.4-2.4-1.2-2.1 1-2L23 14v-3l-2.2-.5-1-2L21 6.4 18.6 4l-2.1 1.2-2-1L14 2h-4Z" /></>,
  network: <><circle cx="12" cy="4" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="12" cy="13" r="2" /><path d="M12 6v5m-1.5 3.5L6 17m7.5-2.5L18 17M5 8l4.5 3M19 8l-4.5 3" /></>,
  laptop: <><rect x="4" y="4" width="16" height="12" rx="1" /><path d="M2 20h20l-2-4H4l-2 4Zm8-2h4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /><path d="m12 12 8-8m-3 0h3v3" /></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="3" /></>,
  rocket: <><path d="M9 15c-1-4 1-9 9-12l3 3c-3 8-8 10-12 9Z" /><path d="m9 15-2 4-2-2 4-2Zm0-6-4 1-2 4 6-1m6 2-1 6 4-2 1-4" /><circle cx="16" cy="8" r="1" /><path d="m4 20-2 2m5-1-2 2" /></>,
  shield: <><path d="M12 2 4 5v6c0 5 3 8.5 8 11 5-2.5 8-6 8-11V5l-8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  book: <><path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15" /></>,
  presentation: <><rect x="3" y="3" width="18" height="13" rx="1" /><path d="M12 16v6m-4 0h8m-9-9 3-3 2 2 4-5" /></>,
  handshake: <><path d="M2 8 7 5l5 2 5-2 5 3-4 8-4 3-2-1-2 1-4-3-4-8Z" /><path d="m7 11 4-3 3 1 3 4m-9 1 3 3m2-5 4 4" /></>,
  building: <><path d="m2 9 10-6 10 6H2Zm2 2v8m5-8v8m6-8v8m5-8v8M2 21h20" /></>,
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  chevron: <><path d="m9 5 7 7-7 7" /></>,
  mail: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="m2 7 10 7 10-7" /></>,
  pin: <><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13Z" /><circle cx="12" cy="9" r="2.5" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
  linkedin: <><path d="M4 9v11m0-15v.1M9 20v-7a4 4 0 0 1 8 0v7m-8-11v11m8-6v6" /><path d="M20 20v-8a7 7 0 0 0-11-5" /></>,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></>,
  whatsapp: <><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.3A9 9 0 1 0 12 3Z" /><path d="M8.5 8c.5 3.2 3.3 6.1 6.6 7l1.5-1.5-2.5-1.5-1.1 1c-1.2-.5-2.1-1.4-2.6-2.6l1-1.1L10 7 8.5 8Z" /></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  close: <><path d="M4 4 20 20M20 4 4 20" /></>,
};

export default function HomeIcon({ name, size = 24, className = "" }: { name: HomeIconName; size?: number; className?: string }) {
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
