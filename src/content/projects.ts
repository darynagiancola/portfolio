import type {
  CaseStudyData,
  ImageAsset,
  MetadataItem,
  ProjectCardData,
  RoleCardData,
  ToolCardData,
} from '../types/portfolio'
import adminDashboard from '../assets/projects/aurelia/admin-dashboard.svg'
import adminFloorPlan from '../assets/projects/aurelia/admin-floor-plan.svg'
import adminLocations from '../assets/projects/aurelia/admin-locations.svg'
import adminMenuBuilder from '../assets/projects/aurelia/admin-menu-builder.svg'
import adminSettings from '../assets/projects/aurelia/admin-settings.svg'
import adminStaff from '../assets/projects/aurelia/admin-staff.svg'
import customerCart from '../assets/projects/aurelia/customer-cart.svg'
import customerConfirmation from '../assets/projects/aurelia/customer-confirmation.svg'
import customerMenu from '../assets/projects/aurelia/customer-menu.svg'
import customerPayment from '../assets/projects/aurelia/customer-payment.svg'
import customerReservation from '../assets/projects/aurelia/customer-reservation.svg'
import kdsDebug from '../assets/projects/aurelia/kds-debug.svg'
import kdsLive from '../assets/projects/aurelia/kds-live.svg'
import kitchenDisplay from '../assets/projects/aurelia/kitchen-display.svg'
import staffLogin from '../assets/projects/aurelia/staff-login.svg'
import waiterStation from '../assets/projects/aurelia/waiter-station.svg'
import placeholderThumb from '../assets/projects/placeholder-case-study.svg'

