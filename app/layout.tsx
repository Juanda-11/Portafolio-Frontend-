import type { Metadata } from "next";
import { JetBrains_Mono, Nunito, Outfit } from "next/font/google";
import "./globals.css";

const heading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
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
      className={`${heading.variable} ${body.variable} ${code.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
