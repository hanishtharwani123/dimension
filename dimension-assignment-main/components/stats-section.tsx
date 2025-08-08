'use client'

const stats = [
  { number: '10K+', label: 'Active Teams' },
  { number: '1M+', label: 'Messages Sent' },
  { number: '99.9%', label: 'Uptime' },
  { number: '50+', label: 'Integrations' }
]

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-400/10 rounded-3xl border border-slate-700/50 backdrop-blur-sm p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Trusted by teams worldwide
            </h2>
            <p className="text-slate-400 text-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Join thousands of teams already collaborating on Dimension
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
