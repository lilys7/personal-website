import { useRef, useState, type FormEvent } from 'react'
import { SITE } from '@/constants/site'
import { Button } from '@/components/Button'
import { Recaptcha } from '@/components/Recaptcha'
import { sendContactMessage } from '@/utils/sendContactMessage'

const fieldClass =
  'mt-2 w-full border border-ink/15 bg-paper px-3 py-2.5 font-sans text-base text-ink outline-none transition-colors placeholder:text-mute/50 focus:border-ink/40'

const labelClass = 'block font-sans text-sm text-mute'

export function Contact() {
  const openedAt = useRef(Date.now())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [human, setHuman] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (honeypot) return
    if (Date.now() - openedAt.current < 1200) return
    if (!human) {
      setError('Please confirm you are not a robot.')
      return
    }
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    setSending(true)
    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        honeypot,
      })
      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError(
        err instanceof Error && err.message === 'missing-key'
          ? 'The form is not set up to send yet. Add a Web3Forms key in .env.local.'
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <h2
        id="contact-heading"
        className="mb-12 font-sans text-4xl font-medium tracking-tight text-ink sm:text-5xl md:mb-16"
      >
        Contact
      </h2>

      <div className="grid max-w-4xl gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-16">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-5 font-sans"
          noValidate
        >
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <Recaptcha onChange={setHuman} />

          {error ? (
            <p className="text-sm text-clay" role="alert">
              {error}
            </p>
          ) : null}

          {sent ? (
            <p className="text-sm text-mute" role="status">
              Message sent. Thank you!
            </p>
          ) : null}

          <Button type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send'}
          </Button>
        </form>

        <div className="flex flex-col gap-3 border-t border-ink/10 pt-8 font-sans text-base text-mute md:border-t-0 md:pt-0">
          <p className="whitespace-nowrap">
            GitHub:{' '}
            {SITE.github ? (
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
              >
                {SITE.github.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : null}
          </p>
          <p className="whitespace-nowrap">
            LinkedIn:{' '}
            {SITE.linkedin ? (
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
              >
                {SITE.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : null}
          </p>
        </div>
      </div>
    </section>
  )
}
