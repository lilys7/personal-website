import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
import { Hero } from '@/sections/Hero'

const About = lazy(() =>
  import('@/sections/About').then((m) => ({ default: m.About })),
)
const Experience = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.Experience })),
)
const Projects = lazy(() =>
  import('@/sections/Projects').then((m) => ({ default: m.Projects })),
)
const Hobbies = lazy(() =>
  import('@/sections/Hobbies').then((m) => ({ default: m.Hobbies })),
)
const Resume = lazy(() =>
  import('@/sections/Resume').then((m) => ({ default: m.Resume })),
)
const Contact = lazy(() =>
  import('@/sections/Contact').then((m) => ({ default: m.Contact })),
)

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

function DeferredSections({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 900 })
      return () => win.cancelIdleCallback?.(id)
    }

    const id = window.setTimeout(() => setReady(true), 200)
    return () => window.clearTimeout(id)
  }, [])

  if (!ready) return <SectionFallback />

  return <Suspense fallback={<SectionFallback />}>{children}</Suspense>
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <DeferredSections>
        <Experience />
        <Projects />
        <Hobbies />
        <Resume />
        <Contact />
      </DeferredSections>
    </>
  )
}
