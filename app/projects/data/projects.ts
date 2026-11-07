const projects = [
  {
    slug: "rentwise",
    title: "RentWise Management",

    shortDescription:
      "Property management platform for tracking unit occupancy, rent collection, tenant ledgers, arrears, and financial reporting, with automated receipts and exports.",
    description:
      "A multi-business rental management platform where tenants pay rent via M-Pesa and landlords track arrears, issue PDF receipts and statements, and export their data, all in one place.",
    overview:
      "RentWise is a comprehensive rental property management application designed for landlords and property managers to track unit occupancies, streamline rent collection, manage tenant records, and handle complex financial workflows without administrative friction.",

    features: [
      "M-Pesa integration for direct rent payments via the tenant portal",
      "Multi-business platform with organisation-level data isolation",
      "Multi-property & unit management with tenant & roommate tracking",
      "Automated rent & arrears ledger calculations",
      "M-Pesa, cash & bank deposit refund recording",
      "Custom charges for repairs & late fees",
      "On-demand PDF receipts & financial statements",
      "One-click CSV/Excel data exports",
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
        src: "/images/projects/rentwise/marketing-page.png",
        alt: "RentWise marketing landing page",
        title: "Landing Page",
        description:
          "Public landing page highlighting automated M-Pesa rent collection, key features, step-by-step workflow, and landlord portal access.",
      },
      {
        src: "/images/projects/rentwise/dashboard.png",
        alt: "RentWise main dashboard view",
        title: "Main Dashboard",
        description:
          "Central overview showcasing key metrics, overdue rent lists, recent transactions, monthly collections, and portfolio occupancy charts.",
      },
      {
        src: "/images/projects/rentwise/properties-page.png",
        alt: "RentWise properties list",
        title: "Properties Overview",
        description:
          "Overview of all properties, unit statuses, and total occupancy stats.",
      },
      {
        src: "/images/projects/rentwise/property-units.png",
        alt: "RentWise property units view",
        title: "Property Units",
        description:
          "Unit-level management view displaying specific apartment layouts, tenant assignments, and financial statuses.",
      },
      {
        src: "/images/projects/rentwise/units-page.png",
        alt: "RentWise global units management page",
        title: "Global Units Directory",
        description:
          "Comprehensive management table listing all units across all properties, complete with status filters, balances, and deposits.",
      },
      {
        src: "/images/projects/rentwise/unit-details.png",
        alt: "RentWise unit occupancy and lease details",
        title: "Unit Occupancy Details",
        description:
          "Detailed view of an individual unit displaying primary tenant information, contact details, ID numbers, and lease termination controls.",
      },
      {
        src: "/images/projects/rentwise/unit-payment.png",
        alt: "RentWise unit payment management and recording",
        title: "Unit Payment Management",
        description:
          "Unit-specific account balance tracking interface with instant recording options for cash and M-Pesa transactions.",
      },
      {
        src: "/images/projects/rentwise/unit-charges.png",
        alt: "RentWise unit charges management tab",
        title: "Unit Charges Tab",
        description:
          "Specific unit view for creating and tracking individual utility, damage, or late fee charges.",
      },
      {
        src: "/images/projects/rentwise/charges-page.png",
        alt: "RentWise charges tracking page",
        title: "Property Charges",
        description:
          "Comprehensive tracking dashboard for property charges, status breakdown, and itemized billing records.",
      },
      {
        src: "/images/projects/rentwise/payments-page.png",
        alt: "RentWise payments dashboard page",
        title: "Payments Transactions & Analytics",
        description:
          "Comprehensive transactions ledger with summary analytics for total revenue, payment method breakdowns, filtering controls, and CSV export options.",
      },
      {
        src: "/images/projects/rentwise/payment-visual.png",
        alt: "RentWise payment analytics and visualization modal",
        title: "Payment Analytics & Visualizations",
        description:
          "Graphical data visualization modal displaying payment method distributions, payment versus refund comparisons, and monthly transaction trends.",
      },
      {
        src: "/images/projects/rentwise/initiate-stk.png",
        alt: "Tenant M-Pesa STK Push payment modal",
        title: "M-Pesa STK Push Modal",
        description:
          "Interactive modal dialogue for tenants to trigger real-time M-Pesa STK Push payments with custom amounts, phone numbers, and payment notes.",
      },
      {
        src: "/images/projects/rentwise/tenant-dashboard.png",
        alt: "RentWise tenant portal dashboard",
        title: "Tenant Portal Dashboard",
        description:
          "Dedicated portal view for tenants to track rent balances, unapplied credits, contact details, pending charges, and active tenancies.",
      },
      {
        src: "/images/projects/rentwise/tenant-payments-page.png",
        alt: "RentWise tenant payment history page",
        title: "Tenant Payment History",
        description:
          "Transaction history ledger within the tenant portal showing past rent and deposit payments with downloadable receipts.",
      },
      {
        src: "/images/projects/rentwise/business-settings.png",
        alt: "RentWise business settings page",
        title: "Business Settings",
        description:
          "Management interface for business details, contact information, address, logo, and default currency.",
      },
      {
        src: "/images/projects/rentwise/business-switcher.png",
        alt: "RentWise business switcher menu",
        title: "Multi-Tenant Business Switcher",
        description:
          "Dropdown selector allowing property managers to switch between multiple business entities or create a new business.",
      },
      {
        src: "/images/projects/rentwise/team-settings.png",
        alt: "RentWise team management settings page",
        title: "Team Management Settings",
        description:
          "Administrative settings panel for managing existing team members, roles, permissions, and pending invitations.",
      },
      {
        src: "/images/projects/rentwise/invite-team-member.png",
        alt: "RentWise invite team member modal",
        title: "Invite Team Member Modal",
        description:
          "Modal dialog for sending email invitations to new team members to a business with customizable role assignments such as Staff or Manager.",
      },
      {
        src: "/images/projects/rentwise/charges-settings.png",
        alt: "RentWise charge types settings page",
        title: "Charge Types Settings",
        description:
          "Configuration view for creating, defining, and managing custom fee types and default amounts.",
      },
      {
        src: "/images/projects/rentwise/mpesa-settings.png",
        alt: "RentWise M-Pesa integration settings page",
        title: "M-Pesa Integration Settings",
        description:
          "Configuration panel for Safaricom Daraja API credentials, encrypted keys, payment shortcodes, and environment toggles.",
      },
    ],
  },
  { 
    slug: "flux",
    title: "FLUX Ticketing System",

    shortDescription: 
      "Real-time departmental issue ticketing system with active updates, role-based workflows, and automated PDF performance reports.",
    description:
      "A real-time internal ticketing platform with department-based access and organisation-level data isolation, live updates over WebSockets, activity tracking, and CSV/PDF reporting.",

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