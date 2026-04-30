import Link from "next/link";
import { AtSign, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const mapQuery = encodeURIComponent(businessInfo.address);

  return (
    <section id="contato" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <article className="grid gap-6 rounded-[2rem] border border-brand-parchment/15 bg-white/5 p-6 md:grid-cols-[1.06fr_0.94fr] md:p-10">
            <div>
              <SectionHeading
                eyebrow="Contato Rápido"
                title="Fale com a equipe Assis Pianos"
                description="Atendimento personalizado para orçamento e dúvidas sobre venda, restauração, afinação e transporte."
              />

              <div className="mt-7 grid gap-3 text-sm">
                <Link
                  href={`tel:+${businessInfo.phoneDigits}`}
                  className="inline-flex items-center gap-2 text-brand-parchment/90 transition hover:text-brand-champagne"
                >
                  <PhoneCall size={15} />
                  {businessInfo.phoneDisplay}
                </Link>
                <Link
                  href={`https://wa.me/${businessInfo.phoneDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand-parchment/90 transition hover:text-brand-champagne"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex items-center gap-2 text-brand-parchment/90 transition hover:text-brand-champagne"
                >
                  <AtSign size={15} />
                  {businessInfo.email}
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand-parchment/90 transition hover:text-brand-champagne"
                >
                  <AtSign size={15} />
                  {businessInfo.instagramHandle}
                </Link>
                <p className="inline-flex items-start gap-2 text-brand-parchment/75">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {businessInfo.address}
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-parchment/15">
                <iframe
                  title="Localização Assis Pianos"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[220px] w-full"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-brand-champagne/35 bg-gradient-to-br from-brand-walnut/90 via-brand-charcoal to-brand-ebony p-6 md:p-8">
              <p className="inline-flex rounded-full bg-brand-champagne/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
                Atendimento premium
              </p>
              <h3 className="mt-3 font-display text-3xl text-brand-parchment">Seu piano em boas mãos</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-parchment/74">
                Conte com um atendimento técnico cuidadoso para manter o valor, a estética e a sonoridade do seu
                instrumento.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href={`https://wa.me/${businessInfo.phoneDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-brand-champagne px-5 py-2.5 text-sm font-semibold text-brand-ebony transition hover:brightness-105"
                >
                  Chamar no WhatsApp
                </Link>
                <Link
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-brand-parchment/30 px-5 py-2.5 text-sm font-semibold text-brand-parchment transition hover:border-brand-champagne hover:text-brand-champagne"
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
