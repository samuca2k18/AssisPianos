import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section id="processo" className="relative py-28 sm:py-36">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fluxo de Atendimento"
            title="Um processo claro em 4 etapas"
            description="Facilitamos o atendimento do primeiro contato até a entrega — com a objetividade e segurança de quem faz isso desde 1984."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connector Line (desktop) */}
          <div className="absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-brand-champagne/40 to-transparent xl:block" />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-parchment bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-champagne/40 hover:shadow-premium">
                  {/* Top accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-champagne/0 to-transparent transition-all duration-500 group-hover:via-brand-champagne/60" />

                  {/* Step Number */}
                  <div className="relative z-10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-champagne/30 bg-brand-light transition-all duration-400 group-hover:border-brand-champagne/50 group-hover:bg-brand-champagne/10">
                    <span className="text-brand-dark text-sm font-bold">{step.number}</span>
                  </div>

                  <h3 className="font-display text-xl text-brand-dark">{step.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-brand-wood/80">{step.description}</p>

                  {/* Reveal line */}
                  <div className="mt-6 h-px w-8 bg-gradient-to-r from-brand-champagne to-transparent opacity-0 transition-all duration-500 group-hover:w-14 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
