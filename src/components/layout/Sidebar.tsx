import { useId } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { EXPERIENCES } from '@/constants/experiences'
import { PROJECTS } from '@/constants/projects'
import { NAV_LINKS, SITE } from '@/constants/site'
import { cn } from '@/utils/cn'

export const SIDEBAR_WIDTH = 'min(16rem,70vw)'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'block py-2 text-base transition-colors',
    isActive ? 'text-ink' : 'text-mute hover:text-ink',
  )

function navChildren(to: string) {
  if (to === '/experience') {
    return EXPERIENCES.map((item) => ({
      id: item.id,
      label: item.navLabel,
      to: `/experience/${item.id}`,
    }))
  }

  if (to === '/projects') {
    return PROJECTS.map((item) => ({
      id: item.id,
      label: item.navLabel,
      to: `/projects/${item.id}`,
    }))
  }

  return []
}

type SidebarProps = {
  open: boolean
  onToggle: () => void
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  const menuId = useId()

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-paper/90 text-ink shadow-[0_1px_0_rgb(18_19_15_/0.06)] backdrop-blur-sm transition-colors hover:bg-mist/70"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={onToggle}
      >
        {open ? (
          <X size={20} strokeWidth={1.75} />
        ) : (
          <Menu size={20} strokeWidth={1.75} />
        )}
      </button>

      <nav
        id={menuId}
        aria-label="Primary"
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col bg-paper px-6 pt-20 pb-8 shadow-[8px_0_24px_rgb(18_19_15_/0.06)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'translate-x-0' : 'pointer-events-none -translate-x-full',
        )}
        style={{ width: SIDEBAR_WIDTH }}
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
            const children = navChildren(link.to)

            if (children.length > 0) {
              return (
                <li key={link.to}>
                  <NavLink to={link.to} end className={linkClass}>
                    {link.label}
                  </NavLink>
                  <ul className="mt-1 mb-2 ml-3 flex flex-col border-l border-ink/10 pl-3">
                    {children.map((child) => (
                      <li key={child.id}>
                        <NavLink to={child.to} className={linkClass}>
                          {child.label}
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
      </nav>
    </>
  )
}
