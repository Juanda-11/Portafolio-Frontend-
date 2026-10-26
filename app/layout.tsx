import type { Metadata, Viewport } from "next";
import { Anton, Cormorant_Garamond, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Providers from "@/components/Providers";
import SkipLink from "@/components/SkipLink";
import { preferencesScript } from "@/lib/preferences";
import { siteUrl } from "@/lib/site";
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

const title = "Juan David Jurado Paz · Desarrollo frontend y apps móviles";
const description =
  "Estudiante de Ingeniería de Software en Pasto, Colombia. Diseño y desarrollo interfaces web y apps para móvil, escritorio y smartwatch con Next.js, React Native y Expo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Portafolio de Juan David Jurado Paz",
  authors: [{ name: "Juan David Jurado Paz", url: siteUrl }],
  keywords: ["Juan David Jurado Paz", "portafolio", "desarrollador frontend", "React Native", "Next.js", "Pasto", "Colombia"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Juan David Jurado Paz",
    title,
    description,
    locale: "es_CO",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Juan David Jurado Paz · Desarrollo frontend y apps móviles" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#f3f6ff" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${code.variable} ${serif.variable} scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body className="min-h-screen">
        <Providers>
          <SkipLink />
          {children}
        </Providers>
      </body>
    </html>
  );
}
