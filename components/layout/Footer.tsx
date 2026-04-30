import Link from "next/link";
import { AtSign, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { businessInfo, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-brand-champagne/20 bg-brand-ebony py-12">
      <Container className="grid gap-9 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-brand-parchment">{businessInfo.name}</h3>
          <p className="mt-4 max-w-xs text-sm text-brand-parchment/70">
            Serviços premium para pianos em Fortaleza com foco em tradição, cuidado técnico e confiança.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/35 px-3 py-1.5 text-xs text-brand-parchment/80 transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              <AtSign size={12} />
              Instagram
            </Link>
            <Link
              href={`https://wa.me/${businessInfo.phoneDigits}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/35 px-3 py-1.5 text-xs text-brand-parchment/80 transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              <MessageCircle size={12} />
              WhatsApp
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-parchment/50">Navegação</h4>
          <ul className="mt-4 grid gap-2 text-sm text-brand-parchment/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-champagne">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-parchment/50">Contato</h4>
          <ul className="mt-4 grid gap-2 text-sm text-brand-parchment/80">
            <li className="inline-flex items-center gap-2">
              <PhoneCall size={14} />
              {businessInfo.phoneDisplay}
            </li>
            <li className="inline-flex items-center gap-2">
              <AtSign size={14} />
              {businessInfo.email}
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin size={14} className="mt-0.5" />
              {businessInfo.address}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-10 border-t border-brand-champagne/15 pt-5 text-xs text-brand-parchment/45">
        © {new Date().getFullYear()} {businessInfo.name}. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
