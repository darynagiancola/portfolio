import type { CaseStudyData, CaseStudyFeatureSection, ImageAsset } from '../../types/portfolio'

interface CaseStudyTemplateProps {
  caseStudy: CaseStudyData
}

function FramedImage({ image, heightClass = 'h-[19rem]' }: { image: ImageAsset; heightClass?: string }) {
  return (
    <figure className="space-y-2">
      <div className={`overflow-hidden border border-border/60 bg-surface ${heightClass}`}>
        <img src={image.src} alt={image.alt} className="h-full w-full object-contain" loading="lazy" />
      </div>
      <figcaption className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">{image.label}</figcaption>
    </figure>
  )
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mt-7 grid gap-x-8 gap-y-2 sm:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="text-[0.95rem] leading-[1.45] text-[#4f5852]">
          • {feature}
        </li>
      ))}
    </ul>
  )
}

function SectionIntro({ section }: { section: CaseStudyFeatureSection }) {
  const copyParagraphs = section.copy.split('\n\n')

  return (
    <div>
      <p className="section-label">{section.label}</p>
      <h2 className="mt-4 font-serif text-[clamp(2.1rem,4.4vw,3.35rem)] leading-[1.02] text-[#1f2522]">{section.title}</h2>
      <div className="mt-6 space-y-4">
        {copyParagraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-[50rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
            {paragraph}
          </p>
        ))}
      </div>
      <FeatureList features={section.features} />
      <a
        href={section.ctaHref}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase hover:text-[#2c312d]"
      >
        {section.ctaLabel} →
      </a>
    </div>
  )
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  return (
    <main id="main-content">
      <section className="content-wrap pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <a
          href={`${import.meta.env.BASE_URL}${caseStudy.backHref}`}
          className="inline-flex text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase hover:text-text"
        >
          ← BACK TO WORK
        </a>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
          <div>
            <p className="text-[0.74rem] font-semibold tracking-[0.15em] text-secondary uppercase">
              {caseStudy.category} · {caseStudy.projectDescriptor}
            </p>
            <h1 className="mt-4 font-sans text-[clamp(2.7rem,6.2vw,4.3rem)] font-semibold leading-[0.95] text-text">
              {caseStudy.projectName}
            </h1>
            <div className="mt-6 space-y-4">
              {caseStudy.intro.map((paragraph) => (
                <p key={paragraph} className="max-w-[53rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {caseStudy.heroMetadata.map((item) => (
                <div key={item.label} className="border-t border-border/45 pt-3">
                  <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">{item.label}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-4">
            <FramedImage image={caseStudy.customerExperience.images[0]} heightClass="h-[21rem] sm:h-[26rem]" />
          </div>
        </div>
      </section>

      <section className="content-wrap space-y-24 pb-20">
        <article>
          <SectionIntro section={caseStudy.customerExperience} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FramedImage image={caseStudy.customerExperience.images[0]} heightClass="h-[20rem] sm:h-[25rem] lg:h-[31rem]" />
            <div className="space-y-6">
              <FramedImage image={caseStudy.customerExperience.images[1]} heightClass="h-[18rem] sm:h-[20rem]" />
              <div className="grid gap-6 sm:grid-cols-2">
                <FramedImage image={caseStudy.customerExperience.images[2]} heightClass="h-[16rem] sm:h-[17rem]" />
                <FramedImage image={caseStudy.customerExperience.images[3]} heightClass="h-[16rem] sm:h-[17rem]" />
              </div>
            </div>
          </div>
        </article>

        <article>
          <SectionIntro section={caseStudy.operationsPlatform} />
          <div className="mt-10 space-y-6">
            <FramedImage image={caseStudy.operationsPlatform.images[0]} heightClass="h-[20rem] sm:h-[28rem] lg:h-[34rem]" />
            <div className="grid gap-6 lg:grid-cols-2">
              <FramedImage image={caseStudy.operationsPlatform.images[2]} heightClass="h-[20rem] sm:h-[24rem]" />
              <FramedImage image={caseStudy.operationsPlatform.images[3]} heightClass="h-[20rem] sm:h-[24rem]" />
            </div>
            <FramedImage image={caseStudy.operationsPlatform.images[1]} heightClass="h-[18rem] sm:h-[22rem] lg:h-[24rem]" />
          </div>
        </article>

        <article>
          <SectionIntro section={caseStudy.kitchenDisplaySystem} />
          <div className="mt-10 space-y-6">
            <FramedImage image={caseStudy.kitchenDisplaySystem.images[0]} heightClass="h-[20rem] sm:h-[28rem] lg:h-[34rem]" />
            <FramedImage image={caseStudy.kitchenDisplaySystem.images[1]} heightClass="h-[18rem] sm:h-[25rem] lg:h-[30rem]" />
          </div>
        </article>

        <article className="border-t border-border/55 pt-12">
          <p className="section-label">{caseStudy.approach.label}</p>
          <p className="mt-6 max-w-[54rem] font-serif text-[clamp(1.8rem,3.2vw,2.7rem)] leading-[1.08] text-[#1f2522]">
            {caseStudy.approach.copy.split('\n\n')[0]}
          </p>
          <p className="mt-5 max-w-[50rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">{caseStudy.approach.copy.split('\n\n')[1]}</p>
          <p className="mt-8 border-t border-border/45 pt-4 text-[0.9rem] tracking-[0.06em] text-[#5d6660]">
            {caseStudy.technologiesLine}
          </p>
        </article>

        <div className="border-t border-border/50 pt-8">
          <a
            href={`${import.meta.env.BASE_URL}${caseStudy.backHref}`}
            className="inline-flex text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase hover:text-text"
          >
            BACK TO SELECTED WORK →
          </a>
        </div>
      </section>
    </main>
  )
}
