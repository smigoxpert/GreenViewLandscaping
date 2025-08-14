'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  const floatingAnimation2 = {
    y: [0, 15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1,
    },
  }

  const floatingAnimation3 = {
    y: [0, -25, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2,
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg"
          alt="Beautiful landscape background"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${scale}) translateY(${y})` }}
        />
      </div>
      
      {/* Strong Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Gradient Overlay for Dynamic Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/10" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/15 via-transparent to-purple-600/15 animate-pulse" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            animate={floatingAnimation}
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-white/90">
              Professional Landscaping Services
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your{' '}
          <span className="text-gradient bg-gradient-to-r from-brand-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Outdoor Space
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Create stunning landscapes that enhance your property value and
          provide years of enjoyment. From design to maintenance, we handle it
          all.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton href="/contact" variant="primary">
            Get a Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton href="/projects" variant="secondary">
            View Projects
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-white/70"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1 }}
            animate={floatingAnimation}
          >
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm">Years Experience</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1 }}
            animate={floatingAnimation2}
          >
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm">Happy Clients</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1 }}
            animate={floatingAnimation3}
          >
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm">Satisfaction</div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-6 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">5-Star Rated</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// Magnetic Button Component
function MagneticButton({
  href,
  variant = 'primary',
  children,
}: {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    buttonRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0px, 0px)'
    }
  }

  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 rounded-lg px-10 text-lg group'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 shadow-glow-green hover:shadow-xl',
    secondary:
      'bg-white/90 text-gray-900 border-gray-200 hover:bg-white shadow-lg backdrop-blur-sm hover:shadow-xl',
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        ref={buttonRef}
        href={href}
        className={`${baseClasses} ${variantClasses[variant]}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    </motion.div>
  )
}
