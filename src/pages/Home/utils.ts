export const capabilities = [
  {
    category: "Product Engineering",
    description:
      "Building and owning customer-facing products across web and mobile, from idea to production.",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Data",
    description:
      "Designing APIs, business logic, data models, and services behind production products.",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    category: "Systems Architecture",
    description:
      "Designing scalable application patterns for complex product and platform workflows.",
    items: [
      "Multi-Tenant Systems",
      "Server-Driven UI",
      "RBAC",
      "Database Design",
      "API Design",
      "Workflow Automation",
    ],
  },
  {
    category: "Cloud & Reliability",
    description:
      "Shipping and operating reliable systems under real production traffic and growth.",
    items: [
      "GCP",
      "Docker",
      "Cloud Run",
      "NGINX",
      "CI/CD",
      "Production Observability",
    ],
  },
  {
    category: "Scale & Infrastructure",
    description:
      "Improving system performance, traffic handling, and infrastructure as products scale.",
    items: [
      "Caching",
      "Load Balancing",
      "Structured Logging",
      "Event Tracking",
      "Service Integrations",
      "Infrastructure Optimization",
    ],
  },
  {
    category: "AI & Applied Engineering",
    description:
      "Building AI-assisted experiences and technical prototypes around emerging capabilities.",
    items: [
      "LLM Integration",
      "RAG / CAG",
      "Prompt Engineering",
      "Inference APIs",
      "Python",
      "AI-assisted Workflows",
    ],
  },
];

// ----------------------------------
// ----------------------------------

export const projects = [
  {
    id: "stylezen",
    index: "01",
    title: "StyleZen",
    role: "Founding Software Engineer",
    period: "2025",
    type: "Quick Commerce",

    description:
      "Built and scaled an end-to-end quick-commerce platform across customer, merchant, rider, operations, web, mobile, and backend systems.",

    contributions: [
      "Order & payment systems",
      "Inventory & warehouse workflows",
      "Last-mile logistics",
      "Server-Driven UI",
      "CI/CD & observability",
    ],

    metrics: [
      {
        value: "100K+",
        label: "MAU",
      },
      {
        value: "250 - 300%",
        label: "Peak traffic",
      },
      {
        value: "75%",
        label: "MoM growth",
      },
    ],

    image: "/previews/stylezen-preview.png",
    liveUrl: "https://link.stylezen.co",
    caseStudyUrl: null,
  },

  {
    id: "calyrn",
    index: "02",
    title: "Calyrn",
    role: "Creator & Product Engineer",
    period: "2026 - Present",
    type: "Market Research Product",

    description:
      "Building a market research product designed to keep investigation context intact across assets, time horizons, and evolving watchlists.",

    contributions: [
      "Persistent market watch",
      "OHLC & multi-horizon analysis",
      "Cross-asset research flows",
      "Product & interaction design",
      "End-to-end product engineering",
    ],

    metrics: [],

    image: null,
    liveUrl: "https://calyrn.xyz",
    caseStudyUrl: null,
  },

  {
    id: "m2k-packpro",
    index: "03",
    title: "M2K PackPro",
    role: "Freelance Software Engineer",
    period: "Freelance",
    type: "Business Website",

    description:
      "Designed and shipped a production website for M2K PackPro, giving the client's packaging business a clear, responsive web presence for customer discovery and enquiries.",

    contributions: [
      "Website architecture",
      "Responsive frontend",
      "Business-focused UX",
      "Content presentation",
      "Production deployment",
    ],

    metrics: [],

    image: null,
    liveUrl: "https://m2kpackpro.in",
    caseStudyUrl: null,
  },

  {
    id: "recurrent",
    index: "04",
    title: "Recurrent Software",
    role: "Associate Software Engineer",
    period: "2024 - 2025",
    type: "Enterprise Product Engineering",

    description:
      "Built AI-powered, media-heavy, and enterprise applications spanning healthcare, 3D visualization, streaming, authorization, and backend integrations.",

    contributions: [
      "AI healthcare interfaces",
      "Three.js visualization",
      "HLS video streaming",
      "Enterprise RBAC",
      "Backend APIs & integrations",
    ],

    metrics: [],

    image: "/previews/recurrent-preview.png",
    liveUrl: "https://www.recurrentsoftware.com/",
    caseStudyUrl: null,
  },

  {
    id: "repairable",
    index: "05",
    title: "Repairable",
    role: "Software Developer Intern",
    period: "2023 - 2024",
    type: "Marketplace & Logistics",

    description:
      "Worked across booking, partner operations, logistics, and infrastructure for a repair marketplace expanding across Norway.",

    contributions: [
      "Repair booking platform",
      "Partner dashboards",
      "Order tracking",
      "Logistics workflows",
      "Cloud architecture optimization",
    ],

    metrics: [
      {
        value: "35%",
        label: "Order growth",
      },
      {
        value: "40%+",
        label: "Tracking efficiency",
      },
      {
        value: "~45%",
        label: "Cloud cost reduction",
      },
    ],

    image: "/previews/repairable-preview.png",
    liveUrl: null,
    caseStudyUrl: null,
  },
];

// ----------------------------------------------
// ----------------------------------------------

export const impact = [
  {
    value: "100K+",
    label: "Monthly active users",
    description: "Supported across production commerce platforms",
  },
  {
    value: "250 - 300%",
    label: "Peak traffic",
    description: "Handled during high-demand periods",
  },
  {
    value: "75%",
    label: "Month-over-month growth",
    description: "Supported while scaling core production systems",
  },
  {
    value: "1,000+",
    label: "Production merges",
    description: "Supported through CI/CD and production observability",
  },
  {
    value: "~45%",
    label: "Cloud cost reduction",
    description:
      "Achieved through infrastructure and architecture optimization",
  },
];
