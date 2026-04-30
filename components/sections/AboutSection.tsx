import { aboutTopics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36 bg-brand-light/40">
      {/* Decorative top divider */}
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment bg-white p-9 md:p-12 shadow-sm">
            <SectionHeading
              eyebrow="Sobre a Assis Pianos"
              title="Tradição artesanal desde 1984"
              description="Há mais de quatro décadas, unimos paixão e técnica no cuidado do piano — com execução clara, segura e orientada ao melhor resultado."
            />

            <ul className="mt-12 grid gap-5">
              {aboutTopics.map((topic, index) => (
                <li
                  key={topic}
                  className="group flex items-start gap-5 rounded-2xl border border-brand-parchment/50 bg-brand-light/50 px-6 py-5 transition-all duration-400 hover:border-brand-champagne/40 hover:bg-white hover:shadow-soft"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-champagne/30 bg-white text-[12px] font-bold text-brand-champagne shadow-sm transition-all duration-300 group-hover:bg-brand-champagne/10">
                    {index + 1}
                  </span>
                  <span className="text-[15px] leading-[1.8] text-brand-wood/90">{topic}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="h-full rounded-[2rem] border border-brand-champagne/30 bg-gradient-to-br from-brand-dark via-brand-wood to-[#2D1B16] p-9 md:p-12 shadow-premium">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-champagne">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
              Desde 1984
            </p>

            <h3 className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl">
              Mais de quatro décadas de presença e confiança
            </h3>

            <p className="mt-6 text-[15px] leading-[1.8] text-white/80">
              Fundada em 1984, a Assis Pianos é referência em Fortaleza no cuidado profissional de pianos.
              Cada serviço carrega o conhecimento acumulado em mais de 42 anos de dedicação ao instrumento.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-champagne/30 hover:bg-black/30">
                <p className="font-display text-lg text-brand-champagne">Pianos de cauda, meia-cauda e verticais</p>
                <p className="mt-1.5 text-sm text-white/70">Atendemos todos os modelos com o mesmo padrão de excelência</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-champagne/30 hover:bg-black/30">
                <p className="font-display text-lg text-brand-champagne">Atendimento residencial e institucional</p>
                <p className="mt-1.5 text-sm text-white/70">Casas, igrejas, escolas, conservatórios e espaços culturais</p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
