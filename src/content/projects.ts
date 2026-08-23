import type {
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
    title: 'AURELIA',
    subtitle: 'AI-powered hospitality operating system',
    description:
      'A connected multi-interface platform aligning customer ordering, staff workflows, management visibility, and kitchen operations in one product ecosystem.',
    tags: ['AI-assisted product build', 'Realtime workflows', 'Multi-interface UX'],
    metadata: [
      {
        label: 'Product Areas',
        value: 'Customer · Staff · Admin · Kitchen',
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
    slug: 'case-study-2',
    title: 'Next Product Case Study',
    subtitle: 'Case study in progress',
    description:
      'Reserved for the next product narrative and implementation walkthrough.',
    tags: ['Case study in progress'],
    ctaLabel: 'Case study in progress',
    href: '#',
    status: 'placeholder',
    thumbnail: {
      src: placeholderThumb,
      alt: 'Placeholder for upcoming case study',
      label: 'Placeholder',
    },
  },
  {
    slug: 'case-study-3',
    title: 'Future System Build',
    subtitle: 'Case study in progress',
    description:
      'Space for an upcoming AI-assisted product system focused on operations and UX.',
    tags: ['Case study in progress'],
    ctaLabel: 'Case study in progress',
    href: '#',
    status: 'placeholder',
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
