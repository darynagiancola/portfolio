import { Link } from 'react-router-dom'
import editorialImage from '../assets/projects/fuori-ora/fuori-ora-editorial.jpg'
import productImage from '../assets/projects/fuori-ora/fuori-ora-product.jpg'
import campaignVideo from '../assets/projects/fuori-ora/video/FUORI ORA — Video Campaign.mp4'
import campaignFilmPoster from '../assets/projects/fuori-ora/video/fuori-ora-film-poster.jpg'
import { FuoriOraCarousel } from '../components/case-study/FuoriOraCarousel'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'
import { fuoriOraCarouselSlideSources } from '../content/fuoriOraCampaign'
import {
  fuoriOraInstagramCaption,
  fuoriOraInstagramCaptionEnglish,
  italianFuoriOra,
} from '../i18n/italian'
import { useLanguage } from '../i18n/language'

function formatSlideIndicator(template: string, current: number, total: number) {
  return template.replace('{current}', String(current)).replace('{total}', String(total))
}

export function FuoriOraCaseStudyPage() {
  const { language } = useLanguage()
  const copy = language === 'it' ? italianFuoriOra : italianFuoriOra.en
  const brand = copy.brandIdentity
  const colorSystem = brand.colorSystem
  const design = brand.designDecisions
  const campaign = copy.campaignExecution
  const conclusion = copy.creativeConclusion

  return (
    <div className="site-canvas min-h-screen">
      <Navigation />

      <main id="main-content">
        <section className="content-wrap pb-12 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
          <Link
            to="/projects"
            className="inline-flex text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase hover:text-text"
          >
            {copy.backToProjects}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-[0.74rem] font-semibold tracking-[0.15em] text-secondary uppercase">{copy.eyebrow}</p>
              <h1 className="mt-4 font-sans text-[clamp(2.75rem,6.5vw,4.25rem)] font-semibold leading-[0.94] text-text">
                {copy.headline}
              </h1>
              <p className="mt-4 font-serif text-[clamp(1.35rem,2.8vw,1.75rem)] leading-[1.15] text-[#4e5752] italic">
                {copy.supportingLine}
              </p>
              <div className="mt-6 max-w-[36rem] space-y-4 text-[1.08rem] leading-[1.58] text-[#4e5752]">
                {copy.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-5 max-w-[36rem] text-[0.8rem] leading-[1.5] text-muted italic">{copy.disclosure}</p>
            </div>

            <figure className="overflow-hidden border border-border/55">
              <img
                src={editorialImage}
                alt={copy.editorialImageAlt}
                className="block h-full max-h-[32rem] w-full object-cover object-center lg:max-h-none lg:min-h-[28rem]"
                loading="eager"
              />
            </figure>
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 lg:py-20">
          <div className="content-wrap space-y-14 lg:space-y-16">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
              <figure className="order-2 lg:order-1">
                <div className="overflow-hidden border border-border/55">
                  <img
                    src={productImage}
                    alt={copy.productImageAlt}
                    className="block w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                  {copy.productCaption}
                </figcaption>
              </figure>

              <div className="order-1 lg:order-2">
                <p className="section-label">{brand.label}</p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.05rem)] leading-[1.03] text-[#1f2522]">
                  {brand.title}
                </h2>
                <p className="mt-5 max-w-[34rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">{brand.concept}</p>

                <p className="mt-8 font-serif text-[clamp(2rem,4.5vw,2.85rem)] leading-[1.08] text-[#1f2522] italic">
                  {brand.tagline}
                </p>

                <dl className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                      {brand.audienceLabel}
                    </dt>
                    <dd className="mt-2 text-[0.98rem] leading-[1.55] text-[#4e5752]">{brand.audience}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                      {brand.positioningLabel}
                    </dt>
                    <dd className="mt-2 text-[0.98rem] leading-[1.55] text-[#4e5752]">{brand.positioning}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div>
              <p className="section-label">{colorSystem.label}</p>
              <p className="mt-4 max-w-[42rem] text-[1.02rem] leading-[1.58] text-[#4e5752]">{colorSystem.narrative}</p>
              <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-3">
                {colorSystem.colors.map((swatch) => (
                  <li key={swatch.hex} className="flex flex-col">
                    <div
                      className="h-[5.75rem] w-full border border-border/55 sm:h-[6.25rem]"
                      style={{ backgroundColor: swatch.hex }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-1 flex-col border border-t-0 border-border/55 bg-surface px-3 py-3">
                      <p className="text-[0.9rem] font-semibold text-text">{swatch.name}</p>
                      <p className="mt-0.5 text-[0.68rem] tracking-[0.1em] text-muted uppercase">{swatch.hex}</p>
                      <p className="mt-2 text-[0.84rem] leading-[1.45] text-[#4e5752]">{swatch.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border/45 pt-10">
              <h3 className="homepage-content-heading text-[1.55rem] md:text-[1.75rem]">{design.title}</h3>
              <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:gap-12">
                <article>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {design.packagingLabel}
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-[1.58] text-[#4e5752]">{design.packagingCopy}</p>
                </article>
                <article>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {design.artDirectionLabel}
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-[1.58] text-[#4e5752]">{design.artDirectionCopy}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 lg:py-20">
          <div className="content-wrap">
            <p className="section-label">{campaign.label}</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.05rem)] leading-[1.03] text-[#1f2522]">
              {campaign.heading}
            </h2>
            <p className="mt-5 max-w-[42rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">{campaign.intro}</p>

            <p className="mt-10 text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
              {campaign.carouselLabel}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-start xl:grid-cols-[minmax(0,32rem)_1fr] xl:gap-16">
              <FuoriOraCarousel
                slides={fuoriOraCarouselSlideSources}
                slideAlt={campaign.carouselSlideAlt}
                previousLabel={campaign.carouselPrevious}
                nextLabel={campaign.carouselNext}
                slideIndicatorLabel={(current, total) =>
                  formatSlideIndicator(campaign.carouselIndicator, current, total)
                }
                missingSlidesMessage={campaign.carouselMissing}
              />

              <div className="space-y-8">
                <div>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {campaign.captionHeading}
                  </h3>
                  {language === 'it' ? (
                    <p className="mt-3 whitespace-pre-line text-[0.95rem] leading-[1.58] text-[#4e5752]">
                      {fuoriOraInstagramCaption}
                    </p>
                  ) : (
                    <div className="mt-3 space-y-6">
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-muted uppercase">
                          {campaign.captionOriginalLabel}
                        </p>
                        <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-[1.58] text-[#4e5752]">
                          {fuoriOraInstagramCaption}
                        </p>
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-muted uppercase">
                          {campaign.captionTranslationLabel}
                        </p>
                        <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-[1.58] text-[#4e5752]">
                          {fuoriOraInstagramCaptionEnglish}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {campaign.approachHeading}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-[1.58] text-[#4e5752]">{campaign.approachCopy}</p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-border/45 pt-12 lg:mt-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center xl:grid-cols-[1fr_minmax(0,32rem)] xl:gap-16">
                <div className="max-w-[42rem] lg:max-w-none">
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                    {campaign.filmLabel}
                  </p>
                  <h3 className="mt-3 font-sans text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.02] text-[#1f2522]">
                    {campaign.filmTitle}
                  </h3>
                  <p className="mt-5 text-[1.02rem] leading-[1.58] text-[#4e5752]">{campaign.filmIntro}</p>
                  <ul className="mt-8 divide-y divide-border/50 border-t border-border/50">
                    {campaign.filmHighlights.map((item) => (
                      <li key={item.title} className="py-4 first:pt-5 last:pb-0">
                        <p className="text-[0.9rem] font-semibold text-[#1f2522]">{item.title}</p>
                        <p className="mt-1.5 text-[0.95rem] leading-[1.55] text-[#4e5752]">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full max-w-[26rem] overflow-hidden border border-border/55 bg-surface/20 lg:max-w-none lg:justify-self-end">
                  <video
                    className="block h-auto w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster={campaignFilmPoster}
                    aria-label={campaign.filmTitle}
                  >
                    <source src={campaignVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 lg:py-20">
          <div className="content-wrap">
            <div className="max-w-[54rem]">
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                {conclusion.label}
              </p>
              <h2 className="mt-5 max-w-[40rem] font-serif text-[clamp(2.05rem,4.6vw,3.35rem)] leading-[1.06] text-[#1f2522]">
                {conclusion.heading}
              </h2>
              <div className="mt-8 max-w-[50rem] space-y-5">
                {conclusion.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[1.05rem] leading-[1.62] text-[#4e5752]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  )
}
