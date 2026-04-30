import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function GallerySection() {
  return (
    <section id="trabalhos" className="relative py-28 sm:py-36">
      <div className="absolute left-0 right-0 top-0 gold-divider" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Apresentação Real dos Trabalhos"
            title="Reforma e locação em evidência"
            description="Conheça a rotina da Assis Pianos através de registros reais — execução técnica apurada e padrão de entrega premium."
          />
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12}>
              <article className="group overflow-hidden rounded-[2rem] border border-brand-parchment/[0.08] bg-brand-charcoal/50 shadow-premium transition-all duration-600 hover:border-brand-champagne/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4),0_0_50px_rgba(200,169,110,0.08)]">
                <div className="relative h-[440px] overflow-hidden sm:h-[480px]">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
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
                      className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

                  {/* Category Badge */}
                  <div className="absolute left-6 top-6 rounded-full border border-brand-champagne/30 bg-black/40 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-champagne backdrop-blur-md transition-all duration-400 group-hover:border-brand-champagne/50 group-hover:bg-black/50">
                    {item.label}
                  </div>

                  {/* Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/[0.08] bg-black/35 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-brand-champagne/15 group-hover:bg-black/45">
                    <div className="mb-3 h-px w-10 bg-gradient-to-r from-brand-champagne/50 to-transparent transition-all duration-500 group-hover:w-16" />
                    <h3 className="font-display text-xl text-brand-parchment sm:text-2xl">{item.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-brand-parchment/55">{item.description}</p>
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
