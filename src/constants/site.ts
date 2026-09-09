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
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
