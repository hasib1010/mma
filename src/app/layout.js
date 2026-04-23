import { Cormorant_Garamond, Dancing_Script, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Menopause Anonymous — Women Supporting Women Through Change",
  description:
    "A safe, anonymous space where women gather to share, understand, and navigate one of life's most powerful transitions — together. Every Sunday at 4 PM CT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dancing.variable} ${jost.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
