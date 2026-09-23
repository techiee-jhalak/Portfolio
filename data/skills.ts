/**
 * Skills / Expertise Data
 * Source of truth: verified resume skills list and active GitHub repositories.
 * No invented technologies, no fake proficiency percentages.
 */

export interface ExpertiseCategory {
  /** Zero-padded display number */
  number: string;
  /** Short domain label */
  label: string;
  /** One-line editorial description */
  description: string;
  /** Verified skill names in this domain */
  skills: string[];
}

export const expertiseData: ExpertiseCategory[] = [
  {
    number: "01",
    label: "AI / ML",
    description: "Machine learning pipelines, model evaluation, and intelligent software systems.",
    skills: ["Python", "Scikit-learn", "HuggingFace Transformers", "Pandas", "Plotly", "Jupyter", "Streamlit"],
  },
  {
    number: "02",
    label: "NLP",
    description: "Text classification, sentiment analysis, transformer-based models, and language understanding.",
    skills: ["DistilBERT", "VADER", "PyPDF2", "HuggingFace Transformers", "Text Classification", "Sentiment Analysis"],
  },
  {
    number: "03",
    label: "FULL STACK",
    description: "End-to-end web development — from responsive interfaces to server-side APIs.",
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Streamlit"],
  },
  {
    number: "04",
    label: "PROGRAMMING",
    description: "Systems and application programming across compiled and interpreted languages.",
    skills: ["Python", "JavaScript", "C", "C++", "SQL"],
  },
  {
    number: "05",
    label: "CORE CS",
    description: "Foundational computer science theory underlying all engineering decisions.",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    number: "06",
    label: "TOOLS",
    description: "Development environment and workflow tooling used daily.",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Linux"],
  },
];
