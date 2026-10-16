/**
 * One content file for every country page (/countries/uk, /usa, /canada).
 * To add a country: add its slug to CountrySlug, add an entry in COUNTRIES,
 * and map its old URL in SiteLink.tsx. (Germany and New Zealand use hero-student.jpg
 * as a placeholder — drop germany.webp / new-zealand.webp into src/assets and change `image`.) The page layout never changes.
 */

export type CountrySlug = "usa" | "uk" | "canada" | "france" | "australia" | "new-zealand" | "germany";

export type IconKey =
    | "graduation"
    | "users"
    | "lifebuoy"
    | "briefcase"
    | "landmark"
    | "globe"
    | "shield"
    | "flask"
    | "layout"
    | "sparkles"
    | "building";

export interface CountryContent {
    slug: CountrySlug;
    name: string;
    /** file names inside src/assets */
    flag: string;
    image: string;
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
    highlights: string[];
    overview: string[];
    whyHeading: string;
    why: { icon: IconKey; title: string; text: string }[];
    requirementsHeading: string;
    requirements: string[];
    careers: string;
    cost: string;
    tests: string[];
    quote: string;
}

export const COUNTRIES: Record<CountrySlug, CountryContent> = {
    uk: {
        slug: "uk",
        name: "UK",
        flag: "flag-uk.svg",
        image: "uk.webp",
        metaTitle: "Top UK Education Consultants in Hyderabad",
        metaDescription:
            "Study in the UK with Uniplus Overseas — university selection, applications, UK student visa, IELTS/PTE coaching and pre-departure support in Hyderabad.",
        kicker: "Study in the United Kingdom",
        title: "UK Education Consultants in Hyderabad",
        intro:
            "The UK is a world-renowned destination for international students — high-quality education, strong student support and real opportunities for personal and professional growth.",
        highlights: ["Globally recognised degrees", "Post-study work visa up to 2 years", "Strong student support"],
        overview: [
            "Uniplus Overseas helps you choose the right course and university, complete your application and prepare your visa and travel — all with one team that knows the UK system well.",
            "From career counselling and scholarship details to accommodation, internships and job support, we stay with you before and after you land.",
        ],
        whyHeading: "Why study in the UK?",
        why: [
            { icon: "graduation", title: "Quality of Education", text: "Home to some of the world's oldest and most prestigious universities, with a focus on critical thinking and research-based learning." },
            { icon: "globe", title: "Cultural Diversity", text: "A multicultural community that welcomes students from every background." },
            { icon: "lifebuoy", title: "Student Support", text: "Universities offer academic, personal, housing and financial support so you can focus on your studies." },
            { icon: "briefcase", title: "Career Opportunities", text: "Leading companies across finance, technology, arts and entertainment open doors for graduates." },
            { icon: "landmark", title: "Cultural Experiences", text: "Rich heritage, museums, galleries and a vibrant arts and music scene to explore." },
        ],
        requirementsHeading: "Typical admission requirements",
        requirements: [
            "Academic transcripts and certificates",
            "English proficiency score (IELTS, PTE or equivalent)",
            "Personal statement",
            "Letters of recommendation",
            "Valid passport and proof of funds",
        ],
        careers: "Study in the UK and step into leading companies across finance, technology, arts and entertainment. We help you plan the route from degree to career.",
        cost: "Costs depend on the university, course and city. We help you plan tuition and living expenses and look for scholarship options.",
        tests: ["IELTS", "PTE", "GRE"],
        quote: "Studying in the UK is an investment in your future — high-quality education, cultural diversity, student support and career opportunities. Start your journey to the UK today.",
    },

    usa: {
        slug: "usa",
        name: "USA",
        flag: "flag-usa.svg",
        image: "usa.webp",
        metaTitle: "USA Education Consultants in Hyderabad",
        metaDescription:
            "Study in the USA with Uniplus Overseas — university shortlisting, SOP/LOR support, F-1 visa guidance and TOEFL, GRE, GMAT and SAT coaching in Hyderabad.",
        kicker: "Study in the USA",
        title: "USA Education Consultants in Hyderabad",
        intro:
            "Your gateway to world-class education. Uniplus Overseas guides you from choosing a university to getting your student visa.",
        highlights: ["Top-ranked universities", "OPT work experience", "Research & internships"],
        overview: [
            "The United States has a diverse education system with renowned universities, cutting-edge research and rich cultural experience, and it encourages critical thinking and creativity.",
            "Our counsellors look at your academic background, goals and budget, then shortlist universities, build your profile and take you through applications and the F-1 visa.",
        ],
        whyHeading: "Why study in the USA?",
        why: [
            { icon: "graduation", title: "Academic Excellence", text: "Some of the world's top-ranked universities, with cutting-edge programs and degrees respected globally." },
            { icon: "layout", title: "Diverse Range of Programs", text: "Flexibility to choose courses that match your interests and career goals." },
            { icon: "flask", title: "Research Opportunities", text: "A hub for innovation with hands-on research at undergraduate and graduate level." },
            { icon: "globe", title: "Cultural Diversity", text: "Study alongside people from many backgrounds and build a global perspective." },
            { icon: "briefcase", title: "Internships & Jobs", text: "Internships and part-time jobs give practical experience and help offset living costs." },
            { icon: "sparkles", title: "Quality of Life", text: "A high standard of living, wide recreation options and student support services." },
        ],
        requirementsHeading: "Admission requirements for the USA",
        requirements: [
            "Standardized test scores (SAT or ACT)",
            "Academic transcripts",
            "Letters of recommendation",
            "Statement of purpose",
            "English proficiency (TOEFL or IELTS)",
        ],
        careers: "The USA offers career opportunities across technology, healthcare, business and engineering. We help you look at prospects and connect your course to your goals.",
        cost: "Costs include tuition, accommodation, living expenses and healthcare. Scholarships, grants and part-time work can help — we guide you on managing your finances.",
        tests: ["TOEFL", "GRE", "GMAT", "SAT"],
        quote: "We are committed to helping you achieve your dream of studying in the USA. Contact us today and begin your educational journey here.",
    },

    canada: {
        slug: "canada",
        name: "Canada",
        flag: "flag-canada.svg",
        image: "canada.webp",
        metaTitle: "Canada Education Consultants in Hyderabad",
        metaDescription:
            "Study in Canada with Uniplus Overseas — program selection, study permit, SOP support, IELTS/TOEFL coaching and PGWP guidance in Hyderabad.",
        kicker: "Study in Canada",
        title: "Canada Education Consultants in Hyderabad",
        intro:
            "Known for diverse culture, high-quality education and stunning landscapes, Canada is an excellent destination for international students.",
        highlights: ["Affordable quality education", "PGWP work permit options", "Pathways to residency"],
        overview: [
            "Canada has several top-ranking universities and colleges, internationally respected degrees and programs from arts and humanities to STEM, with a strong focus on research and innovation.",
            "We guide you through program and university selection, your study permit and SOP, and the preparation tests — step by step.",
        ],
        whyHeading: "Why study in Canada?",
        why: [
            { icon: "graduation", title: "Quality Education", text: "High academic standards and rigorous quality control." },
            { icon: "users", title: "Multicultural Society", text: "A diverse and welcoming community of students from around the world." },
            { icon: "shield", title: "Safe Environment", text: "One of the safest countries in the world for international students." },
            { icon: "briefcase", title: "Work Opportunities", text: "Work part-time during your studies and gain valuable experience." },
            { icon: "building", title: "Post-Graduation Options", text: "After graduation, Canada offers various pathways to permanent residency." },
        ],
        requirementsHeading: "Admission requirements for Canada",
        requirements: [
            "Academic transcripts",
            "Language proficiency (IELTS or TOEFL)",
            "Study permit",
            "Statement of purpose",
            "Letters of recommendation",
            "Entrance exams (GRE or GMAT for some programs)",
        ],
        careers: "Canada's job market is thriving across many industries. We share insights into the Canadian job market to help you plan your future.",
        cost: "Tuition varies by program and institution, and Canada is often more affordable than other popular destinations. We help you assess your finances and find scholarships.",
        tests: ["IELTS", "TOEFL", "GRE"],
        quote: "We are dedicated to helping you achieve your dream of studying in Canada. Contact us today — your future awaits in the Great White North.",
    },

    france: {
        slug: "france",
        name: "France",
        flag: "flag-france.svg",
        image: "france.webp",
        metaTitle: "France Education Consultancy in Hyderabad",
        metaDescription:
            "Study in France with Uniplus Overseas — program and university selection, Campus France guidance, student visa, IELTS/TOEFL coaching and pre-departure support in Hyderabad.",
        kicker: "Study in France",
        title: "France Education Consultancy in Hyderabad",
        intro:
            "Unlock your academic potential. France offers rich cultural heritage, world-class education and breathtaking landscapes for students seeking a transformative experience.",
        highlights: ["Globally recognised degrees", "Affordable public universities", "Rich culture & cuisine"],
        overview: [
            "France has a long history of academic excellence and is home to many prestigious institutions, with programs from arts and sciences to engineering and business.",
            "Uniplus Overseas helps you choose the right program, prepare your documents and visa, and settle in — with one-on-one counselling that fits your strengths and goals.",
        ],
        whyHeading: "Why study in France?",
        why: [
            { icon: "graduation", title: "Quality Education", text: "Home to some of the world's top universities and research institutions." },
            { icon: "landmark", title: "Cultural Enrichment", text: "Immerse yourself in a country known for art, fashion and cuisine." },
            { icon: "globe", title: "Language Skills", text: "Many programs are taught in French, which can strengthen your career prospects." },
            { icon: "layout", title: "Diverse Programs", text: "A wide range of courses from arts and sciences to engineering and business." },
            { icon: "sparkles", title: "Global Recognition", text: "French degrees are internationally recognised and valued." },
            { icon: "briefcase", title: "Career Prospects", text: "A strong economy with thriving sectors in technology, fashion and hospitality." },
        ],
        requirementsHeading: "Admission requirements for France",
        requirements: [
            "Academic credentials — high school diploma for undergraduate, bachelor's degree for postgraduate",
            "Language proficiency — DELF or DALF for French programs, TOEFL or IELTS for English-taught programs",
            "Admission tests (SAT or GRE) for some courses",
            "Student visa documents",
        ],
        careers: "France's strong economy and diverse industries offer excellent career prospects for international students, with thriving sectors in technology, fashion and hospitality.",
        cost: "Costs vary by institution and program. Public universities generally charge lower fees than private ones, and scholarships and financial aid are available.",
        tests: ["IELTS", "TOEFL"],
        quote: "We are here to guide you through each step of this exciting journey to study in France. Contact us today to kick-start your international education adventure.",
    },

    australia: {
        slug: "australia",
        name: "Australia",
        flag: "flag-australia.svg",
        image: "australia.webp",
        metaTitle: "Study in Australia Education Consultants in Hyderabad",
        metaDescription:
            "Study in Australia with Uniplus Overseas — course and university selection, student visa, IELTS/TOEFL/PTE coaching and pre-departure briefings in Hyderabad.",
        kicker: "Study in Australia",
        title: "Australia Education Consultants in Hyderabad",
        intro:
            "Dreaming of higher education in a vibrant, diverse and academically renowned destination? We guide you through every step of your journey to study in Australia.",
        highlights: ["Highly ranked universities", "Work while you study", "Pathways to residency"],
        overview: [
            "Australia ranks highly in global education rankings and offers a wide range of programs, from undergraduate to doctoral levels, in a welcoming multicultural society.",
            "Our counsellors help with course and university selection, applications, visa, accommodation and pre-departure briefings so you arrive prepared.",
        ],
        whyHeading: "Why study in Australia?",
        why: [
            { icon: "graduation", title: "Academic Excellence", text: "Universities that consistently rank among the top in the world, offering high-quality education." },
            { icon: "globe", title: "Diverse Culture", text: "A multicultural environment that fosters cross-cultural understanding and global perspectives." },
            { icon: "briefcase", title: "Work Opportunities", text: "Work opportunities for international students during and after their studies." },
            { icon: "sparkles", title: "Quality of Life", text: "A high standard of living, beautiful landscapes and a safe environment." },
            { icon: "flask", title: "Research Opportunities", text: "Engage in cutting-edge research projects and collaborations." },
        ],
        requirementsHeading: "Admission requirements for Australia",
        requirements: [
            "Completed application form",
            "Proof of English proficiency (IELTS, TOEFL)",
            "Academic transcripts and certificates",
            "Statement of Purpose (SOP)",
            "Valid passport and health insurance",
            "Student visa application",
        ],
        careers: "Australia's strong economy offers a thriving job market, internships and work placements, and high demand for skilled professionals in healthcare, engineering and IT, with pathways to permanent residency.",
        cost: "Tuition fees vary by course and institution, and living expenses depend on your location. Scholarships and part-time work can ease the financial burden.",
        tests: ["IELTS", "TOEFL", "PTE"],
        quote: "We are here to guide you every step of the way. Contact us today to kickstart your journey to studying in Australia.",
    },

    "new-zealand": {
        slug: "new-zealand",
        name: "New Zealand",
        flag: "flag-new-zealand.svg",
        image: "hero-student.jpg",
        metaTitle: "New Zealand Education Consultants in Hyderabad",
        metaDescription:
            "Study in New Zealand with Uniplus Overseas — university selection, admission guidance, student visa with mock interviews and pre-departure support in Hyderabad.",
        kicker: "Study in New Zealand",
        title: "New Zealand Education Consultants in Hyderabad",
        intro:
            "Your trusted partner for the exciting journey of education in New Zealand — a world-class education system with globally recognised qualifications.",
        highlights: ["Globally recognised qualifications", "Courses for every interest", "Mock visa interviews"],
        overview: [
            "From university selection to the visa application, our experienced New Zealand consultants give you personalised guidance. Whether your interest is business, technology or the arts, New Zealand has something for everyone.",
            "We also prepare you for life there — accommodation options, cultural orientation, financial planning and budgeting.",
        ],
        whyHeading: "Why choose New Zealand with Uniplus?",
        why: [
            { icon: "graduation", title: "World-Class Education", text: "A respected education system with globally recognised qualifications." },
            { icon: "layout", title: "Courses & Colleges", text: "Options across business, technology and the arts to match your aspirations." },
            { icon: "shield", title: "Visa Support", text: "Document checklists, financial statement checks and mock visa interviews." },
            { icon: "lifebuoy", title: "Pre-departure Guidance", text: "Accommodation options, cultural orientation and tips for adapting to life in New Zealand." },
            { icon: "users", title: "Settling-in Support", text: "Help connecting with local communities and ongoing support after you arrive." },
        ],
        requirementsHeading: "Typical admission requirements",
        requirements: [
            "Academic transcripts and certificates",
            "English proficiency score (IELTS, PTE or equivalent)",
            "Statement of purpose",
            "Valid passport",
            "Financial statements and proof of funds",
        ],
        careers: "Our career counselling matches programs to your interests and goals, and workshops help you understand the job market in New Zealand.",
        cost: "We guide you on financial planning and budgeting for your studies, help with forex, and help you look for scholarships.",
        tests: ["IELTS", "PTE"],
        quote: "Uniplus Overseas is your reliable partner for New Zealand education consulting in Hyderabad.",
    },

    germany: {
        slug: "germany",
        name: "Germany",
        flag: "flag-germany.svg",
        image: "hero-student.jpg",
        metaTitle: "Germany Education Consultancy in Hyderabad",
        metaDescription:
            "Study in Germany with Uniplus Overseas — program selection, applications, DSH/TestDaF and IELTS/TOEFL support, blocked account and student visa guidance in Hyderabad.",
        kicker: "Study in Germany",
        title: "Germany Education Consultancy in Hyderabad",
        intro:
            "A hub of innovation and higher education, with top-ranked universities, strong industry connections and, at many universities, no tuition fees.",
        highlights: ["Top-ranked universities", "Many with no tuition fees", "Strong industry links"],
        overview: [
            "For Indian students, Germany offers an exceptional education with an emphasis on research, affordability and strong industry connections.",
            "We identify the right program for your background and goals, guide you through applications and documents, help you prepare for language tests and support your visa.",
        ],
        whyHeading: "Why study in Germany?",
        why: [
            { icon: "graduation", title: "World-Class Education", text: "Top-ranked universities known for research and strong industry connections." },
            { icon: "sparkles", title: "Affordable Study", text: "Many public universities charge low or no tuition fees." },
            { icon: "briefcase", title: "Career Prospects", text: "Excellent opportunities after graduation in a strong economy." },
            { icon: "flask", title: "Research & Innovation", text: "A hub of innovation with an emphasis on research." },
            { icon: "landmark", title: "Rich Culture", text: "An enriching cultural and social experience alongside your studies." },
        ],
        requirementsHeading: "Typical admission requirements",
        requirements: [
            "Academic qualifications for your chosen program",
            "Language proficiency — German (DSH or TestDaF) or English (IELTS or TOEFL) depending on the program",
            "Application documents such as SOP and recommendations",
            "Proof of finances (blocked account)",
            "Student visa documents",
        ],
        careers: "Germany offers excellent career prospects after graduation. We provide career guidance and job search assistance to help you succeed.",
        cost: "Many public universities charge little or no tuition, but living costs still need planning. We help you find scholarships and financial aid from universities and outside sources.",
        tests: ["IELTS", "TOEFL"],
        quote: "We are committed to helping you achieve your dream of studying in Germany. Contact us today — your future begins here.",
    },
};

