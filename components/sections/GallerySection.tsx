import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type GalleryItem = (typeof galleryItems)[number];

export function GallerySection() {
  return (
    <section id="trabalhos" className="relative py-20 sm:py-28">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Apresentação Real dos Trabalhos"
            title="Reforma e locação em evidência"
            description="Conheça a rotina da Assis Pianos através de registros reais de execução técnica, acabamento e padrão de entrega."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="group overflow-hidden rounded-[2rem] border border-brand-parchment/10 bg-brand-charcoal/60 shadow-premium transition-all duration-500 hover:border-brand-champagne/25 hover:shadow-glow-strong">
                <div className="relative h-[420px] overflow-hidden">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={item.title}
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-5 top-5 rounded-full border border-brand-champagne/35 bg-black/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-champagne backdrop-blur-sm">
                    {item.label}
                  </div>

                  {/* Info Card */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-all duration-500 group-hover:border-brand-champagne/20">
                    <h3 className="font-display text-xl text-brand-parchment sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-parchment/65">{item.description}</p>
                    <div className="mt-3 h-px w-12 bg-gradient-to-r from-brand-champagne/50 to-transparent" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
