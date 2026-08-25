import type { CaseStudyData, ProjectCardData } from '../types/portfolio'
import customerExperienceHome from '../assets/projects/aurelia/01-customer-experience-home.png'
import aiBaristaOrder from '../assets/projects/aurelia/02-ai-barista-order.png'
import cartPromoFlow from '../assets/projects/aurelia/03-cart-promo-flow.png'
import simulatedPayment from '../assets/projects/aurelia/04-simulated-payment.png'
import customerOrderingInterface from '../assets/projects/aurelia/05-operations-dashboard.png'
import adminDashboardView from '../assets/projects/aurelia/06-admin-floor-plan.png'
import waiterFloorPlan from '../assets/projects/aurelia/07-waiter-floor-plan.png'
import waiterActiveOrders from '../assets/projects/aurelia/08-waiter-active-orders.png'
import kdsLiveBoard from '../assets/projects/aurelia/09-kds-live-board.png'
import kdsDebugRecovery from '../assets/projects/aurelia/10-kds-debug-recovery.png'
import makeLeadRoutingArchitecture from '../assets/projects/lead-marketing/07-make-lead-routing-architecture-cropped.png'
import finAiMessenger from '../assets/projects/ai-support/01-fin-ai-messenger.png'
import placeholderThumb from '../assets/projects/placeholder-case-study.svg'

