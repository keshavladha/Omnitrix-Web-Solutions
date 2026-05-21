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
  { title: "Business Websites", copy: "Professional websites for shops, clinics, and local businesses to establish online presence.", icon: Globe2 },
  { title: "Landing Pages", copy: "High-converting single-page sites for products, services, and marketing campaigns.", icon: Rocket },
  { title: "Portfolio Sites", copy: "Elegant personal and professional portfolios for doctors, lawyers, consultants, and creatives.", icon: Palette },
  { title: "Restaurant & Cafe Sites", copy: "Menu displays, online ordering integration, and table booking for local eateries.", icon: Layers },
  { title: "Real Estate Listings", copy: "Property showcase websites for brokers and builders with contact forms and galleries.", icon: LayoutDashboard },
  { title: "Educational Sites", copy: "School and coaching institute websites with course info, admissions, and contact pages.", icon: Lightbulb },
  { title: "E-commerce (Small)", copy: "Simple online stores for local shops with WhatsApp ordering and payment links.", icon: ShoppingBag },
  { title: "Website Redesign", copy: "Modern makeovers for outdated websites with mobile responsiveness and speed fixes.", icon: Sparkles },
];

export const techStack = ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "MongoDB", "Framer Motion"];

export const projects = [
  {
    title: "Astral SaaS Console",
    category: "SaaS Platform",
    copy: "A founder-grade analytics dashboard with real-time metrics, billing states, and role-aware workspaces.",
    tags: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    title: "Nexus Launch Site",
    category: "Startup Website",
    copy: "A cinematic conversion site with scroll storytelling, interactive cards, and mobile-first performance.",
    tags: ["React", "Motion", "SEO"],
  },
  {
    title: "Ops Command Layer",
    category: "Admin System",
    copy: "A clean internal platform for user management, workflows, audit trails, and operational visibility.",
    tags: ["APIs", "Dashboards", "Auth"],
  },
];

export const reasons = [
  { label: "01", value: "Modern Design", icon: Sparkles },
  { label: "02", value: "Affordable Pricing", icon: BadgeCheck },
  { label: "03", value: "Mobile Friendly", icon: Smartphone },
  { label: "04", value: "Fast Delivery", icon: Zap },
  { label: "05", value: "WhatsApp Integration", icon: MessageSquare },
  { label: "06", value: "Local Support", icon: ShieldCheck },
];

