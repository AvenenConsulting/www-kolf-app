'use client'

import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, Clock, Award } from 'lucide-react'

const testimonials = [
  {
    quote: "KOLF transformed our operations completely. Revenue is up 35% and our staff saves 20 hours per week on administrative tasks. The caddie management system alone is worth the investment.",
    author: "Somchai Jaidee",
    role: "General Manager",
    course: "Bangkok Golf Club",
    location: "Bangkok, Thailand",
    image: "/testimonials/somchai.jpg",
    rating: 5,
    metrics: {
      revenue: "+35%",
      timeSaved: "20hrs/week",
      satisfaction: "98%"
    }
  },
  {
    quote: "The mandatory caddie system integration is perfect for Thai golf courses. Finally, we can track performance, manage assignments efficiently, and our Korean tour groups love the multi-language support.",
    author: "Park Ji-sung",
    role: "Operations Director",
    course: "Phuket Country Club",
    location: "Phuket, Thailand",
    image: "/testimonials/park.jpg",
    rating: 5,
    metrics: {
      revenue: "+28%",
      efficiency: "+45%",
      bookings: "+40%"
    }
  },
  {
    quote: "Our Japanese and Korean tour groups absolutely love the multi-language support. Bookings from international visitors increased 40% since implementing KOLF. The mobile app is incredibly user-friendly.",
    author: "Tanaka Hiroshi",
    role: "Director of Golf",
    course: "Chiang Mai Highlands",
    location: "Chiang Mai, Thailand",
    image: "/testimonials/tanaka.jpg",
    rating: 5,
    metrics: {
      international: "+40%",
      mobile: "60%",
      satisfaction: "96%"
    }
  },
  {
    quote: "The tournament platform revolutionized how we organize events. Live scoring, automatic handicap integration, and seamless payment processing made our monthly tournaments incredibly smooth.",
    author: "Sarah Chen",
    role: "Event Manager",
    course: "Royal Bangkok Sports Club",
    location: "Bangkok, Thailand",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    metrics: {
      events: "+50%",
      registration: "90% faster",
      satisfaction: "99%"
    }
  },
  {
    quote: "Dynamic pricing helped us optimize our revenue streams. Weather-based pricing and last-minute deals filled our slow periods. The financial reporting gives us insights we never had before.",
    author: "Michael Thompson",
    role: "Revenue Manager",
    course: "Hua Hin Golf Resort",
    location: "Hua Hin, Thailand",
    image: "/testimonials/michael.jpg",
    rating: 5,
    metrics: {
      revenue: "+32%",
      occupancy: "+25%",
      efficiency: "+60%"
    }
  },
  {
    quote: "KOLF's tour operator portal streamlined our B2B operations. Bulk bookings, credit management, and commission tracking are now automated. Our partnership revenue grew 45% this year.",
    author: "Niran Wongsawat",
    role: "Partnership Director",
    course: "Kanchanaburi Golf Club",
    location: "Kanchanaburi, Thailand",
    image: "/testimonials/niran.jpg",
    rating: 5,
    metrics: {
      partnerships: "+45%",
      automation: "80%",
      revenue: "+30%"
    }
  }
]

const stats = [
  {
    icon: TrendingUp,
    value: "30%",
    label: "Average Revenue Increase",
    description: "Across all golf courses using KOLF"
  },
  {
    icon: Users,
    value: "500+",
    label: "Golf Courses",
    description: "Trust KOLF across Asia"
  },
  {
    icon: Clock,
    value: "15hrs",
    label: "Weekly Time Savings",
    description: "Average administrative time saved"
  },
  {
    icon: Award,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Based on user surveys"
  }
]

const logos = [
  { name: "Bangkok Golf Club", logo: "/logos/bangkok-golf.png" },
  { name: "Phuket Country Club", logo: "/logos/phuket-country.png" },
  { name: "Chiang Mai Highlands", logo: "/logos/chiang-mai.png" },
  { name: "Royal Bangkok Sports Club", logo: "/logos/royal-bangkok.png" },
  { name: "Hua Hin Golf Resort", logo: "/logos/hua-hin.png" },
  { name: "Kanchanaburi Golf Club", logo: "/logos/kanchanaburi.png" },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
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
            Customer Success Stories
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading{' '}
            <span className="gradient-text">Golf Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what golf course managers are saying about KOLF
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 rounded-xl card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-lg font-bold text-primary-600">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.course}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-center text-lg font-semibold text-gray-500 mb-8">
            Trusted by Premium Golf Courses Across Asia
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-600 text-sm font-medium text-center">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Success Story: Bangkok Golf Club
              </h3>
              <p className="text-primary-100 mb-8 leading-relaxed">
                "After implementing KOLF, we saw immediate improvements across all operations. 
                The caddie management system eliminated scheduling conflicts, dynamic pricing 
                boosted our off-peak revenue, and our members love the mobile booking experience."
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">35%</div>
                  <div className="text-sm text-primary-200">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">20hrs</div>
                  <div className="text-sm text-primary-200">Weekly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-primary-200">Member Satisfaction</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Read Full Case Study
              </motion.button>
            </div>
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-primary-100">Monthly Revenue</span>
                  <span className="font-semibold">฿2.8M → ฿3.8M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-primary-100">Daily Bookings</span>
                  <span className="font-semibold">180 → 247</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-primary-100">No-Show Rate</span>
                  <span className="font-semibold">8% → 2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-primary-100">Admin Time</span>
                  <span className="font-semibold">35hrs → 15hrs/week</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}