import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BulletinBackground } from '@/components/BulletinBackground'
import { Footer } from '@/components/layout/Footer'
import { Sidebar } from '@/components/layout/Sidebar'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function RootLayout() {
  return (
    <div className="relative min-h-dvh">
      <BulletinBackground />
      <Sidebar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
