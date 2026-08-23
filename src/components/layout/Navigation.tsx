import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../../content/site'

export function Navigation() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-bg/92 backdrop-blur">
      <div className="content-wrap flex items-center justify-between gap-8 py-4">
        <Link
          to="/"
          className="font-serif text-lg tracking-[0.06em] text-text uppercase"
          aria-label="Go to homepage"
        >
          Portfolio
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
            {navigationLinks.map((item) => {
              const isCurrent = location.pathname === '/' && item.href === '/'
              const isHash = item.href.startsWith('/#')

              return (
                <li key={item.label}>
                  {isHash ? (
                    <a
                      href={item.href}
                      className="rounded-full border border-transparent px-3 py-1.5 text-sm text-muted transition hover:border-border hover:text-text"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className="rounded-full border border-transparent px-3 py-1.5 text-sm text-muted transition hover:border-border hover:text-text aria-[current=page]:border-border aria-[current=page]:text-text"
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
