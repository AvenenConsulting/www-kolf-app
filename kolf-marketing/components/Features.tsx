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
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Award
} from 'lucide-react'

const platformHighlights = [
  {
    icon: Target,
    title: "Built for Asia",
    description: "Designed specifically for Asian golf markets with deep local expertise"
  },
  {
    icon: Zap,
    title: "Target 40% Revenue Boost",
    description: "Projected revenue increase through dynamic pricing and optimization"
  },
  {
    icon: Clock,
    title: "Save 15 Hours Weekly",
    description: "Projected savings through intelligent automation and streamlined operations"
  },
  {
    icon: Award,
    title: "Enterprise-Grade Platform",
    description: "Built for reliability with enterprise-level architecture"
  }
]

const coreFeatures = [
  {
    icon: Calendar,
    title: "Smart Tee Time Engine",
    description: "Revolutionary booking system with real-time availability, dynamic pricing, and automated waitlist management.",
    benefits: [
      "10-minute precision booking slots",
      "QR code check-in system", 
      "Weather-based pricing adjustments",
      "Automated no-show prevention"
    ],
    color: "emerald"
  },
  {
    icon: UserCheck,
    title: "Caddie Excellence Platform",
    description: "Complete caddie ecosystem with performance tracking, smart assignments, and commission automation.",
    benefits: [
      "5-star rating & feedback system",
      "Block caddie assignment logic",
      "Automated commission calculations",
      "Performance analytics dashboard"
    ],
    color: "yellow"
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization AI",
    description: "Intelligent pricing engine that maximizes revenue through demand forecasting and market analysis.",
    benefits: [
      "Peak hour dynamic pricing",
      "Weather impact algorithms",
      "Last-minute deal automation",
      "RevPATT analytics & insights"
    ],
    color: "emerald"
  },
  {
    icon: Trophy,
    title: "Tournament Management Pro",
    description: "End-to-end tournament platform from registration to live scoring and prize distribution.",
    benefits: [
      "Multiple tournament formats",
      "Live leaderboard updates",
      "Automated handicap calculations",
      "Prize distribution automation"
    ],
    color: "yellow"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Progressive Web App delivering native performance with 60% of bookings happening on mobile.",
    benefits: [
      "PWA technology for app-like experience",
      "Offline functionality support",
      "Lightning-fast load times",
      "Cross-platform compatibility"
    ],
    color: "emerald"
  },
  {
    icon: Globe,
    title: "Multi-Language Mastery",
    description: "Professional translations in 5 languages with cultural UX adaptations for each market.",
    benefits: [
      "English, Thai, Korean, Japanese, Chinese",
      "Cultural UI/UX considerations",
      "Local payment method integrations",
      "Regional compliance features"
    ],
    color: "yellow"
  }
]

const stats = [
  { number: '10', label: 'Pilot Spots Available', sublabel: 'Limited opportunity' },
  { number: '2025', label: 'Launch Year', sublabel: 'Coming soon' },
  { number: '50%', label: 'Pilot Discount', sublabel: 'Early adopter pricing' },
  { number: '40+', label: 'Years Experience', sublabel: 'Golf industry expertise' }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-yellow-100 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2 text-yellow-600" />
            Platform Features
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Revolutionizing Golf Management{' '}
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400 blur-2xl opacity-30"></span>
              <span className="relative bg-gradient-to-r from-emerald-600 to-yellow-600 bg-clip-text text-transparent">
                for Asia
              </span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Breakthrough technology designed specifically for Asian golf markets, combining deep local expertise with cutting-edge innovation
          </motion.p>
        </motion.div>

        {/* Platform Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {platformHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-yellow-900 rounded-3xl p-12 lg:p-16 mb-24 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Built by Golf Industry Veterans
              </h3>
              <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
                Join our exclusive pilot program and help shape the future of golf management
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-emerald-300">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Core Platform Capabilities
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to modernize your golf course operations and maximize revenue
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 ${
                    feature.color === 'emerald' 
                      ? 'bg-gradient-to-br from-emerald-100 to-emerald-200' 
                      : 'bg-gradient-to-br from-yellow-100 to-yellow-200'
                  }`}>
                    <feature.icon className={`w-8 h-8 ${
                      feature.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.color === 'emerald' 
                          ? 'bg-emerald-100' 
                          : 'bg-yellow-100'
                      }`}>
                        <CheckCircle className={`w-4 h-4 ${
                          feature.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-emerald-900 to-yellow-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-400/20 to-yellow-400/20"></div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-8"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Ready to Transform Your Golf Course?
            </motion.div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              See KOLF in Action with a Personalized Demo
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join our pilot program and be part of revolutionizing golf management in Asia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl"
              >
                <span>Apply for Pilot Program</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-all duration-200"
              >
                Schedule Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}