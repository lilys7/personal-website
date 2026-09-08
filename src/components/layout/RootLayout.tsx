import { Outlet } from 'react-router-dom'
import { BulletinBackground } from '@/components/BulletinBackground'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export function RootLayout() {
  return (
    <div className="relative min-h-dvh">
      <BulletinBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
