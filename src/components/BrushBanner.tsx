import { motion, useReducedMotion } from 'framer-motion'
import { useRichMotion } from '@/hooks/useRichMotion'

type BrushBannerProps = {
  className?: string
  variant?: 'name' | 'subtitle'
}

export function BrushBanner({ className, variant = 'name' }: BrushBannerProps) {
  const reduceMotion = useReducedMotion()
  const richMotion = useRichMotion()
  const animateWipe = !reduceMotion && richMotion

  return (
    <motion.svg
      viewBox={variant === 'subtitle' ? '0 0 1000 160' : '0 0 1000 200'}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={className}
      initial={animateWipe ? { clipPath: 'inset(0 100% 0 0)' } : false}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {variant === 'subtitle' ? (
        <>
          <path
            fill="#e8e2d8"
            d="M20 86c32-48 122-72 250-62 112 8 200 32 328 18 114-12 204-4 288 28 24 10 12 40-20 50-108 34-236 18-364 10-126-8-242 24-332-12-52-20-88-40-106-58-12-10-10-14-12-6z"
          />
          <path
            fill="#f3efe8"
            d="M48 102c38-30 138-40 258-14 108 22 196 8 286-18 68-18 156-8 222 22 18 10 8 28-16 36-96 28-216 16-336 24-114 8-218-14-308-28-38-6-66-16-80-24-12-6-6-12-10-6z"
          />
          <path
            fill="#ddd6cc"
            opacity="0.8"
            d="M72 58c50-22 156-26 268 2 100 24 184 6 272-16 74-18 160-8 224 20 18 8 8 24-16 32-90 26-206 14-320 22-108 8-208-12-290-24-34-6-58-12-72-20-10-4-4-10-8-6z"
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </motion.svg>
  )
}
