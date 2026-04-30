import { aboutTopics, stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20">
      <Container className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-brand-parchment/15 bg-white/5 p-7 md:p-9">
            <SectionHeading
              eyebrow="Sobre a Assis Pianos"
              title="Trabalho artesanal com padrão profissional"
              description="Unimos tradição no cuidado do piano com uma execução técnica clara, segura e orientada ao melhor resultado para o cliente."
            />

            <ul className="mt-8 grid gap-3">
              {aboutTopics.map((topic, index) => (
                <li
                  key={topic}
                  className="rounded-2xl border border-brand-parchment/15 bg-black/20 px-4 py-3 text-sm text-brand-parchment/78"
                >
                  {index + 1}. {topic}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="h-full rounded-[2rem] border border-brand-champagne/35 bg-gradient-to-br from-brand-walnut/95 via-brand-charcoal to-brand-ebony p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-champagne">Números da marca</p>
            <h3 className="mt-3 font-display text-3xl text-brand-parchment md:text-4xl">Presença e consistência</h3>
            <p className="mt-4 text-sm text-brand-parchment/72">
              Os números abaixo ajudam a transmitir experiência e confiança. Eles podem ser atualizados a qualquer
              momento conforme a evolução do negócio.
            </p>

            <div className="mt-8 grid gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-parchment/15 bg-black/25 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="font-display text-4xl text-brand-champagne">{stat.value}</p>
                  <p className="mt-1 text-sm text-brand-parchment/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
