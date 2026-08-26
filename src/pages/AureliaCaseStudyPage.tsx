import { CaseStudyTemplate } from '../components/case-study/CaseStudyTemplate'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'
import { aureliaCaseStudy } from '../content/projects'
import { italianAurelia } from '../i18n/italian'
import { useLanguage } from '../i18n/language'

export function AureliaCaseStudyPage() {
  const { language } = useLanguage()
  const caseStudy =
    language === 'it'
      ? {
          ...aureliaCaseStudy,
          projectDescriptor: italianAurelia.descriptor,
          intro: [...italianAurelia.intro],
          heroMetadata: italianAurelia.metadata.map((item) => ({ ...item })),
          customerExperience: {
            ...aureliaCaseStudy.customerExperience,
            title: italianAurelia.customerExperience.title,
            copy: italianAurelia.customerExperience.copy,
            features: [...italianAurelia.customerExperience.features],
            ctaLabel: italianAurelia.customerExperience.cta,
          },
          operationsPlatform: {
            ...aureliaCaseStudy.operationsPlatform,
            title: italianAurelia.operationsPlatform.title,
            copy: italianAurelia.operationsPlatform.copy,
            features: [...italianAurelia.operationsPlatform.features],
            ctaLabel: italianAurelia.operationsPlatform.cta,
          },
          kitchenDisplaySystem: {
            ...aureliaCaseStudy.kitchenDisplaySystem,
            title: italianAurelia.kitchenDisplaySystem.title,
            copy: italianAurelia.kitchenDisplaySystem.copy,
            features: [...italianAurelia.kitchenDisplaySystem.features],
            ctaLabel: italianAurelia.kitchenDisplaySystem.cta,
          },
          approach: {
            label: italianAurelia.approach.label,
            copy: italianAurelia.approach.copy,
          },
        }
      : aureliaCaseStudy

  return (
    <div className="site-canvas min-h-screen">
      <Navigation />
      <CaseStudyTemplate caseStudy={caseStudy} />
      <PortfolioFooter />
    </div>
  )
}
