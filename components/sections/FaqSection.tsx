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
            ? "border-brand-champagne/40 bg-white shadow-soft"
            : "border-brand-parchment bg-brand-light/30 hover:border-brand-champagne/30 hover:bg-white"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
        >
          <span className="text-[15px] font-semibold text-brand-dark">{question}</span>
          <ChevronDown
            size={17}
            strokeWidth={1.5}
            className={`shrink-0 text-brand-wood/50 transition-all duration-400 ${isOpen ? "rotate-180 text-brand-champagne" : ""}`}
          />
        </button>
        <div
          className={`grid transition-all duration-400 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-brand-parchment px-7 pb-6 pt-5 text-[15px] leading-[1.8] text-brand-wood/80">
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
    <section id="faq" className="relative py-28 sm:py-36 bg-brand-light/40">
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
