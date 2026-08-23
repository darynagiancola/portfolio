import { closingContent, contactContent } from '../../content/site'

export function ClosingBlock() {
  const links = [
    { label: 'Email', href: `mailto:${contactContent.email}` },
    { label: 'LinkedIn', href: contactContent.linkedinUrl },
    { label: 'GitHub', href: contactContent.githubUrl },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="closing-heading"
      className="w-full bg-dark-surface py-16 sm:py-20 lg:py-28"
    >
      <div className="content-wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-accent-soft/80 uppercase">
              {closingContent.label}
            </p>
            <h2
              id="closing-heading"
              className="hero-display mt-5 text-[clamp(2.5rem,10vw,3.2rem)] leading-[0.92] text-bg uppercase sm:text-[clamp(3.4rem,7vw,4.6rem)] lg:text-[4.4rem]"
            >
              {closingContent.statement}
            </h2>
            <p className="mt-6 max-w-[34rem] text-[1rem] text-bg/70 sm:text-[1.05rem]">
              {closingContent.description}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <a
              href={`mailto:${contactContent.email}`}
              className="block border-t border-dark-border pt-4 text-[1.15rem] text-bg transition hover:text-accent-soft sm:text-[1.3rem]"
            >
              {contactContent.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-y-3">
              {links.slice(1).map((link, index) => (
                <li
                  key={link.label}
                  className={index === 0 ? '' : 'ml-4 border-l border-dark-border pl-4'}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.68rem] tracking-[0.18em] text-bg/70 uppercase transition hover:text-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.68rem] tracking-[0.18em] text-bg/50 uppercase">
              {closingContent.availability}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-dark-border pt-5">
          <p className="text-[0.68rem] tracking-[0.19em] text-bg/60 uppercase">
            Daryna Giancola
          </p>
          <p className="text-[0.68rem] tracking-[0.19em] text-bg/40 uppercase">
            AI products · Automation · Digital systems
          </p>
        </div>
      </div>
    </section>
  )
}
