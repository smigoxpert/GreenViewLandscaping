import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
        className
      )}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <div className="space-y-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  )
}

function SkeletonProjectCard() {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden dark:border-gray-700">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}

function SkeletonServiceCard() {
  return (
    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <div className="space-y-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-[180px]" />
          <Skeleton className="h-4 w-[220px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  )
}

function SkeletonTeamCard() {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden dark:border-gray-700">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
        <Skeleton className="h-4 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-20 mx-auto" />
          <Skeleton className="h-4 w-16 mx-auto" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 mx-auto" />
          <div className="flex justify-center space-x-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkeletonTimeline() {
  return (
    <div className="relative space-y-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full dark:bg-gray-700" />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="relative flex items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full border-4 border-white dark:bg-gray-700 dark:border-gray-800 z-10" />
          <div
            className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12 text-left'}`}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg dark:bg-gray-800">
              <Skeleton className="h-6 w-16 mb-2" />
              <Skeleton className="h-5 w-32 mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function SkeletonStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-4">
          <Skeleton className="w-16 h-16 rounded-full mx-auto" />
          <Skeleton className="h-8 w-20 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  )
}

function SkeletonValues() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-4">
          <Skeleton className="w-20 h-20 rounded-full mx-auto" />
          <Skeleton className="h-5 w-32 mx-auto" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  )
}

function SkeletonHero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <Skeleton className="h-6 w-48 mx-auto" />
        <Skeleton className="h-16 w-full max-w-3xl mx-auto" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-8 w-16 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkeletonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>

          <SkeletonStats />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-80 w-full rounded-2xl" />
          </div>

          <SkeletonValues />

          <SkeletonTimeline />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <SkeletonTeamCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Skeleton,
  SkeletonCard,
  SkeletonProjectCard,
  SkeletonServiceCard,
  SkeletonTeamCard,
  SkeletonTimeline,
  SkeletonStats,
  SkeletonValues,
  SkeletonHero,
  SkeletonPage,
}
