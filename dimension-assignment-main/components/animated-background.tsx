'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  delay: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0) return

    const particleCount = Math.floor((dimensions.width * dimensions.height) / 15000)
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        delay: Math.random() * 5
      })
    }

    setParticles(newParticles)
  }, [dimensions])

  useEffect(() => {
    if (particles.length === 0) return

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Wrap around screen edges
          if (newX < 0) newX = dimensions.width
          if (newX > dimensions.width) newX = 0
          if (newY < 0) newY = dimensions.height
          if (newY > dimensions.height) newY = 0

          return {
            ...particle,
            x: newX,
            y: newY
          }
        })
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [particles.length, dimensions])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Additional floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-float-slow-reverse" />
      <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-float-medium" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent" />
    </div>
  )
}
