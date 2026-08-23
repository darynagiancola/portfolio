import { Link } from 'react-router-dom'
import type { ImageAsset, ProjectCardData } from '../../types/portfolio'

interface ProjectSpreadProps {
  project: ProjectCardData
  supportingMedia: ImageAsset[]
}

export function ProjectSpread({ project, supportingMedia }: ProjectSpreadProps) {
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <p className="meta-label">Flagship project</p>
        <h3 className="hero-display mt-4 text-[clamp(3.2rem,13vw,4.2rem)] leading-[0.86] text-[#20241f] uppercase sm:text-[clamp(4.4rem,9vw,6rem)] lg:text-[5.4rem]">
          {project.title}
        </h3>
        <p className="mt-4 text-[1.05rem] text-text sm:text-[1.15rem]">{project.subtitle}</p>
        <p className="mt-4 max-w-[34rem] text-[0.98rem] sm:text-[1.02rem]">{project.description}</p>

        {project.metadata?.map((item) => (
          <div key={item.label} className="mt-7 border-t border-border/55 pt-4">
            <p className="meta-label-quiet">{item.label}</p>
            <p className="mt-2 text-[0.98rem] text-text sm:text-[1.02rem]">{item.value}</p>
          </div>
        ))}

        <div className="mt-4 border-t border-border/55 pt-4">
          <p className="meta-label-quiet">System areas</p>
          <p className="mt-2 text-[0.94rem] text-text">{project.tags.join(' · ')}</p>
        </div>

        <Link
          to={project.href}
          className="mt-8 inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-[0.72rem] tracking-[0.18em] text-bg uppercase transition hover:bg-transparent hover:text-accent"
        >
          {project.ctaLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <figure>
          <div className="overflow-hidden rounded-card border border-border/70 bg-surface">
            <img
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
          <figcaption className="meta-label-quiet mt-3">{project.thumbnail.label}</figcaption>
        </figure>

        <div className="mt-7 grid grid-cols-2 gap-5">
          {supportingMedia.map((asset, index) => (
            <figure key={asset.label} className={index === 1 ? 'sm:mt-8' : undefined}>
              <div className="overflow-hidden rounded-card border border-border/70 bg-surface">
                <img
                  src={asset.src}
                  alt={asset.alt}
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <figcaption className="meta-label-quiet mt-3">{asset.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  )
}
