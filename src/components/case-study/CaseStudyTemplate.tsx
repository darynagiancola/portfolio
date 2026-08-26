import type { CaseStudyData, CaseStudyFeatureSection, ImageAsset } from '../../types/portfolio'

interface CaseStudyTemplateProps {
  caseStudy: CaseStudyData
}

function FramedImage({ image, frameClassName = '' }: { image: ImageAsset; frameClassName?: string }) {
  return (
    <figure className="flex flex-col gap-2.5">
      <div className={`overflow-hidden border border-border/55 bg-surface/20 ${frameClassName}`}>
        <img src={image.src} alt={image.alt} className="block h-full w-full object-contain object-top" loading="lazy" />
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
          <p key={paragraph} className="max-w-[52rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
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

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
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
          </div>

          <div className="space-y-4">
            <FramedImage image={caseStudy.customerExperience.images[0]} frameClassName="h-[18rem] sm:h-[24rem] lg:h-[26rem]" />
          </div>
        </div>

        <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.heroMetadata.map((item) => (
            <div key={item.label} className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">{item.label}</dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-study-section-flow content-wrap pb-20">
        <article>
          <SectionIntro section={caseStudy.customerExperience} />
          <div className="mt-10 space-y-6">
            <FramedImage image={caseStudy.customerExperience.images[1]} frameClassName="h-[20rem] sm:h-[28rem] lg:h-[36rem]" />
            <div className="grid gap-6 sm:grid-cols-2">
              <FramedImage image={caseStudy.customerExperience.images[2]} frameClassName="h-[18rem] sm:h-[22rem] lg:h-[24rem]" />
              <FramedImage image={caseStudy.customerExperience.images[3]} frameClassName="h-[18rem] sm:h-[22rem] lg:h-[24rem]" />
            </div>
          </div>
        </article>

        <article>
          <SectionIntro section={caseStudy.operationsPlatform} />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FramedImage image={caseStudy.operationsPlatform.images[0]} frameClassName="lg:h-[21.5rem]" />
            <FramedImage image={caseStudy.operationsPlatform.images[1]} frameClassName="lg:h-[21.5rem]" />
            <FramedImage image={caseStudy.operationsPlatform.images[2]} frameClassName="lg:h-[21.5rem]" />
            <FramedImage image={caseStudy.operationsPlatform.images[3]} frameClassName="lg:h-[21.5rem]" />
          </div>
        </article>

        <article>
          <SectionIntro section={caseStudy.kitchenDisplaySystem} />
          <div className="mt-10 space-y-6">
            <FramedImage image={caseStudy.kitchenDisplaySystem.images[0]} />
            <FramedImage image={caseStudy.kitchenDisplaySystem.images[1]} />
          </div>
        </article>

        <article className="border-t border-border/55 pt-10">
          <p className="section-label">{caseStudy.approach.label}</p>
          <p className="mt-6 max-w-[44rem] font-serif text-[clamp(1.56rem,2.8vw,2.3rem)] leading-[1.08] text-[#1f2522]">
            {caseStudy.approach.copy.split('\n\n')[0]}
          </p>
          <p className="mt-5 max-w-[52rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">{caseStudy.approach.copy.split('\n\n')[1]}</p>
          <p className="mt-7 border-t border-border/45 pt-4 text-[0.9rem] tracking-[0.06em] text-[#5d6660]">
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
