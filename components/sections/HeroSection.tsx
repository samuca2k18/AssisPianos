import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { businessInfo, heroHighlights } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-champagne/12 blur-3xl" />
        <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-brand-walnut/30 blur-3xl" />
      </div>

      <Container className="relative z-10 grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-brand-champagne/40 bg-brand-champagne/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-champagne">
            Serviços Premium para Pianos em Fortaleza
          </p>
          <h1 className="max-w-[14ch] font-display text-4xl leading-[1.04] text-brand-parchment sm:text-5xl md:text-6xl">
            Tradição e excelência no cuidado do seu piano.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-parchment/72 sm:text-lg">
            Venda, restauração, conserto, afinação e transporte especializado para quem busca um atendimento de alto
            padrão com confiança técnica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/${businessInfo.phoneDigits}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-champagne px-6 py-3 text-sm font-semibold text-brand-ebony transition hover:brightness-105"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </Link>
            <Link
              href={`tel:+${businessInfo.phoneDigits}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-parchment/30 px-6 py-3 text-sm font-semibold text-brand-parchment transition hover:border-brand-champagne hover:text-brand-champagne"
            >
              <PhoneCall size={16} />
              Ligar Agora
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.05 * index}
                className="rounded-2xl border border-brand-parchment/14 bg-white/5 p-4 shadow-soft backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold text-brand-parchment">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-parchment/70">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="group relative overflow-hidden rounded-[2rem] border border-brand-parchment/15 bg-brand-charcoal shadow-premium">
            <Image
              src="/images/hero-piano-2.jpg"
              alt="Pianos premium em ambiente elegante"
              width={1200}
              height={1000}
              priority
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-brand-parchment">Atendimento Local</p>
                <p className="mt-1 text-xs text-brand-parchment/75">Fortaleza e Região Metropolitana.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-brand-parchment">Apoio Completo</p>
                <p className="mt-1 text-xs text-brand-parchment/75">Da escolha do piano até o pós-serviço.</p>
              </div>
            </div>

            <div className="absolute left-4 top-4 rounded-full border border-brand-champagne/40 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-champagne">
              Assis Pianos
            </div>
          </article>
        </Reveal>
      </Container>

      <Container className="mt-8">
        <Link
          href="#servicos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-champagne transition hover:text-brand-parchment"
        >
          Conheça os serviços
          <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
