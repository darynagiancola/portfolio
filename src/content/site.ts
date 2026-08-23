import type { NavigationLink } from '../types/portfolio'

export const navigationLinks: NavigationLink[] = [
  { label: 'Work', href: '#selected-work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  eyebrow: 'AI PRODUCTS · AUTOMATION · DIGITAL SYSTEMS',
  title: 'I design intelligent systems that make work simpler.',
  intro:
    'AI-powered products, automation and digital experiences built around real business needs.',
  primaryCta: { label: 'View my work', href: '#selected-work' },
  secondaryCta: { label: 'About me', href: '#about' },
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
