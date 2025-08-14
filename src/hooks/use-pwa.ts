import { useState, useEffect, useCallback } from 'react'

interface PWAState {
  isInstalled: boolean
  isOnline: boolean
  canInstall: boolean
  deferredPrompt: any
  updateAvailable: boolean
}

export function usePWA() {
  const [pwaState, setPwaState] = useState<PWAState>({
    isInstalled: false,
    isOnline: navigator.onLine,
    canInstall: false,
    deferredPrompt: null,
    updateAvailable: false,
  })

  // Check if app is installed
  useEffect(() => {
    const checkInstallation = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setPwaState(prev => ({ ...prev, isInstalled: true }))
      }
    }

    checkInstallation()
    window.addEventListener('appinstalled', checkInstallation)

    return () => {
      window.removeEventListener('appinstalled', checkInstallation)
    }
  }, [])

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () =>
      setPwaState(prev => ({ ...prev, isOnline: true }))
    const handleOffline = () =>
      setPwaState(prev => ({ ...prev, isOnline: false }))

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Handle install prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setPwaState(prev => ({
        ...prev,
        canInstall: true,
        deferredPrompt: e,
      }))
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  // Handle service worker updates
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setPwaState(prev => ({ ...prev, updateAvailable: true }))
      })
    }
  }, [])

  // Install PWA
  const installPWA = useCallback(async () => {
    if (pwaState.deferredPrompt) {
      pwaState.deferredPrompt.prompt()
      const { outcome } = await pwaState.deferredPrompt.userChoice

      if (outcome === 'accepted') {
        setPwaState(prev => ({
          ...prev,
          canInstall: false,
          deferredPrompt: null,
        }))
      }
    }
  }, [pwaState.deferredPrompt])

  // Register service worker
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('SW registered: ', registration)

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                setPwaState(prev => ({ ...prev, updateAvailable: true }))
              }
            })
          }
        })

        return registration
      } catch (error) {
        console.error('SW registration failed: ', error)
      }
    }
  }, [])

  // Update service worker
  const updateServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }, [])

  // Request notification permission
  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    }
    return false
  }, [])

  // Send push notification
  const sendPushNotification = useCallback(
    (title: string, options?: NotificationOptions) => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, options)
      }
    },
    []
  )

  // Check if PWA is supported
  const isPWASupported = useCallback(() => {
    return 'serviceWorker' in navigator && 'PushManager' in window
  }, [])

  // Get PWA installation status
  const getInstallationStatus = useCallback(() => {
    if (pwaState.isInstalled) return 'installed'
    if (pwaState.canInstall) return 'can-install'
    return 'cannot-install'
  }, [pwaState.isInstalled, pwaState.canInstall])

  return {
    ...pwaState,
    installPWA,
    registerServiceWorker,
    updateServiceWorker,
    requestNotificationPermission,
    sendPushNotification,
    isPWASupported,
    getInstallationStatus,
  }
}

// PWA Installation Component Hook
export function usePWAInstall() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        setShowInstallPrompt(false)
        setDeferredPrompt(null)
      }
    }
  }

  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false)
  }

  return {
    showInstallPrompt,
    installPWA,
    dismissInstallPrompt,
  }
}

// Offline Support Hook
export function useOfflineSupport() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [offlineQueue, setOfflineQueue] = useState<any[]>([])

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const addToOfflineQueue = useCallback((action: any) => {
    setOfflineQueue(prev => [...prev, action])
  }, [])

  const processOfflineQueue = useCallback(async () => {
    if (isOnline && offlineQueue.length > 0) {
      // Process queued actions
      for (const action of offlineQueue) {
        try {
          await action()
        } catch (error) {
          console.error('Failed to process offline action:', error)
        }
      }
      setOfflineQueue([])
    }
  }, [isOnline, offlineQueue])

  useEffect(() => {
    processOfflineQueue()
  }, [isOnline, processOfflineQueue])

  return {
    isOnline,
    offlineQueue,
    addToOfflineQueue,
    processOfflineQueue,
  }
}
