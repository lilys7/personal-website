import { Section } from '@/components/Section'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import cloakThumbnail from '@/assets/projects/cloak-thumbnail.jpg'
import cloakedDevpost from '@/assets/projects/cloaked-devpost.png'
import polymarketPreview from '@/assets/projects/polymarket.jpg'

const CLOAK_VIDEO_ID = 'baW2TWBxVr4'
const CLOAKED_DEVPOST_URL = 'https://devpost.com/software/cloaked'

const SPOTLIGHT_FIGMA_URL =
  'https://www.figma.com/proto/WXaaSViTgfTqxZK5jTr2za/Spotlight?node-id=12266-430&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11575%3A3489&show-proto-sidebar=1'
const SPOTLIGHT_FIGMA_EMBED = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(SPOTLIGHT_FIGMA_URL)}`
const POLYMARKET_URL = 'https://lilys7.github.io/polymarket-analysis/web/'

const projectDescriptionClass =
  'mt-5 max-w-3xl text-base leading-relaxed text-mute sm:text-lg'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <article>
        <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Cloaked
        </h3>
        <p className={projectDescriptionClass}>
          Protect your images from deepfakes.
        </p>
        <p className="mt-5 text-base italic text-mute sm:text-lg">
          Demo video with web and mobile
        </p>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="min-w-0 flex-1">
            <YouTubeEmbed
              videoId={CLOAK_VIDEO_ID}
              title="Cloaked: Protect your images from deepfakes."
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

      <article className="mt-20 md:mt-24">
        <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Spotlight
        </h3>
        <p className={projectDescriptionClass}>
          Find photo locations by aesthetic.
        </p>
        <p className="mt-5 text-base italic text-mute sm:text-lg">
          Figma prototype
        </p>

        <div className="mt-8">
          <iframe
            src={SPOTLIGHT_FIGMA_EMBED}
            title="Spotlight: Find photo locations by aesthetic."
            allowFullScreen
            className="aspect-[16/10] w-full border border-ink/10 bg-paper"
          />
          <p className="mt-2 text-sm text-mute">
            <a
              href={SPOTLIGHT_FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
            >
              Figma: Spotlight
            </a>
          </p>
        </div>
      </article>

      <article className="mt-20 md:mt-24">
        <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          3D Execution Style Clustering On Polymarket
        </h3>
        <p className={projectDescriptionClass}>
          An interactive 3D map of Polymarket traders, clustered by how they
          execute. Each point is one trader — rotate, zoom, and click a cluster
          or point to inspect PnL, specialization, and profit rate.
        </p>

        <div className="mt-8">
          <a
            href={POLYMARKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <img
              src={polymarketPreview}
              alt="3D Execution Style Clustering On Polymarket"
              className="h-auto w-full shadow-md"
            />
          </a>
          <p className="mt-2 text-sm text-mute">
            <a
              href={POLYMARKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
            >
              Live demo
            </a>
          </p>
        </div>
      </article>
    </Section>
  )
}
