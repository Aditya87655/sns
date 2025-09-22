import { motion } from "framer-motion";

export default function WordPressDevelopment() {
  const wordpressServices = [
    {
      title: "Custom WordPress Themes",
      description: "Unique, responsive WordPress themes designed specifically for your brand and business needs.",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Cross-Browser Compatible"],
      icon: "🎨"
    },
    {
      title: "WordPress Plugin Development",
      description: "Custom plugins to extend WordPress functionality and meet your specific requirements.",
      features: ["Custom Functionality", "API Integration", "Performance Optimized", "Security Focused"],
      icon: "🔧"
    },
    {
      title: "WooCommerce Development",
      description: "Complete e-commerce solutions using WooCommerce for powerful online stores.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Custom Features"],
      icon: "🛒"
    },
    {
      title: "WordPress Maintenance",
      description: "Ongoing maintenance and support to keep your WordPress site secure and up-to-date.",
      features: ["Security Updates", "Performance Optimization", "Backup Management", "24/7 Support"],
      icon: "🔒"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Fast Loading",
      description: "Optimized for speed and performance"
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Perfect display on all devices"
    },
    {
      icon: "🔍",
      title: "SEO Friendly",
      description: "Built-in SEO optimization"
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Security best practices implemented"
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Unique designs tailored to your brand"
    },
    {
      icon: "🔄",
      title: "Easy Updates",
      description: "Simple content management"
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
            <span className="cursor-pointer hover:text-[#0F7993]">CMS Development</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">WordPress Development</span>
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
              🔵 WordPress Development
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Professional WordPress
              <span className="block text-[#0F7993]">Development Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create powerful, scalable WordPress websites with custom themes, plugins, 
              and advanced functionality tailored to your business needs.
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
              Our WordPress Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive WordPress development services from custom themes to complex e-commerce solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wordpressServices.map((service, index) => (
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

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              WordPress Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key features that make our WordPress development services stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Build Your WordPress Site?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create a powerful WordPress website that grows with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start WordPress Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View WordPress Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
