import { aboutTopics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      {/* Decorative top divider */}
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment/10 bg-white/[0.03] p-8 md:p-10">
            <SectionHeading
              eyebrow="Sobre a Assis Pianos"
              title="Trabalho artesanal com padrão profissional"
              description="Unimos tradição no cuidado do piano com uma execução técnica clara, segura e orientada ao melhor resultado."
            />

            <ul className="mt-10 grid gap-4">
              {aboutTopics.map((topic, index) => (
                <li
                  key={topic}
                  className="flex items-start gap-4 rounded-2xl border border-brand-parchment/10 bg-black/20 px-5 py-4 transition-all duration-300 hover:border-brand-champagne/20 hover:bg-black/30"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-champagne/30 bg-brand-champagne/10 text-[11px] font-bold text-brand-champagne">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-parchment/65">{topic}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="h-full rounded-[2rem] border border-brand-champagne/25 bg-gradient-to-br from-brand-walnut/80 via-brand-charcoal to-brand-ebony p-8 md:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-champagne">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
              O que nos diferencia
            </p>
            <h3 className="mt-4 font-display text-3xl text-brand-parchment md:text-4xl">
              Presença, consistência e confiança
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-brand-parchment/60">
              Com mais de uma década de atuação, cada serviço é executado com o mesmo padrão de qualidade e atenção ao
              detalhe que nos tornou referência em Fortaleza.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-brand-parchment/12 bg-black/25 px-5 py-5 backdrop-blur-sm">
                <p className="font-display text-lg text-brand-champagne">Pianos de cauda, meia-cauda e verticais</p>
                <p className="mt-1 text-sm text-brand-parchment/55">Atendemos todos os modelos com mesmo padrão</p>
              </div>
              <div className="rounded-2xl border border-brand-parchment/12 bg-black/25 px-5 py-5 backdrop-blur-sm">
                <p className="font-display text-lg text-brand-champagne">Atendimento residencial e institucional</p>
                <p className="mt-1 text-sm text-brand-parchment/55">Casas, igrejas, escolas e espaços culturais</p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
