import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
    ArrowRight,
    BookOpen,
    CalendarClock,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Phone,
    Quote,
    Target,
    TrendingUp,
    Users,
    Wallet,
    Sparkles,
    GraduationCap,
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
    COACH_STEPS,
    TESTS,
    TEST_ORDER,
    WHY_COACHING,
    getTest,
} from "@/lib/coaching-content";
import { SITE } from "@/lib/site-content";
import "@/components/site/country-page.css";

const CONTACT_URL = "https://uniplusoverseas.com/contact/";

const WHY_ICONS = {
    users: Users,
    small: GraduationCap,
    mock: ClipboardCheck,
    clock: CalendarClock,
    book: BookOpen,
    wallet: Wallet,
} as const;

const COVER_ICONS = [BookOpen, Target, ClipboardCheck, TrendingUp, Users];

export const Route = createFileRoute("/coaching/$test")({
    loader: ({ params }) => {
        const test = getTest(params.test);
        if (!test) throw notFound();
        return test;
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
    component: CoachingPage,
});

function CoachingPage() {
    const t = Route.useLoaderData();
    const others = TEST_ORDER.filter((s) => s !== t.slug).map((s) => TESTS[s]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [t.slug]);

    return (
        <div className="inner-page country-page">
            <Header />
            {/* key = slug → entrance + reveal animations replay when the test changes */}
            <main key={t.slug}>
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
                                <span>Coaching</span>
                                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                                <span aria-current="page" className="text-navy-foreground">
                                    {t.name}
                                </span>
                            </nav>

                            <p
                                className="cp-rise mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
                                style={{ animationDelay: "80ms" }}
                            >
                                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                {t.kicker}
                            </p>

                            <h1
                                className="cp-rise mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
                                style={{ animationDelay: "160ms" }}
                            >
                                <span className="cp-accent">{t.name}</span>{" "}
                                {t.title.replace(`${t.name} `, "")}
                            </h1>

                            <p
                                className="cp-rise mt-6 max-w-xl text-lg leading-8 text-navy-foreground/80"
                                style={{ animationDelay: "240ms" }}
                            >
                                {t.intro}
                            </p>

                            <div
                                className="cp-rise mt-8 flex flex-wrap items-center gap-3"
                                style={{ animationDelay: "320ms" }}
                            >
                                <SiteLink
                                    href={CONTACT_URL}
                                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    Book a free demo
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
                                {t.highlights.map((h) => (
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

                        {/* Exam snapshot card */}
                        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                            <div className="cp-photo relative">
                                <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-md">
                                    <div className="flex items-center gap-5">
                                        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                                            <span
                                                className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-primary/70 [animation-duration:14s] motion-reduce:animate-none"
                                                aria-hidden="true"
                                            />
                                            <span className="font-heading text-xl font-extrabold">{t.name}</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                                About the test
                                            </p>
                                            <p className="mt-1 text-lg font-bold leading-snug">{t.fullName}</p>
                                        </div>
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-navy-foreground/60">
                                        Test sections
                                    </p>
                                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                                        {t.sections.map((s, i) => (
                                            <li
                                                key={s}
                                                className="flex items-center gap-3 rounded-xl bg-white/10 px-3.5 py-2.5 text-sm font-semibold"
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                                    {i + 1}
                                                </span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-6 border-t border-white/15 pt-5 text-sm text-navy-foreground/80">
                                        <span className="font-semibold text-navy-foreground">Used for: </span>
                                        {t.accepted}
                                    </p>
                                </div>

                                <div className="cp-float absolute -left-4 -top-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-xl sm:-left-8">
                                    <ClipboardCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                                    <p className="text-sm font-bold leading-tight">Mock tests</p>
                                </div>
                                <div className="cp-float-slow absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-xl sm:-right-6">
                                    <Users className="h-6 w-6" aria-hidden="true" />
                                    <p className="text-sm font-bold leading-tight">Expert trainers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────── Test switcher ───────── */}
                <div className="relative z-10 mx-auto -mt-9 flex max-w-4xl justify-center px-4">
                    <nav
                        aria-label="Choose a test"
                        className="flex flex-wrap items-center justify-center gap-1.5 rounded-[2rem] border border-border bg-background p-1.5 shadow-xl shadow-navy/15"
                    >
                        {TEST_ORDER.map((slug) => {
                            const active = slug === t.slug;
                            return (
                                <Link
                                    key={slug}
                                    to="/coaching/$test"
                                    params={{ test: slug }}
                                    aria-current={active ? "page" : undefined}
                                    className={
                                        "cp-pill inline-flex items-center rounded-full px-4 py-2.5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-6 " +
                                        (active
                                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                                            : "text-navy hover:bg-muted")
                                    }
                                >
                                    {TESTS[slug].name}
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
                                {t.name} coaching built around you
                            </h2>
                            <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
                        </Reveal>
                        <Reveal delay={100}>
                            {t.overview.map((p) => (
                                <p key={p} className="mb-5 text-base leading-8 text-muted-foreground last:mb-0">
                                    {p}
                                </p>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ───────── What the program covers ───────── */}
                <section className="bg-muted px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                The program
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                {t.coversHeading}
                            </h2>
                        </Reveal>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {t.covers.map((item, i) => {
                                const Icon = COVER_ICONS[i % COVER_ICONS.length];
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

                {/* ───────── How we coach ───────── */}
                <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                How we coach
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                From your first class to exam day
                            </h2>
                        </Reveal>
                        <Reveal className="relative mt-14">
                            <div
                                className="cp-line absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-primary to-primary/20 lg:block"
                                aria-hidden="true"
                            />
                            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {COACH_STEPS.map((s, i) => (
                                    <li key={s.title} className="relative">
                                        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/30">
                                            {i + 1}
                                        </span>
                                        <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                            {s.text.replace("{test}", t.name)}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Why Uniplus coaching ───────── */}
                <section className="bg-navy-deep px-5 py-16 text-navy-foreground sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                Why Uniplus
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                                Why choose our {t.name} coaching centre in Hyderabad?
                            </h2>
                        </Reveal>
                        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {WHY_COACHING.map((w, i) => {
                                const Icon = WHY_ICONS[w.icon];
                                return (
                                    <Reveal
                                        key={w.title}
                                        as="article"
                                        delay={(i % 3) * 80}
                                        className="cp-card rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                                    >
                                        <span className="cp-icon flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary">
                                            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                                        </span>
                                        <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                                        <p className="mt-2 text-sm leading-7 text-navy-foreground/75">{w.text}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ───────── Tips (only when a test has them) + fees/quote ───────── */}
                <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div
                        className={
                            "mx-auto grid max-w-7xl items-start gap-12 " +
                            (t.tips ? "lg:grid-cols-[1fr_0.8fr] lg:gap-16" : "lg:grid-cols-2")
                        }
                    >
                        {t.tips ? (
                            <Reveal>
                                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                    Preparation tips
                                </p>
                                <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                    {t.tipsHeading}
                                </h2>
                                <Accordion
                                    type="single"
                                    collapsible
                                    defaultValue="tip-0"
                                    className="mt-8 rounded-2xl border border-border bg-card px-6"
                                >
                                    {t.tips.map((tip, i) => (
                                        <AccordionItem key={tip.title} value={`tip-${i}`}>
                                            <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                                                {tip.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-sm leading-7 text-muted-foreground">
                                                {tip.text}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Reveal>
                        ) : (
                            <Reveal>
                                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                    Fees
                                </p>
                                <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                                    {t.name} coaching fees in Hyderabad
                                </h2>
                                <p className="mt-6 text-base leading-8 text-muted-foreground">
                                    Our fees are priced competitively so quality coaching stays within reach. They
                                    depend on the program duration, the level of personal attention and any extra
                                    services. Contact us for current details.
                                </p>
                            </Reveal>
                        )}

                        <Reveal delay={120} className="lg:sticky lg:top-32">
                            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 text-navy-foreground shadow-2xl shadow-navy/25 sm:p-10">
                                <Quote className="h-10 w-10 text-primary" aria-hidden="true" />
                                <p className="mt-5 text-lg font-medium leading-8">{t.quote}</p>
                                <SiteLink
                                    href={CONTACT_URL}
                                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    Talk to a trainer
                                    <ArrowRight
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </SiteLink>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Other tests ───────── */}
                <section className="bg-muted px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="text-center">
                            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                                Preparing for another test?
                            </h2>
                        </Reveal>
                        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {others.map((o, i) => (
                                <Reveal key={o.slug} delay={(i % 3) * 80}>
                                    <Link
                                        to="/coaching/$test"
                                        params={{ test: o.slug }}
                                        className="cp-card group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        <div>
                                            <p className="font-heading text-2xl font-extrabold text-navy">{o.name}</p>
                                            <p className="mt-1 text-sm text-muted-foreground">{o.accepted}</p>
                                        </div>
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                        </span>
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
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to start your {t.name} prep?</h2>
                        <p className="mt-4 text-navy-foreground/80">
                            Book a consultation with one of our trainers and get a plan built around your target
                            score.
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