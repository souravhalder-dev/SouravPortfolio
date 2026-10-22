import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://sourav-halder-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sourav Halder | Full Stack Developer & Software Engineer",
    template: "%s | Sourav Halder",
  },
  description:
    "Official portfolio of Sourav Halder, Full Stack Developer & Software Engineer based in Khulna, Bangladesh. Specializing in Next.js, React 19, TypeScript, Node.js, PostgreSQL, MediaWiki, and WordPress.",
  keywords: [
    "Sourav Halder",
    "Sourav Halder Portfolio",
    "souravhalder-dev",
    "Full Stack Developer Bangladesh",
    "Software Engineer Khulna",
    "Next.js Developer",
    "React 19 Specialist",
    "TypeScript Engineer",
    "Node.js Backend Developer",
    "MediaWiki Expert",
    "WordPress Developer",
    "PostgreSQL Prisma Developer",
    "Frontend Engineer",
    "Remontada Workspace",
    "TradeSphere E-Commerce",
    "EventPulse Platform",
    "Justapedia Contributor",
  ],
  authors: [{ name: "Sourav Halder", url: "https://github.com/souravhalder-dev" }],
  creator: "Sourav Halder",
  publisher: "Sourav Halder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sourav Halder Portfolio",
    title: "Sourav Halder | Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Sourav Halder - high-performance web applications, enterprise marketplaces, MediaWiki knowledge architectures, and modern UI systems.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sourav Halder - Full Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Halder | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Sourav Halder. Next.js, React 19, TypeScript, Node.js, MediaWiki, and WordPress developer from Khulna, Bangladesh.",
    creator: "@souravhdev",
    site: "@souravhdev",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sourav Halder",
    alternateName: "souravhalder-dev",
    jobTitle: "Full Stack Software Developer",
    description:
      "Passionate developer specializing in Next.js, React 19, TypeScript, Node.js, PostgreSQL, MediaWiki, and WordPress.",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khulna",
      addressCountry: "BD",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "National University, Bangladesh",
      },
      {
        "@type": "EducationalOrganization",
        name: "Programming Hero",
      },
    ],
    sameAs: [
      "https://github.com/souravhalder-dev",
      "https://www.linkedin.com/in/sourav-halder-dev/",
      "https://x.com/souravhdev",
      "https://justapedia.org/User:Sourav",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "MediaWiki",
      "WordPress",
      "Tailwind CSS",
      "RESTful APIs",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sourav Halder Portfolio",
    url: SITE_URL,
    description:
      "Professional software engineering portfolio showcasing full-stack applications, knowledge engines, and case studies.",
    author: {
      "@type": "Person",
      name: "Sourav Halder",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/25 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
