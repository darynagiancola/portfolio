import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`space-y-4 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem]">{title}</h2>
      {description ? (
        <p
          className={`text-base sm:text-lg ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
