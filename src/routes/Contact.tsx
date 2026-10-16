import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
    CheckCircle2,
    ChevronRight,
    ExternalLink,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Youtube,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SITE, SOCIALS } from "@/lib/site-content";
import "@/components/site/country-page.css";

const TITLE = "Contact Us";
const DESCRIPTION =
    "Contact Uniplus Overseas in Hyderabad — call, email or visit us for study abroad counselling, student visas and test preparation.";
const SOCIAL_ICONS = { Instagram, Facebook, Youtube, Linkedin } as const;

const PHONES = [
    { label: SITE.phoneDisplay, href: SITE.phoneHref },
    { label: SITE.phoneSecondary, href: "tel:+919912389009" },
];
const EMAILS = [SITE.email, "uniplusoverseas@gmail.com"];
const MAP_QUERY = encodeURIComponent("Suma Building, Kakatiya Hills, Madhapur, Hyderabad");

export const Route = createFileRoute("/Contact")({
    head: () => ({
        meta: [
            { title: `${TITLE} | Uniplus Overseas` },
            { name: "description", content: DESCRIPTION },
            { property: "og:title", content: `${TITLE} | Uniplus Overseas` },
            { property: "og:description", content: DESCRIPTION },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
    }),
    component: ContactPage,
});

type Fields = { name: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

function validate(v: Fields): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[+\d][\d\s-]{8,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address";
    return e;
}

const inputBase =
    "w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:bg-white/15 focus:ring-2";

function Field({
    id,
    label,
    error,
    children,
}: {
    id: string;
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">
                {label}
            </label>
            {children}
            {error && (
                <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-orange-300">
                    {error}
                </p>
            )}
        </div>
    );
}

function ContactPage() {
    const [values, setValues] = useState<Fields>({ name: "", phone: "", email: "", message: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [sent, setSent] = useState(false);

    const set = (key: keyof Fields) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setValues((v) => ({ ...v, [key]: e.target.value }));
        if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) return;

        // No backend is connected yet: this opens the visitor's email app with the
        // message filled in. Replace this block with a fetch() to your form endpoint
        // when you have one.
        const body = [
            `Name: ${values.name}`,
            `Phone: ${values.phone}`,
            `Email: ${values.email}`,
            "",
            values.message,
        ].join("\n");
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
            `Enquiry from ${values.name}`,
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    const fieldClass = (key: keyof Fields) =>
        `${inputBase} ${errors[key]
            ? "border-orange-400 focus:ring-orange-400/40"
            : "border-white/20 focus:border-primary focus:ring-primary/40"
        }`;

    return (
        <div className="inner-page country-page">
            <Header />
            <main>
                {/* ───────── Hero ───────── */}
                <section className="cp-hero relative isolate overflow-hidden text-navy-foreground">
                    <div className="cp-grid absolute inset-0 -z-10" aria-hidden="true" />
                    <div className="cp-orb cp-orb-a -z-10" aria-hidden="true" />
                    <div className="cp-orb cp-orb-b -z-10" aria-hidden="true" />
                    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10">
                        <nav
                            aria-label="Breadcrumb"
                            className="cp-rise flex items-center gap-2 text-sm text-navy-foreground/70"
                        >
                            <Link to="/" className="transition-colors hover:text-primary">
                                Home
                            </Link>
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                            <span aria-current="page" className="text-navy-foreground">
                                {TITLE}
                            </span>
                        </nav>
                        <h1
                            className="cp-rise mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                            style={{ animationDelay: "80ms" }}
                        >
                            Contact <span className="cp-accent">us</span>
                        </h1>
                        <p
                            className="cp-rise mt-4 max-w-2xl text-base leading-8 text-navy-foreground/80 sm:text-lg"
                            style={{ animationDelay: "160ms" }}
                        >
                            Questions about universities, visas or test prep? Talk to our counsellors in
                            Hyderabad.
                        </p>
                    </div>
                </section>

                {/* ───────── Details + form ───────── */}
                <section className="relative z-10 -mt-14 px-5 pb-16 sm:px-8 lg:px-10">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
                        {/* Details */}
                        <Reveal className="rounded-3xl border border-gray-300 bg-card p-7 shadow-xl shadow-navy/10 sm:p-10">
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                Contact details
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Get in touch</h2>
                            <p className="mt-4 text-base leading-8 text-muted-foreground">
                                Uniplus Overseas was born from a clear vision: to democratize world-class
                                education, making it attainable for students regardless of their socio-economic
                                backgrounds.
                            </p>

                            <ul className="mt-8 space-y-4">
                                <li className="cp-card flex gap-4 rounded-2xl border border-gray-300 p-5">
                                    <span className="cp-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                                        <Phone className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-navy">Call us</h3>
                                        {PHONES.map((p) => (
                                            <a
                                                key={p.href}
                                                href={p.href}
                                                className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {p.label}
                                            </a>
                                        ))}
                                    </div>
                                </li>
                                <li className="cp-card flex gap-4 rounded-2xl border border-gray-300 p-5">
                                    <span className="cp-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                                        <Mail className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-navy">Email</h3>
                                        {EMAILS.map((m) => (
                                            <a
                                                key={m}
                                                href={`mailto:${m}`}
                                                className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {m}
                                            </a>
                                        ))}
                                    </div>
                                </li>
                                <li className="cp-card flex gap-4 rounded-2xl border border-gray-300 p-5">
                                    <span className="cp-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                                        <MapPin className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-navy">Our address</h3>
                                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{SITE.address}</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 flex items-center gap-2">
                                {SOCIALS.map((s) => {
                                    const Icon = SOCIAL_ICONS[s.label];
                                    return (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={s.label}
                                            className="cp-pill flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-navy hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </Reveal>

                        {/* Form */}
                        <Reveal delay={120}>
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-7 text-navy-foreground shadow-2xl shadow-navy/25 sm:p-10">
                                <div className="cp-orb cp-orb-a !-left-16 !-top-20 !h-56 !w-56 opacity-25" aria-hidden="true" />
                                {sent ? (
                                    <div className="relative flex min-h-[26rem] flex-col items-center justify-center text-center">
                                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                                            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                                        </span>
                                        <h2 className="mt-6 text-2xl font-extrabold">Thank you, {values.name.split(" ")[0]}!</h2>
                                        <p className="mt-3 max-w-sm text-sm leading-7 text-navy-foreground/80">
                                            Your email app should now be open with your message. Send it and our team
                                            will get back to you. You can also call {SITE.phoneDisplay}.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSent(false);
                                                setValues({ name: "", phone: "", email: "", message: "" });
                                            }}
                                            className="mt-7 rounded-full border border-white/25 px-6 py-2.5 text-sm font-bold transition-colors hover:bg-white/10"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
                                        <div>
                                            <h2 className="text-2xl font-extrabold sm:text-3xl">Feel free to ask!</h2>
                                            <p className="mt-2 text-sm text-navy-foreground/75">
                                                Fill in your details and we will reach out to you.
                                            </p>
                                        </div>
                                        <Field id="name" label="Name" error={errors.name}>
                                            <input
                                                id="name"
                                                name="name"
                                                autoComplete="name"
                                                value={values.name}
                                                onChange={set("name")}
                                                aria-invalid={!!errors.name}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                                placeholder="Your full name"
                                                className={fieldClass("name")}
                                            />
                                        </Field>
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <Field id="phone" label="Phone number" error={errors.phone}>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    autoComplete="tel"
                                                    value={values.phone}
                                                    onChange={set("phone")}
                                                    aria-invalid={!!errors.phone}
                                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                                    placeholder="+91 98765 43210"
                                                    className={fieldClass("phone")}
                                                />
                                            </Field>
                                            <Field id="email" label="Email" error={errors.email}>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={values.email}
                                                    onChange={set("email")}
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={errors.email ? "email-error" : undefined}
                                                    placeholder="you@example.com"
                                                    className={fieldClass("email")}
                                                />
                                            </Field>
                                        </div>
                                        <Field id="message" label="Message">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={values.message}
                                                onChange={set("message")}
                                                placeholder="Which country or test are you interested in?"
                                                className={`${fieldClass("message")} resize-y`}
                                            />
                                        </Field>
                                        <button
                                            type="submit"
                                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                        >
                                            Submit
                                            <Send
                                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ───────── Map ───────── */}
                <section className="px-5 pb-20 sm:px-8 lg:px-10">
                    <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gray-300 shadow-lg shadow-navy/10">
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-card px-6 py-4">
                            <div className="flex items-center gap-2.5">
                                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                                <h2 className="font-bold text-navy">Visit our office in Hyderabad</h2>
                            </div>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                            >
                                Open in Google Maps
                                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                        </div>
                        <iframe
                            title="Uniplus Overseas office location"
                            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-80 w-full border-0 sm:h-96"
                        />
                    </Reveal>
                </section>
            </main>
            <Footer />
        </div>
    );
}