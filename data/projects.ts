/**
 * Project Data
 * Source of truth: Jhalak's verified GitHub repositories and portfolio information.
 * No invented metrics, statistics, user counts, revenue, or awards.
 */

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription?: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  featured: boolean;
  year?: string | number;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string[];
  outcome?: string;
}

export const projectsData: Project[] = [
  {
    title: "SynapKeep AI",
    slug: "synapkeep-ai",
    shortDescription:
      "AI-powered customer churn intelligence and decision acceleration platform with predictive ML modeling.",
    detailedDescription:
      "SynapKeep AI is a machine learning application built to identify customer churn risk, surface data-driven retention insights, and help teams make faster, more informed decisions. The system processes structured customer data through predictive ML models and delivers results through an interactive Streamlit dashboard.",
    category: "AI / ML · Product",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly", "Machine Learning"],
    githubUrl: "https://github.com/techiee-jhalak/SynapKeep-AI",
    liveUrl: "https://synapkeep-ai.streamlit.app/",
    images: [],
    featured: true,
    year: "2024",
    problem:
      "Customer churn is expensive and difficult to predict. Most teams rely on lagging indicators rather than proactive, model-driven signals.",
    solution:
      "A Streamlit-powered ML interface that trains on customer data, evaluates churn probability at the individual level, and surfaces actionable retention recommendations.",
    features: [
      "Interactive data upload and preview",
      "Automated feature engineering and preprocessing",
      "Churn probability prediction with Scikit-learn",
      "Visual analytics dashboard with Plotly",
      "Exportable insights report",
    ],
  },
  {
    title: "Hybrid Sentiment Intelligence — Dynamic Fusion",
    slug: "sentiment-intelligence",
    shortDescription:
      "Dual-model NLP research pipeline combining fine-tuned DistilBERT with VADER lexicon scoring for code-mixed Hinglish sentiment classification.",
    detailedDescription:
      "A dual-model NLP system that combines DistilBERT (transformer fine-tuning) with VADER (lexicon-based analysis) to produce more robust, context-sensitive sentiment scores across diverse text domains including code-switched Hinglish. Designed as a research-grade pipeline with an interactive interface for experimentation.",
    category: "NLP · Research",
    technologies: ["Python", "Transformers", "DistilBERT", "VADER", "Hinglish NLP", "Streamlit", "PyPDF2"],
    githubUrl: "https://github.com/techiee-jhalak/Dynamic-Hybrid-Sentiment-Intelligence-System",
    liveUrl: "https://understand-the-signal.up.railway.app/",
    images: [],
    featured: true,
    year: "2024",
    problem:
      "Single-model sentiment approaches fail across diverse text types — transformer models underperform on short informal text while lexicon methods miss contextual nuance in longer documents.",
    solution:
      "A hybrid pipeline that routes inputs through both DistilBERT and VADER, then combines outputs using a weighted ensemble strategy calibrated to the input domain.",
    features: [
      "Dual-model inference: DistilBERT + VADER",
      "Code-mixed Hinglish sentiment evaluation",
      "Domain-adaptive scoring weights",
      "PDF ingestion via PyPDF2 for long-form document analysis",
      "Real-time confidence distribution",
    ],
  },
  {
    title: "FoundHer AI",
    slug: "foundher-ai",
    shortDescription:
      "AI-driven platform empowering women entrepreneurs with intelligent business modeling and contextual advisory.",
    detailedDescription:
      "FoundHer AI is a support platform for women entrepreneurs, combining AI-driven guidance with practical business tools. The platform uses intelligent language models to provide contextual advice across ideation, operations, and growth stages.",
    category: "AI / Full Stack",
    technologies: ["Python", "Streamlit", "Gemini", "AI / ML", "Venture Advisory"],
    githubUrl: "https://github.com/techiee-jhalak/FoundHer-AI",
    liveUrl: "https://found-her-ai-aq86.vercel.app/",
    images: [],
    featured: true,
    year: "2024",
    problem:
      "Women entrepreneurs face specific challenges in accessing relevant, personalised business mentorship and operational support at early stages.",
    solution:
      "An AI-driven platform that combines large language model capabilities with structured business frameworks to deliver contextual, actionable guidance.",
    features: [
      "AI-driven business advisory interface",
      "Context-aware conversation flow",
      "Modular tool sections for different business stages",
      "Streamlit frontend with responsive layout",
    ],
  },
  {
    title: "Mood Companion",
    slug: "mood-companion",
    shortDescription:
      "Interactive affective computing application combining structured daily mood telemetry with AI emotional support.",
    detailedDescription:
      "Mood Companion is a full-stack application that combines structured mood logging with AI-powered emotional support. Users can track their emotional states over time and receive personalized, context-aware responses.",
    category: "Full Stack · AI",
    technologies: ["JavaScript", "HTML/CSS", "Affective AI", "Data Analytics"],
    githubUrl: "https://github.com/techiee-jhalak/Mood-Companion",
    liveUrl: "https://techiee-jhalak.github.io/Mood-Companion/",
    images: [],
    featured: true,
    year: "2024",
    problem:
      "Many mental wellness tools are either too clinical or too generic to provide meaningful emotional support and self-awareness.",
    solution:
      "A companion application that combines lightweight mood tracking with AI-generated empathetic responses tailored to each user's reported emotional context.",
    features: [
      "Daily mood logging and trend visualization",
      "AI-powered contextual response system",
      "Emotional pattern analysis over time",
      "Clean, minimal interactive interface",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured);
}
