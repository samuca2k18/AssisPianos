import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section id="processo" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fluxo de Atendimento"
            title="Um processo claro em 4 etapas"
            description="Facilitamos o atendimento do primeiro contato até a entrega com orientação técnica objetiva."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-brand-parchment/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-champagne/45">
                <p className="inline-flex rounded-full border border-brand-champagne/50 bg-brand-champagne/10 px-3 py-1 text-xs font-semibold text-brand-champagne">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-2xl text-brand-parchment">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-parchment/72">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
