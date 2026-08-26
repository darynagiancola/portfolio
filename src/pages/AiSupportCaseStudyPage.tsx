import finAiMessenger from '../assets/projects/ai-support/01-fin-ai-messenger.png'
import finKnowledgeAnswer from '../assets/projects/ai-support/02-fin-knowledge-answer.png'
import salesRoutingWorkflows from '../assets/projects/ai-support/03-intercom-sales-routing-workflows.png'
import makeAiCrmRouting from '../assets/projects/ai-support/04-make-ai-crm-routing.png'
import pipedriveContextInIntercom from '../assets/projects/ai-support/05-pipedrive-context-in-intercom.png'
import { Navigation } from '../components/layout/Navigation'
import { PortfolioFooter } from '../components/layout/PortfolioFooter'

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

export function AiSupportCaseStudyPage() {
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

          <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <p className="text-[0.74rem] font-semibold tracking-[0.15em] text-secondary uppercase">
                CASE STUDY · AI-ASSISTED CUSTOMER OPERATIONS
              </p>
              <h1 className="mt-4 font-sans text-[clamp(2.5rem,5.5vw,4.1rem)] font-semibold leading-[0.95] text-text">
                AI SUPPORT &amp;
                <br />
                WORKFLOW ROUTING
              </h1>
              <div className="mt-6 space-y-4">
                <p className="max-w-[56rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  A customer-support system designed around AI-assisted first-line resolution, structured knowledge and
                  automated routing.
                </p>
                <p className="max-w-[56rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  Fin handles incoming questions using the configured support knowledge base, while workflow rules
                  determine what should happen when a conversation requires human attention or belongs to a specific
                  business function.
                </p>
                <p className="max-w-[56rem] text-[1.08rem] leading-[1.58] text-[#4e5752]">
                  The system extends beyond answering questions. Sales-related requests can be identified, assigned to
                  the appropriate team and passed into the sales workflow, connecting customer support with the wider
                  operational process.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[18rem] sm:max-w-[21rem] md:ml-auto md:mr-0 md:max-w-[20rem] lg:max-w-[23rem]">
              <Screenshot
                src={finAiMessenger}
                alt="Intercom Fin website messenger showing a customer conversation and Powered by Fin footer."
                caption="01 · FIN AI WEBSITE MESSENGER"
                frameClassName="aspect-[820/1248]"
              />
            </div>
          </div>

          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">ROLE</dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                AI support architecture · Knowledge structure · Workflow automation
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">PROJECT TYPE</dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                AI customer support · Routing · Business automation
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">FOCUS</dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                AI-assisted resolution · Escalation · Cross-system handoff
              </dd>
            </div>
            <div className="border-t border-border/45 pt-3">
              <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">SYSTEM</dt>
              <dd className="mt-2 text-[0.95rem] leading-[1.5] text-text">
                Customer question → Fin → resolution or routing → team / sales workflow
              </dd>
            </div>
          </dl>
        </section>

        <section className="case-study-section-flow content-wrap pb-20">
          <article className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-10 lg:gap-14">
            <div>
              <p className="section-label">AI SUPPORT LAYER</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
                Answering routine questions before they become tickets
              </h2>
              <div className="mt-6 space-y-4">
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  The first layer of the system is Fin, embedded directly into the customer-facing website experience.
                </p>
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  Using the configured support knowledge, Fin can respond to common customer questions at the point of
                  contact.
                </p>
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  Routine questions can be resolved immediately, while conversations requiring judgement or
                  business-specific action remain available for human follow-up.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[22rem] sm:max-w-[25rem] md:justify-self-end">
              <Screenshot
                src={finKnowledgeAnswer}
                alt="Fin answer view showing a knowledge-grounded response to a customer product question."
                caption="02 · KNOWLEDGE-GROUNDED FIN RESPONSE"
                frameClassName="aspect-[802/850]"
              />
            </div>
          </article>

          <article>
            <p className="section-label">ROUTING LOGIC</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              Turning customer intent into the next action
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                Workflow rules provide the operational layer behind the AI interaction. When a request requires human
                involvement, the conversation can be routed according to its purpose rather than remaining in a generic
                support queue.
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                Sales enquiries are one example. A relevant request can be assigned to the Sales Team and then passed
                into Pipedrive, allowing the conversation to continue inside the appropriate business process.
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                This makes the support interface an entry point for multiple workflows rather than an isolated
                chatbot.
              </p>
            </div>

            <div className="mt-10">
              <Screenshot
                src={salesRoutingWorkflows}
                alt="Intercom workflow list showing New Sales Request assignment and Pass Sales Request to Pipedrive rules."
                caption="03 · SALES ROUTING WORKFLOWS"
                frameClassName="aspect-[1280/490]"
              />
            </div>
          </article>

          <article className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-10 lg:gap-14">
            <div className="w-full max-w-[44rem]">
              <Screenshot
                src={pipedriveContextInIntercom}
                alt="Intercom view showing linked Pipedrive context for a routed sales conversation."
                caption="05 · PIPEDRIVE CONTEXT IN SUPPORT"
                frameClassName="aspect-[725/610]"
              />
            </div>

            <div>
              <p className="section-label">HUMAN HANDOFF</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
                Keeping AI and human support in the same workflow
              </h2>
              <div className="mt-6 space-y-4">
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  Escalation remains within the same support workflow.
                </p>
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  When a conversation needs judgement, ambiguity resolution or business-specific action, it can be
                  handed to the appropriate teammate or team.
                </p>
                <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                  For routed sales conversations, connected Pipedrive context remains available to support human
                  follow-up.
                </p>
              </div>
            </div>
          </article>

          <article>
            <p className="section-label">CONNECTED OPERATIONS</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.02] text-[#1f2522]">
              Support as part of the wider business system
            </h2>
            <div className="mt-6 space-y-4">
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                The final layer is the connection between customer support and downstream operations.
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                A conversation can begin as a website question, be handled by Fin, and then move into a human or sales
                workflow when the customer&apos;s intent changes.
              </p>
              <p className="max-w-[58rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                For sales-related enquiries, routing connects the support interaction with Pipedrive so support, sales
                and operations remain connected stages of the same customer journey.
              </p>
            </div>

            <p className="mt-7 text-[0.86rem] font-semibold tracking-[0.11em] text-secondary uppercase">
              CUSTOMER QUESTION → FIN → RESOLUTION / ROUTING → HUMAN TEAM → BUSINESS WORKFLOW
            </p>

            <div className="mt-8">
              <Screenshot
                src={makeAiCrmRouting}
                alt="Cross-system workflow map connecting Intercom, routing logic, and CRM handoff automation."
                caption="04 · CROSS-SYSTEM ROUTING FLOW"
                frameClassName="aspect-[1865/377]"
              />
            </div>
          </article>

          <article className="border-t border-border/55 pt-12">
            <p className="section-label">SYSTEM OUTCOME</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.3vw,2.8rem)] leading-[1.05] text-[#1f2522]">
              A support workflow designed around resolution and escalation
            </h2>
            <div className="mt-5 space-y-4">
              <p className="max-w-[52rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                The project demonstrates how an AI support layer can sit inside a broader operational system rather than
                functioning as a standalone chatbot.
              </p>
              <p className="max-w-[52rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                Knowledge-based responses handle appropriate first-line questions, while routing rules manage intent and
                escalation when the request needs human or sales follow-up.
              </p>
              <p className="max-w-[52rem] text-[1.06rem] leading-[1.58] text-[#4e5752]">
                The emphasis is on designing clear transitions between those layers so automation supports service
                quality without disconnecting the journey from the teams and systems behind it.
              </p>
            </div>
            <p className="mt-8 border-t border-border/45 pt-4 text-[0.9rem] tracking-[0.06em] text-[#5d6660]">
              Intercom · Fin AI · Knowledge Base · Workflow Automation · Pipedrive · Make
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
