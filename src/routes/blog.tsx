import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, ChevronRight, ImageIcon, Search, X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import content from "@/lib/inner-page-content.json";
import { getAsset } from "@/lib/site-content";
import "@/components/site/country-page.css";

const title = content.blog.blocks[0].text;
const description = content.blog.posts[0]?.title ?? title;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `${title} | Uniplus Overseas` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Uniplus Overseas` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

type Post = (typeof content.blog.posts)[number];

/** Category is read from the title, so new posts are sorted automatically. */
const CATEGORIES = ["USA", "UK", "Australia", "New Zealand", "France", "Germany"] as const;
type Category = (typeof CATEGORIES)[number] | "General";

function getCategory(post: Post): Category {
  const t = post.title;
  if (/\bUSA\b/i.test(t)) return "USA";
  if (/\bUK\b/.test(t)) return "UK";
  if (/Australia/i.test(t)) return "Australia";
  if (/New Zealand/i.test(t)) return "New Zealand";
  if (/France/i.test(t)) return "France";
  if (/APS|German/i.test(t)) return "Germany";
  return "General";
}

const PAGE_SIZE = 12;

function PostImage({ post, className }: { post: Post; className?: string }) {
  const src = getAsset(post.image);
  return src ? (
    <img src={src} alt={post.title} loading="lazy" className={className} />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
      <ImageIcon className="h-8 w-8" strokeWidth={1} aria-hidden="true" />
    </div>
  );
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const category = getCategory(post);
  return (
    <Reveal as="article" delay={(index % 4) * 60} className="h-full">
      <a
        href={post.href}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded border border-gray-300 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <PostImage
            post={post}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-navy-deep/85 px-2.5 py-1 text-[11px] font-bold text-navy-foreground backdrop-blur">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
          </p>
          <h2 className="mt-2 line-clamp-2 text-[15px] font-bold leading-snug text-navy transition-colors group-hover:text-navy-deep">
            {post.title}
          </h2>
          <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-bold text-primary">
            Read article
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function BlogPage() {
  const posts = content.blog.posts;
  const [category, setCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const present = new Set(posts.map(getCategory));
    return (["All", ...CATEGORIES, "General"] as const).filter(
      (c) => c === "All" || present.has(c as Category),
    );
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "All" || getCategory(p) === category) &&
        (!q || p.title.toLowerCase().includes(q)),
    );
  }, [posts, category, query]);

  const showFeatured = category === "All" && !query.trim();
  const featured = showFeatured ? filtered[0] : undefined;
  const list = showFeatured ? filtered.slice(1) : filtered;
  const shown = list.slice(0, visible);

  const reset = () => {
    setCategory("All");
    setQuery("");
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="inner-page country-page">
      <Header />
      <main>
        {/* ───────── Compact hero ───────── */}
        <section className="cp-hero relative isolate overflow-hidden text-navy-foreground">
          <div className="cp-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div className="cp-orb cp-orb-a -z-10" aria-hidden="true" />
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
                {title}
              </span>
            </nav>
            <h1
              className="cp-rise mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              <span className="cp-accent">{title}</span> &amp; guides
            </h1>
            <p
              className="cp-rise mt-4 max-w-2xl text-base leading-8 text-navy-foreground/80 sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Study abroad guides, visa tips, scholarships and costs for Indian students.
            </p>
          </div>
        </section>

        {/* ───────── Search + filters ───────── */}
        <div className="relative z-10 mx-auto -mt-9 max-w-5xl px-4">
          <div className="flex flex-col gap-3 rounded-md border border-gray-300 bg-background p-3 shadow-xl shadow-navy/15 md:flex-row md:items-center">
            <label className="relative block md:w-72 md:shrink-0">
              <span className="sr-only">Search articles</span>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search articles…"
                className="h-11 w-full rounded-md border border-gray-300 bg-muted/50 pl-10 pr-9 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by country">
              {categories.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setCategory(c);
                      setVisible(PAGE_SIZE);
                    }}
                    className={
                      "cp-pill rounded-full px-3.5 py-2 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
                      (active
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                        : "bg-muted text-navy hover:bg-accent")
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ───────── Posts ───────── */}
        <section className="px-5 pb-20 pt-12 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* Featured (latest) */}
            {featured && (
              <Reveal className="mb-10">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid overflow-hidden rounded border border-gray-300 bg-card transition-all duration-300 hover:border-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[1.1fr_0.9fr]"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted md:aspect-auto md:min-h-64">
                    <PostImage
                      post={featured}
                      className="h-full w-full object-cover transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-primary px-3 py-1 font-bold text-primary-foreground">
                        Latest
                      </span>
                      <span className="font-semibold text-primary">{getCategory(featured)}</span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {featured.date}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-extrabold leading-snug text-navy transition-colors group-hover:text-navy-deep sm:text-2xl">
                      {featured.title}
                    </h2>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Read article
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            )}

            <p className="mb-5 text-sm text-muted-foreground" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              {category !== "All" && ` in ${category}`}
              {query.trim() && ` for “${query.trim()}”`}
            </p>

            {/* key replays the reveal animation whenever the filter changes */}
            <div
              key={`${category}-${query}`}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {shown.map((post, i) => (
                <PostCard key={post.href} post={post} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mx-auto max-w-sm rounded-2xl border border-dashed border-gray-300 py-14 text-center">
                <p className="font-bold text-navy">No articles found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try a different word or country.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                >
                  Show all articles
                </button>
              </div>
            )}

            {list.length > visible && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-full border border-primary px-7 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  Load more articles
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}