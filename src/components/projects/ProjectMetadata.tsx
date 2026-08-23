import type { MetadataItem } from '../../types/portfolio'

interface ProjectMetadataProps {
  items: MetadataItem[]
}

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-card border border-border/70 bg-surface p-4"
        >
          <dt className="mb-2 text-xs tracking-[0.18em] text-muted uppercase">
            {item.label}
          </dt>
          <dd className="text-sm text-text sm:text-base">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