export const projectCards: ProjectCardData[] = [
  {
    slug: 'aurelia',
    title: 'AI-Powered Hospitality System',
    subtitle: 'AI · PRODUCT · OPERATIONS',
    description:
      'A connected hospitality ecosystem covering customer experience, AI-assisted ordering, restaurant operations and real-time kitchen workflows.',
    featured: true,
    visualState: 'final',
    tags: ['AI Agent', 'Ordering', 'Payments', 'Kitchen Display', 'Automation'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'CURSOR · OPENAI API · LANGCHAIN · SUPABASE · LOVABLE',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '/projects/aurelia',
    status: 'featured',
    dominant: true,
    thumbnail: {
      src: customerExperienceHome,
      alt: 'Aurelia customer experience homepage preview',
      label: 'AURELIA preview',
    },
  },
  {
    slug: 'lead-marketing-automation-system',
    title: 'Lead & Marketing Automation System',
    subtitle: 'AUTOMATION · CRM · MARKETING',
    description:
      'A lead generation and nurturing system connecting content, email automation, webinar qualification, CRM progression and strategy-call booking.',
    featured: true,
    visualState: 'final',
    tags: ['Lead capture', 'ActiveCampaign', 'Webinar workflows', 'Pipedrive'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'ACTIVECAMPAIGN · MAKE · TYPEFORM · CAL.COM · CRM',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '/projects/lead-marketing',
    status: 'featured',
    thumbnailMode: 'cover',
    thumbnail: {
      src: makeLeadRoutingArchitecture,
      alt: 'Lead routing and CRM automation workflow modules preview',
      label: 'Lead & marketing workflow',
    },
  },
  {
    slug: 'ai-support-ticket-routing',
    title: 'AI Support & Workflow Routing',
    subtitle: 'AI · CUSTOMER OPERATIONS · AUTOMATION',
    description:
      'An AI-assisted support system using Fin and a structured knowledge base to answer customer questions, route requests and connect qualified sales enquiries with the appropriate workflow.',
    featured: true,
    visualState: 'final',
    tags: ['Intercom', 'AI support', 'Knowledge base', 'Routing / escalation'],
    metadata: [
      {
        label: 'Technology / context',
        value: 'INTERCOM · FIN AI · PIPEDRIVE · MAKE',
      },
    ],
    ctaLabel: 'View Case Study',
    href: '/projects/ai-support',
    status: 'featured',
    thumbnailMode: 'cover',
    thumbnailPosition: '50% 64%',
    thumbnail: {
      src: finAiMessenger,
      alt: 'Intercom Fin AI messenger interface preview',
      label: 'AI support preview',
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

export const aureliaCaseStudy: CaseStudyData = {
  slug: 'aurelia',
  backHref: '#selected-work',
  projectName: 'AURELIA CAFÉ',
  projectDescriptor: 'AI-powered hospitality ecosystem',
  category: 'Case Study',
  intro: [
    'A concept project exploring how customer experience, restaurant operations and kitchen workflows can work as one connected hospitality system.',
    'Rather than designing a single interface, I developed three complementary prototypes around the same café concept, each focused on a different part of the operational journey.',
    'Aurelia brings together three complementary prototypes: a customer-facing AI Café, a multi-role operations platform and a real-time Kitchen Display System.',
  ],
  heroMetadata: [
    { label: 'Role', value: 'Product concept · UX/UI · AI-assisted development' },
    { label: 'Project Type', value: 'Concept project · connected hospitality ecosystem' },
    { label: 'Focus', value: 'Customer experience · operations workflows · kitchen execution' },
    { label: 'Structure', value: '3 complementary prototypes in one operational system' },
  ],
  customerExperience: {
    label: 'CUSTOMER EXPERIENCE',
    title: 'Ordering with an AI layer',
    copy:
      'A customer-facing café experience combining a browsable menu, cart and promotional logic with an AI Barista that helps customers choose products based on preferences, dietary requirements and budget.\n\nThe assistant works with structured menu and pricing data, can recommend combinations, calculate an order and prepare selected items for the cart.\n\nThe checkout journey continues through promo-code logic and a simulated payment flow, allowing the complete ordering experience to be tested without processing real payments.',
    features: [
      'AI Barista recommendations',
      'Structured menu and pricing data',
      'Cart and order calculation',
      'Promo-code logic',
      'Simulated payment flow',
    ],
    images: [
      {
        src: customerExperienceHome,
        alt: 'Aurelia customer homepage showing hero area, menu entry points, and primary ordering actions.',
        label: '01 · Customer experience home',
      },
      {
        src: aiBaristaOrder,
        alt: 'AI Barista conversation proposing combinations under a user budget and preparing cart-ready options.',
        label: '02 · AI Barista order assistant',
      },
      {
        src: cartPromoFlow,
        alt: 'Customer cart and promo-code flow showing line items, order summary, and discount logic.',
        label: '03 · Cart + promo flow',
      },
      {
        src: simulatedPayment,
        alt: 'Simulated payment step continuing checkout without real payment processing.',
        label: '04 · Simulated payment flow',
      },
    ],
    ctaLabel: 'View AI Café',
    ctaHref: 'https://darynagiancola.github.io/ai-cafe',
  },
  operationsPlatform: {
    label: 'OPERATIONS PLATFORM',
    title: 'One workspace for the restaurant team',
    copy:
      'A broader hospitality management prototype designed around the different people involved in daily restaurant operations.\n\nCustomers can browse the menu, order and reserve a table, while staff access role-specific workspaces for waiter, kitchen and management workflows.\n\nThe management side includes operational dashboards, table and floor status, staff management, menu controls, locations and system settings.',
    features: [
      'Customer ordering and reservations',
      'Role-based staff access',
      'Waiter station and active orders',
      'Kitchen workflow',
      'Floor and table management',
      'Operational dashboard',
      'Staff and system management',
    ],
    images: [
      {
        src: customerOrderingInterface,
        alt: 'Customer ordering and menu interface showing categories, item cards, and add-to-order actions.',
        label: '05 · CUSTOMER ORDERING INTERFACE',
      },
      {
        src: adminDashboardView,
        alt: 'Admin dashboard showing operational metrics, revenue cards, and weekly performance chart.',
        label: '06 · ADMIN DASHBOARD',
      },
      {
        src: waiterFloorPlan,
        alt: 'Waiter operational floor-plan view used during service for table state management.',
        label: '07 · Waiter floor-plan view',
      },
      {
        src: waiterActiveOrders,
        alt: 'Waiter active-orders view showing table orders, status chips, and totals during service.',
        label: '08 · Waiter active orders',
      },
    ],
    ctaLabel: 'View Hospitality Platform',
    ctaHref: 'https://aureliacafe.lovable.app/',
  },
  kitchenDisplaySystem: {
    label: 'KITCHEN DISPLAY SYSTEM',
    title: 'Real-time kitchen execution',
    copy:
      'A standalone KDS prototype focused specifically on what happens after an order reaches the kitchen.\n\nOrders move through New, In Progress and Ready to Serve states, with real-time synchronization through Supabase.\n\nI also built a simulation and recovery layer for testing operational failures such as delayed events, missing orders, incorrect status transitions and inconsistent screen states. This made the project an opportunity to think beyond the interface and explore reliability in real-time operational systems.',
    features: [
      'Real-time order synchronization',
      'Kitchen status workflow',
      'Order timers and prioritization',
      'Live and demo modes',
      'Failure simulation',
      'Recovery paths and state consistency',
    ],
    images: [
      {
        src: kdsLiveBoard,
        alt: 'Live KDS board with New, In Progress, and Ready to Serve columns synchronized in real time.',
        label: '09 · Live KDS board',
      },
      {
        src: kdsDebugRecovery,
        alt: 'KDS debug and recovery panel simulating failures and guiding state-consistency recovery paths.',
        label: '10 · Debug and recovery layer',
      },
    ],
    ctaLabel: 'View KDS',
    ctaHref: 'https://darynagiancola.github.io/kds-dashboard/',
  },
  approach: {
    label: 'THE APPROACH',
    copy:
      'The three prototypes explore the same business from different perspectives: the customer placing an order, the team managing service and the kitchen executing it.\n\nThe goal was to think through the workflow as a system, including how information moves between roles, where AI can be useful and what happens when operational data does not behave as expected.',
  },
  technologiesLine:
    'React · TypeScript · Vite · Supabase · OpenAI API · LangChain · Cursor · Lovable · v0.dev · GitHub · Vercel',
}
