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
    <Reveal delay={index * 0.05}>
      <div
        className={`rounded-2xl border transition-all duration-400 ${
          isOpen
            ? "border-brand-champagne/30 bg-white/[0.06] shadow-glow"
            : "border-brand-parchment/10 bg-white/[0.03] hover:border-brand-parchment/20"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-sm font-semibold text-brand-parchment">{question}</span>
          <ChevronDown
            size={17}
            className={`shrink-0 text-brand-champagne/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-brand-parchment/10 px-6 py-5 text-sm leading-relaxed text-brand-parchment/60">
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
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas Frequentes"
            title="Dúvidas comuns sobre o atendimento"
            description="Respostas rápidas para facilitar sua decisão e o agendamento."
          />
        </Reveal>

        <div className="mt-12 grid gap-3">
          {faqItems.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
