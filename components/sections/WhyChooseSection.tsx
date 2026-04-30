import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { reasons, businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseSection() {
  return (
    <section id="diferenciais" className="bg-white/[0.02] py-16 sm:py-20">
      <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment/15 bg-white/5 p-7 md:p-9">
            <SectionHeading
              eyebrow="Por Que Escolher a Assis Pianos"
              title="Atendimento elegante, técnico e transparente"
              description="Cada serviço é conduzido com método profissional para garantir segurança ao instrumento e tranquilidade ao cliente."
            />

            <ul className="mt-8 grid gap-4">
              {reasons.map((reason, index) => (
                <li key={reason} className="flex items-start gap-3 rounded-2xl border border-brand-parchment/15 bg-black/20 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-brand-champagne" />
                  <span className="text-sm leading-relaxed text-brand-parchment/78">
                    {index + 1}. {reason}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="h-full rounded-[2rem] border border-brand-champagne/30 bg-gradient-to-br from-brand-walnut/95 to-brand-ebony p-7 md:p-9">
            <p className="inline-flex rounded-full bg-brand-champagne/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
              Suporte próximo
            </p>
            <h3 className="mt-3 font-display text-3xl text-brand-parchment">Seu piano tratado com seriedade</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-parchment/74">
              Trabalhamos com foco na integridade do instrumento e em decisões técnicas coerentes para cada caso, do
              primeiro contato à entrega final.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-parchment/20 bg-black/20 p-4">
              <p className="text-sm text-brand-parchment/78">
                Fale com nossa equipe e receba orientação personalizada para venda, afinação, restauração, conserto e
                transporte.
              </p>
              <Link
                href={`https://wa.me/${businessInfo.phoneDigits}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-brand-champagne/50 px-4 py-2 text-sm font-semibold text-brand-champagne transition hover:bg-brand-champagne hover:text-brand-ebony"
              >
                Solicitar orçamento
              </Link>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
