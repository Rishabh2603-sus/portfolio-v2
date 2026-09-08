export const profile = {
  name: "Rishabh Sharma",
  role: "Aspiring Software & AI Engineer",
  tagline:
    "Crafting high-performance web experiences, applied AI systems, and native software with an obsessive focus on craft, typography, and speed.",
  location: "Chennai, India",
  email: "rishabh.exe26@gmail.com",
  phone: "+91 8072652048",
  status: "Available for internships & software engineering roles",
  stats: [
    { label: "Core Projects", value: "6+" },
    { label: "Hackathons & Challenges", value: "Top Finalist" },
    { label: "Community", value: "Google Dev Member" },
    { label: "DSA & Problem Solving", value: "300+ Solved" },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/Rishabh2603-sus" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rishabh-sharma-a/" },
    { label: "LeetCode", url: "https://leetcode.com/u/rishabhsharma2603" },
    { label: "HackerRank", url: "https://www.hackerrank.com/profile/rishabh_exe26" },
    { label: "Codeforces", url: "https://codeforces.com/profile/RishabhSharmaA" },
  ],
};

export const about = {
  quote: "“The details are not the details. They make the design.”",
  paragraphs: [
    "I'm a Computer Science and Engineering student at R.M.D Engineering College with a deep passion for building robust software systems, modern interactive interfaces, and applied AI applications.",
    "My engineering ethos sits at the intersection of systems efficiency and fluid interaction. Whether designing graph-based Anti-Money Laundering detection algorithms for national hackathons, fine-tuning multimodal vision agents, or engineering a turntable-inspired SwiftUI audio streamer backed by Python, I build with end-to-end polish and architectural clarity.",
    "Outside of code, I'm an active member of the Google Developer Program, a continuous competitive programmer on LeetCode & Codeforces, and a polyglot enthusiast reading and speaking English, Hindi, Tamil, with ongoing studies in French and Japanese.",
  ],
};

