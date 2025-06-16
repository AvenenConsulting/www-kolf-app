'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Heart, UserX, Target, Zap, Award, Shield } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue by 30%',
    description: 'Dynamic pricing and reduced no-shows drive significant revenue growth',
    details: [
      'Smart pricing based on demand, weather, and time',
      'Reduce no-shows from 8% to 2% industry average',
      'Optimize tee time slots for maximum profitability',
      'Tour operator premium pricing strategies'
    ],
    color: 'green',
    metric: '+30%',
    metricLabel: 'Revenue Increase'
  },
  {
    icon: Clock,
    title: 'Save 15 Hours Weekly',
    description: 'Automation eliminates manual tasks and reduces administrative errors',
    details: [
      'Automated booking confirmations and reminders',
      'Streamlined member and guest management',
      'Simplified tournament organization',
      'Integrated billing and payment processing'
    ],
    color: 'blue',
    metric: '15hrs',
    metricLabel: 'Weekly Time Savings'
  },
  {
    icon: Heart,
    title: '98% Member Satisfaction',
    description: 'Seamless booking experience keeps members happy and engaged',
    details: [
      'Mobile-first booking experience',
      'Instant booking confirmations',
      'Favorite caddie preferences',
      'Multilingual customer support'
    ],
    color: 'pink',
    metric: '98%',
    metricLabel: 'Member Satisfaction'
  },
  {
    icon: UserX,
    title: 'Reduce No-Shows by 80%',
    description: 'Automated reminders and deposit system ensure player commitment',
    details: [
      'SMS and email reminder automation',
      'Flexible deposit and cancellation policies',
      'Waitlist management with auto-fill',
      'Member accountability tracking'
    ],
    color: 'red',
    metric: '-80%',
    metricLabel: 'No-Show Reduction'
  }
]

const additionalBenefits = [
  {
    icon: Target,
    title: 'Thai Market Expertise',
    description: 'Built specifically for Asian golf operations with deep local understanding'
  },
  {
    icon: Zap,
    title: 'Quick Implementation',
    description: '2-3 days basic setup, 2 weeks full migration with minimal disruption'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ successful implementations across Asia with 99.9% uptime'
  },
  {
    icon: Shield,
    title: '24/7 Thai Support',
    description: 'Local language support team available around the clock'
  }
]

const testimonialStats = [
  { value: '500+', label: 'Golf Courses', sublabel: 'Trust KOLF across Asia' },
  { value: '1M+', label: 'Monthly Bookings', sublabel: 'Processed seamlessly' },
  { value: '99.9%', label: 'Uptime SLA', sublabel: 'Guaranteed reliability' },
  { value: '2-3 days', label: 'Setup Time', sublabel: 'Quick implementation' }
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
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
            <Award className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Golf Courses Choose{' '}
            <span className="gradient-text">KOLF</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven results from 500+ golf courses across Asia
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl ${
                  benefit.color === 'green' ? 'bg-green-100' :
                  benefit.color === 'blue' ? 'bg-blue-100' :
                  benefit.color === 'pink' ? 'bg-pink-100' :
                  benefit.color === 'red' ? 'bg-red-100' : 'bg-gray-100'
                } flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className={`w-8 h-8 ${
                    benefit.color === 'green' ? 'text-green-600' :
                    benefit.color === 'blue' ? 'text-blue-600' :
                    benefit.color === 'pink' ? 'text-pink-600' :
                    benefit.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        benefit.color === 'green' ? 'text-green-600' :
                        benefit.color === 'blue' ? 'text-blue-600' :
                        benefit.color === 'pink' ? 'text-pink-600' :
                        benefit.color === 'red' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-gray-500">
                        {benefit.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="space-y-3">
                    {benefit.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          benefit.color === 'green' ? 'bg-green-500' :
                          benefit.color === 'blue' ? 'bg-blue-500' :
                          benefit.color === 'pink' ? 'bg-pink-500' :
                          benefit.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
                        } mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Advantages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gray-50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Trusted by Golf Courses Across Asia
            </h3>
            <p className="text-xl text-primary-100">
              Join hundreds of successful golf courses already using KOLF
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-primary-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-200">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Calculate Your ROI
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                See how much KOLF can increase your revenue and reduce costs based on your course size and current operations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Revenue increase</span>
                  <span className="font-semibold text-green-600">+30%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Administrative time saved</span>
                  <span className="font-semibold text-blue-600">15 hrs/week</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">No-show reduction</span>
                  <span className="font-semibold text-red-600">-80%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-semibold">Typical payback period</span>
                  <span className="font-bold text-primary-600">2-3 months</span>
                </div>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Custom ROI Analysis
              </motion.a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Sample ROI for 18-hole Course
                </h4>
                <p className="text-sm text-gray-600">
                  Based on 200 daily bookings
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current monthly revenue</span>
                  <span className="font-semibold">฿2,400,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">KOLF subscription</span>
                  <span className="font-semibold text-red-600">-฿19,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue increase (30%)</span>
                  <span className="font-semibold text-green-600">+฿720,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time savings value</span>
                  <span className="font-semibold text-blue-600">+฿45,000</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Net monthly benefit</span>
                    <span className="font-bold text-primary-600 text-xl">฿745,001</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-sm text-gray-600">ROI: </span>
                    <span className="font-bold text-primary-600">3,725%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}