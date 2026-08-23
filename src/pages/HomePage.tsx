import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'
import { ProjectCard } from '../components/projects/ProjectCard'
import { FeatureCard } from '../components/ui/FeatureCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projectCards } from '../content/projects'
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
        <section className="content-wrap py-16 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <p className="eyebrow">{heroContent.eyebrow}</p>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-[4rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-2xl text-base sm:text-lg">{heroContent.intro}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={heroContent.primaryCta.href}
                  className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm tracking-[0.1em] text-bg uppercase transition hover:-translate-y-0.5"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm tracking-[0.1em] text-text uppercase transition hover:border-accent/50"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-panel border border-border/80 bg-surface p-6 shadow-soft sm:p-8">
              <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full bg-secondary-soft/70 blur-2xl"></div>
              <div className="pointer-events-none absolute -bottom-20 -left-8 h-44 w-44 rounded-full bg-accent-soft blur-2xl"></div>
              <div className="relative space-y-4">
                <p className="text-sm tracking-[0.15em] text-muted uppercase">Focus areas</p>
                <ul className="space-y-3">
                  {['AI-assisted product building', 'Automation & realtime workflows', 'Editorial UX/UI case studies', 'End-to-end digital product execution'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true"></span>
                        <span className="text-sm text-text sm:text-base">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="selected-work" className="content-wrap py-12 sm:py-18">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies built as connected product narratives."
            description="AURELIA leads this portfolio as a full hospitality systems case study. Additional projects are intentionally staged for future publication."
          />

          <div className="mt-10 space-y-8">
            <ProjectCard project={featuredProject} />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {futureProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-wrap py-12 sm:py-20">
          <SectionHeading
            eyebrow="Background"
            title="Capabilities shaped for product outcomes."
            description="This section stays modular by design, so final positioning can evolve without changing the layout system."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {experienceBlocks.map((block) => (
              <FeatureCard
                key={block.title}
                title={block.title}
                description={block.description}
              />
            ))}
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
