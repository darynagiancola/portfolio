import type { NavigationLink } from '../types/portfolio'

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  eyebrow: 'AI-assisted product building',
  title: 'Designing connected digital products at the intersection of AI, automation, and UX/UI.',
  intro:
    'I craft product experiences that move from idea to interface to implementation — combining design thinking, vibe coding, and system-level product execution.',
  primaryCta: { label: 'Explore selected work', href: '#selected-work' },
  secondaryCta: { label: 'Open AURELIA case study', href: '/projects/aurelia' },
}

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
  title: 'Let’s build the next product chapter.',
  description:
    'Open to product collaborations where design, automation, and AI-assisted development can create measurable operational clarity.',
  email: 'hello@example.com',
}
