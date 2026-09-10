import type { MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import board from '@/assets/calligraphy-board.png'
import type { ExperienceItem } from '@/constants/experiences'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/utils/cn'

type ExperienceBoardProps = {
  experience: ExperienceItem
  className?: string
}

export function ExperienceBoard({ experience, className }: ExperienceBoardProps) {
  const scrollTo = useSmoothScroll()
  const reduceMotion = useReducedMotion()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollTo(`#experience-${experience.id}`)
  }

  return (
    <motion.a
      href={`#experience-${experience.id}`}
      onClick={handleClick}
      aria-label={`${experience.company}, ${experience.role}. View details.`}
      className={cn(
        '@container group relative mx-auto block w-[90vw] max-w-5xl outline-none sm:w-[66vw]',
        className,
      )}
      // shorter board: natural ~0.53 ratio × 0.7 height
      style={{ aspectRatio: '993 / 371' }}
      whileHover={reduceMotion ? undefined : { scale: 1.045, y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      <img
        src={board}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill drop-shadow-md transition-[filter] duration-300 group-hover:drop-shadow-xl group-focus-visible:drop-shadow-xl"
        draggable={false}
      />

      <div className="absolute inset-[24%_12%_18%_12%] z-[1] flex min-h-0 flex-col items-center justify-center gap-0.5 overflow-hidden px-1.5 text-center sm:inset-[25%_13%_19%_13%] sm:gap-1 sm:px-2.5 md:gap-1.5">
        <p className="w-full max-w-full text-balance font-sans font-bold leading-tight text-[clamp(2.5rem,4cqi,2.0rem)] text-[#f3ebe0]">
          {experience.company}
        </p>
        <p className="w-full max-w-full italic leading-snug text-[clamp(0.9rem,4cqi,1.5rem)] text-[#e8dccb]">
          {experience.role}
        </p>
        <p className="w-full max-w-full tracking-wide text-[clamp(0.5rem,2cqi,1.3rem)] text-[#d4c4ae]">
          {experience.period}
        </p>
      </div>
    </motion.a>
  )
}
