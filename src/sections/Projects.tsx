import { Section } from '@/components/Section'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import cloakThumbnail from '@/assets/projects/cloak-thumbnail.jpg'
import cloakedDevpost from '@/assets/projects/cloaked-devpost.png'

const CLOAK_VIDEO_ID = 'baW2TWBxVr4'
const CLOAKED_DEVPOST_URL = 'https://devpost.com/software/cloaked'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <article>
        <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Cloaked
        </h3>
        <p className="mt-5 text-base italic text-mute sm:text-lg">
          Demo video with web and mobile
        </p>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="min-w-0 flex-1">
            <YouTubeEmbed
              videoId={CLOAK_VIDEO_ID}
              title="Cloak Demo Video with Web and Mobile"
              thumbnail={cloakThumbnail}
            />
          </div>

          <div className="w-full shrink-0 md:w-[min(32vw,300px)]">
            <a
              href={CLOAKED_DEVPOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <img
                src={cloakedDevpost}
                alt="Cloaked on Devpost"
                className="w-full shadow-md"
              />
            </a>
            <p className="mt-2 text-sm text-mute">
              <a
                href={CLOAKED_DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
              >
                Devpost: Cloaked
              </a>
            </p>
          </div>
        </div>
      </article>
    </Section>
  )
}
