"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { businessInfo, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-champagne/20 bg-brand-ebony/88 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="group inline-flex items-center gap-3" aria-label="Ir para o início">
          <Image
            src="/images/assis-logo.jpg"
            alt="Logo Assis Pianos"
            width={42}
            height={42}
            className="rounded-full border border-brand-champagne/45 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="leading-tight">
            <strong className="block font-display text-xl text-brand-parchment">{businessInfo.name}</strong>
            <small className="text-xs uppercase tracking-[0.2em] text-brand-parchment/60">{businessInfo.city}</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-parchment/80 transition-colors hover:text-brand-champagne"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`https://wa.me/${businessInfo.phoneDigits}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-brand-champagne/50 bg-brand-champagne px-5 py-2 text-sm font-semibold text-brand-ebony transition-all hover:brightness-105 sm:inline-flex"
          >
            <MessageCircle size={15} />
            Orçamento
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-brand-champagne/30 p-2 text-brand-parchment lg:hidden"
            aria-expanded={isOpen}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-brand-champagne/20 bg-brand-charcoal lg:hidden">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-brand-parchment/85 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
