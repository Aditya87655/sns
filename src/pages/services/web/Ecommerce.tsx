import { motion } from "framer-motion";

export default function EcommerceDevelopment() {
  const ecommerceServices = [
    {
      title: "Custom E-commerce Platforms",
      description: "Tailored online stores built from scratch to match your unique business model and requirements.",
      features: ["Custom Shopping Cart", "Payment Gateway Integration", "Inventory Management", "Order Processing"],
      icon: "🛒"
    },
    {
      title: "Multi-vendor Marketplaces",
      description: "Complex marketplace solutions that allow multiple vendors to sell through your platform.",
      features: ["Vendor Management", "Commission System", "Multi-store Support", "Advanced Analytics"],
      icon: "🏪"
    },
    {
      title: "B2B E-commerce Solutions",
      description: "Specialized platforms for business-to-business transactions with advanced features.",
      features: ["Bulk Ordering", "Custom Pricing", "Quote Management", "Account Management"],
      icon: "🏢"
    },
    {
      title: "Mobile Commerce Apps",
      description: "Native mobile applications for seamless shopping experiences on smartphones and tablets.",
      features: ["Native iOS/Android", "Push Notifications", "Mobile Payments", "Offline Capabilities"],
      icon: "📱"
    }
  ];

  const platforms = [
    { name: "Shopify", icon: "🛍️" },
    { name: "WooCommerce", icon: "🔷" },
    { name: "Magento", icon: "🟠" },
    { name: "BigCommerce", icon: "🔵" },
    { name: "Custom Build", icon: "⚙️" },
    { name: "Headless Commerce", icon: "🔗" }
  ];

  const features = [
    {
      icon: "💳",
      title: "Payment Processing",
      description: "Secure payment gateways and multiple payment options"
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated stock updates"
    },
    {
      icon: "🚚",
      title: "Shipping Integration",
      description: "Multiple shipping options and real-time rate calculations"
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Comprehensive sales analytics and business intelligence"
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "PCI DSS compliance and advanced security measures"
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Responsive design optimized for mobile shopping"
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
            <span className="cursor-pointer hover:text-[#0F7993]">Web Development</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">E-Commerce Web Development</span>
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
              🛒 E-Commerce Development
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Powerful E-Commerce
              <span className="block text-[#0F7993]">Solutions That Sell</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build high-converting online stores with advanced features, seamless user experience, 
              and robust backend systems that scale with your business.
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
              Our E-Commerce Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive e-commerce solutions from simple online stores to complex marketplace platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
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

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              E-Commerce Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in various e-commerce platforms to find the perfect fit for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-800">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Essential E-Commerce Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core features that make your online store successful and user-friendly
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's build an e-commerce platform that drives sales and grows your business online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your E-Commerce Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get E-Commerce Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
