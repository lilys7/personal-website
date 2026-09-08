import { SITE } from '@/constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/5 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-3 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  )
}
