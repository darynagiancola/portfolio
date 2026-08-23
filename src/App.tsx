import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AureliaCaseStudyPage } from './pages/AureliaCaseStudyPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/aurelia" element={<AureliaCaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
