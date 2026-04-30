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
    <section id="servicos" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços Principais"
            title="Cuidado completo para o seu instrumento"
            description="Soluções técnicas artesanais para preservar estética, mecânica e qualidade sonora do piano."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.key];

            return (
              <Reveal key={service.key} delay={index * 0.08}>
                <article className="group h-full rounded-3xl border border-brand-parchment/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-champagne/30 hover:bg-white/[0.06] hover:shadow-glow">
                  <div className="mb-6 inline-flex rounded-2xl border border-brand-champagne/25 bg-brand-champagne/8 p-3 text-brand-champagne transition-all duration-300 group-hover:border-brand-champagne/40 group-hover:bg-brand-champagne/15 group-hover:shadow-[0_0_20px_rgba(200,169,110,0.15)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl text-brand-parchment">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-parchment/60">{service.description}</p>
                  <div className="mt-5 h-px w-12 bg-gradient-to-r from-brand-champagne/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
