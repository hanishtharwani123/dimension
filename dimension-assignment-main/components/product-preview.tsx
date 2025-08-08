'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const chatMessages = [
  {
    id: 1,
    user: 'Tejas',
    avatar: 'T',
    time: '1:18 PM',
    message: 'Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we\'ll be on track to share the latest with the team on Friday?',
    delay: 0
  },
  {
    id: 2,
    user: 'Ari',
    avatar: 'A',
    time: '1:19 PM',
    message: 'There are a few items on the tasklist that needs to be addressed on iOS.',
    delay: 2000
  },
  {
    id: 3,
    user: 'Tejas',
    avatar: 'T',
    time: '1:20 PM',
    message: 'Awesome! Make sure it looks as close to the Figma as possible :) Here\'s a link to our Figma file if you don\'t have access yet.',
    delay: 4000
  }
]

const teamMembers = [
  { name: 'Tejas', avatar: 'T', status: 'online' },
  { name: 'Ari', avatar: 'A', status: 'online' },
  { name: 'Landon', avatar: 'L', status: 'away' }
]

export default function ProductPreview() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    chatMessages.forEach((message) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message.id])
      }, message.delay)
    })
  }, [])

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="container mx-auto">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900/50 border-r border-slate-700/50 p-4 hidden lg:block">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-white font-semibold">Dimension</span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-2">Chat</div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-slate-700/50 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Team</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/30 transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-sm">dev</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/30 transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-sm">chat</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-2">Direct Messages</div>
                {teamMembers.map((member, index) => (
                  <div key={member.name} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/30 transition-colors cursor-pointer">
                    <div className="relative">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                        member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                    <span className="text-sm">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-medium">Core Team</span>
                </div>
                <div className="text-slate-400 text-sm">Members - 3</div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex space-x-3 transition-all duration-500 ${
                      visibleMessages.includes(message.id) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Avatar className="w-10 h-10 flex-shrink-0">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        {message.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white font-medium text-sm">{message.user}</span>
                        <span className="text-slate-500 text-xs">{message.time}</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-64 bg-slate-900/50 border-l border-slate-700/50 p-4 hidden xl:block">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-3">Members - 3</h3>
                  <div className="space-y-2">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                            member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                          }`}></div>
                        </div>
                        <span className="text-slate-300 text-sm">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">Quick Access</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-slate-600 rounded"></div>
                      <span className="text-sm">Variables</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-slate-600 rounded"></div>
                      <span className="text-sm">API Endpoints</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">Tasks</h3>
                  <div className="space-y-2">
                    <div className="text-slate-400 text-sm">Deploy to Sandbox</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
