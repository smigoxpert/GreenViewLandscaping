'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Phoenix Metro Area Cities and Service Areas
const serviceAreas = [
  {
    name: 'Phoenix',
    county: 'Maricopa',
    zipCodes: ['85001', '85002', '85003', '85004', '85005', '85006', '85007', '85008', '85009', '85010', '85011', '85012', '85013', '85014', '85015', '85016', '85017', '85018', '85019', '85020', '85021', '85022', '85023', '85024', '85025', '85026', '85027', '85028', '85029', '85030', '85031', '85032', '85033', '85034', '85035', '85036', '85037', '85038', '85039', '85040', '85041', '85042', '85043', '85044', '85045', '85046', '85047', '85048', '85049', '85050', '85051', '85053', '85054', '85055', '85056', '85057', '85058', '85059', '85060', '85061', '85062', '85063', '85064', '85065', '85066', '85067', '85068', '85069', '85070', '85071', '85072', '85073', '85074', '85075', '85076', '85077', '85078', '85079', '85080', '85081', '85082', '85083', '85085', '85086', '85087', '85089', '85090', '85091', '85092', '85093', '85094', '85095', '85096', '85097', '85098', '85099'],
    population: '1.6M+',
    services: ['Landscape Design', 'Hardscaping', 'Tree Services', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.9,
    projects: 450
  },
  {
    name: 'Scottsdale',
    county: 'Maricopa',
    zipCodes: ['85250', '85251', '85252', '85253', '85254', '85255', '85256', '85257', '85258', '85259', '85260', '85261', '85262', '85263', '85264', '85265', '85266', '85267', '85268', '85269', '85271', '85272', '85273', '85274', '85275', '85276', '85277', '85278', '85279', '85280', '85281', '85282', '85283', '85284', '85285', '85286', '85287', '85288', '85289', '85290', '85291', '85292', '85293', '85294', '85295', '85296', '85297', '85298', '85299'],
    population: '240K+',
    services: ['Luxury Landscaping', 'Pool Landscaping', 'Desert Design', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.9,
    projects: 180
  },
  {
    name: 'Mesa',
    county: 'Maricopa',
    zipCodes: ['85201', '85202', '85203', '85204', '85205', '85206', '85207', '85208', '85209', '85210', '85211', '85212', '85213', '85214', '85215', '85216', '85217', '85218', '85219', '85220', '85221', '85222', '85223', '85224', '85225', '85226', '85227', '85228', '85229', '85230', '85231', '85232', '85233', '85234', '85235', '85236', '85237', '85238', '85239', '85240', '85241', '85242', '85243', '85244', '85245', '85246', '85247', '85248', '85249', '85250', '85251', '85252', '85253', '85254', '85255', '85256', '85257', '85258', '85259', '85260', '85261', '85262', '85263', '85264', '85265', '85266', '85267', '85268', '85269', '85270', '85271', '85272', '85273', '85274', '85275', '85276', '85277', '85278', '85279', '85280', '85281', '85282', '85283', '85284', '85285', '85286', '85287', '85288', '85289', '85290', '85291', '85292', '85293', '85294', '85295', '85296', '85297', '85298', '85299'],
    population: '500K+',
    services: ['Residential Design', 'Commercial Landscaping', 'Irrigation', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.8,
    projects: 220
  },
  {
    name: 'Tempe',
    county: 'Maricopa',
    zipCodes: ['85280', '85281', '85282', '85283', '85284', '85285', '85286', '85287', '85288', '85289', '85290', '85291', '85292', '85293', '85294', '85295', '85296', '85297', '85298', '85299'],
    population: '180K+',
    services: ['University Landscaping', 'Modern Design', 'Sustainable Landscaping', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.8,
    projects: 95
  },
  {
    name: 'Chandler',
    county: 'Maricopa',
    zipCodes: ['85224', '85225', '85226', '85227', '85228', '85229', '85230', '85231', '85232', '85233', '85234', '85235', '85236', '85237', '85238', '85239', '85240', '85241', '85242', '85243', '85244', '85245', '85246', '85247', '85248', '85249', '85250', '85251', '85252', '85253', '85254', '85255', '85256', '85257', '85258', '85259', '85260', '85261', '85262', '85263', '85264', '85265', '85266', '85267', '85268', '85269', '85270', '85271', '85272', '85273', '85274', '85275', '85276', '85277', '85278', '85279', '85280', '85281', '85282', '85283', '85284', '85285', '85286', '85287', '85288', '85289', '85290', '85291', '85292', '85293', '85294', '85295', '85296', '85297', '85298', '85299'],
    population: '280K+',
    services: ['Family Landscaping', 'Outdoor Living', 'Pool Landscaping', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.9,
    projects: 160
  },
  {
    name: 'Gilbert',
    county: 'Maricopa',
    zipCodes: ['85233', '85234', '85235', '85236', '85237', '85238', '85239', '85240', '85241', '85242', '85243', '85244', '85245', '85246', '85247', '85248', '85249', '85250', '85251', '85252', '85253', '85254', '85255', '85256', '85257', '85258', '85259', '85260', '85261', '85262', '85263', '85264', '85265', '85266', '85267', '85268', '85269', '85270', '85271', '85272', '85273', '85274', '85275', '85276', '85277', '85278', '85279', '85280', '85281', '85282', '85283', '85284', '85285', '85286', '85287', '85288', '85289', '85290', '85291', '85292', '85293', '85294', '85295', '85296', '85297', '85298', '85299'],
    population: '270K+',
    services: ['Family Design', 'Modern Landscaping', 'Desert Plants', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.9,
    projects: 140
  },
  {
    name: 'Peoria',
    county: 'Maricopa',
    zipCodes: ['85345', '85346', '85347', '85348', '85349', '85350', '85351', '85352', '85353', '85354', '85355', '85356', '85357', '85358', '85359', '85360', '85361', '85362', '85363', '85364', '85365', '85366', '85367', '85368', '85369', '85370', '85371', '85372', '85373', '85374', '85375', '85376', '85377', '85378', '85379', '85380', '85381', '85382', '85383', '85384', '85385', '85386', '85387', '85388', '85389', '85390', '85391', '85392', '85393', '85394', '85395', '85396', '85397', '85398', '85399'],
    population: '190K+',
    services: ['Residential Design', 'Commercial Landscaping', 'Tree Services', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.8,
    projects: 110
  },
  {
    name: 'Surprise',
    county: 'Maricopa',
    zipCodes: ['85374', '85375', '85376', '85377', '85378', '85379', '85380', '85381', '85382', '85383', '85384', '85385', '85386', '85387', '85388', '85389', '85390', '85391', '85392', '85393', '85394', '85395', '85396', '85397', '85398', '85399'],
    population: '140K+',
    services: ['New Home Landscaping', 'Desert Design', 'Irrigation', 'Maintenance'],
    responseTime: '24-48 hours',
    rating: 4.8,
    projects: 85
  }
]

export function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState(serviceAreas[0])
  const [isExpanded, setIsExpanded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  const handleAreaSelect = (area: typeof serviceAreas[0]) => {
    setSelectedArea(area)
    setIsExpanded(true)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving <span className="text-gradient">Phoenix Metro Area</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly serve the greater Phoenix metropolitan area with professional landscaping services. 
            From downtown Phoenix to the surrounding suburbs, we're your local landscaping experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Service Coverage
              </h3>
              
              {/* Phoenix Metro Map Visualization */}
              <div className="relative mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl border-2 border-green-200 relative overflow-hidden">
                  {/* Central Phoenix */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      PHX
                    </div>
                  </div>
                  
                  {/* Surrounding Cities */}
                  {serviceAreas.slice(1).map((area, index) => {
                    const angle = (index * 45) * (Math.PI / 180)
                    const radius = 80
                    const x = Math.cos(angle) * radius + 50
                    const y = Math.sin(angle) * radius + 50
                    
                    return (
                      <motion.div
                        key={area.name}
                        className="absolute cursor-pointer"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAreaSelect(area)}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-300">
                          {area.name.slice(0, 3).toUpperCase()}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-md whitespace-nowrap">
                          {area.name}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
                
                {/* Legend */}
                <div className="flex justify-center space-x-6 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Phoenix (Central)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Surrounding Cities</span>
                  </div>
                </div>
              </div>

              {/* Service Area Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {serviceAreas.length}
                  </div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {serviceAreas.reduce((acc, area) => acc + area.projects, 0).toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Area Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Selected Area Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedArea.name}, Arizona
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{selectedArea.rating}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">County</div>
                    <div className="text-gray-600">{selectedArea.county} County</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Population</div>
                    <div className="text-gray-600">{selectedArea.population}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Response Time</div>
                    <div className="text-gray-600">{selectedArea.responseTime}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Projects Completed</div>
                    <div className="text-gray-600">{selectedArea.projects.toLocaleString()}+</div>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Services Offered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArea.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote for {selectedArea.name}
                </Button>
              </div>
            </div>

            {/* All Areas Quick Select */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-4">Quick Select Service Area</h4>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <button
                    key={area.name}
                    onClick={() => handleAreaSelect(area)}
                    className={`p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedArea.name === area.name
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{area.name}</div>
                    <div className="text-sm text-gray-600">{area.county} County</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Local Business Information */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Local Phoenix Landscaping?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Expertise</h4>
              <p className="text-gray-600">
                We understand Phoenix's unique climate, soil conditions, and native plants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Response</h4>
              <p className="text-gray-600">
                Quick response times across the entire Phoenix metro area.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
              <p className="text-gray-600">
                Thousands of satisfied customers across Phoenix and surrounding areas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
