import { Section } from '@/components/Section'

type PlaceholderSectionProps = {
  id: string
  title: string
}

export function PlaceholderSection({ id, title }: PlaceholderSectionProps) {
  return (
    <Section id={id} title={title} spacious>
      <div className="h-32 max-w-xl border-t border-ink/10 pt-8">
        <p className="text-sm text-mute">Content coming soon.</p>
      </div>
    </Section>
  )
}
