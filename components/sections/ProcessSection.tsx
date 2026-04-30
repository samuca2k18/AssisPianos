import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section id="processo" className="relative py-20 sm:py-28">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fluxo de Atendimento"
            title="Um processo claro em 4 etapas"
            description="Facilitamos o atendimento do primeiro contato até a entrega com orientação técnica objetiva."
          />
        </Reveal>

        <div className="relative mt-12">
          {/* Connector Line (desktop) */}
          <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-brand-champagne/20 to-transparent xl:block" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <article className="group relative h-full rounded-3xl border border-brand-parchment/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-champagne/30 hover:bg-white/[0.06] hover:shadow-glow">
                  {/* Step Number */}
                  <div className="relative z-10 mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-champagne/40 bg-brand-champagne/10">
                    <span className="text-gold-gradient text-sm font-bold">{step.number}</span>
                  </div>

                  <h3 className="font-display text-xl text-brand-parchment">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-parchment/60">{step.description}</p>

                  {/* Decorative line */}
                  <div className="mt-5 h-px w-10 bg-gradient-to-r from-brand-champagne/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
