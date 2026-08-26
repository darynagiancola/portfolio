import { useLanguage, type Language } from '../../i18n/language'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languageButton = (value: Language, label: string) => (
    <button
      type="button"
      onClick={() => setLanguage(value)}
      aria-pressed={language === value}
      className={`border-b pb-0.5 text-[0.66rem] font-semibold tracking-[0.14em] transition-colors ${
        language === value ? 'border-text text-text' : 'border-transparent text-muted hover:text-text'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div aria-label="Language" className="flex items-center gap-2">
      {languageButton('en', 'EN')}
      <span aria-hidden="true" className="text-[0.64rem] text-border">
        /
      </span>
      {languageButton('it', 'IT')}
    </div>
  )
}
