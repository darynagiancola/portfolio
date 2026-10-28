import { Link } from 'react-router-dom'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'
import { SelectedWorkCard } from '../components/projects/SelectedWorkCard'
import { getListedProjects } from '../content/projects'
import { italianProjects } from '../i18n/italian'
import { useLanguage } from '../i18n/language'

export function ProjectsPage() {
  const { language } = useLanguage()
  const isItalian = language === 'it'
  const listedProjects = getListedProjects()

  return (
    <div className="site-canvas min-h-screen">
      <Navigation />

      <main id="main-content">
        <section className="homepage-section-spacing content-wrap">
          <Link
            to="/"
            className="inline-flex text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase hover:text-text"
          >
            {isItalian ? italianProjects.backToHome : '← BACK TO HOME'}
          </Link>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="homepage-section-label">
                {isItalian ? italianProjects.heading : 'All projects'}
              </p>
              <p className="homepage-body mt-4 max-w-[40rem] text-[#4d5651]">
                {isItalian
                  ? italianProjects.intro
                  : 'Case studies and concept work across digital products, automation, brand and operational systems — including projects not featured on the homepage.'}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 md:gap-10">
            {listedProjects.map((project, index) => (
              <SelectedWorkCard key={project.slug} project={project} index={index} isItalian={isItalian} />
            ))}
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  )
}
