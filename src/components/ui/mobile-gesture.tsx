'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Menu } from 'lucide-react'

interface SwipeableCardProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
  className?: string
}

export function SwipeableCard({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 100,
  className = ''
}: SwipeableCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-15, 15])
  const opacity = useTransform(x, [-200, 0, 0, 200], [0, 1, 1, 0])

  const handleDragEnd = (event: any, info: PanInfo) => {
    const { offset, velocity } = info

    if (Math.abs(offset.x) > threshold) {
      if (offset.x > 0 && onSwipeRight) {
        onSwipeRight()
      } else if (offset.x < 0 && onSwipeLeft) {
        onSwipeLeft()
      }
    } else if (Math.abs(offset.y) > threshold) {
      if (offset.y > 0 && onSwipeDown) {
        onSwipeDown()
      } else if (offset.y < 0 && onSwipeUp) {
        onSwipeUp()
      }
    }

    // Reset position
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`touch-pan-y ${className}`}
      style={{ x, y, rotate, opacity }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

interface PullToRefreshProps {
  onRefresh: () => Promise<void>
  children: ReactNode
  threshold?: number
  className?: string
}

export function PullToRefresh({
  onRefresh,
  children,
  threshold = 80,
  className = ''
}: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      const touch = e.touches[0]
      const startY = touch.clientY
      
      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0]
        const currentY = touch.clientY
        const distance = Math.max(0, currentY - startY)
        
        if (distance > 0) {
          setPullDistance(Math.min(distance * 0.5, threshold * 2))
        }
      }
      
      const handleTouchEnd = () => {
        if (pullDistance > threshold && !isRefreshing) {
          setIsRefreshing(true)
          onRefresh().finally(() => {
            setIsRefreshing(false)
            setPullDistance(0)
          })
        } else {
          setPullDistance(0)
        }
        
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
    >
      {/* Pull indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-green-100 text-green-700 py-2"
        style={{ height: pullDistance }}
        animate={{ height: pullDistance }}
      >
        {isRefreshing ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Refreshing...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <ChevronDown className={`w-4 h-4 transition-transform ${pullDistance > threshold ? 'rotate-180' : ''}`} />
            <span className="text-sm font-medium">
              {pullDistance > threshold ? 'Release to refresh' : 'Pull to refresh'}
            </span>
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div style={{ transform: `translateY(${pullDistance}px)` }}>
        {children}
      </div>
    </div>
  )
}

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function MobileNavigation({
  isOpen,
  onClose,
  children,
  className = ''
}: MobileNavigationProps) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 lg:hidden ${className}`}
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-4">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

interface TouchFriendlyButtonProps {
  children: ReactNode
  onClick: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline'
}

export function TouchFriendlyButton({
  children,
  onClick,
  className = '',
  size = 'md',
  variant = 'primary'
}: TouchFriendlyButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px] min-w-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px] min-w-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px] min-w-[56px]'
  }

  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100'
  }

  return (
    <motion.button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg font-medium transition-all duration-200
        touch-manipulation select-none
        ${className}
      `}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.button>
  )
}

interface MobileGestureHandlerProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  className?: string
}

export function MobileGestureHandler({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  className = ''
}: MobileGestureHandlerProps) {
  const [startTouch, setStartTouch] = useState<{ x: number; y: number } | null>(null)
  const [currentTouch, setCurrentTouch] = useState<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setStartTouch({ x: touch.clientX, y: touch.clientY })
    setCurrentTouch({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startTouch) {
      const touch = e.touches[0]
      setCurrentTouch({ x: touch.clientX, y: touch.clientY })
    }
  }

  const handleTouchEnd = () => {
    if (startTouch && currentTouch) {
      const deltaX = currentTouch.x - startTouch.x
      const deltaY = currentTouch.y - startTouch.y
      const threshold = 50

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight()
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft()
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > threshold) {
          if (deltaY > 0 && onSwipeDown) {
            onSwipeDown()
          } else if (deltaY < 0 && onSwipeUp) {
            onSwipeUp()
          }
        }
      }
    }

    setStartTouch(null)
    setCurrentTouch(null)
  }

  return (
    <div
      className={`touch-pan-y ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}

// Missing icon import
import { ChevronDown } from 'lucide-react'
