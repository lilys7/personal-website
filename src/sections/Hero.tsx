import { motion, useReducedMotion } from 'framer-motion'
import { SITE } from '@/constants/site'
import { BrushBanner } from '@/components/BrushBanner'
import { InkPainting } from '@/components/InkPainting'
import { PaintedText } from '@/components/PaintedText'

export function Hero() {
  const reduceMotion = useReducedMotion()

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
          <div className="relative">
            <BrushBanner className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[7.5rem] w-[min(148%,24rem)] -translate-x-1/2 -translate-y-[48%] sm:h-[9rem] sm:w-[min(132%,36rem)] md:h-40 md:w-[46rem]" />
            <PaintedText
              text={SITE.name}
              endAt={0.85}
              className="relative z-10 block overflow-visible pt-[0.55em] font-display text-5xl leading-[1.65] font-normal tracking-tight text-ink sm:text-6xl md:pt-[0.22em] md:text-7xl md:leading-[1.45]"
            />
          </div>

          <div className="relative mx-auto mt-11 w-fit max-w-[min(100%,28rem)] px-6 py-5 sm:px-8 sm:py-7">
            <BrushBanner
              variant="subtitle"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />
            <motion.p
              className="relative z-10 text-base leading-relaxed text-pretty text-mute sm:text-lg"
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
        </div>
      </div>
    </section>
  )
}
