/**
 * Profile Data Model
 * Source of truth: Explicit user verification, GitHub, LinkedIn, and prompt specifications.
 * Note: Only verified information is populated. No precise GPS coordinates.
 */

export interface FocusArea {
  number: string;
  title: string;
  description: string;
}

export interface TechnicalIdentityGroup {
  category: string;
  tags: string[];
}

export interface AboutSectionData {
  statement: string;
  leadParagraph: string;
  secondaryParagraph: string;
  focusAreas: FocusArea[];
  technicalIdentity: TechnicalIdentityGroup[];
}

export interface Profile {
  name: string;
  headline: string;
  role: string;
  focus: string[];
  shortBio?: string;
  detailedBio?: string;
  avatarUrl?: string;
  location: string;
  email?: string;
  availability?: string;
  verifiedSources: {
    github: string;
    linkedin: string;
    resume?: string;
  };
  about: AboutSectionData;
}

export const profileData: Profile = {
  name: "Jhalak Omar",
  headline: "Computer Science Student · AI / ML & Full Stack Developer",
  role: "AI / ML & Full Stack Developer",
  focus: [
    "AI / ML",
    "NLP",
    "Full Stack Development",
    "Research",
    "Open Source",
  ],
  shortBio:
    "Building intelligent systems, exploring machine learning research, and shipping full-stack applications with engineering rigor.",
  detailedBio: undefined,
  avatarUrl: undefined,
  location: "Greater Lucknow Area, Uttar Pradesh, India",
  email: "jhalakomar2006@gmail.com",
  availability: "Available for work",
  verifiedSources: {
    github: "https://github.com/techiee-jhalak/",
    linkedin: "https://www.linkedin.com/in/jhalak-omar",
    resume: undefined,
  },
  about: {
    statement:
      "I build at the intersection of machine learning, software engineering, and research.",
    leadParagraph:
      "I am a Computer Science student and developer focused on AI/ML systems and full-stack development. I like understanding how complex algorithms operate from mathematical foundations to deployment, then engineering robust software around that understanding.",
    secondaryParagraph:
      "My work spans developing machine learning pipelines, natural language processing models, and responsive web platforms. When I am not experimenting with model architectures or analyzing data, I build open-source tools and ship functional prototypes.",
    focusAreas: [
      {
        number: "01",
        title: "AI / Machine Learning",
        description:
          "Designing neural models, evaluating predictive pipelines, and developing intelligent software systems.",
      },
      {
        number: "02",
        title: "Natural Language Processing",
        description:
          "Investigating text classification, sentiment analysis pipelines, embeddings, and generative language concepts.",
      },
      {
        number: "03",
        title: "Full Stack Architecture",
        description:
          "Constructing performant web applications, modern APIs, and clean, responsive user interfaces.",
      },
      {
        number: "04",
        title: "Research & Open Source",
        description:
          "Translating algorithmic research concepts into reproducible code and contributing to open developer repositories.",
      },
    ],
    technicalIdentity: [
      {
        category: "BUILD",
        tags: ["AI / ML", "NLP", "Full Stack", "APIs"],
      },
      {
        category: "RESEARCH",
        tags: ["NLP", "Sentiment Analysis", "AI Systems"],
      },
      {
        category: "COMMUNITY",
        tags: ["Open Source", "GitHub Archive", "Technical Documentation"],
      },
    ],
  },
};
