export const capabilities = [
  {
    category: "Product Engineering",
    description:
      "Building customer-facing products across web and mobile, from idea to production.",
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
    category: "Backend & Systems",
    description:
      "Designing APIs, data flows, and services behind production products.",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],
  },
  {
    category: "Cloud & Reliability",
    description:
      "Shipping, operating, debugging, and optimizing systems in production.",
    items: [
      "Docker",
      "GCP",
      "Cloud Run",
      "NGINX",
      "CI/CD",
      "Production Observability",
    ],
  },
  {
    category: "Architecture",
    description:
      "Patterns I've used to solve product and platform problems at scale.",
    items: [
      "Server-Driven UI",
      "RBAC",
      "Workflow Automation",
      "Event Tracking",
      "Load Balancing",
      "System Design",
    ],
  },
  {
    category: "AI & Applied Engineering",
    description:
      "Integrating AI capabilities into real product experiences and prototypes.",
    items: [
      "LLM Integration",
      "RAG / CAG Concepts",
      "Prompt Engineering",
      "Inference APIs",
      "Python",
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
    id: "recurrent",
    index: "02",
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
    index: "03",
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
    liveUrl: "https://www.repairable.community/",
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
