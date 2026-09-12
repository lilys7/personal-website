import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import sakuraUrl from '@/assets/fonts/SakuraHandmadeRegular.woff2?url'
import '@/styles/index.css'

const fontPreload = document.createElement('link')
fontPreload.rel = 'preload'
fontPreload.as = 'font'
fontPreload.type = 'font/woff2'
fontPreload.crossOrigin = 'anonymous'
fontPreload.href = sakuraUrl
document.head.appendChild(fontPreload)

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
