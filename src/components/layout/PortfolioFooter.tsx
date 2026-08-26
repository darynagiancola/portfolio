import { italianHome } from '../../i18n/italian'
import { useLanguage } from '../../i18n/language'

export function PortfolioFooter() {
  const { language, cvHref } = useLanguage()
  const isItalian = language === 'it'
  const contactEmail = 'daryna.giancola@gmail.com'
  const linkedinUrl = 'https://www.linkedin.com/in/daryna-giancola/'
  const githubUrl = 'https://github.com/darynagiancola'
  const websiteUrl = 'https://www.darynagiancola.com'

  return (
    <footer id="contact" className="mt-4 border-t border-border/60 bg-secondary-soft/55 py-20">
      <div className="content-wrap">
        <h2 className="contact-cta-headline max-w-[44rem] font-serif text-[#1f2522]">
          {isItalian ? italianHome.contact.title : 'Have a business problem that might need a better system?'}
        </h2>
        <p className="mt-5 max-w-[38rem] text-[1.08rem] leading-[1.55] text-[#4f5852]">
          {isItalian
            ? italianHome.contact.body
            : "I'm interested in roles and projects involving AI implementation, automation, digital products and business systems, especially where understanding the business is as important as building the solution."}
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-8 inline-flex bg-[#d7cde4] px-6 py-2.5 text-[0.78rem] font-semibold tracking-[0.14em] text-[#3e4348] uppercase"
        >
          {isItalian ? italianHome.contact.cta : "LET'S CONNECT →"}
        </a>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border/45 pt-8 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-[1.02rem] font-semibold tracking-[0.03em] text-[#1d211e]">DARYNA GIANCOLA</p>
            <p className="mt-2 flex items-center gap-1.5 text-[0.95rem] text-[#5c6560]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-3.5 w-3.5 shrink-0"
              >
                <path
                  d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9.5" r="2.15" />
              </svg>
              {isItalian ? italianHome.contact.location : 'Brescia, Italy'}
            </p>
          </div>

          <div className="space-y-2">
            <a href={`mailto:${contactEmail}`} className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]">
              {contactEmail}
            </a>
            <a href={websiteUrl} target="_blank" rel="noreferrer" className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]">
              www.darynagiancola.com
            </a>
          </div>

          <div className="space-y-2">
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]">
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="block text-[0.98rem] text-[#4f5852] hover:text-[#2c312d]">
              GitHub
            </a>
          </div>

          <div>
            <a href={cvHref} target="_blank" rel="noreferrer" className="text-[0.78rem] font-semibold tracking-[0.13em] text-secondary uppercase">
              {isItalian ? italianHome.contact.cv : 'VIEW CV →'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
