import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { COACHING_MENU, COUNTRIES_MENU, FOOTER, SITE, SOCIALS } from "@/lib/site-content";
import logoAsset from "@/assets/logo.png";
import { SiteLink } from "./SiteLink";

const SOCIAL_ICONS = { Instagram, Facebook, Youtube, Linkedin } as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.href === "/" ? (
              <Link
                to="/"
                className="text-sm text-navy-foreground/75 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <SiteLink
                href={link.href}
                className="text-sm text-navy-foreground/75 transition-colors hover:text-primary"
              >
                {link.label}
              </SiteLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3" aria-label="Uniplus Overseas home">
              <img
                src={logoAsset}
                alt="Uniplus Overseas logo"
                className="h-14 w-14 rounded-full bg-navy-foreground object-contain p-1"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-extrabold tracking-tight">
                  UNI<span className="text-primary">PLUS</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
                  Overseas Education Consultancy
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
              {FOOTER.mission}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-navy-foreground/20 p-2 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER.quickLinks} />
          <FooterColumn title="Countries" links={COUNTRIES_MENU} />
          <FooterColumn title="Coaching" links={COACHING_MENU} />

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary">
              Need help?
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-navy-foreground/75">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  +91 80523 43434
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60 sm:px-6 lg:px-8">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}