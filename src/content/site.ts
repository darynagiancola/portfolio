import type { NavigationLink } from '../types/portfolio'

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
  primaryCta: { label: 'View my work', href: '#selected-work' },
  secondaryCta: { label: 'About me', href: '#about' },
  locationNote: 'Remote-first · Open to focused collaborations',
}

export const whatIWorkWith = [
  {
    id: '01',
    title: 'AI Products',
    description:
      'Designing practical AI features with clear user value and operational intent.',
  },
  {
    id: '02',
    title: 'Automation & Workflows',
    description:
      'Connecting tools and processes to reduce friction across recurring business tasks.',
  },
  {
    id: '03',
    title: 'Intelligent Digital Experiences',
    description:
      'Building interfaces where clarity, speed, and system logic are equally important.',
  },
  {
    id: '04',
    title: 'Business System Architecture',
    description:
      'Structuring products as connected systems across users, teams, and operations.',
  },
]

export const credibilityStrip = [
  { label: 'AI Products', icon: '01' },
  { label: 'Automation Systems', icon: '02' },
  { label: 'Business Workflows', icon: '03' },
  { label: 'End-to-end Implementation', icon: '04' },
]

export const howIWorkSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the business, users and friction.',
  },
  {
    step: '02',
    title: 'Architect',
    description: 'Define the system, workflow and AI opportunities.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Create the product, automation or digital experience.',
  },
  {
    step: '04',
    title: 'Connect',
    description: 'Integrate tools, data, APIs and workflows.',
  },
  {
    step: '05',
    title: 'Refine',
    description: 'Test, simplify and improve the system.',
  },
]

export const experienceBlocks = [
  {
    title: 'Product systems thinking',
    description:
      'From customer touchpoints to operational workflows, projects are framed as connected systems instead of isolated screens.',
  },
  {
    title: 'AI-native execution',
    description:
      'Design and implementation move in parallel using AI-assisted prototyping, coding, and rapid iteration loops.',
  },
  {
    title: 'UX/UI with implementation depth',
    description:
      'Interfaces are developed with production-aware constraints, accessibility, and clear handoff-ready component structures.',
  },
]

export const contactContent = {
  title: 'LET’S BUILD SOMETHING THAT ACTUALLY WORKS.',
  description:
    'If you have a process that should be smarter, let’s design and build a practical system around it.',
  email: 'hello@example.com',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/darynagiancola',
}
