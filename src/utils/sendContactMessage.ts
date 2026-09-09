const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''

type ContactPayload = {
  name: string
  email: string
  message: string
  honeypot: string
}

export async function sendContactMessage({
  name,
  email,
  message,
  honeypot,
}: ContactPayload) {
  if (!ACCESS_KEY) {
    throw new Error('missing-key')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name,
      email,
      message,
      subject: `Portfolio message from ${name}`,
      from_name: name,
      botcheck: honeypot,
    }),
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'send-failed')
  }
}
