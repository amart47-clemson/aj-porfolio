export const site = {
  name: "Anthony Joseph Martino Jr.",
  major: "Computer Information Systems Major",
  minor: "Minor in Cybersecurity",
  bio: "Computer Information Systems major at Clemson University with a Cybersecurity minor and hands-on experience building full-stack web applications, REST APIs, and relational databases. AWS Cloud Practitioner Certified. Looking for entry-level software or web development roles.",
  email: "martinoaj42@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/anthony-martino-733185295",
  resume: "/resume.pdf",
};

export const typewriterRoles = [
  "Full-Stack Developer",
  "Cloud Engineer",
  "Cybersecurity Enthusiast",
  "AWS Cloud Practitioner",
  "Problem Solver",
];

export const heroStats = [
  { value: "5+", label: "Projects Deployed" },
  { value: "2", label: "Summers Industry Experience" },
  { value: "AWS", label: "Certified" },
  { value: "3.42", label: "GPA" },
];

export const about = {
  headshotSrc: "/headshot.png",
  text: "I'm Anthony Joseph Martino Jr., a Computer Information Systems graduate from Clemson University with a minor in Cybersecurity and an AWS Cloud Practitioner certification. I've spent the last two summers working in IT support and corporate training at Charleston Water System, and I've built full-stack apps ranging from multiplayer games to intrusion detection tools. I'm currently looking for entry-level roles in software development, cloud, or DevOps where I can keep growing as a developer.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "StudyAI — AI Study Platform",
    tagline:
      "An AI-powered study platform that converts uploaded PDFs into summaries, flashcards, quizzes, and a RAG-powered chat assistant with natural language controls.",
    description:
      "Built a full-stack AI study platform where users upload any PDF or paste text and instantly get an AI-generated summary, a full flashcard deck with mastery tracking, a graded quiz with topic breakdown, and a chat assistant grounded in their document via a RAG pipeline. The chat understands natural language commands — users can say \"make the quiz harder\", \"add 10 more flashcards about chapter 2\", or \"switch to true/false format\" and the app figures out exactly what to do using an 11-intent LLM classifier with confidence thresholds.",
    highlights: [
      "RAG pipeline using OpenAI embeddings and pgvector cosine similarity search",
      "11-intent LLM classifier with confidence-based clarifying fallbacks",
      "Flashcard mastery tracking (I knew this / Still learning)",
      "Quiz results dashboard with letter grade and topic breakdown",
      "Dynamic content scaling based on document length",
      "Flask backend on Render, React frontend on Vercel, PostgreSQL on Neon",
    ],
    tags: [
      "Python",
      "Flask",
      "React",
      "OpenAI API",
      "PostgreSQL",
      "pgvector",
      "Neon",
      "Render",
      "Vercel",
    ],
    repo: "https://github.com/amart47-clemson/StudyAI",
    live: "https://study-ai-murex-ten.vercel.app",
  },
  {
    title: "Battleship Radar Command",
    description:
      "Full-stack multiplayer Battleship game with a REST API backend, PostgreSQL database, and vanilla JS frontend. Features server-side move validation, SQL injection prevention, and real-time game state sync via polling. Deployed live on Render.",
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "NeonDB",
      "JavaScript",
      "HTML/CSS",
      "Render",
    ],
    repo: "https://github.com/sincoff/FINALPROJECT3750",
  },
  {
    title: "Real-Time Network Intrusion Visualization & DDoS Simulation",
    description:
      "Open-source intrusion detection tool that monitors live network traffic and detects volumetric DDoS attacks in real time. Visualizes geographic origins of attacking IPs on an interactive map. Deployed across two sandboxed Ubuntu VMs.",
    tags: ["Python", "Flask", "Scapy", "Leaflet.js", "Linux", "Ubuntu"],
    repo: "https://github.com/sincoff/network-ids-dashboard",
  },
  {
    title: "Driver Incentive & Rewards Program",
    description:
      "Multi-role web app where sponsors award points to drivers for purchases. Features role-based access control, TOTP-based MFA, eBay product integration, shopping cart, audit logging, and CSV/PDF reporting. Deployed on AWS EC2.",
    tags: [
      "Django",
      "Python",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "eBay API",
      "AWS EC2",
      "Azure DevOps",
    ],
    repo: "https://github.com/yourusername/driver-incentive-rewards",
  },
  {
    title: "Real-Time Collaborative Code Editor",
    description:
      "A real-time collaborative code editor where multiple users can join a shared room and edit the same code simultaneously. Features live cursor tracking with unique colors and usernames, syntax highlighting for JavaScript, Python, and HTML, language sync across all users, a live presence sidebar, and a read-only share link mode. Deployed on Render.",
    tags: [
      "Node.js",
      "Express",
      "Socket.io",
      "Monaco Editor",
      "React",
      "Render",
    ],
    repo: "https://github.com/amart47-clemson/Personal/tree/main/collab-editor",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and built a personal portfolio from scratch with a futuristic professional aesthetic. Features a typewriter hero animation, animated project carousel, custom orange glowing cursor, Devicon tech stack icons, AWS cert badge, and a responsive layout optimized for recruiters and hiring managers. Deployed on Render.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Render"],
    repo: "https://github.com/amart47-clemson/aj-porfolio",
  },
  {
    title: "Threat Intelligence Dashboard",
    tagline: "Real-time cybersecurity threat monitoring platform",
    description:
      "Built a full-stack threat intelligence platform that ingests live IOC data from AlienVault OTX and AbuseIPDB, enriches indicators with geolocation and confidence scoring, and visualizes threats on an interactive world map. Features an automated ingestion pipeline, custom threat scoring algorithm, and an analyst-style dashboard with live feed ticker, donut chart breakdowns, and animated severity indicators.",
    highlights: [
      "Automated threat feed ingestion from OTX and AbuseIPDB on a 30/60 minute scheduler",
      "Custom IOC scoring algorithm with severity classification (Low / Medium / High / Critical)",
      "Interactive Leaflet world map with severity-colored glowing markers",
      "Manual IOC lookup with live API enrichment and cache detection",
      "CSV export, debounced search, pagination, and expandable score history charts",
      "Deployed and live on Render with PostgreSQL backend",
    ],
    tags: [
      "Python",
      "Flask",
      "PostgreSQL",
      "React",
      "Leaflet.js",
      "Recharts",
      "APScheduler",
      "Docker",
      "Render",
    ],
    repo: "https://github.com/amart47-clemson/Threat-Intelligence-Dashboard/tree/main",
    live: "https://threat-intel-frontend-q00q.onrender.com",
  },
];

