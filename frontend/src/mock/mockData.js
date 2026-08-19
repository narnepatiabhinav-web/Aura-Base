export const subjects = [
  {
    id: "maths",
    name: "Mathematics",
    color: "#8B5CF6",
    icon: "📐",
    description: "Calculus, Linear Algebra, Statistics & Differential Equations",
    fileCount: 4,
  },
  {
    id: "physics",
    name: "Physics",
    color: "#22D3EE",
    icon: "⚛️",
    description: "Quantum Mechanics, Electrodynamics & Thermodynamics",
    fileCount: 3,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    color: "#F59E0B",
    icon: "🧪",
    description: "Organic Synthesis, Physical Chemistry & Molecular Dynamics",
    fileCount: 5,
  },
];

export const mockBooks = [
  {
    id: "b1",
    title: "Advanced Engineering Mathematics",
    author: "Erwin Kreyszig",
    subject: "Maths",
    pages: 1280,
    coverColor: "linear-gradient(135deg, #8B5CF6 0%, #C026D3 100%)",
    summary: "Comprehensive guide covering complex analysis, differential equations, and linear algebra.",
  },
  {
    id: "b2",
    title: "Quantum Physics & Mechanics",
    author: "David J. Griffiths",
    subject: "Physics",
    pages: 512,
    coverColor: "linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)",
    summary: "Fundamental concepts of wave mechanics, Hilbert space, perturbation theory and spin.",
  },
  {
    id: "b3",
    title: "Organic Chemistry Principles",
    author: "Paula Yurkanis Bruice",
    subject: "Chemistry",
    pages: 1344,
    coverColor: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    summary: "Mechanism-based approach to organic chemical reactions, synthesis, and structure.",
  },
];

export const mockHistory = [
  {
    id: "h1",
    query: "What is Schrodinger's wave equation?",
    timestamp: "10 mins ago",
    subject: "Physics",
    preview: "The time-dependent Schrödinger equation describes how the quantum state of a physical system changes with time...",
  },
  {
    id: "h2",
    query: "Derive Fourier Transform formula",
    timestamp: "1 hour ago",
    subject: "Maths",
    preview: "The continuous Fourier transform converts a function of time into a function of frequency...",
  },
  {
    id: "h3",
    query: "Explain Sn2 vs Sn1 substitution mechanisms",
    timestamp: "Yesterday",
    subject: "Chemistry",
    preview: "SN1 is a two-step unimolecular substitution whereas SN2 is a single-step concerted bimolecular reaction...",
  },
];

export const mockMedia = {
  reading: [
    { id: "r1", title: "Neural Networks in Calculus Optimization", author: "Dr. Elena Rostova", duration: "12 min read" },
    { id: "r2", title: "Thermodynamics in Astrobiology", author: "Prof. Alan Vance", duration: "18 min read" },
  ],
  voiceCast: [
    { id: "v1", title: "AI Deep Dive: Quantum Computing Breakdown", host: "Aura Neural Host", duration: "14:20" },
    { id: "v2", title: "Linear Algebra & Vector Embeddings Explained", host: "Aura Math Studio", duration: "09:45" },
  ],
  podcast: [
    { id: "p1", title: "Episode 42: The Future of Document AI & Synthesis", listeners: "4.8k", duration: "32:10" },
    { id: "p2", title: "Episode 43: Resolving Complex Partial Differential Equations", listeners: "3.2k", duration: "25:40" },
  ],
};

