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
}

export const whatIWorkWith = [
  {
    id: '01',
    title: 'AI Products',
    description:
      'Shaping practical AI experiences from concept framing to interface behavior.',
  },
  {
    id: '02',
    title: 'Automation',
    description:
      'Designing connected flows that reduce manual steps and improve operational clarity.',
  },
  {
    id: '03',
    title: 'Digital Systems',
    description:
      'Structuring products as linked customer and team workspaces, not isolated screens.',
  },
  {
    id: '04',
    title: 'AI-assisted Development',
    description:
      'Using AI-native build loops to move faster while keeping product quality intentional.',
  },
]

export const howIWorkSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Clarify context, users, and operational needs before interface decisions.',
  },
  {
    step: '02',
    title: 'Map',
    description: 'Define flows, dependencies, and system touchpoints across roles.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop product-ready interfaces and implementation structure in parallel.',
  },
  {
    step: '04',
    title: 'Connect',
    description: 'Align customer journeys and internal workflows into one connected system.',
  },
  {
    step: '05',
    title: 'Refine',
    description: 'Iterate details, edge cases, and product behavior for operational clarity.',
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
  title: 'Let’s build something intelligent together.',
  description:
    'Open to focused collaborations across AI products, automation, and digital systems.',
  email: 'hello@example.com',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/darynagiancola',
}
