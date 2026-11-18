import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/company";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://alvoratech.com";

export const viewport: Viewport = {
  themeColor: "#123B8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alvora Tech Solution | Web Development, SaaS & Digital Solutions",
    template: "%s | Alvora Tech Solution",
  },
  description:
    "Alvora Tech Solution provides professional web development, mobile applications, SaaS platforms, automation, UI/UX design and digital marketing services.",
  keywords: [
    "Alvora Tech Solution",
    "Web Development",
    "SaaS Development",
    "Mobile Applications",
    "UI/UX Design",
    "Restaurant POS",
    "Kitchen Display System",
    "Business Automation",
    "Artful Creation",
    "Digital Marketing",
    "SEO Services",
  ],
  authors: [{ name: "Alvora Tech Solution" }],
  creator: "Alvora Tech Solution",
  publisher: "Alvora Tech Solution",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Alvora Tech Solution | Web Development, SaaS & Digital Solutions",
    description:
      "Transforming ideas into powerful digital products through web development, mobile apps, SaaS platforms, automation, and digital marketing.",
    siteName: "Alvora Tech Solution",
    images: [
      {
        url: "/logo/alvora-logo-nav.png",
        width: 1200,
        height: 630,
        alt: "Alvora Tech Solution - Technology, Innovation, Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvora Tech Solution | Web Development, SaaS & Digital Solutions",
    description:
      "Transforming ideas into powerful digital products through web development, mobile apps, SaaS platforms, automation, and digital marketing.",
    creator: "@alvoratech",
    images: ["/logo/alvora-logo-nav.png"],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    legalName: companyData.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo/alvora-logo-nav.png`,
    description: companyData.shortDescription,
    telephone: companyData.phones[0],
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: companyData.address.city,
      addressRegion: companyData.address.state,
      addressCountry: companyData.address.country,
    },
    sameAs: [
      companyData.socialLinks.linkedin,
      companyData.socialLinks.twitter,
      companyData.socialLinks.github,
      companyData.socialLinks.instagram,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.phones[0],
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#1677E8]/15 selection:text-[#123B8A]">
        {children}
      </body>
    </html>
  );
}
