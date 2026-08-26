import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { AiSupportCaseStudyPage } from './pages/AiSupportCaseStudyPage'
import { AureliaCaseStudyPage } from './pages/AureliaCaseStudyPage'
import { HomePage } from './pages/HomePage'
import { LeadMarketingCaseStudyPage } from './pages/LeadMarketingCaseStudyPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/aurelia" element={<AureliaCaseStudyPage />} />
        <Route path="/projects/ai-support" element={<AiSupportCaseStudyPage />} />
        <Route path="/projects/lead-marketing" element={<LeadMarketingCaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
