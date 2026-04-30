import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://assispianos.com.br"),
  title: {
    default: "Assis Pianos | Afinação, Restauração, Transporte e Venda em Fortaleza",
    template: "%s | Assis Pianos",
  },
  description:
    "Serviços especializados para pianos em Fortaleza: venda, restauração, conserto, afinação e transporte com atendimento profissional e de confiança.",
  keywords: [
    "Assis Pianos",
    "pianos Fortaleza",
    "afinação de piano",
    "restauração de piano",
    "conserto de piano",
    "transporte de piano",
    "venda de piano",
    "piano Ceará",
    "afinador de piano Fortaleza",
  ],
  icons: {
    icon: "/images/assis-logo.jpg",
    apple: "/images/assis-logo.jpg",
  },
  openGraph: {
    title: "Assis Pianos | Especialistas em Pianos em Fortaleza",
    description:
      "Venda, restauração, conserto, afinação e transporte de pianos com atendimento premium em Fortaleza e Região Metropolitana.",
    url: "https://assispianos.com.br",
    siteName: "Assis Pianos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-piano-2.jpg",
        width: 1200,
        height: 630,
        alt: "Assis Pianos - Especialistas em Pianos em Fortaleza",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Assis Pianos",
              description:
                "Serviços especializados em pianos: venda, restauração, conserto, afinação e transporte em Fortaleza.",
              url: "https://assispianos.com.br",
              telephone: "+5585996224425",
              email: "otpianos@yahoo.com.br",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Rui Barbosa, 780",
                addressLocality: "Fortaleza",
                addressRegion: "CE",
                addressCountry: "BR",
                neighborhood: "Meireles",
              },
              openingHours: ["Mo-Fr 08:00-20:00", "Sa 08:00-12:00"],
              sameAs: ["https://www.instagram.com/assispianos/"],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
