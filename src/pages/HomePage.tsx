import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { projectCards } from '../content/projects'

export function HomePage() {
  const contactEmail = 'daryna.giancola@gmail.com'
  const linkedinUrl = 'https://www.linkedin.com/in/daryna-giancola/'
  const githubUrl = 'https://github.com/darynagiancola'
  const websiteUrl = 'https://www.darynagiancola.com'
  const cvHref = `${import.meta.env.BASE_URL}Daryna_Giancola_CV_AI_Automation_EN_ad0f.pdf`
  const featuredProjects = projectCards.filter((project) => project.featured).slice(0, 3)
  const selectedWorkCardTitles: Record<string, string> = {
    aurelia: 'AI-POWERED\nHOSPITALITY\nSYSTEM',
    'lead-marketing-automation-system': 'LEAD & MARKETING\nAUTOMATION SYSTEM',
    'ai-support-ticket-routing': 'AI SUPPORT &\nWORKFLOW ROUTING',
  }
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
  const toolGroups = [
    { label: 'AI & LLM Platforms', items: ['ChatGPT', 'Claude', 'Gemini', 'NotebookLM'] },
    {
      label: 'AI Agents & APIs',
      items: ['OpenAI API', 'Anthropic API', 'Gemini API', 'LangChain', 'RAG / Knowledge-Based AI'],
    },
    {
      label: 'Automation & Integration',
      items: ['Make', 'Webhooks', 'REST APIs', 'HTTP Requests', 'JSON', 'Zapier', 'n8n'],
    },
    {
      label: 'CRM & Customer Engagement',
      items: ['Pipedrive', 'Intercom', 'ActiveCampaign', 'ClickFunnels', 'Cal.com'],
    },
    {
      label: 'AI-Assisted Development',
      items: ['Cursor', 'Lovable', 'GitHub', 'Vercel', 'Supabase', 'Docker', 'Google Colab', 'HTML/CSS'],
    },
    { label: 'Marketing & Analytics', items: ['Meta Ads', 'Google Ads', 'Google Analytics'] },
    { label: 'Business & Productivity', items: ['Notion', 'Airtable', 'Google Workspace', 'Microsoft 365'] },
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
    <div className="site-canvas min-h-screen overflow-x-hidden md:overflow-x-visible">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="border-b border-border/65">
        <div className="content-wrap flex items-center justify-between py-4">
          <p className="text-[1.2rem] font-semibold tracking-[0.015em] text-[#1d211e] md:text-[1.65rem]">DARYNA GIANCOLA</p>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-[0.68rem] font-semibold tracking-[0.16em] text-[#2c312d] uppercase [&::-webkit-details-marker]:hidden">
              MENU
            </summary>
            <nav className="absolute right-0 top-[calc(100%+1rem)] z-50 flex min-w-[10rem] flex-col gap-4 border border-border/65 bg-bg px-5 py-4 text-right text-[0.68rem] font-semibold tracking-[0.16em] text-[#2c312d] uppercase">
              <a href="#selected-work">WORK</a>
              <a href="#about">ABOUT</a>
              <a href="#expertise">EXPERTISE</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </details>
          <div className="hidden items-center gap-10 md:flex">
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

          <div className="relative mt-3 md:mt-2 md:min-h-[32rem]">
            <p className="hero-display homepage-display relative z-10 text-[#111419] uppercase">PORTFOLIO</p>

            <figure className="pointer-events-none relative z-20 -mt-9 h-[16.2rem] w-full overflow-hidden md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-[31.5rem] md:w-auto md:overflow-visible">
              <img
                src={heroPortrait}
                alt="Portrait integrated into homepage hero."
                className="absolute -right-[4.75rem] -top-2 h-[21.6rem] w-auto max-w-none object-contain md:static md:h-full"
                loading="eager"
              />
            </figure>

            <div className="relative z-10 mt-3 max-w-[32rem] pb-8 md:mt-2 md:pb-0">
              <h1 className="homepage-editorial-headline font-serif text-[#1f2522] md:text-[3.12rem] md:leading-[1.05]">I design intelligent systems around real business needs.</h1>
              <p className="homepage-body mt-4 max-w-[28rem] text-[#4b544f] md:max-w-[24rem] md:text-[1.02rem] md:leading-relaxed">
                I combine business strategy, marketing and process thinking with AI, automation and digital product development to turn complex workflows into practical, working solutions.
              </p>
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
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

        <section id="selected-work" className="homepage-section-spacing content-wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="homepage-section-label">Selected Work</p>
            <a href="#" className="utility-action text-secondary">
              VIEW ALL PROJECTS →
            </a>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
              {featuredProjects.map((project, index) => {
                const metadata = project.metadata?.[0]?.value ?? project.tags.join(' · ')
                const cardTitle = selectedWorkCardTitles[project.slug] ?? project.title.toUpperCase()
                const cardContent = (
                  <>
                    <div className="flex items-start justify-between">
                      <p className="font-serif text-[3rem] leading-none text-[#b5abbe]">{String(index + 1).padStart(2, '0')}</p>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 h-4 w-4 text-[#1f2522] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      >
                        <path d="M5 19 19 5M9 5h10v10" />
                      </svg>
                    </div>
                    <div className="mt-auto">
                      <h2 className="homepage-content-heading whitespace-pre-line">
                        {cardTitle}
                      </h2>
                      <p className="homepage-metadata mt-3 tracking-[0.12em] text-[#666e68] uppercase">{project.subtitle}</p>
                    </div>
                  </>
                )

                return (
                  <article key={project.slug} className="space-y-5">
                    {project.href.startsWith('/') ? (
                      <Link
                        to={project.href}
                        className="group flex h-[19rem] flex-col border border-border/60 bg-[#EEE9F0] p-5 transition-colors duration-200 hover:bg-[#e9e4ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[22rem] md:p-6"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <a
                        href={project.href}
                        className="group flex h-[19rem] flex-col border border-border/60 bg-[#EEE9F0] p-5 transition-colors duration-200 hover:bg-[#e9e4ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[22rem] md:p-6"
                      >
                        {cardContent}
                      </a>
                    )}

                    <div>
                      <p className="homepage-body text-[#4d5651]">{project.description}</p>
                      <p className="homepage-metadata mt-4 border-t border-border/50 pt-3 tracking-[0.1em] text-[#5f6660] uppercase">
                        {metadata}
                      </p>
                    </div>

                    {project.href.startsWith('/') ? (
                      <Link
                        to={project.href}
                        className="utility-action inline-flex text-secondary"
                      >
                        VIEW CASE STUDY →
                      </Link>
                    ) : (
                      <a href={project.href} className="utility-action inline-flex text-secondary">
                        VIEW CASE STUDY →
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="expertise" className="homepage-section-spacing content-wrap">
          <p className="homepage-section-label">Expertise</p>
          <p className="homepage-editorial-headline mt-5 max-w-[44rem] font-serif text-[#1f2522] md:text-[2.35rem] md:leading-[1.05]">
            Business thinking, translated into systems.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {expertiseAreas.map((area) => (
              <article key={area.id} className="space-y-4">
                <h3 className="homepage-content-heading">{area.title}</h3>
                <p className="homepage-body max-w-[33rem] text-[#545d57]">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="homepage-section-spacing">
          <div className="content-wrap bg-secondary-soft/45 px-5 py-12 md:px-10 md:py-16">
            <p className="homepage-section-label">About</p>
            <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-[1.18fr_1fr] md:gap-14">
              <h2 className="homepage-editorial-headline font-serif text-[#1f2522] md:text-[4rem] md:leading-[0.94]">
                A business-first approach to technology.
              </h2>
              <div>
                <p className="homepage-body text-[#505a54] md:text-[1.1rem] md:leading-[1.56]">
                  I work across business strategy, marketing and technology, with a background spanning marketing
                  leadership, revenue management, sales, market analysis and business operations alongside hands-on
                  work in AI, automation and digital products.
                </p>
                <p className="homepage-body mt-4 text-[#505a54] md:text-[1.1rem] md:leading-[1.56]">
                  That combination allows me to look beyond the technical task itself: understand the business
                  context, analyse the process behind the problem and translate it into a solution that makes sense
                  commercially and works in practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="homepage-section-spacing content-wrap">
          <p className="homepage-section-label">Approach</p>
          <p className="homepage-body mt-5 max-w-[32rem] text-[#545d57]">
            From business problem to working system.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-16">
            {approachSteps.map((step, index) => (
              <article key={step.id} className="relative">
                <h3 className="homepage-content-heading">{step.title}</h3>
                {index < approachSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[2.7rem] top-0 hidden text-[1.35rem] font-light leading-none text-secondary/75 lg:block"
                  >
                    →
                  </span>
                )}
                <p className="homepage-body mt-4 max-w-[24rem] text-[#545d57]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="toolkit" className="homepage-section-spacing content-wrap">
          <p className="homepage-section-label">Tools I Use</p>

          <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-2">
            {toolGroups.map((group) => (
              <article key={group.label}>
                <p className="homepage-metadata font-semibold tracking-[0.12em] text-secondary uppercase">{group.label}</p>
                <p className="homepage-body mt-2.5 text-[#3f453f]">{group.items.join(' · ')}</p>
              </article>
            ))}
          </div>
          <p className="homepage-body mt-10 max-w-[48rem] text-[#5c6560]">
            Every business has a different stack. I focus on the process and system logic first, then work with the
            tools and platforms the business uses or the solution requires.
          </p>
        </section>

        <footer id="contact" className="homepage-section-spacing mt-4 border-t border-border/60 bg-secondary-soft/55">
          <div className="content-wrap">
            <h2 className="contact-cta-headline max-w-[44rem] font-serif text-[#1f2522]">
              Have a business problem that might need a better system?
            </h2>
            <p className="homepage-body mt-5 max-w-[38rem] text-[#4f5852]">
              I&apos;m interested in roles and projects involving AI implementation, automation, digital products and business systems, especially where understanding the business is as important as building the solution.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="utility-action mt-8 inline-flex bg-[#d7cde4] px-6 py-2.5 text-[#3e4348]"
            >
              LET&apos;S CONNECT →
            </a>

            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border/45 pt-8 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="text-[1.02rem] font-semibold tracking-[0.03em] text-[#1d211e]">DARYNA GIANCOLA</p>
                <p className="mt-2 flex items-center gap-1.5 text-[0.95rem] text-[#5c6560]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-3.5 w-3.5 shrink-0"
                  >
                    <path
                      d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.5" r="2.15" />
                  </svg>
                  Brescia, Italy
                </p>
              </div>

              <div className="space-y-2">
                <a href={`mailto:${contactEmail}`} className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]">
                  {contactEmail}
                </a>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]"
                >
                  www.darynagiancola.com
                </a>
              </div>

              <div className="space-y-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]"
                >
                  LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]"
                >
                  GitHub
                </a>
              </div>

              <div>
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className="utility-action text-secondary"
                >
                  VIEW CV →
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
