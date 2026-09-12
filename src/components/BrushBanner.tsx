import { motion, useReducedMotion } from 'framer-motion'

type BrushBannerProps = {
  className?: string
}

export function BrushBanner({ className }: BrushBannerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.svg
      viewBox="0 0 1000 360"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={className}
      initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <filter id="brush-grain" x="-6%" y="-22%" width="112%" height="144%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016 0.06"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="11"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#brush-grain)">
        <path
          fill="#e8e2d8"
          d="M28 108c32-42 112-68 220-62 92 6 168 32 286 24 128-8 206-40 304-18 62 14 98 42 126 68-26 30-86 52-180 58-124 8-224-12-346-4-102 6-198 32-278 8-66-20-104-48-118-74z"
        />
        <path
          fill="#f3efe8"
          d="M54 124c36-34 126-52 240-40 108 12 186 34 298 14 104-18 186-6 258 22 20 8 6 30-22 38-98 30-220 16-342 10-118-6-226 18-308-8-46-14-78-28-92-40-8-8-6-12-8-6z"
        />
        <path
          fill="#d9d1c6"
          opacity="0.75"
          d="M64 88c52-22 154-28 264-6 100 18 178 2 268-18 76-18 162-10 224 16 18 8 10 22-14 28-90 24-208 14-322 22-108 8-210-12-292-24-34-6-58-12-72-18-8-4-4-8-8-6z"
        />
        <path
          fill="#e6e0d6"
          d="M90 248c42-28 148-40 268-18 102 18 188 8 282-14 62-14 138-8 196 14 16 6 8 20-14 26-88 22-198 12-310 20-104 8-202-10-282-20-32-4-56-10-70-16-8-4-4-8-8-6z"
        />
        <path
          fill="#f0ebe4"
          d="M118 268c48-18 156-20 262 2 94 20 176 8 250-12 48-12 112-8 164 8 12 4 6 16-12 20-82 16-178 8-276 14-92 6-176-8-246-16-26-4-48-8-58-12-8-4-2-8-10-6z"
        />
      </g>
    </motion.svg>
  )
}
