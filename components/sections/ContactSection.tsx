import Link from "next/link";
import { AtSign, Clock3, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const mapQuery = encodeURIComponent(businessInfo.address);

  return (
    <section id="contato" className="relative py-28 sm:py-36">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <article className="grid gap-8 rounded-[2rem] border border-brand-parchment/[0.08] bg-white/[0.02] p-8 md:grid-cols-[1.06fr_0.94fr] md:p-12">
            {/* Left — Info */}
            <div>
              <SectionHeading
                eyebrow="Contato Rápido"
                title="Fale com a equipe Assis Pianos"
                description="Atendimento personalizado com mais de 42 anos de experiência para orçamento e orientação sobre seu piano."
              />

              <div className="mt-10 grid gap-5 text-sm">
                <Link
                  href={`tel:+${businessInfo.phoneDigits}`}
                  className="group inline-flex items-center gap-4 text-brand-parchment/70 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-champagne/20 bg-brand-champagne/[0.06] text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/35 group-hover:bg-brand-champagne/[0.12]">
                    <PhoneCall size={16} />
                  </span>
                  {businessInfo.phoneDisplay}
                </Link>
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-brand-parchment/70 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-champagne/20 bg-brand-champagne/[0.06] text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/35 group-hover:bg-brand-champagne/[0.12]">
                    <MessageCircle size={16} />
                  </span>
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${businessInfo.email}`}
                  className="group inline-flex items-center gap-4 text-brand-parchment/70 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-champagne/20 bg-brand-champagne/[0.06] text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/35 group-hover:bg-brand-champagne/[0.12]">
                    <AtSign size={16} />
                  </span>
                  {businessInfo.email}
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-brand-parchment/70 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-champagne/20 bg-brand-champagne/[0.06] text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/35 group-hover:bg-brand-champagne/[0.12]">
                    <AtSign size={16} />
                  </span>
                  {businessInfo.instagramHandle}
                </Link>
                <div className="inline-flex items-start gap-4 text-brand-parchment/50">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-champagne/20 bg-brand-champagne/[0.06] text-brand-champagne">
                    <MapPin size={16} />
                  </span>
                  <span className="pt-2">{businessInfo.address}</span>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-brand-parchment/[0.08]">
                <iframe
                  title="Localização Assis Pianos"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[220px] w-full grayscale-[40%] contrast-[1.1]"
                />
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col justify-between rounded-3xl border border-brand-champagne/20 bg-gradient-to-br from-brand-walnut/70 via-brand-charcoal to-brand-ebony p-8 md:p-10">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-champagne">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                  Atendimento premium
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-brand-parchment">
                  Seu piano em boas mãos desde 1984
                </h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-brand-parchment/55">
                  Conte com o atendimento técnico de uma equipe com mais de quatro décadas de experiência
                  para manter o valor, a estética e a sonoridade do seu instrumento.
                </p>

                {/* Business Hours */}
                <div className="mt-8 rounded-xl border border-brand-parchment/10 bg-black/20 p-5">
                  <div className="flex items-center gap-2 text-brand-champagne">
                    <Clock3 size={14} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">Horário de Atendimento</span>
                  </div>
                  <p className="mt-3 text-sm text-brand-parchment/60">
                    {businessInfo.hoursWeek}
                  </p>
                  <p className="mt-1 text-sm text-brand-parchment/60">
                    {businessInfo.hoursSaturday}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-3">
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex justify-center rounded-full bg-brand-champagne px-6 py-3.5 text-sm font-semibold text-brand-ebony transition-all duration-300 hover:shadow-glow"
                >
                  Chamar no WhatsApp
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-brand-parchment/20 px-6 py-3.5 text-sm font-semibold text-brand-parchment transition-all duration-300 hover:border-brand-champagne/40 hover:text-brand-champagne"
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
