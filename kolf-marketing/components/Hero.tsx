'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, TrendingUp, Users, Calendar } from 'lucide-react'
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
    { icon: Users, label: t.hero.stats.courses.label, value: t.hero.stats.courses.value },
    { icon: Calendar, label: t.hero.stats.bookings.label, value: t.hero.stats.bookings.value },
    { icon: TrendingUp, label: t.hero.stats.increase.label, value: t.hero.stats.increase.value }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimal Background - just a subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-28 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8 shadow-none border border-gray-200"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight"
            >
              {t.hero.title.part1}{' '}
              <span className="relative">
                <span className="absolute inset-0 rounded-lg bg-green-200/40 blur-sm"></span>
                <span className="relative text-primary-600 font-extrabold">{t.hero.title.part2}</span>
              </span>{' '}
              {t.hero.title.part3}{' '}
              <span className="relative">
                <span className="absolute inset-0 rounded-lg bg-green-200/40 blur-sm"></span>
                <span className="relative text-primary-600 font-extrabold">{t.hero.title.part4}</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-10 grid sm:grid-cols-2 gap-4"
            >
              {t.hero.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Email Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <SimpleEmailCapture locale={locale} translations={t} source="hero" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-auto text-gray-700 text-sm font-medium">KOLF Dashboard</div>
                  </div>
                </div>
                <div className="p-8">
                  {/* Mini Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600">247</div>
                      <div className="text-sm text-gray-500">{t.productWindow.bookings}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-green-600">฿184K</div>
                      <div className="text-sm text-gray-500">{t.productWindow.revenue}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-gray-500">{t.productWindow.occupancy}</div>
                    </div>
                  </div>
                  {/* Recent Bookings */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Tee Time 08:00 - Group of 4</span>
                      </div>
                      <span className="text-sm text-gray-400">{t.productWindow.confirmed}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Tee Time 08:10 - Group of 2</span>
                      </div>
                      <span className="text-sm text-gray-400">{t.productWindow.pending}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Tee Time 08:20 - Group of 4</span>
                      </div>
                      <span className="text-sm text-gray-400">{t.productWindow.confirmed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -left-6 bg-white rounded-lg shadow-md p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{t.productWindow.realtime}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-md p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">{t.productWindow.revenueBoost}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}