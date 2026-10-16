/**
 * Original content from uniplusoverseas.com — preserved verbatim.
 * Links to pages other than the homepage point to the live site so every
 * existing link keeps working.
 */

export const SITE = {
  name: "Uniplus Overseas",
  email: "info@uniplusoverseas.com",
  phoneDisplay: "+91-8052343434",
  phoneHref: "tel:+91-8052343434",
  phoneSecondary: "+91 99123 89009",
  address:
    "1st floor, Flat No : 101, C9WX+7P2 Suma Building, Rd No 7, Kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
  baseUrl: "https://uniplusoverseas.com",
} as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/uniplusoverseas/" },
  { label: "Facebook", href: "https://www.facebook.com/uniplusoverseas" },
  { label: "Youtube", href: "https://www.youtube.com/@uniplusoverseas" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/uniplusoverseas" },
] as const;

export const COUNTRIES_MENU = [
  { label: "USA", href: "https://uniplusoverseas.com/usa-education-consultants-in-hyderabad/", flag: "flag-usa.svg" },
  { label: "UK", href: "https://uniplusoverseas.com/top-uk-education-consultants-in-hyderabad/", flag: "flag-uk.svg" },
  { label: "Canada", href: "https://uniplusoverseas.com/canada-education-consultants-in-hyderabad/", flag: "flag-canada.svg" },
  { label: "France", href: "https://uniplusoverseas.com/france-education-consultancy-in-hyderabad/", flag: "flag-france.svg" },
  { label: "Australia", href: "https://uniplusoverseas.com/study-in-australia-consultants-in-hyderabad/", flag: "flag-australia.svg" },
  { label: "New Zealand", href: "https://uniplusoverseas.com/new-zealand-education-consultants-in-hyderabad/", flag: "flag-new-zealand.svg" },
  { label: "Germany", href: "https://uniplusoverseas.com/germany-education-consultancy-in-hyderabad/", flag: "flag-germany.svg" },
] as const;

export const COACHING_MENU = [
  { label: "GRE", href: "https://uniplusoverseas.com/gre-coaching-in-hyderabad/" },
  { label: "PTE", href: "https://uniplusoverseas.com/pte-coaching-in-hyderabad/" },
  { label: "IELTS", href: "https://uniplusoverseas.com/ielts-coaching-in-hyderabad/" },
  { label: "TOEFL", href: "https://uniplusoverseas.com/toefl-coaching-in-hyderabad/" },
  { label: "SAT", href: "https://uniplusoverseas.com/sat/" },
  { label: "GMAT", href: "https://uniplusoverseas.com/gmat/" },
] as const;

export const NAV_ITEMS: ReadonlyArray<
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: readonly { label: string; href: string; flag?: string }[] }
> = [
    { label: "Home", href: "/" },
    { label: "About", href: "https://uniplusoverseas.com/about/" },
    { label: "Services", href: "https://uniplusoverseas.com/services/" },
    { label: "Countries", children: COUNTRIES_MENU },
    { label: "Coaching", children: COACHING_MENU },
    { label: "Blog", href: "https://uniplusoverseas.com/blog/" },
    { label: "Contact", href: "https://uniplusoverseas.com/contact/" },
  ];

export const HERO = {
  kicker: "Grab The Golden Opportunity",
  heading: "Best Study Abroad Consultants in Hyderabad",
  bullets: ["With Exam Score 5.5 can Apply", "Student with UG/PG"],
  aboutCta: { label: "About us", href: "https://uniplusoverseas.com/about/" },
} as const;

export const WELCOME = {
  eyebrow: "WELCOME TO UNIPLUS",
  title: "UNIPLUS",
  subtitle: "Overseas Education Consultancy in Hyderabad",
  paragraphs: [
    "Uniplus Overseas was born from a clear vision: to democratize world-class education, making it attainable for students regardless of their socio-economic backgrounds. Our team of seasoned experts brings a wealth of experience from the education sector, their deep-rooted passion dedicated to guiding and assisting students in realizing their aspirations. Best Overseas education consultancy in Hyderabad.",
    "We firmly believe in the transformative power of education and are committed to leveling the playing field, ensuring that every student, no matter their background, can access the opportunities they deserve to reach their educational goals.",
  ],
} as const;

export const FEATURES = [
  {
    title: "One Stop Study Solution",
    text: "Streamlining your academic journey with comprehensive support, from course selection to settling in. Uniplus Overseas is your ultimate solution.",
  },
  {
    title: "One To One Discussion",
    text: "Personalized advice tailored to your goals, ensuring clarity and confidence in every decision. Get expert insights at Uniplus Overseas.",
  },
  {
    title: "End To End Support",
    text: "We're with you every step, from application to graduation, providing guidance, resources, and assistance for a successful academic experience.",
  },
] as const;

