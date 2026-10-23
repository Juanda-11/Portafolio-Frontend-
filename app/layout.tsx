import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio · Diseño de Interfaces",
  description: "Portafolio personal desarrollado con Next.js, TypeScript, Tailwind CSS y Vercel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${code.variable} ${serif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
