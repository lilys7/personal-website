import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BulletinBackground } from '@/components/BulletinBackground'
import { Footer } from '@/components/layout/Footer'
import { Sidebar, SIDEBAR_WIDTH } from '@/components/layout/Sidebar'

export function RootLayout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const closedByUser = useRef(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return

    closedByUser.current = false
    const id = window.setTimeout(() => {
      if (!closedByUser.current) setOpen(true)
    }, 280)

    return () => window.clearTimeout(id)
  }, [pathname])

  const toggle = useCallback(() => {
    setOpen((isOpen) => {
      if (isOpen) closedByUser.current = true
      return !isOpen
    })
  }, [])

  return (
    <div className="relative min-h-dvh">
      <BulletinBackground />
      <Sidebar open={open} onToggle={toggle} />
      <div
        className="transition-[padding-left] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ paddingLeft: open ? SIDEBAR_WIDTH : 0 }}
      >
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
