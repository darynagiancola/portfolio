import { CaseStudyTemplate } from '../components/case-study/CaseStudyTemplate'
import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'
import { aureliaCaseStudy } from '../content/projects'
import { contactContent } from '../content/site'

export function AureliaCaseStudyPage() {
  return (
    <div className="site-canvas min-h-screen">
      <Navigation />
      <CaseStudyTemplate caseStudy={aureliaCaseStudy} />

      <Footer
        title={contactContent.title}
        description={contactContent.description}
        email={contactContent.email}
      />
    </div>
  )
}
