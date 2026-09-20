export const SITE = {
  name: 'Lily Shen',
  title: 'Lily Shen',
  subtitle: 'Computer Science student at the University of Maryland',
  email: 'hello@lilyshen.com',
  resumePath: '/resume.pdf',
  // add your profile urls here
  github: 'https://github.com/lilys7',
  linkedin: 'https://www.linkedin.com/in/lilyshen7',
} as const

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Hobbies', to: '/hobbies' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
