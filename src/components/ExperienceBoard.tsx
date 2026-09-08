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
        'group relative mx-auto block w-[66vw] max-w-5xl outline-none',
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

      <div className="absolute inset-[10%_7%_12%_7%] z-[1] flex flex-col items-center justify-center gap-2 px-2 text-center sm:inset-[11%_8%_13%_8%] sm:gap-3 sm:px-4 md:gap-3.5">
        <p
          className={cn(
            'font-display font-normal tracking-wide text-[#f3ebe0]',
            experience.company.length > 42
              ? 'text-lg leading-[1.9] sm:text-2xl md:text-3xl lg:text-[2.15rem]'
              : experience.company.length > 28
                ? 'text-xl leading-[1.9] sm:text-3xl md:text-4xl lg:text-[2.65rem]'
                : 'text-2xl leading-[1.45] sm:text-4xl md:text-5xl lg:text-[3.15rem]',
          )}
        >
          {experience.company}
        </p>
        <p className="text-sm italic leading-snug text-[#e8dccb] sm:text-base md:text-lg lg:text-xl">
          {experience.role}
        </p>
        <p className="text-xs tracking-wide text-[#d4c4ae] sm:text-sm md:text-base lg:text-lg">
          {experience.period}
        </p>
      </div>
    </motion.a>
  )
}
