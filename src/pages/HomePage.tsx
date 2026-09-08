import { lazy, Suspense } from 'react'
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
const Resume = lazy(() =>
  import('@/sections/Resume').then((m) => ({ default: m.Resume })),
)
const Contact = lazy(() =>
  import('@/sections/Contact').then((m) => ({ default: m.Contact })),
)

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </Suspense>
    </>
  )
}
