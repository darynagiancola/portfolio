import { Link } from 'react-router-dom'
import heroPortrait from '../assets/hero-portrait.png'
import { projectCards } from '../content/projects'

export function HomePage() {
  const projects = projectCards.slice(0, 3)
  const services = [
    {
      title: 'WEB DESIGN',
      description: 'Modern, responsive websites that look beautiful everywhere.',
    },
    {
      title: 'AUTOMATION SYSTEMS / WORKFLOWS',
      description: 'End-to-end automation that streamlines operations and reduces manual work.',
    },
    {
      title: 'AI AGENTS & INTEGRATIONS',
      description: 'Intelligent agents and integrations that connect tools, systems and data.',
    },
    {
      title: 'DIGITAL SYSTEMS & PROCESS ARCHITECTURE',
      description: 'Scalable digital systems and processes designed for clarity, efficiency and growth.',
    },
  ]
  const toolGroups = [
    { label: 'AI / LLM', items: ['OpenAI', 'Claude', 'Gemini', 'LangChain'] },
    { label: 'AUTOMATION', items: ['Make', 'n8n', 'Zapier'] },
    { label: 'DEVELOPMENT & INFRASTRUCTURE', items: ['Cursor', 'GitHub', 'Supabase', 'Vercel'] },
    { label: 'BUSINESS / CRM & MARKETING', items: ['Notion', 'Airtable', 'Pipedrive', 'ActiveCampaign'] },
  ]
  const processSteps = ['DISCOVER', 'PLAN', 'DESIGN', 'DEVELOP', 'DELIVER']
  const timeline = [
    { period: '2022 – Present', role: 'Selected role placeholder focused on AI products and digital systems.' },
    { period: '2020 – 2022', role: 'Selected role placeholder focused on marketing automation and process ownership.' },
    { period: '2018 – 2020', role: 'Selected role placeholder focused on digital projects and implementation.' },
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
              <a href="#experience">EXPERIENCE</a>
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
          <div className="content-wrap grid grid-cols-3 divide-x divide-border/55">
            {[
              { value: '50+', label: 'PROJECTS COMPLETED', icon: '◻' },
              { value: '5+', label: 'YEARS OF EXPERIENCE', icon: '☆' },
              { value: '30+', label: 'HAPPY CLIENTS', icon: '♡' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-5 px-9 py-5">
                <span className="text-[1.6rem] text-[#2e3430]" aria-hidden="true">
                  {stat.icon}
                </span>
                <div>
                  <p className="text-[1.4rem] font-semibold leading-none text-[#1f2522]">{stat.value}</p>
                  <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.15em] text-[#3f4640] uppercase">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="selected-work" className="content-wrap border-b border-border/60 py-8">
          <div className="grid grid-cols-[2.1fr_1fr] gap-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">SELECTED WORKS</p>
                <a href="#selected-work" className="text-[0.74rem] tracking-[0.12em] text-[#5a5f64] uppercase">
                  VIEW ALL PROJECTS →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {projects.map((project) => (
                  <article key={project.slug} className="space-y-2">
                    <div className="h-[13.7rem] overflow-hidden border border-border/55 bg-surface">
                      <img src={project.thumbnail.src} alt={project.thumbnail.alt} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[1.28rem] font-semibold leading-tight text-[#1e2421] uppercase">{project.title}</h3>
                    <p className="text-[0.8rem] text-[#59625c]">{project.subtitle}</p>
                    {project.href.startsWith('/') ? (
                      <Link to={project.href} className="inline-block text-[0.68rem] tracking-[0.14em] text-[#5d636a] uppercase">
                        VIEW DETAILS →
                      </Link>
                    ) : (
                      <a href={project.href} className="inline-block text-[0.68rem] tracking-[0.14em] text-[#5d636a] uppercase">
                        VIEW DETAILS →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">WHAT I DO</p>
              <div className="space-y-3">
                {services.map((service) => (
                  <article key={service.title} className="flex gap-3 border-b border-border/50 pb-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-sm bg-secondary-soft text-[0.8rem] text-[#4e5560]">
                      ✦
                    </div>
                    <div>
                      <h3 className="text-[0.72rem] font-semibold tracking-[0.11em] text-[#2a312d] uppercase">{service.title}</h3>
                      <p className="mt-1 text-[0.76rem] text-[#57615b]">{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-wrap border-b border-border/60 py-8">
          <div className="grid grid-cols-[2.1fr_1fr] gap-8">
            <div>
              <p className="mb-4 text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">TOOLS &amp; TECHNOLOGIES</p>
              <div className="space-y-4">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.14em] text-[#5f6761] uppercase">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-border/65 bg-surface px-3 py-1 text-[0.72rem] text-[#313732]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">HOW I WORK</p>
              <div className="grid grid-cols-5 gap-2">
                {processSteps.map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary-soft text-[0.76rem] text-[#4e5560]">
                        {index + 1}
                      </span>
                      {index < processSteps.length - 1 ? (
                        <span className="text-[0.85rem] text-[#7d8480]" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.12em] text-[#333a35] uppercase">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-wrap border-b border-border/60 py-8">
          <div className="grid grid-cols-[1.15fr_1.85fr] gap-8">
            <div>
              <p className="text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">ABOUT ME</p>
              <p className="mt-3 max-w-[26rem] text-[1.04rem] text-[#434b46]">
                My work sits between business thinking, technology and implementation — understanding how an organisation
                actually operates, then building the system that removes the friction.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border/50 border border-border/50">
              {[
                {
                  title: 'SYSTEMS THAT WORK',
                  text: 'I build systems that scale operationally and stay practical as the business grows.',
                },
                {
                  title: 'PEOPLE AT THE CENTER',
                  text: 'Technology should support humans and improve clarity, adoption and real impact.',
                },
                {
                  title: 'MEASURABLE IMPACT',
                  text: 'From automated workflows to focused products, everything is designed for outcomes.',
                },
              ].map((item) => (
                <article key={item.title} className="px-4 py-4">
                  <p className="text-[0.62rem] font-semibold tracking-[0.13em] text-[#575f59] uppercase">{item.title}</p>
                  <p className="mt-2 text-[0.78rem] text-[#59625d]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-wrap border-b border-border/60 py-8">
          <div className="grid grid-cols-[1fr_1.3fr] gap-8">
            <div>
              <p className="mb-3 text-[0.85rem] font-semibold tracking-[0.12em] text-[#474f49] uppercase">EXPERIENCE</p>
              <ol className="relative ml-3 space-y-4 border-l border-border/70 pl-5">
                {timeline.map((item) => (
                  <li key={item.period} className="relative">
                    <span className="absolute -left-[1.62rem] top-1 h-2 w-2 rounded-full bg-secondary" aria-hidden="true"></span>
                    <p className="text-[0.66rem] font-semibold tracking-[0.11em] text-[#59615b] uppercase">{item.period}</p>
                    <p className="mt-1 text-[0.8rem] text-[#4f5852]">{item.role}</p>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="self-start bg-secondary-soft px-7 py-6">
              <p className="text-[2rem] leading-none text-[#747a83]" aria-hidden="true">
                “
              </p>
              <p className="mt-1 max-w-[32rem] font-serif text-[1.56rem] leading-[1.22] text-[#2d3330]">
                I turn complexity into clear systems that help teams move faster and make better decisions.
              </p>
            </aside>
          </div>
        </section>

        <footer id="contact" className="content-wrap py-8">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] items-end gap-8">
            <div>
              <p className="text-[1.55rem] font-serif leading-tight text-[#1e2521]">Let&apos;s create something meaningful together.</p>
              <a
                href="#contact"
                className="mt-4 inline-flex rounded-sm bg-secondary-soft px-5 py-2 text-[0.66rem] font-semibold tracking-[0.16em] text-[#3f4348] uppercase"
              >
                LET&apos;S CONNECT →
              </a>
            </div>
            <div className="text-[0.78rem] text-[#57615b]">
              <p>hello@example.com</p>
              <p className="mt-1">www.daryna.com</p>
              <p className="mt-1">@nordic_italy</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-[#48514b]">
              {['in', 'ig', 'be'].map((social) => (
                <span key={social} className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 text-[0.66rem]">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