export const DESTINATIONS_HEADING =
  "Study Abroad & Student Visa Services for Top Study Destinations";

/** Image keys map to assets imported in the destinations component. */
export const DESTINATIONS = [
  { name: "USA", image: "usa", href: "https://uniplusoverseas.com/usa-education-consultants-in-hyderabad/" },
  { name: "UK", image: "uk", href: "https://uniplusoverseas.com/top-uk-education-consultants-in-hyderabad/" },
  { name: "Canada", image: "canada", href: "https://uniplusoverseas.com/canada-education-consultants-in-hyderabad/" },
  { name: "France", image: "france", href: "https://uniplusoverseas.com/france-education-consultancy-in-hyderabad/" },
  { name: "Australia", image: "australia", href: "https://uniplusoverseas.com/study-in-australia-consultants-in-hyderabad/" },
] as const;

export const SERVICES = [
  {
    title: "Career Counseling",
    text: "Our experienced counselors provide personalized guidance to help students choose the right career path that suits their skills, interests, and aspirations.",
  },
  {
    title: "Student Visa",
    text: "Our team of experts will assist students in the visa application process and provide guidance on the necessary documentation required for the student visa.",
  },
  {
    title: "University Selection",
    text: "We help students choose the right university by providing information on courses, fees, admission requirements, and the campus life.",
  },
  {
    title: "Admission Guidance",
    text: "Our admission specialists guide students through the admission process and help them secure a place in their preferred university.",
  },
  {
    title: "Visa Documentation",
    text: "Our team of experts will ensure that all the necessary documents are in order for a smooth visa application process.",
  },
  {
    title: "Accommodation/sim card",
    text: "We help students find suitable accommodation and provide assistance with obtaining a sim card for their mobile phone.",
  },
  {
    title: "Travel Assistance",
    text: "We provide guidance on travel arrangements and assist with booking flights and transportation to and from the university.",
  },
  {
    title: "Pre Departure Guidance",
    text: "Our team provides information on the customs and culture of the destination country, as well as tips on how to settle in and adjust to the new environment.",
  },
  {
    title: "Forex Service",
    text: "Our services include aiding in currency exchange and financial management for individuals traveling or studying overseas.",
  },
  {
    title: "Scholarship Assistance",
    text: "We help students identify scholarship opportunities, tuition fee waivers, and financial support options based on their academic profile and destination country.",
  },
  {
    title: "Test Preparation",
    text: "We offer test preparation classes to help students succeed in entrance exams such as IELTS, TOEFL, and GRE.",
  },
] as const;

export const UNIVERSITIES_HEADING = "Top Universities Study In Abroad";

export const TESTIMONIALS = {
  eyebrow: "Students feedback",
  heading: "Trusted by genius people.",
  reviews: [
    {
      name: "Donthoji Santhosh Kumar",
      text: "Uni Pulse Overseas provided exceptional support with my student visa, accommodation, and even provided a sim card for my arrival. Their forex service, immigration support, and test preparation was invaluable. I couldn't have asked for a better study abroad experience. Highly recommend their services to anyone looking to study abroad.",
    },
    {
      name: "Shiva Sandy",
      text: "Thanks to Uniplus Consultancy, I am now studying medicine at a top university abroad. Their team helped me navigate the application process, and their advice was invaluable. I would not have been able to achieve my dream without them.",
    },
    {
      name: "Vishnu Samala",
      text: "I remember when I first came to your office, I was feeling very lost and confused about the visa process. I had tried with so many other consultancies, but my visa was not approved. You took the time to understand my situation, and you helped me gather all the necessary documents. You also provided me with valuable advice on how to answer the visa officer's questions. Thank you Shiva Sir and team. I am excited to start this new chapter in my life.",
    },
  ],
} as const;

