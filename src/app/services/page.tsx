'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'
import { services } from '@/content/data'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How often should I schedule lawn maintenance?',
    answer:
      'For most properties, we recommend weekly or bi-weekly maintenance during the growing season (spring through fall). This ensures your lawn stays healthy and well-maintained throughout the year.',
  },
  {
    question: 'Do you offer emergency tree services?',
    answer:
      'Yes, we provide 24/7 emergency tree services for dangerous situations like storm damage, fallen trees, or hazardous limbs that pose immediate safety risks.',
  },
  {
    question: 'How long does a landscape design project take?',
    answer:
      "The timeline varies depending on project complexity. Simple designs may take 2-3 weeks, while complex projects with multiple phases can take 6-8 weeks or more. We'll provide a detailed timeline during consultation.",
  },
  {
    question: 'What areas do you service?',
    answer:
      'We primarily serve the greater Phoenix metropolitan area, including Tempe, Glendale, Mesa, Gilbert, Scottsdale, and surrounding communities within a 40-mile radius.',
  },
  {
    question: 'Do you provide ongoing maintenance after installation?',
    answer:
      'Absolutely! We offer comprehensive maintenance programs to keep your landscape looking its best year-round. This includes seasonal care, plant health monitoring, and system maintenance.',
  },
  {
    question: 'Are your services eco-friendly?',
    answer:
      'Yes, we prioritize sustainable practices including native plant selection, water-efficient irrigation, organic fertilizers, and eco-friendly pest management solutions.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From initial design to ongoing maintenance, we provide comprehensive
            landscaping solutions that transform your outdoor space and enhance
            your property value.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.name}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                        >
                          <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      {service.price && (
                        <div className="text-2xl font-bold text-brand-600">
                          {service.price}
                        </div>
                      )}
                      {service.duration && (
                        <div className="text-gray-600 dark:text-gray-400">
                          Duration: {service.duration}
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      <Button
                        asChild
                        size="lg"
                        variant="gradient"
                        className="magnetic-button"
                      >
                        <Link
                          href="/contact"
                          className="flex items-center space-x-2"
                        >
                          <span>Get a Quote</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get answers to common questions about our landscaping services
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="magnetic-button"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
