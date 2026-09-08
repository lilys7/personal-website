import type { ReactNode } from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'md' | 'sm'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
} & Omit<HTMLMotionProps<'button'>, 'children'>

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-paper hover:bg-ink/90 focus-visible:ring-ink/30',
  ghost:
    'bg-transparent text-ink hover:bg-mist/60 focus-visible:ring-ink/20',
  outline:
    'border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-mist/40 focus-visible:ring-ink/20',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-6 text-sm tracking-wide',
  sm: 'h-9 px-4 text-xs tracking-wide',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.button
      type={type}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
