import localFont from "next/font/local";

// These are the Latin subsets already cached by this project during local development.
// Keeping them local allows production builds without a Google Fonts network request.
export const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
});

export const outfit = localFont({
  src: "./fonts/outfit-latin.woff2",
  weight: "400 700",
  display: "swap",
});

export const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  weight: "400 900",
  display: "swap",
});
