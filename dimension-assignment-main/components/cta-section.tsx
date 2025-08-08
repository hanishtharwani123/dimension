'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to transform your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              team collaboration?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Join the waitlist and be among the first to experience the future of team collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-purple-500 transition-colors duration-200 flex-1 backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-200 hover:scale-105 px-8 group">
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