export const projectCards: ProjectCardData[] = [
  {
    slug: 'aurelia',
    title: 'AI-Powered Hospitality System',
    subtitle: 'AI · PRODUCT · OPERATIONS',
    description:
      'A connected hospitality ecosystem covering customer interaction, AI-assisted menu discovery, ordering/payment and kitchen/operational workflows.',
    featured: true,
    visualState: 'final',
    tags: ['AI Agent', 'Ordering', 'Payments', 'Kitchen Display', 'Automation'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'OpenAI API · LangChain · Supabase · Vercel',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '/projects/aurelia',
    status: 'featured',
    dominant: true,
    thumbnail: {
      src: adminDashboard,
      alt: 'AURELIA admin dashboard placeholder',
      label: 'AURELIA preview',
      note: 'Replace with composed hero screenshot when assets are available.',
    },
  },
  {
    slug: 'lead-marketing-automation-system',
    title: 'Lead & Marketing Automation System',
    subtitle: 'AUTOMATION · CRM · MARKETING',
    description:
      'A multi-step business automation covering lead generation/capture, ActiveCampaign automations, webinar communication, Pipedrive CRM status changes and follow-up workflows.',
    featured: true,
    visualState: 'placeholder',
    tags: ['Lead capture', 'ActiveCampaign', 'Webinar workflows', 'Pipedrive'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'Make · ActiveCampaign · Pipedrive · APIs · Webhooks',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '#',
    status: 'featured',
    thumbnail: {
      src: placeholderThumb,
      alt: 'Placeholder for upcoming case study',
      label: 'Placeholder',
    },
  },
  {
    slug: 'ai-support-ticket-routing',
    title: 'AI Support & Ticket Routing',
    subtitle: 'AI · CUSTOMER OPERATIONS · AUTOMATION',
    description:
      'An Intercom-based AI support system using a knowledge base to answer customer questions and routing/escalation logic to direct requests to the appropriate departments.',
    featured: true,
    visualState: 'placeholder',
    tags: ['Intercom', 'AI support', 'Knowledge base', 'Routing / escalation'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'Intercom · AI Agent · Knowledge Base · Workflow Automation',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '#',
    status: 'featured',
    thumbnail: {
      src: placeholderThumb,
      alt: 'Placeholder for future product case study',
      label: 'Placeholder',
    },
  },
  {
    slug: 'case-study-4',
    title: 'Additional Work',
    subtitle: 'Case study in progress',
    description:
      'An expandable slot for another real-world product case study.',
    tags: ['Case study in progress'],
    ctaLabel: 'Case study in progress',
    href: '#',
    status: 'placeholder',
    thumbnail: {
      src: placeholderThumb,
      alt: 'Placeholder for in-progress operations case study',
      label: 'Placeholder',
    },
  },
]

export const aureliaHeroMetadata: MetadataItem[] = [
  {
    label: 'Role',
    value: 'Product concept, UX/UI, AI-assisted development',
  },
  {
    label: 'Stack',
    value: 'Lovable · Cursor · Supabase · React · GitHub',
  },
  {
    label: 'Product Areas',
    value: 'Customer · Staff · Admin · Kitchen',
  },
]

export const customerJourneyAssets: ImageAsset[] = [
  { src: customerMenu, alt: 'Customer menu screen placeholder', label: 'Browse' },
  { src: customerReservation, alt: 'Customer reservation screen placeholder', label: 'Add items' },
  { src: customerCart, alt: 'Customer cart screen placeholder', label: 'Cart' },
  { src: customerPayment, alt: 'Customer payment screen placeholder', label: 'Payment' },
  {
    src: customerConfirmation,
    alt: 'Customer order confirmation screen placeholder',
    label: 'Confirmation',
  },
]

export const moreThanOrderingAssets: ImageAsset[] = [
  {
    src: customerReservation,
    alt: 'Reservation flow placeholder showing guest and time selection',
    label: 'Reservations',
  },
  {
    src: customerPayment,
    alt: 'Payment flow placeholder with method options',
    label: 'Payments',
  },
  {
    src: customerCart,
    alt: 'Cart management placeholder',
    label: 'Cart management',
  },
  {
    src: customerConfirmation,
    alt: 'Order confirmation placeholder',
    label: 'Confirmation',
  },
]

export const roleCards: RoleCardData[] = [
  {
    role: 'Admin',
    description: 'Full system visibility and control across configuration and operations.',
  },
  {
    role: 'Manager',
    description: 'Operational oversight for staff, service flow, and performance monitoring.',
  },
  {
    role: 'Waiter',
    description: 'Tables, active orders, reservations, payments, and front-of-house workflows.',
  },
  {
    role: 'Kitchen',
    description: 'Incoming orders, preparation status, timers, and handoff clarity.',
  },
  {
    role: 'Cashier',
    description: 'Payment processing and order completion at the final service step.',
  },
]

export const adminAssets: ImageAsset[] = [
  { src: adminDashboard, alt: 'Admin dashboard placeholder', label: 'Dashboard' },
  { src: adminFloorPlan, alt: 'Floor plan placeholder', label: 'Floor Plan' },
  { src: adminMenuBuilder, alt: 'Menu builder placeholder', label: 'Menu Builder' },
  { src: adminStaff, alt: 'Staff management placeholder', label: 'Staff' },
  { src: adminLocations, alt: 'Locations management placeholder', label: 'Locations' },
  { src: adminSettings, alt: 'Settings placeholder', label: 'Settings' },
]

export const kdsReliabilityAssets: ImageAsset[] = [
  { src: kitchenDisplay, alt: 'Kitchen display system placeholder', label: 'KDS workspace' },
  { src: kdsLive, alt: 'Realtime live mode placeholder', label: 'Live / demo mode' },
  { src: kdsDebug, alt: 'KDS debug simulator placeholder', label: 'Debug simulator' },
]

export const staffEntryAsset: ImageAsset = {
  src: staffLogin,
  alt: 'Staff login placeholder showing email and PIN options',
  label: 'Staff Login',
}

export const waiterAsset: ImageAsset = {
  src: waiterStation,
  alt: 'Waiter station placeholder showing floor and order states',
  label: 'Waiter Station',
}

export const architectureTooling: ToolCardData[] = [
  {
    tool: 'Lovable',
    description: 'Rapid product and interface prototyping to shape journeys and structure quickly.',
  },
  {
    tool: 'Cursor',
    description: 'Implementation, iteration, and code-level product refinement.',
  },
  {
    tool: 'Supabase',
    description: 'Database, authentication, and realtime infrastructure for synchronized interfaces.',
  },
  {
    tool: 'React',
    description: 'Frontend composition for customer, staff, and operations experiences.',
  },
  {
    tool: 'GitHub',
    description: 'Version control and deployment workflow for iterative product delivery.',
  },
]

export const aureliaCaseStudy: CaseStudyData = {
  slug: 'aurelia',
  backHref: '#selected-work',
  category: 'Hospitality · AI · Operations',
  projectName: 'AURELIA',
  systemTitle: 'AI-Powered Hospitality System',
  summary:
    'A connected hospitality system designed to align customer ordering, payments and restaurant operations through one integrated workflow.',
  heroMetadata: [
    { label: 'Role', value: 'Product concept · UX/UI · AI-assisted development' },
    { label: 'Project Type', value: 'Portfolio case study / product system' },
    { label: 'Focus', value: 'Customer flow · Staff operations · Kitchen workflow' },
    { label: 'Stack', value: 'OpenAI API · LangChain · Supabase · React · Vercel' },
  ],
  heroVisual: adminDashboard
    ? {
        src: adminDashboard,
        alt: 'Aurelia admin dashboard project visual',
        label: 'Selected project visual',
      }
    : undefined,
  context: {
    heading: 'Context',
    body:
      'AURELIA explores a connected hospitality workflow where customer interactions, staff operations and kitchen delivery are designed as one system rather than disconnected screens.',
  },
  problem: {
    heading: 'The Problem',
    body:
      'Restaurant teams often operate across fragmented tools for ordering, payments and service coordination. This fragmentation creates handoff friction, duplicated effort and reduced operational clarity.',
  },
  system: {
    heading: 'The System',
    body:
      'The solution architecture links customer touchpoints with operational interfaces so ordering, service state and kitchen progress can be managed through a connected data and workflow model.',
    visual: {
      src: kitchenDisplay,
      alt: 'Aurelia kitchen display system visual',
      label: 'System workflow visual placeholder',
    },
    visualNote: 'Reserved space for final system/workflow diagram in future iteration.',
  },
  howItWorks: [
    {
      id: '01',
      heading: 'Customer ordering flow',
      body:
        'Customer interactions are structured from menu exploration through cart confirmation so order intent can move cleanly into operational execution.',
      layout: 'side-by-side',
      images: [
        {
          src: customerMenu,
          alt: 'Aurelia customer ordering interface screenshot',
          label: 'Customer ordering flow',
        },
      ],
    },
    {
      id: '02',
      heading: 'Service and handoff states',
      body:
        'Operational surfaces support coordination between front-of-house and kitchen teams by keeping order state and status transitions visible.',
      layout: 'two-up',
      images: [waiterAsset, staffEntryAsset],
    },
    {
      id: '03',
      heading: 'Kitchen execution and tracking',
      body:
        'Kitchen workflow emphasizes actionability and timing clarity, with focused interfaces for preparation states and service handoff.',
      layout: 'large',
      images: [
        {
          src: kdsLive,
          alt: 'Aurelia kitchen live mode screenshot',
          label: 'Kitchen execution view',
        },
      ],
    },
  ],
  roleAndImplementation: [
    {
      label: 'Analysed',
      body: 'Customer, staff, admin and kitchen process requirements across service flow.',
    },
    {
      label: 'Designed',
      body: 'Information architecture and interaction logic for multi-role interfaces.',
    },
    {
      label: 'Configured',
      body: 'Core data and workflow structure to connect ordering, payment and operations.',
    },
    {
      label: 'Built',
      body: 'Interface prototypes and functional views for customer and operational contexts.',
    },
    {
      label: 'Connected',
      body: 'Key workflow touchpoints across customer actions, staff handling and kitchen execution.',
    },
    {
      label: 'Implemented',
      body: 'AI-assisted product development process from concept through integrated prototype.',
    },
  ],
  tools: [
    { label: 'AI & Knowledge', items: ['OpenAI API', 'LangChain'] },
    { label: 'Product & Development', items: ['React', 'TypeScript', 'Cursor'] },
    { label: 'Data, Backend & Deployment', items: ['Supabase', 'Vercel'] },
    { label: 'Workflow Context', items: ['Customer ordering', 'Staff operations', 'Kitchen workflow'] },
  ],
}
