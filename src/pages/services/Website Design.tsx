import { motion } from "framer-motion";

export default function WebsiteDesign() {
  const designServices = [
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      icon: "🎨"
    },
    {
      title: "Responsive Design",
      description: "Designs that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First Approach", "Cross-Browser Compatibility", "Flexible Layouts", "Touch-Friendly Interface"],
      icon: "📱"
    },
    {
      title: "Brand Identity Design",
      description: "Cohesive visual identity that reflects your brand values and personality.",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
      icon: "🎯"
    },
    {
      title: "Landing Page Design",
      description: "High-converting landing pages designed to maximize user engagement and conversions.",
      features: ["Conversion Optimization", "A/B Testing", "Call-to-Action Design", "Performance Analytics"],
      icon: "🚀"
    }
  ];

  const designTools = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "🔷" },
    { name: "Sketch", icon: "💎" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "Illustrator", icon: "✏️" },
    { name: "InVision", icon: "👁️" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business goals, target audience, and design requirements"
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Creating structural blueprints that define the layout and functionality"
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Developing the visual elements including colors, typography, and imagery"
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Building interactive prototypes to test user experience and functionality"
    },
    {
      step: "05",
      title: "Testing & Refinement",
      description: "User testing and iterative improvements based on feedback and analytics"
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
            <span className="text-[#0F7993] font-medium">Website Design</span>
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
              🎨 Website Design Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Beautiful Designs That
              <span className="block text-[#0F7993]">Convert Visitors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create stunning, user-friendly websites that captivate your audience and drive business growth 
              with our expert design services.
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
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions that combine aesthetics with functionality to create exceptional user experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
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

      {/* Design Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Design Tools We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading design tools and software to create exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {designTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-800">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures every design decision is purposeful and user-centered
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#0F7993] to-[#0F7993] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Why Choose Our Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefits that make our website design services stand out from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "User-Centered Design",
                description: "Designs focused on user needs and behavior patterns"
              },
              {
                icon: "📱",
                title: "Mobile-First Approach",
                description: "Optimized for mobile devices and responsive across all screens"
              },
              {
                icon: "⚡",
                title: "Fast Loading",
                description: "Optimized designs that load quickly and perform well"
              },
              {
                icon: "🎯",
                title: "Conversion Focused",
                description: "Designed to drive user actions and business goals"
              },
              {
                icon: "♿",
                title: "Accessibility",
                description: "Inclusive designs that work for users of all abilities"
              },
              {
                icon: "🔄",
                title: "Iterative Process",
                description: "Continuous improvement based on user feedback and data"
              }
            ].map((benefit, index) => (
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's design a website that not only looks great but also drives results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Design Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Design Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
