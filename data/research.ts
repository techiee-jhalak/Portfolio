/**
 * Research Data Model
 * Source of truth: Explicit verified research publication topics.
 * Strict adherence: No invented journal names, conferences, DOIs, citation counts, or rankings.
 */

export interface ResearchItem {
  number: string;
  title: string;
  description: string;
  researchArea: string;
  technologies: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const researchData: ResearchItem[] = [
  {
    number: "01",
    title: "Privacy-Preserving Authentication Using Zero-Knowledge Proof on Mobile",
    researchArea: "Cryptographic Privacy & Mobile Security",
    description:
      "Investigating zero-knowledge proof protocols engineered for resource-constrained mobile hardware to guarantee reliable identity verification without exposing cryptographic credentials.",
    technologies: [
      "Zero-Knowledge Proofs",
      "Cryptographic Verification",
      "Mobile Systems",
      "Privacy Engineering",
    ],
  },
  {
    number: "02",
    title: "Dynamic VADER-DistilBERT Hybrid for Tracking Real-Time Hinglish Sentiment Analysis",
    researchArea: "Natural Language Processing & Code-Mixed Linguistics",
    description:
      "A dual-tier sentiment classification architecture combining rule-based lexical scoring with transformer representations for fast, accurate tracking of code-switched Hinglish streams.",
    technologies: [
      "DistilBERT",
      "VADER",
      "HuggingFace Transformers",
      "Code-Mixed NLP",
      "PyTorch",
    ],
  },
  {
    number: "03",
    title: "A Hybrid Machine Learning Framework Integrating a Teacher Effectiveness Score for Intelligence Academic Performance Evaluation",
    researchArea: "Applied Machine Learning & Predictive Analytics",
    description:
      "A multi-model machine learning framework synthesizing granular teacher effectiveness metrics with student academic telemetry to evaluate and forecast institutional performance outcomes.",
    technologies: [
      "Supervised ML",
      "Feature Engineering",
      "Scikit-Learn",
      "Predictive Modeling",
    ],
  },
];
