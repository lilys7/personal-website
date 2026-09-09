import { useEffect, useId, useRef, useState } from 'react'

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ''

type RecaptchaApi = {
  ready: (cb: () => void) => void
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
    },
  ) => number
  reset: (id?: number) => void
}

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi
  }
}

let scriptPromise: Promise<RecaptchaApi> | null = null

function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha)
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => {
      if (!window.grecaptcha) {
        reject(new Error('recaptcha missing'))
        return
      }
      window.grecaptcha.ready(() => resolve(window.grecaptcha!))
    }
    script.onerror = () => reject(new Error('recaptcha failed to load'))
    document.head.appendChild(script)
  })

  return scriptPromise
}

type RecaptchaProps = {
  onChange: (ok: boolean) => void
}

export function Recaptcha({ onChange }: RecaptchaProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const onChangeRef = useRef(onChange)
  const [fallback, setFallback] = useState(!SITE_KEY)
  const fallbackId = useId()

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    if (!SITE_KEY || !boxRef.current) return

    let widgetId: number | undefined
    let cancelled = false

    loadRecaptcha()
      .then((api) => {
        if (cancelled || !boxRef.current) return
        widgetId = api.render(boxRef.current, {
          sitekey: SITE_KEY,
          callback: () => onChangeRef.current(true),
          'expired-callback': () => onChangeRef.current(false),
          'error-callback': () => onChangeRef.current(false),
        })
      })
      .catch(() => {
        if (!cancelled) setFallback(true)
      })

    return () => {
      cancelled = true
      onChangeRef.current(false)
      if (widgetId !== undefined) {
        window.grecaptcha?.reset(widgetId)
      }
    }
  }, [])

  if (fallback) {
    return (
      <label
        htmlFor={fallbackId}
        className="flex cursor-pointer items-center gap-3 border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
      >
        <input
          id={fallbackId}
          type="checkbox"
          className="h-4 w-4 accent-ink"
          onChange={(e) => onChange(e.target.checked)}
        />
        I&apos;m not a robot
      </label>
    )
  }

  return <div ref={boxRef} className="min-h-[78px]" />
}
