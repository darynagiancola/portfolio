import { createContext, useContext } from 'react'

export type Language = 'en' | 'it'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  cvHref: string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
