import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'
import { ProjectCard } from '../components/projects/ProjectCard'
import { FeatureCard } from '../components/ui/FeatureCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import portfolioHero from '../assets/portfolio-hero.png'
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
          <div className="space-y-10">
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

            <figure className="overflow-hidden rounded-panel border border-border/80 bg-surface shadow-card">
              <img
                src={portfolioHero}
                alt="Editorial hero visual with warm ivory palette, organic forms, and AI/automation motifs."
                className="h-auto w-full"
                loading="eager"
              />
            </figure>
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
