import { informationBand } from '../../content/site'

export function InformationBand() {
  return (
    <section
      aria-label="Profile summary"
      className="relative z-30 w-full border-b border-border/55 bg-surface-alt"
    >
      <div className="content-wrap py-6 sm:py-7 md:grid md:grid-cols-3 md:py-8 lg:py-9">
        {informationBand.map((item, index) => (
          <div
            key={item.label}
            className={
              index === 0
                ? 'md:pr-7'
                : 'border-t border-border/55 pt-4 mt-4 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-7'
            }
          >
            <p className="meta-label">{item.label}</p>
            <p className="mt-2 text-[0.98rem] leading-snug text-text sm:text-[1.02rem]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
