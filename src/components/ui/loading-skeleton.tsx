import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  width?: string | number
  height?: string | number
  lines?: number
}

export function Skeleton({ 
  className, 
  variant = 'rectangular', 
  width, 
  height, 
  lines = 1 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded'
  
  if (variant === 'text') {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              'h-4',
              i === lines - 1 ? 'w-3/4' : 'w-full',
              className
            )}
          />
        ))}
      </div>
    )
  }

  if (variant === 'circular') {
    return (
      <div
        className={cn(
          baseClasses,
          'rounded-full',
          className
        )}
        style={{
          width: width || '40px',
          height: height || '40px'
        }}
      />
    )
  }

  if (variant === 'card') {
    return (
      <div className={cn('space-y-3', className)}>
        <div className={cn(baseClasses, 'h-48 w-full')} />
        <div className="space-y-2">
          <div className={cn(baseClasses, 'h-4 w-3/4')} />
          <div className={cn(baseClasses, 'h-4 w-1/2')} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(baseClasses, className)}
      style={{
        width: width || '100%',
        height: height || '20px'
      }}
    />
  )
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4">
      <Skeleton variant="rectangular" height="200px" className="w-full rounded-lg" />
      <div className="space-y-3">
        <Skeleton variant="text" lines={2} />
        <div className="flex space-x-2">
          <Skeleton variant="circular" width="60px" height="24px" />
          <Skeleton variant="circular" width="80px" height="24px" />
        </div>
        <Skeleton variant="text" lines={1} className="w-2/3" />
      </div>
    </div>
  )
}

// Modal Skeleton
export function ModalSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <Skeleton variant="text" lines={2} />
      </div>
      <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
        <div className="lg:w-1/2 p-6">
          <Skeleton variant="rectangular" height="400px" className="w-full rounded-xl mb-4" />
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} variant="rectangular" height="80px" className="rounded-lg" />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 p-6">
          <div className="space-y-6">
            <Skeleton variant="text" lines={3} />
            <Skeleton variant="text" lines={2} />
            <Skeleton variant="text" lines={1} className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        <Skeleton variant="rectangular" height="60px" className="w-3/4 mx-auto" />
        <Skeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
        <div className="flex justify-center space-x-4">
          <Skeleton variant="rectangular" width="150px" height="50px" />
          <Skeleton variant="rectangular" width="150px" height="50px" />
        </div>
      </div>
    </div>
  )
}
