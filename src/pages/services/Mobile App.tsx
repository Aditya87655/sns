import { motion } from "framer-motion";

export default function MobileDevelopment() {
  const mobileServices = [
    {
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.",
      features: ["Native iOS Development", "App Store Optimization", "iOS Design Guidelines", "Performance Optimization"],
      icon: "📱"
    },
    {
      title: "Android App Development",
      description: "Native Android applications using Kotlin and modern Android development practices.",
      features: ["Native Android Development", "Google Play Store", "Material Design", "Multi-Device Support"],
      icon: "🤖"
    },
    {
      title: "React Native Development",
      description: "Cross-platform mobile apps that work seamlessly on both iOS and Android platforms.",
      features: ["Cross-Platform Development", "Code Reusability", "Native Performance", "Faster Time-to-Market"],
      icon: "⚛️"
    },
    {
      title: "Flutter Development",
      description: "Beautiful, fast mobile apps built with Google's Flutter framework for multiple platforms.",
      features: ["Single Codebase", "Beautiful UI", "Hot Reload", "High Performance"],
      icon: "🦋"
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Web applications that provide native app-like experiences across all devices and platforms.",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform"],
      icon: "🌐"
    },
    {
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and support to keep your mobile app running smoothly.",
      features: ["Bug Fixes", "Performance Updates", "Security Patches", "Feature Enhancements"],
      icon: "🔧"
    }
  ];

  const technologies = [
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🤖" },
    { name: "React Native", icon: "⚛️" },
    { name: "Flutter", icon: "🦋" },
    { name: "Xamarin", icon: "🔷" },
    { name: "Ionic", icon: "⚡" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your app requirements, target audience, and business objectives"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that provide excellent user experience"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your app using the latest technologies and best development practices"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and platforms to ensure quality and performance"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Publishing your app to app stores and ensuring a successful launch"
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Ongoing support, updates, and feature enhancements to keep your app current"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-[#0F7993]">Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Mobile App Development</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F7993]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F7993]/15 text-[#0F7993] text-[#0F7993] font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📱 Mobile App Development
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Mobile Apps That
              <span className="block text-[#0F7993]">Drive Results</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create powerful, user-friendly mobile applications that engage your audience 
              and grow your business across iOS and Android platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Mobile Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we build mobile experiences that users love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest mobile development technologies to build high-performance apps
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your mobile app is delivered on time and exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#0F7993] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Key Features We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential features that make your mobile app stand out and provide value to users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔐",
                title: "User Authentication",
                description: "Secure login and registration systems"
              },
              {
                icon: "💳",
                title: "Payment Integration",
                description: "Secure payment processing and e-commerce"
              },
              {
                icon: "📍",
                title: "Location Services",
                description: "GPS and location-based features"
              },
              {
                icon: "📷",
                title: "Camera & Media",
                description: "Photo, video, and media handling"
              },
              {
                icon: "🔔",
                title: "Push Notifications",
                description: "Real-time notifications and alerts"
              },
              {
                icon: "📊",
                title: "Analytics",
                description: "User behavior and app performance tracking"
              },
              {
                icon: "💬",
                title: "Chat & Messaging",
                description: "Real-time communication features"
              },
              {
                icon: "🌐",
                title: "API Integration",
                description: "Third-party service integrations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-sm font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's turn your mobile app idea into a reality that users will love and your business will benefit from
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Mobile App Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free App Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
