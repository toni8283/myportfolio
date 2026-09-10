export interface PostSection {
  heading?: string
  divider?: boolean
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
    "slug": "the-unseen-test-of-character",
    "title": "The Unseen Test of Character",
    "date": "10.09.26",
    "readTime": "12 min read",
    "tag": "Personal Note",
    "excerpt": "On integrity without an audience, the habits that quietly define us, and who we become when nobody is looking.",
    "sections": [
      {
        "text": [
          "Have you ever done something when nobody was watching and later wondered what it said about you?",
          "Maybe you returned the extra money a shopkeeper accidentally gave you.",
          "Maybe you stayed behind for someone who was struggling, even though you were already late.",
          "Maybe your friend got an opportunity you had wanted for months, and you smiled, congratulated them, and then felt a small, uncomfortable sting inside.",
          "Maybe you remembered that someone had an exam today, even though they had mentioned it only once.",
          "Maybe you saw an angry message on your screen, typed a reply, deleted it, and decided to answer later.",
          "None of these moments looks important.",
          "There is usually no audience.",
          "No one applauds.",
          "No music plays in the background.",
          "Most of the time, nobody even knows the choice you made.",
          "And yet, I have started to think that these are some of the moments in which personality becomes easiest to see.",
          "We spend an enormous amount of time introducing ourselves to other people.",
          "We try to look kind, confident, intelligent, mature, funny, generous, successful, interesting.",
          "Sometimes we do it consciously. More often, we do it without noticing.",
          "We know people are forming opinions of us, so some part of the mind starts managing the impression we leave behind.",
          "That is not necessarily dishonesty.",
          "It is simply part of being human.",
          "We live among other people, so we care what other people think.",
          "But there is another version of us that appears when the audience disappears.",
          "The person who says thank you to the waiter even after a long day.",
          "The person who gives credit to a colleague when taking all the credit would be easier.",
          "The person who helps someone who cannot return the favor.",
          "The person who quietly leaves when staying would only create more trouble.",
          "The person who feels jealous and still chooses not to become cruel.",
          "That version interests me more.",
          "Because when there is nothing to gain from looking good, what remains?"
        ]
      },
      {
        "heading": "When Nobody Important Is Looking",
        "text": [
          "Imagine you are at a restaurant with your friends.",
          "The food arrives late.",
          "The order is wrong.",
          "You are annoyed.",
          "But everyone is around you, so you stay polite.",
          "“Could you please change this?”",
          "“Thank you.”",
          "No problem.",
          "Now imagine almost the same situation when you are exhausted, already running late, and there is nobody around whose opinion matters to you.",
          "The irritation becomes stronger.",
          "Your voice changes.",
          "Your patience becomes thinner.",
          "Maybe you stay respectful anyway.",
          "Maybe you don't.",
          "That difference does not necessarily tell you whether you are a good or bad person. People have bad days. People lose their temper. People get overwhelmed.",
          "What it can reveal is something subtler: how much of your kindness depends on being seen.",
          "That is a difficult question because most of us prefer to believe that our good behavior comes entirely from within.",
          "Sometimes it does.",
          "Sometimes it is helped along by an audience.",
          "That is why the people with no power over us can reveal something important.",
          "A waiter cannot improve our social status.",
          "A cleaner cannot help our career.",
          "A stranger on the road cannot reward us for being patient.",
          "When we still treat them with dignity, the choice becomes more interesting.",
          "Kindness becomes less like performance and more like habit."
        ]
      },
      {
        "heading": "The Emotion You Did Not Choose",
        "text": [
          "There is an even more uncomfortable test.",
          "Watch what happens when someone gets what you wanted.",
          "A friend gets the internship.",
          "Someone you know gets the relationship you were hoping for.",
          "A colleague receives the praise you thought belonged to you.",
          "Your first reaction might be ugly.",
          "Jealousy.",
          "Disappointment.",
          "Comparison.",
          "A sudden thought you would never say aloud.",
          "Why them?",
          "Why not me?",
          "We often treat those emotions as evidence of bad character.",
          "I don't think they are that simple.",
          "Sometimes the first emotion arrives before morality has even had time to speak.",
          "You can be genuinely happy for your friend and still wish the opportunity had been yours.",
          "You can love someone and still feel threatened by their success.",
          "You can admire another person and compare yourself with them at the same time.",
          "Human beings are perfectly capable of holding contradictory feelings.",
          "The more revealing question comes afterward.",
          "What do you do with the emotion?",
          "Do you reduce their achievement because admitting that they deserved it hurts?",
          "Do you secretly hope they fail?",
          "Do you make a sarcastic comment?",
          "Or do you swallow your ego, congratulate them sincerely, and deal with your own disappointment somewhere private?",
          "That difference matters.",
          "You do not always choose the first feeling.",
          "You have more control over the second move.",
          "Maybe character is not the absence of ugly emotions.",
          "Maybe character is what happens after they arrive."
        ]
      },
      {
        "heading": "The Smallest Form of Care",
        "text": [
          "Then there are the moments that look almost too ordinary to count.",
          "Someone once tells you that they hate coriander.",
          "You probably forget it.",
          "Nothing about that sentence seems important enough to remember.",
          "Weeks later, you're ordering food together and the waiter asks whether they want coriander on top.",
          "“No coriander.”",
          "You remember.",
          "Maybe you even smile at yourself for remembering something so useless.",
          "And the other person may never realize that you remembered it at all.",
          "But that is exactly what makes it meaningful.",
          "You were paying attention when there was no reason to.",
          "You remembered something that gave you no advantage, required no effort, and had nothing to do with your own life.",
          "Sometimes care looks like that.",
          "Not remembering the important things because you have to.",
          "Remembering the completely unimportant things because, somewhere along the way, the person became important.",
          "We underestimate how intimate remembering can be.",
          "Attention is easy to overlook because it does not look dramatic.",
          "Nobody writes a movie scene about someone remembering your favorite drink.",
          "Nobody calls it a grand gesture when a friend asks whether you got home safely.",
          "And yet these tiny acts often decide who feels close to us.",
          "We do not only bond through intense conversations.",
          "We bond because another person keeps noticing us.",
          "A person remembers the story you told three weeks ago.",
          "They ask about the appointment you were nervous about.",
          "They remember that you hate a certain food.",
          "They notice when your mood sounds different.",
          "They know when you usually eat dinner.",
          "None of these things is extraordinary.",
          "Together, they create a very powerful message:",
          "You exist in my mind even when you are not in front of me.",
          "That is one of the quiet ways affection grows."
        ]
      },
      {
        "heading": "Stress Removes the Costume",
        "text": [
          "There is another useful place to observe personality: pressure.",
          "When everything is going well, most people can look reasonable.",
          "The real test often arrives when the preferred option disappears.",
          "You lose.",
          "You are corrected.",
          "You are ignored.",
          "Your plan fails.",
          "Someone else gets the credit.",
          "You are tired.",
          "You are embarrassed.",
          "Your patience is gone.",
          "What happens then?",
          "Some people become cruel.",
          "Some become defensive.",
          "Some blame whoever is nearby.",
          "Some make jokes.",
          "Some go silent.",
          "Some apologize.",
          "Some start again.",
          "Stress does not magically create an entirely new personality.",
          "Often, it reduces the energy we have available for controlling the one already there.",
          "When we are calm, we can pause.",
          "We can choose our words.",
          "We can be patient.",
          "When we are exhausted, hungry, frightened, or humiliated, those filters become weaker.",
          "That is why stressful situations can reveal our habits.",
          "Not perfectly.",
          "Not permanently.",
          "But enough to teach us something."
        ]
      },
      {
        "heading": "How We Behave When We Are Wrong",
        "text": [
          "One of the clearest personality tests may be the simplest one.",
          "You discover you were wrong.",
          "What happens next?",
          "Some people become more interested in protecting their image than correcting the mistake.",
          "They explain.",
          "They justify.",
          "They change the subject.",
          "They look for someone else to blame.",
          "Others say:",
          "“I was wrong.”",
          "The sentence sounds small.",
          "It is not.",
          "Admitting that you were wrong forces you to choose between truth and ego.",
          "And ego is surprisingly creative.",
          "It can turn a simple mistake into a courtroom.",
          "It can produce twenty explanations for something that needed one apology.",
          "It can convince you that admitting fault makes you weak.",
          "Sometimes it does the opposite.",
          "Sometimes saying “I was wrong” is one of the strongest things a person can do because it means the relationship with reality matters more than the relationship with your self-image."
        ]
      },
      {
        "heading": "What We Do for People Who Cannot Help Us",
        "text": [
          "There is a particular kind of kindness that interests me.",
          "Kindness toward people who have nothing to offer you.",
          "Helping someone when no one important will hear about it.",
          "Being polite to someone who cannot improve your life.",
          "Keeping a promise when breaking it would be easier and probably go unnoticed.",
          "Giving someone credit when taking it would make you look better.",
          "Returning something you could easily keep.",
          "These choices matter because there is no obvious reward attached to them.",
          "And yet, I would be careful about turning them into a perfect morality test.",
          "People are inconsistent.",
          "Someone can be selfish today and generous tomorrow.",
          "Someone can fail one test and pass another.",
          "One bad moment does not explain an entire personality.",
          "Neither does one heroic act.",
          "Personality is more like a pattern than a photograph.",
          "It is built through repetition.",
          "The things you repeatedly do become easier to do again.",
          "Eventually they stop feeling like decisions.",
          "They become habits.",
          "And habits become one of the clearest ways other people learn who we are."
        ]
      },
      {
        "heading": "The Things We Pretend Not to Care About",
        "text": [
          "There is another side of personality that is easier to hide.",
          "What hurts your ego?",
          "Being ignored?",
          "Being corrected?",
          "Being left out?",
          "Not getting credit?",
          "Watching someone else succeed?",
          "Realizing someone does not need you as much as you hoped?",
          "We often pretend certain things do not matter because admitting that they matter gives them power over us.",
          "So we say:",
          "“It's fine.”",
          "“I don't care.”",
          "“Whatever.”",
          "Sometimes we genuinely do not care.",
          "Sometimes we care very much.",
          "The interesting part is what happens next.",
          "Do we punish someone because our pride was injured?",
          "Do we withdraw affection to regain control?",
          "Do we become cold because being vulnerable suddenly feels embarrassing?",
          "Or do we admit, at least to ourselves, that something hurt?",
          "There is maturity in being able to name an emotion without immediately turning it into another person's problem.",
          "“I felt jealous.”",
          "“I felt left out.”",
          "“That embarrassed me.”",
          "“I wanted to be appreciated.”",
          "These sentences are uncomfortable because they remove the disguise.",
          "And perhaps knowing yourself begins with becoming less afraid of what you find there."
        ]
      },
      {
        "heading": "The People Who Remember",
        "text": [
          "Think about the people you feel safest with.",
          "They may not be the loudest people in your life.",
          "They may not be the funniest.",
          "They may not always know what to say.",
          "But perhaps they remember.",
          "They remember that your interview was today.",
          "They remember your mother's birthday.",
          "They remember that you were nervous about the appointment.",
          "They remember the story you told months ago.",
          "They remember how you take your coffee.",
          "They remember the thing you casually mentioned and assumed everyone would forget.",
          "Why does that feel so good?",
          "Because being remembered is a form of being held in someone's attention.",
          "It tells you that your life is not disappearing into the background of theirs.",
          "And perhaps this is one of the reasons people become close.",
          "Not because another person constantly entertains us.",
          "Because another person makes us feel visible."
        ]
      },
      {
        "heading": "The Most Uncomfortable Person to Study",
        "text": [
          "There is a problem with writing about personality.",
          "It is very easy to turn into a judge.",
          "We start categorizing other people.",
          "Kind.",
          "Selfish.",
          "Loyal.",
          "Fake.",
          "Jealous.",
          "Confident.",
          "Toxic.",
          "Good.",
          "Bad.",
          "But human beings are messier than labels.",
          "The person who is incredibly generous with money might be emotionally unavailable.",
          "The person who is socially awkward might be deeply loyal.",
          "The confident person might be terrified of rejection.",
          "The quiet person might notice everything.",
          "The jealous friend might still be the first person to stand beside you when your life falls apart.",
          "We make mistakes when we treat personality as a single trait.",
          "A person is not one behavior.",
          "A personality is a collection of tendencies, habits, values, fears, impulses, memories, and choices that interact differently under different circumstances.",
          "That is why judging someone from one moment is usually easy.",
          "Understanding them is harder.",
          "And then comes the most uncomfortable part.",
          "If we are honest, the same rule applies to us."
        ]
      },
      {
        "heading": "You Are Also Being Revealed",
        "text": [
          "It is easy to read an article like this and think about other people.",
          "The rude manager.",
          "The jealous friend.",
          "The generous stranger.",
          "The selfish partner.",
          "The person who always needs to be praised.",
          "But what if we turn the question around?",
          "How do I behave when nobody can reward me?",
          "How do I react when someone I love succeeds?",
          "Can I admit when I am wrong?",
          "Do I remember what matters to the people close to me?",
          "How do I speak to people who cannot do anything for me?",
          "What happens to my kindness when I am tired?",
          "What happens to me when my ego gets hurt?",
          "Do I become cruel when I feel rejected?",
          "Do I withdraw affection when I want someone to chase me?",
          "Do I treat people differently when I think they have become less useful to me?",
          "Those questions are much harder than “Am I a good person?”",
          "Because they ask for examples.",
          "And examples are difficult to argue with."
        ]
      },
      {
        "heading": "Maybe Character Is Smaller Than We Think",
        "text": [
          "We tend to look for character in dramatic moments.",
          "The heroic decision.",
          "The sacrifice.",
          "The public speech.",
          "The moment someone stands up and does the right thing.",
          "But perhaps personality is being written somewhere much quieter.",
          "In the way you speak to someone who cannot help you.",
          "In whether you return the extra change.",
          "In whether you remember.",
          "In how you react when your friend succeeds.",
          "In what you do after your ego gets hurt.",
          "In whether you apologize without adding an excuse.",
          "In the message you choose not to send when you are angry.",
          "In the kindness that nobody applauds.",
          "These moments are easy to dismiss because they are small.",
          "But a person can go years without facing a dramatic moral crisis.",
          "They cannot go a day without making dozens of tiny choices.",
          "Maybe that is why the little things matter so much.",
          "A life is not built from its most dramatic five minutes.",
          "It is built from thousands of ordinary moments that slowly become habits.",
          "And habits, repeated long enough, begin to look like character."
        ]
      },
      {
        "heading": "Who Are You Without the Audience?",
        "text": [
          "We spend so much time deciding how we want to be perceived.",
          "We learn what confidence looks like.",
          "What kindness sounds like.",
          "What success looks like.",
          "What a good person is supposed to say.",
          "There is nothing wrong with that.",
          "But there is another question underneath all of it.",
          "What remains when there is nothing to perform?",
          "When nobody important is watching.",
          "When there is no reward.",
          "When there is no punishment.",
          "When nobody will ever know.",
          "Will you still return the money?",
          "Will you still give the credit?",
          "Will you still help?",
          "Will you still congratulate your friend when part of you wishes you were in their place?",
          "Will you still be gentle when you have every excuse to be harsh?",
          "Maybe we never become completely free of selfishness, jealousy, pride, insecurity, or anger.",
          "Maybe the point was never to become a person who feels nothing ugly.",
          "Maybe the point is to become a person who can feel something ugly and still choose what kind of person they want to be.",
          "The world sees our performances.",
          "The people closest to us see our habits.",
          "But the smallest moments, the ones we think nobody noticed, may be where we reveal ourselves most clearly.",
          "And perhaps there is one final irony in all of this.",
          "We spend our lives wondering who is watching us.",
          "Maybe the more important question is:"
        ],
        "callout": "Who are we becoming while we think nobody is?"
      },
      {
        "text": [
          "- Toni"
        ]
      }
    ]
  },
  {
    slug: 'sometimes-all-you-need-is-someone-to-say-yes',
    title: 'Sometimes, All You Need Is Someone to Say Yes',
    date: '09.09.26',
    readTime: '4 min read',
    tag: 'Product Craft',
    excerpt: 'Why I built Chalo: on chai, spontaneity, and making software whose only goal is to help two people put their phones away.',
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
          'That influenced everything: from the colors and spacing to the way activities are presented and how quickly you can create one.',
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
          '- Toni',
        ],
      },
    ],
  },
]
