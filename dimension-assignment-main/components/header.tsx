'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-semibold text-lg">Dimension</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Careers', 'Blog', 'Changelog'].map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                {item === 'Careers' && (
                  <span className="ml-1 text-xs bg-purple-500 text-white px-1.5 py-0.5 rounded-full">2</span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-200 hover:scale-105 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}
