'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Award,
  Zap,
  Target,
  BarChart3,
  Shield,
  Sparkles,
  ArrowRight,
  Trophy,
  Globe
} from 'lucide-react'

const whyChooseKolf = [
  {
    icon: Trophy,
    title: "40+ Years Golf Expertise",
    description: "Built by golf industry veterans who understand every nuance of course operations"
  },
  {
    icon: Globe,
    title: "Asia-First Design",
    description: "Specifically engineered for Asian golf markets, culture, and business practices"
  },
  {
    icon: Zap,
    title: "Projected ROI",
    description: "Designed to deliver 40% revenue increase based on industry best practices"
  },
  {
    icon: Shield,
    title: "Enterprise Grade",
    description: "Bank-level security with 99.9% uptime SLA and 24/7 support"
  }
]

const keyBenefits = [
  {
    icon: TrendingUp,
    title: "Maximize Revenue Potential",
    description: "Advanced dynamic pricing algorithms automatically optimize rates based on weather, demand, and market conditions.",
    benefits: [
      "Target 40% revenue increase",
      "Peak hour pricing optimization", 
      "Weather-based rate adjustments",
      "Last-minute deal automation"
    ],
    color: "emerald",
    stat: "40%",
    statLabel: "Target Boost"
  },
  {
    icon: Clock,
    title: "Streamline Operations",
    description: "Intelligent automation eliminates manual processes and reduces administrative overhead significantly.",
    benefits: [
      "15 hours saved per week",
      "Automated tee time management",
      "Smart caddie assignments",
      "Integrated payment processing"
    ],
    color: "yellow",
    stat: "15hrs",
    statLabel: "Weekly Savings"
  },
  {
    icon: Users,
    title: "Enhance Customer Experience",
    description: "Mobile-first platform delivers seamless booking experience that keeps golfers coming back.",
    benefits: [
      "Mobile-responsive booking",
      "Real-time availability updates",
      "Multi-language support",
      "Integrated loyalty programs"
    ],
    color: "emerald",
    stat: "98%",
    statLabel: "Satisfaction"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics and reporting provide actionable insights for strategic decision making.",
    benefits: [
      "Real-time dashboard analytics",
      "Custom report generation",
      "Predictive demand forecasting",
      "Performance benchmarking"
    ],
    color: "yellow",
    stat: "24/7",
    statLabel: "Live Analytics"
  }
]

const competitiveAdvantages = [
  "Built by golf insiders with 40+ years combined experience",
  "Designed specifically for Asian golf market requirements",
  "Multi-language support with cultural considerations",
  "Local payment methods (PromptPay, LINE Pay, etc.)",
  "Tour operator portal for bulk bookings",
  "Caddie management system with performance tracking",
  "Weather-based dynamic pricing algorithms",
  "Mobile-first progressive web app design"
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 w-28 h-28 bg-emerald-200/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-16 w-36 h-36 bg-yellow-200/8 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-30"></div>
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
            <Award className="w-4 h-4 mr-2 text-yellow-600" />
            Why Choose KOLF
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Built by Golf Insiders for{' '}
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400 blur-2xl opacity-30"></span>
              <span className="relative bg-gradient-to-r from-emerald-600 to-yellow-600 bg-clip-text text-transparent">
                Asian Excellence
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
            Our founding team combines 40+ years of Golf Software experience – creating the platform golf courses have been waiting for.
          </motion.p>
        </motion.div>

        {/* Why Choose KOLF Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {whyChooseKolf.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Golf Course Operations
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements across every aspect of your business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  benefit.color === 'emerald' 
                    ? 'bg-gradient-to-bl from-emerald-50 to-transparent' 
                    : 'bg-gradient-to-bl from-yellow-50 to-transparent'
                } rounded-full -translate-y-16 translate-x-16`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 ${
                        benefit.color === 'emerald' 
                          ? 'bg-gradient-to-br from-emerald-100 to-emerald-200' 
                          : 'bg-gradient-to-br from-yellow-100 to-yellow-200'
                      }`}>
                        <benefit.icon className={`w-8 h-8 ${
                          benefit.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${
                        benefit.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'
                      }`}>
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="space-y-4">
                    {benefit.benefits.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          benefit.color === 'emerald' 
                            ? 'bg-emerald-100' 
                            : 'bg-yellow-100'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${
                            benefit.color === 'emerald' ? 'text-emerald-600' : 'text-yellow-600'
                          }`} />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-yellow-900 rounded-3xl p-12 lg:p-16 mb-20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-8"
              >
                <Target className="w-4 h-4 mr-2 text-yellow-400" />
                Competitive Advantages
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Golf Courses Choose KOLF Over Competitors
              </h3>
              <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
                Built specifically for Asian golf markets with features you won't find anywhere else
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-white font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 lg:p-16 border border-gray-100 shadow-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-yellow-100 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-600" />
              Ready to Experience the Difference?
            </motion.div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join the Golf Management Revolution
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              See firsthand how KOLF can transform your golf course operations and boost revenue
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
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-semibold rounded-xl transition-all duration-200"
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