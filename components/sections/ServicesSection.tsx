import type { LucideIcon } from "lucide-react";
import { Music2, Piano, Truck, Wrench } from "lucide-react";
import { services, type ServiceKey } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<ServiceKey, LucideIcon> = {
  sale: Piano,
  restore: Wrench,
  tuning: Music2,
  transport: Truck,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços Principais"
            title="Cuidado completo para o seu instrumento"
            description="Soluções técnicas para preservar estética, mecânica e qualidade sonora do piano."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.key];

            return (
              <Reveal key={service.key} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-brand-parchment/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-champagne/45 hover:bg-white/10">
                  <div className="mb-5 inline-flex rounded-xl border border-brand-champagne/40 bg-brand-champagne/10 p-2 text-brand-champagne">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-2xl text-brand-parchment">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-parchment/70">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
