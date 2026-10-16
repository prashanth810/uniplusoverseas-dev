import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { COUNTRIES_MENU, SITE, getAsset } from "@/lib/site-content";
import "./register-popup.css";

/** Delay (ms) before the popup appears after the page loads. */
const OPEN_DELAY = 800;

type Fields = { name: string; phone: string; email: string };
type Errors = Partial<Record<keyof Fields, string>>;

function validate(v: Fields): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[+\d][\d\s-]{8,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number";
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
        e.email = "Enter a valid email address";
    return e;
}

/**
 * "Register Now" lead popup.
 * Mounted once in the root route, so it opens on every page and on every
 * full page load / refresh (but not again on in-app navigation between pages).
 */
export function RegisterPopup() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [sent, setSent] = useState(false);
    const [values, setValues] = useState<Fields>({ name: "", phone: "", email: "" });
    const [country, setCountry] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const nameRef = useRef<HTMLInputElement>(null);

    // Open after a short delay on every load (runs only in the browser).
    useEffect(() => {
        const t = window.setTimeout(() => setOpen(true), OPEN_DELAY);
        return () => window.clearTimeout(t);
    }, []);

    const close = () => {
        setClosing(true);
        window.setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 280);
    };

    // Lock page scroll, focus first field, close on Escape.
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const focusTimer = window.setTimeout(() => nameRef.current?.focus(), 500);
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.clearTimeout(focusTimer);
            window.removeEventListener("keydown", onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    // Auto-close a moment after a successful submit.
    useEffect(() => {
        if (!sent) return;
        const t = window.setTimeout(close, 3200);
        return () => window.clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sent]);

    const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((v) => ({ ...v, [key]: e.target.value }));
        if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) return;

        // No backend is connected yet: this opens the visitor's email app with the
        // details filled in (same approach as the Contact page). Replace this block
        // with a fetch() to your form endpoint / CRM when you have one.
        const body = [
            `Name: ${values.name}`,
            `Phone: ${values.phone}`,
            `Email: ${values.email || "-"}`,
            `Interested country: ${country || "-"}`,
        ].join("\n");
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
            `Registration from ${values.name}`,
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    if (!open) return null;

    const countries = [
        ...COUNTRIES_MENU.map((c) => ({ label: c.label, flag: c.flag as string | undefined })),
        { label: "Other", flag: undefined },
    ];

    return (
        <div
            className={`rp-overlay${closing ? " is-closing" : ""}`}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
            <div className="rp-card" role="dialog" aria-modal="true" aria-labelledby="rp-title">
                <div className="rp-orb rp-orb-a" aria-hidden="true" />
                <div className="rp-orb rp-orb-b" aria-hidden="true" />

                <button type="button" className="rp-close" onClick={close} aria-label="Close registration form">
                    <X size={16} strokeWidth={2.5} />
                </button>

                <div className="rp-scroll">
                    {sent ? (
                        <div className="rp-success" role="status">
                            <svg className="rp-check" viewBox="0 0 64 64" aria-hidden="true">
                                <circle cx="32" cy="32" r="30" />
                                <path d="M19 33l9 9 17-19" />
                            </svg>
                            <h3>Thank you!</h3>
                            <p>We've received your details. Our counsellor will contact you shortly.</p>
                        </div>
                    ) : (
                        <>
                            <div className="rp-rise" style={{ ["--i" as string]: 0 }}>
                                <span className="rp-badge">
                                    <span className="rp-dot" aria-hidden="true" /> Free counselling
                                </span>
                                <h2 id="rp-title" className="rp-title">Register Now</h2>
                                <p className="rp-sub">
                                    Share your details and our study-abroad experts will guide you from admission to visa.
                                </p>
                            </div>

                            <form onSubmit={onSubmit} noValidate>
                                <div className="rp-field rp-rise" style={{ ["--i" as string]: 1 }}>
                                    <input
                                        ref={nameRef}
                                        id="rp-name"
                                        className={`rp-input${errors.name ? " has-error" : ""}`}
                                        value={values.name}
                                        onChange={set("name")}
                                        placeholder=" "
                                        autoComplete="name"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "rp-name-error" : undefined}
                                    />
                                    <label htmlFor="rp-name" className="rp-label">Name <span className="rp-req">*</span></label>
                                    {errors.name && <p id="rp-name-error" role="alert" className="rp-error">{errors.name}</p>}
                                </div>

                                <div className="rp-field rp-rise" style={{ ["--i" as string]: 2 }}>
                                    <input
                                        id="rp-phone"
                                        type="tel"
                                        inputMode="tel"
                                        className={`rp-input${errors.phone ? " has-error" : ""}`}
                                        value={values.phone}
                                        onChange={set("phone")}
                                        placeholder=" "
                                        autoComplete="tel"
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={errors.phone ? "rp-phone-error" : undefined}
                                    />
                                    <label htmlFor="rp-phone" className="rp-label">Phone Number <span className="rp-req">*</span></label>
                                    {errors.phone && <p id="rp-phone-error" role="alert" className="rp-error">{errors.phone}</p>}
                                </div>

                                <div className="rp-field rp-rise" style={{ ["--i" as string]: 3 }}>
                                    <input
                                        id="rp-email"
                                        type="email"
                                        className={`rp-input${errors.email ? " has-error" : ""}`}
                                        value={values.email}
                                        onChange={set("email")}
                                        placeholder=" "
                                        autoComplete="email"
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "rp-email-error" : undefined}
                                    />
                                    <label htmlFor="rp-email" className="rp-label">Email</label>
                                    {errors.email && <p id="rp-email-error" role="alert" className="rp-error">{errors.email}</p>}
                                </div>

                                <div className="rp-rise" style={{ ["--i" as string]: 4 }}>
                                    <p className="rp-chip-label" id="rp-country-label">Which country are you interested in?</p>
                                    <div className="rp-chips" role="group" aria-labelledby="rp-country-label">
                                        {countries.map((c) => (
                                            <button
                                                key={c.label}
                                                type="button"
                                                className="rp-chip"
                                                aria-pressed={country === c.label}
                                                onClick={() => setCountry(country === c.label ? "" : c.label)}
                                            >
                                                {c.flag ? (
                                                    <img src={getAsset(c.flag)} alt="" width={20} height={20} loading="lazy" />
                                                ) : (
                                                    <span className="rp-other" aria-hidden="true">+</span>
                                                )}
                                                {c.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="rp-rise" style={{ ["--i" as string]: 5 }}>
                                    <button type="submit" className="rp-submit">
                                        <span>
                                            Submit <ArrowRight size={18} strokeWidth={2.5} />
                                        </span>
                                    </button>
                                    <p className="rp-note">100% free • No spam • We'll call you back</p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}