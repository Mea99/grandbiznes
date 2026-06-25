import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Manrope,
  Sora,
  Marcellus,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/components/SiteProvider";
import { Cursor } from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grandbiznes.pl"),
  title: "GrandBiznes — Strony internetowe i sklepy, które robią robotę",
  description:
    "Studio stron internetowych GrandBiznes. Projektuję i buduję nowoczesne strony i sklepy — z systemami lojalności, rezerwacji i sprzedaży. Szybko, mobilnie, z charakterem.",
  keywords: [
    "strony internetowe",
    "sklepy internetowe",
    "tworzenie stron",
    "web design",
    "GrandBiznes",
  ],
  openGraph: {
    title: "GrandBiznes — Strony, które robią robotę",
    description:
      "Nowoczesne strony i sklepy z systemami lojalności, rezerwacji i sprzedaży.",
    url: "https://grandbiznes.pl",
    siteName: "GrandBiznes",
    locale: "pl_PL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="aurora" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${sora.variable} ${marcellus.variable} ${jetbrainsMono.variable}`}
      >
        <SiteProvider>
          <Cursor />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
