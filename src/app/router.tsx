import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { About } from '@/sections/About'
import { Experience, ExperienceDetail } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Hobbies } from '@/sections/Hobbies'
import { Resume } from '@/sections/Resume'
import { Contact } from '@/sections/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'experience/:id', element: <ExperienceDetail /> },
      { path: 'projects', element: <Projects /> },
      { path: 'hobbies', element: <Hobbies /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
