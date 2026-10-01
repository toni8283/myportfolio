export interface ProjectCaseStudy {
  problem: string
  strategy: string
  rejected: string
  shipped: string
}

export interface Project {
  slug: string
  name: string
  type: string
  year: string
  summary: string
  body: string
  caseStudy?: ProjectCaseStudy
  tech: string
  github?: string | null
  githubLabel?: string
  githubSublabel?: string
  githubBackend?: string | null
  githubBackendLabel?: string
  githubBackendSublabel?: string
  figma?: string | null
  live?: string | null
}

export const projects: Project[] = [
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
    slug: 'vaani',
    name: 'Vaani/Voice',
    type: 'AI · Voice Agent',
    year: '2026',
    summary: 'An autonomous voice companion that phones loved ones on your behalf, holds genuine conversational check-ins, and delivers structured post-call summaries.',
    body: 'Vaani is an autonomous AI voice companion engineered for the AssemblyAI Voice Agent Hackathon. Designed to bridge distance with aging family members and busy relatives, the platform enables users to create contact profiles with relationship context, dictate call intentions, and initiate real-time conversational phone check-ins. The architecture couples a Next.js 14 App Router frontend with a dedicated Node.js/Express call server (vaani-call-server). The client captures microphone input via the Web Audio API and streams bidirectional 24 kHz PCM16 audio over WebSockets (useBrowserCall). The call server bridges this stream directly into AssemblyAI Voice Agent API, synthesizing real-time STT, LLM turn-taking, and natural voice synthesis in a single unified WebSocket session. Call lifecycles, real-time status subscriptions, and post-call conversational summaries are persisted in Supabase with PostgreSQL and Row Level Security.',
    caseStudy: {
      problem: 'Busy schedules and geographical distance make regular check-ins with aging parents and relatives difficult, while traditional text messaging feels cold, impersonal, and frustrating for elderly family members who struggle with smartphone keyboards.',
      strategy: 'Engineered a two-phase companion experience: a high-trust pre-call briefing where users define call intentions and relationship context, followed by an ambient, low-latency live audio streaming bridge that speaks and listens with human-like warmth before generating an empathetic bulleted summary.',
      rejected: 'Rejected asynchronous voice note exchanges. Field research highlighted that recorded audio clips still place the burden of reply on elderly relatives. Live conversational voice with real-time transcription and automatic post-call sentiment summaries eliminated all cognitive friction.',
      shipped: 'Shipped full bidirectional 24 kHz PCM16 audio streaming with sub-800ms conversational turn turnaround via AssemblyAI Voice Agent API and live Supabase Realtime synchronization. Deployed production client live on Vercel.',
    },
    tech: 'Next.js 14 · React 18 · TypeScript · Node.js · Express · WebSockets (ws) · AssemblyAI Voice Agent API · Supabase · PostgreSQL · Tailwind CSS · Vercel',
    github: 'https://github.com/toni8283/Vaani',
    githubLabel: 'GitHub (Frontend)',
    githubSublabel: 'Client',
    githubBackend: 'https://github.com/toni8283/vaani-call-server',
    githubBackendLabel: 'GitHub (Call Server)',
    githubBackendSublabel: 'Server',
    figma: null,
    live: 'https://vaani-green.vercel.app/',
  },
  {
    slug: 'deadcode',
    name: 'DeadCode/Engine',
    type: 'DevTools · Systems',
    year: '2026',
    summary: 'A deterministic Python static analysis engine and interactive playground that proves safe code removal using isolated Git worktrees and test suites.',
    body: 'DeadCode is a developer tool and static analysis engine built on the principle of "Delete with evidence." In large Python codebases, unused functions, classes, and dead modules linger indefinitely because engineers fear that deletions will silently break obscure runtime imports or dynamic dependencies. DeadCode eliminates guesswork by pairing AST syntax parsing and dependency graph resolution with automated empirical verification. The CLI engine classifies candidates into PROVABLE, REVIEW (fail-closed for __all__ exports), and ACTIVE. When proving a candidate, it creates an isolated, detached Git worktree (git worktree add --detach), removes the definition via exact AST source-range edits or safe file unlinking, executes the project test suite (pytest, mypy), and re-scans the repository before touching a single byte of the user working branch. The project is accompanied by deadcode-web, a full-stack Dockerized interactive playground featuring a FastAPI backend and a React Vite frontend deployed on Render.',
    caseStudy: {
      problem: 'Technical debt and dead code accumulate in Python repositories because developers cannot reliably predict if removing a function or module will cause breaking runtime side effects, leaving teams trapped in fear of refactoring.',
      strategy: 'Architected a fail-closed verification pipeline: combine static AST symbol reachability indexing with temporary detached Git worktrees. If and only if the isolated worktree passes existing pytest and mypy validation, the deletion is certified with a verifiable proof log.',
      rejected: 'Rejected naive regex or heuristic grep scanning tools like vulture without test verification, which generate high false-positive rates and push the risk back onto the developer. Enforced mandatory test suite verification in clean worktrees before code deletion is allowed.',
      shipped: 'Packaged as a standalone Python CLI tool and a full-stack Dockerized web playground on Render with ephemeral sandbox sessions, interactive dependency visualization, and zero-risk AST deletion verification.',
    },
    tech: 'Python 3.11 · AST Analysis · Git Worktrees · pytest · mypy · FastAPI · React 19 · Vite · TypeScript · Docker · Render',
    github: 'https://github.com/toni8283/deadcode',
    githubLabel: 'GitHub (Core Engine)',
    githubSublabel: 'Engine',
    githubBackend: 'https://github.com/toni8283/deadcode-web',
    githubBackendLabel: 'GitHub (Web UI)',
    githubBackendSublabel: 'Web',
    figma: null,
    live: 'https://deadcode-web.onrender.com/demo',
  },
  {
    slug: 'komal-ai',
    name: 'Komal/AI',
    type: 'AI · Voice Companion',
    year: '2026',
    summary: 'A voice-first AI companion crafted for low-latency emotional venting, natural human cadences, and grounded editorial aesthetics.',
    body: 'Komal.ai is a voice-first conversational sanctuary engineered for people navigating stress, burnout, or late-night thoughts. Unlike conventional AI interfaces that demand structured text prompts and return clinical essay dumps, Komal prioritizes spontaneous speech. The frontend is built with React 19, Vite, and Framer Motion, utilizing an editorial design system of warm terracotta tones, ambient lighting, and grain. Audio is captured and streamed over WebSockets directly to the AssemblyAI Voice Agent API. The companion architecture is tuned for human speech dynamics: responses are kept under 20 words per turn, integrated with natural vocal fillers ("Hmm...", "Yeah...", "I hear you..."), and gentle breathing cadences. A companion Node.js/Express backend handles token minting (POST /v1/token), protecting sensitive API credentials from client exposure while enforcing strict rate limiting and persona prompt configuration for both Komal and Alex voice models.',
    caseStudy: {
      problem: 'When individuals feel overwhelmed, stressed, or emotionally drained, typing into a blank text input and waiting through verbose, encyclopedic chatbot essays feels exhausting, impersonal, and unnatural.',
      strategy: 'Crafted a voice-first sanctuary requiring zero prompt engineering. Engineered ultra-short conversational turns (<20 words), conversational interjections, ambient fluid micro-interactions via Framer Motion, and ephemeral single-use session token authorization.',
      rejected: 'Rejected text-first chat bubbles and traditional multi-sentence LLM responses. Testing proved that long monologue replies break emotional rapport. Prioritized low-latency voice turn-taking and active listening acknowledgments over verbose knowledge retrieval.',
      shipped: 'Achieved sub-second voice turn turnaround, multi-persona voice selection, and zero-exposure token auth. Deployed production client live on Vercel.',
    },
    tech: 'React 19 · Vite · TypeScript · Framer Motion · Node.js · Express · AssemblyAI Voice Agent API · WebSockets · Tailwind CSS · Vercel',
    github: 'https://github.com/toni8283/komal.ai',
    githubLabel: 'GitHub',
    figma: null,
    live: 'https://komal-ai-seven.vercel.app/',
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
