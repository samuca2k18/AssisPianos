export const businessInfo = {
  name: "Assis Pianos",
  tagline: "Desde 1984 — tradição, música e elegância",
  foundedYear: 1984,
  city: "Fortaleza - CE",
  phoneDisplay: "(85) 9 9622-4425",
  phoneDigits: "5585996224425",
  email: "otpianos@yahoo.com.br",
  instagramHandle: "@assispianos",
  instagramUrl: "https://www.instagram.com/assispianos/",
  whatsappUrl: "https://wa.me/5585996224425",
  address: "Av. Rui Barbosa, 780 - Meireles, Fortaleza - CE",
  hoursWeek: "Seg a Sex 08h–20h",
  hoursSaturday: "Sáb 08h–12h",
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const heroHighlights = [
  {
    title: "Tradição desde 1984",
    description: "Mais de 42 anos dedicados à arte de cuidar de pianos com excelência em Fortaleza.",
  },
  {
    title: "Atendimento Artesanal",
    description: "Cada piano recebe atenção individual com diagnóstico preciso e execução cuidadosa.",
  },
  {
    title: "Resposta Imediata",
    description: "Orçamento rápido por WhatsApp, telefone ou Instagram. Sem burocracia.",
  },
];

export type ServiceKey = "sale" | "restore" | "tuning" | "transport";

type ServiceItem = {
  key: ServiceKey;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    key: "sale",
    title: "Venda de Pianos",
    description:
      "Consultoria personalizada para encontrar o piano perfeito — seja para estudo, performance, igreja, escola ou sua residência.",
  },
  {
    key: "restore",
    title: "Restauração & Conserto",
    description:
      "Recuperação completa: estética, mecânica e sonora. Preservamos a alma do seu instrumento com técnica artesanal apurada ao longo de décadas.",
  },
  {
    key: "tuning",
    title: "Afinação Profissional",
    description:
      "Afinação precisa que garante estabilidade sonora, equilíbrio de registros e resposta musical impecável.",
  },
  {
    key: "transport",
    title: "Transporte Especializado",
    description:
      "Movimentação segura com planejamento técnico completo. Seu piano protegido em cada etapa do deslocamento.",
  },
];

export const stats = [
  { value: 42, suffix: "+", label: "Anos de tradição" },
  { value: 500, suffix: "+", label: "Pianos atendidos" },
  { value: 100, suffix: "%", label: "Foco no cliente" },
];

export const aboutTopics = [
  "Desde 1984, atuamos em Fortaleza e Região Metropolitana com atendimento direto e personalizado.",
  "Quatro décadas de processo técnico pensado para preservar mecanismo, estrutura e musicalidade.",
  "Suporte consultivo completo para decisões de compra, manutenção preventiva e recuperação.",
];

export const galleryItems = [
  {
    type: "video" as const,
    label: "Reforma",
    title: "Processo de restauração em ação",
    description: "Execução técnica com atenção meticulosa ao acabamento, mecânica e estabilidade sonora.",
    src: "/videos/reforma.mp4",
  },
  {
    type: "image" as const,
    label: "Locação",
    title: "Estrutura para eventos e apresentações",
    description: "Soluções de locação com padrão visual e operacional premium para diferentes ambientes.",
    src: "/images/locacao.jpg",
    alt: "Piano preparado para locação em evento",
  },
];

export const reasons = [
  "Diagnóstico técnico criterioso antes de qualquer execução — mais de 42 anos de experiência em cada avaliação.",
  "Equipe local em Fortaleza com atendimento próximo, agendamento ágil e acompanhamento transparente.",
  "Tradição familiar desde 1984 — cuidado artesanal em cada detalhe para proteger valor, timbre e durabilidade.",
];

export const processSteps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Você explica a necessidade e recebe uma orientação objetiva sobre o serviço ideal.",
  },
  {
    number: "02",
    title: "Diagnóstico Técnico",
    description: "A equipe avalia o cenário do instrumento para definir prioridade, escopo e abordagem.",
  },
  {
    number: "03",
    title: "Execução Especializada",
    description: "O serviço é realizado com método, precisão mecânica e cuidado estrutural artesanal.",
  },
  {
    number: "04",
    title: "Entrega & Orientação",
    description: "Finalização com recomendações práticas para conservação e manutenção preventiva.",
  },
];

export const faqItems = [
  {
    question: "Vocês atendem apenas em Fortaleza?",
    answer:
      "O foco principal é Fortaleza e Região Metropolitana. Para outras cidades, avaliamos logística e disponibilidade caso a caso.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "O orçamento considera tipo de piano, estado atual e objetivo do serviço. Em alguns casos, realizamos um diagnóstico técnico prévio para maior precisão.",
  },
  {
    question: "É possível agendar afinação periódica?",
    answer:
      "Sim. Recomendamos afinação a cada 6 meses. A manutenção periódica mantém a estabilidade sonora e prolonga significativamente a vida útil do instrumento.",
  },
  {
    question: "Vocês também fazem transporte de piano?",
    answer:
      "Sim. O transporte é planejado com cuidado técnico especializado para garantir segurança total durante todo o deslocamento.",
  },
  {
    question: "Quanto tempo leva uma restauração completa?",
    answer:
      "O prazo varia conforme o estado do instrumento e o escopo do serviço. Após o diagnóstico técnico, informamos uma estimativa precisa para cada caso.",
  },
  {
    question: "Trabalham com pianos de cauda e verticais?",
    answer:
      "Sim. Atendemos todos os modelos — pianos de cauda, meia-cauda, verticais e armários — com o mesmo padrão de qualidade e atenção cultivado desde 1984.",
  },
];
