"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { businessInfo, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-champagne/15 bg-brand-ebony/95 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="group inline-flex items-center gap-3" aria-label="Ir para o início">
          <div className="relative">
            <Image
              src="/images/assis-logo.jpg"
              alt="Logo Assis Pianos"
              width={44}
              height={44}
              className="rounded-full border-2 border-brand-champagne/40 object-cover transition-all duration-300 group-hover:border-brand-champagne/70 group-hover:shadow-glow"
            />
            <div className="absolute -inset-0.5 rounded-full bg-brand-champagne/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <span className="leading-tight">
            <strong className="block font-display text-xl tracking-wide text-brand-parchment">
              {businessInfo.name}
            </strong>
            <small className="text-[10px] uppercase tracking-[0.25em] text-brand-champagne/70">
              {businessInfo.city}
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] font-medium text-brand-parchment/75 transition-colors duration-300 hover:text-brand-champagne"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer hidden items-center gap-2 rounded-full bg-brand-champagne px-5 py-2.5 text-sm font-semibold text-brand-ebony transition-all duration-300 hover:shadow-glow sm:inline-flex"
          >
            <MessageCircle size={15} />
            Orçamento
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-brand-champagne/25 bg-white/5 p-2.5 text-brand-parchment transition-colors hover:border-brand-champagne/50 hover:bg-white/10 lg:hidden"
            aria-expanded={isOpen}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-brand-champagne/15 bg-brand-ebony/98 backdrop-blur-xl lg:hidden">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-brand-parchment/80 transition-all hover:bg-brand-champagne/8 hover:text-brand-champagne"
              >
                {item.label}
              </Link>
            ))}
            <div className="gold-divider mt-2" />
            <Link
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-champagne px-5 py-2.5 text-sm font-semibold text-brand-ebony"
            >
              <MessageCircle size={15} />
              Orçamento no WhatsApp
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
