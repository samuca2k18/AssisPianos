import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas Frequentes"
            title="Dúvidas comuns sobre o atendimento"
            description="Respostas rápidas para facilitar sua decisão e o agendamento."
          />
        </Reveal>

        <div className="mt-10 grid gap-3">
          {faqItems.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-2xl border border-brand-parchment/15 bg-white/5 p-0 open:border-brand-champagne/45">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-parchment">
                  {faq.question}
                  <ChevronDown className="transition group-open:rotate-180" size={17} />
                </summary>
                <div className="border-t border-brand-parchment/15 px-5 py-4 text-sm leading-relaxed text-brand-parchment/72">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
