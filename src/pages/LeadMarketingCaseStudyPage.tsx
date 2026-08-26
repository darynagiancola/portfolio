import funnelArchitecture from '../assets/projects/lead-marketing/01-funnel-architecture.png'
import leadMagnetLandingPage from '../assets/projects/lead-marketing/02-lead-magnet-landing-page.png'
import webinarQualificationForm from '../assets/projects/lead-marketing/03-webinar-qualification-form.png'
import automationPdfDelivery from '../assets/projects/lead-marketing/04-activecampaign-pdf-delivery.png'
import automationNurtureLogic from '../assets/projects/lead-marketing/05-activecampaign-nurture-logic.png'
import automationWebinarReminders from '../assets/projects/lead-marketing/06-activecampaign-webinar-reminders.png'
import makeLeadRoutingArchitecture from '../assets/projects/lead-marketing/07-make-lead-routing-architecture-cropped.png'
import makeCallBookingWorkflow from '../assets/projects/lead-marketing/08-make-call-booking-workflow-cropped.png'
import pipedriveSalesPipeline from '../assets/projects/lead-marketing/09-pipedrive-sales-pipeline-cropped.png'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'
import { italianLeadMarketing } from '../i18n/italian'
import { useLanguage } from '../i18n/language'

interface ScreenshotProps {
  src: string
  alt: string
  caption: string
  frameClassName?: string
  fit?: 'contain' | 'cover'
  objectPosition?: string
}

