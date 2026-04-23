import { Great_Vibes, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Menopause Anonymous — Sunday Healing Circle",
  description:
    "A safe, supportive space where women gather to share openly about menopause & life transitions. Every Sunday at 4:00 PM Central Time.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfair.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
