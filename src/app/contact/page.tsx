import { Metadata } from 'next'
import { Navbar } from '@/components/navigation/navbar'
import { ContactForm } from '@/components/forms/contact-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Green View Landscaping',
  description:
    "Get in touch with our landscaping experts. We're here to discuss your project and provide a free consultation.",
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(512) 555-0123',
    href: 'tel:+15125550123',
    description: 'Call us directly for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@greenthumb.com',
    href: 'mailto:info@greenthumb.com',
    description: 'Send us an email anytime',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: 'Glendale, AZ 78701',
    href: '#',
    description: 'Serving the greater Phoenix area',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 8AM-6PM',
    href: '#',
    description: 'Weekend appointments available',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your outdoor space? Get in touch with our team
            for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We're here to help you create the outdoor space of your
                  dreams. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title}>
                    <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {info.title}
                            </h3>
                            <a
                              href={info.href}
                              className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium block mb-1"
                            >
                              {info.content}
                            </a>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      Service Areas
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      We proudly serve the greater Phoenix metropolitan area
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-700 dark:text-gray-200">
                        • Phoenix
                      </div>
                      <div className="text-gray-700 dark:text-gray-200">
                        • Glendale
                      </div>
                      <div className="text-gray-700 dark:text-gray-200">
                        • Mesa
                      </div>
                      <div className="text-gray-700 dark:text-gray-200">
                        • Gilbert
                      </div>
                      <div className="text-gray-700 dark:text-gray-200">
                        • Scottsdale
                      </div>
                      <div className="text-gray-700 dark:text-gray-200">
                        • Tempe
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Don't wait to transform your outdoor space. Contact us today for a
              free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@greenthumb.com"
                className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
