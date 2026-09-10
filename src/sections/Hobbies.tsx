import { HOBBIES } from '@/constants/hobbies'
import { Section } from '@/components/Section'

export function Hobbies() {
  return (
    <Section id="hobbies" title="Hobbies">
      <ul className="columns-1 gap-6 sm:columns-2 xl:columns-3 md:gap-8">
        {HOBBIES.map((hobby) => (
          <li
            key={hobby.id}
            className="mb-6 inline-block w-full break-inside-avoid border border-ink/10 px-6 py-12 md:mb-8"
          >
            <h3 className="font-display text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl">
              {hobby.title}
            </h3>
            {hobby.subtitle ? (
              <p className="mt-5 text-base italic text-mute sm:text-lg">
                {hobby.subtitle}
              </p>
            ) : null}
            {hobby.images?.length ? (
              <div className="mt-5 flex flex-col gap-3">
                {hobby.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-auto w-full"
                  />
                ))}
              </div>
            ) : null}
            
            {hobby.info ? (
              <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
                {hobby.info}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
