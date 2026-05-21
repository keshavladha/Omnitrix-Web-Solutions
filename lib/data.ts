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
  { title: "Business Websites", copy: "Professional websites for shops, clinics, local stores and service brands with fast deployment and lead generation.", icon: Globe2 },
  { title: "SEO & Local Marketing", copy: "Search engine optimization, Google My Business, and local discovery to help customers find you online.", icon: BarChart3 },
  { title: "WhatsApp Integration", copy: "WhatsApp chat, order buttons, and direct customer communication built into your website.", icon: MessageSquare },
  { title: "Domain & Hosting", copy: "Domain registration, SSL setup, and hosting recommendations so your business goes live with confidence.", icon: Globe2 },
  { title: "Restaurant & Cafe Sites", copy: "Menus, galleries, reservations and online ordering systems designed for food businesses.", icon: Layers },
  { title: "E-commerce Websites", copy: "Small online stores with payment links, catalog pages, and easy customer checkout.", icon: ShoppingBag },
  { title: "Website Redesign", copy: "Modern makeovers for outdated websites with mobile responsiveness, speed and conversion improvements.", icon: Sparkles },
  { title: "Maintenance & Support", copy: "Ongoing website support, updates, and fast response for business continuity.", icon: ShieldCheck },
];

export const techStack = ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "MongoDB", "Framer Motion"];

export const projects = [
  {
    title: "Sharma Clinic Website",
    category: "Healthcare",
    copy: "A professional clinic website with appointment booking, doctor profiles, and WhatsApp contact for patients.",
    tags: ["WhatsApp", "SEO", "Mobile"],
  },
  {
    title: "Tasty Corner Menu",
    category: "Restaurant",
    copy: "A food business website with menu display, online ordering links, and featured customer reviews.",
    tags: ["Restaurant", "Menu", "Orders"],
  },
  {
    title: "Retail Catalog Site",
    category: "Retail",
    copy: "An online catalog to showcase products, collect customer enquiries, and drive WhatsApp orders.",
    tags: ["Catalog", "WhatsApp", "Local"],
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
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=+917027340360&text=Hi,%20I%20need%20a%20business%20website%20and%20digital%20marketing%20quote.", icon: MessageSquare },
  { label: "Portfolio", href: "#projects", icon: Globe2 },
  { label: "Contact", href: "#contact", icon: Activity },
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
    title: "How a Local Restaurant Website Doubled WhatsApp Orders",
    excerpt: "A real example of how WhatsApp integration and menu design can turn website visitors into customers.",
    category: "Local Marketing",
    readTime: "6 min read",
    date: "Jan 15, 2026",
    icon: Globe2,
    tags: ["WhatsApp", "Restaurants", "Online Orders"],
  },
  {
    title: "Why Every Clinic Needs a Mobile-Friendly Website",
    excerpt: "The key website pages, appointment flows, and contact methods that make medical businesses easy to find and trust.",
    category: "Business Website",
    readTime: "7 min read",
    date: "Jan 10, 2026",
    icon: Shield,
    tags: ["Clinics", "Mobile", "Trust"],
  },
  {
    title: "Local SEO Tips for Shops and Salons",
    excerpt: "Simple search engine strategies to help your business show up in Google Maps and local search results.",
    category: "SEO",
    readTime: "5 min read",
    date: "Jan 5, 2026",
    icon: BarChart3,
    tags: ["Local SEO", "Google Maps", "Visibility"],
  },
  {
    title: "Building a High-Converting Landing Page for Product Promotions",
    excerpt: "What elements small businesses need on a landing page to generate leads and sales quickly.",
    category: "Conversion",
    readTime: "6 min read",
    date: "Dec 28, 2025",
    icon: Sparkles,
    tags: ["Landing Page", "Conversion", "Sales"],
  },
  {
    title: "How to Use WhatsApp for Local Business Leads",
    excerpt: "Practical tips for capturing customer interest, sending quick replies, and closing leads via WhatsApp.",
    category: "Sales",
    readTime: "8 min read",
    date: "Dec 20, 2025",
    icon: MessageSquare,
    tags: ["WhatsApp", "Leads", "Local Business"],
  },
  {
    title: "Why Fast Loading Matters for Small Business Sites",
    excerpt: "How speed impacts local search, customer trust, and the number of visitors who actually contact you.",
    category: "Performance",
    readTime: "5 min read",
    date: "Dec 15, 2025",
    icon: Zap,
    tags: ["Speed", "SEO", "UX"],
  },
];