export type SkillIcon = {
  name: string;
  iconClass?: string;
  imageUrl?: string;
  emoji?: string;
  fallback?: string;
  textOnly?: boolean;
};

export type SkillIconCategory = {
  category: string;
  skills: SkillIcon[];
};

export const skillIconCategories: SkillIconCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "C", iconClass: "devicon-c-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "HTML5", iconClass: "devicon-html5-plain colored" },
      { name: "CSS3", iconClass: "devicon-css3-plain colored" },
      { name: "SQL", fallback: "SQL" },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      {
        name: "OpenAI API (GPT-4o-mini, embeddings)",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
      },
      { name: "RAG pipelines", emoji: "🧠" },
      {
        name: "pgvector",
        iconClass: "devicon-postgresql-plain colored",
      },
      { name: "LLM prompt engineering", emoji: "⚡" },
      { name: "Intent classification", emoji: "🎯" },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express", iconClass: "devicon-express-original colored" },
      { name: "Django", iconClass: "devicon-django-plain colored" },
      { name: "Flask", iconClass: "devicon-flask-original colored" },
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-original" },
      { name: "Postman", fallback: "Pm" },
      { name: "Bash", iconClass: "devicon-bash-plain colored" },
      { name: "Vite", iconClass: "devicon-vitejs-plain colored" },
      {
        name: "Cursor",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/cursor-2.svg",
      },
      {
        name: "Claude",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/claude-ai-icon.svg",
      },
      {
        name: "ChatGPT",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        iconClass: "devicon-amazonwebservices-plain-wordmark colored",
      },
      { name: "Azure DevOps", iconClass: "devicon-azure-plain colored" },
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      { name: "Linux", iconClass: "devicon-linux-plain colored" },
      { name: "Ubuntu", iconClass: "devicon-ubuntu-plain colored" },
      { name: "Wireshark", fallback: "Ws" },
    ],
  },
];

export type Certification = {
  name: string;
  date: string;
  badgeUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    date: "January 2026",
    badgeUrl:
      "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    name: "JavaScript Certification (Simplilearn)",
    date: "February 2025",
  },
];

export const education = {
  degree: "BS in Computer Information Systems",
  minor: "Minor in Cybersecurity",
  school: "Clemson University",
  graduation: "May 2026",
  gpa: "3.42",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Corporate Trainer",
    company: "Charleston Water System",
    period: "June 2025 – August 2025",
    description:
      "Assisted the corporate trainer in coordinating and presenting IT training on Microsoft platforms including Office, Teams, and OneDrive, as well as financial management and customer service tools.",
  },
  {
    role: "IT Intern",
    company: "Charleston Water System",
    period: "May 2024 – August 2024",
    description:
      "Assisted IT technicians with hardware installation, computer troubleshooting, and responding to associate IT questions.",
  },
];
