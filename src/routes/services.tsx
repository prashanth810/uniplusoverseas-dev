import { createFileRoute } from "@tanstack/react-router";
import { Banknote, BedDouble, Compass, FileCheck2, GraduationCap, Globe, NotebookPen, Plane, ShieldCheck, Network, Award } from "lucide-react";
import { InnerPage, PageSection, Reveal } from "@/components/site/InnerPage";
import content from "@/lib/inner-page-content.json";
import { aboutPhoto, bannerPhoto } from "@/lib/site-content";

const blocks = content.services.blocks;
const title = blocks[0].text;
const serviceStart = blocks.findIndex(block => block.text === "Our Services");
const services = blocks.slice(serviceStart + 1).filter(block => block.tag === "h3").map(block => {
  const index = blocks.indexOf(block);
  return { title: block.text, text: blocks[index + 1]?.tag === "p" ? blocks[index + 1].text : "" };
});
const icons = [Compass, FileCheck2, GraduationCap, NotebookPen, FileCheck2, BedDouble, Plane, Globe, Banknote, Globe, NotebookPen];
const reasons = [
  { title: blocks[6].text, text: blocks[7].text, icon: Award },
  { title: blocks[8].text, text: blocks[9].text, icon: Network },
  { title: blocks[10].text, text: "Uniplus Educational Consultancy is a trusted and reputable organization with a proven track record of providing high-quality educational consultancy services to students.", icon: ShieldCheck },
];
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `${title} | Uniplus Overseas` }, { name: "description", content: blocks[3].text },
      { property: "og:title", content: title }, { property: "og:description", content: blocks[3].text },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <InnerPage title={title} image={bannerPhoto}>
    <PageSection>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <Reveal><p className="text-sm font-bold text-primary">{blocks[1].text}</p><h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{blocks[2].text}</h2></Reveal>
        <Reveal delay={100}><p className="text-base leading-8 text-muted-foreground">{blocks[3].text}</p></Reveal>
      </div>
    </PageSection>
    <PageSection className="bg-muted">
      <Reveal><p className="text-sm font-bold text-primary">{blocks[4].text}</p><h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-navy sm:text-4xl">{blocks[5].text}</h2></Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {reasons.map((reason, index) => <Reveal key={reason.title} delay={index * 80} className="border-t border-border pt-6">
          <reason.icon className="mb-5 h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="text-xl font-bold text-navy">{reason.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{reason.text}</p>
        </Reveal>)}
      </div>
    </PageSection>
    <PageSection>
      <Reveal><h2 className="text-3xl font-bold text-navy sm:text-4xl">{blocks[serviceStart].text}</h2></Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Compass; return <Reveal as="article" key={service.title} delay={(index % 3) * 70} className="inner-service rounded-md border border-border bg-card p-7 sm:p-8">
            <div className="mb-6 flex items-center justify-between"><Icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" /><span className="text-xs font-semibold text-muted-foreground" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
            <h3 className="text-xl font-bold leading-snug text-navy">{service.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{service.text}</p>
          </Reveal>
        })}
      </div>
    </PageSection>
  </InnerPage>;
}