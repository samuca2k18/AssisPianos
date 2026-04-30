import { Clock3 } from "lucide-react";
import { businessInfo } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessHoursSection() {
  return (
    <section id="horario" className="pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <article className="rounded-[2rem] border border-brand-champagne/30 bg-gradient-to-r from-brand-charcoal to-brand-ebony p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-champagne/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
                  <Clock3 size={13} />
                  Horário de Atendimento
                </p>
                <h3 className="mt-3 font-display text-3xl text-brand-parchment">Agenda da Assis Pianos</h3>
              </div>
              <div className="grid gap-2 text-right text-sm text-brand-parchment/80 sm:text-base">
                <p>{businessInfo.hoursWeek}</p>
                <p>{businessInfo.hoursSaturday}</p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
