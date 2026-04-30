"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, PhoneCall, ChevronDown } from "lucide-react";
import { businessInfo, heroHighlights, stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import { motion, animate } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayVal, setDisplayVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      className="text-brand-dark font-display text-5xl font-bold md:text-6xl lg:text-7xl"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background Image — full bleed */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-piano-2.jpg"
          alt="Piano de cauda premium em ambiente elegante"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Multi-layer cinematic overlay blending into light theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(30,26,24,0.4)_100%)]" />
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-champagne/[0.08] blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-white/40 blur-[100px]" />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-champagne/30 bg-white/10 px-5 py-2.5 backdrop-blur-md shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-champagne animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-champagne">
                Tradição familiar desde 1984
              </span>
              <span className="h-3 w-px bg-brand-champagne/40" />
              <span className="text-[11px] font-medium tracking-wide text-brand-parchment/80">
                Fortaleza — CE
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              Desde 1984 trazendo{" "}
              <span className="text-brand-champagne">tradição, música</span>
              <br className="hidden sm:block" />
              <span className="text-brand-champagne"> e elegância</span>{" "}
              para sua casa.
            </h1>
          </Reveal>

          {/* Decorative line */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-brand-champagne to-transparent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-champagne/80">
                Há mais de quatro décadas cuidando de pianos com excelência
              </span>
            </div>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg md:text-xl">
              Venda, restauração, afinação e transporte com atendimento artesanal.
              Seu instrumento tratado com o cuidado e a excelência que merece.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer group inline-flex items-center gap-2.5 rounded-full bg-brand-champagne px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-400 hover:shadow-premium hover:brightness-105"
              >
                <MessageCircle size={17} className="transition-transform duration-300 group-hover:scale-110" />
                Falar no WhatsApp
              </Link>
              <Link
                href={`tel:+${businessInfo.phoneDigits}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm shadow-sm transition-all duration-400 hover:bg-white/20 hover:border-white/50"
              >
                <PhoneCall size={17} className="transition-transform duration-300 group-hover:scale-110" />
                Ligar Agora
              </Link>
            </div>
          </Reveal>

          {/* Highlight Cards */}
          <Reveal delay={0.4}>
            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-sm transition-all duration-500 hover:border-brand-champagne/30 hover:bg-white/15"
                >
                  <div className="mb-3 h-px w-8 bg-gradient-to-r from-brand-champagne to-transparent transition-all duration-500 group-hover:w-14" />
                  <h3 className="text-sm font-semibold tracking-wide text-white">{item.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats Bar - Adapting to the light background at the bottom */}
        <Reveal delay={0.5}>
          <div className="mt-20 rounded-3xl border border-brand-champagne/20 bg-white/80 p-8 backdrop-blur-xl shadow-premium sm:p-10 md:mt-24">
            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-[15px] font-semibold tracking-wide text-brand-wood/80">{stat.label}</p>
                  {i < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-champagne/30 to-transparent sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Link href="#servicos" className="flex flex-col items-center gap-3 text-brand-wood/40 transition-colors duration-300 hover:text-brand-champagne">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Explorar</span>
            <ChevronDown size={16} className="animate-scroll-hint" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