export const testimonials = [
  {
    quote: "Omnitrix created a professional website for my clinic that brings in 3x more patients. The WhatsApp integration makes booking appointments so easy for my patients.",
    name: "Dr. Rakesh Sharma",
    role: "Dental Surgeon, Hisar",
  },
  {
    quote: "My restaurant now gets online orders through WhatsApp thanks to the website. The menu looks beautiful and customers love the photo gallery.",
    name: "Rajesh Kumar",
    role: "Owner, Tasty Corner Restaurant",
  },
  {
    quote: "As a boutique owner, I needed a simple way to showcase my products. The WhatsApp ordering feature has increased my sales by 40%. Excellent work at affordable price!",
    name: "Priya Gupta",
    role: "Owner, Priya Fashion Boutique, Hisar",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Portfolio", href: "#projects", icon: Globe2 },
  { label: "Signal", href: "#contact", icon: Activity },
  { label: "Vision", href: "#about", icon: Aperture },
];

// Case Studies Data
export const caseStudies = [
  {
    title: "Sharma Dental Clinic",
    category: "Healthcare",
    description: "Complete website for a dental clinic in Hisar with online appointment booking, treatment information, doctor profiles, and WhatsApp integration for patient queries.",
    duration: "5 days",
    icon: Shield,
    tags: ["Business Website", "Appointment Form", "WhatsApp"],
    metrics: [
      { value: "3x", label: "More appointments" },
      { value: "50+", label: "Daily visitors" },
      { value: "24/7", label: "Online presence" },
    ],
  },
  {
    title: "Tasty Corner Restaurant",
    category: "Restaurant",
    description: "Menu website for a family restaurant with food gallery, online table booking, and WhatsApp food ordering system for home delivery.",
    duration: "4 days",
    icon: Utensils,
    tags: ["Menu Display", "WhatsApp Order", "Gallery"],
    metrics: [
      { value: "40%", label: "More orders" },
      { value: "200+", label: "Menu views/day" },
      { value: "4.8★", label: "Customer rating" },
    ],
  },
  {
    title: "Gupta Properties",
    category: "Real Estate",
    description: "Property listing website for a local real estate broker with photo galleries, property details, enquiry forms, and Google Maps integration.",
    duration: "6 days",
    icon: Home,
    tags: ["Listings", "Gallery", "Contact Forms"],
    metrics: [
      { value: "25+", label: "Property listings" },
      { value: "30%", label: "More enquiries" },
      { value: "10+", label: "Leads/month" },
    ],
  },
  {
    title: "Priya Fashion Boutique",
    category: "Retail",
    description: "Online catalog for a ladies boutique with product photos, WhatsApp ordering, and payment link integration for easy checkout.",
    duration: "7 days",
    icon: ShoppingBag,
    tags: ["Product Catalog", "WhatsApp Order", "Payment Links"],
    metrics: [
      { value: "50", label: "Products listed" },
      { value: "35%", label: "More sales" },
      { value: "₹2L", label: "Monthly revenue" },
    ],
  },
];

// Blog Data
export const blogPosts = [
  {
    title: "Why We Chose Next.js App Router for Every New Project",
    excerpt: "An in-depth look at how the App Router changed our approach to building scalable React applications, and why it's now our default choice.",
    category: "Engineering",
    readTime: "8 min read",
    date: "Jan 15, 2026",
    icon: Code2,
    tags: ["Next.js", "React", "Architecture"],
  },
  {
    title: "The Anatomy of a Perfect Landing Page",
    excerpt: "Breaking down the conversion psychology, visual hierarchy, and technical implementation that makes startup sites convert visitors to customers.",
    category: "Design",
    readTime: "6 min read",
    date: "Jan 10, 2026",
    icon: Palette,
    tags: ["UI/UX", "Conversion", "Startups"],
  },
  {
    title: "MongoDB Schema Design for Startups That Scale",
    excerpt: "Lessons learned from building data models that work for 100 users and 100,000 users without painful migrations.",
    category: "Backend",
    readTime: "10 min read",
    date: "Jan 5, 2026",
    icon: Database,
    tags: ["MongoDB", "Database", "Scaling"],
  },
  {
    title: "Framer Motion: Creating Cinematic UI Interactions",
    excerpt: "Advanced animation techniques that elevate your product from good to unforgettable, with practical code examples.",
    category: "Frontend",
    readTime: "7 min read",
    date: "Dec 28, 2025",
    icon: Sparkles,
    tags: ["Animation", "Motion", "React"],
  },
  {
    title: "From Side Project to SaaS: A Technical Roadmap",
    excerpt: "The infrastructure, architecture, and product decisions that matter when transitioning from prototype to production SaaS.",
    category: "Product",
    readTime: "12 min read",
    date: "Dec 20, 2025",
    icon: Rocket,
    tags: ["SaaS", "Startup", "Architecture"],
  },
  {
    title: "Performance Budgets: How We Keep Sites Fast",
    excerpt: "Our systematic approach to maintaining sub-2-second load times even as features and complexity grow.",
    category: "Performance",
    readTime: "5 min read",
    date: "Dec 15, 2025",
    icon: Zap,
    tags: ["Performance", "Core Web Vitals", "Optimization"],
  },
];

export const categories = ["All", "Engineering", "Design", "Backend", "Frontend", "Product", "Performance"];

// Pricing Data
export const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for individuals and small shops",
    price: "₹5,000",
    period: "/site",
    icon: Rocket,
    popular: false,
    cta: "Get Started",
    features: [
      "Single-page landing website",
      "Mobile-friendly design",
      "WhatsApp integration",
      "Google Maps location",
      "Basic contact form",
      "2-3 days delivery",
      "1 week support",
    ],
  },
  {
    name: "Business",
    description: "Most popular for local businesses",
    price: "₹12,000",
    period: "/site",
    icon: TrendingUp,
    popular: true,
    cta: "Most Popular",
    features: [
      "5-page website (Home, About, Services, Gallery, Contact)",
      "WhatsApp chat & call buttons",
      "Photo gallery/portfolio",
      "Basic SEO setup",
      "Social media links",
      "5-7 days delivery",
      "1 month support",
    ],
  },
  {
    name: "Premium",
    description: "Complete solution with all features",
    price: "₹20,000",
    period: "/site",
    icon: ZapIcon,
    popular: false,
    cta: "Contact Us",
    features: [
      "Up to 10 pages",
      "Online booking/appointment system",
      "Product catalog (up to 50 items)",
      "WhatsApp ordering integration",
      "Payment link setup",
      "Advanced SEO optimization",
      "7-10 days delivery",
      "2 months support",
    ],
  },
];

