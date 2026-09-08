import lily from '@/assets/tiger-lily.png'
import lilyStrokes from '@/assets/lilyStrokes.json'
import { BrushPainting, type BrushPaintingData } from '@/components/BrushPainting'
import { cn } from '@/utils/cn'

type InkPaintingProps = {
  className?: string
}

export function InkPainting({ className }: InkPaintingProps) {
  return (
    <BrushPainting
      imageSrc={lily}
      data={lilyStrokes as BrushPaintingData}
      play="immediate"
      title="Tiger lily ink painting"
      className={cn('object-right-bottom', className)}
    />
  )
}
