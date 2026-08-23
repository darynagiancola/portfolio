import type { ReactNode } from 'react'

interface CaseStudySectionProps {
  id: string
  index: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  children: ReactNode
}

export function CaseStudySection({
  id,
  index,
  title,
  description,
  tone = 'light',
  children,
}: CaseStudySectionProps) {
  const sectionTone =
    tone === 'dark'
      ? 'border-dark-border bg-dark-surface text-slate-100'
      : 'border-border bg-surface text-text'

  const descriptionTone = tone === 'dark' ? 'text-slate-300' : 'text-muted'

  return (
    <section id={id} className="content-wrap py-8 sm:py-12">
      <div className={`rounded-panel border p-6 sm:p-10 ${sectionTone}`}>
        <header className="mb-8 space-y-4">
          <p className="text-xs tracking-[0.18em] uppercase">{index}</p>
          <h2 className={`text-3xl sm:text-4xl ${tone === 'dark' ? 'text-slate-100' : ''}`}>
            {title}
          </h2>
          {description ? <p className={`max-w-3xl text-base sm:text-lg ${descriptionTone}`}>{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
