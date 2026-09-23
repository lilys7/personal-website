import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { About } from '@/sections/About'
import { Experience, ExperienceDetail } from '@/sections/Experience'
import { ProjectDetail, Projects } from '@/sections/Projects'
import { Hobbies } from '@/sections/Hobbies'
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
      { path: 'projects/:id', element: <ProjectDetail /> },
      { path: 'hobbies', element: <Hobbies /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Navigate to="/" replace /> },
    ],
  },
])
