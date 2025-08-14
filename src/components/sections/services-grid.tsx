'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { services as servicesData } from '@/content/data'

// Transform the data structure to match the component's expected format
const services = servicesData.map(service => ({
  title: service.name,
  description: service.excerpt,
  image: service.image,
  features: service.features.slice(0, 3), // Take first 3 features
  pricing: service.price,
  duration: service.duration,
  rating: 4.8, // Default rating since not in data
  reviews: 150, // Default reviews since not in data
  color: 'from-brand-500 to-brand-600', // Use brand colors
  bgColor: 'bg-brand-50',
  iconColor: 'text-brand-600',
}))

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive
            landscaping solutions tailored to your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your outdoor space?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 shadow-glow-green h-11 rounded-md px-8 magnetic-button group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set((e.clientX - centerX) / (rect.width / 2))
    mouseY.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className="rounded-lg text-card-foreground h-full relative overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.02,
          z: 20,
        }}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-[2px]">
          <div
            className={`bg-gradient-to-r ${service.color} h-full w-full rounded-lg`}
          />
        </div>

        {/* Content */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg h-full">
          <div className="flex flex-col space-y-1.5 p-6 pb-4">
            {/* Service Image */}
            <motion.div
              className="w-full h-32 mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Title */}
            <h3 className="font-semibold tracking-tight text-xl text-gray-900 dark:text-white group-hover:text-brand-600 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {service.description}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {service.rating} ({service.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="p-6 pt-0">
            {/* Features */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                >
                  <div
                    className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Pricing & CTA */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <div
                  className={`font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  {service.pricing}
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group/btn text-brand-600 hover:text-brand-700 hover:bg-brand-50 dark:hover:bg-brand-900/20 flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
