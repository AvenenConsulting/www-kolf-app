'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, Star, CheckCircle, ArrowRight, Zap, Trophy, Clock, Target } from 'lucide-react'

const pilotBenefits = [
  {
    icon: Star,
    title: "VIP Founding Member Status",
    description: "Be recognized as a founding partner with exclusive branding opportunities and case study features.",
    highlight: "Lifetime recognition"
  },
  {
    icon: Zap,
    title: "50% Launch Discount",
    description: "Lock in our lowest pricing forever. Early adopters get the best deal we'll ever offer.",
    highlight: "Save thousands annually"
  },
  {
    icon: Users,
    title: "Direct Product Influence",
    description: "Your feedback shapes the final product. Work directly with our development team.",
    highlight: "Your voice matters"
  },
  {
    icon: Trophy,
    title: "Priority Support & Training",
    description: "Dedicated success manager, priority support, and comprehensive staff training included.",
    highlight: "White-glove service"
  }
]

const pilotRequirements = [
  {
    icon: Target,
    title: "18+ Hole Golf Course",
    description: "Full-service golf course in Thailand, Malaysia, or Singapore"
  },
  {
    icon: Users,
    title: "Caddie System",
    description: "Currently using mandatory caddie system (perfect for our solution)"
  },
  {
    icon: Clock,
    title: "3-Month Commitment",
    description: "Minimum 3-month pilot program with feedback collaboration"
  },
  {
    icon: CheckCircle,
    title: "Growth Mindset",
    description: "Open to innovation and willing to provide testimonials upon success"
  }
]

const timeline = [
  {
    phase: "Phase 1",
    title: "Onboarding & Setup",
    duration: "Week 1-2",
    description: "Complete system setup, data migration, and staff training",
    status: "upcoming"
  },
  {
    phase: "Phase 2", 
    title: "Pilot Launch",
    duration: "Week 3-8",
    description: "Go live with core features, daily monitoring and support",
    status: "upcoming"
  },
  {
    phase: "Phase 3",
    title: "Optimization",
    duration: "Week 9-12",
    description: "Fine-tune based on your feedback, advanced feature rollout",
    status: "upcoming"
  },
  {
    phase: "Phase 4",
    title: "Success Story",
    duration: "Month 4+",
    description: "Measure results, create case study, transition to full partnership",
    status: "upcoming"
  }
]

export default function PilotProgram() {
  return (
    <section id="pilot-program" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-24 bg-emerald-200/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-200/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-emerald-200/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-yellow-200/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-yellow-100 text-emerald-700 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Pre-Launch Pilot Program
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Be a{' '}
            <span className="gradient-text">Founding Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our exclusive pilot program and help shape the future of golf course management in Asia. 
            Limited spots available for forward-thinking golf courses.
          </p>
          
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            Only 10 pilot spots available • Applications close December 1st
          </motion.div>
        </motion.div>

        {/* Pilot Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Exclusive Pilot Partner Benefits
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {pilotBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-yellow-400/10 rounded-bl-3xl"></div>
                
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-100 to-yellow-100 text-emerald-700 text-sm font-medium rounded-full">
                  <Star className="w-3 h-3 mr-1" />
                  {benefit.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pilot Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Ideal Pilot Partner Profile
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilotRequirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center card-hover"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <req.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {req.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Your Pilot Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-yellow-200 z-0"></div>
                )}
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">
                    {index + 1}
                  </div>
                  
                  <div className="text-xs text-emerald-600 font-medium mb-1">
                    {phase.phase}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h4>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    {phase.duration}
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to Pioneer the Future of Golf?
          </h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
            Join an exclusive group of innovative golf courses shaping the next generation 
            of golf management technology. Applications are reviewed on a first-come, first-served basis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <span>Apply for Pilot Program</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200"
            >
              Schedule Discovery Call
            </motion.button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-emerald-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>No setup fees for pilots</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Success guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 