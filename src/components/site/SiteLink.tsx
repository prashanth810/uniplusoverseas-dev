import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

const LOCAL_PAGES = {
  "https://uniplusoverseas.com/about/": "/about",
  "https://uniplusoverseas.com/services/": "/services",
  "https://uniplusoverseas.com/blog/": "/blog",
  "https://uniplusoverseas.com/contact/": "/contact",
} as const;

/** Old country URLs → slug of the single /countries/$country page. */
const COUNTRY_PAGES: Record<string, string> = {
  "https://uniplusoverseas.com/usa-education-consultants-in-hyderabad/": "usa",
  "https://uniplusoverseas.com/top-uk-education-consultants-in-hyderabad/": "uk",
  "https://uniplusoverseas.com/canada-education-consultants-in-hyderabad/": "canada",
  "https://uniplusoverseas.com/france-education-consultancy-in-hyderabad/": "france",
  "https://uniplusoverseas.com/study-in-australia-consultants-in-hyderabad/": "australia",
  "https://uniplusoverseas.com/new-zealand-education-consultants-in-hyderabad/": "new-zealand",
  "https://uniplusoverseas.com/germany-education-consultancy-in-hyderabad/": "germany",
};

/** Old coaching URLs → slug of the single /coaching/$test page. */
const COACHING_PAGES: Record<string, string> = {
  "https://uniplusoverseas.com/gre-coaching-in-hyderabad/": "gre",
  "https://uniplusoverseas.com/pte-coaching-in-hyderabad/": "pte",
  "https://uniplusoverseas.com/ielts-coaching-in-hyderabad/": "ielts",
  "https://uniplusoverseas.com/toefl-coaching-in-hyderabad/": "toefl",
  "https://uniplusoverseas.com/sat/": "sat",
  "https://uniplusoverseas.com/gmat/": "gmat",
};

/** Local path for an old live-site URL (used for active menu highlighting). */
export function resolveLocalPath(href?: string): string | undefined {
  if (!href) return undefined;
  if (href === "/") return "/";
  if (COUNTRY_PAGES[href]) return `/countries/${COUNTRY_PAGES[href]}`;
  if (COACHING_PAGES[href]) return `/coaching/${COACHING_PAGES[href]}`;
  return (LOCAL_PAGES as Record<string, string>)[href];
}

export function SiteLink({ href, children, ...props }: ComponentProps<"a">) {
  const country = href ? COUNTRY_PAGES[href] : undefined;
  if (country) {
    return (
      <Link to="/countries/$country" params={{ country }} {...props}>
        {children}
      </Link>
    );
  }
  const test = href ? COACHING_PAGES[href] : undefined;
  if (test) {
    return (
      <Link to="/coaching/$test" params={{ test }} {...props}>
        {children}
      </Link>
    );
  }
  const destination = href && Object.entries(LOCAL_PAGES).find(([source]) => source === href)?.[1];
  if (destination) return <Link to={destination} {...props}>{children}</Link>;
  return <a href={href} {...props}>{children}</a>;
}