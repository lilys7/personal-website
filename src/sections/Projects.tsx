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
const POLYMARKET_PDF = '/projects/polymarket-analysis.pdf'

const projectDescriptionClass =
  'mt-5 max-w-3xl text-base leading-relaxed text-mute sm:text-lg'

const projectNoteHeadingClass =
  'font-sans text-xl font-bold tracking-tight text-ink sm:text-2xl'

function ProjectNotes({
  learned,
  overcame,
}: {
  learned: string
  overcame: string
}) {
  return (
    <div className="mt-8 max-w-3xl space-y-6">
      <section>
        <h4 className={projectNoteHeadingClass}>What I Learned</h4>
        <p className="mt-3 text-base leading-relaxed text-mute sm:text-lg">
          {learned}
        </p>
      </section>
      <section>
        <h4 className={projectNoteHeadingClass}>What I Overcame</h4>
        <p className="mt-3 text-base leading-relaxed text-mute sm:text-lg">
          {overcame}
        </p>
      </section>
    </div>
  )
}

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
      <ProjectNotes learned="The experience of a hackathon! This was my first real, multiple day hackathon (in the past I had only done day-long ones). It definitely gave me the feel of a SF startup founder (sleep deprivation) and taught me how to brainstorm an idea from scratch." 
      overcame="We wasted a lot of time trying to come up with an idea, so I think my biggest lesson learned would be to think about the idea beforehand and spend the time at the hackathon building so everyone is working towards the same goal and we are efficient." />

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
      <ProjectNotes learned="How to use Figma to create a prototype! Especially how to make an app workflow that is interactive, as I used to assume Figma was just a static mockup. I also learned how to think from a user's ease of use and business perspective (e.g. retainability, potential for monetization through business trying to promote their locations on the app, network effects as more people contribute locations, etc.)" 
      overcame="Learning how to format elements. I always wanted to eyeball where my elements were placed by just drag, dropping, and adjusting, but this was a hassle and caused a lot of formatting issues especially with elements overlapping. It looked fine on the front but one item moving meant everything had to be fixed. I finally learned how to use autolayout and fixed the problem." />

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
      <ProjectNotes learned="What Polymarket was...what traders were, different terms like book levels, whales, price per volume, etc. I was a complete beginner in this field, but wanted to gain experience in quantitative trading
      and behavioral finance. There was also a column labelling traders as sharp, good, bad, and awful, and I had just assumed this meant how skilled a trader was: maybe they had more years
      of experience, gained more money, or were super knowledgeable in the topic they were trading in. But after analysis, I learned this label was just a calculation of profit per volume
      for each trader."       
      overcame="A lot. I remember opening the dataset in a visual viewer online and going &quot;what the heck is this?&quot; I sat there for two hours trying to brainstorm a unique topic, but without understanding the data fully
      I was just dozing off at my desk. So I asked my trusty AI to explain all the columns to me in great detail, teaching me terms and calculations along the way.
      Soon I learned the rows in the data all correspond to a trader in the Polymarket, and different columns detailed things like their trade volume, categories they traded in, profit, etc.
      I knew I wanted to use some sort of ML model to find patterns and visualize them, but k-means (basically a clustering algorithm that groups close items together) seemed too basic. 
      I then thought back to what I did at my internship, working with 3D point clouds and density based machine learning models, and thought that visualizing the polymarket data in a interactive point cloud would look super cool.
      20 hours in 3 days later..."/>

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

      <div className="mx-auto mt-10 w-[70vw] max-w-full">
        <iframe
          src={`${POLYMARKET_PDF}#view=FitH`}
          title="Polymarket analysis writeup"
          className="h-[min(70vh,800px)] w-full border border-ink/10 bg-paper"
        />
        <p className="mt-2 text-sm text-mute">
          <a
            href={POLYMARKET_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-ink/25 underline-offset-2 transition-colors hover:decoration-ink/60"
          >
            Download writeup
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
