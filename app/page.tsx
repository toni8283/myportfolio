'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Download, ExternalLink, FileText, GitBranch, Home, Info, Mail, Menu, Paperclip, PenLine, Phone, Send, X } from 'lucide-react'
import IsometricDotLaptop from '@/components/IsometricDotLaptop'
import WritingPenAnimation from '@/components/WritingPenAnimation'
import { posts } from '@/lib/posts'
import { projects } from '@/lib/projects'

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
          { label: 'Vaani',       destination: 'project:vaani'      },
          { label: 'DeadCode',    destination: 'project:deadcode'   },
          { label: 'Komal AI',    destination: 'project:komal-ai'   },
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
        download="Toni_Blair_CV.pdf"
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
  sublabel,
  title,
  onClick,
  children,
}: {
  href?: string | null
  label: string
  sublabel?: string
  title?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const content = (
    <>
      {children}
      <span>{label}</span>
      {sublabel && <small className="orb-sublabel">{sublabel}</small>}
    </>
  )
  if (href) {
    return (
      <a className="link-orb" href={href} target="_blank" rel="noreferrer" aria-label={label} title={title || label}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className="link-orb" onClick={onClick} aria-label={label} title={title || label}>
      {content}
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

export type ReadingTheme = 'dark' | 'cream' | 'white' | 'slate' | 'sage' | 'sand'

export const READING_THEMES: {
  id: ReadingTheme
  name: string
  label: string
  bg: string
  border: string
}[] = [
  { id: 'dark', name: 'Dark', label: 'Dark / Obsidian', bg: '#111111', border: '#444444' },
  { id: 'cream', name: 'Cream', label: 'Warm Cream / Sepia', bg: '#fbf7ee', border: '#d8cfba' },
  { id: 'white', name: 'White', label: 'Paper White', bg: '#ffffff', border: '#cbd5e1' },
  { id: 'slate', name: 'Slate', label: 'Slate Grey / E-Ink', bg: '#eceff2', border: '#c5cbd3' },
  { id: 'sage', name: 'Sage', label: 'Soft Sage / Eye Care', bg: '#edf3ec', border: '#c3d3c2' },
  { id: 'sand', name: 'Sand', label: 'Warm Sand / Clay', bg: '#f6eee8', border: '#d9c9be' },
]

export default function Page() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isGreetingExiting, setIsGreetingExiting] = useState(false)
  const [noLiveNotice, setNoLiveNotice] = useState(false)
  const [noLiveExiting, setNoLiveExiting] = useState(false)
  const noticeTimerRef = useRef<{ hold?: ReturnType<typeof setTimeout>; exit?: ReturnType<typeof setTimeout> }>({})
  const [menuOpen, setMenuOpen] = useState(false)
  const [view, setView] = useState<View>('home')
  const [formSent, setFormSent] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [readingTheme, setReadingTheme] = useState<ReadingTheme>('dark')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tb_reading_theme') as ReadingTheme
      if (saved && READING_THEMES.some((t) => t.id === saved)) {
        setReadingTheme(saved)
      }
    } catch {}
  }, [])

  const handleSetReadingTheme = (theme: ReadingTheme) => {
    setReadingTheme(theme)
    try {
      localStorage.setItem('tb_reading_theme', theme)
    } catch {}
  }

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
              {project.github && (
                <LinkOrb
                  href={project.github}
                  label={project.githubLabel || 'GitHub'}
                  sublabel={project.githubSublabel}
                  title={project.githubLabel || 'GitHub'}
                >
                  <GitBranch size={24} />
                </LinkOrb>
              )}
              {project.githubBackend && (
                <LinkOrb
                  href={project.githubBackend}
                  label={project.githubBackendLabel || 'GitHub (Backend)'}
                  sublabel={project.githubBackendSublabel}
                  title={project.githubBackendLabel || 'GitHub (Backend)'}
                >
                  <GitBranch size={24} />
                </LinkOrb>
              )}
              {project.figma && (
                <LinkOrb href={project.figma} label="Figma" title="Figma">
                  <FigmaIcon size={21} />
                </LinkOrb>
              )}
              <LinkOrb
                href={project.live}
                label="Live demo"
                title="Live demo"
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
      <article className="post-detail section-frame content-section" data-reading-theme={readingTheme}>
        <div className="reading-toolbar">
          <button className="back-link" onClick={() => navigate('writing')}>
            <ArrowLeft size={16} /> back to writing
          </button>
          <div className="reading-theme-picker" role="radiogroup" aria-label="Reading theme">
            <span className="reading-theme-title">Theme</span>
            <div className="reading-theme-options">
              {READING_THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`reading-theme-btn ${readingTheme === t.id ? 'active' : ''}`}
                  onClick={() => handleSetReadingTheme(t.id)}
                  title={t.label}
                  aria-label={`${t.label} reading mode`}
                  aria-pressed={readingTheme === t.id}
                >
                  <span
                    className="theme-circle"
                    style={{ backgroundColor: t.bg }}
                  />
                  <span className="theme-btn-label">{t.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="detail-kicker">Personal notes / {post.date} · {post.readTime} · {post.tag}</div>
        <h2>{post.title}</h2>
        <p className="detail-summary">{post.excerpt}</p>
        <div className="post-body">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="post-section">
              {sec.divider && <hr className="post-divider" />}
              {sec.heading && <h3>{sec.heading}</h3>}
              {sec.text?.map((para, pIdx) => (
                <p key={pIdx} className={para.startsWith('-') || para.startsWith('—') ? 'post-signoff' : undefined}>{para}</p>
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
          <p className="eyebrow">product engineer <span>·</span> full-stack &amp; AI systems</p>
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
            I&apos;m naturally curious about how things work. When I come across something interesting, I rarely stop at knowing <em>what</em> it does, I want to understand <em>why</em> it works, what&apos;s happening underneath it, and how I could build it myself. That curiosity has taken me from exploring Linux and operating systems to building full-stack applications, experimenting with AI, and designing digital products.
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
            I&apos;m still learning, and I don&apos;t want to pretend otherwise. I&apos;d rather show the process: the things I&apos;m building, the things I&apos;m breaking, and the things I&apos;m learning along the way.
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
            <div className="projects-quick-links">
              {projects.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => navigate(`project:${p.slug}`)}
                  className="project-pill"
                >
                  <span>{p.name.split('/')[0]}</span>
                  <ArrowUpRight size={13} />
                </button>
              ))}
            </div>
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
            <input type="hidden" name="subject" value="New message from portfolio: Toni Blair" />
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
                {formSent === 'error' && <p className="form-error">Something went wrong: please try emailing me directly.</p>}
                <button type="submit" disabled={formSent === 'sending'}>
                  {formSent === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    )
  }, [project, post, view, greeting, isGreetingExiting, noLiveNotice, noLiveExiting, formSent, readingTheme])


  return (
    <main className="portfolio-shell" data-reading-theme={post ? readingTheme : undefined}>
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
