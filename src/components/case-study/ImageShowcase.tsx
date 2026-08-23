import type { ImageAsset } from '../../types/portfolio'

interface ImageShowcaseProps {
  image: ImageAsset
  framed?: boolean
  tone?: 'light' | 'dark'
}

export function ImageShowcase({ image, framed = true, tone = 'light' }: ImageShowcaseProps) {
  return (
    <figure className="space-y-3">
      <div
        className={`overflow-hidden rounded-card border ${
          tone === 'dark'
            ? 'border-dark-border/80 bg-slate-900/35'
            : 'border-border bg-bg'
        }`}
      >
        {framed ? (
          <div
            className={`flex items-center gap-1.5 border-b px-3 py-2 ${
              tone === 'dark'
                ? 'border-dark-border/70 bg-slate-900/60'
                : 'border-border/80 bg-surface-alt/75'
            }`}
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-[#d1896a]"></span>
            <span className="h-2 w-2 rounded-full bg-[#d7b168]"></span>
            <span className="h-2 w-2 rounded-full bg-[#88a082]"></span>
          </div>
        ) : null}
        <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <figcaption
        className={`text-sm ${tone === 'dark' ? 'text-slate-300' : 'text-muted'}`}
      >
        {image.label}
        {image.note ? ` — ${image.note}` : ''}
      </figcaption>
    </figure>
  )
}
