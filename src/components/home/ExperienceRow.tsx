import type { ExperienceEntry } from '../../types/portfolio'

interface ExperienceRowProps {
  entry: ExperienceEntry
}

export function ExperienceRow({ entry }: ExperienceRowProps) {
  return (
    <li className="border-t border-border/55 py-6 first:border-t-0 first:pt-0">
      <div className="grid gap-2 lg:grid-cols-12 lg:gap-8">
        <p className="meta-label-quiet lg:col-span-3 lg:pt-1">{entry.period}</p>
        <div className="lg:col-span-9">
          <h3 className="font-sans text-[1.28rem] leading-snug text-text lg:text-[1.4rem]">
            {entry.role}
          </h3>
          <p className="mt-2 max-w-[34rem] text-[0.96rem]">{entry.note}</p>
        </div>
      </div>
    </li>
  )
}
