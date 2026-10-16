/**
 * One content file for every coaching page (/coaching/gre, /pte, /ielts, /toefl, /sat, /gmat).
 * To add a test: add its slug to TestSlug, add an entry in TESTS and map its old URL in SiteLink.tsx.
 */

export type TestSlug = "gre" | "pte" | "ielts" | "toefl" | "sat" | "gmat";

export interface TestContent {
    slug: TestSlug;
    name: string;
    fullName: string;
    /** where the score is used */
    accepted: string;
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
    highlights: string[];
    overview: string[];
    /** the sections of the real exam */
    sections: string[];
    coversHeading: string;
    covers: { title: string; text: string }[];
    /** optional — shown as an accordion */
    tipsHeading?: string;
    tips?: { title: string; text: string }[];
    quote: string;
}

export const TESTS: Record<TestSlug, TestContent> = {
    gre: {
        slug: "gre",
        name: "GRE",
        fullName: "Graduate Record Examination",
        accepted: "MS programs in the USA and graduate programs worldwide",
        metaTitle: "GRE Coaching in Hyderabad",
        metaDescription:
            "GRE coaching in Hyderabad at Uniplus Overseas — personalized study plans, mock tests, feedback and one-on-one mentoring from experienced instructors.",
        kicker: "GRE preparation",
        title: "GRE Coaching in Hyderabad",
        intro:
            "Unlock your potential and pave the way to your dream graduate program. Our seasoned instructors guide you through every step of your GRE preparation.",
        highlights: ["Personalized study plans", "Regular mock tests", "One-on-one mentoring"],
        overview: [
            "With personalized instruction, strategic study plans and extensive practice materials, you can tackle every section of the GRE with confidence.",
            "Whether you need help with quantitative reasoning, verbal reasoning, analytical writing — or all three — our coaching is built around your strengths and the areas you need to improve.",
            "A competitive GRE score matters for admission to top graduate programs. We help you maximize your potential and raise your chances of success.",
        ],
        sections: ["Quantitative Reasoning", "Verbal Reasoning", "Analytical Writing"],
        coversHeading: "What our GRE program covers",
        covers: [
            { title: "Complete syllabus", text: "In-depth coverage of all GRE syllabus topics." },
            { title: "Test-taking strategy", text: "Strategies for time management and smart test-taking." },
            { title: "Mock exams", text: "Practice tests that simulate the real test environment." },
            { title: "Progress tracking", text: "Feedback and analysis after each test to show where you stand." },
            { title: "Personal attention", text: "Support from experienced instructors who focus on your weak areas." },
        ],
        quote: "At Uniplus Overseas we understand the importance of a competitive score. Let us help you elevate your chances of success in the GRE.",
    },

    pte: {
        slug: "pte",
        name: "PTE",
        fullName: "Pearson Test of English",
        accepted: "Most universities and Australian visas",
        metaTitle: "PTE Coaching in Hyderabad",
        metaDescription:
            "PTE coaching in Hyderabad at Uniplus Overseas — small batches, mock tests, flexible schedules and personalized coaching in speaking, writing, reading and listening.",
        kicker: "PTE preparation",
        title: "PTE Coaching in Hyderabad",
        intro:
            "Prepare effectively for the Pearson Test of English with a structured program designed to build your English proficiency and get you ready to excel on exam day.",
        highlights: ["Small batch sizes", "Flexible scheduling", "Mock tests like the real exam"],
        overview: [
            "Our experienced instructors use proven teaching methods to help you master each section of the PTE — speaking, writing, reading and listening.",
            "PTE is a computer-based test known for quick results and objective scoring. Whether you need to improve pronunciation, expand your vocabulary or strengthen comprehension, the program targets your specific areas of concern.",
            "Small batches give you personal attention and constructive feedback, and group study sessions let you learn with your peers.",
        ],
        sections: ["Speaking", "Writing", "Reading", "Listening"],
        coversHeading: "What our PTE program covers",
        covers: [
            { title: "Exam format", text: "Comprehensive coverage of the PTE format and question types." },
            { title: "Practice & simulation", text: "Exercises and simulations that build your confidence." },
            { title: "Language feedback", text: "Guidance on improving your language skills." },
            { title: "Time management", text: "Strategies for managing time efficiently during the exam." },
            { title: "Personalized coaching", text: "Coaching that addresses your individual learning needs." },
        ],
        quote: "We are committed to empowering you with the skills and strategies needed to reach your desired score in the PTE.",
    },

    ielts: {
        slug: "ielts",
        name: "IELTS",
        fullName: "International English Language Testing System",
        accepted: "UK, Canada, Australia & Germany",
        metaTitle: "IELTS Coaching in Hyderabad",
        metaDescription:
            "IELTS coaching in Hyderabad at Uniplus Overseas — Academic and General Training, mock tests, speaking practice, study materials and weekend or evening classes.",
        kicker: "IELTS preparation",
        title: "IELTS Coaching in Hyderabad",
        intro:
            "Unlock your potential and succeed in IELTS with a comprehensive program. Our expert instructors support you in every aspect of the exam, whether you take the Academic or General Training module.",
        highlights: ["Academic & General Training", "Weekend & evening classes", "Speaking practice"],
        overview: [
            "Whether you need help with complex texts, writing coherence and cohesion, or speaking fluency and pronunciation, our tailored coaching helps you feel confident and well-prepared for your academic or immigration goals.",
            "You get a personalized plan built around your strengths and weaknesses, regular mock tests and feedback sessions, and study materials covering every section.",
        ],
        sections: ["Listening", "Reading", "Writing", "Speaking"],
        coversHeading: "What our IELTS program covers",
        covers: [
            { title: "Format & structure", text: "Get familiar with the format and structure of the IELTS exam." },
            { title: "All four skills", text: "Enhance your listening, reading, writing and speaking skills." },
            { title: "Score strategies", text: "Strategies for maximizing your score in each section." },
            { title: "Practice tests", text: "Practice tests and mock exams to assess your progress." },
            { title: "Personal feedback", text: "Feedback and guidance that address your specific areas for improvement." },
        ],
        tipsHeading: "Tips for IELTS preparation",
        tips: [
            { title: "Understand the exam format", text: "Know how Listening, Reading, Writing and Speaking are scored — step-by-step information on what the exam will entail." },
            { title: "Focus on your weak areas", text: "Instructors assess your level and prepare a detailed study schedule that suits you." },
            { title: "Practice regularly with mock tests", text: "Regular mock tests mimic the real test and build ease with format and timing, followed by constructive feedback." },
            { title: "Master time management", text: "Time-based practice helps you complete the Reading and Writing sections within the given time." },
            { title: "Improve vocabulary and grammar", text: "Dedicated classes on vocabulary, grammar and sentence construction." },
            { title: "Gain confidence in speaking", text: "Regular speaking practice and constructive evaluation improve your fluency, accent and answers." },
            { title: "Use study materials", text: "Practice tests, essays and exercises that follow the latest trends in the exam." },
            { title: "Schedule it your way", text: "Classes on weekends and evenings fit around work, studies and other commitments." },
        ],
        quote: "We believe in the power of education to transform lives, and we support you on your journey to success in the IELTS exam.",
    },

    toefl: {
        slug: "toefl",
        name: "TOEFL",
        fullName: "Test of English as a Foreign Language",
        accepted: "USA & Canada",
        metaTitle: "TOEFL Coaching in Hyderabad",
        metaDescription:
            "TOEFL coaching in Hyderabad at Uniplus Overseas — exam-format training, mock tests, feedback and personalized preparation for study in the USA and Canada.",
        kicker: "TOEFL preparation",
        title: "TOEFL Coaching in Hyderabad",
        intro:
            "Prepare for the TOEFL with a structured program that builds your English skills and your confidence, so you can reach the score your universities ask for.",
        highlights: ["For USA & Canada", "Mock tests", "Personalized feedback"],
        overview: [
            "Our trainers take you through the test format and each skill area — reading, listening, speaking and writing — with practice that matches the real exam.",
            "Regular mock tests and feedback show you where you stand, so your preparation stays focused on what improves your score.",
        ],
        sections: ["Reading", "Listening", "Speaking", "Writing"],
        coversHeading: "What our TOEFL program covers",
        covers: [
            { title: "Exam format", text: "Clear understanding of the test format and question types." },
            { title: "Four skills", text: "Training in reading, listening, speaking and writing." },
            { title: "Score strategies", text: "Strategies and time management for each section." },
            { title: "Mock tests", text: "Practice tests that simulate the real test conditions." },
            { title: "Personal feedback", text: "Feedback that targets your individual areas for improvement." },
        ],
        quote: "Let us support you on the way to your TOEFL score and your study abroad goals.",
    },

    sat: {
        slug: "sat",
        name: "SAT",
        fullName: "Scholastic Assessment Test",
        accepted: "Undergraduate admissions in the USA",
        metaTitle: "SAT Coaching in Hyderabad",
        metaDescription:
            "SAT coaching in Hyderabad at Uniplus Overseas — structured preparation, mock tests and personalized feedback for undergraduate admissions in the USA.",
        kicker: "SAT preparation",
        title: "SAT Coaching in Hyderabad",
        intro:
            "Prepare for the SAT with a structured program that builds your skills and confidence for undergraduate admissions in the USA.",
        highlights: ["Undergraduate admissions", "Mock tests", "Personalized feedback"],
        overview: [
            "Our program covers the SAT format and the skills it tests, with regular practice under test conditions and feedback after every mock.",
            "Your study plan is built around your strengths and weaknesses, so your time goes where it improves your score most.",
        ],
        sections: ["Reading & Writing", "Math"],
        coversHeading: "What our SAT program covers",
        covers: [
            { title: "Exam format", text: "A clear understanding of the SAT format and question types." },
            { title: "Core skills", text: "Focused teaching in reading, writing and math." },
            { title: "Test strategies", text: "Strategies for time management and accuracy." },
            { title: "Mock tests", text: "Practice tests that simulate the real test." },
            { title: "Personal feedback", text: "Feedback and guidance for your areas of improvement." },
        ],
        quote: "Let us help you prepare with confidence for your SAT and your undergraduate journey.",
    },

    gmat: {
        slug: "gmat",
        name: "GMAT",
        fullName: "Graduate Management Admission Test",
        accepted: "MBA programs worldwide",
        metaTitle: "GMAT Coaching in Hyderabad",
        metaDescription:
            "GMAT coaching in Hyderabad at Uniplus Overseas — structured preparation, mock tests and personalized coaching for MBA admissions worldwide.",
        kicker: "GMAT preparation",
        title: "GMAT Coaching in Hyderabad",
        intro:
            "Prepare for the GMAT with a structured program built to help you reach a competitive score for MBA and business programs.",
        highlights: ["MBA admissions", "Mock tests", "Personalized coaching"],
        overview: [
            "Our program covers the GMAT format and the quantitative and verbal skills it tests, with timed practice and feedback after every mock.",
            "Your study plan is tailored to your strengths and gaps, so you prepare efficiently while balancing work and study.",
        ],
        sections: ["Quantitative Reasoning", "Verbal Reasoning", "Data Insights"],
        coversHeading: "What our GMAT program covers",
        covers: [
            { title: "Exam format", text: "A clear understanding of the GMAT format and question types." },
            { title: "Core skills", text: "Focused teaching in quantitative, verbal and data skills." },
            { title: "Test strategies", text: "Strategies for time management and smart test-taking." },
            { title: "Mock tests", text: "Timed practice tests that simulate the real exam." },
            { title: "Personal feedback", text: "Personalized feedback and guidance to improve your score." },
        ],
        quote: "Let us help you reach a competitive GMAT score and move closer to your MBA goals.",
    },
};

