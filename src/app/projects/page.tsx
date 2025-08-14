'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Home,
  Trees,
  Sprout,
  Mountain,
  Droplets,
  Sun,
  ArrowRight,
  Calendar,
  MapPin,
  Building,
  Star,
  Eye,
  Heart,
  Share2,
  Filter,
  Search,
  X,
  Clock,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
  ImageIcon,
  Video,
  FileText,
  Download,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { projects as projectsData } from '@/content/data'

// Transform the data structure to match the component's expected format
const projects = [
  // Projects from data.ts
  ...projectsData.map((project, index) => ({
    id: index + 1,
    title: project.title,
    category: project.tags[0] || 'Landscape Design',
    location: `${project.city}, ${project.state}`,
    duration: '2-4 weeks',
    description: project.description,
    features: project.tags,
    image: project.cover,
    beforeAfter: true,
    rating: 4.8,
    reviews: 25,
    likes: 150,
    views: 1000,
    beforeImage: project.beforeImage,
    afterImage: project.afterImage,
    completionDate: project.date,
    budget: '$15,000 - $35,000',
    difficulty: 'Advanced',
  })),

  // Additional projects to cover all categories
  {
    id: projectsData.length + 1,
    title: 'Modern Zen Garden',
    category: 'Landscape Design',
    location: 'Glendale, AZ',
    duration: '3 weeks',
    description:
      'A contemporary Japanese-inspired garden featuring carefully placed stones, minimalist plantings, and a peaceful water feature.',
    features: ['Water Feature', 'Stone Pathways', 'Zen Plants', 'Lighting'],
    image:
      'https://images.unsplash.com/photo-1722953530874-93da110cdf69?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: true,
    rating: 4.9,
    reviews: 23,
    likes: 156,
    views: 1247,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg',
    completionDate: '2024-03-15',
    budget: '$25,000 - $35,000',
    difficulty: 'Advanced',
  },
  {
    id: projectsData.length + 2,
    title: 'Family Outdoor Living Space',
    category: 'Hardscaping',
    location: 'Scottsdale, AZ',
    duration: '4 weeks',
    description:
      'Complete outdoor living transformation including a custom patio, outdoor kitchen, and fire pit area for year-round entertainment.',
    features: ['Custom Patio', 'Outdoor Kitchen', 'Fire Pit', 'Seating Area'],
    image:
      'https://images.unsplash.com/photo-1597595735637-05a49627ee29?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: true,
    rating: 4.8,
    reviews: 31,
    likes: 203,
    views: 1892,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/1001676/pexels-photo-1001676.jpeg',
    completionDate: '2024-02-28',
    budget: '$45,000 - $60,000',
    difficulty: 'Advanced',
  },
  {
    id: projectsData.length + 3,
    title: 'Commercial Office Park',
    category: 'Commercial',
    location: 'Mesa, AZ',
    duration: '6 weeks',
    description:
      'Large-scale commercial landscaping project featuring seasonal color displays, mature trees, and professional maintenance services.',
    features: [
      'Seasonal Flowers',
      'Mature Trees',
      'Professional Maintenance',
      'Irrigation',
    ],
    image:
      'https://images.unsplash.com/photo-1701002860449-1458a7e5357f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: true,
    rating: 4.6,
    reviews: 42,
    likes: 167,
    views: 2134,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/33404224/pexels-photo-33404224.jpeg',
    completionDate: '2023-12-10',
    budget: '$75,000 - $100,000',
    difficulty: 'Advanced',
  },
  {
    id: projectsData.length + 4,
    title: 'Heritage Tree Preservation',
    category: 'Tree Services',
    location: 'Gilbert, AZ',
    duration: '1 week',
    description:
      'Expert care and preservation of century-old oak trees, including pruning, disease treatment, and structural support.',
    features: [
      'Tree Pruning',
      'Disease Treatment',
      'Structural Support',
      'Preservation',
    ],
    image: 'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    beforeAfter: false,
    rating: 4.9,
    reviews: 15,
    likes: 78,
    views: 623,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    completionDate: '2024-03-01',
    budget: '$8,000 - $15,000',
    difficulty: 'Expert',
  },
  {
    id: projectsData.length + 5,
    title: 'Rooftop Garden Oasis',
    category: 'Urban Design',
    location: 'Glendale, AZ',
    duration: '3 weeks',
    description:
      'Innovative rooftop garden design creating a green space in the heart of the city with sustainable materials and native plants.',
    features: [
      'Rooftop Design',
      'Sustainable Materials',
      'Native Plants',
      'Urban Farming',
    ],
    image:
      'https://images.unsplash.com/photo-1527690499469-ef2eff9c6735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: true,
    rating: 4.8,
    reviews: 28,
    likes: 134,
    views: 987,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/1001676/pexels-photo-1001676.jpeg',
    completionDate: '2024-02-15',
    budget: '$30,000 - $45,000',
    difficulty: 'Advanced',
  },
  {
    id: projectsData.length + 6,
    title: 'Sustainable Water Garden',
    category: 'Sustainable Design',
    location: 'Phoenix, AZ',
    duration: '2 weeks',
    description:
      'Water-wise landscape design using native Arizona plants and efficient irrigation systems to create a beautiful, low-maintenance garden.',
    features: [
      'Native Plants',
      'Smart Irrigation',
      'Mulch Beds',
      'Drought Tolerant',
    ],
    image:
      'https://plus.unsplash.com/premium_photo-1686782502878-d965a74429a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: false,
    rating: 4.7,
    reviews: 18,
    likes: 89,
    views: 756,
    beforeImage:
      'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg',
    afterImage:
      'https://images.pexels.com/photos/33404224/pexels-photo-33404224.jpeg',
    completionDate: '2024-01-20',
    budget: '$15,000 - $25,000',
    difficulty: 'Intermediate',
  },
]

