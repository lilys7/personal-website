import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export const sectionHeadingClass =
  'font-display text-5xl font-normal leading-[1.25] tracking-tight text-ink sm:text-6xl md:text-7xl md:leading-[1.2]'

type SectionProps = {
  id: string
  title?: string
  children?: ReactNode
  className?: string
  /** extra vertical room for placeholders */
  spacious?: boolean
}

export function Section({
  id,
  title,
  children,
  className,
  spacious = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn(
        'relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32',
        spacious && 'min-h-[50vh]',
        className,
      )}
    >
      {title ? (
        <h2
          id={`${id}-heading`}
          className={cn(sectionHeadingClass, 'mb-12 md:mb-16')}
        >
          {title}
        </h2>
      ) : null}
      <div className="w-full">{children}</div>
    </section>
  )
}
