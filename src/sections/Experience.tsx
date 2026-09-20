import { Navigate, useParams } from 'react-router-dom'
import { EXPERIENCES } from '@/constants/experiences'
import { ExperienceBoard } from '@/components/ExperienceBoard'
import { sectionHeadingClass, sectionShellClass } from '@/components/Section'
import gditPhoto1 from '@/assets/gdit/IMG_3423.png'
import gditPhoto2 from '@/assets/gdit/IMG_6660.png'
import gditPhoto3 from '@/assets/gdit/IMG_6726.png'
import gditPhoto4 from '@/assets/gdit/IMG_6272.png'
import cisessPhoto from '@/assets/cisess/photo.png'
import cisessPoster from '@/assets/cisess/poster.jpg'
import exigerPhoto from '@/assets/exiger/photo.png'
import replenishPhoto from '@/assets/replenish/photo.png'
import aplPhoto from '@/assets/apl/photo.png'
import { cn } from '@/utils/cn'

const EXPERIENCE_PHOTOS: Record<string, string[]> = {
  gdit: [gditPhoto1, gditPhoto2, gditPhoto3, gditPhoto4],
  cisess: [cisessPhoto],
  exiger: [exigerPhoto],
  replenish: [replenishPhoto],
  apl: [aplPhoto],
}

const CISESS_POSTER_URL =
  'https://ams104annual.ipostersessions.com/default.aspx?s=67-95-4F-EE-8D-DD-49-28-E4-59-A8-E0-C1-F3-08-A3&guestview=true'

function PhotoZigZag({ photos, label }: { photos: string[]; label: string }) {
  if (photos.length === 1) {
    return (
      <div
        className="flex w-[min(48vw,320px)] shrink-0 items-center justify-center self-center md:w-[min(36vw,300px)] md:self-stretch md:py-6"
        aria-label={`${label} photos`}
      >
        <img
          src={photos[0]}
          alt=""
          className="aspect-square w-[min(42vw,260px)] rounded-full object-cover shadow-md md:w-[min(30vw,280px)]"
        />
      </div>
    )
  }

  return (
    <div
      className="flex w-[min(58vw,340px)] shrink-0 flex-col md:w-[min(40vw,360px)]"
      aria-label={`${label} photos`}
    >
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={cn(
            'aspect-square w-[min(34vw,150px)] rounded-full object-cover shadow-md md:w-[min(20vw,170px)]',
            i > 0 && '-mt-6 md:-mt-8',
            i % 2 === 0 ? 'self-end' : 'self-start',
          )}
        />
      ))}
    </div>
  )
}

function CisessMedia() {
  return (
    <div className="flex w-[min(48vw,320px)] shrink-0 flex-col items-center gap-5 self-center md:w-[min(36vw,300px)] md:self-stretch">
      <div className="flex w-full flex-1 items-center justify-center md:py-4">
        <img
          src={cisessPhoto}
          alt=""
          className="aspect-square w-[min(42vw,260px)] rounded-full object-cover shadow-md md:w-[min(30vw,280px)]"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <img
          src={cisessPoster}
          alt="Soil Moisture Anomaly Detections research poster"
          className="w-full shadow-md"
        />
        <p className="text-sm text-mute">
          poster link:{' '}
          <a
            href={CISESS_POSTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
          >
            {CISESS_POSTER_URL}
          </a>
        </p>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={sectionShellClass}
    >
      <h2
        id="experience-heading"
        className={cn(sectionHeadingClass, 'mb-12 md:mb-16')}
      >
        Experience
      </h2>

      <div className="flex flex-col items-center gap-8 md:gap-10">
        {EXPERIENCES.map((experience) => (
          <ExperienceBoard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export function ExperienceDetail() {
  const { id } = useParams()
  const experience = EXPERIENCES.find((item) => item.id === id)

  if (!experience) {
    return <Navigate to="/experience" replace />
  }

  const photos = EXPERIENCE_PHOTOS[experience.id]
  const isCisess = experience.id === 'cisess'

  return (
    <section
      aria-labelledby="experience-detail-heading"
      className={sectionShellClass}
    >
      <article>
        <div
          className={cn(
            'gap-10',
            photos || isCisess
              ? 'flex flex-col md:flex-row md:items-start md:justify-between'
              : '',
          )}
        >
          <div className="min-w-0 flex-1">
            <header className="max-w-3xl">
              <h2
                id="experience-detail-heading"
                className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                {experience.company}
              </h2>
              <p className="mt-3 text-base italic text-mute sm:text-lg">
                {experience.role}
              </p>
              <p className="mt-1 text-sm text-clay">
                {experience.period}
                <span className="mx-2 text-ink/20" aria-hidden="true">
                  ·
                </span>
                {experience.location}
              </p>
            </header>

            <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed text-mute marker:text-clay sm:text-lg">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {isCisess ? (
            <CisessMedia />
          ) : photos ? (
            <PhotoZigZag photos={photos} label={experience.company} />
          ) : null}
        </div>
      </article>
    </section>
  )
}
