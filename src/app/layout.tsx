import type { Metadata } from "next";
import {
  Work_Sans,
  Archivo,
  Hind_Siliguri,
  Manrope,
} from "next/font/google";
import "@/styles/globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amraiagami.org"),
  title: {
    default: "Amrai Agami | Nonprofit NGO Fundraising & Donation Platform",
    template: "%s | Amrai Agami",
  },
  description:
    "Amrai Agami (আমরাই আগামী) is a global non-profit NGO fundraising and charity donation platform dedicated to education, clean water, healthcare, and emergency food aid.",
  keywords: [
    "Amrai Agami",
    "আমরাই আগামী",
    "charity",
    "nonprofit",
    "fundraising",
    "donation",
    "NGO",
    "volunteer",
    "emergency relief",
    "clean water",
    "child education",
  ],
  authors: [{ name: "Amrai Agami Team", url: "https://amraiagami.org" }],
  creator: "Amrai Agami NGO",
  publisher: "Amrai Agami Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amraiagami.org",
    title: "Amrai Agami | Nonprofit NGO Fundraising Platform",
    description:
      "Join hands with Amrai Agami to empower vulnerable children and families worldwide.",
    siteName: "Amrai Agami",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Amrai Agami Non-profit Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrai Agami | Nonprofit NGO Fundraising",
    description:
      "Empowering lives through education, emergency relief, and clean water initiatives.",
    images: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&h=630&q=85"],
    creator: "@amraiagami",
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
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Amrai Agami",
    url: "https://amraiagami.org",
    logo: "https://amraiagami.org/assets/images/logo.png",
    description:
      "Global nonprofit charity organization committed to poverty alleviation, education, and healthcare.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-1874303208",
      contactType: "customer service",
      email: "support@amraiagami.org",
      areaServed: "World",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [
      "https://www.facebook.com",
      "https://twitter.com",
      "https://www.linkedin.com",
      "https://instagram.com",
    ],
  };

  return (
    <html
      lang="en"
      className={`${workSans.variable} ${hindSiliguri.variable} ${archivo.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/charifund.css" />
        <link rel="stylesheet" href="/assets/fonts/css/flag-icons.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-800 selection:bg-amber-500 selection:text-slate-950 flex flex-col min-h-screen">
        <LanguageProvider>
          <CartProvider>
            <AppShell>{children}</AppShell>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
