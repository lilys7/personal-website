import { useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { SITE } from '@/constants/site'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { Button } from '@/components/Button'
import { BrushBanner } from '@/components/BrushBanner'
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
      className="relative min-h-[100svh] overflow-visible px-6 pt-32 pb-16 md:flex md:min-h-dvh md:items-center md:px-10 md:pt-16 md:pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 h-[85svh] w-[min(100%,28rem)] overflow-hidden md:h-[85dvh] md:w-auto md:overflow-visible"
      >
        <InkPainting className="absolute bottom-0 right-0 h-full" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center overflow-visible text-center md:py-32">
        <div className="relative overflow-visible text-center">
          <BrushBanner className="pointer-events-none absolute top-[42%] left-1/2 z-0 h-[13.5rem] w-[min(148%,26rem)] -translate-x-1/2 -translate-y-1/2 sm:h-[15rem] sm:w-[min(132%,38rem)] md:h-[17rem] md:w-[48rem]" />
          <PaintedText
            text={SITE.name}
            endAt={0.85}
            className="relative z-10 block overflow-visible pt-[0.55em] font-display text-5xl leading-[1.65] font-normal tracking-tight text-ink sm:text-6xl md:pt-[0.22em] md:text-7xl md:leading-[1.45]"
          />

          <motion.p
            className="relative z-10 mt-8 max-w-md text-base leading-relaxed text-mute sm:text-lg max-md:[text-shadow:0_0_12px_#f4f0ea,0_1px_8px_#f4f0ea]"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {SITE.subtitle}
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.85,
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
