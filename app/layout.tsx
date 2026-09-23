import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/layout/providers";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="relative flex min-h-screen flex-col font-display antialiased bg-[#F1E8E0] text-[#111111] selection:bg-[#C6B37E] selection:text-[#0A0A0A]">
        {/* Subtle Technical Grain / Noise Layer */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[-1] editorial-grain opacity-30 mix-blend-multiply"
        />

        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-background focus:outline-none focus:ring-1 focus:ring-accent font-mono text-xs uppercase tracking-wider font-semibold"
        >
          Skip to main content
        </a>

        {/* Providers (Smooth Scroll & Cursor Context) */}
        <Providers>
          <Header />
          <div id="main-content" className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
