type ReflectionNotesProps = {
  learned?: string
  overcame?: string
}

export function ReflectionNotes({ learned, overcame }: ReflectionNotesProps) {
  return (
    <div className="mt-8 w-full space-y-6">
      <section>
        <h4 className="font-sans text-xl font-bold tracking-tight text-ink sm:text-2xl">
          What I Learned
        </h4>
        {learned ? (
          <p className="mt-3 text-base leading-relaxed text-mute sm:text-lg">
            {learned}
          </p>
        ) : null}
      </section>
      <section>
        <h4 className="font-sans text-xl font-bold tracking-tight text-ink sm:text-2xl">
          What I Overcame
        </h4>
        {overcame ? (
          <p className="mt-3 text-base leading-relaxed text-mute sm:text-lg">
            {overcame}
          </p>
        ) : null}
      </section>
    </div>
  )
}
