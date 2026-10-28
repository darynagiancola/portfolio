import { useCallback, useRef, useState, type TouchEvent } from 'react'

interface FuoriOraCarouselProps {
  slides: string[]
  slideAlt: string
  previousLabel: string
  nextLabel: string
  slideIndicatorLabel: (current: number, total: number) => string
  missingSlidesMessage: string
}

export function FuoriOraCarousel({
  slides,
  slideAlt,
  previousLabel,
  nextLabel,
  slideIndicatorLabel,
  missingSlidesMessage,
}: FuoriOraCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const total = slides.length
  const hasSlides = total > 0
  const safeIndex = hasSlides ? Math.min(activeIndex, total - 1) : 0

  const goTo = useCallback(
    (index: number) => {
      if (!hasSlides) return
      const wrapped = (index + total) % total
      setActiveIndex(wrapped)
    },
    [hasSlides, total],
  )

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || !hasSlides) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    goTo(safeIndex + (delta < 0 ? 1 : -1))
  }

  const navButtonClassName =
    'rounded-sm border border-border/60 bg-bg px-3 py-2 text-[0.72rem] font-semibold tracking-[0.12em] text-text uppercase shadow-soft transition hover:bg-surface'

  if (!hasSlides) {
    return (
      <div className="flex aspect-[4/5] max-w-md flex-col items-center justify-center border border-dashed border-border/70 bg-surface/40 px-6 text-center">
        <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-secondary uppercase">Carousel</p>
        <p className="mt-3 text-[0.95rem] leading-[1.55] text-muted">{missingSlidesMessage}</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-xl lg:max-w-none">
      <div
        className="overflow-hidden border border-border/55 bg-surface/30"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="aspect-[4/5] w-full">
          <img
            key={slides[safeIndex]}
            src={slides[safeIndex]}
            alt={`${slideAlt} (${safeIndex + 1}/${total})`}
            className="block h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => goTo(safeIndex - 1)} aria-label={previousLabel} className={navButtonClassName}>
          ←
        </button>
        <p className="text-[0.72rem] tracking-[0.12em] text-muted uppercase">
          {slideIndicatorLabel(safeIndex + 1, total)}
        </p>
        <button type="button" onClick={() => goTo(safeIndex + 1)} aria-label={nextLabel} className={navButtonClassName}>
          →
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            aria-label={slideIndicatorLabel(index + 1, total)}
            onClick={() => goTo(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === safeIndex ? 'bg-secondary' : 'bg-border hover:bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
