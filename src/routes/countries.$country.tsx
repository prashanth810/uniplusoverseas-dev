import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
    ArrowRight,
    Briefcase,
    Building2,
    CheckCircle2,
    ChevronRight,
    FlaskConical,
    GraduationCap,
    Globe,
    LayoutGrid,
    LifeBuoy,
    Landmark,
    Phone,
    Quote,
    ShieldCheck,
    Sparkles,
    Users,
    Wallet,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SiteLink } from "@/components/site/SiteLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    COUNTRIES,
    COUNTRY_ORDER,
    PROCESS_STEPS,
    WHY_UNIPLUS,
    getCountry,
    type IconKey,
} from "@/lib/country-content";
import { SITE, getAsset } from "@/lib/site-content";
import "@/components/site/country-page.css";

const CONTACT_URL = "https://uniplusoverseas.com/contact/";

const ICONS: Record<IconKey, typeof Globe> = {
    graduation: GraduationCap,
    users: Users,
    lifebuoy: LifeBuoy,
    briefcase: Briefcase,
    landmark: Landmark,
    globe: Globe,
    shield: ShieldCheck,
    flask: FlaskConical,
    layout: LayoutGrid,
    sparkles: Sparkles,
    building: Building2,
};

export const Route = createFileRoute("/countries/$country")({
    loader: ({ params }) => {
        const country = getCountry(params.country);
        if (!country) throw notFound();
        return country;
    },
    head: ({ loaderData }) => {
        if (!loaderData) return {};
        return {
            meta: [
                { title: `${loaderData.metaTitle} | Uniplus Overseas` },
                { name: "description", content: loaderData.metaDescription },
                { property: "og:title", content: loaderData.metaTitle },
                { property: "og:description", content: loaderData.metaDescription },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary_large_image" },
            ],
        };
    },
    component: CountryPage,
});

