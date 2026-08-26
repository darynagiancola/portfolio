import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../../content/site'
import { italianHome } from '../../i18n/italian'
import { useLanguage } from '../../i18n/language'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navigation() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  const renderNavItem = (href: string, label: string) => {
    const isCurrent = location.pathname === '/' && href === '/'
    const isHash = href.startsWith('#')
    const hashHref = `${import.meta.env.BASE_URL}${href}`
    const localizedLabel =
      language === 'it'
        ? {
            '#selected-work': italianHome.navigation.work,
            '#about': italianHome.navigation.about,
            '#expertise': italianHome.navigation.expertise,
            '#contact': italianHome.navigation.contact,
          }[href] ?? label
        : label

    if (isHash) {
      return (
        <a
          href={hashHref}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-[0.72rem] tracking-[0.18em] text-muted uppercase transition hover:text-text"
        >
          {localizedLabel}
        </a>
      )
    }

    return (
      <Link
        to={href}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-current={isCurrent ? 'page' : undefined}
        className="text-[0.72rem] tracking-[0.18em] text-muted uppercase transition hover:text-text aria-[current=page]:text-text"
      >
        {localizedLabel}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/55 bg-bg/88 backdrop-blur-md">
      <div className="content-wrap relative flex items-center justify-between gap-6 py-4 sm:py-5">
        <Link
          to="/"
          className="font-sans text-[0.82rem] tracking-[0.19em] text-text uppercase"
          aria-label="Go to homepage"
        >
          Daryna Giancola
        </Link>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="text-[0.76rem] tracking-[0.2em] text-text uppercase transition hover:text-accent"
          >
            Menu
          </button>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4 lg:gap-6">
              {navigationLinks.map((item) => {
                return (
                  <li key={item.label}>
                    {renderNavItem(item.href, item.label)}
                  </li>
                )
              })}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="border-t border-border/70 bg-bg/96 md:hidden"
        >
          <ul className="content-wrap grid gap-3 py-4">
            {navigationLinks.map((item) => (
              <li key={item.label}>{renderNavItem(item.href, item.label)}</li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
