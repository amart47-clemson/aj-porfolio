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
  { value: "3+", label: "Projects Deployed" },
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
  description: string;
  tags: string[];
  repo: string;
};

export const projects: Project[] = [
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
];

export type SkillIcon = {
  name: string;
  iconClass?: string;
  fallback?: string;
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
