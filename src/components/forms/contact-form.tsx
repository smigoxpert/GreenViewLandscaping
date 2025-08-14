'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  Heart,
} from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Invalid submission'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const services = [
  { value: 'lawn-maintenance', label: 'Lawn Maintenance', icon: '🌱' },
  { value: 'landscape-design', label: 'Landscape Design', icon: '🎨' },
  { value: 'hardscaping', label: 'Hardscaping', icon: '🏗️' },
  { value: 'tree-services', label: 'Tree Services', icon: '🌳' },
  { value: 'irrigation', label: 'Irrigation Systems', icon: '💧' },
  { value: 'seasonal-cleanup', label: 'Seasonal Cleanup', icon: '🍂' },
  { value: 'other', label: 'Other Services', icon: '✨' },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      honeypot: '',
    },
  })

  const watchedValues = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = Object.keys(errors).length === 0 && isDirty

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            </motion.div>
            <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
            <CardDescription className="text-green-100">
              Let's discuss your landscaping vision
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <motion.div
                  className={`absolute left-4 top-4 transition-all duration-300 ${
                    focusedField === 'name' || watchedValues.name
                      ? 'text-green-600 scale-90 -translate-y-6'
                      : 'text-gray-400'
                  }`}
                  initial={false}
                  animate={{
                    scale:
                      focusedField === 'name' || watchedValues.name ? 0.9 : 1,
                    y: focusedField === 'name' || watchedValues.name ? -24 : 0,
                  }}
                >
                  <User className="w-5 h-5" />
                </motion.div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    focusedField === 'name'
                      ? 'border-green-500 shadow-lg shadow-green-500/25'
                      : errors.name
                        ? 'border-red-500'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.div
                  className={`absolute left-4 top-4 transition-all duration-300 ${
                    focusedField === 'email' || watchedValues.email
                      ? 'text-green-600 scale-90 -translate-y-6'
                      : 'text-gray-400'
                  }`}
                  initial={false}
                  animate={{
                    scale:
                      focusedField === 'email' || watchedValues.email ? 0.9 : 1,
                    y:
                      focusedField === 'email' || watchedValues.email ? -24 : 0,
                  }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    focusedField === 'email'
                      ? 'border-green-500 shadow-lg shadow-green-500/25'
                      : errors.email
                        ? 'border-red-500'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <motion.div
                  className={`absolute left-4 top-4 transition-all duration-300 ${
                    focusedField === 'phone' || watchedValues.phone
                      ? 'text-green-600 scale-90 -translate-y-6'
                      : 'text-gray-400'
                  }`}
                  initial={false}
                  animate={{
                    scale:
                      focusedField === 'phone' || watchedValues.phone ? 0.9 : 1,
                    y:
                      focusedField === 'phone' || watchedValues.phone ? -24 : 0,
                  }}
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    focusedField === 'phone'
                      ? 'border-green-500 shadow-lg shadow-green-500/25'
                      : errors.phone
                        ? 'border-red-500'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Service Selection */}
              <div className="relative">
                <select
                  {...register('service')}
                  className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none appearance-none ${
                    focusedField === 'service' || watchedValues.service
                      ? 'border-green-500 shadow-lg shadow-green-500/25'
                      : errors.service
                        ? 'border-red-500'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="">Select a Service</option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.icon} {service.label}
                    </option>
                  ))}
                </select>
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  animate={{ rotate: focusedField === 'service' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400" />
                </motion.div>
                <AnimatePresence>
                  {errors.service && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.service.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.div
                  className={`absolute left-4 top-4 transition-all duration-300 ${
                    focusedField === 'message' || watchedValues.message
                      ? 'text-green-600 scale-90 -translate-y-6'
                      : 'text-gray-400'
                  }`}
                  initial={false}
                  animate={{
                    scale:
                      focusedField === 'message' || watchedValues.message
                        ? 0.9
                        : 1,
                    y:
                      focusedField === 'message' || watchedValues.message
                        ? -24
                        : 0,
                  }}
                >
                  <MessageSquare className="w-5 h-5" />
                </motion.div>
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none resize-none ${
                    focusedField === 'message'
                      ? 'border-green-500 shadow-lg shadow-green-500/25'
                      : errors.message
                        ? 'border-red-500'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Honeypot Field */}
              <input
                {...register('honeypot')}
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full h-14 text-lg font-semibold transition-all duration-300 ${
                    isFormValid
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 180 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ready to transform your outdoor space? We're here to help you create
            the landscape of your dreams. Get in touch for a free consultation.
          </p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start space-x-4 group"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600">
                123 Garden Street, Glendale, AZ 78701
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start space-x-4 group"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600">(512) 555-0123</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-start space-x-4 group"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600">hello@greenthumb.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-start space-x-4 group"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Business Hours
              </h3>
              <p className="text-gray-600">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100"
        >
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span>Why Choose Us?</span>
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free consultations and estimates</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Licensed and insured professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>15+ years of experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% customer satisfaction guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">Can't wait to get started?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            <span>Start Your Project Today</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
