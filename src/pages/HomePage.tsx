import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { projectCards } from '../content/projects'

export function HomePage() {
  const featuredProjects = projectCards.filter((project) => project.featured).slice(0, 3)
  const expertiseAreas = [
    {
      id: '01',
      title: 'Business & Process Strategy',
      description:
        'Business analysis, workflow mapping, requirements, market analysis and revenue thinking. I look at how the business works before deciding what should change or what technology belongs in the solution.',
    },
    {
      id: '02',
      title: 'AI & Automation',
      description:
        'AI agents, intelligent workflows, business automation and system integrations designed around specific processes rather than generic automation templates.',
    },
    {
      id: '03',
      title: 'Marketing & Commercial Strategy',
      description:
        'Marketing strategy, positioning, customer journeys, lead generation, CRM, lifecycle automation and performance, backed by hands-on experience in marketing leadership and commercial environments.',
    },
    {
      id: '04',
      title: 'Digital Products & Systems',
      description:
        'Turning requirements and workflows into usable digital products, from customer-facing AI experiences to internal operational tools connected through APIs, databases and automation.',
    },
  ]
  const toolkitCategories = [
    'AI & Knowledge',
    'Automation & Integration',
    'CRM, Marketing & Customer Operations',
    'Product & Development',
    'Data, Backend & Deployment',
    'Business, Data & Productivity',
    'Marketing & Analytics',
  ]
  const toolGroups = [
    { label: 'AI & Knowledge', items: ['ChatGPT', 'OpenAI API', 'Claude', 'Gemini', 'NotebookLM', 'LangChain'] },
    { label: 'Automation & Integration', items: ['Make', 'APIs', 'Webhooks', 'Zapier', 'n8n'] },
    {
      label: 'CRM, Marketing & Customer Operations',
      items: ['ActiveCampaign', 'Pipedrive', 'Intercom'],
    },
    { label: 'Product & Development', items: ['Cursor', 'Lovable', 'React', 'TypeScript', 'HTML', 'JSON', 'GitHub'] },
    { label: 'Data, Backend & Deployment', items: ['Supabase', 'Vercel', 'Docker'] },
    { label: 'Business, Data & Productivity', items: ['Notion', 'Airtable', 'Google Workspace', 'Microsoft 365'] },
    { label: 'Marketing & Analytics', items: ['Google Analytics', 'Google Ads', 'Meta Ads'] },
  ]
  const approachSteps = [
    {
      id: '01',
      title: 'UNDERSTAND',
      description:
        'Start with the business objective, the people involved and the process as it actually works. Identify the real problem before deciding on the technology.',
    },
    {
      id: '02',
      title: 'DESIGN',
      description:
        'Map the improved workflow, define the logic and decide where AI, automation or a digital product can genuinely add value.',
    },
    {
      id: '03',
      title: 'BUILD',
      description:
        'Turn the solution into something usable by connecting the right interfaces, AI, automation, APIs, business tools and data.',
    },
  ]

  return (
    <div className="site-canvas min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="border-b border-border/65">
        <div className="content-wrap flex items-center justify-between py-4">
          <p className="text-[1.65rem] font-semibold tracking-[0.015em] text-[#1d211e]">DARYNA GIANCOLA</p>
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-8 text-[0.68rem] font-semibold tracking-[0.18em] text-[#2c312d] uppercase">
              <a href="#selected-work">WORK</a>
              <a href="#about">ABOUT</a>
              <a href="#expertise">EXPERTISE</a>
              <a href="#contact">CONTACT</a>
            </nav>
            <a
              href="#contact"
              className="rounded-sm bg-secondary-soft px-5 py-2 text-[0.66rem] font-semibold tracking-[0.16em] text-[#3f4348] uppercase"
            >
              LET&apos;S CONNECT →
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="content-wrap relative border-b border-border/60 pb-0 pt-8">
          <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-accent uppercase">
            AI PRODUCTS · AUTOMATION · DIGITAL SYSTEMS
          </p>

          <div className="relative mt-2 min-h-[32rem]">
            <p className="hero-display relative z-10 text-[12.8rem] leading-[0.82] text-[#111419] uppercase">PORTFOLIO</p>

            <figure className="pointer-events-none absolute bottom-0 right-0 z-20 h-[31.5rem]">
              <img
                src={heroPortrait}
                alt="Portrait integrated into homepage hero."
                className="h-full w-auto object-contain"
                loading="eager"
              />
            </figure>

            <div className="relative z-10 mt-2 max-w-[32rem]">
              <h1 className="font-serif text-[3.12rem] leading-[1.05] text-[#1f2522]">I design intelligent systems around real business needs.</h1>
              <p className="mt-4 max-w-[24rem] text-[1.02rem] text-[#4b544f]">
                I combine business strategy, marketing and process thinking with AI, automation and digital product development to turn complex workflows into practical, working solutions.
              </p>
              <a
                href="#selected-work"
                className="mt-5 inline-flex rounded-sm bg-secondary-soft px-5 py-2 text-[0.66rem] font-semibold tracking-[0.17em] text-[#3e4247] uppercase"
              >
                VIEW MY CV →
              </a>
            </div>
          </div>
        </section>

        <section className="w-full border-b border-border/60 bg-surface-alt/75">
          <div className="content-wrap h-4"></div>
        </section>

        <section id="selected-work" className="content-wrap py-20">
          <div className="flex items-end justify-between gap-6">
            <p className="text-[0.8rem] font-semibold tracking-[0.15em] text-secondary uppercase">SELECTED WORK</p>
            <a href="#" className="text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase">
              VIEW ALL PROJECTS →
            </a>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-3 gap-10">
              {featuredProjects.map((project, index) => {
                const metadata = project.metadata?.[0]?.value ?? project.tags.join(' · ')
                const isPlaceholder = project.visualState === 'placeholder'

                return (
                  <article key={project.slug} className="space-y-5">
                    <div>
                      <p className="text-[2.7rem] leading-none text-secondary">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h2 className="mt-3 font-sans text-[2.1rem] leading-[1.04] font-semibold text-[#1f2522]">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-[0.8rem] tracking-[0.12em] text-[#666e68] uppercase">{project.subtitle}</p>
                    </div>

                    <div className="border border-border/60 bg-surface">
                      {isPlaceholder ? (
                        <div className="flex h-[22rem] items-center justify-center bg-secondary-soft/55">
                          <div className="text-center">
                            <p className="text-[0.76rem] tracking-[0.14em] text-[#6c7470] uppercase">
                              Case Study Visual Placeholder
                            </p>
                            <p className="mt-2 text-[0.95rem] text-[#626a64]">Final project visual to be inserted</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={project.thumbnail.src}
                          alt={project.thumbnail.alt}
                          className="block h-[22rem] w-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div>
                      <p className="text-[1.08rem] leading-[1.55] text-[#4d5651]">{project.description}</p>
                      <p className="mt-4 border-t border-border/50 pt-3 text-[0.8rem] tracking-[0.1em] text-[#5f6660] uppercase">
                        {metadata}
                      </p>
                    </div>

                    {project.href.startsWith('/') ? (
                      <Link
                        to={project.href}
                        className="inline-flex text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase"
                      >
                        VIEW CASE STUDY →
                      </Link>
                    ) : (
                      <a href={project.href} className="inline-flex text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                        VIEW CASE STUDY →
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="expertise" className="content-wrap py-20">
          <p className="text-[0.8rem] font-semibold tracking-[0.15em] text-secondary uppercase">EXPERTISE</p>
          <p className="mt-5 max-w-[32rem] text-[1.08rem] leading-[1.55] text-[#545d57]">
            Business thinking, translated into systems.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-14">
            {expertiseAreas.map((area) => (
              <article key={area.id} className="space-y-3">
                <p className="text-[0.9rem] font-semibold tracking-[0.12em] text-secondary uppercase">{area.id}</p>
                <h3 className="font-sans text-[2rem] leading-[1.08] font-semibold text-[#1f2522]">{area.title}</h3>
                <p className="max-w-[33rem] text-[1.08rem] leading-[1.55] text-[#545d57]">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="content-wrap bg-secondary-soft/45 px-10 py-16">
            <p className="text-[0.8rem] font-semibold tracking-[0.15em] text-secondary uppercase">ABOUT</p>
            <div className="mt-6 grid grid-cols-[1.35fr_1fr] gap-12">
              <h2 className="font-serif text-[4rem] leading-[0.94] text-[#1f2522]">
                A business-first approach to technology.
              </h2>
              <div className="self-end">
                <p className="text-[1.1rem] leading-[1.55] text-[#505a54]">
                  I work across business strategy, marketing and technology, with a background spanning marketing leadership, revenue management, sales, market analysis and business operations alongside hands-on work in AI, automation and digital products.
                </p>
                <p className="mt-4 text-[1.1rem] leading-[1.55] text-[#505a54]">
                  That combination allows me to look beyond the technical task itself: understand the business context, analyse the process behind the problem and translate it into a solution that makes sense commercially and works in practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="content-wrap py-20">
          <p className="text-[0.8rem] font-semibold tracking-[0.15em] text-secondary uppercase">APPROACH</p>
          <p className="mt-5 max-w-[32rem] text-[1.08rem] leading-[1.55] text-[#545d57]">
            From business problem to working system.
          </p>
          <div className="mt-7 border-t border-border/50 pt-7">
            <div className="grid grid-cols-3 gap-10">
            {approachSteps.map((step) => (
              <article key={step.id} className="pr-3">
                <p className="text-[0.86rem] font-semibold tracking-[0.12em] text-secondary uppercase">{step.id}</p>
                <h3 className="mt-2 font-sans text-[1.92rem] font-semibold text-[#1f2522]">{step.title}</h3>
                <p className="mt-3 max-w-[25rem] text-[1.02rem] leading-[1.55] text-[#545d57]">{step.description}</p>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section id="toolkit" className="content-wrap py-20">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-14">
            <div>
              <p className="text-[0.8rem] font-semibold tracking-[0.15em] text-secondary uppercase">TOOLKIT</p>
              <p className="mt-4 max-w-[22rem] text-[1.02rem] leading-[1.55] text-[#57605a]">
                Tools I work with.
              </p>
              <ul className="mt-8 space-y-2">
                {toolkitCategories.map((category) => (
                  <li key={category} className="text-[0.78rem] tracking-[0.12em] text-[#666e68] uppercase">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-7">
              {toolGroups.map((group) => (
                <article key={group.label}>
                  <p className="text-[0.78rem] font-semibold tracking-[0.12em] text-secondary uppercase">{group.label}</p>
                  <p className="mt-2 text-[1rem] leading-[1.55] text-[#444d47]">{group.items.join(' · ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="mt-4 border-t border-border/60 bg-secondary-soft/55 py-20">
          <div className="content-wrap grid grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <h2 className="max-w-[44rem] font-serif text-[3.65rem] leading-[0.97] text-[#1f2522]">
                Have a business problem that might need a better system?
              </h2>
              <p className="mt-5 max-w-[38rem] text-[1.08rem] leading-[1.55] text-[#4f5852]">
                I&apos;m interested in roles and projects involving AI implementation, automation, digital products and business systems, especially where understanding the business is as important as building the solution.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-8 inline-flex bg-[#d7cde4] px-6 py-2.5 text-[0.78rem] font-semibold tracking-[0.14em] text-[#3e4348] uppercase"
              >
                LET&apos;S CONNECT →
              </a>
            </div>
            <div className="self-end">
              <p className="text-[0.78rem] font-semibold tracking-[0.12em] text-[#666e68] uppercase">Contact</p>
              <p className="mt-3 text-[1.02rem] text-[#4f5852]">hello@example.com</p>
              <p className="mt-1 text-[1.02rem] text-[#4f5852]">LinkedIn</p>
              <p className="mt-1 text-[1.02rem] text-[#4f5852]">GitHub</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
