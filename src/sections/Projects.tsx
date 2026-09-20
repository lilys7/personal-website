import { Navigate, useParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import cloakThumbnail from '@/assets/projects/cloak-thumbnail.jpg'
import cloakedDevpost from '@/assets/projects/cloaked-devpost.png'
import polymarketPreview from '@/assets/projects/polymarket.jpg'
import { PROJECTS } from '@/constants/projects'
import { cn } from '@/utils/cn'

const CLOAK_VIDEO_ID = 'baW2TWBxVr4'
const CLOAKED_DEVPOST_URL = 'https://devpost.com/software/cloaked'

const SPOTLIGHT_FIGMA_URL =
  'https://www.figma.com/proto/WXaaSViTgfTqxZK5jTr2za/Spotlight?node-id=12266-430&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11575%3A3489&show-proto-sidebar=1'
const SPOTLIGHT_FIGMA_EMBED = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(SPOTLIGHT_FIGMA_URL)}`
const POLYMARKET_URL = 'https://lilys7.github.io/polymarket-analysis/web/'
const POLYMARKET_GITHUB_URL = 'https://github.com/lilys7/polymarket-analysis'

const projectDescriptionClass =
  'mt-5 max-w-3xl text-base leading-relaxed text-mute sm:text-lg'

function CloakedProject() {
  return (
    <article>
      <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Cloaked
      </h3>
      <p className={projectDescriptionClass}>
        Protect your images from deepfakes.
      </p>
      <p className="mt-5 text-base italic text-mute sm:text-lg">
        Demo video with web and mobile. Frontend React, HTML/CSS.
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
  )
}

function SpotlightProject() {
  return (
    <article>
      <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Spotlight
      </h3>
      <p className={projectDescriptionClass}>
        Find photo locations by aesthetic.
      </p>
      <p className="mt-5 text-base italic text-mute sm:text-lg">
        Figma prototype. You and your friend are hanging out, whether just
        grabbing food or hitting up the mall. You’re all dressed up and want to
        take some pictures, but you look around and no background catches your
        eye. You search up “cool photo spots near me” on Google but all you see
        are neon colors and wedding photos, none of which match your vibe.
        Wouldn’t it be great if there was an app that showed where other people
        took pictures at, so you could see the background and recreate with your
        own? Spotlight does just that.
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
  )
}

function PolymarketProject() {
  return (
    <article>
      <h3 className="font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        3D Execution Style Clustering On Polymarket
      </h3>
      <p className="mt-5 text-base italic text-mute sm:text-lg">
        An interactive 3D map of Polymarket traders, clustered by how they
        execute. Each point is one trader. Rotate, zoom, and click a cluster or
        point to inspect PnL, specialization, and profit per dollar. I expected
        “sharp” traders to share an execution style and sit in dense clusters.
        That did not hold: Sharp is about 17.6% of clustered traders vs 15.7% of
        noise. In this file, “Sharp” is a profit-per-dollar bin, not a skill
        grade. Python, pandas, scikit-learn, HDBSCAN, Plotly, JavaScript,
        Three.js
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
        <p className="mt-2 text-sm text-mute">
          <a
            href={POLYMARKET_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
          >
            Github: 3D Execution Style Clustering On Polymarket
          </a>
        </p>
      </div>
    </article>
  )
}

const PROJECT_VIEWS = {
  spotlight: SpotlightProject,
  polymarket: PolymarketProject,
  cloaked: CloakedProject,
} as const

function ProjectView({ id }: { id: keyof typeof PROJECT_VIEWS }) {
  const View = PROJECT_VIEWS[id]
  return <View />
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      {PROJECTS.map((project, i) => (
        <div
          key={project.id}
          className={cn(i > 0 && 'mt-20 md:mt-24')}
        >
          <ProjectView id={project.id as keyof typeof PROJECT_VIEWS} />
        </div>
      ))}
    </Section>
  )
}

export function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find((item) => item.id === id)

  if (!project || !(project.id in PROJECT_VIEWS)) {
    return <Navigate to="/projects" replace />
  }

  return (
    <Section id="projects" title="Projects">
      <ProjectView id={project.id as keyof typeof PROJECT_VIEWS} />
    </Section>
  )
}
