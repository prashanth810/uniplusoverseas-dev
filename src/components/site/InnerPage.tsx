import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export function InnerPage({ title, image, children }: { title: string; image: string; children: ReactNode }) {
  return (
    <div className="inner-page">
      <Header />
      <main>
        <section className="inner-banner relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
          <img src={image} alt="" fetchPriority="high" className="inner-banner-image absolute inset-0 h-full w-full object-cover" />
          <div className="inner-banner-shade absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 text-sm text-navy-foreground/80">
              <Link to="/" className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span aria-current="page">{title}</span>
            </nav>
            <h1 className="inner-heading max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <div className="mt-7 h-1 w-16 bg-primary" />
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function ContentBlocks({ blocks }: { blocks: readonly { tag: string; text: string }[] }) {
  return <>{blocks.map((block, index) => {
    if (block.tag === "h2") return <h2 key={index} className="mt-9 text-2xl font-bold leading-snug text-navy first:mt-0 sm:text-3xl">{block.text}</h2>;
    if (block.tag === "h3" || block.tag === "h4") return <h3 key={index} className="mt-7 text-xl font-bold leading-snug text-navy">{block.text}</h3>;
    if (block.tag === "li") return <p key={index} className="mt-3 border-l-2 border-primary pl-4 leading-8 text-muted-foreground">{block.text}</p>;
    return <p key={index} className="mt-5 text-base leading-8 text-muted-foreground">{block.text}</p>;
  })}</>;
}

export function PageSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`px-5 py-14 sm:px-8 sm:py-20 lg:px-10 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

export { Reveal };