export function BulletinBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-paper"
    >
      <div className="bulletin-dots absolute inset-0" />
    </div>
  )
}
