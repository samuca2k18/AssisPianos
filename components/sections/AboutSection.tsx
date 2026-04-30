import { aboutTopics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      {/* Decorative top divider */}
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment/[0.08] bg-white/[0.02] p-9 md:p-12">
            <SectionHeading
              eyebrow="Sobre a Assis Pianos"
              title="Tradição artesanal desde 1984"
              description="Há mais de quatro décadas, unimos paixão e técnica no cuidado do piano — com execução clara, segura e orientada ao melhor resultado."
            />

            <ul className="mt-12 grid gap-5">
              {aboutTopics.map((topic, index) => (
                <li
                  key={topic}
                  className="group flex items-start gap-5 rounded-2xl border border-brand-parchment/[0.08] bg-black/15 px-6 py-5 transition-all duration-400 hover:border-brand-champagne/20 hover:bg-black/25"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-champagne/25 bg-brand-champagne/[0.08] text-[11px] font-bold text-brand-champagne transition-all duration-300 group-hover:bg-brand-champagne/15">
                    {index + 1}
                  </span>
                  <span className="text-[15px] leading-[1.8] text-brand-parchment/60">{topic}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="h-full rounded-[2rem] border border-brand-champagne/20 bg-gradient-to-br from-brand-walnut/70 via-brand-charcoal to-brand-ebony p-9 md:p-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-champagne">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
              Desde 1984
            </p>

            <h3 className="mt-6 font-display text-3xl leading-tight text-brand-parchment md:text-4xl">
              Mais de quatro décadas de presença e confiança
            </h3>

            <p className="mt-6 text-[15px] leading-[1.8] text-brand-parchment/55">
              Fundada em 1984, a Assis Pianos é referência em Fortaleza no cuidado profissional de pianos.
              Cada serviço carrega o conhecimento acumulado em mais de 42 anos de dedicação ao instrumento.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-2xl border border-brand-parchment/10 bg-black/20 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-champagne/15">
                <p className="font-display text-lg text-brand-champagne">Pianos de cauda, meia-cauda e verticais</p>
                <p className="mt-1.5 text-sm text-brand-parchment/50">Atendemos todos os modelos com o mesmo padrão de excelência</p>
              </div>
              <div className="rounded-2xl border border-brand-parchment/10 bg-black/20 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-champagne/15">
                <p className="font-display text-lg text-brand-champagne">Atendimento residencial e institucional</p>
                <p className="mt-1.5 text-sm text-brand-parchment/50">Casas, igrejas, escolas, conservatórios e espaços culturais</p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
