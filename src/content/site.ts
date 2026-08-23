import type {
  AboutStanza,
  ExperienceEntry,
  InformationBandItem,
  NavigationLink,
} from '../types/portfolio'

/* ------------------------------------------------------------------ *
 * APPROVED COPY
 * Signed off. Do not reword without an explicit review.
 * ------------------------------------------------------------------ */

export const navigationLinks: NavigationLink[] = [
  { label: 'Work', href: '#selected-work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  eyebrow: 'AI PRODUCTS · AUTOMATION · DIGITAL SYSTEMS',
  portfolioWord: 'PORTFOLIO',
  title: 'I design intelligent systems that make work simpler.',
  intro:
    'AI-powered products, automation and digital experiences built around real business needs.',
  primaryCta: { label: 'Explore selected work', href: '#selected-work' },
}

/* ------------------------------------------------------------------ *
 * MIXED PROVENANCE
 * Only "Based in" is approved. The remaining two values are placeholders
 * that shape the band architecture and are expected to be replaced.
 * ------------------------------------------------------------------ */

export const informationBand: InformationBandItem[] = [
  { label: 'Based in', value: 'Brescia, Italy', status: 'approved' },
  {
    label: 'Background',
    value: 'AI · Automation · Digital Strategy',
    status: 'provisional',
  },
  {
    label: 'Working across',
    value: 'Product · Operations · Marketing',
    status: 'provisional',
  },
]

/* ------------------------------------------------------------------ *
 * PROVISIONAL COPY
 * Placeholder text written only to hold the layout. None of it is a
 * factual claim, and all of it is expected to be rewritten.
 * ------------------------------------------------------------------ */

/** Statement carried over from the current homepage. Not formally approved. */
export const workContent = {
  label: 'Selected work',
  statement:
    'A case-study-driven portfolio of AI-enabled products, automation and connected operational systems.',
  indexLabel: 'Additional projects',
  indexNote:
    'Provisional slots. Case studies are written individually rather than listed as thumbnails.',
}

export const aboutContent = {
  label: 'About',
  statement:
    'My work sits between business thinking, technology and implementation — understanding how an organisation actually operates, then building the system that removes the friction.',
  lede: 'Provisional copy. To be replaced during the About writing pass.',
  stanzas: [
    {
      label: 'Business context',
      body: 'Start from the operation: who does the work, where it breaks, and what a better version would look like.',
    },
    {
      label: 'System architecture',
      body: 'Shape products as connected systems across customers, teams and operations rather than isolated screens.',
    },
    {
      label: 'Implementation',
      body: 'Build and integrate the result, so the design survives contact with real workflows and real data.',
    },
  ] satisfies AboutStanza[],
}

export const capabilityRail = [
  'AI & LLMs',
  'Automation & workflows',
  'APIs & integrations',
  'Digital products',
  'Process architecture',
  'Implementation',
]

export const experienceContent = {
  label: 'Experience',
  statement:
    'Selected professional progression toward AI, automation and connected digital systems.',
  note: 'Provisional structure. Selected roles and periods to be added — deliberately not a complete chronology.',
  entries: [
    {
      period: 'Period to confirm',
      role: 'Selected role placeholder',
      note: 'Reserved for a role that shows the move toward digital systems and business strategy.',
      status: 'provisional',
    },
    {
      period: 'Period to confirm',
      role: 'Selected role placeholder',
      note: 'Reserved for a role covering marketing, operations or process ownership.',
      status: 'provisional',
    },
    {
      period: 'Period to confirm',
      role: 'Selected role placeholder',
      note: 'Reserved for current work across AI products, automation and implementation.',
      status: 'provisional',
    },
  ] satisfies ExperienceEntry[],
}

export const closingContent = {
  label: 'Contact',
  /** Provisional. Five alternatives to be proposed in the copy pass. */
  statement: 'LET’S BUILD SOMETHING THAT ACTUALLY WORKS.',
  description:
    'Open to professional opportunities and selected collaborations around AI products, automation and digital systems.',
  availability: 'Remote-first · Open to focused collaborations',
}

/* Shared by the Aurelia case-study footer. Placeholder contact details. */
export const contactContent = {
  title: 'LET’S BUILD SOMETHING THAT ACTUALLY WORKS.',
  description:
    'If you have a process that should be smarter, let’s design and build a practical system around it.',
  email: 'hello@example.com',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/darynagiancola',
}
