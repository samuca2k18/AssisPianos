import { useState, useEffect } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {
  ArrowUp,
  AtSign,
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  PhoneCall,
  Piano,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import logoImage from "./assets/assis-logo.jpg";
import heroImage from "./assets/hero-piano-2.jpg";
import rentalImage from "./assets/Locacao.jpg";
import renovationVideo from "./assets/Reforma.mp4";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Apresentação", href: "#apresentacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    icon: Piano,
    title: "Venda de Pianos",
    description:
      "Consultoria para escolher o instrumento ideal para estudo, performance, igreja, escola ou residência.",
  },
  {
    icon: Wrench,
    title: "Restauração e Conserto",
    description:
      "Recuperação estética e mecânica com ajustes técnicos que preservam estrutura, toque e sonoridade.",
  },
  {
    icon: Music2,
    title: "Afinação Profissional",
    description:
      "Afinação técnica para estabilidade sonora, equilíbrio de registro e melhor resposta musical.",
  },
  {
    icon: Truck,
    title: "Transporte Especializado",
    description:
      "Transporte com manuseio seguro e planejamento para proteger o piano em cada etapa do deslocamento.",
  },
];

const highlights = [
  {
    title: "Atendimento em Fortaleza",
    description: "Foco na capital e Região Metropolitana com suporte direto da equipe.",
  },
  {
    title: "Cuidado técnico real",
    description: "Cada serviço é executado com método para preservar o instrumento.",
  },
  {
    title: "Contato rápido",
    description: "Orçamento facilitado por Instagram, WhatsApp ou ligação.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contato e briefing",
    text: "Você descreve a necessidade, envia fotos e recebe uma orientação inicial do serviço ideal.",
  },
  {
    number: "02",
    title: "Diagnóstico técnico",
    text: "A equipe valida o cenário do instrumento para definir escopo, prioridade e melhor abordagem.",
  },
  {
    number: "03",
    title: "Execução especializada",
    text: "Serviço executado com foco em segurança estrutural, precisão mecânica e resultado sonoro.",
  },
  {
    number: "04",
    title: "Entrega e orientação",
    text: "Finalização com recomendações práticas para conservação e manutenção preventiva do piano.",
  },
];