export const COUNTRY_ORDER: CountrySlug[] = ["usa", "uk", "canada", "france", "australia", "new-zealand", "germany"];

export function getCountry(slug: string): CountryContent | undefined {
    return (COUNTRIES as Record<string, CountryContent>)[slug];
}

/** Shared across all countries — written once, {country} is filled in by the page. */
export const PROCESS_STEPS = [
    { title: "Free counselling", text: "We understand your profile, goals and budget for {country}." },
    { title: "Shortlist & apply", text: "University and course selection, SOP/LOR support and applications." },
    { title: "Test preparation", text: "In-house coaching and mock tests for the exams {country} needs." },
    { title: "Visa & departure", text: "Visa documentation, interview guidance, travel and pre-departure briefing." },
] as const;

export const WHY_UNIPLUS = [
    { title: "Expertise & experience", text: "A team of highly qualified, experienced professionals who know the education system and the admission process inside out." },
    { title: "Customized solutions", text: "Guidance built around each student's individual requirements and goals." },
    { title: "Visa assistance", text: "Complete help with visa documentation, preparation and interview guidance." },
    { title: "Scholarship opportunities", text: "We help you find scholarships, tuition fee waivers and financial support." },
    { title: "Career guidance", text: "Advice that connects your course choice to the career you want." },
    { title: "Post-study support", text: "Help with your questions even after you leave the country." },
] as const;