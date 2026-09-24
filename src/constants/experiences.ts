export type ExperienceItem = {
  id: string
  company: string
  navLabel: string
  role: string
  period: string
  location: string
  bullets: string[]
  learned?: string
  overcame?: string
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gdit',
    company: 'General Dynamics Information Technology',
    navLabel: 'GDIT',
    role: 'AI/ML Engineering Intern',
    period: 'Jun 2026 – Present',
    location: 'Springfield, VA',
    bullets: [
      'Built a production PyTorch RandLA-Net library for 3D LiDAR semantic segmentation (13 classes; PLY/LAS/LAZ).',
      'Scaled inference via tiling, 10-pass voting, and reversible voxelization—full-resolution labels under a 70M-point budget.',
      'Shipped to GPU serving (Docker, Celery, OpenShift/RunAI) with YAML config, health checks, and reproducible inference.',
      'Validated on real Leica 10–60M-point conference-room LiDAR scans using pretrained S3DIS model (~63% mIoU reported).',
    ],
    learned: "This was my first major experience working with AI/ML, so I needed to learn very basic concepts, terms, and pipelines. I learned what inference was, how to determine if a model was performing well, and the downsampling/data cleaning process needed to work with 3D LiDAR data. I also got experience working with CUDA and pushing Docker images for testing and deployment.",
    overcame: "Like almost every other project I've worked on, thinking of the idea is the hardest part. When the entire team was together brainstorming, my mentor randomly blurted that it would be cool to run computer vision on LiDAR data, but thought that would be extremely difficult. As ambitious interns, we decided to do just that. If I detailed every bug and difficulty I went through, it might crash the browser, but I would say the main thing I overcame was the learning curve and understanding the best approach to testing and integrating the open-source semantic segmentation model (RandLA-Net) into our own application."
  },
  {
    id: 'exiger',
    company: 'Exiger (Client Project)',
    navLabel: 'Exiger',
    role: 'Full-Stack Engineering Intern',
    period: 'Feb 2026 – May 2026',
    location: 'College Park, MD',
    bullets: [
      'Designed Figma prototypes + implemented React components for Exiger’s supplier portal, supporting 550+ suppliers.',
      'Collaborated with a 14-member cross-functional Agile team to iterate on product requirements, UX, and supplier workflows.',
    ],
    learned: "I gained more experience with React and Figma, designing UI for Exiger's supplier portal (mainly the product catalog page and messaging functionality). I also learned a lot about my fellow teammates in App Development Club through our weekly meetings and dinners!",
    overcame: "There wasn't too much difficulty or learning curve involved, but managing meetings and outside work alongside difficult classes was a test of my time management skills."
  },
  {
    id: 'replenish',
    company: 'Replenish NutrAI',
    navLabel: 'Replenish NutrAI',
    role: 'Backend Engineering Intern',
    period: 'Dec 2025 – Jun 2026',
    location: 'Remote',
    bullets: [
      'Engineer a 7-layer validation pipeline to verify active ingredients for 835 menopause supplements against clinical data.',
      'Implement backend schemas integrating and cleaning 650+ clinical trials and synonym-normalized compound datasets.',
      'Support a clinical supplement platform delivering evidence-backed insights for menopause and women’s health.',
    ],
    learned: "I learned PostgreSQL best practices and all the factors that go into choosing the best menopause supplements. I worked directly with the CEO of the startup, and he explained to me that lots of different factors can influence the effectiveness of medications. One thing I never thought about prior to working here was that someone living in Hawaii vs. someone living in Chicago could take the exact same supplement, but the weather and environmental differences could change how the medicine behaves in the body. I also learned how to populate spreadsheets with clinical trial API data, and I was really glad the pipelines I built saved our medical researcher a lot of manual labor filling out trial data row by row.",
    overcame: "I struggled with not understanding the product requirements at first and not taking into account all the relationships and synonyms between different ingredients. Scientific names of ingredients appear frequently, and certain supplements wouldn't be linked to the proper components if we didn't include all possible name variations in the database."
  },
  {
    id: 'apl',
    company: 'Johns Hopkins Applied Physics Laboratory (APL)',
    navLabel: 'Johns Hopkins APL',
    role: 'Full-Stack Engineering Intern',
    period: 'Sep 2023 – Aug 2024',
    location: 'Fulton, MD',
    bullets: [
      'Built an end-to-end remote laboratory platform enabling 25+ graduate researchers to run experiments by remotely controlling physical instruments, with support for multi-user access and real-time state synchronization.',
      'Developed backend services in Python, Flask, SQL, and REST APIs, handling concurrent requests and command validation.',
      'Containerized the platform with Docker and implemented 7+ reusable frontend components in HTML/CSS/JavaScript.',
    ],
    learned: "This was my first experience building a full-stack app and working with hardware controls! I never knew it was possible to control physical hardware (lab instruments like function generators and oscilloscopes) from software, but I used LabVIEW to connect to instruments and display their outputs on an application frontend for JHU master's students to conduct labs remotely. It was some super cool stuff, combining a Flask backend, a JS/HTML/CSS frontend, and an SQLite database all together.",
    overcame: "Reading documentation (especially LabVIEW) and thinking outside the box. My mentor had a previously built application in Java but wanted to redesign it with more modern technologies. If there was one thing I could do again, I would've exercised more creative freedom with the frontend instead of trying to emulate his, as I love designing graphics and frontends."
  },
  {
    id: 'cisess',
    company: 'CISESS/NOAA',
    navLabel: 'CISESS/NOAA',
    role: 'Data Science Intern',
    period: 'Jun 2023 – Jan 2024',
    location: 'College Park, MD',
    bullets: [
      'Developed Python/Unix data pipelines processing 2,000+ daily NOAA satellite files to generate climatology datasets.',
      'Automated global drought classification across a 6-year satellite dataset, corroborated with the US Drought Monitor.',
    ],
    learned: "My first internship! All I knew about Python before this was a for loop and a grade calculator project. This was when AI first emerged, so instead of LLMs embedded in IDEs, the best we could do was open ChatGPT in a sidebar window. I gained a lot of experience working with large datasets and becoming more proficient at using AI as a tool to increase efficiency, as well as writing abstracts and research papers. I also got to submit my abstract to the 104th Annual American Meteorological Society Conference, where I presented my work at a poster session!",
    overcame: "My fear of public speaking and presenting (something I still dislike but can cope with a lot better now). Combining presenting on Zoom to all the other interns and their mentors as well as to dozens of climate professionals at the conference definitely helped me gain some confidence in this aspect."
  },
]