function Screenshot({
  src,
  alt,
  caption,
  frameClassName = '',
  fit = 'contain',
  objectPosition = 'object-top',
}: ScreenshotProps) {
  return (
    <figure className="flex h-full flex-col gap-2.5">
      <div className={`overflow-hidden border border-border/55 bg-surface/20 ${frameClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`block h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${objectPosition}`}
          loading="lazy"
        />
      </div>
      <figcaption className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">{caption}</figcaption>
    </figure>
  )
}

export function LeadMarketingCaseStudyPage() {
  const { language } = useLanguage()
  const it = language === 'it' ? italianLeadMarketing : null

  return (
    <div className="site-canvas min-h-screen">
      <Navigation />

      <main id="main-content">
        <section className="content-wrap pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <a
            href={`${import.meta.env.BASE_URL}#selected-work`}
            className="inline-flex text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase hover:text-text"
          >
            ← BACK TO WORK
          </a>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="text-[0.74rem] font-semibold tracking-[0.15em] text-secondary uppercase">
                CASE STUDY · LEAD GENERATION &amp; MARKETING AUTOMATION
              </p>
              <h1 className="mt-4 font-sans text-[clamp(2.5rem,5.4vw,4.1rem)] font-semibold leading-[0.95] text-text">
                LEAD &amp; MARKETING
                <br />
                AUTOMATION SYSTEM
              </h1>
              <div className="mt-6 space-y-4">
                <p className="max-w-[54rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  {it?.intro[0] ??
                    'A multi-step lead generation and nurturing system designed to move prospective international property buyers from initial interest to a qualified strategy call.'}
                </p>
                <p className="max-w-[54rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  {it?.intro[1] ??
                    'The workflow connects a downloadable investment guide, email nurture, webinar registration, qualification, CRM pipeline management and booking automation into one coordinated journey.'}
                </p>
                <p className="max-w-[54rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  {it?.intro[2] ??
                    'Rather than treating each touchpoint as a separate marketing activity, I designed the system around lead progression: capturing intent, responding to behaviour and moving contacts through the appropriate next step.'}
                </p>
              </div>
            </div>

            <Screenshot
              src={funnelArchitecture}
              alt="Funnel architecture diagram showing lead magnet to nurture, webinar, and broker call flow."
              caption="01 · FUNNEL ARCHITECTURE"
              frameClassName="h-[10.5rem] sm:h-[12.5rem] lg:h-auto lg:aspect-[1874/552]"
            />
          </div>

          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                {it?.metadata.role ?? 'ROLE'}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                Automation strategy · Funnel architecture · Implementation
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                {it?.metadata.projectType ?? 'PROJECT TYPE'}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                Lead generation · Marketing automation · CRM workflow
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                {it?.metadata.focus ?? 'FOCUS'}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                Lead nurturing · Qualification · CRM progression · Cross-platform automation
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                {it?.metadata.system ?? 'SYSTEM'}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                Lead magnet → nurture → webinar → qualification → strategy call
              </dd>
            </div>
          </dl>
        </section>

        <section className="case-study-section-flow content-wrap pb-20">
          <article>
            <p className="section-label">{it?.system.label ?? 'THE SYSTEM'}</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              {it?.system.title ?? 'Designing the journey before the automations'}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.system.paragraphs[0] ??
                  'The workflow begins with a property investment guide designed to capture early-stage interest from prospective buyers considering Puglia.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.system.paragraphs[1] ??
                  'From there, contacts enter an automated journey that progressively introduces higher-intent actions: email nurture, webinar registration, qualification and finally a strategy call.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.system.paragraphs[2] ??
                  'Registration, attendance and call booking are captured as signals that update the contact journey and CRM status.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
              <Screenshot
                src={leadMagnetLandingPage}
                alt="Lead magnet landing page promoting a free guide and capturing name, phone number, and email."
                caption="02 · LEAD MAGNET LANDING PAGE"
                frameClassName="aspect-[2048/1134]"
              />
              <Screenshot
                src={webinarQualificationForm}
                alt="Webinar qualification form asking first name, last name, phone number, and email."
                caption="03 · WEBINAR QUALIFICATION"
                frameClassName="aspect-[2048/1142]"
              />
            </div>
          </article>

          <article>
            <p className="section-label">AUTOMATION LOGIC</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              {it?.automation.title ?? 'Turning engagement into workflow decisions'}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.automation.paragraphs[0] ?? 'ActiveCampaign acts as the central automation and CRM layer.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.automation.paragraphs[1] ??
                  'Contacts are organized through dedicated lists, behavioural tags and pipeline stages. Automations respond to actions such as requesting the guide, registering for the webinar or attending it, rather than sending the same sequence to every lead.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.automation.paragraphs[2] ??
                  'For example, the nurture sequence checks whether a contact has already registered for the webinar. Once that higher-intent action occurs, the contact can leave the generic nurture path instead of receiving irrelevant messages.'}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="border-t border-border/45 pt-3">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-secondary uppercase">LEAD MAGNET DELIVERY</p>
                <ul className="mt-3 space-y-1.5 text-[0.94rem] leading-[1.45] text-[#4f5852]">
                  {(it?.automation.groups[0] ?? [
                    'Create the lead/deal',
                    'Deliver the investment guide',
                    'Track interaction with the guide',
                    'Apply behavioural tags',
                  ]).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/45 pt-3">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-secondary uppercase">NURTURE</p>
                <ul className="mt-3 space-y-1.5 text-[0.94rem] leading-[1.45] text-[#4f5852]">
                  {(it?.automation.groups[1] ?? [
                    'Trigger after guide delivery',
                    'Sequence follow-up emails',
                    'Check webinar registration status',
                    'Stop generic nurture once the lead progresses',
                  ]).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border/45 pt-3">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-secondary uppercase">WEBINAR</p>
                <ul className="mt-3 space-y-1.5 text-[0.94rem] leading-[1.45] text-[#4f5852]">
                  {(it?.automation.groups[2] ?? [
                    'Move registered contacts into the corresponding CRM stage',
                    'Send confirmation and reminders',
                    'Move attendees to Watched Webinar',
                    'Continue toward call booking',
                  ]).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <Screenshot
                src={automationPdfDelivery}
                alt="ActiveCampaign automation flow for PDF delivery including guide email and tag updates."
                caption="04 · PDF DELIVERY AUTOMATION"
                frameClassName="h-[23rem] sm:h-[31rem] lg:h-[40rem]"
              />
              <div className="grid grid-cols-1 gap-6">
                <Screenshot
                  src={automationNurtureLogic}
                  alt="ActiveCampaign nurture logic with condition check for webinar registration and branch decisions."
                  caption="05 · NURTURE LOGIC"
                  frameClassName="h-[21rem] sm:h-[25rem] lg:h-[23rem]"
                />
                <Screenshot
                  src={automationWebinarReminders}
                  alt="ActiveCampaign webinar reminder automation sequence with stage update and timed reminder emails."
                  caption="06 · WEBINAR REMINDERS"
                  frameClassName="h-[21rem] sm:h-[25rem] lg:h-[23rem]"
                />
              </div>
            </div>
          </article>

          <article>
            <p className="section-label">SYSTEM INTEGRATION</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              {it?.integration.title ?? 'Connecting actions across platforms'}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.integration.paragraphs[0] ??
                  'Some important events happen outside ActiveCampaign, so Make connects those actions back into the marketing system.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.integration.paragraphs[1] ??
                  'Webinar registration is synchronized with the calendar and ActiveCampaign, while strategy-call bookings update the contact and apply the appropriate CRM signal.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.integration.paragraphs[2] ??
                  'This keeps booking and registration data connected to the contact record used by the rest of the automation.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Screenshot
                src={makeLeadRoutingArchitecture}
                alt="Make scenario routing lead actions into CRM and automation updates."
                caption="07 · LEAD ROUTING & CRM AUTOMATION"
                frameClassName="aspect-[1180/630]"
              />
              <Screenshot
                src={makeCallBookingWorkflow}
                alt="Make workflow syncing call booking events to contact updates and CRM signals."
                caption="08 · CALL BOOKING WORKFLOW"
                frameClassName="aspect-[1200/315]"
              />
            </div>
          </article>

          <article>
            <p className="section-label">CRM PROGRESSION</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              {it?.crm.title ?? 'A pipeline based on buyer intent'}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.crm.paragraphs[0] ??
                  'The CRM pipeline mirrors meaningful changes in buyer intent rather than simply storing contacts.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.crm.paragraphs[1] ??
                  'Automation moves the lead from initial acquisition through webinar engagement and ultimately to a booked strategy call. At the final stage, the workflow can notify the broker, confirm the appointment and create an internal follow-up task.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.crm.paragraphs[2] ??
                  'The result is a system where marketing activity and sales follow-up share the same lifecycle instead of operating as separate processes.'}
              </p>
            </div>

            <p className="mt-7 text-[0.86rem] font-semibold tracking-[0.11em] text-secondary uppercase">
              LEAD CAPTURE → QUALIFICATION → CALL SCHEDULED → SALES FOLLOW-UP → OPPORTUNITY PROGRESSION
            </p>

            <div className="mt-8">
              <Screenshot
                src={pipedriveSalesPipeline}
                alt="Sales pipeline board showing lead progression from new lead to booked call stages."
                caption="09 · SALES PIPELINE"
                frameClassName="h-[13rem] sm:h-[16rem] lg:h-[20rem]"
              />
            </div>
          </article>

          <article className="border-t border-border/55 pt-12">
            <p className="section-label">{it?.approach.label ?? 'THE APPROACH'}</p>
            <p className="mt-6 max-w-[44rem] font-serif text-[clamp(1.56rem,2.8vw,2.3rem)] leading-[1.08] text-[#1f2522]">
              {it?.approach.statement ??
                'The automation was designed around changes in intent, not around individual tools.'}
            </p>
            <div className="mt-5 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.approach.paragraphs[0] ??
                  'A downloaded guide, webinar registration, webinar attendance and booked call each represent a different level of engagement.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.approach.paragraphs[1] ??
                  'I structured the workflow so those signals affect what the lead receives next, where the opportunity sits in the pipeline and when a human should become involved.'}
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                {it?.approach.paragraphs[2] ??
                  'The project therefore focused less on automating isolated tasks and more on coordinating marketing, CRM and sales follow-up as one process.'}
              </p>
            </div>
            <p className="mt-8 border-t border-border/45 pt-4 text-[0.9rem] tracking-[0.06em] text-[#5d6660]">
              ActiveCampaign · Make · Typeform · Cal.com · Google Calendar · CRM · Webhooks
            </p>
          </article>

          <div className="border-t border-border/50 pt-8">
            <a
              href={`${import.meta.env.BASE_URL}#selected-work`}
              className="inline-flex text-[0.78rem] font-semibold tracking-[0.14em] text-secondary uppercase hover:text-text"
            >
              BACK TO SELECTED WORK →
            </a>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  )
}
