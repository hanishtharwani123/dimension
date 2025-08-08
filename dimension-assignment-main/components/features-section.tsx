'use client'

import { MessageSquare, Code, Cloud, Zap, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Seamless communication with your team members across all projects and deployments.'
  },
  {
    icon: Code,
    title: 'Code Integration',
    description: 'Direct integration with your codebase, pull requests, and development workflow.'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for the cloud with automatic scaling and global deployment capabilities.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with real-time updates and instant synchronization.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Advanced team management with roles, permissions, and project organization.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance standards.'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              collaborate
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Dimension brings together all the tools your team needs in one unified platform, 
            from chat and code to cloud deployments and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
