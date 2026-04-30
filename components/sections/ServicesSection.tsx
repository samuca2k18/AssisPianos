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
    <section id="servicos" className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços Principais"
            title="Cuidado completo para o seu instrumento"
            description="Soluções técnicas artesanais cultivadas ao longo de mais de quatro décadas de dedicação aos pianos."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.key];

            return (
              <Reveal key={service.key} delay={index * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-parchment/[0.08] bg-white/[0.02] transition-all duration-600 hover:border-brand-champagne/25 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(200,169,110,0.06)]">
                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-champagne/0 to-transparent transition-all duration-600 group-hover:via-brand-champagne/30" />

                  <div className="p-8 sm:p-10">
                    {/* Icon */}
                    <div className="mb-7 inline-flex rounded-2xl border border-brand-champagne/20 bg-brand-champagne/[0.06] p-3.5 text-brand-champagne transition-all duration-500 group-hover:border-brand-champagne/35 group-hover:bg-brand-champagne/[0.12] group-hover:shadow-[0_0_25px_rgba(200,169,110,0.12)]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl tracking-tight text-brand-parchment sm:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-brand-parchment/50">
                      {service.description}
                    </p>

                    {/* Bottom decorative line */}
                    <div className="mt-7 h-px w-10 bg-gradient-to-r from-brand-champagne/40 to-transparent opacity-0 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
