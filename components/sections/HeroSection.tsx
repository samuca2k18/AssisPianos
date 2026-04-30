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
      className="text-gold-gradient font-display text-5xl font-bold md:text-6xl lg:text-7xl"
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
        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ebony/80 via-brand-ebony/40 to-brand-ebony" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ebony/90 via-brand-ebony/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,9,8,0.6)_100%)]" />
      </div>

      {/* Ambient Glow — floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-champagne/[0.04] blur-[120px] animate-float-slow" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-walnut/15 blur-[100px] animate-float-delayed" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-champagne/[0.03] blur-[80px]" />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-champagne/25 bg-brand-champagne/[0.06] px-5 py-2.5 backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-champagne animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-champagne">
                Tradição familiar desde 1984
              </span>
              <span className="h-3 w-px bg-brand-champagne/30" />
              <span className="text-[11px] font-medium tracking-wide text-brand-parchment/50">
                Fortaleza — CE
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-brand-parchment sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              Desde 1984 trazendo{" "}
              <span className="text-gold-gradient">tradição, música</span>
              <br className="hidden sm:block" />
              <span className="text-gold-gradient"> e elegância</span>{" "}
              para sua casa.
            </h1>
          </Reveal>

          {/* Decorative line */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-brand-champagne/60 to-transparent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-champagne/50">
                Há mais de quatro décadas cuidando de pianos com excelência
              </span>
            </div>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-[1.8] text-brand-parchment/55 sm:text-lg md:text-xl">
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
                className="btn-shimmer group inline-flex items-center gap-2.5 rounded-full bg-brand-champagne px-8 py-4 text-sm font-semibold text-brand-ebony shadow-[0_8px_30px_rgba(200,169,110,0.3)] transition-all duration-400 hover:shadow-[0_16px_50px_rgba(200,169,110,0.4)] hover:brightness-110"
              >
                <MessageCircle size={17} className="transition-transform duration-300 group-hover:scale-110" />
                Falar no WhatsApp
              </Link>
              <Link
                href={`tel:+${businessInfo.phoneDigits}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-brand-parchment/20 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-brand-parchment backdrop-blur-sm transition-all duration-400 hover:border-brand-champagne/40 hover:bg-white/[0.08] hover:text-brand-champagne"
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
                  className="group rounded-2xl border border-brand-parchment/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-brand-champagne/20 hover:bg-white/[0.06] hover:shadow-glow"
                >
                  <div className="mb-3 h-px w-8 bg-gradient-to-r from-brand-champagne/50 to-transparent transition-all duration-500 group-hover:w-14" />
                  <h3 className="text-sm font-semibold tracking-wide text-brand-champagne">{item.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-brand-parchment/50">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats Bar */}
        <Reveal delay={0.5}>
          <div className="mt-20 rounded-3xl border border-brand-champagne/12 bg-black/25 p-8 backdrop-blur-xl sm:p-10 md:mt-24">
            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-sm font-medium tracking-wide text-brand-parchment/45">{stat.label}</p>
                  {i < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-champagne/15 to-transparent sm:block" />
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
          <Link href="#servicos" className="flex flex-col items-center gap-3 text-brand-parchment/25 transition-colors duration-300 hover:text-brand-champagne/50">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Explorar</span>
            <ChevronDown size={16} className="animate-scroll-hint" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
