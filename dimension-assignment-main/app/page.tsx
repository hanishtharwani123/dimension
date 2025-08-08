import Header from '@/components/header'
import Hero from '@/components/hero'
import ProductPreview from '@/components/product-preview'
import AnimatedBackground from '@/components/animated-background'
import FeaturesSection from '@/components/features-section'
import StatsSection from '@/components/stats-section'
import CTASection from '@/components/cta-section'
import CollaborationSection from '@/components/collaboration-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <ProductPreview />
        <CollaborationSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  )
}
