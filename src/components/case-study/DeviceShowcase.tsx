import type { ImageAsset } from '../../types/portfolio'

interface DeviceShowcaseProps {
  image: ImageAsset
}

export function DeviceShowcase({ image }: DeviceShowcaseProps) {
  return (
    <figure className="space-y-3">
      <div className="mx-auto w-full max-w-[18rem] rounded-[2rem] border border-border bg-slate-900 p-2 shadow-card">
        <div className="mb-2 flex justify-center">
          <span className="h-1.5 w-16 rounded-full bg-slate-700"></span>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-700 bg-bg">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <figcaption className="text-center text-sm text-muted">{image.label}</figcaption>
    </figure>
  )
}
