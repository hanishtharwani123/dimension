'use client'

import { useEffect, useRef, useState } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ExternalLink } from 'lucide-react'

export default function CollaborationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Collaborate on everything */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Collaborate on everything.</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                From deployments to tasks, work with your team every step of the way.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 space-y-4">
              {/* Chat Messages */}
              <div className="space-y-4">
                <div className={`flex space-x-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">T</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-medium text-sm">Tejas</span>
                      <span className="text-slate-500 text-xs">1:14 PM</span>
                    </div>
                    <p className="text-slate-300 text-sm">Cool - have a few improvements in mind - here's a meet!</p>
                  </div>
                </div>

                <div className={`flex space-x-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white text-sm">A</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-medium text-sm">Ari</span>
                      <span className="text-slate-500 text-xs">1:15 PM</span>
                    </div>
                    <p className="text-slate-300 text-sm">There are a few items on the tasklist that needs to be addressed on iOS.</p>
                  </div>
                </div>
              </div>

              {/* Linear Integration Card */}
              <div className={`bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 bg-slate-500 rounded"></div>
                  <span className="text-slate-300 text-sm font-medium">Linear</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </div>
                <h4 className="text-white text-sm font-medium mb-2">Follow up not highlighted in the block at the 2nd level</h4>
                <p className="text-slate-400 text-xs mb-3">The 2nd level comment block does not highlight the follow up button.</p>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-slate-600 text-slate-300 px-2 py-1 rounded">iOS-21</span>
                  <span className="bg-slate-600 text-slate-300 px-2 py-1 rounded">📱 Mobile</span>
                  <span className="bg-slate-600 text-slate-300 px-2 py-1 rounded">👤 Ari</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded">🔄 In Progress</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded">🚨 Urgent</span>
                </div>
              </div>

              {/* Another message */}
              <div className={`flex space-x-3 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">T</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium text-sm">Tejas</span>
                    <span className="text-slate-500 text-xs">1:18 PM</span>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className={`flex items-center space-x-3 pt-2 border-t border-slate-700/50 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs">+</div>
                <div className="flex-1 bg-slate-700/50 rounded-lg px-3 py-2">
                  <span className="text-slate-500 text-sm">Message Tejas Ravishankar...</span>
                </div>
                <div className="bg-slate-600 text-slate-300 px-3 py-2 rounded-lg text-sm font-medium">GIF</div>
              </div>
            </div>
          </div>

          {/* Right Side - Crafted for your favorite tools */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Crafted for your favorite tools</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Connect your tools - we'll handle the rest. Many integrations, with more to come.
              </p>
            </div>

            {/* Animated Connection Visualization */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full">
                {/* Animated Connection Lines */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: `${i * 200 + 800}ms`,
                      transform: `rotate(${i * 45}deg)`
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse origin-left transform -translate-y-0.5 -translate-x-16 animate-connection-flow" 
                         style={{ animationDelay: `${i * 300}ms` }} />
                  </div>
                ))}

                {/* Central Hub */}
                <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>

                {/* Connection Nodes */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180)
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  
                  return (
                    <div
                      key={`node-${i}`}
                      className={`absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${1200 + i * 100}ms`
                      }}
                    />
                  )
                })}

                {/* Flowing particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className={`absolute w-2 h-2 bg-purple-400 rounded-full animate-float-particle transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      left: `${20 + (i * 7)}%`,
                      top: `${30 + (i * 5)}%`,
                      animationDelay: `${1500 + i * 200}ms`,
                      animationDuration: `${3 + (i % 3)}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
