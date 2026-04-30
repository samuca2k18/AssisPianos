"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06}>
      <div
        className={`rounded-2xl border transition-all duration-500 ${
          isOpen
            ? "border-brand-champagne/25 bg-white/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.2),0_0_25px_rgba(200,169,110,0.05)]"
            : "border-brand-parchment/[0.08] bg-white/[0.02] hover:border-brand-parchment/15 hover:bg-white/[0.03]"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
        >
          <span className="text-[15px] font-semibold text-brand-parchment">{question}</span>
          <ChevronDown
            size={17}
            strokeWidth={1.5}
            className={`shrink-0 text-brand-champagne/50 transition-all duration-400 ${isOpen ? "rotate-180 text-brand-champagne" : ""}`}
          />
        </button>
        <div
          className={`grid transition-all duration-400 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-brand-parchment/[0.08] px-7 pb-6 pt-5 text-[15px] leading-[1.8] text-brand-parchment/55">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas Frequentes"
            title="Dúvidas comuns sobre o atendimento"
            description="Respostas rápidas para facilitar sua decisão e o agendamento."
          />
        </Reveal>

        <div className="mt-14 grid gap-4">
          {faqItems.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
