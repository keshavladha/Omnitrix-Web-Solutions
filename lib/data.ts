import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Aperture,
  Award,
  BadgeCheck,
  BarChart3,
  Braces,
  Brain,
  Briefcase,
  Clock,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Eye,
  FileText,
  Gauge,
  Github,
  Globe2,
  HelpCircle,
  Home,
  Layers,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TerminalSquare,
  TrendingUp,
  Users,
  Utensils,
  Zap,
  ZapIcon,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { title: "Web Design", copy: "Immersive digital experiences crafted with pixel perfection and narrative flow.", icon: Globe2 },
  { title: "Software Development", copy: "Robust, scalable backends and intelligent algorithms tailored for growth.", icon: BarChart3 },
  { title: "UI/UX Design", copy: "User-centric journeys mapped through technical psychology and behavioral data.", icon: Sparkles },
  { title: "Cloud Architecture", copy: "Delivering low-latency secure container networks and automated deployment pipelines.", icon: ShieldCheck },
  { title: "Quantum Automation", copy: "Unified developer systems, secure backend triggers, and data indexers.", icon: Layers },
  { title: "Fintech Systems", copy: "High-concurrency secure payment gateways and encrypted ledger integrations.", icon: ShoppingBag },
  { title: "Security & Auditing", copy: "Vulnerability scanning, identity management systems, and data shielding.", icon: Sparkles },
  { title: "Maintenance & telemetry", copy: "Continuous health tracking, system performance reviews, and uptime support.", icon: ShieldCheck },
];

export const techStack = ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "MongoDB", "Framer Motion"];

export const projects = [
  {
    title: "Project Zenith: Global Hub",
    category: "Fintech System",
    copy: "Redesigning the future of algorithmic trading platforms for high-frequency institutional markets.",
    tags: ["Next.js", "React", "Turbopack"],
  },
  {
    title: "NEON-CORE ARCHIVE",
    category: "Data Platform",
    copy: "Immersive real-time telemetry visualizer built for global shipping networks and industrial intelligence.",
    tags: ["Three.js", "WebSocket", "Tailwind"],
  },
  {
    title: "QUANTUM FLOW",
    category: "Cloud Native",
    copy: "Distributed microservices automation suite designed to optimize transaction speed and ledger storage.",
    tags: ["Node.js", "Docker", "MongoDB"],
  },
];

export const reasons = [
  { label: "01", value: "Obsidian Base Tiers", icon: Sparkles },
  { label: "02", value: "Layered Glassmorphism", icon: BadgeCheck },
  { label: "03", value: "Meticulous Grids", icon: Smartphone },
  { label: "04", value: "Atmospheric Lighting", icon: Zap },
  { label: "05", value: "Magnetic Interactions", icon: MessageSquare },
  { label: "06", value: "12ms Core Latency", icon: ShieldCheck },
];

