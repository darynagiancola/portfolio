export interface NavigationLink {
  label: string
  href: string
}

/**
 * Marks whether a string is signed-off portfolio copy or still a placeholder.
 * Provisional copy must never be presented as a factual claim.
 */
export type CopyStatus = 'approved' | 'provisional'

export interface InformationBandItem {
  label: string
  value: string
  status: CopyStatus
}

export interface AboutStanza {
  label: string
  body: string
}

export interface ExperienceEntry {
  period: string
  role: string
  note: string
  status: CopyStatus
}

export interface ImageAsset {
  src: string
  alt: string
  label: string
  note?: string
}

export type ProjectStatus = 'featured' | 'placeholder'

export interface ProjectCardData {
  slug: string
  title: string
  subtitle: string
  description: string
  featured?: boolean
  visualState?: 'final' | 'placeholder'
  tags: string[]
  metadata?: MetadataItem[]
  ctaLabel: string
  href: string
  status: ProjectStatus
  dominant?: boolean
  thumbnail: ImageAsset
}

export interface MetadataItem {
  label: string
  value: string
}

export interface RoleCardData {
  role: string
  description: string
}

export interface ToolCardData {
  tool: string
  description: string
}

export interface CaseStudyNarrativeSection {
  heading: string
  body: string
}

export interface CaseStudyFeatureSection {
  label: string
  title: string
  copy: string
  features: string[]
  images: ImageAsset[]
  ctaLabel: string
  ctaHref: string
}

export interface CaseStudyData {
  slug: string
  backHref: string
  projectName: string
  projectDescriptor: string
  category: string
  intro: string[]
  heroMetadata: MetadataItem[]
  customerExperience: CaseStudyFeatureSection
  operationsPlatform: CaseStudyFeatureSection
  kitchenDisplaySystem: CaseStudyFeatureSection
  approach: {
    label: string
    copy: string
  }
  technologiesLine: string
}
