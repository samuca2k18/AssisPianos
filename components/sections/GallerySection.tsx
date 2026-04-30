import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function GallerySection() {
  return (
    <section id="trabalhos" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Apresentação Real dos Trabalhos"
            title="Reforma e locação em evidência"
            description="Uma vitrine visual para mostrar execução técnica, acabamento e padrão de entrega da Assis Pianos."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[1.8rem] border border-brand-parchment/15 bg-brand-charcoal/80 shadow-premium">
                <div className="relative h-[380px]">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">{item.label}</p>
                    <h3 className="mt-2 font-display text-2xl text-brand-parchment">{item.title}</h3>
                    <p className="mt-1 text-sm text-brand-parchment/72">{item.description}</p>
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
