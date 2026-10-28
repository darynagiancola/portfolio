import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { LanguageProvider } from './i18n/LanguageContext'
import { AiSupportCaseStudyPage } from './pages/AiSupportCaseStudyPage'
import { AureliaCaseStudyPage } from './pages/AureliaCaseStudyPage'
import { HomePage } from './pages/HomePage'
import { FuoriOraCaseStudyPage } from './pages/FuoriOraCaseStudyPage'
import { LeadMarketingCaseStudyPage } from './pages/LeadMarketingCaseStudyPage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/aurelia" element={<AureliaCaseStudyPage />} />
          <Route path="/projects/fuori-ora" element={<FuoriOraCaseStudyPage />} />
          <Route path="/projects/ai-support" element={<AiSupportCaseStudyPage />} />
          <Route path="/projects/lead-marketing" element={<LeadMarketingCaseStudyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
