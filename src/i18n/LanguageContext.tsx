import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type Language } from './language'

const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): Language {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'it'
  } catch {
    return 'it'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title =
      language === 'it'
        ? 'Daryna Giancola | AI, Automazione & Digital Systems'
        : 'Daryna Giancola | AI Products & Automation'

    try {
      window.sessionStorage.setItem(STORAGE_KEY, language)
    } catch {
      // The selected language still works when session storage is unavailable.
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      cvHref: `${import.meta.env.BASE_URL}Daryna_Giancola_CV_AI_Automation_${language === 'it' ? 'IT' : 'EN'}.pdf`,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
