interface SectionHeadProps {
  label: string
  statement: string
  aside?: string
  headingId?: string
}

export function SectionHead({ label, statement, aside, headingId }: SectionHeadProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
      <p className="meta-label lg:col-span-3 lg:pt-2">{label}</p>
      <h2 id={headingId} className="editorial-statement max-w-[34rem] lg:col-span-7">
        {statement}
      </h2>
      {aside ? (
        <p className="meta-label-quiet lg:col-span-2 lg:pt-2 lg:text-right">{aside}</p>
      ) : null}
    </div>
  )
}
