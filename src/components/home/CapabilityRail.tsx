interface CapabilityRailProps {
  items: string[]
}

export function CapabilityRail({ items }: CapabilityRailProps) {
  return (
    <ul
      aria-label="Working territory"
      className="flex flex-wrap gap-x-7 gap-y-3 border-t border-border/55 pt-5"
    >
      {items.map((item) => (
        <li key={item} className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">
          {item}
        </li>
      ))}
    </ul>
  )
}
