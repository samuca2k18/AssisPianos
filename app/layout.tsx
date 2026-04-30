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
  ],
  openGraph: {
    title: "Assis Pianos | Serviços especializados em pianos em Fortaleza",
    description:
      "Atendimento premium para venda, afinação, restauração, conserto e transporte de pianos em Fortaleza.",
    url: "https://assispianos.com.br",
    siteName: "Assis Pianos",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
