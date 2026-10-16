import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COACHING_MENU, COUNTRIES_MENU, NAV_ITEMS, SITE, SOCIALS, getAsset } from "@/lib/site-content";
import logoAsset from "@/assets/logo.png";
import { SiteLink } from "./SiteLink";

const SOCIAL_ICONS = { Instagram, Facebook, Youtube, Linkedin } as const;

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = cn(
    "rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    className,
  );
  if (href === "/") {
    return (
      <Link to="/" className={cn(classes, "text-primary")}>
        {children}
      </Link>
    );
  }
  return (
    <SiteLink href={href} className={classes}>
      {children}
    </SiteLink>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string; flag?: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-44 origin-top rounded-xl border border-border bg-popover p-2 shadow-xl transition-all duration-200",
          items.some((i) => i.flag) && "min-w-64",
          open
            ? "visible translate-y-1 opacity-100"
            : "invisible translate-y-3 opacity-0",
        )}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center justify-between gap-6 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.label}
            {item.flag && (
              <img
                src={getAsset(item.flag)}
                alt=""
                width={40}
                height={27}
                loading="lazy"
                className="h-[27px] w-10 shrink-0 rounded-[3px] border border-border object-cover shadow-sm"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-md p-2 text-navy transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto bg-background p-0">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="flex items-center gap-3">
            <img src={logoAsset} alt="Uniplus Overseas" className="h-10 w-10 object-contain" />
            <span className="font-heading text-lg font-bold text-navy">Uniplus Overseas</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-4" aria-label="Mobile">
          {NAV_ITEMS.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="border-b border-border/60">
                <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-semibold text-navy"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      expanded === item.label && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    expanded === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center justify-between rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                        {"flag" in child && child.flag && (
                          <img
                            src={getAsset(child.flag)}
                            alt=""
                            width={36}
                            height={24}
                            loading="lazy"
                            className="h-6 w-9 shrink-0 rounded-[3px] border border-border object-cover"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.label} className="border-b border-border/60">
                {item.href === "/" ? (
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <SiteLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-navy"
                  >
                    {item.label}
                  </SiteLink>
                )}
              </div>
            ),
          )}
        </nav>
        <div className="flex flex-col gap-3 p-5">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Mail className="h-4 w-4 text-primary" /> {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" /> {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Call Us {SITE.phoneDisplay}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy-deep text-navy-foreground">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{SITE.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-1">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="rounded-md p-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-shadow duration-300",
          scrolled && "shadow-lg shadow-navy/5",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Uniplus Overseas home">
            <img src={logoAsset} alt="Uniplus Overseas logo" className="h-12 w-12 object-contain" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-xl font-extrabold tracking-tight text-navy">
                UNI<span className="text-primary">PLUS</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Overseas Education Consultancy
              </span>
            </span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <Dropdown key={item.label} label={item.label} items={item.children} />
              ) : (
                <NavLink key={item.label} href={item.href ?? "/"}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
