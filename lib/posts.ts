export interface PostSection {
  heading?: string
  text?: string[]
  code?: {
    language: string
    snippet: string
  }
  callout?: string
  list?: string[]
}

export interface Post {
  slug: string
  title: string
  date: string
  readTime: string
  tag: string
  excerpt: string
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: 'sometimes-all-you-need-is-someone-to-say-yes',
    title: 'Sometimes, All You Need Is Someone to Say Yes',
    date: '09.09.26',
    readTime: '4 min read',
    tag: 'Product Craft',
    excerpt: 'Why I built Chalo — on chai, spontaneity, and making software whose only goal is to help two people put their phones away.',
    sections: [
      {
        text: [
          'There are these tiny moments in life that don\'t really qualify as plans.',
          'You feel like having chai.',
          'You want to go for a walk.',
          'You suddenly feel like playing football.',
          'You want someone to sit with while you study.',
          'Nothing serious. Nothing that needs a calendar invite.',
          'Just a small thought:',
        ],
        callout: '“Anyone up for this?”',
      },
      {
        text: [
          'And most of the time, we don\'t ask.',
          'We think our friends are busy. We don\'t know who to call. We don\'t know where everyone is. And the moment passes.',
          'I kept thinking about those moments. What if they didn\'t have to?',
        ],
      },
      {
        heading: 'Maybe meeting people shouldn\'t be so complicated',
        text: [
          'The internet has made it incredibly easy to find almost anything.',
          'A song. A restaurant. A movie. A stranger who lives 10,000 kilometres away and happens to like the same obscure band.',
          'But finding someone nearby who simply wants to grab chai right now? Somehow, that\'s still surprisingly difficult.',
          'That\'s where Chalo started. Not as a social network. Not as a place to collect followers. Just as a little idea:',
        ],
        callout: 'What if you could say what you feel like doing, and find someone nearby who feels the same?',
      },
      {
        text: [
          'You want chai. Someone else wants chai.',
          'Maybe that\'s enough.',
        ],
      },
      {
        heading: 'The idea was simple',
        text: [
          'I wanted Chalo to turn small thoughts into real moments.',
          'You open the app. You see something happening nearby: a chai break, a study session, a football game, a photography walk, a late-night food plan.',
          'You join. And then you leave your phone in your pocket.',
          'That\'s probably my favorite part of the idea:',
        ],
        callout: 'The best version of Chalo is one you don\'t spend much time using. Because the app isn\'t supposed to become the destination. The person you meet is.',
      },
      {
        heading: 'So I tried to make it feel different',
        text: [
          'I didn\'t want Chalo to feel like another social media app asking for your attention. There is already enough of that.',
          'I wanted it to feel a little calmer. A little warmer. Like opening a door and finding that something is already happening on the other side.',
          'That influenced everything—from the colors and spacing to the way activities are presented and how quickly you can create one.',
          'I kept coming back to one question: Can this feel as easy as asking a friend? Because people don\'t think in forms and database fields. They think:',
        ],
        callout: '“Let\'s go for chai.”',
      },
      {
        text: [
          'The software has to do the complicated part. Not the person.',
        ],
      },
      {
        heading: 'Then I started building it',
        text: [
          'Once the idea felt real enough, I wanted to see if I could make it real enough to use.',
          'So I built Chalo from the ground up. The mobile experience uses React Native and Expo. The backend uses FastAPI and PostgreSQL.',
          'I built the onboarding and authentication flows, profiles, activity creation, discovery, joining, and meetup management.',
          'But somewhere along the way, I realized that building Chalo wasn\'t really about learning another framework. It was teaching me something I hadn\'t thought much about before:',
        ],
        callout: 'Good software often begins with understanding a feeling.',
      },
      {
        text: [
          '“I\'m bored.” “I\'m new here.” “I want to meet people.” “I don\'t want to go alone.”',
          'Those aren\'t technical requirements. But they are where the product begins.',
          'The job of the software is to quietly turn that feeling into an opportunity.',
        ],
      },
      {
        heading: 'And maybe that\'s enough',
        text: [
          'I don\'t know exactly what Chalo will become. Maybe it\'ll become something bigger. Maybe it\'ll stay a small experiment that taught me how I like to build. I\'m okay with either.',
          'Because I like the thought that somewhere, someday, someone might open Chalo and see:',
        ],
        callout: '“Chai in 20 minutes. 2 spots left.”',
      },
      {
        text: [
          'And instead of scrolling past it, they go. They meet someone they\'ve never met before. They talk about absolutely nothing important. They laugh. The chai gets cold.',
          'And for a little while, the internet has done something surprisingly useful. It helped two people put their phones away.',
        ],
        callout: 'That\'s why I built Chalo. Not to help people connect online. To give them a reason to connect offline.',
      },
      {
        text: [
          '— Toni',
        ],
      },
    ],
  },
]
