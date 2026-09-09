import { HOBBIES } from '@/constants/hobbies'
import { Section } from '@/components/Section'

export function Hobbies() {
  return (
    <Section id="hobbies" title="Hobbies">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-6 md:gap-8">
        {HOBBIES.map((hobby) => (
          <li
            key={hobby.id}
            className="flex min-h-[18rem] flex-col border border-ink/10 px-6 py-8"
          >
            <h3 className="font-display text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl">
              {hobby.title}
            </h3>
            {hobby.subtitle ? (
              <p className="mt-3 text-base italic text-mute sm:text-lg">
                {hobby.subtitle}
              </p>
            ) : null}
            {hobby.info ? (
              <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">
                {hobby.info}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
