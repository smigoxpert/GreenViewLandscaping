'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const pricingPlans = [
  {
    name: 'Basic',
    price: '$299',
    period: '/month',
    description: 'Perfect for small properties and basic maintenance needs',
    features: [
      'Weekly lawn mowing',
      'Basic edging and trimming',
      'Seasonal cleanup',
      'Basic fertilization',
      'Weed control',
      'Email support',
    ],
    popular: false,
    cta: 'Get Started',
    href: '/contact?plan=basic',
  },
  {
    name: 'Standard',
    price: '$599',
    period: '/month',
    description: 'Our most popular plan for comprehensive landscape care',
    features: [
      'Everything in Basic, plus:',
      'Advanced fertilization program',
      'Pest and disease monitoring',
      'Irrigation system maintenance',
      'Plant health assessments',
      'Priority scheduling',
      'Phone and email support',
      'Quarterly consultations',
    ],
    popular: true,
    cta: 'Get Started',
    href: '/contact?plan=standard',
  },
  {
    name: 'Premier',
    price: '$999',
    period: '/month',
    description: 'Complete landscape management for premium properties',
    features: [
      'Everything in Standard, plus:',
      'Custom landscape design',
      'Hardscape maintenance',
      'Tree and shrub care',
      'Water feature maintenance',
      '24/7 emergency service',
      'Dedicated account manager',
      'Monthly consultations',
      'Annual landscape audit',
    ],
    popular: false,
    cta: 'Get Started',
    href: '/contact?plan=premier',
  },
]

export function PricingTiers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your needs and budget. All plans
            include our quality guarantee and professional service.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <Card
                className={cn(
                  'h-full relative overflow-hidden',
                  plan.popular
                    ? 'gradient-border shadow-2xl scale-105'
                    : 'border-gray-200 dark:border-gray-700 shadow-lg'
                )}
              >
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-blue-500/5" />
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                      >
                        <Check className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200 text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={cn(
                      'w-full',
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-500 to-blue-500 hover:from-brand-600 hover:to-blue-600 text-white'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                    )}
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Need a custom plan? We're happy to work with you to create a
            solution that fits your specific needs.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="magnetic-button"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
