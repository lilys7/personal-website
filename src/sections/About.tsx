import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import aboutLilyStrokes from '@/assets/aboutLilyStrokes.json'
import portrait from '@/assets/portrait.jpg'
import { BrushPainting, type BrushPaintingData } from '@/components/BrushPainting'
import { sectionHeadingClass, sectionShellClass } from '@/components/Section'
import { cn } from '@/utils/cn'

const BIO = `Hi! My name is Lily Shen, and I'm a CS major + General Business minor at the University of Maryland, College Park. In school, I'm mainly involved in the Advanced Cybersecurity Experience for Students (ACES) Honors College, App Development Club, and Product Space. My past experiences include AI/ML model implementation, data science, and full-stack engineering. In particular, I have a strong interest in AI/ML and product management. Outside of school, I love to go to the gym, read, crochet, play the guitar, and get food with my friends.`

export function About() {
  const reduceMotion = useReducedMotion()
  const triggerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(triggerRef, {
    once: true,
    amount: 0.25,
    margin: '0px 0px -8% 0px',
  })

  const [lilySrc, setLilySrc] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    void import('@/assets/about-lily.png').then((mod) => {
      if (!cancelled) setLilySrc(mod.default)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const shouldPaint = Boolean(lilySrc) && (inView || Boolean(reduceMotion))

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn(sectionShellClass, 'min-h-[85vh]')}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-x-clip"
      >
        <div className="absolute bottom-0 left-0 h-[85dvh] opacity-75">
          {shouldPaint ? (
            <BrushPainting
              imageSrc={lilySrc!}
              data={aboutLilyStrokes as BrushPaintingData}
              play="immediate"
              title="Lily ink painting"
              className="absolute bottom-0 left-0 h-full object-left-bottom"
            />
          ) : null}
        </div>
      </div>

      <div ref={triggerRef} className="relative z-10 w-full">
        <h2 id="about-heading" className={sectionHeadingClass}>
          About
        </h2>

        <div className="relative mt-8 flex min-h-[75dvh] items-start gap-10 md:gap-16 lg:gap-20">
          <motion.img
            src={portrait}
            alt="Lily Shen"
            className="relative z-[1] ml-[min(8vw,4rem)] h-[60dvh] w-auto shrink-0 object-cover md:ml-[min(10vw,5.5rem)]"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={inView || reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="max-w-xl pt-2">
            <p className="text-base leading-relaxed text-mute sm:text-lg">
              {BIO}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
