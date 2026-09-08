import { useId } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/utils/cn'

export type BrushStroke = {
  d: string
  width: number
  duration: number
  delay: number
}

export type BrushPaintingData = {
  width: number
  height: number
  strokes: BrushStroke[]
}

type BrushPaintingProps = {
  className?: string
  imageSrc: string
  data: BrushPaintingData
  /** play on mount, or when scrolled into view (once) */
  play?: 'immediate' | 'inView'
  title?: string
}

export function BrushPainting({
  className,
  imageSrc,
  data,
  play = 'immediate',
  title = 'Ink painting',
}: BrushPaintingProps) {
  const reduceMotion = useReducedMotion()
  const uid = useId()
  const maskId = `${uid}-brush-mask`
  const blurId = `${uid}-brush-blur`
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25, margin: '0px 0px -10% 0px' })
  const shouldPlay = reduceMotion || play === 'immediate' || inView

  const { width: VIEW_W, height: VIEW_H, strokes } = data

  if (reduceMotion) {
    return (
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className={cn(
          'block h-full w-auto max-w-none select-none object-contain',
          className,
        )}
        draggable={false}
      />
    )
  }

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={cn('block h-full w-auto max-w-none select-none overflow-visible', className)}
      role="img"
      aria-hidden="true"
    >
      <title>{title}</title>
      <defs>
        <filter id={blurId} x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" />
        </filter>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={VIEW_W}
          height={VIEW_H}
        >
          <rect width={VIEW_W} height={VIEW_H} fill="black" />
          <g filter={`url(#${blurId})`}>
            {strokes.map((stroke) => (
              <motion.path
                key={`${stroke.delay}-${stroke.d.slice(0, 24)}`}
                d={stroke.d}
                fill="none"
                stroke="white"
                strokeWidth={stroke.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={shouldPlay ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{
                  duration: stroke.duration,
                  delay: stroke.delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            ))}
          </g>
        </mask>
      </defs>

      <image
        href={imageSrc}
        width={VIEW_W}
        height={VIEW_H}
        preserveAspectRatio="xMidYMid meet"
        mask={`url(#${maskId})`}
      />
    </svg>
  )
}
