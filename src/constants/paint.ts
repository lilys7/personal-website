import lilyStrokes from '@/assets/lilyStrokes.json'

type Stroke = {
  delay: number
  duration: number
}

const strokes = lilyStrokes.strokes as Stroke[]

/** when the lily brush animation finishes (seconds) */
export const PAINT_END_S = Math.max(
  ...strokes.map((s) => s.delay + s.duration),
)
