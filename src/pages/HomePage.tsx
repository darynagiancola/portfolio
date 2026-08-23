import { Navigation } from '../components/layout/Navigation'
import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { kdsReliabilityAssets, projectCards } from '../content/projects'
import {
  credibilityStrip,
  contactContent,
  experienceBlocks,
  heroContent,
  howIWorkSteps,
  whatIWorkWith,
} from '../content/site'

export function HomePage() {
  const [featuredProject, ...futureProjects] = projectCards
  const supportingProjects = futureProjects.slice(0, 2)
  const showHeroCapabilityStrip = false

  return (
    <div className="site-canvas min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content">
        <section className="content-wrap relative pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
          <p className="pb-4 pt-2 text-[clamp(0.86rem,1.2vw,0.96rem)] font-semibold tracking-[0.11em] text-accent uppercase sm:pb-5 sm:pt-3">
            {heroContent.eyebrow}
          </p>

          <div className="relative">
            <div className="relative z-10">
              <p className="hero-display w-full max-w-full text-[clamp(3.4rem,17vw,4.9rem)] leading-[0.76] text-[#1f2522] uppercase sm:text-[clamp(5.1rem,14.8vw,8.2rem)] md:pr-[8%] md:text-[clamp(6.2rem,12.8vw,10.1rem)] lg:pr-[6%] lg:text-[clamp(8.7rem,15.4vw,13.3rem)]">
                {heroContent.portfolioWord}
              </p>
            </div>

            <figure className="pointer-events-none absolute right-[0.25rem] top-[clamp(1.8rem,8vw,3.5rem)] z-20 w-[clamp(20rem,78vw,28rem)] sm:right-[0.45rem] sm:top-[clamp(2.5rem,8vw,4.6rem)] sm:w-[clamp(22rem,66vw,31rem)] md:right-[0.9rem] md:top-[clamp(2.15rem,4.8vw,4rem)] md:w-[clamp(29rem,50vw,39rem)] lg:right-[1.8rem] lg:top-[clamp(2.5rem,4.2vw,4.5rem)] lg:w-[clamp(36rem,45vw,49rem)]">
              <img
                src={heroPortrait}
                alt="Portrait integrated into editorial homepage hero composition."
                className="h-auto w-full object-contain object-top"
                loading="eager"
              />
            </figure>

            <div className="relative z-10 mt-[clamp(1.2rem,3.2vw,2.2rem)] grid grid-cols-1 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(18rem,38%)] md:gap-x-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,37%)] lg:gap-x-10">
              <div className="space-y-5 md:pr-4 lg:pr-8">
                <h1 className="max-w-[31rem] font-sans text-[clamp(2.65rem,10.8vw,3.65rem)] leading-[1.03] text-[#232926]">
                  {heroContent.title}
                </h1>
                <p className="max-w-xl text-[clamp(1.1rem,1.8vw,1.18rem)] text-[#4f5852]">
                  {heroContent.intro}
                </p>
                <div className="pt-1">
                  <a
                    href={`${import.meta.env.BASE_URL}${heroContent.primaryCta.href}`}
                    className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.21em] text-accent uppercase transition hover:text-text"
                  >
                    Explore selected work
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <aside className="max-w-sm md:mt-[clamp(15rem,24vw,21rem)] md:max-w-[17rem] md:justify-self-end">
                <p className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">Location / Availability</p>
                <p className="mt-1 text-sm text-text">{heroContent.locationNote}</p>
              </aside>
            </div>
          </div>
        </section>

        {showHeroCapabilityStrip ? (
          <section className="content-wrap pb-8">
            <div className="rounded-card border border-border/75 bg-surface/80 px-4 py-4 sm:px-6">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Portfolio credibility categories">
                {credibilityStrip.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 border-l border-border/70 pl-3 first:border-l-0 first:pl-0">
                    <span className="text-[0.68rem] tracking-[0.18em] text-secondary uppercase">
                      {item.icon}
                    </span>
                    <span className="text-[0.72rem] tracking-[0.15em] text-text uppercase">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section id="selected-work" className="content-wrap border-t border-border/65 py-12 sm:py-16">
          <p className="mb-3 text-[0.72rem] tracking-[0.21em] text-accent uppercase">
            Selected Work
          </p>
          <p className="max-w-3xl text-base sm:text-[1.02rem]">
            A curated case-study-driven portfolio focused on AI-enabled products,
            automation, and connected operational systems.
          </p>

          <article className="mt-9 rounded-panel border border-border/75 bg-surface/82 p-5 shadow-soft sm:p-7 lg:p-8">
            <div className="grid gap-7 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
              <div className="relative order-2 lg:order-1">
                <figure className="overflow-hidden rounded-card border border-border/80 bg-surface">
                  <img
                    src={featuredProject.thumbnail.src}
                    alt={featuredProject.thumbnail.alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
                <div className="absolute -left-2 top-4 rounded-full border border-secondary/45 bg-secondary-soft/80 px-3 py-1 text-[0.63rem] tracking-[0.16em] text-secondary uppercase">
                  Multi-interface
                </div>
                <figure className="ml-auto mt-4 w-[72%] overflow-hidden rounded-card border border-border/80 bg-surface shadow-soft">
                  <img
                    src={kdsReliabilityAssets[0].src}
                    alt={kdsReliabilityAssets[0].alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
                <figure className="mt-4 w-[55%] overflow-hidden rounded-card border border-border/80 bg-surface shadow-soft">
                  <img
                    src={kdsReliabilityAssets[1].src}
                    alt={kdsReliabilityAssets[1].alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
                <div className="absolute -bottom-3 left-[6%] h-22 w-22 rounded-full bg-secondary-soft/80 blur-2xl"></div>
                <div className="absolute -bottom-3 right-[26%] h-18 w-18 rounded-full bg-accent-soft/70 blur-2xl"></div>
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
                <ul className="flex flex-wrap gap-2 pt-1" aria-label="AURELIA capability tags">
                  {featuredProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-[0.64rem] tracking-[0.16em] text-muted uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
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

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {supportingProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-card border border-dashed border-border/90 bg-surface-alt/45 px-5 py-4"
              >
                <p className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                  Case study in progress
                </p>
                <h4 className="mt-2 font-sans text-xl font-semibold text-text">
                  {project.title}
                </h4>
                <p className="mt-1 text-sm">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="what-i-build" className="content-wrap border-t border-border/65 py-14 sm:py-18">
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-4">
              <p className="text-[0.72rem] tracking-[0.21em] text-accent uppercase">
                What I build
              </p>
              <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
                What I Build
              </h2>
              <p className="max-w-md text-sm sm:text-base">
                Product, automation, and system architecture composed as one practical delivery model.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {whatIWorkWith.map((item) => (
                <article
                  key={item.id}
                  className={`grid gap-2 rounded-card border p-4 ${
                    item.id === '01'
                      ? 'md:col-span-2 border-secondary/45 bg-secondary-soft/65'
                      : item.id === '02'
                        ? 'border-accent/45 bg-accent-soft/55'
                        : item.id === '03'
                          ? 'border-border/85 bg-surface'
                          : 'md:col-span-2 border-border/85 bg-surface-alt/55'
                  }`}
                >
                  <p className="text-[0.68rem] tracking-[0.2em] text-muted uppercase">
                    {item.id}
                  </p>
                  <div className="space-y-1.5">
                    <h3 className="font-sans text-2xl font-semibold text-text sm:text-[1.72rem]">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-sm text-muted sm:text-[0.97rem]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-wrap border-t border-border/65 py-14 sm:py-18">
          <p className="mb-4 text-[0.72rem] tracking-[0.21em] text-accent uppercase">
            Process
          </p>
          <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
            How I Work
          </h2>

          <div className="relative mt-8 rounded-panel border border-border/75 bg-surface/75 p-5 sm:p-7">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[4.4rem] hidden h-px bg-border lg:block"></div>
            <div className="grid gap-5 lg:grid-cols-5">
            {howIWorkSteps.map((item, index) => (
              <article key={item.step} className="relative border-t border-border/80 pt-4 lg:border-t-0 lg:pt-0">
                <p className="text-[0.68rem] tracking-[0.2em] text-secondary uppercase">
                  {item.step}
                </p>
                <h3 className="mt-1.5 font-sans text-[1.35rem] font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                {index < howIWorkSteps.length - 1 ? (
                  <span
                    className="absolute -right-1 top-1.5 hidden text-secondary lg:inline"
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="content-wrap border-t border-border/65 py-14 sm:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <article id="about" className="rounded-panel border border-border/80 bg-surface-alt/45 p-5 sm:p-6">
              <p className="text-[0.72rem] tracking-[0.21em] text-accent uppercase">About</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold text-text sm:text-4xl">
                Business context first.
              </h2>
              <p className="mt-3 text-sm sm:text-base">
                My work sits at the intersection of product thinking and implementation:
                understanding real workflow friction, then turning it into digital systems
                that teams can actually use.
              </p>
            </article>

            <article id="experience" className="space-y-4">
            <div className="space-y-4">
              <p className="text-[0.72rem] tracking-[0.21em] text-accent uppercase">
                Experience
              </p>
              <h2 className="hero-display text-5xl leading-[0.9] text-[#20241f] uppercase sm:text-6xl lg:text-7xl">
                Experience
              </h2>
              <p className="max-w-sm text-sm sm:text-base">
                A concise snapshot of where I contribute across product systems.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {experienceBlocks.map((block, index) => (
                <article
                  key={block.title}
                  className={`rounded-card border p-4 ${
                    index === 1
                      ? 'border-secondary/40 bg-secondary-soft/55'
                      : 'border-border/80 bg-surface'
                  }`}
                >
                  <h3 className="mb-2 font-sans text-xl font-semibold text-text sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="max-w-2xl text-sm text-muted sm:text-base">{block.description}</p>
                </article>
              ))}
            </div>
            </article>
          </div>
        </section>

        <section id="contact" className="content-wrap border-t border-border/65 pb-18 pt-12 sm:pb-22">
          <div className="grid gap-8 rounded-panel border border-border/75 bg-surface p-6 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-[0.72rem] tracking-[0.21em] text-accent uppercase">Contact</p>
              <h2 className="max-w-3xl font-sans text-4xl font-semibold sm:text-5xl lg:text-[3.5rem]">
                {contactContent.title}
              </h2>
              <p className="max-w-2xl text-base sm:text-lg">{contactContent.description}</p>
            </div>
            <div className="space-y-3 border-l border-border/80 pl-4 lg:pl-6">
              <a
                href={`mailto:${contactContent.email}`}
                className="block text-sm tracking-[0.14em] text-text uppercase hover:text-accent"
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
