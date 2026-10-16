import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Target, Quote, Star } from "lucide-react";
import { InnerPage, PageSection, Reveal } from "@/components/site/InnerPage";
import { UniversityShowcase } from "@/components/site/UniversityShowcase";
import content from "@/lib/inner-page-content.json";
import { TESTIMONIALS, aboutPhoto, bannerPhoto } from "@/lib/site-content";

const about = content.about;
const title = about.blocks[0].text;
const description = about.blocks[3].text;
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${title} | Uniplus Overseas` }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: AboutPage,
});

const principles = [
  { title: "Our Mission", icon: Target, text: "Our mission is to provide students with comprehensive and personalized support as they pursue their education abroad. We are dedicated to staying up-to-date with the latest education trends and regulations and to providing our clients with the best possible service. We believe that our clients’ success is our success, and we are committed to helping you achieve your goals." },
  { title: "Our Vision", icon: Eye, text: about.blocks[9].text },
  { title: "Our Strategy", icon: Compass, text: about.blocks[11].text },
];

/* Shows only 5 lines (no "..."), the rest opens with "Read more". */
function ReviewText({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [open, setOpen] = useState(false);
  const [long, setLong] = useState(false);
  useEffect(() => { const el = ref.current; if (el) setLong(el.scrollHeight > 8.75 * 16 + 1); }, [text]);
  return <div className="my-6 flex-1">
    <blockquote ref={ref} className="overflow-hidden text-sm leading-7 text-muted-foreground" style={open ? undefined : { maxHeight: "8.75rem" }}>{text}</blockquote>
    {long && <button type="button" onClick={() => setOpen(!open)} className="mt-3 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">{open ? "Show less" : "Read more"}</button>}
  </div>;
}

function AboutPage() {
  return <InnerPage title={title} image={bannerPhoto}>
    <PageSection>
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="overflow-hidden rounded-md"><img src={aboutPhoto} alt="About us" className="inner-editorial-image w-full object-cover" /></Reveal>
        <Reveal delay={100}>
          <p className="mb-4 text-sm font-bold text-primary">{about.blocks[1].text}</p>
          <h2 className="max-w-lg text-3xl font-bold leading-tight text-navy sm:text-4xl">{about.blocks[2].text}</h2>
          {about.blocks.slice(3, 5).map((block) => <p key={block.text} className="mt-6 text-base leading-8 text-muted-foreground">{block.text}</p>)}
        </Reveal>
      </div>
    </PageSection>
    <PageSection className="bg-navy-deep text-navy-foreground">
      <Reveal><p className="text-sm font-bold text-primary">{about.blocks[5].text}</p><h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">{about.blocks[6].text}</h2></Reveal>
      <div className="mt-12 grid gap-9 lg:grid-cols-3 lg:gap-10">
        {principles.map((item, index) => <Reveal key={item.title} delay={index * 90} className="border-t border-navy-foreground/20 pt-7">
          <item.icon className="mb-6 h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <p className="mt-4 leading-8 text-navy-foreground/80">{item.text}</p>
        </Reveal>)}
      </div>
    </PageSection>
    <PageSection><UniversityShowcase title={about.blocks[12].text} /></PageSection>
    <PageSection className="bg-muted">
      <Reveal><p className="text-sm font-bold text-primary">{TESTIMONIALS.eyebrow}</p><h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{TESTIMONIALS.heading}</h2></Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.reviews.map((review, index) => <Reveal key={review.name} delay={index * 80} as="article" className="flex flex-col rounded-md border border-border bg-card p-7">
          <div className="flex items-center justify-between"><Quote className="h-6 w-6 text-primary" aria-hidden="true" /><div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div></div>
          <ReviewText text={review.text} />
          <p className="border-t border-border pt-5 font-semibold text-navy">{review.name}</p>
          <p className="mt-2 text-xs text-muted-foreground">Posted on Google</p>
        </Reveal>)}
      </div>
    </PageSection>
  </InnerPage>;
}