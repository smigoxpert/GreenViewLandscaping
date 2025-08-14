'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Globe } from 'lucide-react'
import { usePWAInstall } from '@/hooks/use-pwa'

export function PWAInstallPrompt() {
  const { showInstallPrompt, installPWA, dismissInstallPrompt } =
    usePWAInstall()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (showInstallPrompt) {
      setIsVisible(true)
    }
  }, [showInstallPrompt])

  const handleInstall = async () => {
    try {
      await installPWA()
      setIsVisible(false)
    } catch (error) {
      console.error('Failed to install PWA:', error)
    }
  }

  const handleDismiss = () => {
    setIsVisible(false)
    dismissInstallPrompt()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 lg:left-auto lg:right-4 lg:w-80"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Download className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Install GreenView
                </h3>
                <p className="text-sm text-gray-600">Get the app experience</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">
                Access from your home screen
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">Works offline</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              <span className="text-sm text-gray-700">Faster loading</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleInstall}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Install App
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Maybe Later
            </button>
          </div>

          {/* App Icon Preview */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">G</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Floating PWA Install Button for Mobile
export function FloatingPWAButton() {
  const { showInstallPrompt, installPWA } = usePWAInstall()

  if (!showInstallPrompt) return null

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={installPWA}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-all duration-200 lg:hidden"
      title="Install GreenView App"
    >
      <Download className="w-6 h-6" />
    </motion.button>
  )
}

// PWA Update Notification
export function PWAUpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)

  useEffect(() => {
    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setUpdateAvailable(true)
        setShowUpdate(true)
      })
    }
  }, [])

  const handleUpdate = () => {
    window.location.reload()
  }

  const handleDismiss = () => {
    setShowUpdate(false)
  }

  if (!showUpdate || !updateAvailable) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 lg:left-auto lg:right-4 lg:w-80"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🔄</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">
                  Update Available
                </h3>
                <p className="text-sm text-blue-700">
                  New version of GreenView is ready
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              <X className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleUpdate}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Update Now
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-3 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
