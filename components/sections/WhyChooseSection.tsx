import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { reasons, businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseSection() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment/10 bg-white/[0.03] p-8 md:p-10">
            <SectionHeading
              eyebrow="Por Que Escolher a Assis Pianos"
              title="Atendimento elegante, técnico e transparente"
              description="Cada serviço é conduzido com método profissional para garantir segurança ao instrumento e tranquilidade ao cliente."
            />

            <ul className="mt-10 grid gap-4">
              {reasons.map((reason, index) => (
                <li
                  key={reason}
                  className="group flex items-start gap-4 rounded-2xl border border-brand-parchment/10 bg-black/20 p-5 transition-all duration-300 hover:border-brand-champagne/20 hover:bg-black/30"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-champagne/70 transition-colors group-hover:text-brand-champagne"
                  />
                  <span className="text-sm leading-relaxed text-brand-parchment/65">{reason}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="flex h-full flex-col justify-between rounded-[2rem] border border-brand-champagne/25 bg-gradient-to-br from-brand-walnut/80 via-brand-charcoal to-brand-ebony p-8 md:p-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-champagne">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                Suporte especializado
              </p>
              <h3 className="mt-4 font-display text-3xl text-brand-parchment">
                Seu piano tratado com seriedade e cuidado artesanal
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-brand-parchment/60">
                Do primeiro contato à entrega final, trabalhamos com foco na integridade do instrumento e em decisões
                técnicas coerentes para cada caso.
              </p>
            </div>

            <div className="mt-8">
              <div className="rounded-2xl border border-brand-parchment/12 bg-black/25 p-5 backdrop-blur-sm">
                <p className="text-sm text-brand-parchment/65">
                  Fale com nossa equipe e receba orientação personalizada para venda, afinação, restauração, conserto e
                  transporte.
                </p>
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer mt-4 inline-flex rounded-full bg-brand-champagne px-5 py-2.5 text-sm font-semibold text-brand-ebony transition-all duration-300 hover:shadow-glow"
                >
                  Solicitar orçamento
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
