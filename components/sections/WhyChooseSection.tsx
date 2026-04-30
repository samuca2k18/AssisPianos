import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { reasons, businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseSection() {
  return (
    <section id="diferenciais" className="relative py-28 sm:py-36 bg-brand-light/40">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment bg-white p-9 md:p-12 shadow-sm">
            <SectionHeading
              eyebrow="Por Que Escolher a Assis Pianos"
              title="42 anos de atendimento técnico e transparente"
              description="Cada serviço é conduzido com o método profissional que cultivamos desde 1984 — segurança ao instrumento e tranquilidade ao cliente."
            />

            <ul className="mt-12 grid gap-5">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="group flex items-start gap-4 rounded-2xl border border-brand-parchment/50 bg-brand-light/30 p-6 transition-all duration-400 hover:border-brand-champagne/40 hover:bg-white hover:shadow-soft"
                >
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-brand-champagne/80 transition-colors duration-300 group-hover:text-brand-champagne"
                  />
                  <span className="text-[15px] leading-[1.8] text-brand-wood/90">{reason}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="flex h-full flex-col justify-between rounded-[2rem] border border-brand-champagne/30 bg-gradient-to-br from-brand-dark via-brand-wood to-[#2D1B16] p-9 md:p-12 shadow-premium">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-champagne">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
                Tradição familiar
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight text-white">
                Seu piano tratado com a seriedade de quem faz isso há décadas
              </h3>
              <p className="mt-6 text-[15px] leading-[1.8] text-white/80">
                Do primeiro contato à entrega final, trabalhamos com foco na integridade do instrumento e em decisões
                técnicas baseadas em mais de 42 anos de experiência.
              </p>
            </div>

            <div className="mt-10">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="text-[15px] leading-relaxed text-white/80">
                  Fale com nossa equipe e receba orientação personalizada para venda, afinação, restauração, conserto e
                  transporte.
                </p>
                <Link
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer mt-5 inline-flex rounded-full bg-brand-champagne px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-premium hover:brightness-105"
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
