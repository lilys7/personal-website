export type Hobby = {
  id: string
  title: string
  subtitle?: string
  // add your writeup for this hobby here
  info: string
}

export const HOBBIES: Hobby[] = [
  {
    id: 'music',
    title: 'Music',
    subtitle: 'I love music! I listen to all different genres, from rap to indie to classical.I play the piano and guitar and I also like to sing for fun! It\'s my life goal to go to as many live music concerts as possible, and my favorite concerts so far have been Bruno Mars and Daniel Caesar.',
    info: '',
  },
  {
    id: 'fitness',
    title: 'Fitness',
    subtitle: 'Gymming with my friends is something I look forward to every week. Whether it\'s lifting, cardio, pilates, barre class, or playing volleyball (which I suck at), I always have a great time.',
    info: '',
  },
  {
    id: 'art',
    title: 'Art',
    subtitle: 'I\'ve grown up doing all sorts of art, from painting to drawing to crocheting to sewing. I love to create and express myself through art, and I\'m always looking for new projects to work on. ',
    info: '',
  },
  {
    id: 'traveling',
    title: 'Traveling',
    subtitle: 'My favorite part of traveling is definitely the food. I love experiencing new cuisines and emersing myself in new cultures. I will eat anything and everything. Current bucket list includes hiking in Switzerland and an all inclusive trip to Mexico.',
    info: '',
  },
  {
    id: 'reading',
    title: 'Reading',
    subtitle: 'My reading list is always growing and the genres are always changing. Currently I\'m in my classics phase to expand my knowlege of history and literature. But I also love self-help books and thriller/suspense novels. My favorite recent reads are Rebecca by Daphne du Maurier and East of Eden by John Steinbeck (lives up to the hype). I always ask for more book recs so please share!',
    info: '',
  },
  {
    id: 'twenty-four',
    title: 'Playing 24',
    subtitle: 'If you are ever stuck in a traffic jam or waiting at a red light, look at all the license plates around you and see if you can make 24 with the numbers on them. I\'ve been playing this game since middle school and it\'s a great way to pass the time. Challenge me to 24 anytime I\'m always down 😈',
    info: '',
  },
]
