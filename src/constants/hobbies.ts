import musicGuitar from '@/assets/hobbies/music/guitar.jpg'
import musicBrunoMars from '@/assets/hobbies/music/bruno-mars.jpg'
import musicDanielCaesar from '@/assets/hobbies/music/daniel-caesar.jpg'
import fitnessCheer from '@/assets/hobbies/fitness/cheer.jpg'
import fitnessFriends from '@/assets/hobbies/fitness/friends.jpg'
import fitnessPilates from '@/assets/hobbies/fitness/pilates.jpg'
import travelPlate from '@/assets/hobbies/traveling/plate.jpg'
import travelSandwiches from '@/assets/hobbies/traveling/sandwiches.jpg'
import travelSteak from '@/assets/hobbies/traveling/steak.jpg'
import travelFountain from '@/assets/hobbies/traveling/fountain.jpg'
import travelDango from '@/assets/hobbies/traveling/dango.jpg'
import travelTemple from '@/assets/hobbies/traveling/temple.jpg'
import travelKonbini from '@/assets/hobbies/traveling/konbini.jpg'
import twentyFourBox from '@/assets/hobbies/twenty-four/box.webp'
import twentyFourCard from '@/assets/hobbies/twenty-four/card.png'
import cakeCherryKiwi from '@/assets/hobbies/cake/cherry-kiwi.jpg'
import cakeHappyBirthday from '@/assets/hobbies/cake/happy-birthday.jpg'
import cakeStrawberryRing from '@/assets/hobbies/cake/strawberry-ring.jpg'
import cakeHeartCandle from '@/assets/hobbies/cake/heart-candle.jpg'
import readingRebecca from '@/assets/hobbies/reading/rebecca.jpg'
import readingHarryPotter from '@/assets/hobbies/reading/harry-potter.jpg'
import readingEastOfEden from '@/assets/hobbies/reading/east-of-eden.jpg'
import hikingDelicateArch from '@/assets/hobbies/hiking/delicate-arch.png'
import hikingBryce from '@/assets/hobbies/hiking/bryce.jpg'
import hikingTrail from '@/assets/hobbies/hiking/trail.jpg'
import hikingRiver from '@/assets/hobbies/hiking/river.jpg'
import artSewingMachine from '@/assets/hobbies/art/sewing-machine.jpg'
import artYarn from '@/assets/hobbies/art/yarn.jpg'

export type Hobby = {
  id: string
  title: string
  subtitle?: string
  // add your writeup for this hobby here
  images?: string[],
  info: string
  
}

export const HOBBIES: Hobby[] = [
  {
    id: 'music',
    title: 'Music',
    subtitle: 'I love music! I listen to all different genres, from rap to indie to classical.I play the piano and guitar and I also like to sing for fun! It\'s my life goal to go to as many live music concerts as possible, and my favorite concerts so far have been Bruno Mars and Daniel Caesar.',
    images: [musicGuitar, musicBrunoMars, musicDanielCaesar],
    info: ''
  },
  {
    id: 'fitness',
    title: 'Fitness',
    subtitle: 'Gymming with my friends is something I look forward to every week. Whether it\'s lifting, cardio, pilates, barre class, or playing volleyball (which I suck at), I always have a great time.',
    images: [fitnessCheer, fitnessFriends, fitnessPilates],
    info: ''
  },
  {
    id: 'art',
    title: 'Art',
    subtitle: 'I\'ve grown up doing all sorts of art, from painting to drawing to crocheting to sewing. I love to create and express myself through art, and I\'m always looking for new projects to work on. ',
    images: [artSewingMachine, artYarn],
    info: '',
  },
  {
    id: 'traveling',
    title: 'Traveling',
    subtitle: 'My favorite part of traveling is definitely the food. I love experiencing new cuisines and emersing myself in new cultures. I will eat anything and everything. Current bucket list includes hiking in Switzerland and an all inclusive trip to Mexico.',
    images: [
      travelPlate,
      travelSandwiches,
      travelSteak,
      travelFountain,
      travelDango,
      travelTemple,
      travelKonbini,
    ],
    info: ''
  },
  {
    id: 'reading',
    title: 'Reading',
    subtitle: 'My reading list is always growing and the genres are always changing. Currently I\'m in my classics phase to expand my knowlege of history and literature. But I also love self-help books and thriller/suspense novels. My favorite recent reads are Rebecca by Daphne du Maurier and East of Eden by John Steinbeck (lives up to the hype). I always ask for more book recs so please share!',
    images: [readingRebecca, readingEastOfEden, readingHarryPotter],
    info: 'LOVEE HARRY POTTER'
  },
  {
    id: 'twenty-four',
    title: 'Playing 24',
    subtitle: 'If you are ever stuck in a traffic jam or waiting at a red light, look at all the license plates around you and see if you can make 24 with the numbers on them. I\'ve been playing this game since middle school and it\'s a great way to pass the time. Challenge me to 24 anytime I\'m always down 😈',
    images: [twentyFourBox, twentyFourCard],
    info: ''
  },
  {
    id: 'cake',
    title: 'Decorating Cakes',
    subtitle: 'A family tradition of mine is baking a chiffon cake and decorating it with heavy whipping cream and fruit for every birthday. I lost all my piping tips and don\'t have proper tools so it\'s not the most professional but I love designing the cakes however I want and eating half the frosting whilst doing it.',
    images: [cakeCherryKiwi, cakeHappyBirthday, cakeStrawberryRing, cakeHeartCandle],
    info: ''
  },
  {
    id: 'hiking',
    title: 'Hiking',
    subtitle: 'Will always be down to go on a day long hike with my family or friends! I really want to branch out and try more hikes in different countries and states, but I\'ve been to several in the DMV area as well as Utah and Arizona!',
    images: [hikingDelicateArch, hikingBryce, hikingTrail, hikingRiver],
    info: ''
  },
]
