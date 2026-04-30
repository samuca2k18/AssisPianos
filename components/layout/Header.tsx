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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-champagne/20 bg-white/90 shadow-[0_4px_30px_rgba(62,39,35,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="group inline-flex items-center gap-3" aria-label="Ir para o início">
          <div className="relative">
            <Image
              src="/images/assis-logo.jpg"
              alt="Logo Assis Pianos"
              width={48}
              height={48}
              className="rounded-full border-2 border-brand-champagne/40 object-cover transition-all duration-300 group-hover:border-brand-champagne group-hover:shadow-[0_0_15px_rgba(200,169,110,0.3)]"
            />
          </div>
          <span className="leading-tight">
            <strong className={`block font-display text-xl tracking-wide transition-colors duration-500 ${scrolled ? 'text-brand-dark' : 'text-brand-parchment'}`}>
              {businessInfo.name}
            </strong>
            <small className={`text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${scrolled ? 'text-brand-wood/70' : 'text-brand-parchment/70'}`}>
              {businessInfo.city}
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-[13px] font-medium transition-colors duration-500 hover:text-brand-champagne ${scrolled ? 'text-brand-wood/80' : 'text-brand-parchment/80'}`}
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
            className="btn-shimmer hidden items-center gap-2 rounded-full bg-brand-champagne px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-premium hover:brightness-105 sm:inline-flex"
          >
            <MessageCircle size={16} />
            Orçamento
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`inline-flex rounded-full border p-2.5 transition-colors lg:hidden ${scrolled ? 'border-brand-champagne/30 text-brand-wood hover:bg-brand-light' : 'border-white/20 text-white hover:bg-white/10'}`}
            aria-expanded={isOpen}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-brand-champagne/20 bg-white/95 backdrop-blur-xl lg:hidden">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-brand-wood/80 transition-all hover:bg-brand-light hover:text-brand-champagne"
              >
                {item.label}
              </Link>
            ))}
            <div className="gold-divider mt-2" />
            <Link
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-champagne px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              <MessageCircle size={16} />
              Orçamento no WhatsApp
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
