export interface NavigationLink {
  label: string
  href: string
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
