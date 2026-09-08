export type ExperienceItem = {
  id: string
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gdit',
    company: 'General Dynamics Information Technology',
    role: 'AI/ML Engineering Intern',
    period: 'Jun 2026 – Present',
    location: 'Springfield, VA',
    bullets: [
      'Built a production PyTorch RandLA-Net library for 3D LiDAR semantic segmentation (13 classes; PLY/LAS/LAZ).',
      'Scaled inference via tiling, 10-pass voting, and reversible voxelization—full-resolution labels under a 70M-point budget.',
      'Shipped to GPU serving (Docker, Celery, OpenShift/RunAI) with YAML config, health checks, and reproducible inference.',
      'Validated on real Leica 10–60M-point conference-room LiDAR scans using pretrained S3DIS model (~63% mIoU reported).',
    ],
  },
  {
    id: 'exiger',
    company: 'Exiger (Client Project)',
    role: 'Full-Stack Engineering Intern',
    period: 'Feb 2026 – May 2026',
    location: 'College Park, MD',
    bullets: [
      'Designed Figma prototypes + implemented React components for Exiger’s supplier portal, supporting millions of suppliers.',
      'Collaborate with a 14-member cross-functional Agile team to iterate on product requirements, UX, and supplier workflows.',
    ],
  },
  {
    id: 'replenish',
    company: 'Replenish NutrAI',
    role: 'Backend Engineering Intern',
    period: 'Dec 2025 – Jun 2026',
    location: 'Remote',
    bullets: [
      'Engineer a 7-layer validation pipeline to verify active ingredients for 835 menopause supplements against clinical data.',
      'Implement backend schemas integrating and cleaning 650+ clinical trials and synonym-normalized compound datasets.',
      'Support a clinical supplement platform delivering evidence-backed insights for menopause and women’s health.',
    ],
  },
  {
    id: 'apl',
    company: 'Johns Hopkins Applied Physics Laboratory (APL)',
    role: 'Full-Stack Engineering Intern',
    period: 'Sep 2023 – Aug 2024',
    location: 'Fulton, MD',
    bullets: [
      'Built an end-to-end remote laboratory platform enabling 25+ graduate researchers to run experiments by remotely controlling physical instruments, with support for multi-user access and real-time state synchronization.',
      'Developed backend services in Python, Flask, SQL, and REST APIs, handling concurrent requests and command validation.',
      'Containerized the platform with Docker and implemented 7+ reusable frontend components in HTML/CSS/JavaScript.',
    ],
  },
  {
    id: 'cisess',
    company: 'CISESS/NOAA',
    role: 'Data Science Intern',
    period: 'Jun 2023 – Jan 2024',
    location: 'College Park, MD',
    bullets: [
      'Developed Python/Unix data pipelines processing 2,000+ daily NOAA satellite files to generate climatology datasets.',
      'Automated global drought classification across a 6-year satellite dataset, corroborated with the US Drought Monitor.',
    ],
  },
]
