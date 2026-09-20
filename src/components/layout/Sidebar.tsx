import { useCallback, useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EXPERIENCES } from '@/constants/experiences'
import { NAV_LINKS, SITE } from '@/constants/site'
import { cn } from '@/utils/cn'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'block py-2 text-base transition-colors',
    isActive ? 'text-ink' : 'text-mute hover:text-ink',
  )

export function Sidebar() {
  const reduceMotion = useReducedMotion()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    close()
  }, [location.pathname, close])

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
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-paper/90 text-ink shadow-[0_1px_0_rgb(18_19_15_/0.06)] backdrop-blur-sm transition-colors hover:bg-mist/70"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={toggle}
      >
        {open ? (
          <X size={20} strokeWidth={1.75} />
        ) : (
          <Menu size={20} strokeWidth={1.75} />
        )}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-ink/20"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <motion.nav
              id={menuId}
              aria-label="Primary"
              className="fixed inset-y-0 left-0 z-50 flex w-[min(20rem,86vw)] flex-col bg-paper px-6 pt-20 pb-8 shadow-[8px_0_24px_rgb(18_19_15_/0.06)]"
              initial={reduceMotion ? false : { x: '-100%' }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: '-100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <NavLink
                to="/"
                end
                className="font-display text-xl font-normal tracking-tight text-ink transition-opacity hover:opacity-70"
              >
                {SITE.name}
              </NavLink>

              <ul className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  if (link.to === '/experience') {
                    return (
                      <li key={link.to}>
                        <NavLink to={link.to} end className={linkClass}>
                          {link.label}
                        </NavLink>
                        <ul className="mt-1 mb-2 ml-3 flex flex-col border-l border-ink/10 pl-3">
                          {EXPERIENCES.map((experience) => (
                            <li key={experience.id}>
                              <NavLink
                                to={`/experience/${experience.id}`}
                                className={linkClass}
                              >
                                {experience.navLabel}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  }

                  return (
                    <li key={link.to}>
                      <NavLink to={link.to} className={linkClass}>
                        {link.label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
