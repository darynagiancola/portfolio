import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../../content/site'

export function Navigation() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-30 border-b border-border/55 bg-bg/88 backdrop-blur-md">
      <div className="content-wrap flex items-center justify-between gap-8 py-5">
        <Link
          to="/"
          className="font-sans text-[0.95rem] tracking-[0.16em] text-text uppercase"
          aria-label="Go to homepage"
        >
          Daryna
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {navigationLinks.map((item) => {
              const isCurrent = location.pathname === '/' && item.href === '/'
              const isHash = item.href.startsWith('#')
              const hashHref = `${import.meta.env.BASE_URL}${item.href}`

              return (
                <li key={item.label}>
                  {isHash ? (
                    <a
                      href={hashHref}
                      className="text-[0.72rem] tracking-[0.18em] text-muted uppercase transition hover:text-text"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className="text-[0.72rem] tracking-[0.18em] text-muted uppercase transition hover:text-text aria-[current=page]:text-text"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
