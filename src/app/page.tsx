import { Hero } from '@/components/sections/hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { TestimonialsSlider } from '@/components/sections/testimonials-slider'
import { PricingTiers } from '@/components/sections/pricing-tiers'
import { ServiceAreaMap } from '@/components/sections/service-area-map'
import { PWAInstallPrompt, FloatingPWAButton, PWAUpdateNotification } from '@/components/ui/pwa-install-prompt'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TestimonialsSlider />
      <PricingTiers />
      <ServiceAreaMap />
      
      {/* PWA Components */}
      <PWAInstallPrompt />
      <FloatingPWAButton />
      <PWAUpdateNotification />
    </>
  )
}
