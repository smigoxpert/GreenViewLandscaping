'use client'

import { useEffect } from 'react'
import { usePWA } from '@/hooks/use-pwa'

interface PWAProviderProps {
  children: React.ReactNode
}

export function PWAProvider({ children }: PWAProviderProps) {
  const { registerServiceWorker } = usePWA()

  useEffect(() => {
    // Register service worker on mount
    registerServiceWorker()
  }, [registerServiceWorker])

  return <>{children}</>
}
