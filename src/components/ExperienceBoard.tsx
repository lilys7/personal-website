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
        '@container group relative mx-auto block aspect-[993/520] w-[90vw] max-w-5xl outline-none sm:aspect-[993/371] sm:w-[66vw]',
        className,
      )}
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

      <div className="absolute inset-[20%_8%_16%_8%] z-[1] flex min-h-0 flex-col items-center justify-center gap-0.5 overflow-hidden px-1 text-center sm:inset-[25%_13%_19%_13%] sm:gap-1 sm:px-2.5 md:gap-1.5">
        <p className="w-full max-w-full text-balance font-sans font-bold leading-[1.12] text-[clamp(0.62rem,5.2cqi,2.5rem)] text-[#f3ebe0]">
          {experience.company}
        </p>
        <p className="w-full max-w-full italic leading-snug text-[clamp(0.48rem,2.6cqi,1.5rem)] text-[#e8dccb]">
          {experience.role}
        </p>
        <p className="w-full max-w-full tracking-wide text-[clamp(0.42rem,2cqi,1.3rem)] text-[#d4c4ae]">
          {experience.period}
        </p>
      </div>
    </motion.a>
  )
}
