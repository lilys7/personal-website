import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRichMotion } from '@/hooks/useRichMotion'
import { cn } from '@/utils/cn'

type PaintedTextProps = {
  text: string
  /** animation should finish at this time (seconds) */
  endAt: number
  className?: string
  as?: 'h1' | 'p' | 'span'
}

export function PaintedText({
  text,
  endAt,
  className,
  as: Tag = 'h1',
}: PaintedTextProps) {
  const reduceMotion = useReducedMotion()
  const richMotion = useRichMotion()
  const chars = useMemo(() => [...text], [text])

  const paintables = chars.filter((c) => c !== ' ').length
  const start = 0.06
  const letterDuration = Math.min(0.7, Math.max(0.35, endAt * 0.14))
  const stagger =
    paintables <= 1
      ? 0
      : Math.max(0.05, (endAt - start - letterDuration) / (paintables - 1))

  // webkit clips ink on transformed inline-blocks; phones skip per-letter motion
  if (reduceMotion || !richMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  let paintIndex = 0

  return (
    <Tag
      className={cn('overflow-visible whitespace-nowrap', className)}
      aria-label={text}
    >
      {chars.map((char, i) => {
        if (char === ' ') {
          return (
            <span
              key={`sp-${i}`}
              className="inline-block w-[0.28em]"
              aria-hidden="true"
            >
              {'\u00A0'}
            </span>
          )
        }

        const delay = start + paintIndex * stagger
        paintIndex += 1

        return (
          <motion.span
            key={`${char}-${i}`}
            aria-hidden="true"
            className="inline-block overflow-visible px-[0.02em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: letterDuration,
              delay,
              ease: [0.33, 0, 0.2, 1],
            }}
          >
            {char}
          </motion.span>
        )
      })}
    </Tag>
  )
}