const categories = [
  {
    name: 'All Projects',
    icon: Home,
    count: projects.length,
    color: 'bg-gray-100 text-gray-800',
  },
  {
    name: 'Landscape Design',
    icon: Sprout,
    count: projects.filter(p => p.category === 'Landscape Design').length,
    color: 'bg-green-100 text-green-800',
  },
  {
    name: 'Hardscaping',
    icon: Mountain,
    count: projects.filter(p => p.category === 'Hardscaping').length,
    color: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'Sustainable Design',
    icon: Trees,
    count: projects.filter(p => p.category === 'Sustainable Design').length,
    color: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'Commercial',
    icon: Building,
    count: projects.filter(p => p.category === 'Commercial').length,
    color: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Tree Services',
    icon: Trees,
    count: projects.filter(p => p.category === 'Tree Services').length,
    color: 'bg-teal-100 text-teal-800',
  },
  {
    name: 'Urban Design',
    icon: Building,
    count: projects.filter(p => p.category === 'Urban Design').length,
    color: 'bg-purple-100 text-purple-800',
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const [showModal, setShowModal] = useState(false)

  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === 'All Projects' ||
      project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return (
          new Date(b.completionDate).getTime() -
          new Date(a.completionDate).getTime()
        )
      case 'oldest':
        return (
          new Date(a.completionDate).getTime() -
          new Date(b.completionDate).getTime()
        )
      case 'rating':
        return b.rating - a.rating
      case 'budget-low':
        return (
          parseInt(a.budget.split('-')[0].replace(/[^0-9]/g, '')) -
          parseInt(b.budget.split('-')[0].replace(/[^0-9]/g, ''))
        )
      case 'budget-high':
        return (
          parseInt(b.budget.split('-')[0].replace(/[^0-9]/g, '')) -
          parseInt(a.budget.split('-')[0].replace(/[^0-9]/g, ''))
        )
      default:
        return 0
    }
  })

  const openProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectDetails = () => {
    setShowModal(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed landscaping projects. Each
              project showcases our commitment to quality, creativity, and
              customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rated</option>
                <option value="budget-low">Budget: Low to High</option>
                <option value="budget-high">Budget: High to Low</option>
              </select>

              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 transition-all duration-200 ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 transition-all duration-200 ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <div className="w-4 h-4 flex flex-col gap-0.5">
                    <div className="w-full h-1 bg-current rounded-sm" />
                    <div className="w-full h-1 bg-current rounded-sm" />
                    <div className="w-full h-1 bg-current rounded-sm" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'ring-2 ring-green-500 ring-offset-2 scale-105'
                    : 'hover:shadow-md'
                } ${category.color}`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${viewMode}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {sortedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  viewMode={viewMode}
                  onViewDetails={() => openProjectDetails(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {sortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg mb-4">
                No projects found matching your criteria
              </div>
              <Button
                onClick={() => {
                  setSelectedCategory('All Projects')
                  setSearchTerm('')
                  setSortBy('newest')
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Inspired by our work? Let's discuss how we can transform your
              outdoor space into something equally amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={closeProjectDetails}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Project Details Modal Component
function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  // Set initial active image based on available images
  const [activeImage, setActiveImage] = useState<'before' | 'after'>(
    project.afterImage ? 'after' : 'before'
  )
  const [activeTab, setActiveTab] = useState<
    'overview' | 'gallery' | 'specs' | 'reviews'
  >('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'specs', label: 'Specifications', icon: CheckCircle },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-600">{project.location}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
          {/* Left Side - Image Gallery */}
          <div className="lg:w-1/2 p-6">
            <div className="relative h-80 lg:h-full rounded-xl overflow-hidden mb-4">
              <img
                src={
                  activeImage === 'before' && project.beforeImage
                    ? project.beforeImage
                    : project.afterImage || project.image
                }
                alt={`${project.title} - ${activeImage === 'before' ? 'Before' : 'After'}`}
                className="w-full h-full object-cover"
              />
              {project.beforeAfter &&
                project.beforeImage &&
                project.afterImage && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex space-x-1">
                      <button
                        onClick={() => setActiveImage('before')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          activeImage === 'before'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setActiveImage('after')}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          activeImage === 'after'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                )}
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-2">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                  activeImage === 'after'
                    ? 'ring-2 ring-green-500'
                    : 'hover:opacity-80'
                }`}
                onClick={() => setActiveImage('after')}
              />
              {project.beforeImage ? (
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                    activeImage === 'before'
                      ? 'ring-2 ring-green-500'
                      : 'hover:opacity-80'
                  }`}
                  onClick={() => setActiveImage('before')}
                />
              ) : (
                <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <ImageIcon className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">No Before</p>
                  </div>
                </div>
              )}
              {project.afterImage ? (
                <img
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                    activeImage === 'after'
                      ? 'ring-2 ring-green-500'
                      : 'hover:opacity-80'
                  }`}
                  onClick={() => setActiveImage('after')}
                />
              ) : (
                <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <ImageIcon className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">No After</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-green-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">
                          Duration
                        </span>
                      </div>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">
                          Budget
                        </span>
                      </div>
                      <p className="text-gray-600">{project.budget}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-green-50 text-green-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Before/After Status */}
                  {project.beforeAfter && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">
                        Project Documentation
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        {project.beforeImage && project.afterImage ? (
                          <div className="flex items-center space-x-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span>Before and After photos available</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 text-gray-600">
                            <ImageIcon className="w-5 h-5" />
                            <span>
                              Project photos available (Before/After coming
                              soon)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      {project.beforeImage ? (
                        <img
                          src={project.beforeImage}
                          alt={`${project.title} - Before`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <ImageIcon className="w-6 h-6 mb-2" />
                            <p className="text-sm">No Before Image</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      {project.afterImage ? (
                        <img
                          src={project.afterImage}
                          alt={`${project.title} - After`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <ImageIcon className="w-6 h-4 mb-2" />
                            <p className="text-sm">No After Image</p>
                          </div>
                        </div>
                      )}
                      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Specifications
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span className="font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Difficulty:</span>
                          <span className="font-medium">
                            {project.difficulty}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Completion Date:</span>
                          <span className="font-medium">
                            {project.completionDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Materials & Techniques
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Premium landscaping materials</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Professional installation techniques</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Quality assurance standards</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Client Reviews
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < project.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {project.rating}
                      </div>
                      <div className="text-gray-600">
                        ({project.reviews} reviews)
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 italic">
                        "Amazing work! The team transformed our space
                        completely. Professional, timely, and exceeded our
                        expectations."
                      </p>
                      <div className="mt-3 text-sm text-gray-500">
                        - Satisfied Client
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  viewMode,
  onViewDetails,
}: {
  project: (typeof projects)[0]
  index: number
  viewMode: 'grid' | 'list'
  onViewDetails: () => void
}) {
  const [isLiked, setIsLiked] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])

  const springConfig = { damping: 25, stiffness: 400 }
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

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <div className="h-64 lg:h-full relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.beforeAfter &&
                  project.beforeImage &&
                  project.afterImage && (
                    <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                  )}
              </div>
            </div>

            <div className="lg:w-2/3 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isLiked
                        ? 'text-red-500 bg-red-50'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
                    />
                  </button>
                  <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {project.rating} ({project.reviews})
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {project.likes}
                  </div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {project.views}
                  </div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {project.budget}
                  </div>
                  <div className="text-sm text-gray-600">Budget</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <Button
                  onClick={onViewDetails}
                  className="bg-green-600 hover:bg-green-700"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className="overflow-hidden hover:shadow-lg transition-all duration-300"
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
        <Card className="overflow-hidden">
          <div className="h-48 relative group overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Before/After Toggle */}
            {project.beforeAfter &&
              project.beforeImage &&
              project.afterImage && (
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200">
                  <Eye className="w-4 h-4 text-gray-700" />
                </button>
              )}

            {/* Like Button */}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-200 ${
                isLiked
                  ? 'text-red-500 bg-red-50'
                  : 'text-gray-400 bg-white/90 hover:text-red-500 hover:bg-red-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                {project.category}
              </Badge>
              {project.beforeAfter &&
                project.beforeImage &&
                project.afterImage && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Before/After
                  </Badge>
                )}
            </div>
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
            <CardDescription className="text-gray-600">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {project.rating} ({project.reviews})
                </span>
              </div>

              <div className="pt-3">
                <h4 className="font-medium text-gray-900 mb-2">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map(feature => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={onViewDetails}
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