export const testimonials = [
  {
    quote: "OMNITRIX transformed our legacy fintech portal into a modern powerhouse. Their understanding of security and performance is unmatched in the industry.",
    name: "Marcus Thorne",
    role: "CTO, Vertex Finance",
  },
  {
    quote: "The Cinematic Digital Craft design system they built for us isn't just beautiful—it reduced our internal development iteration time by 40%.",
    name: "Elena Rodriguez",
    role: "Head of Product, Nova SaaS",
  },
  {
    quote: "Scaling our database to 1M+ active telemetry nodes was a breeze thanks to the cloud architecture engineered by OMNITRIX. Zero downtime during our launch.",
    name: "David Chen",
    role: "Founder, Quantum Logistics",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=+917027340360&text=Hi,%20I%27d%20like%20to%20engineer%20a%20futuristic%20web%20app.", icon: MessageSquare },
  { label: "Portfolio", href: "#projects", icon: Globe2 },
  { label: "Contact", href: "#contact", icon: Activity },
];

export const caseStudies = [
  {
    title: "NaXen India",
    category: "B2B Export System",
    description: "A premium corporate product visualizer designed for B2B procurement pipelines and lead capture forms.",
    duration: "5 days",
    icon: Briefcase,
    tags: ["Next.js", "Product Catalog", "Lead Capture"],
    metrics: [
      { value: "5 Days", label: "Delivery Time" },
      { value: "+120%", label: "Enquiry Conversions" },
      { value: "98%", label: "Mobile Speed Rating" },
    ],
    link: "/case-studies/naxenindia",
  },
  {
    title: "Sirsa Dental Clinic",
    category: "Healthcare System",
    description: "A fast, fully optimized healthcare portal featuring local patient appointment flows and local SEO schema routing.",
    duration: "6 days",
    icon: Activity,
    tags: ["Next.js", "Local SEO", "WhatsApp Scheduler"],
    metrics: [
      { value: "+180%", label: "Appt Bookings" },
      { value: "0.45s", label: "First Input Delay" },
      { value: "#1 Spot", label: "Google Local Rank" },
    ],
    link: "/case-studies/sirsadental",
  },
  {
    title: "Vertex Algorithmic Portal",
    category: "Fintech System",
    description: "Re-engineering a legacy financial registry into an immersive, real-time transaction ledger built with WebSockets and Next.js.",
    duration: "5 days",
    icon: Shield,
    tags: ["Next.js", "WebSockets", "Tailwind"],
    metrics: [
      { value: "99.99%", label: "Uptime Delivered" },
      { value: "12ms", label: "Api Latency" },
      { value: "2.1s", label: "First Content Paint" },
    ],
    link: "/case-studies",
  },
  {
    title: "Neon-Core Telemetry Visualizer",
    category: "Data Platform",
    description: "An immersive, hardware-accelerated 3D visualizer to track and analyze real-time shipping cargo data worldwide.",
    duration: "4 days",
    icon: Utensils,
    tags: ["Three.js", "TailwindCSS", "Node.js"],
    metrics: [
      { value: "40%", label: "Throughput Boost" },
      { value: "200k+", label: "Daily Data Nodes" },
      { value: "4.9★", label: "Developer Rating" },
    ],
    link: "/case-studies",
  },
  {
    title: "Quantum Flow Automation",
    category: "Cloud Native",
    description: "Automating background server scaling, transaction ledgers, and database query caching for enterprise SaaS clients.",
    duration: "6 days",
    icon: Home,
    tags: ["Docker", "MongoDB", "AWS DevOps"],
    metrics: [
      { value: "99.9%", label: "System Uptime" },
      { value: "30%", label: "Cost Reduction" },
      { value: "15ms", label: "Query Latency" },
    ],
    link: "/case-studies",
  },
  {
    title: "Aether Predictive Engine",
    category: "Artificial Intel",
    description: "Designing a clean, high-contrast dashboard to showcase machine learning market projections and predictive analytical graphs.",
    duration: "7 days",
    icon: ShoppingBag,
    tags: ["Python", "TensorFlow", "React"],
    metrics: [
      { value: "50", label: "Models Listed" },
      { value: "35%", label: "Accuracy Gain" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    link: "/case-studies",
  },
];

export const blogPosts = [
  {
    title: "How Algorithm Trading Portals Optimize Real-time Data Loads",
    excerpt: "Discover the specific backend and front-end architectures required to display live data streams at 60fps.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Jan 15, 2026",
    icon: Globe2,
    tags: ["Next.js", "WebSockets", "Data Pipelines"],
  },
  {
    title: "Designing for High-Performance Developer Consoles",
    excerpt: "Core styling strategies, light accents, and typography rhythm that prevent eye strain and improve readability.",
    category: "UI/UX Design",
    readTime: "7 min read",
    date: "Jan 10, 2026",
    icon: Shield,
    tags: ["Glassmorphism", "Console UI", "Typography"],
  },
  {
    title: "Architecting a Resilient MongoDB Cluster on AWS Cloud",
    excerpt: "Best practices for sharding, encryption at rest, automated replica sets, and query response optimization.",
    category: "Database",
    readTime: "5 min read",
    date: "Jan 5, 2026",
    icon: BarChart3,
    tags: ["MongoDB", "DevOps", "Database Routing"],
  },
];

export const categories = ["All", "Engineering", "UI/UX Design", "Database", "Performance"];

export const pricingPlans = [
  {
    name: "Basic Console",
    description: "Perfect for single-purpose web platforms",
    price: "₹15,000",
    period: "/deploy",
    icon: Rocket,
    popular: false,
    cta: "Deploy Now",
    features: [
      "Custom single-page application",
      "Obsidian dark canvas & grid overlay",
      "Tech cyan custom accents",
      "Interactive form trigger",
      "99.9% performance uptime",
      "2-3 days delivery",
      "1 week system support",
    ],
  },
  {
    name: "Enterprise Core",
    description: "Most popular for growing SaaS apps",
    price: "₹35,000",
    period: "/deploy",
    icon: TrendingUp,
    popular: true,
    cta: "Deploy Core",
    features: [
      "5-page full developer system",
      "Glassmorphic cards & tilt animations",
      "Continuous sliding ticker marquees",
      "Advanced database configurations",
      "High-velocity query routes",
      "5-7 days delivery",
      "1 month core support",
    ],
  },
  {
    name: "Quantum System",
    description: "Complete custom architecture build",
    price: "₹65,000",
    period: "/deploy",
    icon: ZapIcon,
    popular: false,
    cta: "Initiate System",
    features: [
      "Up to 10 high-performance views",
      "Advanced 3D scroll animations",
      "Secure custom checkout portals",
      "Automated CI/CD container setups",
      "Complete SEO telemetry models",
      "7-10 days delivery",
      "2 months priority support",
    ],
  },
];

export const addOns = [
  {
    name: "Priority Pipeline",
    description: "System deployment in under 48 hours",
    price: "+₹5,000",
    icon: Clock,
  },
  {
    name: "Advanced Telemetry",
    description: "Live health dashboards and tracking",
    price: "₹8,000",
    icon: MessageSquare,
  },
  {
    name: "Console Branding",
    description: "Unique tech logos and custom icons",
    price: "₹10,000",
    icon: Palette,
  },
  {
    name: "Extra Node Views",
    description: "Additional complex application views",
    price: "₹5,000/view",
    icon: Layers,
  },
];

export const processSteps = [
  {
    phase: "Discovery",
    number: "01",
    title: "System Architecture Mapping",
    description: "Deep dive into your workflow logic and transaction requirements. We specify the full technical blueprint before coding.",
    icon: MessageSquare,
    deliverables: ["Architecture Blueprint", "Tech Stack Config", "Uptime Targets", "Timeline Specifications"],
  },
  {
    phase: "Design",
    number: "02",
    title: "Cinematic Interface Design",
    description: "We assemble high-contrast glassmorphic design layouts tailored around absolute brand trust and high-end aesthetics.",
    icon: Palette,
    deliverables: ["Interactive Prototypes", "Theme Palette Specs", "Responsive Layout Models", "Feedback Review"],
  },
  {
    phase: "Development",
    number: "03",
    title: "High-Performance Engineering",
    description: "We code your core architecture with Next.js, Framer Motion springs, and ultra-fast backend engines.",
    icon: Code2,
    deliverables: ["High-speed Codebase", "Telemetry Integration", "Security Enforcements", "Database Schemes"],
  },
  {
    phase: "Review",
    number: "04",
    title: "Stress Testing & Audits",
    description: "We verify query speeds, optimize core vitals, and stress-test pipelines against high concurrent traffic loads.",
    icon: Eye,
    deliverables: ["Staging Preview", "Speed Benchmark Audits", "Vulnerability Logs", "Client Authorization"],
  },
  {
    phase: "Launch",
    number: "05",
    title: "Console Deployment",
    description: "We push to production, install secure SSL, configure custom routes, and verify telemetry.",
    icon: Rocket,
    deliverables: ["DNS Routing Setup", "SSL Security Certificate", "Live Console Deployment", "30-day Core Audit"],
  },
];

export const values = [
  {
    title: "Absolute Transparency",
    description: "Zero hidden dependencies, zero unexpected lag. Complete clarity at every terminal step.",
    icon: MessageSquare,
  },
  {
    title: "Meticulous Quality",
    description: "We never cut corners. Clean, compile-safe TypeScript with rigorous telemetry logging.",
    icon: ShieldCheck,
  },
  {
    title: "Velocity & Focus",
    description: "Ultra-fast execution cycles. We prioritize high-impact capabilities first.",
    icon: Zap,
  },
  {
    title: "True Engineering",
    description: "We build systems, not just websites. Highly scalable solutions crafted to dominate.",
    icon: Users,
  },
];

export const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    description: "Technical details about our system builds",
    icon: HelpCircle,
    questions: [
      { q: "What types of web systems do you build?", a: "We engineer high-performance SaaS platforms, real-time dashboards, Web3 registries, and predictive analytics consoles for elite brands." },
      { q: "Do you integrate custom database structures?", a: "Yes. We set up encrypted MongoDB clusters, high-concurrency PostgreSQL relational systems, and telemetry cache ledgers." },
      { q: "How quickly can you deploy a system?", a: "Standard developer consoles go live in 5-10 days. Advanced systems with custom telemetry require 2-3 weeks." },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Invoices",
    description: "Billing details and payment terms",
    icon: DollarSign,
    questions: [
      { q: "What are the payment terms?", a: "50% upfront to initiate system design, 50% upon successful stress-test and deployment. Secure UPI/Bank routing available." },
      { q: "Are there monthly maintenance costs?", a: "We offer priority maintenance tiers that include monthly health reports, system scaling adjustments, and security patches." },
    ],
  },
];

export const mainNavItems = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Pay Online", href: "/payments" },
];

export const resourceDropdownItems = [
  { label: "Our Process", href: "/process", desc: "How we engineer premium platforms.", iconName: "Layers" },
  { label: "Insights Blog", href: "/blog", desc: "Enterprise telemetry & UX tips.", iconName: "Sparkles" },
  { label: "Help & FAQ", href: "/faq", desc: "Answers on databases, DevOps, pipelines.", iconName: "HelpCircle" },
  { label: "About Us", href: "/about", desc: "Meet the engineers behind the core lab.", iconName: "Users" },
];

export const industries = [
  {
    name: "Fintech Systems",
    description: "Highly-concurrent transaction platforms, secure payment routing, and real-time ledger trackers.",
    clients: 12,
    gradient: "from-blue-500/30 to-cyan-600/20",
    icon: Utensils,
    solutions: ["Transaction Ledgers", "Payment APIs", "Identity Registries", "Risk Analytics", "Secured Handshakes"],
    metrics: [
      { value: "30+", label: "Deployments Active" },
      { value: "12ms", label: "Average Latency" },
    ],
  },
  {
    name: "Enterprise SaaS & Telemetry",
    description: "Custom data visualization consoles, background telemetry indexers, and automated notification triggers.",
    clients: 15,
    gradient: "from-cyan-500/30 to-blue-600/20",
    icon: Shield,
    solutions: ["Data Pipelines", "Performance Graphs", "User Directories", "Telemetry Indexers", "Security Audits"],
    metrics: [
      { value: "50+", label: "Systems Supported" },
      { value: "40%", label: "Uptime Increase" },
    ],
  },
];

export const companyStats = [
  { value: "50+", label: "Systems Deployed", icon: Briefcase },
  { value: "12+", label: "Global Clients", icon: Users },
  { value: "Lab", label: "Core HQ", icon: MapPin },
  { value: "3+", label: "Years Engineering", icon: Clock },
];

export const timeline = [
  { year: "2023", title: "Core System Lab", description: "Began compiling custom Webpack plugins and designing custom databases for high-speed client-facing tools." },
  { year: "2024", title: "Enterprise Scaling", description: "Scaled operations to cloud-native SaaS systems, delivering real-time telemetry to vertex networks." },
  { year: "2025", title: "Cinematic Digital Craft", description: "Launched our premium, futuristic dark design system, reducing client front-end development cycles by 40%." },
  { year: "2026", title: "Global Web Solutions", description: "Currently managing secure multi-node architectures across 12 countries with under 15ms routing speeds." },
];

export const awards = [
  { year: "2025", title: "Elite Tech Agency Award", organization: "Global Design Consortium", icon: Award },
  { year: "2024", title: "Fastest Web Platform Design", organization: "Haryana Tech Innovation", icon: Sparkles },
  { year: "2024", title: "Top Database Integrity Award", organization: "MongoDB User Network", icon: Star },
];

export const teamMembers = [
  {
    name: "Keshav Ladha",
    role: "Founder & Lead Engineer",
    bio: "Full-stack cloud architect specializing in low-latency Node.js clusters and high-fidelity micro-interactions.",
    gradient: "from-cyan-500/30 to-blue-600/20",
    icon: Code2,
    skills: ["React 19", "System Architecture", "Cloud DevOps"],
  },
  {
    name: "Priya Sharma",
    role: "Core UX Designer",
    bio: "Pioneering glassmorphic aesthetic depth and tactile geometric motion layouts for advanced software apps.",
    gradient: "from-purple-500/30 to-pink-600/20",
    icon: Palette,
    skills: ["Framer Motion", "Console Aesthetics", "Interaction Models"],
  },
];

export const clientIndustries = ["Fintech", "SaaS Apps", "Web3 Ledgers", "Telemetry Control", "Logistics", "BioMed"];

export const trustBadges = [
  { label: "100% Core Vitals", icon: Star },
  { label: "TLS Encrypted", icon: BadgeCheck },
  { label: "Secured Ledger", icon: Lock },
  { label: "Vulnerability Shielded", icon: Shield },
];

export const detailedServices = [
  {
    title: "Enterprise Core Console",
    description: "Complete full-scale software platform - engineered for SaaS applications, business dashboards, and data routing systems.",
    icon: Globe2,
    deliverables: [
      "5-page full developer views",
      "Interactive chart visualizations",
      "Background data indexers",
      "Telemetry integration logs",
      "Optimized query routing routes",
      "Mobile-responsive dashboard",
      "1 month free core audit",
    ],
    timeline: "5-7 days",
    price: "₹35,000",
  },
  {
    title: "High-Performance Landing Node",
    description: "Single-page application optimized for maximum conversion, marketing campaigns, and product telemetry showcasing.",
    icon: Rocket,
    deliverables: [
      "Single-page tech design",
      "High-impact conversion hooks",
      "Obsidian form wells",
      "99% performance audit scores",
      "Mobile fluid reflow parameters",
      "Fastest server response",
      "Integrated system trigger",
    ],
    timeline: "2-3 days",
    price: "₹15,000",
  },
];

export const contactMethods = [
  { label: "Email Terminal", value: "keshavladha24@gmail.com", href: "mailto:keshavladha24@gmail.com", icon: Mail },
  { label: "Secure Hotline", value: "+91 70273 40360", href: "tel:+917027340360", icon: Phone },
  { label: "Direct Consult", value: "Schedule architecture sprint", href: "/contact", icon: MessageSquare },
];

export const officeLocations = [
  {
    city: "Sirsa Lab",
    country: "Haryana, India (HQ)",
    address: "Ellenabad, Sirsa, Haryana 125102",
  },
  {
    city: "Gurugram Office",
    country: "Haryana, India",
    address: "Cyber Hub, DLF Phase 3, Gurugram, Haryana 122002",
  },
];

export const portfolioItems = [
  {
    title: "Vertex Algorithmic Portal",
    category: "Fintech System",
    year: "2025",
    description: "Re-engineering a legacy financial registry into an immersive, real-time transaction ledger built with WebSockets.",
    gradient: "from-blue-500/40 to-cyan-600/30",
    icon: Shield,
    tags: ["Next.js", "WebSockets", "Tailwind"],
    link: "/case-studies",
  },
  {
    title: "Neon-Core Telemetry Visualizer",
    category: "Data Platform",
    year: "2025",
    description: "An immersive, hardware-accelerated 3D visualizer to track and analyze real-time shipping cargo data.",
    gradient: "from-cyan-500/40 to-blue-600/30",
    icon: Utensils,
    tags: ["Three.js", "TailwindCSS", "Node.js"],
    link: "/case-studies",
  },
  {
    title: "Quantum Flow Automation",
    category: "Cloud Native",
    year: "2024",
    description: "Automating background server scaling, transaction ledgers, and database query caching for enterprise clients.",
    gradient: "from-green-500/40 to-teal-600/30",
    icon: Home,
    tags: ["Docker", "MongoDB", "AWS DevOps"],
    link: "/case-studies",
  },
  {
    title: "Aether Predictive Engine",
    category: "Artificial Intel",
    year: "2024",
    description: "Designing a clean, high-contrast dashboard to showcase machine learning market projections and predictive analytics.",
    gradient: "from-pink-500/40 to-purple-600/30",
    icon: ShoppingBag,
    tags: ["Python", "TensorFlow", "React"],
    link: "/case-studies",
  },
];