/** Homepage SEO section: original wording, trimmed to the key points. */
export const SEO_SECTION = {
  heading: "Study Abroad Consultants in Hyderabad – Uniplus Overseas",
  subheading: "Trusted Overseas Education Consultants for USA, UK, Canada, Australia & Europe",
  intro: [
    "Uniplus Overseas is one of Hyderabad’s leading study abroad consultants, helping students turn their international education dreams into reality. We offer end-to-end support — from choosing the right university and country to student visa processing, IELTS preparation, and pre-departure guidance.",
    "Our experienced counselors have helped hundreds of students gain admission to top universities in the USA, UK, Canada, Australia, Germany, and France — making the process simple, transparent, and stress-free.",
  ],
  stats: [
    { value: "100s", label: "Students admitted abroad" },
    { value: "6", label: "Countries covered" },
    { value: "6", label: "Test prep programs" },
    { value: "310+", label: "GRE score most students achieve" },
  ],
  countriesHeading: "Best Study Abroad Consultants in Hyderabad",
  countriesText:
    "A good consultant does not just help you apply — they help you find the right fit between your academic background, career goals, and the universities you apply to.",
  countries: [
    {
      tag: "USA",
      title: "USA consultancy in Hyderabad",
      text: "Home to MIT, Stanford, Harvard and hundreds of excellent universities, with OPT work experience after graduation.",
      points: ["University shortlisting & SOP/LOR review", "F-1 visa application support", "GRE, GMAT, SAT, TOEFL coaching"],
    },
    {
      tag: "UK",
      title: "UK consultancy in Hyderabad",
      text: "Oxford, Cambridge, Imperial College London and more offer globally recognized degrees and a post-study work visa of up to 2 years.",
      points: ["UCAS applications & personal statements", "CAS and UK student visa", "Post-study work visa guidance"],
    },
    {
      tag: "CANADA",
      title: "Canada consultancy in Hyderabad",
      text: "High-quality education and a welcoming immigration policy at Toronto, UBC, McGill and Waterloo, with PGWP options.",
      points: ["Program & university selection", "Study permit & SOP support", "Pathways to permanent residency"],
    },
    {
      tag: "EUROPE",
      title: "Germany & Europe consultancy in Hyderabad",
      text: "Tuition-free or low-cost public universities in Germany, plus English-taught programs in France, the Netherlands and Ireland.",
      points: ["University selection & language needs", "Blocked account setup", "Visa documentation & orientation"],
    },
  ],
  coachingHeading: "IELTS, TOEFL, GRE, GMAT & PTE Coaching in Hyderabad",
  coachingText:
    "In-house coaching for all major tests, with experienced trainers, small batches, weekly mock tests and flexible schedules.",
  coaching: [
    { name: "IELTS", note: "UK, Canada, Australia & Germany" },
    { name: "TOEFL", note: "USA & Canada" },
    { name: "GRE", note: "MS programs in the USA" },
    { name: "GMAT", note: "MBA programs worldwide" },
    { name: "SAT", note: "Undergraduate admissions in the USA" },
    { name: "PTE", note: "Most universities & Australian visas" },
  ],
  whyHeading: "Why choose Uniplus Overseas for overseas educational consultation services in Hyderabad?",
  whyText:
    "Hyderabad’s premier overseas education consultancy — expert counsellors who help you find the university that fits your goals, prepare the perfect application and navigate the visa process with ease.",
  why: [
    { title: "Knowledge and Experience", text: "Experienced counsellors who know the international education system inside out." },
    { title: "Personalized Counselling", text: "Guidance tailored to your preferences, strengths and goals." },
    { title: "Wide Range of Services", text: "University selection, applications, visa, pre-departure and post-arrival support." },
    { title: "Strong University Network", text: "Partnerships with reputable universities all over the world." },
    { title: "Stories of Success", text: "A long track record of successful placements and happy students." },
    { title: "Affordable Services", text: "Competitive pricing with high value for money." },
    { title: "Ethical Practices", text: "Honest, accurate information and transparent dealings." },
    { title: "Continuous Support", text: "Help with your questions even after you leave the country." },
  ],
} as const;

export const FOOTER = {
  mission:
    "Our mission is to provide students with comprehensive and personalized support as they pursue their education abroad.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "https://uniplusoverseas.com/about/" },
    { label: "Services", href: "https://uniplusoverseas.com/services/" },
    { label: "Contact", href: "https://uniplusoverseas.com/contact/" },
  ],
  guides: [
    { label: "GERMANY", href: "https://uniplusoverseas.com/germany-education-consultancy-in-hyderabad/" },
    { label: "USA", href: "https://uniplusoverseas.com/usa-education-consultants-in-hyderabad/" },
    { label: "UK", href: "https://uniplusoverseas.com/top-uk-education-consultants-in-hyderabad/" },
    { label: "NEWZEALAND", href: "https://uniplusoverseas.com/new-zealand-education-consultants-in-hyderabad/" },
    { label: "AUSTRALIA", href: "https://uniplusoverseas.com/study-in-australia-consultants-in-hyderabad/" },
    { label: "FRANCE", href: "https://uniplusoverseas.com/france-education-consultancy-in-hyderabad/" },
  ],
  copyright: "© 2026 Uniplus All rights reserved.",
} as const;


/* ---- Image helper: resolves a file name from src/assets to its final URL ---- */
const assetModules = import.meta.glob("/src/assets/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** getAsset("inner-blog-1.jpg") -> working URL (dev and production) */
export function getAsset(fileName: string): string {
  return assetModules[`/src/assets/${fileName}`] ?? "";
}

export const aboutPhoto = getAsset("inner-about-photo.jpg");
export const bannerPhoto = getAsset("hero-student.jpg");