'use client'

import { useEffect, useRef, useState } from 'react'

export default function WritingPenAnimation() {
  const pathRef = useRef<SVGPathElement>(null)
  const [anim, setAnim] = useState({
    x: 18,
    y: 50,
    angle: 40,
    offset: 600,
    total: 600,
    opacity: 1,
    blur: 0,
    nibDot: true,
  })

  // Expressive, fluid harmonic wave & scribble with an artistic calligraphic loop
  const wavePath = `
    M 18 50
    C 28 50, 38 34, 52 34
    C 64 34, 70 56, 82 56
    C 94 56, 102 26, 114 26
    C 122 26, 126 38, 126 48
    C 126 55, 118 55, 118 46
    C 118 36, 130 36, 142 44
    C 152 50, 158 58, 170 58
    C 182 58, 192 38, 204 38
    C 212 38, 218 48, 224 48
  `.trim()

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const totalLength = path.getTotalLength()
    setAnim((prev) => ({ ...prev, offset: totalLength, total: totalLength }))

    // Slow, unhurried, luxurious timing
    const DURATION_DRAW = 5500      // Slow, meditative drawing motion
    const DURATION_PAUSE = 2000     // 2s pause to appreciate the completed wave
    const DURATION_FADE_BLUR = 1800 // Soft, cinematic blur dissolve
    const DURATION_RESET = 700      // Gentle ease back to start
    const TOTAL_CYCLE = DURATION_DRAW + DURATION_PAUSE + DURATION_FADE_BLUR + DURATION_RESET

    let animFrameId: number
    let startTime: number | null = null

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) % TOTAL_CYCLE

      if (elapsed < DURATION_DRAW) {
        // 1. Slow, ultra-smooth drawing phase with sinusoidal easing
        const p = elapsed / DURATION_DRAW
        // Pure sinusoidal easing for liquid-smooth acceleration & deceleration
        const ease = (1 - Math.cos(Math.PI * p)) / 2
        const distance = ease * totalLength
        const pt = path.getPointAtLength(distance)

        // Ultra-smooth tangent angle over a balanced 5px baseline
        const pNext = path.getPointAtLength(Math.min(totalLength, distance + 4))
        const pPrev = path.getPointAtLength(Math.max(0, distance - 4))
        const dx = pNext.x - pPrev.x
        const dy = pNext.y - pPrev.y
        const naturalAngle = 40 + Math.atan2(dy, dx) * 4

        setAnim({
          x: pt.x,
          y: pt.y,
          angle: naturalAngle,
          offset: totalLength - distance,
          total: totalLength,
          opacity: 1,
          blur: 0,
          nibDot: true,
        })
      } else if (elapsed < DURATION_DRAW + DURATION_PAUSE) {
        // 2. Pause & Admire: Pencil gently lifts off the wave
        const p = (elapsed - DURATION_DRAW) / DURATION_PAUSE
        const endPt = path.getPointAtLength(totalLength)
        const liftEase = Math.sin(p * Math.PI)
        const liftY = liftEase * 7
        const liftX = liftEase * 3

        setAnim({
          x: endPt.x + liftX,
          y: endPt.y - liftY,
          angle: 40,
          offset: 0,
          total: totalLength,
          opacity: 1,
          blur: 0,
          nibDot: false,
        })
      } else if (elapsed < DURATION_DRAW + DURATION_PAUSE + DURATION_FADE_BLUR) {
        // 3. Luxurious Blur Fade: Wave and pencil slowly dissolve into background
        const p = (elapsed - (DURATION_DRAW + DURATION_PAUSE)) / DURATION_FADE_BLUR
        // Smooth cubic fade
        const fadeEase = p * p * (3 - 2 * p)
        const endPt = path.getPointAtLength(totalLength)

        setAnim({
          x: endPt.x + 3,
          y: endPt.y - 7,
          angle: 40,
          offset: 0,
          total: totalLength,
          opacity: Math.max(0, 1 - fadeEase),
          blur: fadeEase * 7, // Soft cinematic blur up to 7px
          nibDot: false,
        })
      } else {
        // 4. Return Phase: Re-emerges smoothly into crisp focus at starting point
        const p = (elapsed - (DURATION_DRAW + DURATION_PAUSE + DURATION_FADE_BLUR)) / DURATION_RESET
        const easeIn = p * p
        const startPt = path.getPointAtLength(0)

        setAnim({
          x: startPt.x,
          y: startPt.y,
          angle: 40,
          offset: totalLength,
          total: totalLength,
          opacity: easeIn,
          blur: (1 - easeIn) * 3, // Resolves from soft blur to sharp
          nibDot: false,
        })
      }

      animFrameId = requestAnimationFrame(tick)
    }

    animFrameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animFrameId)
  }, [])

  return (
    <div
      className="writing-pen-open-wrap"
      aria-hidden="true"
      style={{
        opacity: anim.opacity,
        filter: anim.blur > 0.05 ? `blur(${anim.blur}px)` : 'none',
        willChange: 'filter, opacity',
      }}
    >
      <svg
        viewBox="0 -28 236 98"
        className="writing-pen-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pen-ink-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor="#FF8A66" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Orange Wave & Scribble Stroke */}
        <path
          ref={pathRef}
          d={wavePath}
          stroke="#FF8A66"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={anim.total}
          strokeDashoffset={anim.offset}
          filter="url(#pen-ink-glow)"
        />

        {/* Glowing Orange Wet-Ink Tip Dot */}
        {anim.nibDot && (
          <circle
            cx={anim.x}
            cy={anim.y}
            r="1.7"
            fill="#FF8A66"
            filter="url(#pen-ink-glow)"
          />
        )}

        {/* Elongated Apple-Pencil Style Silhouette (Light Slate Grey #94a3b8) */}
        <g transform={`translate(${anim.x}, ${anim.y}) rotate(${anim.angle})`}>
          {/* Soft contact shadow beneath tip */}
          <ellipse cx="2" cy="1.5" rx="3.2" ry="1.3" fill="rgba(0,0,0,0.35)" />

          {/* Slender Pencil Body + Tapered Cone */}
          <path
            d="M 0 0 L -3.3 -7.5 L -3.3 -46 L 3.3 -46 L 3.3 -7.5 Z"
            fill="#94a3b8"
            stroke="#94a3b8"
            strokeWidth="1.1"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Clean Eraser Cap with negative space gap */}
          <path
            d="M -3.3 -48.4 L -3.3 -52 C -3.3 -56, 3.3 -56, 3.3 -52 L 3.3 -48.4 Z"
            fill="#94a3b8"
            stroke="#94a3b8"
            strokeWidth="1.1"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}
