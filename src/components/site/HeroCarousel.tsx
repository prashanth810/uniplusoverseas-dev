import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO, SITE } from "@/lib/site-content";
import heroStudent from "@/assets/hero-student.jpg";
import usaImage from "@/assets/usa.webp";
import ukImage from "@/assets/uk.webp";

/**
 * The original site ships a single hero banner. Per the content-preservation
 * rule, every slide reuses the original heading, bullets and CTAs verbatim —
 * only the background photograph changes, using the site's own imagery.
 */
const SLIDES = [
  { image: heroStudent, alt: "Best Overseas Education Consultancy in Hyderabad" },
  { image: usaImage, alt: "Study in the USA with Uniplus Overseas" },
  { image: ukImage, alt: "Study in the UK with Uniplus Overseas" },
];

const AUTOPLAY_MS = 5500;

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 32 });
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay: pauses on hover, on hidden tab, and for reduced-motion users.
  useEffect(() => {
    if (!emblaApi) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || hovered) return;

    timer.current = setInterval(() => {
      if (!document.hidden) emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [emblaApi, hovered, selected]);

  // Keyboard support on the carousel region.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Uniplus Overseas highlights"
      className="relative bg-navy-deep"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={onKeyDown}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, i) => {
            const active = i === selected;
            return (
              <div
                key={slide.image}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
                aria-hidden={!active}
                className={cn(
                  "relative min-w-0 flex-[0_0_100%]",
                  active && "hero-slide-active",
                )}
              >
                {/* Background image with slow zoom on the active slide */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-image h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  {/* Refined navy gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-navy-deep/20" />
                </div>

                <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-20 sm:px-6 md:min-h-[600px] lg:min-h-[660px] lg:px-8">
                  <div className="max-w-2xl">
                    <p
                      className="hero-anim mb-5 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm"
                      style={{ animationDelay: "0.1s" }}
                    >
                      {HERO.kicker}
                    </p>
                    <h1
                      className="hero-anim font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-foreground sm:text-5xl lg:text-6xl"
                      style={{ animationDelay: "0.25s" }}
                    >
                      {HERO.heading}
                    </h1>
                    <ul className="mt-7 space-y-3" aria-label="Highlights">
                      {HERO.bullets.map((bullet, bi) => (
                        <li
                          key={bullet}
                          className="hero-anim flex items-center gap-3 text-base font-medium text-navy-foreground/90 sm:text-lg"
                          style={{ animationDelay: `${0.4 + bi * 0.12}s` }}
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="hero-anim mt-9 flex flex-wrap items-center gap-4"
                      style={{ animationDelay: "0.65s" }}
                    >
                      <a
                        href={HERO.aboutCta.href}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {HERO.aboutCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={SITE.phoneHref}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-3 rounded-full border border-navy-foreground/40 px-6 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span className="flex flex-col items-start leading-tight">
                          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                            Call Us
                          </span>
                          {SITE.phoneDisplay}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy-foreground/30 text-navy-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy-foreground/30 text-navy-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selected}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              i === selected
                ? "w-9 bg-primary"
                : "w-4 bg-navy-foreground/40 hover:bg-navy-foreground/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}