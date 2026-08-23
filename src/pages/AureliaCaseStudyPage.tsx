import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { DeviceShowcase } from '../components/case-study/DeviceShowcase'
import { ImageShowcase } from '../components/case-study/ImageShowcase'
import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'
import { ProjectMetadata } from '../components/projects/ProjectMetadata'
import { FeatureCard } from '../components/ui/FeatureCard'
import {
  adminAssets,
  architectureTooling,
  aureliaHeroMetadata,
  customerJourneyAssets,
  kdsReliabilityAssets,
  moreThanOrderingAssets,
  roleCards,
  staffEntryAsset,
  waiterAsset,
} from '../content/projects'
import { contactContent } from '../content/site'

function ArchitectureDiagram() {
  return (
    <div className="rounded-card border border-border bg-bg p-5 sm:p-7">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1.2fr_auto_1.3fr] md:items-center">
        <div className="rounded-xl border border-border bg-surface p-4 text-center">
          <p className="text-sm text-muted">Customer App</p>
        </div>
        <span className="hidden text-center text-accent md:block" aria-hidden="true">
          →
        </span>
        <div className="rounded-xl border border-accent/50 bg-accent-soft/45 p-4 text-center">
          <p className="font-medium text-text">Supabase</p>
          <p className="text-sm text-muted">Database · Authentication · Realtime</p>
        </div>
        <span className="hidden text-center text-accent md:block" aria-hidden="true">
          →
        </span>
        <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
          {['Admin', 'Waiter', 'Kitchen'].map((role) => (
            <div
              key={role}
              className="rounded-xl border border-border bg-surface p-3 text-center text-sm text-text"
            >
              {role}
            </div>
          ))}
        </div>
      </div>

      <svg
        viewBox="0 0 1000 120"
        className="mt-6 hidden w-full md:block"
        role="img"
        aria-label="Realtime events synchronize order and status changes across interfaces"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#74826d" />
          </marker>
        </defs>
        <line
          x1="360"
          y1="32"
          x2="930"
          y2="32"
          stroke="#74826d"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="930"
          y1="88"
          x2="360"
          y2="88"
          stroke="#74826d"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <text x="640" y="22" textAnchor="middle" fill="#5f685f" fontSize="16">
          order and status updates
        </text>
        <text x="640" y="110" textAnchor="middle" fill="#5f685f" fontSize="16">
          synchronized operational state
        </text>
      </svg>
    </div>
  )
}

