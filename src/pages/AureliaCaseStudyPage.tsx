import { CaseStudyTemplate } from '../components/case-study/CaseStudyTemplate'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'
import { aureliaCaseStudy } from '../content/projects'

export function AureliaCaseStudyPage() {
  return (
    <div className="site-canvas min-h-screen">
      <Navigation />
      <CaseStudyTemplate caseStudy={aureliaCaseStudy} />
      <PortfolioFooter />
    </div>
  )
}
