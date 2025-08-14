'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  TrendingUp,
  Heart,
  Leaf,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
  {
    name: 'Derrick Johnson',
    role: 'Lead Landscape Designer',
    experience: '15+ years',
    specialty: 'Sustainable Design',
    image:
      'https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?w=2560&h=1440&fit=facearea&facepad=15',
    bio: 'Derrick specializes in creating eco-friendly landscapes that harmonize with nature while meeting client needs.',
    certifications: ['Certified Landscape Architect', 'LEED Green Associate'],
    rating: 4.9,
    projects: 127,
  },
  {
    name: 'Michael Brown',
    role: 'Hardscaping Specialist',
    experience: '12+ years',
    specialty: 'Stone & Concrete Work',
    image:
      'https://images.unsplash.com/photo-1614890085618-0e1054da74f8?w=2560&h=1440&fit=facearea&facepad=15',
    bio: 'Michael brings precision and creativity to every hardscaping project, from patios to retaining walls.',
    certifications: ['ICPI Certified', 'Concrete Specialist'],
    rating: 4.8,
    projects: 89,
  },
  {
    name: 'Elijah Rodriguez',
    role: 'Garden Maintenance Expert',
    experience: '10+ years',
    specialty: 'Organic Care',
    image:
      'https://images.pexels.com/photos/28243016/pexels-photo-28243016.jpeg?w=2560&h=1440&fit=facearea&facepad=15',
    bio: 'Elijah ensures every garden thrives with her expertise in organic maintenance and plant health.',
    certifications: ['Master Gardener', 'Organic Land Care'],
    rating: 4.9,
    projects: 156,
  },
]

const stats = [
  {
    label: 'Years Experience',
    value: '15+',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Happy Clients',
    value: '500+',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    label: 'Projects Completed',
    value: '1000+',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Team Members',
    value: '25+',
    icon: Users,
    color: 'from-purple-500 to-violet-500',
  },
]

const values = [
  {
    title: 'Sustainability First',
    description:
      'We prioritize eco-friendly practices and materials in every project.',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Quality Craftsmanship',
    description:
      'Every detail matters. We never compromise on quality or attention to detail.',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Your happiness is our success. We go above and beyond to exceed expectations.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Innovation',
    description:
      'We stay ahead of trends and embrace new technologies and techniques.',
    icon: TrendingUp,
    color: 'from-blue-500 to-indigo-500',
  },
]

const timeline = [
  {
    year: '2009',
    title: 'Company Founded',
    description:
      'Started as a small family business with a passion for landscaping.',
    milestone: 'First project completed',
  },
  {
    year: '2012',
    title: 'First Major Contract',
    description: 'Secured our first commercial landscaping contract.',
    milestone: 'Expanded to 5 team members',
  },
  {
    year: '2015',
    title: 'Sustainability Focus',
    description: 'Launched our eco-friendly landscaping division.',
    milestone: 'Certified as green business',
  },
  {
    year: '2018',
    title: 'Regional Expansion',
    description: 'Expanded services to cover the entire Phoenix metro area.',
    milestone: 'Reached 1000+ projects',
  },
  {
    year: '2021',
    title: 'Digital Innovation',
    description: 'Launched 3D design services and virtual consultations.',
    milestone: '100% customer satisfaction',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description:
      'Recognized as one of the top landscaping companies in Arizona.',
    milestone: '500+ happy clients',
  },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [activeValue, setActiveValue] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20"
          style={{ y, opacity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Green View</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about transforming outdoor spaces into beautiful,
              sustainable landscapes that enhance your property and bring joy to
              your daily life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, Green View Landscaping began as a small family
                business with a simple mission: to create beautiful outdoor
                spaces that bring joy and value to our clients' lives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a passion project has grown into one of
                Phoenix's most trusted landscaping companies. We've maintained
                our family values while expanding our expertise and services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve hundreds of satisfied clients across
                Central Arizona, creating landscapes that not only look
                beautiful but also respect and enhance the natural environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Licensed and insured professionals',
                      '15+ years of experience',
                      'Eco-friendly practices',
                      '100% customer satisfaction guarantee',
                      'Free consultations and estimates',
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from the smallest garden
              maintenance to the largest landscape design projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(-1)}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 ${
                    activeValue === index ? 'scale-110 shadow-lg' : ''
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've
              grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 to-blue-500 h-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12 text-left'}`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="text-sm text-green-600 font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are passionate about landscaping and
              committed to delivering exceptional results on every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      {member.experience}
                    </div>
                  </div>

                  <CardHeader className="text-center">
                    <CardTitle className="text-xl mb-2">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{member.bio}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {member.rating} Rating
                        </span>
                      </div>

                      <div className="text-sm text-gray-500">
                        {member.projects} Projects Completed
                      </div>

                      <div className="pt-3">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Specialties:
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.certifications.map(cert => (
                            <Badge
                              key={cert}
                              variant="outline"
                              className="text-xs"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your landscaping vision and create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-green-600"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