export interface Project {
  id: string;
  title: string;
  category: "ai-ml" | "fullstack" | "systems";
  year: string;
  badge?: string;
  summary: string;
  description: string;
  architecture: string[];
  metrics: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "aml-intelligence",
    title: "AML Graph Intelligence Platform",
    category: "ai-ml",
    year: "2026",
    badge: "Hackathon Highlight",
    summary:
      "AI-powered transaction graph intelligence platform to detect circular money flows, mule accounts, and fan-in/fan-out financial laundering networks in real-time.",
    description:
      "Engineered an end-to-end Anti-Money Laundering (AML) transaction analysis engine for digital payment networks. Models financial transfers as directed graphs to detect cycle topologies, transaction velocities, and pass-through ratios without data leakage. Features a hybrid scoring pipeline combining rule-based heuristics with XGBoost/LightGBM classifiers.",
    architecture: [
      "Directed graph construction with NetworkX & custom cycle bounding algorithms",
      "Feature engineering: Pass-through ratio, fan-in/fan-out velocity, and high-risk neighborhood scores",
      "FastAPI asynchronous backend with explainability engine returning human-readable audit reasoning",
      "Interactive graph canvas with custom node risk heatmaps",
    ],
    metrics: [
      "Sub-50ms inference on high-density transaction clusters",
      "Explainable reasoning generator across 8 laundering topologies",
      "Zero data leakage design with unlabelled inference compatibility",
    ],
    tags: ["Python", "FastAPI", "NetworkX", "XGBoost", "React", "Graph ML", "Cytoscape.js"],
    githubUrl: "https://github.com/Rishabh2603-sus",
    accentColor: "#e67e22",
  },
  {
    id: "tidal-music",
    title: "Tidal — macOS Turntable Player",
    category: "systems",
    year: "2025",
    badge: "Native macOS",
    summary:
      "A vinyl-turntable inspired macOS music player featuring real-time vinyl physics, audio streaming, and seamless search over a local Python server.",
    description:
      "Crafted an interactive vinyl-turntable music client in SwiftUI that interfaces with an asynchronous Python streaming server. Designed from ground up in Figma with attention to physics-based needle placement, rotational inertia, scrub gestures, and real-time audio buffer streaming.",
    architecture: [
      "Custom SwiftUI canvas with rotational inertia and physics-driven drag gestures",
      "Python REST API streaming server with asynchronous chunked audio transport",
      "Low-latency search indexing and local audio metadata parsing engine",
      "Seamless macOS menu bar controls & background audio session handling",
    ],
    metrics: [
      "60fps smooth turntable rotation and fluid gesture feedback",
      "Sub-150ms buffer-to-ear latency over local streaming protocol",
    ],
    tags: ["Swift", "SwiftUI", "Python", "REST API", "macOS", "Figma", "Audio Engine"],
    githubUrl: "https://github.com/Rishabh2603-sus",
    accentColor: "#3498db",
  },
  {
    id: "disaster-response-ai",
    title: "AIDRS — AI Disaster Preparedness",
    category: "ai-ml",
    year: "2026",
    badge: "Smart Disaster AI",
    summary:
      "Predictive multi-signal emergency response system turning rainfall, river level, and terrain sensor telemetry into actionable evacuation routing.",
    description:
      "Developed a comprehensive disaster intelligence ecosystem connecting citizens, ML inference pipelines, and emergency authority command centers. Utilizes risk-weighted A* and Dijkstra pathfinding to calculate hazard-free evacuation routes and optimizes shelter capacity dynamically during flood and storm events.",
    architecture: [
      "Scikit-learn multi-source signal fusion (weather, radar, terrain, river height)",
      "Risk-weighted topological pathfinding (A* / Dijkstra) routing around danger zones",
      "Real-time citizen SOS telemetry dispatch over WebSocket protocols",
      "Authority command deck with live geo-spatial danger heatmaps",
    ],
    metrics: [
      "92% flood prediction accuracy 12–24 hours ahead of cresting",
      "15% faster safe-route convergence compared to standard non-hazard maps",
      "Sub-100ms citizen alert dispatch latency",
    ],
    tags: ["Python", "Scikit-Learn", "FastAPI", "Leaflet", "Supabase", "Geo-Spatial", "WebSockets"],
    githubUrl: "https://github.com/Rishabh2603-sus",
    accentColor: "#2ecc71",
  },
  {
    id: "visionchat-ai",
    title: "VisionChat — Multimodal AI Studio",
    category: "fullstack",
    year: "2026",
    badge: "Multimodal Agent",
    summary:
      "High-speed multimodal intelligence suite supporting multi-image OCR, scene decomposition, and fluid conversation streaming.",
    description:
      "A fast, dark-luxe conversational visual agent capable of ingesting high-res photos, architectural diagrams, and document scans. Features client-side image compression, real-time token streaming, drag-and-drop batch ingestion, and responsive markdown code rendering.",
    architecture: [
      "Direct streaming architecture with asynchronous buffer flushing",
      "Client-side image normalization and base64 memory optimization",
      "Adaptive dark-room UI with fluid keyboard navigation and paste handlers",
    ],
    metrics: [
      "Zero external UI library bloat — pure crafted micro-CSS",
      "Under 200ms time-to-first-token streaming feedback",
    ],
    tags: ["React", "TypeScript", "Anthropic / Gemini API", "Multimodal", "CSS-in-JS"],
    githubUrl: "https://github.com/Rishabh2603-sus",
    accentColor: "#9b59b6",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "C++", level: "Advanced", highlight: true },
      { name: "Python", level: "Advanced", highlight: true },
      { name: "Java", level: "Proficient" },
      { name: "JavaScript / TypeScript", level: "Advanced", highlight: true },
      { name: "Swift", level: "Intermediate" },
      { name: "C", level: "Proficient" },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: "layout",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "SwiftUI", level: "Intermediate", highlight: true },
      { name: "Flutter", level: "Intermediate" },
      { name: "HTML5 / Canvas / Modern CSS", level: "Advanced" },
      { name: "Android SDK", level: "Intermediate" },
    ],
  },
  {
    title: "AI, ML & Data",
    icon: "cpu",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: "Proficient", highlight: true },
      { name: "NetworkX / Graph Algorithms", level: "Advanced", highlight: true },
      { name: "OpenCV & MediaPipe", level: "Intermediate" },
      { name: "Gemini & LLM APIs", level: "Proficient", highlight: true },
      { name: "NumPy & Pandas", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: "database",
    skills: [
      { name: "Node.js & Express", level: "Proficient" },
      { name: "FastAPI / Python", level: "Advanced", highlight: true },
      { name: "REST APIs & WebSockets", level: "Advanced" },
      { name: "MongoDB & MySQL", level: "Proficient" },
      { name: "Supabase & Firebase", level: "Proficient" },
      { name: "Docker & AWS Basics", level: "Intermediate" },
    ],
  },
];

// Retain backward-compatible skillGroups for any simple view
export const skillGroups = skillCategories.map((c) => ({
  label: c.title,
  items: c.skills.map((s) => s.name),
}));

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Active Member & Contributor",
    org: "Google Developer Program",
    period: "2024 — Present",
    location: "Global / Community",
    badge: "Community",
    description:
      "Actively participate in developer workshops, explore modern Google Cloud & Gemini AI tooling, and collaborate on cutting-edge open-source software patterns.",
    bullets: [
      "Engage in developer labs on GenAI architectures, Vertex AI, and modern web standards",
      "Collaborate with engineering peers on open-source community challenges and hackathon blueprints",
    ],
  },
  {
    id: "exp-2",
    role: "Certified Software Engineer",
    org: "HackerRank Certification",
    period: "2024",
    location: "Credential",
    badge: "Certification",
    description:
      "Rigorous problem-solving assessment validating deep competency in algorithms, data structures, SQL, and software design fundamentals.",
    bullets: [
      "Achieved verified credentials in problem solving and core software engineering",
      "Active problem solver with 300+ problems solved across LeetCode, Codeforces, and HackerRank",
    ],
  },
  {
    id: "exp-3",
    role: "B.E. in Computer Science and Engineering",
    org: "R.M.D Engineering College",
    period: "2025 — 2029",
    location: "Chennai, India",
    badge: "Academic",
    description:
      "Focused on systems design, algorithmic complexity, distributed architectures, database internals, and computer networks.",
    bullets: [
      "Current CGPA: 7.5 / 10.0",
      "Coursework: Data Structures, OOP, Operating Systems, DBMS, Networks, and Distributed Systems",
    ],
  },
];
