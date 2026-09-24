import { SITE } from '@/constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/5 px-6 py-10 md:px-10">
      <p className="text-sm text-mute">
        © {year} {SITE.name}
      </p>
    </footer>
  )
}
