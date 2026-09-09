'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Download, ExternalLink, FileText, GitBranch, Home, Info, Mail, Menu, Paperclip, PenLine, Phone, Send, X } from 'lucide-react'
import IsometricDotLaptop from '@/components/IsometricDotLaptop'
import WritingPenAnimation from '@/components/WritingPenAnimation'
import { posts } from '@/lib/posts'

const greetings = [
  { word: 'Hello', language: 'English' },
  { word: 'नमस्ते', language: 'Hindi' },
  { word: 'নমস্কার', language: 'Bengali' },
  { word: 'నమస్కారం', language: 'Telugu' },
  { word: 'வணக்கம்', language: 'Tamil' },
  { word: 'नमस्कार', language: 'Marathi' },
  { word: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', language: 'Punjabi' },
  { word: 'こんにちは', language: 'Japanese' },
  { word: 'Bonjour', language: 'French' },
  { word: 'Hola', language: 'Spanish' },
]

const projects = [
  {
    slug: 'chalo',
    name: 'Chalo/app',
    type: 'Mobile · Full-Stack',
    year: '2025',
    summary: 'A location-aware social discovery platform that turns spontaneous plans into real-world human connections in real time.',
    body: 'Chalo is engineered to make spontaneous social connections effortless. I built the cross-platform mobile client in React Native and Expo with fluid gestures and an editorial iOS-style aesthetic, backed by a high-performance FastAPI service. The architecture incorporates phone OTP authentication via SMS gateway, stateless JWT sessions, connection-pooled PostgreSQL via asyncpg and SQLAlchemy, and modular Docker microservices. Currently in active development: geospatial proximity indexing, WebSocket event subscriptions, and algorithmic meetup recommendations.',
    caseStudy: {
      problem: 'Spontaneous social planning is ruined by decision friction, endless group chat latency, and awkward location sharing while moving through transit.',
      strategy: 'Engineered load-bearing micro-copy and single-tap state transitions for distracted, one-handed mobile use. Designed the full design system in Figma before translating into React Native and FastAPI microservices.',
      rejected: 'Rejected a 4-step calendar scheduling wizard and multi-tier permission modal. Field tests showed 40%+ drop-off; replaced with an instantaneous "Heading Out" presence toggle.',
      shipped: 'Reduced task completion time to under 4 seconds. Deployed with sub-100ms API response latency on containerized FastAPI services.',
    },
    tech: 'React Native · Expo · FastAPI · PostgreSQL · Async SQLAlchemy · asyncpg · Docker · JWT · Pydantic',
    github: 'https://github.com/toni8283/chaloapp_IN',
    figma: 'https://www.figma.com/design/QbN5fZs8MJZ6jRkkZIBAd7/chalo?t=TDYkoz5d11xkibGa-1',
    live: null,
  },
  {
    slug: 'cinema-ai',
    name: 'CineInsight/AI',
    type: 'AI · Web App',
    year: '2026',
    summary: 'An AI-powered cinema intelligence platform orchestrating film metadata and Google Gemini LLM sentiment classification.',
    body: 'CineInsight is an AI-powered film analytics platform that performs automated sentiment intelligence across cinema titles. Built on Next.js 16 App Router with server-side rendering (SSR), it orchestrates real-time external data pipelines between the OMDb metadata catalog and Google Gemini LLM to classify critical reviews into structured sentiment insights. Features random seed generation for dynamic recommendations, strict end-to-end TypeScript type safety, and an atmospheric cinematic dark theme built with Tailwind CSS 4. Deployed and edge-optimized on Vercel.',
    caseStudy: {
      problem: 'Film enthusiasts are overwhelmed by generic star ratings and long, verbose reviews that fail to communicate tone, emotional intensity, or cinematic pacing.',
      strategy: 'Transformed unstructured Gemini LLM outputs into structured sentiment teardowns, concise verdict badges, and thematic tags ("Atmospheric", "Slow-Burn", "Subversive").',
      rejected: 'Rejected unconstrained conversational AI chat summaries. Users skimmed past long text walls; enforcing strict JSON schema outputs and concise tag hierarchy doubled engagement.',
      shipped: 'Achieved sub-3-second movie vibe assessment and 2.4x higher recommendation click-through rate. Deployed edge-optimized on Vercel.',
    },
    tech: 'Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Google Gemini API · OMDb API · SSR · Vercel',
    github: 'https://github.com/toni8283/CINEMA_AI',
    figma: 'https://www.figma.com/design/xUaQijMBHOKkQkxv1qOCTl/Untitled?node-id=0-1&t=WjQmkY98ARI0mGYA-1',
    live: 'https://cinema-ai-jxj8.vercel.app/',
  },
  {
    slug: 'vc-scout',
    name: 'VC Scout/AI',
    type: 'FinTech · Full-Stack',
    year: '2025',
    summary: 'A venture capital diligence interface to discover, filter, and analyze startups with live AI website data enrichment.',
    body: 'A production-grade deal-sourcing and venture diligence interface engineered to accelerate startup evaluation. The platform features sub-millisecond client-side indexing across startup portfolios, multi-facet filtering (sector, funding round, valuation stage), custom target list curation with CSV serialization, and saved query persistence. Architected a live on-demand website enrichment engine via Next.js server-side API routes, isolating sensitive scraper credentials and transforming unstructured company data into structured diligence metrics. State management is powered by a normalized, persistent Zustand store with zero layout shifts. Deployed live on Vercel.',
    caseStudy: {
      problem: 'Venture analysts spend hours reading unstructured founder pitches where vocabulary does not align with standard investment taxonomy.',
      strategy: 'Built a deterministic diligence interface over probabilistic data: paired semantic company vector indexing with explicit taxonomy facets, valuation metrics, and live enrichment summaries.',
      rejected: 'Rejected an open-ended conversational chatbot. Early testing proved analysts hated waiting for streaming chat text when comparing 50 startups; direct card grids with semantic filters delivered 10x faster insights.',
      shipped: 'Decreased startup diligence research time by 70%. Built from problem definition to deployed Vercel application without external designers.',
    },
    tech: 'Next.js 14 · React 18 · TypeScript · Tailwind CSS · Zustand · Server APIs · Web Scraping · Vercel',
    github: 'https://github.com/toni8283/VC_intelligence_interface',
    figma: null,
    live: 'https://vc-intelligence-interface-gamma.vercel.app/',
  },
  {
    slug: 'wyrm',
    name: 'Wyrm Store',
    type: 'E-Commerce · Full-Stack',
    year: '2024',
    summary: 'A full-stack e-commerce system with stateless JWT auth, role-based admin controls, cart transactions, and revenue analytics.',
    body: 'Wyrm Store is a full-stack e-commerce application engineered with a decoupled RESTful architecture. The Node.js and Express backend implements secure JWT authentication with bcrypt password hashing, granular role-based access control (RBAC) separating customer and administrative permissions, and MongoDB schema designs for transactional order lifecycles. Features include automated Cloudinary image ingestion pipelines, transactional cart checkout workflows, and an administrative dashboard delivering rolling 30-day sales analytics and inventory CRUD.',
    tech: 'React (Vite) · Node.js · Express.js · MongoDB · Mongoose · JWT · Cloudinary · RESTful APIs',
    github: 'https://github.com/toni8283/eCommerce_website',
    figma: null,
    live: null,
  },
  {
    slug: 'http-server',
    name: 'HTTP Server/C',
    type: 'Systems · Low-level',
    year: '2024',
    summary: 'A concurrent multithreaded HTTP server written from first principles in ANSI C using raw POSIX sockets and pthreads.',
    body: 'Engineered from first principles in ANSI C to master low-level systems programming, network socket communication, and concurrent client handling without third-party frameworks. Creates IPv4 TCP stream sockets (AF_INET, SOCK_STREAM), binds and listens on port 8080, and handles concurrent client connections via POSIX threads (pthreads). Implements manual zero-copy HTTP/1.1 request buffer parsing, static file I/O from disk, dynamic MIME type detection, RFC-compliant response header generation, and robust 404/500 status handling. Configured with SO_REUSEADDR for rapid socket recycling and built with standard GNU Make.',
    tech: 'ANSI C · POSIX Sockets · pthreads · Systems Programming · Concurrency · HTTP/1.1 · Linux · GNU Make',
    github: 'https://github.com/toni8283/Multithreaded-HTTP-Server',
    figma: null,
    live: null,
  },
]

const education = [
  {
    year: '2021',
    institution: 'Denobili School F.R.I, Dighwadih',
    degree: '10th · ICSE Board',
    score: '85.00%',
  },
  {
    year: '2023',
    institution: 'Tata DAV School, Jamadoba (DHN)',
    degree: '12th · CBSE Board',
    score: '83.30%',
  },
  {
    year: '2023 - present',
    institution: 'IIT Kharagpur',
    degree: 'Dual Degree - Ocean Engineering & Naval Architecture',
    score: 'CPI 7.4',
  },
  
  
]

type Section = 'home' | 'about' | 'projects' | 'writing' | 'contact'
type View = Section | `project:${string}` | `post:${string}`

function getView(hash: string): View {
  const value = hash.replace(/^#\/?/, '')
  if (value.startsWith('project-')) return `project:${value.slice(8)}`
  if (value.startsWith('post-')) return `post:${value.slice(5)}`
  return (['home', 'about', 'projects', 'writing', 'contact'].includes(value) ? value : 'home') as Section
}

function safeHashForView(view: View) {
  if (view.startsWith('project:')) return `project-${view.slice(8)}`
  if (view.startsWith('post:')) return `post-${view.slice(5)}`
  return view
}

function Navigation({ active, view, onNavigate, onClose }: { active: Section; view: View; onNavigate: (destination: Section | View) => void; onClose?: () => void }) {
  const links: { label: string; destination: Section | View }[] =
    active === 'projects'
      ? [
          { label: 'Projects',    destination: 'projects'           },
          { label: 'Chalo app',   destination: 'project:chalo'      },
          { label: 'CineInsight', destination: 'project:cinema-ai'  },
          { label: 'VC Scout',    destination: 'project:vc-scout'   },
          { label: 'Wyrm Store',  destination: 'project:wyrm'       },
          { label: 'HTTP Server', destination: 'project:http-server' },
        ]
      : active === 'writing'
      ? []
      : [
          { label: 'Home',    destination: 'home'    },
          { label: 'About',   destination: 'about'   },
          { label: 'Contact', destination: 'contact' },
        ]

  return (
    <nav className="top-nav" aria-label="Primary navigation">
      {links.map(({ label, destination }) => {
        const isActive = destination === view
        return (
          <button
            key={destination}
            className={isActive ? 'active' : ''}
            onClick={() => { onNavigate(destination); onClose?.() }}
          >
            {isActive ? <>{label}<span className="nav-mark">::</span></> : label}
          </button>
        )
      })}
    </nav>
  )
}

function SideRail({ active, onNavigate }: { active: Section; onNavigate: (section: Section) => void }) {
  const links: { section: Section; label: string; icon: typeof Home }[] = [
    { section: 'home', label: 'Home', icon: Home },
    { section: 'projects', label: 'Work', icon: BriefcaseBusiness },
    { section: 'writing', label: 'Writing', icon: PenLine },
  ]
  return (
    <aside className="side-rail" aria-label="Section navigation">
      {links.map(({ section, label, icon: Icon }) => {
        const isItemActive =
          section === 'home'
            ? active === 'home' || active === 'about' || active === 'contact'
            : active === section
        return (
          <button
            className={isItemActive ? 'active' : ''}
            key={section}
            onClick={() => onNavigate(section)}
            aria-label={label}
            aria-current={isItemActive ? 'page' : undefined}
          >
            <Icon size={17} strokeWidth={1.5} />
          </button>
        )
      })}
      <a
        className="side-rail-download"
        href="/toni_cv.pdf"
        download
        aria-label="Download CV"
        title="Download CV"
      >
        <Download size={17} strokeWidth={1.5} />
      </a>
    </aside>

  )
}

function FigmaIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}

function LinkOrb({
  href,
  label,
  onClick,
  children,
}: {
  href?: string | null
  label: string
  onClick?: () => void
  children: React.ReactNode
}) {
  if (href) {
    return (
      <a className="link-orb" href={href} target="_blank" rel="noreferrer" aria-label={label}>
        {children}<span>{label}</span>
      </a>
    )
  }
  return (
    <button type="button" className="link-orb" onClick={onClick} aria-label={label}>
      {children}<span>{label}</span>
    </button>
  )
}

function EduTimeline() {
  return (
    <div className="edu-timeline">
      {education.map((item, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-dot" />
          <div className="edu-body">
            <span className="edu-year">{item.year}</span>
            <strong className="edu-inst">{item.institution}</strong>
            <span className="edu-degree">{item.degree}</span>
            <span className="edu-score">{item.score}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isGreetingExiting, setIsGreetingExiting] = useState(false)
  const [noLiveNotice, setNoLiveNotice] = useState(false)
  const [noLiveExiting, setNoLiveExiting] = useState(false)
  const noticeTimerRef = useRef<{ hold?: ReturnType<typeof setTimeout>; exit?: ReturnType<typeof setTimeout> }>({})
  const [menuOpen, setMenuOpen] = useState(false)
  const [view, setView] = useState<View>('home')
  const [formSent, setFormSent] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const triggerNoLiveNotice = () => {
    if (noticeTimerRef.current.hold) clearTimeout(noticeTimerRef.current.hold)
    if (noticeTimerRef.current.exit) clearTimeout(noticeTimerRef.current.exit)

    setNoLiveExiting(false)
    setNoLiveNotice(true)

    noticeTimerRef.current.hold = setTimeout(() => {
      setNoLiveExiting(true)
      noticeTimerRef.current.exit = setTimeout(() => {
        setNoLiveNotice(false)
        setNoLiveExiting(false)
      }, 650)
    }, 3200)
  }

  useEffect(() => {
    return () => {
      if (noticeTimerRef.current.hold) clearTimeout(noticeTimerRef.current.hold)
      if (noticeTimerRef.current.exit) clearTimeout(noticeTimerRef.current.exit)
    }
  }, [])

  useEffect(() => {
    const initialView = getView(window.location.hash)
    const normalizedHash = safeHashForView(initialView)
    if (window.location.hash !== `#${normalizedHash}`) window.history.replaceState({}, '', `#${normalizedHash}`)
    setView(initialView)
    const onHash = () => {
      const nextView = getView(window.location.hash)
      const nextHash = safeHashForView(nextView)
      if (window.location.hash !== `#${nextHash}`) window.history.replaceState({}, '', `#${nextHash}`)
      setView(nextView)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const interval = window.setInterval(() => {
      setIsGreetingExiting(true)
      timeoutId = setTimeout(() => {
        setGreetingIndex((current) => (current + 1) % greetings.length)
        setIsGreetingExiting(false)
      }, 700)
    }, 3800)

    return () => {
      window.clearInterval(interval)
      clearTimeout(timeoutId)
    }
  }, [])

  const navigate = (next: View) => { setMenuOpen(false); window.history.pushState({}, '', `#${safeHashForView(next)}`); setView(next) }
  const active = (view.includes(':') ? (view.startsWith('project:') ? 'projects' : 'writing') : view) as Section
  const project = view.startsWith('project:') ? projects.find((item) => item.slug === view.slice(8)) : undefined
  const post = view.startsWith('post:')
    ? (posts.find((item) => item.slug === view.slice(5)) || posts[Number(view.slice(5))])
    : undefined
  const greeting = greetings[greetingIndex]

  const section = useMemo(() => {
    if (project) return (
      <section className="project-detail section-frame content-section">
        <div className="project-detail-layout">
          <div className="project-detail-main">
            <button className="back-link" onClick={() => navigate('projects')}><ArrowLeft size={16} /> back to work</button>
            <div className="detail-kicker">Project / {project.year}</div>
            <h2>
              <span>{project.name.split('/')[0]}</span>{' '}
              <em>{project.name.includes('/') ? `/${project.name.split('/')[1]}` : 'case study'}</em>
            </h2>
            <p className="detail-summary">{project.summary}</p>
            <div className="project-detail-body">
              <p>{project.body}</p>
              {'caseStudy' in project && project.caseStudy && (
                <div className="project-doc-sections">
                  <div className="doc-section">
                    <h3>The Problem</h3>
                    <p>{project.caseStudy.problem}</p>
                  </div>
                  <div className="doc-section">
                    <h3>Content &amp; UX Strategy</h3>
                    <p>{project.caseStudy.strategy}</p>
                  </div>
                  <div className="doc-section">
                    <h3>What Was Rejected &amp; Trade-offs</h3>
                    <p>{project.caseStudy.rejected}</p>
                  </div>
                  <div className="doc-section">
                    <h3>Shipped Outcome</h3>
                    <p>{project.caseStudy.shipped}</p>
                  </div>
                </div>
              )}
              <p className="detail-tech"><span>Built with</span>{project.tech}</p>
            </div>
          </div>

          <aside className="project-detail-sidebar">
            <div className="project-orbs">
              <LinkOrb href={project.github} label="GitHub"><GitBranch size={24} /></LinkOrb>
              {project.figma && (
                <LinkOrb href={project.figma} label="Figma"><FigmaIcon size={21} /></LinkOrb>
              )}
              <LinkOrb
                href={project.live}
                label="Live demo"
                onClick={!project.live ? triggerNoLiveNotice : undefined}
              >
                <ExternalLink size={23} />
              </LinkOrb>
            </div>
            {noLiveNotice && (
              <div className={`no-live-toast ${noLiveExiting ? 'exiting' : 'entering'}`}>
                <Info size={16} className="no-live-icon" />
                <span>Sorry, currently we do not have a live preview for this project.</span>
              </div>
            )}
          </aside>
        </div>
      </section>
    )



    if (post) return (
      <article className="post-detail section-frame content-section">
        <button className="back-link" onClick={() => navigate('writing')}><ArrowLeft size={16} /> back to writing</button>
        <div className="detail-kicker">Personal notes / {post.date} · {post.readTime} · {post.tag}</div>
        <h2>{post.title}</h2>
        <p className="detail-summary">{post.excerpt}</p>
        <div className="post-body">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="post-section">
              {sec.heading && <h3>{sec.heading}</h3>}
              {sec.text?.map((para, pIdx) => (
                <p key={pIdx} className={para.startsWith('—') ? 'post-signoff' : undefined}>{para}</p>
              ))}
              {sec.callout && (
                <blockquote>
                  <p>{sec.callout}</p>
                </blockquote>
              )}
              {sec.code && (
                <div className="post-code-block">
                  <div className="post-code-header">
                    <span>{sec.code.language}</span>
                  </div>
                  <pre>
                    <code>{sec.code.snippet}</code>
                  </pre>
                </div>
              )}
              {sec.list && (
                <ul className="post-list">
                  {sec.list.map((li, lIdx) => (
                    <li key={lIdx}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </article>
    )

    if (view === 'home') return (
      <section className="hero section-frame" aria-labelledby="home-title">
        <div className="hero-greeting">
          <div className={`greeting-unit ${isGreetingExiting ? 'exiting' : 'entering'}`} key={greetingIndex}>
            <span
              className="greeting-word"
              style={{
                fontSize: greeting.word.length > 7 ? 'clamp(2.5rem, 5.8vw, 5.8rem)' : undefined,
              }}
            >
              {greeting.word}
            </span>
            <span className="greeting-caption">{greeting.language}</span>
          </div>
        </div>
        <div className="hero-intro">
          <p className="eyebrow">design engineer <span>·</span> product &amp; content systems</p>
          <h1 id="home-title">I&apos;m <em>Toni</em><br />Blair<span className="period">.</span></h1>
          <p className="hero-note">I shape products made of language,<br className="desktop-only" /> and build them from Figma to shipped code.</p>
        </div>
        <button onClick={() => navigate('about')} className="scroll-cue">
          <span>Explore about</span><ArrowUpRight size={16} />
        </button>
      </section>
    )

    if (view === 'about') return (
      <section className="about section-frame content-section">
        <div className="section-label">About me <span>01</span></div>
        <div className="about-copy">
          <p className="section-lead">
            I&apos;m Toni Blair, an Ocean Engineering student at IIT Kharagpur graduating in 2028 who somehow ended up falling deep into the world of software, AI, and design.
          </p>
          <p>
            I&apos;m naturally curious about how things work. When I come across something interesting, I rarely stop at knowing <em>what</em> it does — I want to understand <em>why</em> it works, what&apos;s happening underneath it, and how I could build it myself. That curiosity has taken me from exploring Linux and operating systems to building full-stack applications, experimenting with AI, and designing digital products.
          </p>

          <h3>What I work with</h3>
          <p>
            I work across <strong>software development, AI, and product design</strong>. I&apos;m building my skills in full-stack development, backend systems, databases, APIs, Git, and Linux, while exploring AI/LLM applications and generative technology. On the creative side, I enjoy UI/UX, visual design, branding, and turning ideas into interfaces that actually feel like products.
          </p>
          <p>
            I&apos;m also continuing to explore the engineering side of things through my Ocean Engineering background, particularly systems, underwater technology, and the way complex physical systems work.
          </p>

          <h3>How I think</h3>
          <p>
            I don&apos;t like learning technology just by memorizing how to use it.
          </p>
          <p>
            I prefer to <strong>build something, break it, figure out why it broke, understand the underlying system, and then build it better.</strong>
          </p>
          <p>
            That&apos;s probably why my projects tend to jump between different areas. One project might teach me databases and backend architecture, another might take me into Linux internals, while another lets me experiment with branding and visual design.
          </p>
          <p>
            For me, the project is often the excuse to go down the rabbit hole.
          </p>

          <h3>What I&apos;m building toward</h3>
          <p>
            I&apos;m interested in the space where <strong>engineering, software, AI, and design overlap</strong>.
          </p>
          <p>
            I want to become someone who can take an idea from a rough thought, understand the problem behind it, design the experience, engineer the system, and turn it into something real.
          </p>
          <p>
            I&apos;m still learning, and I don&apos;t want to pretend otherwise. I&apos;d rather show the process — the things I&apos;m building, the things I&apos;m breaking, and the things I&apos;m learning along the way.
          </p>

          <div className="about-mantra">
            Build → Break → Understand → Rebuild.
          </div>
        </div>

        <div className="about-edu">
          <div className="section-label" style={{ marginBottom: '32px' }}>Education <span>—</span></div>
          <EduTimeline />
        </div>
      </section>
    )

    if (view === 'projects') return (
      <section className="projects section-frame content-section">
        <div className="section-label">My projects <span>02</span></div>
        <div className="projects-showcase">
          <div className="projects-intro-col">
            <h2>Selected<br /><em>work.</em></h2>
            <p>Choose a project from the top navigation to explore its story, architecture, tools, and live links.</p>
          </div>
          <div className="projects-visual-col">
            <IsometricDotLaptop />
          </div>
        </div>
      </section>
    )


    if (view === 'writing') return (
      <section className="writing section-frame content-section">
        <div className="section-label">Writing <span>03</span></div>
        <div className="writing-intro">
          <div className="writing-heading-row">
            <h2>Personal <em>notes.</em></h2>
            <div className="writing-anim-wrap">
              <WritingPenAnimation />
            </div>
          </div>
          <p className="writing-subtitle">Essays and fragments about building, learning, and the systems behind the screen.</p>
        </div>
        <div className="notes">
          {posts.map((item) => (
            <button onClick={() => navigate(`post:${item.slug}`)} key={item.slug}>
              <span>
                <small>
                  <span>{item.date}</span>
                  <span className="meta-sep">/</span>
                  <span>{item.readTime}</span>
                  <span className="meta-sep">/</span>
                  <span className="note-tag">{item.tag}</span>
                </small>
                {item.title}
              </span>
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
        <button className="upload-note" onClick={() => navigate('contact')}>
          <FileText size={16} /> Have a note or topic in mind? Let&apos;s talk
        </button>
      </section>
    )

    return (
      <section className="contact section-frame content-section">
        <div className="section-label">Let&apos;s talk <span>04</span></div>
        <div className="contact-layout">
          <div>
            <h2>Have a<br /><em>thought?</em></h2>
            <p className="contact-copy">For collaborations, questions, or a good conversation about building things.</p>
            <div className="contact-details">
              <a href="mailto:toniblair909@gmail.com"><Mail size={16} />/Email</a>
              <a href="https://github.com/toni8283" target="_blank" rel="noreferrer"><GitBranch size={16} />/Github</a>
              <a href="tel:+919234261447"><Phone size={16} />/Phone</a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={async (event) => {
              event.preventDefault()
              setFormSent('sending')
              const data = new FormData(event.currentTarget)
              try {
                const res = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  body: data,
                })
                const json = await res.json()
                setFormSent(json.success ? 'sent' : 'error')
              } catch {
                setFormSent('error')
              }
            }}
          >
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''} />
            <input type="hidden" name="subject" value="New message from portfolio — Toni Blair" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            {formSent === 'sent' ? (
              <div className="form-success">
                <Send size={22} />
                <strong>Message sent!</strong>
                <span>I&apos;ll get back to you soon.</span>
                <button type="button" className="form-reset" onClick={() => setFormSent('idle')}>Send another</button>
              </div>
            ) : (
              <>
                <label>Name<input required name="name" placeholder="Your name" disabled={formSent === 'sending'} /></label>
                <label>Email<input required name="email" type="email" placeholder="you@email.com" disabled={formSent === 'sending'} /></label>
                <label>Message<textarea required name="message" rows={4} placeholder="Tell me what you are thinking about..." disabled={formSent === 'sending'} /></label>
                {formSent === 'error' && <p className="form-error">Something went wrong — try emailing me directly.</p>}
                <button type="submit" disabled={formSent === 'sending'}>
                  {formSent === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    )
  }, [project, post, view, greeting, isGreetingExiting, noLiveNotice, noLiveExiting, formSent])


  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <div className="desktop-navigation">
          <Navigation active={active} view={view} onNavigate={navigate} />
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      {menuOpen && (
        <div className="mobile-menu">
          <Navigation active={active} view={view} onNavigate={navigate} onClose={() => setMenuOpen(false)} />
        </div>
      )}
      <SideRail active={active} onNavigate={navigate} />
      <div className="section-stage" key={view}>{section}</div>
    </main>
  )
}