export const categories = ["All", "Local Marketing", "Website", "SEO", "WhatsApp", "Small Business", "Performance"];

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
    description: "Common questions from local business owners",
    icon: HelpCircle,
    questions: [
      { q: "What types of websites do you build?", a: "We build business websites for clinics, restaurants, shops, salons, real estate agents, coaching centers, and local service providers." },
      { q: "Can you make my website work with WhatsApp?", a: "Yes. We integrate WhatsApp buttons, ordering links, and direct chat flows so customers can message you instantly." },
      { q: "How fast can I launch a website?", a: "Most business websites can be launched in 5-10 days after the content is ready. Landing pages can go live in 2-3 days." },
      { q: "How do I get started?", a: "Just contact us with your business details. We'll send a quote and timeline, then start the design once you're ready." },
    ],
  },
  {
    id: "process",
    name: "Process & Timeline",
    description: "How we create your website",
    icon: Clock,
    questions: [
      { q: "What does your process include?", a: "Discovery, design, development, review, and launch. We keep the process simple and focused on results for your business." },
      { q: "How long does a website project take?", a: "Landing pages: 1-2 weeks. Multi-page business sites: 2-4 weeks. Restaurant and shop sites typically launch within a week." },
      { q: "Can I request changes during design?", a: "Yes. We include revision rounds in every plan so you can refine the design and content before launch." },
      { q: "Do you help after the site is live?", a: "Yes. We include post-launch support and can also provide monthly maintenance or update packages." },
    ],
  },
  {
    id: "technical",
    name: "Technical",
    description: "What powers your website",
    icon: Code2,
    questions: [
      { q: "Do I own my website?", a: "Yes. Once the project is complete, you own the website, design, and content. We hand over everything to you." },
      { q: "Will it work on mobile phones?", a: "Absolutely. Every website we build is mobile responsive and designed for customers using phones and tablets." },
      { q: "Do you handle domain and hosting?", a: "Yes. We can register your domain, set up hosting, install SSL, and make your website live." },
      { q: "Can you improve my current website?", a: "Yes. We can redesign existing websites, migrate content, and add features like WhatsApp ordering or online booking." },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Payment",
    description: "Costs, billing, and payment terms",
    icon: DollarSign,
    questions: [
      { q: "How do you structure payment?", a: "50% upfront to begin, 50% upon completion. We accept UPI and bank transfer for secure payments. GST invoices are available." },
      { q: "Are there any hidden costs?", a: "No. Our proposals include all project costs. Any extra work beyond scope is discussed and approved first." },
      { q: "Can I start with a small site and upgrade later?", a: "Yes. Many clients start with a simple business website and upgrade to booking, ordering, or e-commerce later." },
      { q: "Do you offer ongoing support?", a: "Yes. We offer monthly maintenance and updates to keep your website secure and up to date." },
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
    name: "Restaurants & Cafes",
    description: "Menu websites, online ordering via WhatsApp, reservation pages, and photo galleries that turn visitors into diners.",
    clients: 12,
    gradient: "from-orange-500/30 to-red-600/20",
    icon: Utensils,
    solutions: ["Menu Pages", "Online Orders", "Table Booking", "Gallery", "Customer Reviews"],
    metrics: [
      { value: "30+", label: "Restaurants Served" },
      { value: "40%", label: "Order Growth" },
    ],
  },
  {
    name: "Clinics & Healthcare",
    description: "Appointment websites, service pages, doctor profiles, and direct consult links that help clinics book patients faster.",
    clients: 8,
    gradient: "from-blue-500/30 to-cyan-600/20",
    icon: Shield,
    solutions: ["Appointment Forms", "Doctor Profiles", "Service Pages", "WhatsApp Consults", "Patient Reviews"],
    metrics: [
      { value: "20+", label: "Clinics Served" },
      { value: "3x", label: "Appointments Increase" },
    ],
  },
  {
    name: "Retail & Boutiques",
    description: "Lifestyle catalogs, product galleries, WhatsApp ordering, and store information pages for local retail brands.",
    clients: 18,
    gradient: "from-violet-500/30 to-pink-600/20",
    icon: ShoppingBag,
    solutions: ["Product Catalog", "Order Links", "Store Info", "Payment Links", "Gallery"],
    metrics: [
      { value: "50+", label: "Stores Supported" },
      { value: "35%", label: "Sales Lift" },
    ],
  },
  {
    name: "Real Estate & Brokers",
    description: "Property listing sites, enquiry forms, agent pages, and location-based search to help brokers close more leads.",
    clients: 15,
    gradient: "from-emerald-500/30 to-teal-600/20",
    icon: Home,
    solutions: ["Property Listings", "Gallery", "Agent Contact", "Google Maps", "Enquiry Forms"],
    metrics: [
      { value: "25+", label: "Agents Supported" },
      { value: "30%", label: "More Leads" },
    ],
  },
  {
    name: "Education & Coaching",
    description: "Course pages, admission forms, class schedules, and institute websites designed for local coaching centers and schools.",
    clients: 10,
    gradient: "from-yellow-500/30 to-orange-600/20",
    icon: Lightbulb,
    solutions: ["Course Pages", "Admission Forms", "Timetable", "Faculty Profiles", "Fees Info"],
    metrics: [
      { value: "15+", label: "Institutes Served" },
      { value: "20%", label: "Lead Growth" },
    ],
  },
  {
    name: "Salons & Wellness",
    description: "Service booking sites, pricing lists, gallery pages, and WhatsApp appointment systems for salons and spas.",
    clients: 6,
    gradient: "from-pink-500/30 to-purple-600/20",
    icon: Sparkles,
    solutions: ["Service Menus", "Bookings", "Team Profiles", "Portfolio", "Contact"],
    metrics: [
      { value: "10+", label: "Salons Served" },
      { value: "25%", label: "Appointment Growth" },
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
  {
    title: "SEO & Local Marketing",
    description: "Get found on Google by customers in Hisar and nearby areas. We optimize your website, Google Business Profile, and local listings.",
    icon: BarChart3,
    deliverables: [
      "Google My Business setup & optimization",
      "Local SEO keyword optimization",
      "On-page SEO (titles, meta, content)",
      "Directory submissions (Justdial, Sulekha)",
      "Monthly SEO report",
      "WhatsApp business setup",
    ],
    timeline: "7-14 days setup + ongoing",
    price: "₹8,000/mo",
  },
  {
    title: "Domain, Hosting & SSL",
    description: "Complete domain registration, reliable hosting setup, and SSL certificate for your business website. Everything you need to go live.",
    icon: Globe2,
    deliverables: [
      "Domain name registration (.com/.in)",
      "1 year hosting setup",
      "SSL certificate installation",
      "Professional email setup",
      "DNS configuration",
      "1 year free support",
    ],
    timeline: "1-2 days",
    price: "₹4,500/yr",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing website updates, security monitoring, and content changes. Keep your site fresh, secure, and always online.",
    icon: ShieldCheck,
    deliverables: [
      "Monthly content updates",
      "Security monitoring",
      "Backup & restore",
      "Plugin/core updates",
      "Performance monitoring",
      "Email support",
    ],
    timeline: "Ongoing monthly",
    price: "₹2,500/mo",
  },
];

// Contact Page Data
export const contactMethods = [
  { label: "Email", value: "keshavladha24@gmail.com", href: "mailto:keshavladha24@gmail.com", icon: Mail },
  { label: "Phone/WhatsApp", value: "+91 70273 40360", href: "tel:+917027340360", icon: Phone },
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
