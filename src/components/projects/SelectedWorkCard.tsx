import { Link } from 'react-router-dom'
import type { ProjectCardData } from '../../types/portfolio'
import { italianHome } from '../../i18n/italian'

interface SelectedWorkCardProps {
  project: ProjectCardData
  index: number
  isItalian: boolean
  className?: string
}

function ProjectCardTitle({ project }: { project: ProjectCardData }) {
  if (project.cardTitleWide) {
    return (
      <>
        <h2 className="homepage-content-heading whitespace-pre-line md:hidden">{project.cardTitle}</h2>
        <h2 className="homepage-content-heading whitespace-pre-line hidden md:block">{project.cardTitleWide}</h2>
      </>
    )
  }

  return <h2 className="homepage-content-heading whitespace-pre-line">{project.cardTitle}</h2>
}

export function SelectedWorkCard({ project, index, isItalian, className = '' }: SelectedWorkCardProps) {
  const metadata = project.metadata?.[0]?.value ?? project.tags.join(' · ')
  const description = isItalian
    ? italianHome.selectedWork.descriptions[project.slug as keyof typeof italianHome.selectedWork.descriptions]
    : project.description
  const viewCaseStudyLabel = isItalian ? italianHome.selectedWork.viewCaseStudy : 'VIEW CASE STUDY →'

  const cardLinkClassName =
    'group flex min-h-[19rem] flex-1 flex-col border border-border/60 bg-[#EEE9F0] p-5 transition-colors duration-200 hover:bg-[#e9e4ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-h-[22rem] md:p-6'

  const cardInner = (
    <>
      <div className="flex shrink-0 items-start justify-between">
        <p className="font-serif text-[3rem] leading-none text-[#b5abbe]">{String(index + 1).padStart(2, '0')}</p>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 h-4 w-4 text-[#1f2522] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        >
          <path d="M5 19 19 5M9 5h10v10" />
        </svg>
      </div>
      <div className="min-h-0 flex-1" aria-hidden="true" />
      <div className="mt-auto shrink-0">
        <div className="min-h-[5.25rem] sm:min-h-[5.5rem] md:min-h-[6.25rem]">
          <ProjectCardTitle project={project} />
        </div>
        <p className="homepage-metadata mt-3 tracking-[0.12em] text-[#666e68] uppercase">{project.subtitle}</p>
      </div>
    </>
  )

  const ctaLink =
    project.href.startsWith('/') ? (
      <Link to={project.href} className="utility-action inline-flex text-secondary">
        {viewCaseStudyLabel}
      </Link>
    ) : (
      <a href={project.href} className="utility-action inline-flex text-secondary">
        {viewCaseStudyLabel}
      </a>
    )

  return (
    <article className={`flex h-full min-h-0 flex-col gap-5 ${className}`.trim()}>
      {project.href.startsWith('/') ? (
        <Link to={project.href} className={cardLinkClassName}>
          {cardInner}
        </Link>
      ) : (
        <a href={project.href} className={cardLinkClassName}>
          {cardInner}
        </a>
      )}

      <div className="flex min-h-0 flex-1 flex-col">
        <p className="homepage-body text-[#4d5651]">{description}</p>
        <div className="mt-auto pt-4">
          <p className="homepage-metadata border-t border-border/50 pt-3 tracking-[0.1em] text-[#5f6660] uppercase">
            {metadata}
          </p>
          <div className="pt-4">{ctaLink}</div>
        </div>
      </div>
    </article>
  )
}
