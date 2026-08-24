import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { projectCards } from '../content/projects'

export function HomePage() {
  const hospitalityProject = projectCards[0]
  const caseStudies = [
    {
      id: '01',
      title: 'AI-Powered Hospitality System',
      description:
        'A connected hospitality ecosystem covering customer interaction, AI-assisted menu discovery, ordering/payment and kitchen/operational workflows.',
      metadata: 'Hospitality · AI discovery · Ordering & payment · Kitchen operations',
      href: hospitalityProject.href,
      hasImage: true,
      image: hospitalityProject.thumbnail,
    },
    {
      id: '02',
      title: 'Lead & Marketing Automation System',
      description:
        'A multi-step business automation covering lead generation/capture, ActiveCampaign automations, webinar communication, Pipedrive CRM status changes and follow-up workflows.',
      metadata: 'Lead capture · ActiveCampaign · Webinar flow · Pipedrive',
      href: '#',
      hasImage: false,
    },
    {
      id: '03',
      title: 'AI Support & Ticket Routing',
      description:
        'An Intercom-based AI support system using a knowledge base to answer customer questions and routing/escalation logic to direct requests to the appropriate departments.',
      metadata: 'Intercom AI support · Knowledge base · Routing & escalation',
      href: '#',
      hasImage: false,
    },
  ]
  const expertiseAreas = [
    {
      id: '01',
      title: 'Business & Process Strategy',
      description:
        'Mapping operational friction, priorities and system boundaries before any tool decisions are made.',
    },
    {
      id: '02',
      title: 'AI & Automation',
      description:
        'Designing practical AI and automation workflows that improve real execution, not just demos.',
    },
    {
      id: '03',
      title: 'Marketing & Commercial Strategy',
      description:
        'Aligning customer acquisition, communication and sales operations into one coherent process.',
    },
    {
      id: '04',
      title: 'Digital Products & Systems',
      description:
        'Shaping connected products where interface clarity and operational architecture work together.',
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
    { label: 'AI & Knowledge', items: ['OpenAI', 'Claude', 'Gemini', 'Perplexity'] },
    { label: 'Automation & Integration', items: ['Make', 'n8n', 'Zapier', 'Webhooks / APIs'] },
    {
      label: 'CRM, Marketing & Customer Operations',
      items: ['ActiveCampaign', 'Pipedrive', 'Intercom', 'Customer journeys'],
    },
    { label: 'Product & Development', items: ['Cursor', 'GitHub', 'React', 'Vite'] },
    { label: 'Data, Backend & Deployment', items: ['Supabase', 'PostgreSQL', 'Vercel', 'GitHub Pages'] },
    { label: 'Business, Data & Productivity', items: ['Notion', 'Airtable', 'Looker Studio', 'Dashboards'] },
    { label: 'Marketing & Analytics', items: ['GA4', 'UTM strategy', 'Funnel tracking', 'Attribution'] },
  ]
  const approachSteps = [
    {
      id: '01',
      title: 'Understand',
      description:
        'Clarify the business context, operational constraints and outcomes before defining a solution.',
    },
    {
      id: '02',
      title: 'Design',
      description:
        'Structure the system, workflows and interfaces so teams can adopt and run them with confidence.',
    },
    {
      id: '03',
      title: 'Build',
      description:
        'Implement, integrate and refine the final product so strategy and execution stay connected.',
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
              <a href="#expertise">EXPERTISE</a>
              <a href="#about">ABOUT</a>
              <a href="#approach">APPROACH</a>
              <a href="#toolkit">TOOLKIT</a>
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
              <h1 className="font-serif text-[3.12rem] leading-[1.05] text-[#1f2522]">
                I design intelligent systems that <em className="italic">inspire and connect.</em>
              </h1>
              <p className="mt-4 max-w-[24rem] text-[1.02rem] text-[#4b544f]">
                AI-powered products, automation and digital experiences built around real business needs.
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

        <section id="selected-work" className="content-wrap border-b border-border/60 py-18">
          <div className="flex items-end justify-between gap-6">
            <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-[#48504a] uppercase">Selected Work</p>
            <p className="max-w-[34rem] text-right text-[0.95rem] text-[#5a635d]">
              Three case studies that show strategy, system design and implementation across AI, automation and operations.
            </p>
          </div>

          <div className="mt-10 border-t border-border/60">
            {caseStudies.map((study, index) => {
              const copyBlock = (
                <div>
                  <p className="text-[2.4rem] leading-none text-secondary">{study.id}</p>
                  <h2 className="mt-4 max-w-[32rem] font-serif text-[2.55rem] leading-[1.05] text-[#1f2522]">
                    {study.title}
                  </h2>
                  <p className="mt-4 max-w-[31rem] text-[1rem] text-[#4d5651]">{study.description}</p>
                  <p className="mt-6 border-t border-border/50 pt-3 text-[0.66rem] tracking-[0.14em] text-[#5f6660] uppercase">
                    {study.metadata}
                  </p>
                  {study.href.startsWith('/') ? (
                    <Link
                      to={study.href}
                      className="mt-6 inline-flex text-[0.7rem] font-semibold tracking-[0.16em] text-[#3f4641] uppercase"
                    >
                      View case study →
                    </Link>
                  ) : (
                    <a href={study.href} className="mt-6 inline-flex text-[0.7rem] font-semibold tracking-[0.16em] text-[#3f4641] uppercase">
                      View case study →
                    </a>
                  )}
                </div>
              )

              const visualBlock = (
                <div className="border border-border/60 bg-surface">
                  {study.hasImage && study.image ? (
                    <img
                      src={study.image.src}
                      alt={study.image.alt}
                      className="block h-[24rem] w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-[24rem] items-center justify-center bg-[#f5eee1]">
                      <div className="text-center">
                        <p className="text-[0.66rem] tracking-[0.16em] text-[#727a75] uppercase">
                          Case Study Visual Placeholder
                        </p>
                        <p className="mt-2 text-[0.84rem] text-[#626a64]">Final project visuals to be inserted</p>
                      </div>
                    </div>
                  )}
                </div>
              )

              return (
                <article key={study.id} className="grid grid-cols-2 gap-14 border-b border-border/45 py-14 last:border-b-0 last:pb-0">
                  {index % 2 === 0 ? (
                    <>
                      {visualBlock}
                      {copyBlock}
                    </>
                  ) : (
                    <>
                      {copyBlock}
                      {visualBlock}
                    </>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="expertise" className="content-wrap border-b border-border/60 py-18">
          <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-[#48504a] uppercase">Expertise</p>
          <div className="mt-8 grid grid-cols-2 gap-x-14 gap-y-12">
            {expertiseAreas.map((area) => (
              <article key={area.id} className="border-t border-border/50 pt-5">
                <p className="text-[0.68rem] tracking-[0.15em] text-secondary uppercase">{area.id}</p>
                <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[#1f2522]">{area.title}</h3>
                <p className="mt-3 max-w-[30rem] text-[0.98rem] text-[#545d57]">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-wrap border-b border-border/60 py-18">
          <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-[#48504a] uppercase">About</p>
          <div className="mt-6 grid grid-cols-[1.35fr_1fr] gap-12">
            <h2 className="font-serif text-[4rem] leading-[0.94] text-[#1f2522]">
              A business-first approach to technology.
            </h2>
            <div className="self-end border-l border-border/50 pl-6">
              <p className="text-[1rem] text-[#505a54]">
                Technology choices should follow business reality. My work starts from operations, decision flows and
                customer impact, then translates that into systems teams can actually use and sustain.
              </p>
            </div>
          </div>
        </section>

        <section id="approach" className="content-wrap border-b border-border/60 py-18">
          <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-[#48504a] uppercase">Approach</p>
          <div className="mt-9 grid grid-cols-3 gap-10">
            {approachSteps.map((step) => (
              <article key={step.id} className="border-t border-border/50 pt-4">
                <p className="text-[0.68rem] tracking-[0.15em] text-secondary uppercase">{step.id}</p>
                <h3 className="mt-2 font-serif text-[1.95rem] text-[#1f2522]">{step.title}</h3>
                <p className="mt-3 max-w-[25rem] text-[0.95rem] text-[#545d57]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="toolkit" className="content-wrap border-b border-border/60 py-18">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-14">
            <div>
              <p className="text-[0.82rem] font-semibold tracking-[0.15em] text-[#48504a] uppercase">Toolkit</p>
              <p className="mt-4 max-w-[22rem] text-[0.95rem] text-[#57605a]">
                Grouped by capability and delivery context rather than presented as an exhaustive logo wall.
              </p>
              <ul className="mt-8 space-y-2">
                {toolkitCategories.map((category) => (
                  <li key={category} className="text-[0.7rem] tracking-[0.14em] text-[#666e68] uppercase">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {toolGroups.map((group) => (
                <article key={group.label} className="border-t border-border/50 pt-3">
                  <p className="text-[0.66rem] tracking-[0.14em] text-[#59625d] uppercase">{group.label}</p>
                  <p className="mt-2 text-[0.95rem] text-[#444d47]">{group.items.join(' · ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="content-wrap py-20">
          <div className="grid grid-cols-[1.4fr_1fr] gap-10 border-t border-border/60 pt-12">
            <div>
              <h2 className="max-w-[44rem] font-serif text-[3.55rem] leading-[0.97] text-[#1f2522]">
                Have a business problem that might need a better system?
              </h2>
              <a
                href="mailto:hello@example.com"
                className="mt-8 inline-flex rounded-sm bg-secondary-soft px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[#3e4348] uppercase"
              >
                Let&apos;s connect →
              </a>
            </div>
            <div className="self-end border-l border-border/50 pl-6">
              <p className="text-[0.72rem] tracking-[0.14em] text-[#666e68] uppercase">Contact</p>
              <p className="mt-3 text-[0.98rem] text-[#4f5852]">hello@example.com</p>
              <p className="mt-1 text-[0.98rem] text-[#4f5852]">LinkedIn</p>
              <p className="mt-1 text-[0.98rem] text-[#4f5852]">GitHub</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