export const addOns = [
  {
    name: "Priority Delivery",
    description: "Get your site in 24-48 hours",
    price: "+₹2,000",
    icon: Clock,
  },
  {
    name: "Content Writing",
    description: "Professional copy for all pages",
    price: "₹2,000",
    icon: MessageSquare,
  },
  {
    name: "Logo Design",
    description: "Custom logo for your business",
    price: "₹3,000",
    icon: Palette,
  },
  {
    name: "Extra Pages",
    description: "Additional pages beyond package",
    price: "₹1,500/page",
    icon: Layers,
  },
];

// Process Data
export const processSteps = [
  {
    phase: "Consultation",
    number: "01",
    title: "Understanding Your Business",
    description: "Free discovery call to understand your business, goals, and what you need from your website. We discuss design preferences and features.",
    icon: MessageSquare,
    deliverables: ["Requirements discussion", "Design preferences", "Feature list", "Quote & timeline"],
  },
  {
    phase: "Design",
    number: "02",
    title: "Creating Your Design",
    description: "We create a modern, professional design mockup based on your brand. You can request revisions until you're satisfied.",
    icon: Palette,
    deliverables: ["Design mockup", "Color scheme", "Layout options", "Your feedback"],
  },
  {
    phase: "Development",
    number: "03",
    title: "Building Your Website",
    description: "We build your website with fast loading speed, mobile responsiveness, and all requested features like WhatsApp integration.",
    icon: Code2,
    deliverables: ["Responsive website", "WhatsApp integration", "Contact forms", "Photo gallery"],
  },
  {
    phase: "Review",
    number: "04",
    title: "Your Feedback",
    description: "You review the website and let us know if any changes are needed. We offer revisions as per your package.",
    icon: Eye,
    deliverables: ["Website preview", "Revision rounds", "Content updates", "Your approval"],
  },
  {
    phase: "Launch",
    number: "05",
    title: "Go Live",
    description: "We deploy your website to your domain, set up SSL, and ensure everything works perfectly. Your business is now online!",
    icon: Rocket,
    deliverables: ["Domain setup", "SSL certificate", "Go live", "30-day support"],
  },
];

export const values = [
  {
    title: "Transparency",
    description: "No hidden costs, no surprise delays. Clear communication at every step.",
    icon: MessageSquare,
  },
  {
    title: "Quality First",
    description: "We don't cut corners. Code that's maintainable, scalable, and well-documented.",
    icon: ShieldCheck,
  },
  {
    title: "Speed & Focus",
    description: "Rapid execution without sacrificing quality. We prioritize what moves the needle.",
    icon: Zap,
  },
  {
    title: "Partnership",
    description: "We're not vendors—we're collaborators invested in your product's success.",
    icon: Users,
  },
];

