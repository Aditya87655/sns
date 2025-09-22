import { motion } from "framer-motion";

export default function ProgressiveWebApp() {
  const pwaFeatures = [
    {
      title: "Offline Functionality",
      description: "Apps that work seamlessly even without internet connection using service workers and caching.",
      features: ["Service Workers", "Cache Management", "Background Sync", "Offline Data Storage"],
      icon: "📱"
    },
    {
      title: "Native App Experience",
      description: "Web apps that feel and behave like native mobile applications with smooth interactions.",
      features: ["App-like Navigation", "Smooth Animations", "Touch Gestures", "Full-Screen Mode"],
      icon: "🚀"
    },
    {
      title: "Push Notifications",
      description: "Engage users with timely push notifications even when the app is not actively being used.",
      features: ["Real-time Notifications", "User Engagement", "Background Updates", "Cross-Platform Support"],
      icon: "🔔"
    },
    {
      title: "Installable Apps",
      description: "Users can install your web app directly from their browser to their home screen.",
      features: ["Add to Home Screen", "App Icons", "Splash Screens", "App Store Distribution"],
      icon: "📲"
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth interactions"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Single codebase for web and mobile platforms"
    },
    {
      icon: "🔄",
      title: "Auto Updates",
      description: "Automatic updates without app store approval"
    },
    {
      icon: "🌐",
      title: "Cross Platform",
      description: "Works on any device with a modern browser"
    },
    {
      icon: "📊",
      title: "Better Engagement",
      description: "Higher user engagement with app-like features"
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "HTTPS requirement ensures secure connections"
    }
  ];

  const technologies = [
    { name: "Service Workers", icon: "⚙️" },
    { name: "Web App Manifest", icon: "📋" },
    { name: "Push API", icon: "🔔" },
    { name: "Cache API", icon: "💾" },
    { name: "IndexedDB", icon: "🗄️" },
    { name: "Web Workers", icon: "👷" }
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
            <span className="cursor-pointer hover:text-[#0F7993]">Web Development</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Progressive Web App Development</span>
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#0F7993] text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🚀 Progressive Web App Development
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              The Future of
              <span className="block text-[#0F7993]">Web Applications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build fast, reliable, and engaging web applications that work offline and provide 
              native app-like experiences across all devices and platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PWA Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Progressive Web App Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features that make PWAs powerful alternatives to native mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pwaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Progressive Web Apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key advantages that make PWAs the smart choice for modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              PWA Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern web technologies that power Progressive Web Applications
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
                <h3 className="font-semibold text-gray-800 text-sm">{tech.name}</h3>
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
              Ready to Build Your PWA?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your web application into a powerful Progressive Web App that engages users like never before
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your PWA Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About PWAs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
