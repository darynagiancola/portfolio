import type { CaseStudyData, CaseStudyHowItWorksBlock, ImageAsset } from '../../types/portfolio'

interface CaseStudyTemplateProps {
  caseStudy: CaseStudyData
}

function FramedImage({ image, heightClass = 'h-[19rem]' }: { image: ImageAsset; heightClass?: string }) {
  return (
    <figure className="space-y-2">
      <div className={`overflow-hidden border border-border/60 bg-surface ${heightClass}`}>
        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <figcaption className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">{image.label}</figcaption>
    </figure>
  )
}

function HowItWorksBlock({ block }: { block: CaseStudyHowItWorksBlock }) {
  const primaryImage = block.images[0]

  return (
    <article className="space-y-5 border-t border-border/45 pt-7 first:border-t-0 first:pt-0">
      <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
        <p className="text-[1.25rem] font-semibold tracking-[0.08em] text-secondary">{block.id}</p>
        <div>
          <h4 className="font-sans text-[1.55rem] font-semibold leading-[1.1] text-text">{block.heading}</h4>
          <p className="mt-3 max-w-[45rem] text-[1.02rem] leading-[1.55] text-muted">{block.body}</p>
        </div>
      </div>

      {block.layout === 'side-by-side' && primaryImage ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div></div>
          <FramedImage image={primaryImage} />
        </div>
      ) : null}

      {block.layout === 'two-up' ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {block.images.slice(0, 2).map((image) => (
            <FramedImage key={image.label} image={image} />
          ))}
        </div>
      ) : null}

      {block.layout === 'large' && primaryImage ? <FramedImage image={primaryImage} heightClass="h-[26rem]" /> : null}
    </article>
  )
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  const optionalSections = [
    caseStudy.optionalSections?.results
      ? { id: '07', heading: 'Results / Impact', body: caseStudy.optionalSections.results.body }
      : null,
    caseStudy.optionalSections?.lessons
      ? { id: '08', heading: 'Lessons / Iterations', body: caseStudy.optionalSections.lessons.body }
      : null,
  ].filter(Boolean) as Array<{ id: string; heading: string; body: string }>

  return (
    <main id="main-content">
      <section className="content-wrap py-14 sm:py-16 lg:py-20">
        <a
          href={`${import.meta.env.BASE_URL}${caseStudy.backHref}`}
          className="inline-flex text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase hover:text-text"
        >
          ← BACK TO WORK
        </a>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div>
            <p className="text-[0.74rem] font-semibold tracking-[0.15em] text-secondary uppercase">
              CASE STUDY · {caseStudy.category}
            </p>
            <h1 className="mt-4 font-sans text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[0.97] text-text">
              {caseStudy.projectName}
            </h1>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.02] text-text">
              {caseStudy.systemTitle}
            </h2>
            <p className="mt-6 max-w-[42rem] text-[1.1rem] leading-[1.55] text-muted">{caseStudy.summary}</p>

            <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {caseStudy.heroMetadata.map((item) => (
                <div key={item.label} className="border-t border-border/45 pt-3">
                  <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {caseStudy.heroVisual ? (
            <div className="border border-border/60 bg-surface p-3">
              <FramedImage image={caseStudy.heroVisual} heightClass="h-[20rem]" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="content-wrap py-16">
        <div className="grid gap-14">
          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">01</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">{caseStudy.context.heading}</h3>
              <p className="mt-4 max-w-[54rem] text-[1.08rem] leading-[1.58] text-muted">{caseStudy.context.body}</p>
            </div>
          </article>

          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">02</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">{caseStudy.problem.heading}</h3>
              <p className="mt-4 max-w-[54rem] text-[1.08rem] leading-[1.58] text-muted">{caseStudy.problem.body}</p>
            </div>
          </article>

          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">03</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">{caseStudy.system.heading}</h3>
              <p className="mt-4 max-w-[54rem] text-[1.08rem] leading-[1.58] text-muted">{caseStudy.system.body}</p>
              {caseStudy.system.visual ? (
                <div className="mt-7">
                  <FramedImage image={caseStudy.system.visual} heightClass="h-[24rem]" />
                </div>
              ) : null}
              {caseStudy.system.visualNote ? (
                <p className="mt-3 text-[0.82rem] tracking-[0.1em] text-muted uppercase">{caseStudy.system.visualNote}</p>
              ) : null}
            </div>
          </article>

          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">04</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">How It Works</h3>
              <p className="mt-4 max-w-[54rem] text-[1.08rem] leading-[1.58] text-muted">
                Selected interface moments that explain the system in use.
              </p>
              <div className="mt-8 space-y-10">
                {caseStudy.howItWorks.map((block) => (
                  <HowItWorksBlock key={block.id} block={block} />
                ))}
              </div>
            </div>
          </article>

          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">05</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">My Role &amp; Implementation</h3>
              <div className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {caseStudy.roleAndImplementation.map((item) => (
                  <div key={item.label} className="border-t border-border/45 pt-3">
                    <p className="text-[0.72rem] font-semibold tracking-[0.13em] text-secondary uppercase">{item.label}</p>
                    <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="grid gap-6 lg:grid-cols-[auto_1fr]">
            <p className="text-[2.2rem] font-semibold leading-none text-secondary">06</p>
            <div>
              <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">Tools &amp; Technology</h3>
              <div className="mt-7 space-y-5">
                {caseStudy.tools.map((group) => (
                  <div key={group.label} className="border-t border-border/45 pt-3">
                    <p className="text-[0.74rem] font-semibold tracking-[0.13em] text-secondary uppercase">{group.label}</p>
                    <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {optionalSections.map((section) => (
            <article key={section.id} className="grid gap-6 lg:grid-cols-[auto_1fr]">
              <p className="text-[2.2rem] font-semibold leading-none text-secondary">{section.id}</p>
              <div>
                <h3 className="font-sans text-[2.1rem] font-semibold leading-[1.02] text-text">{section.heading}</h3>
                <p className="mt-4 max-w-[54rem] text-[1.08rem] leading-[1.58] text-muted">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
