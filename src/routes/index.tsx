import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  BedDouble,
  Compass,
  FileCheck2,
  GraduationCap,
  Headset,
  Lightbulb,
  MessagesSquare,
  NotebookPen,
  Plane,
  Star,
  Trophy,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SiteLink } from "@/components/site/SiteLink";
import {
  DESTINATIONS,
  DESTINATIONS_HEADING,
  FEATURES,
  SEO_SECTION,
  SERVICES,
  TESTIMONIALS,
  UNIVERSITIES_HEADING,
  WELCOME,
} from "@/lib/site-content";
import aboutImage from "@/assets/about-passport.webp";
import usaImage from "@/assets/usa.webp";
import ukImage from "@/assets/uk.webp";
import canadaImage from "@/assets/canada.webp";
import franceImage from "@/assets/france.webp";
import australiaImage from "@/assets/australia.webp";
import uniUb from "@/assets/uni-ub.png";
import uniUnc from "@/assets/uni-unc.png";
import uniPacific from "@/assets/uni-pacific.png";
import uniVector from "@/assets/uni-vector.png";
import uniIfas from "@/assets/uni-ifas.png";
import uniPurdue from "@/assets/uni-purdue.png";
import uniRoosevelt from "@/assets/uni-roosevelt.png";
import uniRoyalHolloway from "@/assets/uni-royal-holloway.png";
import uniSaintPeters from "@/assets/uni-saint-peters.jpg";
import uniSolent from "@/assets/uni-solent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Study Abroad Consultants in Hyderabad | Uniplus Overseas" },
      {
        name: "description",
        content:
          "Uniplus Overseas is one of Hyderabad's leading study abroad consultants — university selection, student visa, IELTS/GRE/PTE coaching and pre-departure guidance for USA, UK, Canada, Australia & Europe.",
      },
      { property: "og:title", content: "Best Study Abroad Consultants in Hyderabad | Uniplus Overseas" },
      {
        property: "og:description",
        content:
          "Uniplus Overseas is one of Hyderabad's leading study abroad consultants — university selection, student visa, IELTS/GRE/PTE coaching and pre-departure guidance for USA, UK, Canada, Australia & Europe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURE_ICONS = [Lightbulb, MessagesSquare, Headset];
const SERVICE_ICONS = [
  Compass,
  FileCheck2,
  GraduationCap,
  NotebookPen,
  FileCheck2,
  BedDouble,
  Plane,
  Plane,
  Banknote,
  Trophy,
  NotebookPen,
];
const DESTINATION_IMAGES = {
  usa: usaImage,
  uk: ukImage,
  canada: canadaImage,
  france: franceImage,
  australia: australiaImage,
} as const;
const UNI_LOGOS = [
  { src: uniUb, alt: "University at Buffalo logo" },
  { src: uniUnc, alt: "UNC logo" },
  { src: uniPacific, alt: "University of the Pacific logo" },
  { src: uniVector, alt: "Partner university logo" },
  { src: uniIfas, alt: "IFAS logo" },
  { src: uniPurdue, alt: "Purdue University logo" },
  { src: uniRoosevelt, alt: "Roosevelt University logo" },
  { src: uniRoyalHolloway, alt: "Royal Holloway logo" },
  { src: uniSaintPeters, alt: "Saint Peter's University logo" },
  { src: uniSolent, alt: "Southampton Solent University logo" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="content">
        <HeroCarousel />

        {/* Welcome / About */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
                <img
                  src={aboutImage}
                  alt="Best Overseas Education Consultancy in Hyderabad"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-xl md:block">
                <p className="font-heading text-sm font-bold uppercase tracking-widest">Uniplus</p>
                <p className="text-xs opacity-90">Overseas Education Consultancy</p>
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {WELCOME.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                  {WELCOME.title}{" "}
                  <span className="text-primary">{WELCOME.subtitle}</span>
                </h2>
              </Reveal>
              {WELCOME.paragraphs.map((p, i) => (
                <Reveal key={i} delay={120 + i * 100}>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={350}>
                <a
                  href="https://uniplusoverseas.com/about/"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-navy-foreground transition-all hover:-translate-y-0.5 hover:bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  About us <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </div>

          {/* Three feature cards */}
          <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[i]!;
              return (
                <Reveal key={f.title} delay={i * 120}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-navy/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-bold text-navy">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-muted py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {DESTINATIONS_HEADING}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {DESTINATIONS.map((d, i) => (
                <Reveal key={d.name} delay={i * 90}>
                  <SiteLink
                    href={d.href}
                    className="group relative block overflow-hidden rounded-2xl shadow-lg shadow-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <img
                      src={DESTINATION_IMAGES[d.image]}
                      alt={`Study in ${d.name}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                      <h3 className="font-heading text-2xl font-extrabold text-navy-foreground">
                        {d.name}
                      </h3>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </SiteLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Our Services
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = SERVICE_ICONS[i]!;
                return (
                  <Reveal key={s.title} delay={(i % 3) * 100}>
                    <article className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-navy/10">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-navy">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Universities marquee */}
        <section className="border-y border-border bg-muted py-16">
          <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              {UNIVERSITIES_HEADING}
            </h2>
          </Reveal>
          <div className="relative mt-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted to-transparent" />
            <div className="marquee-track flex w-max items-center gap-14 px-7">
              {[...UNI_LOGOS, ...UNI_LOGOS].map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-14 w-auto max-w-36 object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-navy-deep py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {TESTIMONIALS.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
                {TESTIMONIALS.heading}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 120}>
                  <figure className="flex h-full flex-col rounded-2xl border border-navy-foreground/10 bg-navy p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-center gap-1" aria-label="5 star Google review">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <ReviewText text={`“${r.text}”`} />
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-foreground/10 pt-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-extrabold text-primary-foreground">
                        {r.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-navy-foreground">{r.name}</p>
                        <p className="text-xs text-navy-foreground/60">Posted on Google</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content (trimmed) */}
        <section className="bg-gradient-to-b from-muted/60 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  {SEO_SECTION.heading}
                </h2>
                <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
                <p className="mt-5 font-heading text-lg font-bold text-primary sm:text-xl">{SEO_SECTION.subheading}</p>
              </Reveal>
              <Reveal delay={100}>
                {SEO_SECTION.intro.map((t) => (
                  <p key={t} className="mb-4 leading-relaxed text-muted-foreground last:mb-0">{t}</p>
                ))}
              </Reveal>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {SEO_SECTION.stats.map((st, i) => (
                <Reveal key={st.label} delay={i * 70}>
                  <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                    <p className="font-heading text-3xl font-extrabold text-primary">{st.value}</p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{st.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Countries */}
            <Reveal className="mx-auto mt-16 max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{SEO_SECTION.countriesHeading}</h2>
              <p className="mt-3 text-muted-foreground">{SEO_SECTION.countriesText}</p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SEO_SECTION.countries.map((c, i) => (
                <Reveal key={c.tag} delay={i * 80} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                    <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary">{c.tag}</span>
                    <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {c.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-navy">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Coaching */}
            <div className="mt-16 overflow-hidden rounded-3xl bg-navy-deep px-6 py-10 text-navy-foreground sm:px-10 lg:px-14 lg:py-14">
              <Reveal className="max-w-3xl">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">{SEO_SECTION.coachingHeading}</h2>
                <p className="mt-3 text-navy-foreground/80">{SEO_SECTION.coachingText}</p>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SEO_SECTION.coaching.map((t, i) => (
                  <Reveal key={t.name} delay={i * 60}>
                    <div className="flex items-center gap-4 rounded-xl border border-navy-foreground/10 bg-navy p-4">
                      <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-primary font-heading text-sm font-extrabold text-primary-foreground">{t.name}</span>
                      <p className="text-sm text-navy-foreground/85">{t.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <Reveal className="mx-auto mt-16 max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-extrabold leading-snug tracking-tight text-navy sm:text-3xl">{SEO_SECTION.whyHeading}</h2>
              <p className="mt-3 text-muted-foreground">{SEO_SECTION.whyText}</p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SEO_SECTION.why.map((w, i) => (
                <Reveal key={w.title} delay={(i % 4) * 70} className="h-full">
                  <div className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                    <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-base font-bold text-navy">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* Shows only 5 lines (no "..."), the rest opens with "Read more". */
function ReviewText({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [open, setOpen] = useState(false);
  const [long, setLong] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && !open) setLong(el.scrollHeight > el.clientHeight + 1);
  }, [text, open]);
  return (
    <div className="mt-4 flex-1">
      <blockquote
        ref={ref}
        className="overflow-hidden text-sm leading-relaxed text-navy-foreground/85"
        style={open ? undefined : { maxHeight: "calc(1.625em * 5)" }}
      >
        {text}
      </blockquote>
      {long && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-3 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}