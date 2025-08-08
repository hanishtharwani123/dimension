'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated gradient blob behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-400/10 rounded-full blur-3xl animate-blob opacity-70" />
        <div className="absolute w-[600px] h-[400px] bg-gradient-to-tr from-pink-500/20 via-purple-500/30 to-blue-500/10 rounded-full blur-3xl animate-blob-reverse opacity-60" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Announcement Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
            Announcing our $1.4M Fundraise
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Dimension is the new{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
            standard for collaboration
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Chat, code, cloud, deployments, and more.
        </p>

        {/* Email Signup */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-purple-500 transition-colors duration-200 flex-1 backdrop-blur-sm"
          />
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-200 hover:scale-105 px-8">
            Join waitlist
          </Button>
        </div>
      </div>
    </section>
  )
}
