import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Link } from 'react-router-dom'
import portfolioHero from '../assets/portfolio-hero.png'
import { kdsReliabilityAssets, projectCards } from '../content/projects'
import { contactContent, experienceBlocks, heroContent } from '../content/site'

export function HomePage() {
  const [featuredProject, ...futureProjects] = projectCards

  return (
    <div className="site-canvas min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content">
        <section className="content-wrap relative pb-18 pt-14 sm:pb-24 sm:pt-18 lg:pb-28 lg:pt-24">
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

          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div className="space-y-7">
              <p className="eyebrow">{heroContent.eyebrow}</p>
              <h1 className="max-w-xl text-4xl leading-[1.04] sm:text-5xl lg:text-[4.5rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-lg text-base sm:text-lg">{heroContent.intro}</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`${import.meta.env.BASE_URL}${heroContent.primaryCta.href}`}
                  className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm tracking-[0.1em] text-bg uppercase transition hover:-translate-y-0.5"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}${heroContent.secondaryCta.href}`}
                  className="rounded-full border border-border bg-surface/90 px-5 py-2.5 text-sm tracking-[0.1em] text-text uppercase transition hover:border-accent/50"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 hidden rounded-[2rem] border border-border/60 lg:block"
                aria-hidden="true"
              ></div>
              <figure className="relative overflow-hidden rounded-panel border border-border/70 bg-surface shadow-soft">
                <img
                  src={portfolioHero}
                  alt="Editorial hero visual with warm ivory palette, organic forms, and AI/automation motifs."
                  className="block h-auto w-full"
                  loading="eager"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="selected-work" className="content-wrap border-t border-border/60 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="A curated body of AI-powered product systems."
            description="Each project is documented as product thinking, interaction design, and implementation strategy — not a gallery of disconnected screens."
          />

          <article className="mt-12 rounded-panel border border-border/70 bg-surface/92 p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative order-2 space-y-4 lg:order-1">
                <figure className="overflow-hidden rounded-card border border-border/75 bg-bg shadow-soft">
                  <img
                    src={featuredProject.thumbnail.src}
                    alt={featuredProject.thumbnail.alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
                <figure className="ml-auto w-[76%] overflow-hidden rounded-card border border-border/75 bg-bg shadow-soft">
                  <img
                    src={kdsReliabilityAssets[0].src}
                    alt={kdsReliabilityAssets[0].alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </figure>
              </div>

              <div className="order-1 space-y-5 lg:order-2">
                <p className="text-xs tracking-[0.2em] text-accent uppercase">Flagship project</p>
                <h3 className="text-4xl sm:text-5xl">{featuredProject.title}</h3>
                <p className="text-lg text-text">{featuredProject.subtitle}</p>
                <p className="max-w-xl text-base sm:text-lg">{featuredProject.description}</p>
                <dl className="space-y-2 border-l border-border/90 pl-4">
                  {featuredProject.metadata?.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                        {item.label}
                      </dt>
                      <dd className="text-sm text-text sm:text-base">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs tracking-[0.14em] text-muted uppercase">
                  {featuredProject.tags.join(' · ')}
                </p>
                <Link
                  to={featuredProject.href}
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 text-sm tracking-[0.1em] text-bg uppercase transition hover:-translate-y-0.5"
                >
                  {featuredProject.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <p className="md:col-span-2 xl:col-span-3 text-xs tracking-[0.18em] text-muted uppercase">
              Additional projects
            </p>
            {futureProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="about" className="content-wrap border-t border-border/60 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <p className="eyebrow">About</p>
              <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-[2.9rem]">
                Product-minded work across AI, systems, and digital experience.
              </h2>
              <p className="max-w-xl text-base sm:text-lg">
                My focus sits between product strategy and execution: shaping concepts,
                interface systems, and implementation paths that stay grounded in real
                operations.
              </p>
            </div>
            <div className="rounded-card border border-border/70 bg-surface-alt/45 p-5 sm:p-7">
              <p className="text-sm text-text sm:text-base">
                This portfolio is intentionally case-study-driven. The goal is to show
                product depth: how customer journeys, staff workflows, and operational
                systems connect as one experience.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="content-wrap border-t border-border/60 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="eyebrow">Experience</p>
              <h2 className="text-3xl sm:text-4xl">Capabilities preview</h2>
              <p className="max-w-xl text-base sm:text-lg">
                A concise view of where I contribute most across product building.
              </p>
            </div>
            <div className="space-y-5">
              {experienceBlocks.map((block) => (
                <article
                  key={block.title}
                  className="border-t border-border/80 pt-4 first:pt-0"
                >
                  <h3 className="mb-2 text-2xl sm:text-[1.7rem]">{block.title}</h3>
                  <p className="max-w-2xl text-sm sm:text-base">{block.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer
        title={contactContent.title}
        description={contactContent.description}
        email={contactContent.email}
      />
    </div>
  )
}
