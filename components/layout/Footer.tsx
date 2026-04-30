import Image from "next/image";
import Link from "next/link";
import { AtSign, MapPin, MessageCircle, Music, PhoneCall } from "lucide-react";
import { businessInfo, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-brand-champagne/10 bg-brand-dark pt-20 pb-10">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-champagne/25 to-transparent" />

      <Container className="grid gap-12 md:grid-cols-3">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/assis-logo.jpg"
              alt="Logo Assis Pianos"
              width={48}
              height={48}
              className="rounded-full border-2 border-brand-champagne/25 object-cover"
            />
            <div>
              <h3 className="font-display text-xl text-brand-parchment">{businessInfo.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand-champagne/50">
                Desde 1984 · {businessInfo.city}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-[1.8] text-brand-parchment/45">
            Há mais de quatro décadas cuidando de pianos com excelência, tradição artesanal e confiança em Fortaleza.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/20 px-4 py-2 text-xs font-medium text-brand-parchment/60 transition-all duration-300 hover:border-brand-champagne/40 hover:text-brand-champagne"
            >
              <AtSign size={12} />
              Instagram
            </Link>
            <Link
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/20 px-4 py-2 text-xs font-medium text-brand-parchment/60 transition-all duration-300 hover:border-brand-champagne/40 hover:text-brand-champagne"
            >
              <MessageCircle size={12} />
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-champagne/50">Navegação</h4>
          <div className="mt-3 h-px w-8 bg-brand-champagne/25" />
          <ul className="mt-6 grid gap-3 text-sm text-brand-parchment/55">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors duration-300 hover:text-brand-champagne">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-champagne/50">Contato</h4>
          <div className="mt-3 h-px w-8 bg-brand-champagne/25" />
          <ul className="mt-6 grid gap-3.5 text-sm text-brand-parchment/55">
            <li className="inline-flex items-center gap-3">
              <PhoneCall size={14} className="text-brand-champagne/40" />
              {businessInfo.phoneDisplay}
            </li>
            <li className="inline-flex items-center gap-3">
              <AtSign size={14} className="text-brand-champagne/40" />
              {businessInfo.email}
            </li>
            <li className="inline-flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-champagne/40" />
              {businessInfo.address}
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-brand-champagne/12 bg-white/[0.02] px-4 py-3">
            <p className="text-xs text-brand-parchment/40">
              {businessInfo.hoursWeek} &nbsp;·&nbsp; {businessInfo.hoursSaturday}
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <Container className="mt-14">
        <div className="gold-divider" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-parchment/30">
          <span>© {new Date().getFullYear()} {businessInfo.name} · Desde 1984. Todos os direitos reservados.</span>
          <span className="inline-flex items-center gap-1.5">
            Feito com <Music size={11} className="text-brand-champagne/40" /> em Fortaleza
          </span>
        </div>
      </Container>
    </footer>
  );
}
