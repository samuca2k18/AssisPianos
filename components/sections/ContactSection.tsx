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
          <article className="grid gap-8 rounded-[2rem] border border-brand-parchment bg-white p-8 shadow-sm md:grid-cols-[1.06fr_0.94fr] md:p-12">
            {/* Left — Info */}
            <div>
              <SectionHeading
                eyebrow="Contato Rápido"
                title="Fale com a equipe Assis Pianos"
                description="Atendimento personalizado com mais de 42 anos de experiência para orçamento e orientação sobre seu piano."
              />

              <div className="mt-10 grid gap-5 text-[15px]">
                <Link
                  href={`tel:+${businessInfo.phoneDigits}`}
                  className="group inline-flex items-center gap-4 text-brand-wood/80 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-champagne/30 bg-brand-light text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/50 group-hover:bg-brand-champagne/10">
                    <PhoneCall size={18} />
                  </span>
                  {businessInfo.phoneDisplay}
                </Link>
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-brand-wood/80 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-champagne/30 bg-brand-light text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/50 group-hover:bg-brand-champagne/10">
                    <MessageCircle size={18} />
                  </span>
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${businessInfo.email}`}
                  className="group inline-flex items-center gap-4 text-brand-wood/80 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-champagne/30 bg-brand-light text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/50 group-hover:bg-brand-champagne/10">
                    <AtSign size={18} />
                  </span>
                  {businessInfo.email}
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-brand-wood/80 transition-colors duration-300 hover:text-brand-champagne"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-champagne/30 bg-brand-light text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/50 group-hover:bg-brand-champagne/10">
                    <AtSign size={18} />
                  </span>
                  {businessInfo.instagramHandle}
                </Link>
                <div className="inline-flex items-start gap-4 text-brand-wood/60">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-champagne/30 bg-brand-light text-brand-champagne">
                    <MapPin size={18} />
                  </span>
                  <span className="pt-3">{businessInfo.address}</span>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-brand-parchment shadow-sm">
                <iframe
                  title="Localização Assis Pianos"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[240px] w-full"
                />
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col justify-between rounded-3xl border border-brand-champagne/30 bg-gradient-to-br from-brand-dark via-brand-wood to-[#2D1B16] p-9 md:p-12 shadow-premium">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-champagne">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                  Atendimento premium
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-white">
                  Seu piano em boas mãos desde 1984
                </h3>
                <p className="mt-6 text-[15px] leading-[1.8] text-white/80">
                  Conte com o atendimento técnico de uma equipe com mais de quatro décadas de experiência
                  para manter o valor, a estética e a sonoridade do seu instrumento.
                </p>

                {/* Business Hours */}
                <div className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-brand-champagne">
                    <Clock3 size={16} />
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em]">Horário de Atendimento</span>
                  </div>
                  <p className="mt-4 text-[15px] text-white/80">
                    {businessInfo.hoursWeek}
                  </p>
                  <p className="mt-2 text-[15px] text-white/80">
                    {businessInfo.hoursSaturday}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4">
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex justify-center rounded-full bg-brand-champagne px-6 py-4 text-[15px] font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-premium hover:brightness-105"
                >
                  Chamar no WhatsApp
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-white/20 px-6 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-brand-champagne/40 hover:bg-white/5 hover:text-brand-champagne"
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
