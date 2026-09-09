import { useCallback, useEffect, useId, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE, type NavLink } from '@/constants/site'
import { useScrolled } from '@/hooks/useScrolled'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/utils/cn'
import { Button } from '@/components/Button'

function NavAnchor({
  link,
  onNavigate,
  className,
}: {
  link: NavLink
  onNavigate: (href: string) => void
  className?: string
}) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onNavigate(link.href)
    },
    [link.href, onNavigate],
  )

  return (
    <a href={link.href} onClick={handleClick} className={className}>
      {link.label}
    </a>
  )
}

export function Navbar() {
  const scrolled = useScrolled(16)
  const scrollTo = useSmoothScroll()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])

  const handleNav = useCallback(
    (href: string) => {
      scrollTo(href)
      close()
    },
    [scrollTo, close],
  )

  const handleBrandClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      handleNav('#top')
    },
    [handleNav],
  )

  const toggleMenu = useCallback(() => {
    setOpen((v) => !v)
  }, [])

  const downloadResume = useCallback(() => {
    const link = document.createElement('a')
    link.href = SITE.resumePath
    link.download = 'Lily_Shen_Resume.pdf'
    link.rel = 'noopener'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
        scrolled
          ? 'bg-paper/95 shadow-[0_1px_0_rgb(18_19_15_/0.06)]'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-[4.5rem] md:px-10"
      >
        <a
          href="#top"
          onClick={handleBrandClick}
          className="font-display text-base font-normal tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavAnchor
                link={link}
                onNavigate={handleNav}
                className="text-sm text-mute transition-colors hover:text-ink"
              />
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="sm" variant="outline" onClick={downloadResume}>
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-mist/60 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {open ? (
            <X size={20} strokeWidth={1.75} />
          ) : (
            <Menu size={20} strokeWidth={1.75} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-ink/5 bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavAnchor
                    link={link}
                    onNavigate={handleNav}
                    className="block py-3 text-base text-ink"
                  />
                </li>
              ))}
              <li className="pt-4">
                <Button className="w-full" variant="outline" onClick={downloadResume}>
                  Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
