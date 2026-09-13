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
      viewBox={variant === 'subtitle' ? '0 0 1000 180' : '0 0 1000 200'}
      preserveAspectRatio={variant === 'subtitle' ? 'none' : 'xMidYMid meet'}
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
            d="M8 92c28-62 118-84 260-72 128 10 236 36 380 20 128-14 232-4 328 36 18 8 16 48-12 62-118 40-262 22-404 12-140-10-268 28-368-14-58-24-98-48-118-70-12-12-10-16-14-6z"
          />
          <path
            fill="#f3efe8"
            d="M28 108c36-40 148-52 286-20 122 28 228 10 338-22 78-22 176-8 254 28 16 8 10 36-14 44-108 32-248 18-386 28-132 10-252-16-356-34-44-8-76-20-94-32-14-8-8-16-12-8z"
          />
          <path
            fill="#ddd6cc"
            opacity="0.8"
            d="M40 48c56-28 176-32 304 6 114 32 214 8 318-20 86-22 186-8 260 26 16 8 10 30-16 40-102 32-238 16-372 26-126 10-242-14-336-28-40-6-68-16-84-26-12-6-6-14-10-8z"
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
