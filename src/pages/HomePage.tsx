import { Navigation } from '../components/layout/Navigation'
import { CapabilityRail } from '../components/home/CapabilityRail'
import { ClosingBlock } from '../components/home/ClosingBlock'
import { ExperienceRow } from '../components/home/ExperienceRow'
import { InformationBand } from '../components/home/InformationBand'
import { ProjectIndexRow } from '../components/home/ProjectIndexRow'
import { ProjectSpread } from '../components/home/ProjectSpread'
import { SectionHead } from '../components/home/SectionHead'
import heroPortrait from '../assets/hero-portrait.png'
import { kdsReliabilityAssets, projectCards } from '../content/projects'
import {
  aboutContent,
  capabilityRail,
  experienceContent,
  heroContent,
  workContent,
} from '../content/site'

export function HomePage() {
  const [featuredProject, ...futureProjects] = projectCards

  return (
    <div className="site-canvas min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content" className="overflow-x-clip">
        <section className="content-wrap relative pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
          <p className="pb-4 pt-2 text-[clamp(0.86rem,1.2vw,0.96rem)] font-semibold tracking-[0.11em] text-accent uppercase sm:pb-5 sm:pt-3">
            {heroContent.eyebrow}
          </p>

          <div className="relative min-[360px]:max-sm:overflow-x-clip">
            <div className="relative z-10">
              <p className="hero-display w-full max-w-full text-[clamp(3.4rem,17vw,4.9rem)] leading-[0.76] text-[#1f2522] uppercase min-[360px]:max-sm:text-[clamp(3.05rem,15.8vw,4.55rem)] sm:text-[clamp(5.1rem,14.8vw,8.2rem)] md:pr-[6%] md:text-[clamp(6.2rem,12.8vw,10.1rem)] lg:pr-[4%] lg:text-[clamp(8.7rem,15.4vw,13.3rem)]">
                {heroContent.portfolioWord}
              </p>
            </div>

            <figure className="pointer-events-none relative z-20 -mt-[clamp(2.9rem,12vw,4.1rem)] ml-auto w-[clamp(18.5rem,74vw,22.2rem)] min-[360px]:max-sm:float-right min-[360px]:max-sm:-mr-[1.875rem] min-[360px]:max-sm:-ml-[clamp(5.7rem,22vw,8.3rem)] sm:absolute sm:right-[0.35rem] sm:top-[clamp(2.35rem,8vw,4.2rem)] sm:mt-0 sm:w-[clamp(20.5rem,60vw,27rem)] md:right-[-0.6rem] md:top-[clamp(1.8rem,4.5vw,3.3rem)] md:w-[clamp(32rem,55vw,43rem)] lg:right-[-0.95rem] lg:top-auto lg:-bottom-14 lg:w-[clamp(42rem,52vw,58rem)]">
              <img
                src={heroPortrait}
                alt="Portrait integrated into editorial homepage hero composition."
                className="h-auto w-full object-contain object-top"
                loading="eager"
              />
            </figure>

            <div className="hero-tone-step" aria-hidden="true"></div>

            <div className="relative z-10 mt-4 grid grid-cols-1 gap-y-4 min-[360px]:max-sm:mt-8 min-[360px]:max-sm:block sm:mt-[clamp(6rem,16vw,8rem)] md:mt-[clamp(5.4rem,8.6vw,7rem)] md:grid-cols-[minmax(0,1fr)_minmax(18rem,38%)] md:gap-x-7 lg:mt-[clamp(1.2rem,3.2vw,2.2rem)] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,37%)] lg:gap-x-10">
              <div className="space-y-5 md:pr-4 lg:pr-8">
                <h1 className="max-w-full font-sans text-[clamp(2.5rem,11vw,3.2rem)] leading-[1.03] text-[#232926] min-[360px]:max-sm:text-[clamp(1.42rem,6.5vw,2.28rem)] min-[360px]:max-sm:leading-[0.99] min-[360px]:max-sm:[text-wrap:pretty] md:max-w-[31rem] md:text-[clamp(2.65rem,10.8vw,3.15rem)] lg:text-[clamp(2.65rem,10.8vw,3.65rem)]">
                  {heroContent.title}
                </h1>
                <p className="max-w-xl text-[clamp(1.1rem,1.8vw,1.18rem)] text-[#4f5852] min-[360px]:max-sm:clear-right">
                  {heroContent.intro}
                </p>
                <div className="pt-1">
                  <a
                    href={`${import.meta.env.BASE_URL}${heroContent.primaryCta.href}`}
                    className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.21em] text-accent uppercase transition hover:text-text"
                  >
                    {heroContent.primaryCta.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InformationBand />

        <section
          id="selected-work"
          aria-labelledby="selected-work-heading"
          className="content-wrap py-14 sm:py-20 lg:py-28"
        >
          <SectionHead
            headingId="selected-work-heading"
            label={workContent.label}
            statement={workContent.statement}
            aside="Case studies"
          />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <ProjectSpread
              project={featuredProject}
              supportingMedia={kdsReliabilityAssets.slice(0, 2)}
            />
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="border-t border-border/55 pt-5">
              <p className="meta-label">{workContent.indexLabel}</p>
              <p className="mt-2 max-w-[34rem] text-[0.9rem] text-muted">
                {workContent.indexNote}
              </p>
            </div>
            <ol className="mt-8">
              {futureProjects.map((project, index) => (
                <ProjectIndexRow key={project.slug} project={project} index={index + 2} />
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="content-wrap border-t border-border/55 py-14 sm:py-20 lg:py-28"
        >
          <SectionHead
            headingId="about-heading"
            label={aboutContent.label}
            statement={aboutContent.statement}
          />

          <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9 lg:col-start-4">
              <div className="md:grid md:grid-cols-3">
                {aboutContent.stanzas.map((stanza, index) => (
                  <div
                    key={stanza.label}
                    className={
                      index === 0
                        ? 'md:pr-6'
                        : 'mt-6 border-t border-border/55 pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-6'
                    }
                  >
                    <p className="meta-label-quiet">{stanza.label}</p>
                    <p className="mt-3 text-[0.98rem] sm:text-[1.02rem]">{stanza.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CapabilityRail items={capabilityRail} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="content-wrap border-t border-border/55 py-14 sm:py-20 lg:py-28"
        >
          <SectionHead
            headingId="experience-heading"
            label={experienceContent.label}
            statement={experienceContent.statement}
          />

          <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-8">
            <p className="max-w-[34rem] text-[0.9rem] text-muted lg:col-span-7 lg:col-start-4">
              {experienceContent.note}
            </p>
          </div>

          <ol className="mt-10 lg:mt-14">
            {experienceContent.entries.map((entry, index) => (
              <ExperienceRow key={`${entry.role}-${index}`} entry={entry} />
            ))}
          </ol>
        </section>

        <ClosingBlock />
      </main>
    </div>
  )
}
