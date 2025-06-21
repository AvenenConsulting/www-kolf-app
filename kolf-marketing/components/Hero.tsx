'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, TrendingUp, Users, Calendar, ArrowRight, Star, Shield } from 'lucide-react'
import { Locale } from '@/lib/translations'
import SimpleEmailCapture from './SimpleEmailCapture'
import { trackCTAClick } from '@/lib/analytics'

interface HeroProps {
  locale: Locale
  translations: any
}

export default function Hero({ locale, translations: t }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const stats = [
    { icon: Users, label: "Pilot Spots Available", value: "10" },
    { icon: Calendar, label: "Expected Revenue Growth", value: "40%" },
    { icon: TrendingUp, label: "Projected Time Savings", value: "15hrs/week" }
  ]

  const trustBadges = [
    { name: "SOC 2 Compliant", icon: Shield },
    { name: "99.9% Uptime SLA", icon: CheckCircle },
    { name: "GDPR Ready", icon: Shield },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-yellow-900">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Pre-Launch Pilot Program • Limited Spots Available
            </motion.div>

            {/* Main Headline - Bold & Premium */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight"
            >
              The Future of{' '}
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400 blur-2xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">Golf</span>
              </span>{' '}
              Management
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Revolutionary platform built exclusively for Asian golf markets. 
              <span className="text-yellow-400 font-semibold"> Join our pilot program</span> and help us 
              <span className="text-emerald-400 font-semibold"> shape the future</span> of golf management.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                "Mandatory caddie system included",
                "Dynamic pricing optimization", 
                "Multi-language support (5 languages)",
                "Complete operational management"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300 text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <SimpleEmailCapture locale={locale} translations={t} source="hero" />
              
              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch 2-minute demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8"
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400 text-sm">
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-700"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard - Premium Design */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 border-b border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-medium">KOLF Dashboard</div>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Revenue Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 p-4 rounded-xl border border-emerald-400/20">
                      <div className="text-2xl font-bold text-yellow-400">₿2.4M</div>
                      <div className="text-sm text-gray-300">Monthly Revenue</div>
                      <div className="text-xs text-emerald-400 mt-1">+40% ↗</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 rounded-xl border border-yellow-400/20">
                      <div className="text-2xl font-bold text-emerald-400">892</div>
                      <div className="text-sm text-gray-300">Daily Bookings</div>
                      <div className="text-xs text-emerald-400 mt-1">+25% ↗</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500/20 to-yellow-500/20 p-4 rounded-xl border border-emerald-400/20">
                      <div className="text-2xl font-bold text-yellow-400">98%</div>
                      <div className="text-sm text-gray-300">Satisfaction</div>
                      <div className="text-xs text-emerald-400 mt-1">+12% ↗</div>
                    </div>
                  </div>
                  
                  {/* Live Bookings */}
                  <div className="space-y-3">
                    <div className="text-white font-medium mb-4">Live Bookings</div>
                    {[
                      { time: "08:00", players: "4", status: "confirmed", color: "green" },
                      { time: "08:10", players: "2", status: "pending", color: "yellow" },
                      { time: "08:20", players: "4", status: "confirmed", color: "green" }
                    ].map((booking, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center space-x-3">
                                                  <div className={`w-3 h-3 rounded-full ${
                          booking.color === 'green' ? 'bg-emerald-400' : 'bg-yellow-400'
                        }`}></div>
                          <span className="text-white text-sm">Tee Time {booking.time} - Group of {booking.players}</span>
                        </div>
                        <span className="text-gray-400 text-xs capitalize">{booking.status}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements - Premium Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-8 -left-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-xl p-4 border border-emerald-400/30 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Real-time Updates</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl shadow-xl p-4 border border-yellow-400/30 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">+40% Revenue Growth</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}