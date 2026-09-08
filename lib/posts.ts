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
    slug: 'words-as-load-bearing-ai',
    title: 'Words as the Load-Bearing Wall: Designing Products Made of Language',
    date: '15.09.26',
    readTime: '7 min read',
    tag: 'Content & AI Systems',
    excerpt: 'When people describe what they want in natural language and judge results without reading code, words become structural architecture. On prompt ergonomics, error taxonomy, and why language is the compile target.',
    sections: [
      {
        heading: 'Language as the Compile Target',
        text: [
          'In traditional web applications, product copy is decorative chrome wrapped around deterministic database fields and API endpoints. If an error label is slightly clumsy, the underlying SQL transaction still completes successfully.',
          'In modern agentic products, the paradigm is inverted: language is the compile target. A user describes their intent in human words, an agent interprets those semantics to synthesize files, install packages, and deploy applications, and the user evaluates the outcome without ever reading the generated source code. In this environment, words are load-bearing structural beams. A misplaced verb, an underspecified prompt guideline, or an ambiguous empty state doesn’t just cause friction—it causes the entire execution loop to fail.',
        ],
      },
      {
        heading: 'The Fallacy of the Blank Input Box',
        text: [
          'The early wave of generative AI interfaces made a fatal product assumption: that handing a user an infinite blank textarea was the ultimate expression of creative freedom. In practice, blank textareas induce cognitive paralysis.',
          'Great content design in AI products is about grammatical scaffolding. It means anticipating the vocabulary mismatch between how a non-technical founder thinks about their business problem and how an LLM agent breaks down architecture.',
        ],
        callout: 'An empty prompt box is not simplicity; it is an unguided failure mode. Content design in AI is the discipline of giving language the stiffness and precision of a programming language without losing human warmth.',
        list: [
          'Intent Clarification Chips: Guiding the user from vague statements ("make a store") to actionable system requirements ("e-commerce catalog with Stripe checkout and guest carts").',
          'Contextual Parameter Injection: Surfacing the implicit assumptions the agent is making before it consumes tokens and builds the wrong artifact.',
          'Progressive Disclosure of Complexity: Exposing terminal output and file trees only when the user needs to inspect a boundary condition.',
        ],
      },
      {
        heading: 'Error Taxonomy in Non-Deterministic Systems',
        text: [
          'Traditional errors are binary: 404 Not Found, 401 Unauthorized, 500 Internal Server Error. But in agentic systems, the most dangerous failures are silent and semantic: the agent completed execution without throwing an error, but built something that violates the user’s intent.',
          'Content designers must construct a rigorous error taxonomy for probabilistic moments:',
        ],
        list: [
          'Context-Exhaustion Alerts: Explaining token boundaries in plain human terms without jargon.',
          'Actionable Recovery Prompts: Instead of saying "Generation failed", tell the user exactly what constraint conflicted: "The package @stripe/stripe-js required an environment secret that wasn’t provided. Add your key or switch to mock mode."',
          'The "What Changed" Diff Summary: Transforming complex git trees and file modifications into plain, readable executive summaries that respect the user’s time.',
        ],
      },
      {
        heading: 'Closing the Gap: From Words to Shipped Interfaces',
        text: [
          'Content design can no longer live inside isolated Google Docs or static spreadsheets waiting for someone else to turn words into pixels. When you understand both system constraints and interface psychology, you can take a content-led feature from ambiguous concept to production-shipped reality—crafting the Figma components, writing the system prompts, and verifying the deployed code yourself.',
        ],
      },
    ],
  },
  {
    slug: 'ocean-engineering-software',
    title: 'Ocean Engineering Taught Me to Build Resilient Software',
    date: '10.08.26',
    readTime: '6 min read',
    tag: 'Systems Architecture',
    excerpt: 'Systems thinking, hydrodynamic damping, load tolerances, and why physical naval mechanics is a better blueprint for distributed resilience than agile sprints.',
    sections: [
      {
        heading: 'The Dual Realities: Navier-Stokes and the Event Loop',
        text: [
          'At IIT Kharagpur, my formal academic discipline is Ocean Engineering & Naval Architecture. In our labs, we analyze wave spectrums, boundary layer viscous resistance, structural stress tensors, and metacentric stability under severe seakeeping conditions. In my parallel life, I engineer distributed web systems, multithreaded servers, and reactive user interfaces.',
          'Early on, people asked me if I felt torn between these two domains. But the longer I build software, the more I realize that naval architecture and distributed systems engineering are governed by the exact same philosophical principle: designing resilient structures that maintain equilibrium in hostile, unpredictable environments.',
        ],
      },
      {
        heading: 'Dynamic Load Factors vs. Sudden Traffic Spikes',
        text: [
          'When an ocean engineer designs an offshore tension-leg platform or a deep-water hull, we do not design purely for hydrostatic equilibrium or gentle average swells. We design for extreme non-linear wave slamming—the statistically inevitable 100-year freak wave.',
          'In software engineering, junior engineers often benchmark against calm waters: clean local environments, predictable network latency, and low concurrent requests. But real-world production mirrors open sea state 8. When an API experiences upstream timeouts, database lock contention, or sudden viral traffic spikes, the naive architecture collapses under cascading load.',
          'By borrowing the concept of structural damping from hydrodynamics, we can introduce exponential backoff with randomized jitter into our microservices and API gateways. Instead of allowing 5,000 failing clients to simultaneously hammer a recovering database, we introduce deliberate elasticity: shedding non-essential background tasks, buffering ingress requests into durable streams, and allowing the core state engine to recover.',
        ],
        callout: 'A vessel that is rigid without elasticity snaps when struck by an impact wave. Software without backpressure, circuit breakers, and decoupled queues snaps the moment traffic surges.',
      },
      {
        heading: 'Metacentric Height & Self-Healing State',
        text: [
          'In naval stability, the distance between a vessel’s center of gravity (G) and its metacenter (M)—known as the metacentric height (GM)—determines whether a rolling ship naturally rights itself or capsizes. A positive metacentric height produces a righting arm (GZ) that counteracts the external overturning torque of wind and waves.',
          'In software systems, this self-righting moment is equivalent to idempotent reconciliation loops. If an unhandled network partition or server restart occurs midway through an operation, does your application stay tipped over in a corrupt, half-written state? Or does your state management naturally converge back to a verified, stable equilibrium?',
        ],
        list: [
          'Idempotent Event Handlers: Processing the same webhook or queue packet multiple times without corrupting financial or relational state.',
          'Two-Phase Commits & Saga Patterns: Ensuring that distributed transactions either settle completely or unwind cleanly to a known baseline.',
          'Optimistic UI Rollbacks: Letting client applications speculate state locally while gracefully reverting if network validation fails.',
        ],
      },
      {
        heading: 'Micro-Fissures and Latent Structural Fatigue',
        text: [
          'In maritime structures, catastrophic structural failure is rarely caused by a single dramatic blast. It is almost always the result of cyclic fatigue: microscopic crystal dislocations that propagate invisibly through welded bulkheads over millions of wave cycles until a critical crack length is reached.',
          'In backend engineering, memory leaks, unclosed socket descriptors, slow thread pool exhaustion, and unmonitored garbage collection pauses are the software equivalent of fatigue cracks. Everything appears nominal on health-check dashboards for weeks, until the memory ceiling is breached during peak load.',
          'Naval engineering instilled in me a healthy paranoia for unmeasured stress. It is why I run Valgrind checks on C code to guarantee zero byte leaks, configure strict database connection pool timeouts, and ensure every promise rejection is handled explicitly.',
        ],
      },
      {
        heading: 'The Core Takeaway',
        text: [
          'Physical engineering teaches you that you cannot negotiate with reality. Gravity does not care about sprint deadlines, and ocean hydrodynamics does not bend for optimistic assumptions. When you approach software with that same reverence for first principles, you stop building brittle toys and start engineering software built to weather any storm.',
        ],
      },
    ],
  },
  {
    slug: 'concurrent-http-server-c',
    title: 'Building a Concurrent HTTP Server in ANSI C from First Principles',
    date: '24.08.26',
    readTime: '8 min read',
    tag: 'Systems Programming',
    excerpt: 'Raw POSIX sockets, pthreads concurrency, zero-copy buffer parsing, and why modern web developers take the kernel for granted.',
    sections: [
      {
        heading: 'Why Drop to Bare Metal?',
        text: [
          'Modern web development is saturated with layers of high-level abstractions: Node.js event loops, Go goroutines, Python ASGI frameworks, and containerized cloud runtimes. These tools are fantastic for rapid application delivery, but they often obscure the fundamental physics of network I/O.',
          'I wanted to understand what actually happens when bytes travel across an Ethernet wire, hit the Linux kernel’s network stack, and land in userspace memory. To demystify this, I sat down and built a fully functional, multithreaded HTTP/1.1 web server from scratch in standard ANSI C using only POSIX sockets and pthreads.',
        ],
      },
      {
        heading: 'The Socket Lifecycle & The Infamous TIME_WAIT Trap',
        text: [
          'At the core of the server is the standard Berkeley socket lifecycle: creating an IPv4 TCP stream socket with socket(AF_INET, SOCK_STREAM, 0), binding it to a port, listening for incoming connection handshakes, and accepting client sockets.',
          'One of the first immediate lessons you learn when building a server in C is socket recycling. If you terminate your server and immediately restart it, bind() will fail with EADDRINUSE (Address already in use). This occurs because the TCP socket enters the TIME_WAIT state to ensure lingering duplicate segments in the network drain cleanly.',
        ],
        code: {
          language: 'c',
          snippet: `int server_fd = socket(AF_INET, SOCK_STREAM, 0);
if (server_fd < 0) {
    perror("Socket creation failed");
    exit(EXIT_FAILURE);
}

// Enable address reuse to avoid TIME_WAIT port lockups
int opt = 1;
if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt)) < 0) {
    perror("setsockopt SO_REUSEADDR failed");
    close(server_fd);
    exit(EXIT_FAILURE);
}`,
        },
      },
      {
        heading: 'Concurrency: Managing Pthreads Without Race Conditions',
        text: [
          'A single-threaded server blocks the entire system while performing disk I/O or waiting on a slow client connection. To handle concurrent clients, we spawn worker threads using pthread_create.',
          'A classic rookie trap in C concurrency is passing the address of the stack-allocated client socket file descriptor directly to the thread function. Because the accept() loop iterates rapidly, the value at that pointer address can mutate before the newly spawned worker thread reads it, resulting in two threads reading the same descriptor and corrupting client sessions.',
        ],
        callout: 'Never pass stack pointers to worker threads across an asynchronous boundary. Allocate the client socket descriptor on the heap with malloc(), pass the pointer to the thread, and let the worker thread free() it upon socket closure.',
        code: {
          language: 'c',
          snippet: `while (running) {
    struct sockaddr_in client_addr;
    socklen_t client_len = sizeof(client_addr);
    int client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &client_len);
    if (client_fd < 0) continue;

    // Allocate memory on the heap to prevent race condition
    int* pclient = malloc(sizeof(int));
    *pclient = client_fd;

    pthread_t thread_id;
    if (pthread_create(&thread_id, NULL, handle_client, pclient) != 0) {
        perror("Failed to spawn thread");
        free(pclient);
        close(client_fd);
    } else {
        pthread_detach(thread_id); // Auto-reclaim resources on termination
    }
}`,
        },
      },
      {
        heading: 'Parsing RFC 7230 HTTP Headers Byte-by-Byte',
        text: [
          'Without express.js or regex engines, parsing an HTTP request requires zero-copy pointer arithmetic. You read raw bytes from the client descriptor into a fixed buffer using recv(), verify the carriage-return newline boundary (\\r\\n\\r\\n), extract the HTTP method (GET, POST), extract the URI path, and sanitize against directory traversal attacks (e.g. rejecting ../ paths to prevent accessing /etc/passwd).',
          'Once the path is resolved against the static public directory, the server determines the MIME type (text/html, application/json, image/png) and constructs a strict RFC-compliant HTTP response header with Content-Length and Connection: close, streaming the requested asset in chunks.',
        ],
      },
      {
        heading: 'The Valgrind Audit: Zero Leaks, Zero Segfaults',
        text: [
          'Building in C forces you to develop uncompromising mental discipline. You cannot rely on a garbage collector to clean up your mess. Using Valgrind and AddressSanitizer, I profiled the server through thousands of concurrent siege requests, verifying that every malloc has a corresponding free, every open file descriptor is closed, and no buffer overflow vulnerability exists.',
          'Writing this project made me 10x more effective when working in high-level languages like TypeScript, Python, or Go. When you know how the engine works down to the CPU registers and kernel syscalls, debugging high-level bugs becomes second nature.',
        ],
      },
    ],
  },
  {
    slug: 'beyond-prompts-semantic-search',
    title: 'Beyond Prompting: Architecting Semantic Search for Company Intelligence',
    date: '01.09.26',
    readTime: '7 min read',
    tag: 'AI Engineering',
    excerpt: 'High-dimensional embeddings, cosine distance, rate-limit resilience, and building deterministic interfaces over probabilistic models.',
    sections: [
      {
        heading: 'The Vocabulary Mismatch Problem',
        text: [
          'When building VC Scout (an intelligence engine for searching, clustering, and analyzing venture-backed startups), the fundamental engineering obstacle was what information retrieval researchers call the vocabulary mismatch problem.',
          'If an investor searches for "sustainable battery logistics and circular mineral recovery", traditional relational databases or BM25 keyword search fail completely if the startup’s website describes themselves as a "closed-loop hydrometallurgical lithium recycling network". Even though the concepts are semantically identical, the literal string tokens share zero overlap.',
        ],
      },
      {
        heading: 'The Embeddings & Vector Space Pipeline',
        text: [
          'To solve this, we map unstructured startup pitches and descriptions into high-dimensional geometric vector space (such as 1536-dimensional OpenAI text-embedding models). In this geometric space, words and concepts with similar semantic meanings cluster together regardless of exact syntax.',
          'When a user queries the interface, the search query is vectorized through the embedding model in real time. We then calculate the Cosine Similarity between the query vector and our indexed company database.',
        ],
        code: {
          language: 'python',
          snippet: `def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:
    """Calculates cosine angle between two high-dimensional vectors."""
    dot_product = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return dot_product / (norm_a * norm_b)`,
        },
      },
      {
        heading: 'Production Constraints: Rate Limits, Latency, and Caching',
        text: [
          'In a prototype, calling an external LLM embedding endpoint for every query seems easy. In production, however, you quickly hit third-party API rate limits (HTTP 429 Too Many Requests) and unacceptable network roundtrip latencies (800ms+ per lookup).',
          'To make the application feel instantaneous and robust against quota limits, I implemented a multi-tiered caching architecture:',
        ],
        list: [
          'In-Memory Query Vector Cache: Normalized query strings are hashed and stored alongside their generated embeddings, eliminating redundant API calls for recurring search terms.',
          'Precomputed Company Embeddings: All company profile vectors are precalculated and normalized at ingestion time, reducing runtime search to a single vectorized matrix multiplication.',
          'Adaptive Rate-Limit Fallback: Automatic exponential backoff with jitter wraps all external AI provider calls to ensure the UI gracefully queues requests during transient spikes.',
        ],
      },
      {
        heading: 'Designing Deterministic UX for Probabilistic Intelligence',
        text: [
          'Language models and vector search are inherently probabilistic. They don’t provide binary true/false guarantees; they output likelihood distributions. If your user interface does not reflect this nuance, users lose trust in the software.',
          'In VC Scout and CineInsight, I avoided lazy generic chat bubbles. Instead, search results are rendered as structured analytical cards complete with semantic confidence indicators, extracted keyword tags, and clear citation badges. This bridges the gap between raw statistical AI models and reliable, actionable decision tools.',
        ],
      },
    ],
  },
  {
    slug: 'invisible-ten-percent-ui-physics',
    title: 'The Invisible 10%: The Physics of High-Performance UI',
    date: '08.09.26',
    readTime: '5 min read',
    tag: 'Design Engineering',
    excerpt: 'GPU compositor layers, cubic-bezier damping, layout thrashing, and why the best interfaces feel weightless.',
    sections: [
      {
        heading: 'The Subtle Difference Between Good and Exceptional',
        text: [
          'Most users cannot articulate why an interface feels cheap or why another feels as precise and tactile as an Apple hardware dial. They cannot tell you that a modal animation dropped from 60 frames per second to 35, or that an easing curve is linearly abrupt.',
          'What they do know is that one feels clumsy and tiring, while the other feels effortless and alive. That difference lives in what I call "the invisible 10%"—the layer of motion physics, GPU compositing discipline, and layout hygiene that separates a functional website from a crafted product.',
        ],
      },
      {
        heading: 'Layout Thrashing vs. The GPU Compositor Thread',
        text: [
          'Every time a frontend developer animates properties like top, left, width, height, or margin, they force the browser engine to execute a full layout reflow followed by a repaint of the visual render tree on the CPU main thread. If JavaScript is running concurrently, frames drop immediately.',
          'To achieve silky 60fps and 120fps motion, animations must strictly target properties that can be offloaded directly to the GPU compositor thread: transform and opacity.',
        ],
        code: {
          language: 'css',
          snippet: `/* ❌ Forces CPU Layout Thrashing & Repaint on every tick */
.bad-modal {
  transition: top 0.3s ease, width 0.3s ease;
}

/* ✅ 100% GPU Composited: Zero DOM reflow, butter-smooth 120fps */
.good-modal {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}`,
        },
      },
      {
        heading: 'Inertia & Motion Curves: Mimicking Natural Physics',
        text: [
          'Linear transitions (ease-in, ease-out) do not exist in the physical universe. Real objects have mass, momentum, and friction. When a physical drawer slides open, it accelerates rapidly under applied force and gradually decelerates under friction before coming to rest.',
          'By using custom cubic-bezier curves—such as cubic-bezier(0.16, 1, 0.3, 1) or spring physics—elements snap decisively into view without jarring harshness. The eye registers the motion as natural because it satisfies our subconscious expectation of physical momentum.',
        ],
      },
      {
        heading: 'Designing Under Real-World Stress: Lessons from Chalo',
        text: [
          'While designing Chalo (the transit navigation app for daily commuters), the importance of UI ergonomics became painfully obvious. A commuter using an app on a crowded moving bus is contending with intense sunlight glare, single-handed finger reach, vehicle vibrations, and intermittent 4G cellular drops.',
          'In that context, decorative clutter is an active obstacle. We designed high-contrast typography, placed critical departure triggers within the thumb-accessible bottom third of the screen, and engineered immediate optimistic feedback states so users never question whether their tap registered.',
        ],
        callout: 'True design craft is not decoration. It is the radical removal of friction between the human intent and the computational result.',
      },
    ],
  },
  {
    slug: 'build-before-you-feel-ready',
    title: 'Why I Build Before I Feel Ready',
    date: '12.09.26',
    readTime: '4 min read',
    tag: 'Engineering Mindset',
    excerpt: 'An argument for shipping imperfect V1s in public, debugging against reality, and what engineers lose by waiting for permission.',
    sections: [
      {
        heading: 'The Seductive Comfort of Tutorial Paralysis',
        text: [
          'The most dangerous phase in any engineer’s growth is the comfortable purgatory of preparation. You read five textbooks on computer architecture, watch twenty hours of system design tutorials, and star hundreds of GitHub repositories. You feel productive, intelligent, and safe.',
          'Yet, you haven’t actually learned anything durable. Passive consumption produces the illusion of competence without any of the visceral muscle memory that comes from troubleshooting real errors.',
        ],
      },
      {
        heading: 'Reality is the Best Linter',
        text: [
          'You never truly understand Cross-Origin Resource Sharing (CORS) until your production frontend refuses to communicate with your backend across separate domains. You don’t understand connection pooling until PostgreSQL exhausts max_connections on a live demo. You don’t understand race conditions until two asynchronous callbacks mutate the same shared state at the same millisecond.',
          'Documentation teaches you how systems are supposed to work under ideal laboratory conditions. Shipping real code exposes you to the messy, non-ideal realities of the real world.',
        ],
      },
      {
        heading: 'The Power of the Scaffolding V1',
        text: [
          'When I start any new project—whether it was writing an HTTP server in C, developing VC Scout, or redesigning this portfolio—I force myself to build a crude, working end-to-end slice within the first 48 hours.',
          'A wireframe that connects. A socket that echoes a single byte. A database query that returns raw unformatted JSON. Once the skeleton exists in the physical world, momentum takes over. Polishing an existing, imperfect system is an engineering problem; agonizing over a blank canvas is an emotional trap.',
        ],
        callout: 'Do not wait until you feel qualified to build something ambitious. Building something ambitious is the exact process that makes you qualified.',
      },
      {
        heading: 'Shipping as a Daily Habit',
        text: [
          'The best engineers I admire are not the ones who hoard knowledge in private notebooks. They are the ones with the courage to ship in public, receive feedback without ego, iterate relentlessly, and let their work speak for itself. Ship early, measure reality, and keep moving.',
        ],
      },
    ],
  },
]