function CountryPage() {
    const c = Route.useLoaderData();
    const others = COUNTRY_ORDER.filter((s) => s !== c.slug).map((s) => COUNTRIES[s]);

    // Start at the top whenever the user switches country.
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [c.slug]);

    return (
        <div className="inner-page country-page">
            <Header />
            {/* key = slug → all reveal/entrance animations replay when the country changes */}
            <main key={c.slug}>
                {/* ───────── Hero ───────── */}
                <section className="cp-hero relative isolate overflow-hidden text-navy-foreground">
                    <div className="cp-grid absolute inset-0 -z-10" aria-hidden="true" />
                    <div className="cp-orb cp-orb-a -z-10" aria-hidden="true" />
                    <div className="cp-orb cp-orb-b -z-10" aria-hidden="true" />

                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-16">
                        <div>
                            <nav
                                aria-label="Breadcrumb"
                                className="cp-rise flex items-center gap-2 text-sm text-navy-foreground/70"
                            >
                                <Link to="/" className="transition-colors hover:text-primary">
                                    Home
                                </Link>
                                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                                <span>Countries</span>
                                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                                <span aria-current="page" className="text-navy-foreground">
                                    {c.name}
                                </span>
                            </nav>

                            <p
                                className="cp-rise mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold backdrop-blur"
                                style={{ animationDelay: "80ms" }}
                            >
                                <img
                                    src={getAsset(c.flag)}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="h-7 w-7 rounded-full object-cover"
                                />
                                {c.kicker}
                            </p>

                            <h1
                                className="cp-rise mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
                                style={{ animationDelay: "160ms" }}
                            >
                                <span className="cp-accent">{c.name}</span>{" "}
                                {c.title.replace(`${c.name} `, "")}
                            </h1>

                            <p
                                className="cp-rise mt-6 max-w-xl text-lg leading-8 text-navy-foreground/80"
                                style={{ animationDelay: "240ms" }}
                            >
                                {c.intro}
                            </p>

                            <div
                                className="cp-rise mt-8 flex flex-wrap items-center gap-3"
                                style={{ animationDelay: "320ms" }}
                            >
                                <SiteLink
                                    href={CONTACT_URL}
                                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    Book free consultation
                                    <ArrowRight
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </SiteLink>
                                <a
                                    href={SITE.phoneHref}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
                                >
                                    <Phone className="h-4 w-4" aria-hidden="true" />
                                    {SITE.phoneDisplay}
                                </a>
                            </div>

                            <ul
                                className="cp-rise mt-9 flex flex-wrap gap-2.5"
                                style={{ animationDelay: "400ms" }}
                            >
                                {c.highlights.map((h) => (
                                    <li
                                        key={h}
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur"
                                    >
                                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                            <div className="cp-photo relative">
                                <div className="overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/30">
                                    <img
                                        src={getAsset(c.image)}
                                        alt={`Study in ${c.name}`}
                                        fetchPriority="high"
                                        className="aspect-[4/3.4] w-full object-cover"
                                    />
                                </div>
                                <div className="cp-float absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-xl sm:-left-8">
                                    <img
                                        src={getAsset(c.flag)}
                                        alt=""
                                        width={36}
                                        height={36}
                                        className="h-9 w-9 rounded-full object-cover"
                                    />
                                    <div className="leading-tight">
                                        <p className="text-xs text-muted-foreground">Destination</p>
                                        <p className="text-sm font-bold">{c.name}</p>
                                    </div>
                                </div>
                                <div className="cp-float-slow absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-xl sm:-right-6">
                                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                                    <div className="leading-tight">
                                        <p className="text-xs opacity-80">Guidance</p>
                                        <p className="text-sm font-bold">End-to-end support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────── Country switcher ───────── */}
                <div className="relative z-10 mx-auto -mt-9 flex max-w-6xl justify-center px-4">
                    <nav
                        aria-label="Choose a country"
                        className="cp-switcher flex max-w-full flex-nowrap items-center justify-start gap-1.5 overflow-x-auto rounded-full border border-border bg-background p-1.5 shadow-xl shadow-navy/15 lg:justify-center"
                    >
                        {COUNTRY_ORDER.map((slug) => {
                            const item = COUNTRIES[slug];
                            const active = slug === c.slug;
                            return (
                                <Link
                                    key={slug}
                                    to="/countries/$country"
                                    params={{ country: slug }}
                                    aria-current={active ? "page" : undefined}
                                    className={
                                        "cp-pill inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 " +
                                        (active
                                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                                            : "text-navy hover:bg-muted")
                                    }
                                >
                                    <img
                                        src={getAsset(item.flag)}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-5 w-5 rounded-full object-cover"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* ───────── Overview ───────── */}
                <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <Reveal>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                Overview
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                                Your trusted partner for studying in {c.name}
                            </h2>
                            <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
                        </Reveal>
                        <Reveal delay={100}>
                            {c.overview.map((p) => (
                                <p key={p} className="mb-5 text-base leading-8 text-muted-foreground last:mb-0">
                                    {p}
                                </p>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Why study ───────── */}
                <section className="bg-muted px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                Benefits
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                {c.whyHeading}
                            </h2>
                        </Reveal>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {c.why.map((item, i) => {
                                const Icon = ICONS[item.icon];
                                return (
                                    <Reveal
                                        key={item.title}
                                        as="article"
                                        delay={(i % 3) * 80}
                                        className="cp-card rounded-2xl border border-border bg-card p-7"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="cp-icon flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                                                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                                            </span>
                                            <span className="font-heading text-3xl font-extrabold text-navy/10">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h3 className="mt-6 text-lg font-bold text-navy">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ───────── Requirements + careers + cost ───────── */}
                <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-navy/5 sm:p-10">
                            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
                                {c.requirementsHeading}
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Each university sets its own criteria — we help you meet them.
                            </p>
                            <ul className="mt-7 space-y-4">
                                {c.requirements.map((r, i) => (
                                    <Reveal as="li" key={r} delay={i * 70} className="flex items-start gap-3.5">
                                        <CheckCircle2
                                            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                                            aria-hidden="true"
                                        />
                                        <span className="text-base text-foreground">{r}</span>
                                    </Reveal>
                                ))}
                            </ul>
                        </Reveal>

                        <div className="grid gap-8">
                            <Reveal
                                delay={100}
                                className="rounded-3xl bg-navy p-8 text-navy-foreground sm:p-9"
                            >
                                <Briefcase className="h-7 w-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                <h3 className="mt-5 text-xl font-bold">Careers &amp; industry insights</h3>
                                <p className="mt-3 text-sm leading-7 text-navy-foreground/80">{c.careers}</p>
                            </Reveal>
                            <Reveal
                                delay={180}
                                className="rounded-3xl bg-navy-deep p-8 text-navy-foreground sm:p-9"
                            >
                                <Wallet className="h-7 w-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                <h3 className="mt-5 text-xl font-bold">Cost of education in {c.name}</h3>
                                <p className="mt-3 text-sm leading-7 text-navy-foreground/80">{c.cost}</p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ───────── Process ───────── */}
                <section className="bg-muted px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                How we help
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                From first call to your {c.name} visa
                            </h2>
                        </Reveal>

                        <Reveal className="relative mt-14">
                            <div
                                className="cp-line absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-primary to-primary/20 lg:block"
                                aria-hidden="true"
                            />
                            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {PROCESS_STEPS.map((s, i) => (
                                    <li key={s.title} className="relative">
                                        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/30">
                                            {i + 1}
                                        </span>
                                        <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                            {s.text.replace("{country}", c.name)}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </Reveal>

                        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-3">
                            <span className="text-sm font-semibold text-navy">
                                Test coaching for {c.name}:
                            </span>
                            {c.tests.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-primary/30 bg-background px-4 py-1.5 text-sm font-bold text-primary"
                                >
                                    {t}
                                </span>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Why Uniplus ───────── */}
                <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
                        <Reveal>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                Why Uniplus?
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                Hyderabad&apos;s overseas education consultancy you can trust
                            </h2>
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="item-0"
                                className="mt-8 rounded-2xl border border-border bg-card px-6"
                            >
                                {WHY_UNIPLUS.map((w, i) => (
                                    <AccordionItem key={w.title} value={`item-${i}`}>
                                        <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                                            {w.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm leading-7 text-muted-foreground">
                                            {w.text}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Reveal>

                        <Reveal delay={120} className="lg:sticky lg:top-32">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 text-navy-foreground shadow-2xl shadow-navy/25 sm:p-10">
                                <Quote className="h-10 w-10 text-primary" aria-hidden="true" />
                                <p className="mt-5 text-lg font-medium leading-8">{c.quote}</p>
                                <SiteLink
                                    href={CONTACT_URL}
                                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    Talk to a counsellor
                                    <ArrowRight
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </SiteLink>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Other destinations ───────── */}
                <section className="bg-muted px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="text-center">
                            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                                Exploring other destinations?
                            </h2>
                        </Reveal>
                        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {others.map((o, i) => (
                                <Reveal key={o.slug} delay={i * 90}>
                                    <Link
                                        to="/countries/$country"
                                        params={{ country: o.slug }}
                                        className="group relative block overflow-hidden rounded-3xl shadow-lg shadow-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        <img
                                            src={getAsset(o.image)}
                                            alt={`Study in ${o.name}`}
                                            loading="lazy"
                                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-navy-foreground">
                                            <span className="font-heading text-2xl font-extrabold">
                                                Study in {o.name}
                                            </span>
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform group-hover:translate-x-1">
                                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────── Final CTA ───────── */}
                <section className="relative isolate overflow-hidden bg-navy-deep px-5 py-20 text-center text-navy-foreground sm:px-8">
                    <div className="cp-orb cp-orb-a -z-10 opacity-30" aria-hidden="true" />
                    <Reveal className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Need consultation?</h2>
                        <p className="mt-4 text-navy-foreground/80">
                            To start your visa application, the first step is a consultation with one of our
                            seasoned counsellors.
                        </p>
                        <SiteLink
                            href={CONTACT_URL}
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                        >
                            Apply now
                            <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </SiteLink>
                    </Reveal>
                </section>
            </main>
            <Footer />
        </div>
    );
}