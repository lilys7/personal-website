import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/utils/cn'

type YouTubeEmbedProps = {
  videoId: string
  title: string
  thumbnail: string
  className?: string
}

export function YouTubeEmbed({
  videoId,
  title,
  thumbnail,
  className,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden bg-ink/10',
        className,
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-inset"
        >
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-ink/15 transition-colors group-hover:bg-ink/25"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-md transition-transform group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]"
          >
            <Play size={28} strokeWidth={1.75} className="ml-0.5 fill-ink" />
          </span>
        </button>
      )}
    </div>
  )
}