export function AureliaCaseStudyPage() {
  return (
    <div className="site-canvas min-h-screen">
      <Navigation />
      <main>
        <section className="content-wrap py-14 sm:py-20">
          <p className="eyebrow">Case study</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.6rem]">AURELIA</h1>
              <p className="text-xl text-text sm:text-2xl">Hospitality OS for modern cafés</p>
              <p className="max-w-xl text-base sm:text-lg">
                A connected hospitality platform that brings table-side ordering,
                reservations, payments and real-time restaurant operations into one
                system.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-panel border border-[#6d5045]/35 bg-[#f6efe8] p-4 shadow-card sm:p-6">
                <ImageShowcase image={adminAssets[0]} />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-card border border-[#6d5045]/35 bg-surface p-3 shadow-soft">
                  <ImageShowcase image={customerJourneyAssets[0]} framed={false} />
                </div>
                <div className="rounded-card border border-[#6d5045]/35 bg-surface p-3 shadow-soft">
                  <ImageShowcase image={kdsReliabilityAssets[0]} framed={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ProjectMetadata items={aureliaHeroMetadata} />
          </div>
        </section>

        <CaseStudySection
          id="overview"
          index="01 — Overview / Problem"
          title="Fragmented restaurant workflows create operational friction."
          description="Restaurant teams often manage customer ordering, reservations, payments, and staff operations in disconnected systems. AURELIA explores what happens when those workflows are designed as one connected hospitality operating system."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Connected hospitality logic"
              description="The product is framed as one workflow spanning guest intent through service delivery, not isolated UI features."
            />
            <FeatureCard
              title="Concept + implementation"
              description="This case study reflects product thinking, interface design, and AI-assisted implementation in a unified process."
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="customer-experience"
          index="02 — Customer Experience"
          title="The café starts at the table."
          description="The customer journey is mobile-first, minimizing friction between discovering an item and sending an order to the restaurant."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {customerJourneyAssets.map((image) => (
              <DeviceShowcase key={image.label} image={image} />
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="more-than-ordering"
          index="03 — More Than Ordering"
          title="Ordering was designed as part of a broader service flow."
          description="Reservations, cart management, payment flexibility, and confirmation are integrated so guest flow remains coherent across touchpoints."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {moreThanOrderingAssets.map((image) => (
              <ImageShowcase key={image.label} image={image} />
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
            <li>• table reservations with guest count and date/time selection</li>
            <li>• cart management linked to service context</li>
            <li>• multiple payment methods</li>
            <li>• order confirmation and flow continuity</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="role-based-system"
          index="04 — Role-Based System"
          title="One entry point. Different workspaces."
          description="Staff authenticate through email/password or PIN, then move into role-specific interfaces aligned to operational responsibility."
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
            <ImageShowcase image={staffEntryAsset} />
            <div className="grid gap-4 sm:grid-cols-2">
              {roleCards.map((role) => (
                <FeatureCard
                  key={role.role}
                  title={role.role}
                  description={role.description}
                />
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="management-command-center"
          index="05 — Management Command Center"
          title="Operational visibility in one command center."
          description="Management interfaces include Dashboard, Floor Plan, Menu Builder, Staff, Locations, and Settings. Dashboard panels may include orders, revenue, guests, average service time, weekly revenue, orders by hour, category mix, and recent orders."
        >
          <div className="space-y-5">
            <ImageShowcase image={adminAssets[0]} />
            <p className="rounded-card border border-border/80 bg-bg px-4 py-3 text-sm text-muted">
              Data shown in this case study represents demo/product data and interface simulation,
              not claimed business performance.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {adminAssets.slice(1).map((image) => (
                <ImageShowcase key={image.label} image={image} />
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="front-of-house"
          index="06 — Front of House / Waiter Station"
          title="Service-floor awareness with immediate operational context."
          description="The waiter workspace surfaces table status, active orders, reservations, payment states, and floor-area context in one view."
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <ImageShowcase image={waiterAsset} />
            <div className="space-y-4 rounded-card border border-border bg-bg p-5">
              <h3 className="text-xl">Interface priorities</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• table state clarity: free / occupied / reserved / payment</li>
                <li>• active order tracking by floor area</li>
                <li>• operational overview for live service shifts</li>
                <li>• support for light/dark display behavior where applicable</li>
              </ul>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="kitchen-operations"
          index="07 — Kitchen Operations"
          title="Kitchen workflows organized for action, timing, and handoff."
          description="The kitchen experience follows a clear state model: New Orders → In Progress → Ready to Serve → Completed."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
            <ImageShowcase image={kdsReliabilityAssets[0]} />
            <div className="space-y-4">
              <div className="rounded-card border border-border bg-bg p-5">
                <h3 className="text-xl">Workflow highlights</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• order timers and priority/rush indicators</li>
                  <li>• modifiers and item-level preparation details</li>
                  <li>• realtime status updates across workspaces</li>
                  <li>• operational clarity from queue to completion</li>
                </ul>
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="realtime-reliability"
          index="08 — Realtime System / Reliability"
          title="Beyond static UI: simulated failure and recovery scenarios."
          description="The kitchen display system was explored beyond static layouts with live/demo states, realtime connection indicators, filtering, timers, and simulated resilience tests."
          tone="dark"
        >
          <div className="space-y-6">
            <div className="grid gap-5 lg:grid-cols-2">
              {kdsReliabilityAssets.map((image) => (
                <ImageShowcase key={image.label} image={image} tone="dark" />
              ))}
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-card border border-dark-border/80 bg-slate-900/40 p-5">
                <h3 className="mb-3 text-2xl text-slate-100">Simulated failure tests</h3>
                <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  <li>• disappearing order</li>
                  <li>• skipped status transition</li>
                  <li>• wrong-column state</li>
                  <li>• duplicate status change</li>
                  <li>• delayed realtime event</li>
                  <li>• stale state</li>
                  <li>• inconsistent screens</li>
                </ul>
              </div>
              <FeatureCard
                title="Recovery-path concept"
                description="Failure scenarios were paired with recovery behaviors to evaluate operational continuity under imperfect realtime conditions."
                tone="dark"
              />
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="system-architecture"
          index="09 — System Architecture"
          title="A non-engineer-friendly view of the connected stack."
          description="Customer orders flow into Supabase-backed services, then synchronize operational interfaces for Admin, Waiter, and Kitchen through realtime updates."
        >
          <ArchitectureDiagram />
        </CaseStudySection>

        <CaseStudySection
          id="ai-native-workflow"
          index="10 — Built With AI-Native Tools"
          title="AI-assisted development used as methodology, not gimmick."
          description="The project combined design iteration and implementation to move quickly while preserving system structure and operational coherence."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {architectureTooling.map((tool) => (
              <FeatureCard
                key={tool.tool}
                title={tool.tool}
                description={tool.description}
              />
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="outcome"
          index="11 — Outcome"
          title="What AURELIA demonstrates"
          description="This case study demonstrates connected customer and restaurant workflows, role-based experiences, realtime kitchen operations, and end-to-end product thinking from UX through implementation."
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'connected customer and restaurant workflows',
              'role-based staff experiences',
              'realtime kitchen operations',
              'multi-location-ready product thinking',
              'operational analytics structure',
              'resilience and failure simulation',
              'end-to-end product execution from UX to implementation',
            ].map((item) => (
              <li
                key={item}
                className="rounded-card border border-border bg-bg px-4 py-3 text-sm text-text sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>
      </main>

      <Footer
        title={contactContent.title}
        description={contactContent.description}
        email={contactContent.email}
      />
    </div>
  )
}
