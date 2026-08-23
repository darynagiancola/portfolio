import { Navigation } from '../components/layout/Navigation'
import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { kdsReliabilityAssets, projectCards } from '../content/projects'
import {
  contactContent,
  experienceBlocks,
  heroContent,
  howIWorkSteps,
  whatIWorkWith,
} from '../content/site'

export function HomePage() {
  const [featuredProject, ...futureProjects] = projectCards

  return (
    <div className="site-canvas min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content">
        <section className="content-wrap relative pb-18 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-18">
          <div
            className="pointer-events-none absolute -left-3 top-4 hidden h-24 w-44 text-border/70 lg:block"
            aria-hidden="true"
          >
            <svg viewBox="0 0 180 90" className="h-full w-full">
              <path
                d="M2 45 H86 C104 45 104 18 122 18 H178"
                stroke="currentColor"
                strokeWidth="1.1"
                fill="none"
              />
              <circle cx="86" cy="45" r="3.8" fill="#74826d" />
              <circle cx="122" cy="18" r="3.8" fill="#aea3b7" />
            </svg>
          </div>

          <div className="flex items-center gap-3 pb-4">
            <p className="text-[0.68rem] tracking-[0.22em] text-accent uppercase">
              {heroContent.eyebrow}
            </p>
            <span className="h-px flex-1 bg-border/80" aria-hidden="true"></span>
          </div>

          <div className="relative min-h-[31rem] sm:min-h-[38rem] lg:min-h-[41rem]">
            <p className="hero-display relative z-10 max-w-[92%] text-[clamp(4.9rem,16.5vw,15rem)] leading-[0.78] text-[#20241f] uppercase">
              {heroContent.portfolioWord}
            </p>

            <figure className="relative z-20 mt-4 h-[20rem] w-full overflow-hidden sm:h-[26rem] lg:absolute lg:right-0 lg:top-[-2.25rem] lg:mt-0 lg:h-[39rem] lg:w-[43%]">
              <img
                src={heroPortrait}
                alt="Portrait integrated into editorial homepage hero composition."
                className="h-full w-full object-cover object-[79%_22%]"
                loading="eager"
              />
            </figure>

            <div className="relative z-30 mt-7 max-w-[34rem] space-y-6 lg:mt-[-4.8rem]">
              <h1 className="text-4xl leading-[1.04] sm:text-5xl lg:text-[4rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-xl text-base sm:text-lg">{heroContent.intro}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}${heroContent.primaryCta.href}`}
                  className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm tracking-[0.1em] text-bg uppercase transition hover:-translate-y-0.5"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}${heroContent.secondaryCta.href}`}
                  className="rounded-full border border-border bg-surface/92 px-5 py-2.5 text-sm tracking-[0.1em] text-text uppercase transition hover:border-accent/50"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="selected-work" className="content-wrap border-t border-border/70 py-16 sm:py-24">
          <p className="mb-3 text-[0.7rem] tracking-[0.22em] text-accent uppercase">
            Selected Work
          </p>
          <h2 className="hero-display max-w-4xl text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-8xl">
            Selected Work
          </h2>
          <p className="mt-5 max-w-3xl text-base sm:text-lg">
            A focused portfolio of connected products where UX, systems, and
            implementation evolve together.
          </p>

          <article className="mt-14 border-t border-border/80 pt-7 sm:pt-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <div className="relative order-2 lg:order-1">
                <figure className="overflow-hidden border border-border/80 bg-surface">
                  <img
                    src={featuredProject.thumbnail.src}
                    alt={featuredProject.thumbnail.alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
                <figure className="ml-auto mt-4 w-[74%] overflow-hidden border border-border/80 bg-surface shadow-soft">
                  <img
                    src={kdsReliabilityAssets[0].src}
                    alt={kdsReliabilityAssets[0].alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
              </div>

              <div className="order-1 space-y-5 lg:order-2">
                <p className="text-[0.7rem] tracking-[0.22em] text-accent uppercase">Flagship project</p>
                <h3 className="hero-display text-5xl leading-[0.88] text-[#20241f] uppercase sm:text-7xl">
                  {featuredProject.title}
                </h3>
                <p className="max-w-xl text-lg text-text">{featuredProject.subtitle}</p>
                <p className="max-w-xl text-base sm:text-lg">{featuredProject.description}</p>
                <div className="border-t border-border/80 pt-4">
                  <p className="mb-1 text-[0.68rem] tracking-[0.2em] text-muted uppercase">
                    Product Areas
                  </p>
                  <p className="text-sm text-text sm:text-base">
                    {featuredProject.metadata?.[0]?.value}
                  </p>
                </div>
                <Link
                  to={featuredProject.href}
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 text-sm tracking-[0.12em] text-bg uppercase transition hover:-translate-y-0.5"
                >
                  {featuredProject.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-14 grid gap-8 border-t border-border/70 pt-7 md:grid-cols-3">
            <p className="md:col-span-3 text-[0.7rem] tracking-[0.22em] text-muted uppercase">
              Additional projects
            </p>
            {futureProjects.map((project) => (
              <article key={project.slug} className="space-y-3 border-t border-border/70 pt-4">
                <h4 className="text-2xl">{project.title}</h4>
                <p className="text-sm text-text">{project.subtitle}</p>
                <p className="text-sm">{project.description}</p>
                <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                  {project.tags.join(' · ')}
                </p>
                <p className="text-sm text-muted">{project.ctaLabel}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-wrap border-t border-border/70 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-4">
              <p className="text-[0.7rem] tracking-[0.22em] text-accent uppercase">
                What I work with
              </p>
              <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
                What I Work With
              </h2>
              <p className="max-w-md text-sm sm:text-base">
                AI-first product direction with practical system thinking, interface
                craft, and implementation realism.
              </p>
            </div>

            <div className="border-y border-border/75">
              {whatIWorkWith.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-3 border-b border-border/75 py-5 last:border-b-0 sm:grid-cols-[auto_1fr]"
                >
                  <p className="text-[0.68rem] tracking-[0.2em] text-muted uppercase">
                    {item.id}
                  </p>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl text-text sm:text-3xl">{item.title}</h3>
                    <p className="max-w-2xl text-sm sm:text-base">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-wrap border-t border-border/70 py-16 sm:py-24">
          <p className="mb-4 text-[0.7rem] tracking-[0.22em] text-accent uppercase">
            How I work
          </p>
          <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
            How I Work
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {howIWorkSteps.map((item, index) => (
              <article key={item.step} className="relative border-t border-border/80 pt-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">
                  {item.step}
                </p>
                <h3 className="mt-1.5 text-2xl text-text">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
                {index < howIWorkSteps.length - 1 ? (
                  <span
                    className="absolute right-0 top-4 hidden text-muted lg:inline"
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-wrap border-t border-border/70 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-[0.7rem] tracking-[0.22em] text-accent uppercase">
                Experience
              </p>
              <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
                Experience
              </h2>
              <p className="max-w-sm text-sm sm:text-base">
                A concise snapshot of where I contribute across product systems.
              </p>
            </div>
            <div className="space-y-5">
              {experienceBlocks.map((block) => (
                <article
                  key={block.title}
                  className="border-t border-border/80 pt-4"
                >
                  <h3 className="mb-2 text-2xl text-text sm:text-[1.9rem]">{block.title}</h3>
                  <p className="max-w-2xl text-sm sm:text-base">{block.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-wrap border-t border-border/70 pb-20 pt-14 sm:pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-[0.7rem] tracking-[0.22em] text-accent uppercase">Contact</p>
              <h2 className="max-w-3xl text-4xl sm:text-5xl lg:text-[4rem]">
                {contactContent.title}
              </h2>
              <p className="max-w-2xl text-base sm:text-lg">{contactContent.description}</p>
            </div>
            <div className="space-y-3 border-l border-border/80 pl-4 lg:pl-6">
              <a
                href={`mailto:${contactContent.email}`}
                className="block text-sm tracking-[0.13em] text-text uppercase hover:text-accent"
              >
                Email
              </a>
              <a
                href={contactContent.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm tracking-[0.13em] text-text uppercase hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={contactContent.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm tracking-[0.13em] text-text uppercase hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
