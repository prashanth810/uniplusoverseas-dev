import { Reveal } from "./Reveal";
import ub from "@/assets/uni-ub.png";
import unc from "@/assets/uni-unc.png";
import pacific from "@/assets/uni-pacific.png";
import vector from "@/assets/uni-vector.png";
import ifas from "@/assets/uni-ifas.png";
import purdue from "@/assets/uni-purdue.png";
import roosevelt from "@/assets/uni-roosevelt.png";
import royal from "@/assets/uni-royal-holloway.png";
import peters from "@/assets/uni-saint-peters.jpg";
import solent from "@/assets/uni-solent.png";

const logos = [
  { image: ub, alt: "University at Buffalo" }, { image: unc, alt: "UNC" },
  { image: pacific, alt: "University of the Pacific" }, { image: vector, alt: "University logo" },
  { image: ifas, alt: "IFAS" }, { image: purdue, alt: "Purdue University" },
  { image: roosevelt, alt: "Roosevelt University" }, { image: royal, alt: "Royal Holloway" },
  { image: peters, alt: "Saint Peter's University" }, { image: solent, alt: "Solent University" },
];

export function UniversityShowcase({ title }: { title: string }) {
  return <>
    <Reveal><h2 className="max-w-xl text-3xl font-bold leading-snug text-navy sm:text-4xl">{title}</h2></Reveal>
    <div className="mt-10 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
      {logos.map((logo, index) => <Reveal key={logo.alt} delay={(index % 5) * 60} className="flex h-32 items-center justify-center border-b border-r border-border bg-card px-6 sm:h-36">
        <img src={logo.image} alt={logo.alt} loading="lazy" className="max-h-20 w-full max-w-40 object-contain transition-transform duration-300 hover:scale-105 motion-reduce:transition-none" />
      </Reveal>)}
    </div>
  </>;
}