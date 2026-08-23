interface FooterProps {
  title: string
  description: string
  email: string
}

export function Footer({ title, description, email }: FooterProps) {
  return (
    <footer
      id="contact"
      className="border-t border-border/70 bg-surface/65 py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="content-wrap grid gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-end">
        <div className="space-y-4">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base sm:text-lg">{description}</p>
        </div>

        <div className="space-y-2 sm:text-right">
          <a
            href={`mailto:${email}`}
            className="inline-block text-lg text-accent underline-offset-4 hover:underline"
          >
            {email}
          </a>
          <p className="text-sm text-muted">Available for selected collaborations.</p>
        </div>
      </div>
    </footer>
  )
}
