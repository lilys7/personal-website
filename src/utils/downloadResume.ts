import { SITE } from '@/constants/site'

export const resumeFileUrl = `${SITE.resumePath}?v=2`

export async function downloadResume() {
  const response = await fetch(resumeFileUrl)
  if (!response.ok) return

  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Lily_Shen_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