const faqItems = [
  {
    question: "Vocês atendem apenas em Fortaleza?",
    answer:
      "O foco principal é Fortaleza e Região Metropolitana. Para outros locais, a equipe avalia logística e deslocamento.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "O orçamento considera tipo de piano, estado atual e objetivo do serviço. Dependendo do caso, pode haver avaliação técnica.",
  },
  {
    question: "É possível agendar afinação periódica?",
    answer:
      "Sim. A manutenção periódica ajuda a preservar estabilidade sonora e a vida útil do instrumento.",
  },
];

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: 15, suffix: "+", label: "Anos de experiência" },
  { value: 500, suffix: "+", label: "Pianos atendidos" },
  { value: 100, suffix: "%", label: "Foco no cliente" },
];

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useState(null);
  const [displayVal, setDisplayVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useState(null);

  return (
    <motion.span
      className="text-4xl font-bold font-display text-white md:text-5xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (hasAnimated) return;
        setHasAnimated(true);
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (v) => setDisplayVal(Math.round(v)),
        });
        return () => controls.stop();
      }}
    >
      {displayVal}{suffix}
    </motion.span>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(120deg,#101d33,#162846)] backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1140px,92vw)] items-center justify-between py-4">
          <a href="#inicio" className="group inline-flex items-center gap-3">
            <img
              src={logoImage}
              alt="Logo Assis Pianos"
              className="h-10 w-10 rounded-full border border-white/25 object-cover shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110"
            />
            <span className="flex flex-col">
              <strong className="font-display text-lg tracking-tight text-white">Assis Pianos</strong>
              <small className="text-xs uppercase tracking-[0.18em] text-white/70">
                Fortaleza - CE
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-slate-100 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-shimmer rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-white/20"
            >
              Orçamento
            </a>
          </nav>

          <button
            type="button"
            aria-label="Alternar menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/20 bg-white/5 p-2 text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[color:rgb(10_14_22/.94)] md:hidden"
            >
              <div className="mx-auto flex w-[min(1140px,92vw)] flex-col gap-1 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob-float absolute left-[-140px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#5f896f_0%,rgba(111,159,131,0)_70%)] blur-2xl" />
          <div className="animate-blob-float-delayed absolute right-[-180px] top-[120px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,#9f6f35_0%,rgba(165,122,66,0)_72%)] blur-2xl" />
        </div>

        <section className="mx-auto grid w-[min(1140px,92vw)] gap-10 py-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-22">
          <FadeIn>
            <p className="mb-4 inline-flex items-center rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--deep)]">
              Venda • Restauração • Conserto • Afinação • Transporte
            </p>
            <h1 className="font-display max-w-[15ch] text-4xl leading-[1.02] tracking-tight text-[var(--deep)] md:text-6xl">
              Especialistas em Pianos em Fortaleza.
            </h1>
            <p className="mt-5 max-w-[56ch] text-base text-[var(--muted)] md:text-lg">
              Atendimento técnico para venda, restauração, afinação e transporte com cuidado profissional e suporte
              direto da equipe Assis Pianos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/assispianos/"
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer inline-flex items-center rounded-full bg-gradient-to-r from-[#12335f] to-[#1a4a7a] px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <AtSign className="mr-2" size={16} />
                Falar no Instagram
              </a>
              <a
                href="https://wa.me/5585996224425"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="mr-2" size={16} />
                Orçamento no WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 shadow-[0_10px_25px_rgba(18,32,59,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-sm font-semibold text-[var(--deep)]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative overflow-hidden rounded-[30px] border border-white/55 bg-white/55 shadow-[0_24px_80px_rgba(10,14,22,0.2)]">
              <img
                src={heroImage}
                alt="Pianos de cauda e vertical em acabamento premium"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,12,20,0.72)] via-[rgba(7,12,20,0.18)] to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-3 rounded-full border border-white/45 bg-white/92 px-3 py-2">
                <img src={logoImage} alt="Logo Assis Pianos" className="h-9 w-9 rounded-full object-cover" />
                <span className="pr-2 text-sm font-semibold text-[var(--deep)]">Assis Pianos</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/25 bg-[rgba(9,20,38,0.8)] p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">Serviço completo</p>
                  <p className="mt-1 text-sm text-white/80">Da compra ao transporte do piano com suporte técnico.</p>
                </div>
                <div className="rounded-2xl border border-white/25 bg-[rgba(9,20,38,0.8)] p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">Atendimento local</p>
                  <p className="mt-1 text-sm text-white/80">Fortaleza e Região Metropolitana.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="servicos" className="mx-auto w-[min(1140px,92vw)] py-8 md:py-12">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Serviços Principais</h2>
            <p className="mt-3 max-w-[62ch] text-[var(--muted)]">
              Soluções para quem precisa manter ou recuperar o piano com segurança técnica e resultado confiável.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={0.05 * index}>
                  <article className="h-full rounded-3xl border border-[var(--line)] bg-white/75 p-6 shadow-[0_12px_35px_rgba(16,21,32,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--deep)]/92 p-2 text-white">
                      <Icon size={19} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--deep)]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ── Seção Estatísticas ── */}
        <section className="my-10 md:my-14">
          <div className="mx-auto w-[min(1140px,92vw)] overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#0d1b2e,#142d4f,#102a43)] p-8 shadow-[0_24px_60px_rgba(8,16,32,0.35)] md:p-12">
            <FadeIn>
              <div className="grid gap-8 text-center md:grid-cols-3">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center gap-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <span className="text-sm font-medium text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="apresentacao" className="mx-auto w-[min(1140px,92vw)] py-10 md:py-14">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Apresentação Real dos Trabalhos</h2>
            <p className="mt-3 max-w-[68ch] text-[var(--muted)]">
              Uma vitrine visual da rotina da Assis Pianos com reforma técnica e atendimento de locação, em formato de
              apresentação limpa.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <FadeIn delay={0.04}>
              <article className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(16,42,67,0.12)]">
                <div className="relative h-[420px]">
                  <video
                    src={renovationVideo}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    aria-label="Vídeo de reforma de piano"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(8,21,40,0.84)] via-[rgba(8,21,40,0.2)] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[rgba(8,21,40,0.62)] p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Reforma</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">Processo técnico em ação</h3>
                    <p className="mt-1 text-sm text-blue-50/90">
                      Registro da execução com foco em precisão, conservação estrutural e acabamento.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.08}>
              <article className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(16,42,67,0.12)]">
                <div className="relative h-[420px]">
                  <img src={rentalImage} alt="Imagem de locação de piano" className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(8,21,40,0.84)] via-[rgba(8,21,40,0.2)] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[rgba(8,21,40,0.62)] p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Locação</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">Soluções para eventos e espaços</h3>
                    <p className="mt-1 text-sm text-blue-50/90">
                      Apresentação da estrutura visual e padrão de entrega para locação de pianos.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>

        <section id="diferenciais" className="mt-8 bg-[linear-gradient(180deg,rgba(176,148,108,0.13),rgba(176,148,108,0.03))] py-14">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <FadeIn>
              <div className="rounded-3xl border border-[var(--line)] bg-white/75 p-7 backdrop-blur-md">
                <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Por que escolher a Assis Pianos</h2>
                <ul className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
                  <li className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    Atendimento próximo para entender o estado real do instrumento e indicar o serviço certo.
                  </li>
                  <li className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    Método de execução com foco em segurança, precisão e conservação do piano.
                  </li>
                  <li className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    Equipe local com atuação em Fortaleza para facilitar agendamento e suporte.
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-[linear-gradient(160deg,#142038,#0d172a)] p-7 text-white shadow-[0_20px_55px_rgba(7,13,24,0.32)]">
                <div>
                  <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.1em]">
                    Atendimento especializado
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">Seu piano tratado com seriedade técnica</h3>
                  <p className="mt-3 text-sm text-white/80">
                    Para compra, restauração, afinação ou transporte, o foco é preservar o instrumento e entregar
                    tranquilidade para você.
                  </p>
                </div>
                <a
                  href="#contato"
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/8"
                >
                  Solicitar orçamento
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="processo" className="mx-auto w-[min(1140px,92vw)] py-14">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Fluxo de atendimento</h2>
            <p className="mt-3 max-w-[62ch] text-[var(--muted)]">
              Processo claro para agilizar orçamento e execução com segurança.
            </p>
          </FadeIn>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <FadeIn key={step.number} delay={0.06 * index}>
                <article className="h-full rounded-3xl border border-[var(--line)] bg-white/70 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="mb-3 inline-flex rounded-full bg-[var(--deep)] px-3 py-1 text-xs font-semibold text-white">
                    {step.number}
                  </p>
                  <h3 className="text-lg font-semibold text-[var(--deep)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{step.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto w-[min(1140px,92vw)] py-6">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Perguntas Frequentes</h2>
          </FadeIn>
          <div className="mt-6 grid gap-3">
            {faqItems.map((faq, index) => (
              <FadeIn key={faq.question} delay={0.04 * index}>
                <Disclosure>
                  {({ open }) => (
                    <div className="rounded-2xl border border-[var(--line)] bg-white/75 backdrop-blur-md transition-all duration-300 hover:shadow-md">
                      <DisclosureButton className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[var(--deep)]">
                        {faq.question}
                        <ChevronDown
                          size={18}
                          className={`transition ${open ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--muted)]">
                        {faq.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto w-[min(1140px,92vw)] py-14">
          <FadeIn>
            <div className="grid gap-6 rounded-[34px] border border-[var(--line)] bg-white/78 p-7 shadow-[0_22px_60px_rgba(13,20,33,0.16)] backdrop-blur-md md:grid-cols-[1.08fr_0.92fr] md:p-10">
              <div>
                <h2 className="font-display text-3xl tracking-tight text-[var(--deep)] md:text-4xl">Contato rápido</h2>
                <p className="mt-3 max-w-[48ch] text-sm text-[var(--muted)]">
                  Fale com a equipe para orçamento e atendimento personalizado.
                </p>

                <div className="mt-6 grid gap-2 text-sm">
                  <a href="tel:+5585996224425" className="inline-flex items-center gap-2 text-[var(--deep)] transition-colors hover:text-[var(--brand-2)]">
                    <PhoneCall size={15} />
                    (85) 9 9622-4425
                  </a>
                  <a href="mailto:otpianos@yahoo.com.br" className="inline-flex items-center gap-2 text-[var(--deep)] transition-colors hover:text-[var(--brand-2)]">
                    <AtSign size={15} />
                    otpianos@yahoo.com.br
                  </a>
                  <a
                    href="https://www.instagram.com/assispianos/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--deep)] transition-colors hover:text-[var(--brand-2)]"
                  >
                    <AtSign size={15} />
                    @assispianos
                  </a>
                  <p className="inline-flex items-center gap-2 text-[var(--muted)]">
                    <MapPin size={15} />
                    Av. Rui Barbosa, 780 - Meireles, Fortaleza - CE
                  </p>
                </div>

                {/* Google Maps */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--line)]">
                  <iframe
                    title="Localização Assis Pianos"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.51!3d-3.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnMzMuNiJTIDM4wrAzMCcyNC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-[linear-gradient(160deg,#11284a,#1a3d6d)] p-6 text-white">
                <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-xs uppercase tracking-[0.12em]">
                  Atendimento
                </div>
                <h3 className="mt-3 text-2xl font-semibold font-display">Pronto para cuidar do seu piano</h3>
                <p className="mt-3 text-sm text-white/80">
                  Segunda a sexta das 08:00 às 20:00. Sábado das 08:00 às 12:00.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                  <ShieldCheck size={14} />
                  Atendimento local e especializado
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/5585996224425"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/assispianos/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* ── Footer Expandido ── */}
      <footer className="border-t border-white/10 bg-[linear-gradient(160deg,#0b1829,#122240)] py-12 text-white">
        <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-3">
          {/* Coluna 1 — Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Logo Assis Pianos" className="h-10 w-10 rounded-full border border-white/20 object-cover" />
              <span className="font-display text-lg font-bold">Assis Pianos</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/60">
              Especialistas em venda, restauração, afinação e transporte de pianos em Fortaleza.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/assispianos/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10">
                <AtSign size={13} /> Instagram
              </a>
              <a href="https://wa.me/5585996224425" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10">
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">Navegação</h4>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">Contato</h4>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><PhoneCall size={14} /> (85) 9 9622-4425</li>
              <li className="flex items-center gap-2"><AtSign size={14} /> otpianos@yahoo.com.br</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Av. Rui Barbosa, 780 - Meireles</li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              Seg–Sex: 08:00–20:00 &nbsp;|&nbsp; Sáb: 08:00–12:00
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-[min(1140px,92vw)] flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Assis Pianos. Todos os direitos reservados.</span>
          <span className="inline-flex items-center gap-1">
            Feito com <Star size={12} className="text-amber-400" /> em Fortaleza
          </span>
        </div>
      </footer>

      {/* ── Botão Flutuante WhatsApp ── */}
      <a
        href="https://wa.me/5585996224425"
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="whatsapp-pulse fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>

      {/* ── Botão Voltar ao Topo ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="fixed bottom-6 right-24 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 text-[var(--deep)] shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
