import { downloadResume, resumeFileUrl } from '@/utils/downloadResume'
import { Section } from '@/components/Section'

export function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="mx-auto max-w-4xl">
        <iframe
          src={`${resumeFileUrl}#view=FitH`}
          title="Lily Shen resume"
          className="h-[min(90vh,1100px)] w-full border border-ink/10 bg-paper"
        />
        <p className="mt-4 font-sans text-sm text-mute">
          <button
            type="button"
            onClick={() => void downloadResume()}
            className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
          >
            Download resume
          </button>
        </p>
      </div>
    </Section>
  )
}
