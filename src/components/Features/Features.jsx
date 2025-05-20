"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Layers, BarChart3, Users, Cpu, Lock, Zap, Globe, Code } from "lucide-react"
import { TracingBeam } from "../ui/tracing-beam"
import { HoverEffect } from "../ui/card-hover-effect"
import { Spotlight } from "../ui/spotlight"

const featuresList = [
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Crop Health Analytics",
    description: "Advanced vegetation index analysis using NDVI, NDWI, and NDMI for precise crop monitoring"
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Field Data Security",
    description: "Military-grade encryption for agricultural data with ISO 27001 compliance"
  },
  {
    icon: <Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "AI Pest Detection",
    description: "Machine learning models trained on millions of agricultural data points"
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Farm Team Collaboration",
    description: "Real-time collaboration tools for agronomists and field teams"
  },
  {
    icon: <Layers className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Satellite Integration",
    description: "Direct integration with Sentinel-2 and Landsat 8 satellite imagery"
  },
  {
    icon: <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Role-Based Field Access",
    description: "Granular permissions for different farm team members and roles"
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Real-Time Alerts",
    description: "Instant notifications for pest outbreaks and crop anomalies"
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Global Coverage",
    description: "Support for agricultural regions worldwide with multi-language support"
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Farm API Access",
    description: "RESTful APIs for integration with existing farm management systems"
  }
]

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  // Cards for the HoverEffect component
  const cards = featuresList.slice(0, 6).map((feature) => ({
    title: feature.title,
    description: feature.description,
    icon: feature.icon,
  }))

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-100/50 dark:bg-blue-600/10 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-cyan-100/50 dark:bg-cyan-600/10 opacity-40 rounded-full blur-3xl"></div>
      
      {/* Spotlight effect */}
      <Spotlight
        className="top-10 left-0 md:left-60 z-0"
        fill="blue"
        size={1000}
      />
      
      <TracingBeam className="opacity-70">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              AGRICULTURAL INTELLIGENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Farm Management Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Precision agriculture tools powered by satellite imagery and AI-driven analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 
                  hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20
                  cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 mb-16 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-700"></div>
            <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-bold text-white">J</span>
                  </div>
                </div>
                <div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-300 italic mb-4">
                    "AgriSense revolutionized our farm management. The pest prediction models helped us reduce crop losses by 40% in the first season alone."
                  </blockquote>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">Juan Rodriguez</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Farm Manager, Costa Verde Agricultura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                WHY CHOOSE AGRISENSE
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Smart Farming Advantages
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Transform your agricultural operations with data-driven decision making
              </p>
            </div>

            <div className="relative w-full h-48 mb-16 overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 dark:from-blue-600/20 to-cyan-100/50 dark:to-cyan-600/20"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Precision Agriculture Platform</h4>
                <p className="text-blue-600 dark:text-blue-300 text-lg md:text-xl">Optimized for modern farming operations</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>

            <HoverEffect items={cards} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
          </div>
        </div>
      </TracingBeam>
    </section>
  )
}

export default Features