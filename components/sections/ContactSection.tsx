import Link from "next/link";
import { AtSign, Clock3, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const mapQuery = encodeURIComponent(businessInfo.address);

  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <article className="grid gap-6 rounded-[2rem] border border-brand-parchment/10 bg-white/[0.03] p-7 md:grid-cols-[1.06fr_0.94fr] md:p-10">
            {/* Left — Info */}
            <div>
              <SectionHeading
                eyebrow="Contato Rápido"
                title="Fale com a equipe Assis Pianos"
                description="Atendimento personalizado para orçamento e dúvidas sobre venda, restauração, afinação e transporte."
              />

              <div className="mt-8 grid gap-4 text-sm">
                <Link
                  href={`tel:+${businessInfo.phoneDigits}`}
                  className="group inline-flex items-center gap-3 text-brand-parchment/75 transition-colors hover:text-brand-champagne"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-champagne/25 bg-brand-champagne/8 text-brand-champagne transition-all group-hover:bg-brand-champagne/15">
                    <PhoneCall size={15} />
                  </span>
                  {businessInfo.phoneDisplay}
                </Link>
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-brand-parchment/75 transition-colors hover:text-brand-champagne"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-champagne/25 bg-brand-champagne/8 text-brand-champagne transition-all group-hover:bg-brand-champagne/15">
                    <MessageCircle size={15} />
                  </span>
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${businessInfo.email}`}
                  className="group inline-flex items-center gap-3 text-brand-parchment/75 transition-colors hover:text-brand-champagne"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-champagne/25 bg-brand-champagne/8 text-brand-champagne transition-all group-hover:bg-brand-champagne/15">
                    <AtSign size={15} />
                  </span>
                  {businessInfo.email}
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-brand-parchment/75 transition-colors hover:text-brand-champagne"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-champagne/25 bg-brand-champagne/8 text-brand-champagne transition-all group-hover:bg-brand-champagne/15">
                    <AtSign size={15} />
                  </span>
                  {businessInfo.instagramHandle}
                </Link>
                <div className="group inline-flex items-start gap-3 text-brand-parchment/55">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-champagne/25 bg-brand-champagne/8 text-brand-champagne">
                    <MapPin size={15} />
                  </span>
                  {businessInfo.address}
                </div>
              </div>

              {/* Map */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-brand-parchment/10">
                <iframe
                  title="Localização Assis Pianos"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[200px] w-full grayscale-[30%] contrast-[1.1]"
                />
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col justify-between rounded-3xl border border-brand-champagne/25 bg-gradient-to-br from-brand-walnut/80 via-brand-charcoal to-brand-ebony p-7 md:p-9">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-champagne">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                  Atendimento premium
                </p>
                <h3 className="mt-4 font-display text-3xl text-brand-parchment">Seu piano em boas mãos</h3>
                <p className="mt-5 text-sm leading-relaxed text-brand-parchment/60">
                  Conte com um atendimento técnico cuidadoso para manter o valor, a estética e a sonoridade do seu
                  instrumento.
                </p>

                {/* Business Hours */}
                <div className="mt-6 rounded-xl border border-brand-parchment/12 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-brand-champagne">
                    <Clock3 size={14} />
                    <span className="text-xs font-semibold uppercase tracking-[0.12em]">Horário</span>
                  </div>
                  <p className="mt-2 text-sm text-brand-parchment/65">
                    {businessInfo.hoursWeek} &nbsp;·&nbsp; {businessInfo.hoursSaturday}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex justify-center rounded-full bg-brand-champagne px-5 py-3 text-sm font-semibold text-brand-ebony transition-all duration-300 hover:shadow-glow"
                >
                  Chamar no WhatsApp
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-brand-parchment/25 px-5 py-3 text-sm font-semibold text-brand-parchment transition-all duration-300 hover:border-brand-champagne/50 hover:text-brand-champagne"
                >
                  Ver Instagram
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
