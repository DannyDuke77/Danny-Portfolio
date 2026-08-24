const projects = [
  { 
    slug: "flux",
    title: "FLUX Ticketing System",

    shortDescription: 
      "Real-time departmental issue ticketing system with active updates, role-based workflows, and automated PDF performance reports.",
    description:
      "FLUX is a real-time ticketing system built to give departments a structured way to manage internal issues from submission through resolution. Tickets can be assigned, updated, prioritized, and tracked through role-based workflows, while live updates keep users synchronized without requiring page refreshes. The platform also maintains detailed ticket logs and generates PDF performance reports, backed by a Django API, PostgreSQL, Redis, WebSockets, and a containerized deployment architecture.",

    overview:
      "FLUX is a real-time departmental ticketing platform designed to streamline issue reporting, assignment, tracking, and resolution. The system combines a Next.js frontend with a Django backend, WebSockets for live updates, Redis for real-time communication, and PostgreSQL for persistent data.",

    features: [
      "Real-time ticket updates",
      "Role-based workflows",
      "Department management",
      "WebSocket communication",
      "PDF performance reports",
      "PostgreSQL data persistence",
    ],

    stack: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Nginx",
    ],

    github: "https://github.com/DannyDuke77/FLUX",

    demo: "#",

    screenshots: [
      {
        src: "/images/projects/flux/tickets-page.png",
        alt: "FLUX tickets dashboard",
        title: "Tickets Dashboard",
        description: "Overview of active departmental tickets and their current status, and WebSocket live status.",
      },
      {
        src: "/images/projects/flux/ticket-details.png",
        alt: "FLUX ticket details page",
        title: "Ticket Details",
        description: "Detailed ticket view with information on the issue, status, and assigned personnel.",
      },
      {
        src: "/images/projects/flux/new-ticket.png",
        alt: "FLUX new ticket form",
        title: "Create Ticket",
        description: "Ticket creation interface for reporting and assigning departmental issues.",
      },
      {
        src: "/images/projects/flux/ticket-logs.png",
        alt: "FLUX ticket activity logs",
        title: "Activity Logs",
        description: "Chronological record of changes and actions performed on a ticket.",
      },
      {
        src: "/images/projects/flux/reports-center.png",
        alt: "FLUX reports center",
        title: "Reports Center",
        description: "Centralized reporting interface for ticket and departmental performance.",
      },
      {
        src: "/images/projects/flux/settings1.png",
        alt: "FLUX settings interface",
        title: "Business Profile Settings",
        description: "Business-level configuration and management controls.",
      },
      {
        src: "/images/projects/flux/settings2.png",
        alt: "FLUX department settings",
        title: "Department Settings",
        description: "Department-level configuration and management controls.",
      },
      {
        src: "/images/projects/flux/login.png",
        alt: "FLUX login page",
        title: "Authentication",
        description: "Secure authentication interface for accessing the FLUX platform.",
      },
    ],
  },
  {
    slug: "rentwise",
    title: "RentWise Management",

    shortDescription: 
      "Property management platform for tracking unit occupancy, rent collection, tenant ledgers, arrears, and financial reporting, with automated receipts and exports.",
    description: 
      "Built to replace manual paperwork and fragmented spreadsheets, RentWise centralizes property management in a modern, real-time dashboard. It streamlines rental operations including unit occupancy, rent collection, tenant ledgers, arrears tracking, and deposit refunds. With configurable charges, on-demand PDF receipts, and one-click financial exports, RentWise gives property managers a clearer view and greater control over their rental operations.",
    overview: 
      "RentWise is a comprehensive rental property management application designed for landlords and property managers to track unit occupancies, streamline rent collection, manage tenant records, and handle complex financial workflows without administrative friction.",

    features: [
      "Multi-property & unit management",
      "Tenant & roommate tracking",
      "Automated rent & arrears ledger calculations",
      "M-Pesa, cash & bank deposit refund recording",
      "Custom charges for repairs & late fees",
      "On-demand PDF receipts & statements",
      "One-click CSV/Excel data exports",
      "Customizable business & user settings",
    ],

    stack: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],

    github: "https://github.com/DannyDuke77/RentWise",

    demo: "#",

    screenshots: [
      {
        src: "/images/projects/rentwise/properties.png",
        alt: "RentWise properties list",
        title: "Properties Overview",
        description: "Overview of all properties, unit statuses, and total occupancy stats.",
      },
      {
        src: "/images/projects/rentwise/login.png",
        alt: "RentWise login screen",
        title: "Authentication",
        description: "Login interface for accessing the landlord dashboard.",
      },
      {
        src: "/images/projects/rentwise/property-page.png",
        alt: "RentWise property details",
        title: "Property Details",
        description: "Detailed summary of rent collections, occupancy, and individual unit status. Generate a detailed property ledger report.",
      },
      {
        src: "/images/projects/rentwise/unit-details.png",
        alt: "RentWise unit details modal",
        title: "Unit Details",
        description: "View occupancy information, tenant details, and lease options.",
      },
      {
        src: "/images/projects/rentwise/unit-payments.png",
        alt: "RentWise unit payments modal",
        title: "Unit Payment Ledger",
        description: "Track individual unit billing cycles, account balances, and transaction history. Print individual receipts and full Excel reports.",
      },
      {
        src: "/images/projects/rentwise/refunds.png",
        alt: "RentWise refund processing modals",
        title: "Process Refunds",
        description: "Interfaces for returning security deposits and credit balances to tenants via M-Pesa, Bank, or Cash.",
      },
      {
        src: "/images/projects/rentwise/unit-charges.png",
        alt: "RentWise unit charges modal",
        title: "Unit Charges",
        description: "Interface for adding and viewing extra charges and fees.",
      },
      {
        src: "/images/projects/rentwise/payments.png",
        alt: "RentWise payment history",
        title: "Payments Management",
        description: "Track payment transactions, total collection, and tenant refunds.",
      },
      {
        src: "/images/projects/rentwise/tenants.png",
        alt: "RentWise tenant directory",
        title: "Tenant Directory",
        description: "Manage tenant contact details, status, and occupancy history.",
      },
      {
        src: "/images/projects/rentwise/settings1.png",
        alt: "RentWise account settings business profile",
        title: "Business Profile Settings",
        description: "Manage company branding, address, and default currency.",
      },
      {
        src: "/images/projects/rentwise/settings2.png",
        alt: "RentWise account settings user profile",
        title: "User Settings",
        description: "Update personal profile information and contact details.",
      },
      {
        src: "/images/projects/rentwise/settings3.png",
        alt: "RentWise account settings charge configurations",
        title: "Charge Configuration",
        description: "Set up and manage standard fee types and default amounts.",
      },
    ]
  },

  {
    slug: "e-occurrence",
    title: "e-Occurrence System",

    shortDescription:
    "Digital occurrence and case management system for structured reporting, case tracking, record management, and efficient information retrieval.",
    description:
    "e-Occurrence replaces traditional paper-based occurrence book workflows with a centralized digital system for recording, organizing, and tracking reported incidents. The platform structures occurrence records and case information into searchable digital records, making it easier to follow cases, retrieve historical information, and maintain consistent documentation. Built around structured data and controlled workflows, the system provides a more reliable foundation for managing incident records and maintaining an auditable history of case activity.",
    
    overview:
      "The e-Occurrence System digitizes the traditional occurrence book workflow by providing a structured platform for recording incidents, managing case information, and retrieving historical records efficiently. The system focuses on organized data management, traceability, and faster access to occurrence records.",

    features: [
      "Digital occurrence reporting",
      "Case tracking and management",
      "Structured incident records",
      "Advanced record searching",
      "Audit trail support",
      "Role-based access control",
      "Relational database architecture",
      "Responsive web interface",
    ],

    stack: [
      "Django",
      "PostgreSQL",
      "JavaScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/DannyDuke77/E-Occurrence",

    demo: "#",

    screenshots: [
      {
        src: "/images/projects/e-occurrence/dashboard.png",
        alt: "e-Occurrence dashboard",
        title: "Dashboard",
        description: "Overview of recent occurrences and case statistics.",
      },
      {
        src: "/images/projects/e-occurrence/new-occurrence.png",
        alt: "e-Occurrence new occurrence form",
        title: "New Occurrence",
        description: "Form for reporting a new incident with structured fields.",
      },
      {
        src: "/images/projects/e-occurrence/occurrence-details.png",
        alt: "e-Occurrence details view",
        title: "Occurrence Details",
        description: "Detailed view of a specific occurrence with case information.",
      },
    ],
  },
];

export default projects;