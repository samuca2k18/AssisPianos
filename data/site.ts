export const businessInfo = {
  name: "Assis Pianos",
  city: "Fortaleza - CE",
  phoneDisplay: "(85) 9 9622-4425",
  phoneDigits: "5585996224425",
  email: "otpianos@yahoo.com.br",
  instagramHandle: "@assispianos",
  instagramUrl: "https://www.instagram.com/assispianos/",
  address: "Av. Rui Barbosa, 780 - Meireles, Fortaleza - CE",
  hoursWeek: "Seg a Sex 08h-20h",
  hoursSaturday: "Sáb 08h-12h",
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
    title: "Atendimento Especializado",
    description: "Venda, afinação, restauração e transporte com foco técnico e cuidado com o instrumento.",
  },
  {
    title: "Tradição e Confiança",
    description: "Serviço local em Fortaleza para residências, igrejas, escolas, espaços culturais e eventos.",
  },
  {
    title: "Resposta Rápida",
    description: "Orçamento facilitado por WhatsApp, telefone, Instagram ou e-mail.",
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
    description: "Consultoria para escolher o piano ideal para estudo, performance, igreja, escola ou residência.",
  },
  {
    key: "restore",
    title: "Restauração e Conserto",
    description: "Recuperação estética e mecânica com ajustes técnicos para preservar toque, estrutura e sonoridade.",
  },
  {
    key: "tuning",
    title: "Afinação Profissional",
    description: "Afinação precisa para estabilidade sonora, equilíbrio de registros e melhor resposta musical.",
  },
  {
    key: "transport",
    title: "Transporte Especializado",
    description: "Movimentação segura com planejamento técnico para proteger o piano em todas as etapas.",
  },
];

export const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "500+", label: "Pianos atendidos" },
  { value: "100%", label: "Foco no cliente" },
];

export const aboutTopics = [
  "Atuação em Fortaleza e Região Metropolitana com atendimento direto da equipe.",
  "Processo técnico pensado para preservar mecanismo, estrutura e musicalidade do piano.",
  "Suporte consultivo para decisões de compra, manutenção preventiva e recuperação completa.",
];

export const galleryItems = [
  {
    type: "video" as const,
    label: "Reforma",
    title: "Processo de restauração em ação",
    description: "Execução técnica com atenção ao acabamento, mecânica e estabilidade sonora.",
    src: "/videos/reforma.mp4",
  },
  {
    type: "image" as const,
    label: "Locação",
    title: "Estrutura para eventos e apresentações",
    description: "Soluções de locação com padrão visual e operacional para diferentes ambientes.",
    src: "/images/locacao.jpg",
    alt: "Piano preparado para locação em evento",
  },
];

export const reasons = [
  "Diagnóstico técnico antes da execução para definir o melhor serviço para cada instrumento.",
  "Equipe local com atendimento próximo, agendamento ágil e acompanhamento transparente.",
  "Cuidado profissional em cada detalhe para proteger valor, timbre e durabilidade do piano.",
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
    description: "O serviço é realizado com método, precisão mecânica e cuidado estrutural.",
  },
  {
    number: "04",
    title: "Entrega e Orientação",
    description: "Finalização com recomendações práticas para conservação e manutenção preventiva.",
  },
];

export const faqItems = [
  {
    question: "Vocês atendem apenas em Fortaleza?",
    answer:
      "O foco principal é Fortaleza e Região Metropolitana. Para outras cidades, avaliamos logística e disponibilidade.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "O orçamento considera tipo de piano, estado atual e objetivo do serviço. Em alguns casos fazemos diagnóstico técnico prévio.",
  },
  {
    question: "É possível agendar afinação periódica?",
    answer: "Sim. A manutenção periódica ajuda a manter estabilidade sonora e prolonga a vida útil do instrumento.",
  },
  {
    question: "Vocês também fazem transporte de piano?",
    answer:
      "Sim. O transporte é planejado com cuidado técnico para garantir segurança durante todo o deslocamento.",
  },
];