// FAQ Data
export const faqCategories = [
  {
    id: "general",
    name: "General",
    description: "Common questions about working with us",
    icon: HelpCircle,
    questions: [
      { q: "What types of projects do you take on?", a: "We specialize in web applications, SaaS platforms, startup websites, and admin dashboards. We focus on projects where we can deliver significant value through our full-stack expertise." },
      { q: "Do you work with international clients?", a: "Yes, while we're based in India, we work with clients globally including US, UK, Singapore, and UAE. We adjust our working hours to accommodate different time zones." },
      { q: "What is your typical project size?", a: "We typically engage on projects ranging from ₹35,000 for focused landing pages to ₹5,00,000+ for complex SaaS platforms. We work with startups and SMEs across India." },
      { q: "How do I get started?", a: "Simply reach out through our contact form or email. We'll schedule a free discovery call to understand your needs and determine if we're the right fit." },
    ],
  },
  {
    id: "process",
    name: "Process & Timeline",
    description: "How we work and deliver projects",
    icon: Clock,
    questions: [
      { q: "What does your typical process look like?", a: "Our 5-phase process: Discovery → Strategy → Design → Development → Launch. Each phase has clear deliverables and check-ins. See our Process page for details." },
      { q: "How long does a typical project take?", a: "Landing pages: 1-2 weeks. Multi-page sites: 2-4 weeks. SaaS platforms: 6-12 weeks depending on complexity. We provide detailed timelines during proposal." },
      { q: "How many revisions do I get?", a: "Starter: 2 rounds, Growth: 3 rounds, Scale: Unlimited during the engagement. We work iteratively to ensure you're thrilled with the result." },
      { q: "What if I need changes after launch?", a: "All plans include post-launch support (1-6 months depending on tier). After that, we offer retainer agreements or hourly support." },
    ],
  },
  {
    id: "technical",
    name: "Technical",
    description: "Technology and implementation details",
    icon: Code2,
    questions: [
      { q: "What technologies do you use?", a: "Our core stack: Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDB. We choose tools based on your specific needs and long-term maintainability." },
      { q: "Will I own the code?", a: "Yes, absolutely. Upon final payment, you receive full ownership and rights to all code, designs, and assets we create." },
      { q: "Do you provide hosting?", a: "We help deploy to Vercel, AWS, or your preferred platform. We can also recommend and set up hosting as part of the project." },
      { q: "Can you work with our existing codebase?", a: "Yes, we can extend existing applications. We'll do a code review first to understand the architecture and ensure we can deliver quality results." },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Payment",
    description: "Costs, billing, and payment terms",
    icon: DollarSign,
    questions: [
      { q: "How do you structure payment?", a: "50% upfront to begin, 50% upon completion. We accept UPI, bank transfer (NEFT/IMPS), and Razorpay for secure payments. GST invoice provided for all transactions." },
      { q: "Are there any hidden costs?", a: "No. Our proposals include all anticipated costs. Any additional work outside scope is discussed and approved before proceeding." },
      { q: "What if I need to pause the project?", a: "Life happens. We can pause projects with 30 days notice. Deposits are valid for 6 months and can be applied to future work." },
      { q: "Do you offer ongoing maintenance?", a: "Yes, we offer monthly retainers for continuous development, updates, and support. Retainers include priority response times." },
    ],
  },
];

// Updated navigation with new pages
export const mainNavItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Industries Data
export const industries = [
  {
    name: "Fintech & Banking",
    description: "Secure, compliant financial platforms with real-time transactions, fraud detection, and seamless user experiences. We understand PCI-DSS, banking regulations, and the need for bulletproof security.",
    clients: 12,
    gradient: "from-emerald-500/30 to-cyan-600/20",
    icon: BarChart3,
    solutions: ["Digital Banking", "Payment Gateways", "Crypto Wallets", "Trading Platforms", "Neobank Apps"],
    metrics: [
      { value: "$2B+", label: "Transactions Processed" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
  },
  {
    name: "Healthcare & MedTech",
    description: "HIPAA-compliant telehealth platforms, patient management systems, and medical device integrations. We build solutions that healthcare providers trust with sensitive data.",
    clients: 8,
    gradient: "from-blue-500/30 to-purple-600/20",
    icon: Shield,
    solutions: ["Telehealth", "E-Prescriptions", "Patient Portals", "EHR Integration", "Medical Billing"],
    metrics: [
      { value: "10K+", label: "Daily Consultations" },
      { value: "100%", label: "HIPAA Compliant" },
    ],
  },
  {
    name: "E-commerce & D2C",
    description: "Headless commerce experiences that convert. From AI-powered recommendations to seamless checkout flows, we help brands scale their online revenue.",
    clients: 18,
    gradient: "from-orange-500/30 to-pink-600/20",
    icon: Layers,
    solutions: ["Headless Commerce", "Marketplaces", "Inventory Mgmt", "Subscription Boxes", "B2B Portals"],
    metrics: [
      { value: "$50M+", label: "GMV Enabled" },
      { value: "40%", label: "Avg. Conversion Lift" },
    ],
  },
  {
    name: "SaaS & Enterprise",
    description: "B2B platforms with complex workflows, role-based access, and enterprise integrations. We build the tools that power modern businesses.",
    clients: 15,
    gradient: "from-violet-500/30 to-blue-600/20",
    icon: LayoutDashboard,
    solutions: ["CRM Systems", "Analytics Dashboards", "API Platforms", "Workflow Automation", "Data Pipelines"],
    metrics: [
      { value: "100K+", label: "Enterprise Users" },
      { value: "50+", label: "API Integrations" },
    ],
  },
  {
    name: "EdTech & Learning",
    description: "Interactive learning platforms, student management systems, and assessment tools. We make education accessible through technology.",
    clients: 10,
    gradient: "from-yellow-500/30 to-orange-600/20",
    icon: Lightbulb,
    solutions: ["LMS Platforms", "Assessment Tools", "Student Portals", "Video Learning", "Progress Tracking"],
    metrics: [
      { value: "500K+", label: "Students Reached" },
      { value: "25+", label: "Institutions" },
    ],
  },
  {
    name: "Real Estate & PropTech",
    description: "Property listing platforms, virtual tours, and transaction management systems. We help real estate businesses digitize their operations.",
    clients: 6,
    gradient: "from-green-500/30 to-teal-600/20",
    icon: Globe2,
    solutions: ["Property Portals", "Virtual Tours", "Booking Systems", "CRM for Agents", "Document Mgmt"],
    metrics: [
      { value: "10K+", label: "Properties Listed" },
      { value: "$100M+", label: "Deal Value" },
    ],
  },
];

// About Page Data
export const companyStats = [
  { value: "30+", label: "Websites Delivered", icon: Briefcase },
  { value: "25+", label: "Local Businesses", icon: Users },
  { value: "Hisar", label: "Based In", icon: MapPin },
  { value: "2+", label: "Years Experience", icon: Clock },
];

export const timeline = [
  { year: "2023", title: "The Beginning", description: "Started building websites for local shops and clinics in Hisar while completing BCA degree." },
  { year: "2024", title: "Growing Local Presence", description: "Delivered websites for 20+ local businesses including restaurants, clinics, and retail stores." },
  { year: "2025", title: "Omnitrix Web Solutions", description: "Formalized as a web development service focused on helping local businesses go digital affordably." },
  { year: "2026", title: "Serving Hisar & Beyond", description: "Now serving clients across Haryana with a team of 4, delivering modern websites in under a week." },
];

export const awards = [
  { year: "2025", title: "Trusted Local Web Developer", organization: "Hisar Business Network", icon: Award },
  { year: "2024", title: "Best Website Design", organization: "Haryana Digital Awards", icon: Sparkles },
  { year: "2024", title: "Top Rated Service", organization: "Google My Business", icon: Star },
];

export const teamMembers = [
  {
    name: "Keshav Ladha",
    role: "Founder & Lead Engineer",
    bio: "Full-stack developer with a passion for building products that scale. BCA graduate turned entrepreneur.",
    gradient: "from-cyan-500/30 to-blue-600/20",
    icon: Code2,
    skills: ["React", "Node.js", "System Design"],
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    bio: "Creating beautiful interfaces that users love. Expert in design systems and interaction design.",
    gradient: "from-purple-500/30 to-pink-600/20",
    icon: Palette,
    skills: ["Figma", "Motion", "User Research"],
  },
  {
    name: "Arjun Patel",
    role: "Backend Engineer",
    bio: "Database architect and API specialist. Building the infrastructure that powers great products.",
    gradient: "from-emerald-500/30 to-teal-600/20",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "AWS"],
  },
  {
    name: "Neha Gupta",
    role: "Project Manager",
    bio: "Keeping projects on track and clients happy. The bridge between vision and delivery.",
    gradient: "from-orange-500/30 to-yellow-600/20",
    icon: MessageSquare,
    skills: ["Agile", "Scrum", "Client Relations"],
  },
];

// Client Logos for Trust Section
export const clientIndustries = [
  "Clinics", "Restaurants", "Retail Shops", "Coaching Centers", "Real Estate", "Salons"
];

// Trust Badges
export const trustBadges = [
  { label: "5-Star Rated", icon: Star },
  { label: "Verified Agency", icon: BadgeCheck },
  { label: "Secure Payments", icon: Lock },
  { label: "NDA Protected", icon: Shield },
];

// Detailed Services for Services Page
export const detailedServices = [
  {
    title: "Business Website Package",
    description: "Complete website solution for local businesses - shops, clinics, salons, and professional services. Everything needed to get online and attract customers.",
    icon: Globe2,
    deliverables: [
      "5-page responsive website",
      "Home, About, Services, Gallery, Contact",
      "WhatsApp integration",
      "Google Maps location",
      "Basic SEO setup",
      "Mobile-friendly design",
      "1 month free support",
    ],
    timeline: "5-7 days",
    price: "₹12,000",
  },
  {
    title: "Landing Page",
    description: "Single-page website perfect for product launches, service promotions, or lead generation. Fast, focused, and conversion-oriented.",
    icon: Rocket,
    deliverables: [
      "Single-page design",
      "Call-to-action sections",
      "Contact/lead form",
      "Social proof section",
      "Mobile responsive",
      "Fast loading speed",
      "WhatsApp chat button",
    ],
    timeline: "2-3 days",
    price: "₹5,000",
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio for individuals - doctors, lawyers, consultants, photographers, and artists. Showcase your work and credentials.",
    icon: Palette,
    deliverables: [
      "Personal branding design",
      "About & services section",
      "Work/project gallery",
      "Contact & appointment form",
      "Social media links",
      "Mobile optimized",
      "Resume/CV download",
    ],
    timeline: "3-5 days",
    price: "₹8,000",
  },
  {
    title: "Restaurant Website",
    description: "Perfect for local cafes, restaurants, and food businesses. Menu display, photos, and online ordering via WhatsApp.",
    icon: Utensils,
    deliverables: [
      "Menu display with categories",
      "Food photo gallery",
      "Online table booking",
      "WhatsApp food ordering",
      "Location & timings",
      "Customer reviews section",
      "Google Maps integration",
    ],
    timeline: "4-6 days",
    price: "₹10,000",
  },
  {
    title: "Real Estate Website",
    description: "Property listing site for brokers and builders. Showcase properties with photos, details, and easy contact options.",
    icon: Home,
    deliverables: [
      "Property listings",
      "Photo galleries",
      "Property details page",
      "Contact/Enquiry forms",
      "Agent profiles",
      "Location maps",
      "Mobile responsive",
    ],
    timeline: "5-7 days",
    price: "₹12,000",
  },
  {
    title: "Small E-commerce",
    description: "Simple online store for local shops. Perfect for boutiques, gift shops, and specialty stores with WhatsApp-based ordering.",
    icon: ShoppingBag,
    deliverables: [
      "Product catalog (up to 50 items)",
      "Product photos & descriptions",
      "WhatsApp order button",
      "Payment link integration",
      "Delivery info section",
      "Mobile shopping experience",
      "Basic inventory tracking",
    ],
    timeline: "7-10 days",
    price: "₹15,000",
  },
];

// Contact Page Data
export const contactMethods = [
  { label: "Email", value: "hello@omnitrixwebsolutions.com", href: "mailto:hello@omnitrixwebsolutions.com", icon: Mail },
  { label: "Phone/WhatsApp", value: "+91 98XXX XXXXX", href: "tel:+9198XXXXXXXX", icon: Phone },
  { label: "Schedule a Call", value: "Book 30-min discovery", href: "/contact", icon: MessageSquare },
];

export const officeLocations = [
  {
    city: "Hisar",
    country: "Haryana, India (HQ)",
    address: "Sector 15, Hisar, Haryana 125001",
  },
  {
    city: "Gurugram",
    country: "Haryana, India",
    address: "Cyber Hub, DLF Phase 3, Gurugram, Haryana 122002",
  },
  {
    city: "Remote",
    country: "India & Worldwide",
    address: "Serving clients across India and 12+ countries globally",
  },
];

// Portfolio/Work Page Data
export const portfolioItems = [
  {
    title: "Sharma Dental Clinic",
    category: "Healthcare",
    year: "2025",
    description: "Professional website for a dental clinic in Hisar with appointment booking, services, and doctor profiles.",
    gradient: "from-blue-500/40 to-cyan-600/30",
    icon: Shield,
    tags: ["Business Site", "Appointment Form", "WhatsApp"],
    link: "/case-studies",
  },
  {
    title: "Tasty Corner Restaurant",
    category: "Restaurant",
    year: "2025",
    description: "Menu website for a local restaurant with food gallery, online table booking, and WhatsApp ordering.",
    gradient: "from-orange-500/40 to-red-600/30",
    icon: Utensils,
    tags: ["Menu Display", "WhatsApp Order", "Gallery"],
    link: "/case-studies",
  },
  {
    title: "Gupta Properties",
    category: "Real Estate",
    year: "2024",
    description: "Property listing website for a local broker with photo galleries, contact forms, and location maps.",
    gradient: "from-green-500/40 to-teal-600/30",
    icon: Home,
    tags: ["Listings", "Gallery", "Contact Forms"],
    link: "/case-studies",
  },
  {
    title: "Priya Fashion Boutique",
    category: "E-commerce",
    year: "2024",
    description: "Online catalog for a ladies boutique with WhatsApp ordering and payment link integration.",
    gradient: "from-pink-500/40 to-purple-600/30",
    icon: ShoppingBag,
    tags: ["Product Catalog", "WhatsApp Order", "Payment Links"],
    link: "/case-studies",
  },
  {
    title: "Apex Coaching Centre",
    category: "Education",
    year: "2024",
    description: "Website for a local coaching institute with course details, batch timings, and admission form.",
    gradient: "from-yellow-500/40 to-orange-600/30",
    icon: Lightbulb,
    tags: ["Course Info", "Admission Form", "Gallery"],
    link: "/case-studies",
  },
  {
    title: "Kumar Auto Parts",
    category: "Business",
    year: "2023",
    description: "Business website for an auto parts dealer with product catalog, location, and contact details.",
    gradient: "from-gray-500/40 to-slate-600/30",
    icon: Globe2,
    tags: ["Product Catalog", "Location Map", "WhatsApp"],
    link: "/case-studies",
  },
  {
    title: "Mehta Law Associates",
    category: "Professional",
    year: "2023",
    description: "Professional portfolio website for a lawyer with services, achievements, and appointment booking.",
    gradient: "from-indigo-500/40 to-blue-600/30",
    icon: Briefcase,
    tags: ["Portfolio", "Services", "Contact Form"],
    link: "/case-studies",
  },
  {
    title: "City Fitness Gym",
    category: "Fitness",
    year: "2023",
    description: "Website for a local gym with membership plans, trainer profiles, and online inquiry forms.",
    gradient: "from-red-500/40 to-pink-600/30",
    icon: Activity,
    tags: ["Membership Plans", "Gallery", "Contact"],
    link: "/case-studies",
  },
  {
    title: "Royal Salon & Spa",
    category: "Beauty",
    year: "2023",
    description: "Elegant website for a beauty salon with services, pricing, photo gallery, and online booking.",
    gradient: "from-purple-500/40 to-pink-600/30",
    icon: Sparkles,
    tags: ["Services Menu", "Gallery", "Booking"],
    link: "/case-studies",
  },
];
