import Image from "next/image";
import Link from "next/link";
import { AtSign, MapPin, MessageCircle, Music, PhoneCall } from "lucide-react";
import { businessInfo, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-brand-champagne/15 bg-brand-ebony pt-16 pb-8">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-champagne/30 to-transparent" />

      <Container className="grid gap-10 md:grid-cols-3">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/assis-logo.jpg"
              alt="Logo Assis Pianos"
              width={44}
              height={44}
              className="rounded-full border-2 border-brand-champagne/30 object-cover"
            />
            <div>
              <h3 className="font-display text-xl text-brand-parchment">{businessInfo.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-champagne/60">
                {businessInfo.city}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-parchment/55">
            Especialistas em venda, restauração, afinação e transporte de pianos com tradição artesanal e atendimento
            de confiança em Fortaleza.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/25 px-3.5 py-1.5 text-xs font-medium text-brand-parchment/70 transition-all hover:border-brand-champagne/50 hover:text-brand-champagne"
            >
              <AtSign size={12} />
              Instagram
            </Link>
            <Link
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/25 px-3.5 py-1.5 text-xs font-medium text-brand-parchment/70 transition-all hover:border-brand-champagne/50 hover:text-brand-champagne"
            >
              <MessageCircle size={12} />
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-champagne/60">Navegação</h4>
          <div className="mt-2 h-px w-8 bg-brand-champagne/30" />
          <ul className="mt-5 grid gap-2.5 text-sm text-brand-parchment/65">
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
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-champagne/60">Contato</h4>
          <div className="mt-2 h-px w-8 bg-brand-champagne/30" />
          <ul className="mt-5 grid gap-3 text-sm text-brand-parchment/65">
            <li className="inline-flex items-center gap-2.5">
              <PhoneCall size={14} className="text-brand-champagne/50" />
              {businessInfo.phoneDisplay}
            </li>
            <li className="inline-flex items-center gap-2.5">
              <AtSign size={14} className="text-brand-champagne/50" />
              {businessInfo.email}
            </li>
            <li className="inline-flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-champagne/50" />
              {businessInfo.address}
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-brand-champagne/15 bg-white/[0.03] px-4 py-3">
            <p className="text-xs text-brand-parchment/50">
              {businessInfo.hoursWeek} &nbsp;·&nbsp; {businessInfo.hoursSaturday}
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <Container className="mt-12">
        <div className="gold-divider" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-parchment/35">
          <span>© {new Date().getFullYear()} {businessInfo.name}. Todos os direitos reservados.</span>
          <span className="inline-flex items-center gap-1.5">
            Feito com <Music size={11} className="text-brand-champagne/50" /> em Fortaleza
          </span>
        </div>
      </Container>
    </footer>
  );
}
