"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, PhoneCall, ChevronDown } from "lucide-react";
import { businessInfo, heroHighlights, stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayVal, setDisplayVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      className="text-gold-gradient font-display text-5xl font-bold md:text-6xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (hasAnimated) return;
        setHasAnimated(true);
        const controls = animate(0, value, {
          duration: 2.5,
          ease: "easeOut",
          onUpdate: (v) => setDisplayVal(Math.round(v)),
        });
        return () => controls.stop();
      }}
    >
      {displayVal}
      {suffix}
    </motion.span>
  );
}

export function HeroSection() {
  const [, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-piano-2.jpg"
          alt="Piano de cauda premium em ambiente elegante"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ebony/70 via-brand-ebony/50 to-brand-ebony/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ebony/80 via-transparent to-brand-ebony/40" />
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-champagne/6 blur-[100px] animate-float-slow" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-brand-walnut/20 blur-[80px] animate-float-delayed" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-center pb-20 pt-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-champagne/30 bg-brand-champagne/8 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-champagne backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne animate-pulse" />
              Especialistas em Pianos desde 2010
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-brand-parchment sm:text-5xl md:text-7xl">
              Tradição e excelência no{" "}
              <span className="text-gold-gradient">cuidado do seu piano.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-parchment/65 sm:text-lg">
              Venda, restauração, afinação e transporte com atendimento artesanal em Fortaleza.
              Seu instrumento tratado com a excelência que merece.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-brand-champagne px-7 py-3.5 text-sm font-semibold text-brand-ebony shadow-[0_8px_30px_rgba(200,169,110,0.25)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,169,110,0.35)] hover:brightness-110"
              >
                <MessageCircle size={17} />
                Falar no WhatsApp
              </Link>
              <Link
                href={`tel:+${businessInfo.phoneDigits}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-brand-parchment/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-brand-parchment backdrop-blur-sm transition-all duration-300 hover:border-brand-champagne/50 hover:text-brand-champagne"
              >
                <PhoneCall size={17} />
                Ligar Agora
              </Link>
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={0.4}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-glow rounded-2xl border border-brand-parchment/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-400"
                >
                  <h3 className="text-sm font-semibold text-brand-champagne">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-parchment/55">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats Bar */}
        <Reveal delay={0.5}>
          <div className="mt-16 grid gap-6 rounded-2xl border border-brand-champagne/15 bg-black/30 p-6 backdrop-blur-md sm:grid-cols-3 sm:p-8 md:mt-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-medium text-brand-parchment/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link href="#servicos" className="flex flex-col items-center gap-2 text-brand-parchment/30 transition-colors hover:text-brand-champagne/50">
            <span className="text-[10px] uppercase tracking-[0.2em]">Explorar</span>
            <ChevronDown size={18} className="animate-scroll-hint" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