export const TEST_ORDER: TestSlug[] = ["gre", "pte", "ielts", "toefl", "sat", "gmat"];

export function getTest(slug: string): TestContent | undefined {
    return (TESTS as Record<string, TestContent>)[slug];
}

/** Shared across every test. {test} is filled in by the page. */
export const COACH_STEPS = [
    { title: "Assess", text: "We assess your current level and your target {test} score." },
    { title: "Plan", text: "A customized study plan built around your strengths and weaknesses." },
    { title: "Practice", text: "Classes, study materials and mock tests that simulate the real exam." },
    { title: "Improve", text: "Feedback after every test until you are ready for exam day." },
] as const;

export const WHY_COACHING = [
    { icon: "users", title: "Experienced trainers", text: "Qualified instructors who know the exam format and strategies well." },
    { icon: "small", title: "Small batches", text: "More personal attention and constructive feedback for every student." },
    { icon: "mock", title: "Mock tests & feedback", text: "Regular tests that simulate the exam, with review sessions after each one." },
    { icon: "clock", title: "Flexible timings", text: "Scheduling options, including weekends and evenings." },
    { icon: "book", title: "Study materials", text: "Practice tests, exercises and materials for every section." },
    { icon: "wallet", title: "Competitive fees", text: "Priced so quality coaching stays accessible to a wide range of students." },
] as const;