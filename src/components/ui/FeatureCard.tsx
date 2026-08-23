import type { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  tone?: 'light' | 'dark'
}

export function FeatureCard({
  title,
  description,
  icon,
  tone = 'light',
}: FeatureCardProps) {
  const cardTone =
    tone === 'dark'
      ? 'border-dark-border/70 bg-dark-surface/35 text-slate-100'
      : 'border-border bg-surface text-text'

  const textTone = tone === 'dark' ? 'text-slate-300' : 'text-muted'

  return (
    <article
      className={`rounded-card border p-5 shadow-soft transition duration-200 hover:-translate-y-0.5 ${cardTone}`}
    >
      <div className="space-y-3">
        {icon ? <div className="text-accent">{icon}</div> : null}
        <h3 className="text-xl">{title}</h3>
        <p className={textTone}>{description}</p>
      </div>
    </article>
  )
}
