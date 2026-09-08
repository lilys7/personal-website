import { useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { SITE } from '@/constants/site'
import { PAINT_END_S } from '@/constants/paint'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { Button } from '@/components/Button'
import { InkPainting } from '@/components/InkPainting'
import { PaintedText } from '@/components/PaintedText'

export function Hero() {
  const scrollTo = useSmoothScroll()
  const reduceMotion = useReducedMotion()

  const explore = useCallback(() => {
    scrollTo('#about')
  }, [scrollTo])

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-dvh items-center overflow-x-hidden px-6 pt-16 md:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[85dvh] opacity-75"
      >
        <InkPainting className="absolute bottom-0 right-0 h-full" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center py-24 text-center md:py-32">
        <PaintedText
          text={SITE.name}
          endAt={PAINT_END_S}
          className="font-display text-5xl leading-[1.25] font-normal tracking-tight text-ink sm:text-6xl md:text-7xl md:leading-[1.2]"
        />

        <motion.p
          className="mt-8 max-w-md text-base leading-relaxed text-mute sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: reduceMotion ? 0 : PAINT_END_S * 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {SITE.subtitle}
        </motion.p>

        <motion.div
          className="mt-12"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : PAINT_END_S,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Button
            variant="ghost"
            onClick={explore}
            aria-label="Explore the rest of the site"
            className="text-mute hover:bg-transparent hover:text-ink"
          >
            Explore
            <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
