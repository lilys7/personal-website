import { useSyncExternalStore } from 'react'

const QUERY = '(min-width: 768px)'

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

export function useRichMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
