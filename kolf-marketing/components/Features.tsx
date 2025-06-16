'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  UserCheck, 
  Trophy, 
  TrendingUp, 
  CreditCard, 
  BarChart3, 
  Building,
  Clock,
  Star,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Settings,
  CheckCircle
} from 'lucide-react'

const featureCategories = [
  {
    title: 'Golf Operations',
    description: 'Complete operational management built for Asian golf markets',
    icon: Calendar,
    color: 'primary',
    features: [
      {
        icon: Clock,
        title: 'Smart Tee Time Management',
        description: 'Real-time booking with 10-minute slots, waitlists, and QR check-in system',
        highlights: ['Real-time availability', 'Group booking support', 'Mobile-responsive interface']
      },
      {
        icon: UserCheck,
        title: 'Caddie Management System',
        description: 'Complete caddie assignment, performance tracking, and commission management',
        highlights: ['5-star rating system', 'Block caddie assignment', 'Commission calculations']
      },
      {
        icon: Users,
        title: 'Member Management',
        description: 'Multi-tier memberships, handicap tracking, and guest privileges',
        highlights: ['WHS handicap compliance', 'Multiple membership tiers', 'Guest pass management']
      },
      {
        icon: Trophy,
        title: 'Tournament Platform',
        description: 'Full tournament lifecycle from registration to live scoring',
        highlights: ['Multiple tournament formats', 'Live leaderboards', 'Automated prize distribution']
      }
    ]
  },
  {
    title: 'Revenue Optimization',
    description: 'Advanced pricing and financial management to maximize profitability',
    icon: TrendingUp,
    color: 'green',
    features: [
      {
        icon: Zap,
        title: 'Dynamic Pricing Engine',
        description: 'Weather-based, time-based, and demand-based pricing automation',
        highlights: ['Peak hour pricing', 'Weather adjustments', 'Last-minute deals']
      },
      {
        icon: CreditCard,
        title: 'Multi-Payment Support',
        description: 'Credit cards, PromptPay, LINE Pay, and tour operator accounts',
        highlights: ['Local payment methods', 'Recurring payments', 'Multi-currency support']
      },
      {
        icon: BarChart3,
        title: 'Business Intelligence',
        description: 'Real-time dashboards, RevPATT metrics, and predictive analytics',
        highlights: ['Real-time dashboards', 'Custom reports', 'Predictive analytics']
      },
      {
        icon: Building,
        title: 'Tour Operator Portal',
        description: 'Bulk bookings, credit management, and commission tracking',
        highlights: ['Bulk player upload', 'Credit accounts', 'Commission automation']
      }
    ]
  },
  {
    title: 'Technology & Integration',
    description: 'Modern technology stack with seamless integrations',
    icon: Smartphone,
    color: 'blue',
    features: [
      {
        icon: Globe,
        title: 'Multi-Language Support',
        description: '5 languages with professional translations and cultural considerations',
        highlights: ['English, Thai, Korean, Japanese, Chinese', 'Cultural UX adaptations', 'Professional translations']
      },
      {
        icon: Smartphone,
        title: 'Mobile-First Design',
        description: 'Progressive Web App with native app performance',
        highlights: ['60% mobile bookings', 'PWA capabilities', 'Offline functionality']
      },
      {
        icon: Settings,
        title: 'API & Integrations',
        description: 'RESTful API with webhook support for all features',
        highlights: ['Complete REST API', 'Webhook support', 'Third-party integrations']
      },
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-level security with compliance and audit trails',
        highlights: ['AES-256 encryption', 'GDPR compliance', 'Complete audit trail']
      }
    ]
  }
]

const stats = [
  { number: '500+', label: 'Golf Courses', description: 'Across Asia' },
  { number: '1M+', label: 'Monthly Bookings', description: 'Processed seamlessly' },
  { number: '99.9%', label: 'Uptime', description: 'Guaranteed SLA' },
  { number: '30%', label: 'Revenue Increase', description: 'Average improvement' },
  { number: '80%', label: 'No-show Reduction', description: 'Through automation' },
  { number: '15hrs', label: 'Time Saved', description: 'Per week per course' }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Complete Golf Management Solution
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Run a{' '}
            <span className="gradient-text">Modern Golf Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for Asian golf operations with deep understanding of local requirements
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 card-hover"
            >
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                  category.color === 'primary' ? 'bg-primary-100' :
                  category.color === 'green' ? 'bg-green-100' :
                  category.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                } mb-6`}>
                  <category.icon className={`w-8 h-8 ${
                    category.color === 'primary' ? 'text-primary-600' :
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl ${
                        category.color === 'primary' ? 'bg-primary-100' :
                        category.color === 'green' ? 'bg-green-100' :
                        category.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                      } flex items-center justify-center mr-4`}>
                        <feature.icon className={`w-6 h-6 ${
                          category.color === 'primary' ? 'text-primary-600' :
                          category.color === 'green' ? 'text-green-600' :
                          category.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to See KOLF in Action?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a personalized demo and see how KOLF can transform your golf course operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Schedule Free Demo
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}