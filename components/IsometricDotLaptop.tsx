'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Dot {
  // 3D coordinates in model space
  x: number
  y: number
  z: number
  // Visual properties
  color: string
  glowColor?: string
  radius: number
  baseAlpha: number
  layer: 'pad' | 'base' | 'keyboard' | 'trackpad' | 'screen-bezel' | 'screen-code' | 'cup' | 'steam'
  // Dynamic offset
  floatOffset?: number
  // For code lines or animations
  codeId?: number
  steamSpeed?: number
  steamPhase?: number
}

export default function IsometricDotLaptop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1

    // Mouse tracking
    let targetMouseX = 0
    let targetMouseY = 0
    let mouseX = 0
    let mouseY = 0
    let isHovering = false
    let hoverIntensity = 0
    let clickRipple = { x: 0, y: 0, radius: 0, active: false }

    // Resize handler
    const updateSize = () => {
      if (!containerRef.current || !canvas) return
      const rect = containerRef.current.getBoundingClientRect()
      width = rect.width
      height = Math.min(560, Math.max(380, width * 0.72))
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    // Palette
    const COLOR_PRIMARY = '#ff8566'
    const COLOR_PEACH = '#ffe3db'
    const COLOR_MUTED = '#8f837e'
    const COLOR_DARK_BORDER = '#3d3835'
    const COLOR_GLOW_BG = 'rgba(255, 133, 102, 0.12)'

    // Generate 3D Dots for Laptop & Scene
    const dots: Dot[] = []
    const steamDots: Dot[] = []

    // 1. Floating Base Platforms (under laptop and cup)
    // Main laptop platform contour
    const padW = 200
    const padD = 150
    const padStep = 14

    // Under-platform contour line dots
    for (let x = -padW / 2; x <= padW / 2; x += padStep) {
      dots.push({ x, y: -padD / 2, z: -12, color: COLOR_DARK_BORDER, radius: 1.6, baseAlpha: 0.45, layer: 'pad' })
      dots.push({ x, y: padD / 2, z: -12, color: COLOR_DARK_BORDER, radius: 1.6, baseAlpha: 0.45, layer: 'pad' })
    }
    for (let y = -padD / 2; y <= padD / 2; y += padStep) {
      dots.push({ x: -padW / 2, y, z: -12, color: COLOR_DARK_BORDER, radius: 1.6, baseAlpha: 0.45, layer: 'pad' })
      dots.push({ x: padW / 2, y, z: -12, color: COLOR_DARK_BORDER, radius: 1.6, baseAlpha: 0.45, layer: 'pad' })
    }

    // Outer floating accent square (matching the reference art neon outline)
    const accentOffset = 26
    const accentW = padW + accentOffset * 2
    const accentD = padD + accentOffset * 2
    for (let x = -accentW / 2; x <= accentW / 2; x += 22) {
      dots.push({ x, y: -accentD / 2, z: -18, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.35, layer: 'pad' })
      dots.push({ x, y: accentD / 2, z: -18, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.35, layer: 'pad' })
    }
    for (let y = -accentD / 2; y <= accentD / 2; y += 22) {
      dots.push({ x: -accentW / 2, y, z: -18, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.35, layer: 'pad' })
      dots.push({ x: accentW / 2, y, z: -18, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.35, layer: 'pad' })
    }

    // 2. Coffee Coaster & Cup (placed to the left-rear of laptop)
    const cupCenterX = -135
    const cupCenterY = -45
    const coasterSize = 48
    for (let cx = -coasterSize / 2; cx <= coasterSize / 2; cx += 10) {
      dots.push({ x: cupCenterX + cx, y: cupCenterY - coasterSize / 2, z: -12, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.5, layer: 'pad' })
      dots.push({ x: cupCenterX + cx, y: cupCenterY + coasterSize / 2, z: -12, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.5, layer: 'pad' })
      dots.push({ x: cupCenterX - coasterSize / 2, y: cupCenterY + cx, z: -12, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.5, layer: 'pad' })
      dots.push({ x: cupCenterX + coasterSize / 2, y: cupCenterY + cx, z: -12, color: COLOR_PRIMARY, radius: 1.4, baseAlpha: 0.5, layer: 'pad' })
    }

    // Coffee Cup cylindrical rings
    const cupRings = 7
    const cupBaseR = 12
    const cupTopR = 17
    const cupHeight = 44
    for (let r = 0; r < cupRings; r++) {
      const cz = (r / (cupRings - 1)) * cupHeight
      const curRadius = cupBaseR + (cupTopR - cupBaseR) * (r / (cupRings - 1))
      const count = 12 + r * 2
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const isRim = r === cupRings - 1
        dots.push({
          x: cupCenterX + Math.cos(angle) * curRadius,
          y: cupCenterY + Math.sin(angle) * curRadius,
          z: cz,
          color: isRim ? COLOR_PEACH : (r % 2 === 0 ? COLOR_PRIMARY : COLOR_MUTED),
          radius: isRim ? 2.0 : 1.5,
          baseAlpha: isRim ? 0.95 : 0.65,
          layer: 'cup',
        })
      }
    }

    // Little heart / paw emblem on the coffee cup
    dots.push({ x: cupCenterX + 10, y: cupCenterY + 10, z: 20, color: COLOR_PRIMARY, radius: 2.2, baseAlpha: 0.95, layer: 'cup' })
    dots.push({ x: cupCenterX + 6, y: cupCenterY + 12, z: 23, color: COLOR_PEACH, radius: 1.6, baseAlpha: 0.9, layer: 'cup' })
    dots.push({ x: cupCenterX + 14, y: cupCenterY + 8, z: 23, color: COLOR_PEACH, radius: 1.6, baseAlpha: 0.9, layer: 'cup' })

    // Coffee Steam particles
    for (let s = 0; s < 18; s++) {
      steamDots.push({
        x: cupCenterX + (Math.random() - 0.5) * 8,
        y: cupCenterY + (Math.random() - 0.5) * 8,
        z: cupHeight + 4 + s * 3.5,
        color: COLOR_PEACH,
        radius: 1.4 + Math.random() * 0.8,
        baseAlpha: 0.75,
        layer: 'steam',
        steamSpeed: 0.35 + Math.random() * 0.3,
        steamPhase: s * 0.7,
      })
    }

    // 3. Laptop Base Chassis
    const baseW = 160
    const baseD = 120
    const baseStep = 9
    for (let x = -baseW / 2; x <= baseW / 2; x += baseStep) {
      for (let y = -baseD / 2; y <= baseD / 2; y += baseStep) {
        const isBorder =
          x <= -baseW / 2 + baseStep ||
          x >= baseW / 2 - baseStep ||
          y <= -baseD / 2 + baseStep ||
          y >= baseD / 2 - baseStep
        dots.push({
          x,
          y,
          z: 0,
          color: isBorder ? COLOR_PRIMARY : COLOR_DARK_BORDER,
          radius: isBorder ? 1.8 : 1.2,
          baseAlpha: isBorder ? 0.85 : 0.3,
          layer: 'base',
        })
      }
    }

    // 4. Laptop Keyboard & Trackpad
    // Keyboard area
    const kbW = 130
    const kbD = 58
    const kbYOffset = -14
    const keyCols = 13
    const keyRows = 5

    for (let r = 0; r < keyRows; r++) {
      const ky = kbYOffset - kbD / 2 + (r / (keyRows - 1)) * kbD
      for (let c = 0; c < keyCols; c++) {
        // Spacebar gap on bottom row
        if (r === keyRows - 1 && c >= 3 && c <= 9) {
          if (c === 6) {
            dots.push({
              x: 0,
              y: ky,
              z: 2,
              color: COLOR_PEACH,
              radius: 2.2,
              baseAlpha: 0.95,
              layer: 'keyboard',
            })
          }
          continue
        }
        const kx = -kbW / 2 + (c / (keyCols - 1)) * kbW
        const isAccent = (r + c) % 5 === 0 || r === 0
        dots.push({
          x: kx,
          y: ky,
          z: 2,
          color: isAccent ? COLOR_PEACH : COLOR_PRIMARY,
          radius: 1.6,
          baseAlpha: isAccent ? 0.95 : 0.75,
          layer: 'keyboard',
        })
      }
    }

    // Trackpad
    const tpW = 48
    const tpD = 32
    const tpY = 36
    for (let tx = -tpW / 2; tx <= tpW / 2; tx += 10) {
      dots.push({ x: tx, y: tpY - tpD / 2, z: 1.5, color: COLOR_PRIMARY, radius: 1.3, baseAlpha: 0.5, layer: 'trackpad' })
      dots.push({ x: tx, y: tpY + tpD / 2, z: 1.5, color: COLOR_PRIMARY, radius: 1.3, baseAlpha: 0.5, layer: 'trackpad' })
    }
    for (let ty = tpY - tpD / 2; ty <= tpY + tpD / 2; ty += 8) {
      dots.push({ x: -tpW / 2, y: ty, z: 1.5, color: COLOR_PRIMARY, radius: 1.3, baseAlpha: 0.5, layer: 'trackpad' })
      dots.push({ x: tpW / 2, y: ty, z: 1.5, color: COLOR_PRIMARY, radius: 1.3, baseAlpha: 0.5, layer: 'trackpad' })
    }

    // 5. Laptop Screen / Display (tilted backwards around hinge at y = -baseD/2)
    const hingeY = -baseD / 2
    const screenW = 160
    const screenH = 115
    const tiltAngle = (72 * Math.PI) / 180 // tilted backwards from ground plane

    // Screen bezel boundary
    const screenStep = 8
    for (let sx = -screenW / 2; sx <= screenW / 2; sx += screenStep) {
      for (let sz = 0; sz <= screenH; sz += screenStep) {
        const isBezel =
          sx <= -screenW / 2 + screenStep ||
          sx >= screenW / 2 - screenStep ||
          sz <= screenStep ||
          sz >= screenH - screenStep

        // 3D coordinate on the tilted screen plane:
        // y decreases as z goes up
        const screenY = hingeY - sz * Math.cos(tiltAngle)
        const screenZ = sz * Math.sin(tiltAngle)

        if (isBezel) {
          dots.push({
            x: sx,
            y: screenY,
            z: screenZ,
            color: COLOR_PRIMARY,
            radius: 1.6,
            baseAlpha: 0.8,
            layer: 'screen-bezel',
          })
        }
      }
    }

    // Webcam dot at the top of screen
    const topScreenY = hingeY - (screenH - 4) * Math.cos(tiltAngle)
    const topScreenZ = (screenH - 4) * Math.sin(tiltAngle)
    dots.push({
      x: 0,
      y: topScreenY,
      z: topScreenZ,
      color: COLOR_PEACH,
      radius: 2.2,
      baseAlpha: 1.0,
      layer: 'screen-bezel',
    })

    // Code lines inside the screen!
    // Realistic syntax structure representing Toni's projects
    const codeLines = [
      { indent: 14, length: 42, color: COLOR_PRIMARY }, // import { Chalo }
      { indent: 60, length: 36, color: COLOR_PEACH },
      { indent: 14, length: 18, color: COLOR_MUTED },
      { indent: 14, length: 72, color: COLOR_PEACH }, // async function buildSystems() {
      { indent: 28, length: 48, color: COLOR_PRIMARY }, // const client = await socket.connect()
      { indent: 28, length: 65, color: COLOR_PEACH }, // const stream = ai.generateStream({ model })
      { indent: 28, length: 38, color: COLOR_MUTED }, // // 60fps responsive UI
      { indent: 28, length: 52, color: COLOR_PRIMARY }, // return <CraftedInIITKGP />
      { indent: 14, length: 10, color: COLOR_PEACH }, // }
    ]

    const codeStartY = hingeY
    const codeLineH = 8.5
    const codeBaseZ = 18

    codeLines.forEach((line, lineIdx) => {
      const currentScreenHeight = codeBaseZ + (codeLines.length - 1 - lineIdx) * codeLineH
      const sy = codeStartY - currentScreenHeight * Math.cos(tiltAngle) - 2 // slightly inside screen
      const sz = currentScreenHeight * Math.sin(tiltAngle)

      const startX = -screenW / 2 + 18 + line.indent * 0.7
      const endX = startX + line.length * 1.1

      for (let cx = startX; cx <= endX; cx += 5.5) {
        dots.push({
          x: cx,
          y: sy,
          z: sz,
          color: line.color,
          radius: 1.6,
          baseAlpha: 0.9,
          layer: 'screen-code',
          codeId: lineIdx,
        })
      }
    })

    // Blinking cursor dot at the end of the last active code line
    const cursorHeight = codeBaseZ + (codeLines.length - 1 - 7) * codeLineH
    const cursorY = codeStartY - cursorHeight * Math.cos(tiltAngle) - 2
    const cursorZ = cursorHeight * Math.sin(tiltAngle)
    const cursorDot: Dot = {
      x: -screenW / 2 + 18 + 28 * 0.7 + 52 * 1.1 + 8,
      y: cursorY,
      z: cursorZ,
      color: COLOR_PEACH,
      radius: 2.4,
      baseAlpha: 1.0,
      layer: 'screen-code',
    }
    dots.push(cursorDot)

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const rawX = e.clientX - rect.left
      const rawY = e.clientY - rect.top
      targetMouseX = (rawX / rect.width - 0.5) * 2
      targetMouseY = (rawY / rect.height - 0.5) * 2
      isHovering = true
    }

    const handleMouseEnter = () => {
      isHovering = true
    }

    const handleMouseLeave = () => {
      isHovering = false
      targetMouseX = 0
      targetMouseY = 0
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      clickRipple = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        active: true,
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('click', handleClick)

    // Touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return
      const rect = canvas.getBoundingClientRect()
      targetMouseX = ((e.touches[0].clientX - rect.left) / rect.width - 0.5) * 2
      targetMouseY = ((e.touches[0].clientY - rect.top) / rect.height - 0.5) * 2
      isHovering = true
    }
    const handleTouchEnd = () => {
      isHovering = false
      targetMouseX = 0
      targetMouseY = 0
    }
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    canvas.addEventListener('touchend', handleTouchEnd)

    // Main 3D render loop
    let time = 0

    const render = () => {
      time += 0.02

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.08
      mouseY += (targetMouseY - mouseY) * 0.08
      hoverIntensity += ((isHovering ? 1 : 0) - hoverIntensity) * 0.08

      // Expand click ripple
      if (clickRipple.active) {
        clickRipple.radius += 8
        if (clickRipple.radius > Math.max(width, height) * 0.8) {
          clickRipple.active = false
        }
      }

      ctx.clearRect(0, 0, width * dpr, height * dpr)
      ctx.save()
      ctx.scale(dpr, dpr)

      // Perspective and Camera setup
      // Reference image has classic isometric angle:
      // Base rotated ~32 degrees, tilted ~36 degrees
      const baseAngle = (34 * Math.PI) / 180 + mouseX * 0.1
      const pitchAngle = (35 * Math.PI) / 180 + mouseY * 0.08

      const cosA = Math.cos(baseAngle)
      const sinA = Math.sin(baseAngle)
      const cosP = Math.cos(pitchAngle)
      const sinP = Math.sin(pitchAngle)

      // Center placement
      const originX = width * 0.5
      const originY = height * 0.54

      // Overall responsive scale factor
      const scale = Math.min(1.25, Math.max(0.72, width / 520))

      // Update steam particles
      steamDots.forEach((s) => {
        s.z += s.steamSpeed || 0.4
        if (s.z > cupHeight + 46) {
          s.z = cupHeight + 4
        }
      })

      // Combine all points for rendering
      const allPoints = [...dots, ...steamDots]

      // Transform each point to 2D screen coordinates
      const projected = allPoints.map((dot) => {
        let { x, y, z } = dot

        // Ambient idle breathing float
        const ambientFloat = Math.sin(time + x * 0.02 + y * 0.02) * 2.2

        // When user hovers: dots lift upward!
        // Keyboard and screen code rise higher to create floating holographic layers
        let riseAmount = 0
        if (dot.layer === 'keyboard') {
          riseAmount = 14 * hoverIntensity
        } else if (dot.layer === 'screen-code') {
          riseAmount = 18 * hoverIntensity
        } else if (dot.layer === 'screen-bezel') {
          riseAmount = 10 * hoverIntensity
        } else if (dot.layer === 'cup' || dot.layer === 'steam') {
          riseAmount = 12 * hoverIntensity
        } else if (dot.layer === 'base') {
          riseAmount = 4 * hoverIntensity
        }

        // Mouse proximity lift: dots closest to cursor in screen space rise even more!
        // First compute basic 2D projection
        const rotX = (x * cosA - y * sinA) * scale
        const rotY = (x * sinA + y * cosA) * scale
        const baseSx = originX + rotX
        const baseSy = originY + rotY * sinP - (z + ambientFloat) * cosP * scale

        // Cursor distance
        const cursorDist = Math.hypot(
          baseSx - (width * 0.5 + mouseX * (width * 0.4)),
          baseSy - (height * 0.5 + mouseY * (height * 0.4))
        )
        const proximityBoost = Math.max(0, 1 - cursorDist / 180) * 16 * hoverIntensity

        // Wave ripple effect from click
        let rippleLift = 0
        if (clickRipple.active) {
          const distToRipple = Math.abs(Math.hypot(baseSx - clickRipple.x, baseSy - clickRipple.y) - clickRipple.radius)
          if (distToRipple < 40) {
            rippleLift = (1 - distToRipple / 40) * 20
          }
        }

        const totalZ = z + ambientFloat + riseAmount + proximityBoost + rippleLift

        // Final projected position
        const screenX = originX + rotX
        const screenY = originY + rotY * sinP - totalZ * cosP * scale

        // Depth sorting key (draw back to front)
        const depth = x * sinA + y * cosA + totalZ * 0.5

        return {
          ...dot,
          screenX,
          screenY,
          depth,
          totalZ,
        }
      })

      // Sort by depth for correct 3D occlusion
      projected.sort((a, b) => a.depth - b.depth)

      // Render dots
      projected.forEach((p) => {
        let alpha = p.baseAlpha

        // Cursor blinking effect
        if (p === cursorDot) {
          alpha = Math.sin(time * 6) > 0 ? 1 : 0.15
        }

        // Steam fading as it ascends
        if (p.layer === 'steam') {
          const steamProgress = (p.z - cupHeight) / 46
          alpha = Math.max(0, 1 - steamProgress) * 0.8
        }

        // Hover brightness boost
        if (hoverIntensity > 0) {
          alpha = Math.min(1, alpha + hoverIntensity * 0.2)
        }

        ctx.beginPath()
        const curRadius = Math.max(0.8, p.radius * scale * (1 + hoverIntensity * 0.15))
        ctx.arc(p.screenX, p.screenY, curRadius, 0, Math.PI * 2)

        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha

        // Soft outer glow for illuminated dots (screen code, keyboard, cup rim)
        if (p.layer === 'screen-code' || (p.layer === 'keyboard' && p.color === COLOR_PEACH)) {
          ctx.shadowColor = COLOR_PRIMARY
          ctx.shadowBlur = 6 * scale
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fill()
      })

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', updateSize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('click', handleClick)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="dot-laptop-stage" ref={containerRef}>
      <canvas ref={canvasRef} className="dot-laptop-canvas" />
    </div>
  )
}

