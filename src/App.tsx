import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AureliaCaseStudyPage } from './pages/AureliaCaseStudyPage'
import { HomePage } from './pages/HomePage'
import { getRuntimeBasePath } from './utils/runtimeBasePath'

export default function App() {
  const runtimeBasePath = getRuntimeBasePath()

  return (
    <BrowserRouter basename={runtimeBasePath}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/aurelia" element={<AureliaCaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
