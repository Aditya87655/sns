import { motion } from "framer-motion";

export default function RestaurantManagementSystem() {
  const rmsFeatures = [
    {
      title: "Point of Sale (POS)",
      description: "Advanced POS system with order management, payment processing, and real-time reporting.",
      features: ["Order Processing", "Payment Integration", "Receipt Management", "Split Bills"],
      icon: "💳"
    },
    {
      title: "Inventory Management",
      description: "Track ingredients, manage stock levels, and automate reordering with smart alerts.",
      features: ["Stock Tracking", "Auto Reordering", "Supplier Management", "Cost Analysis"],
      icon: "📦"
    },
    {
      title: "Table Management",
      description: "Optimize seating arrangements, manage reservations, and track table turnover.",
      features: ["Reservation System", "Table Layout", "Wait Time Tracking", "Customer Preferences"],
      icon: "🪑"
    },
    {
      title: "Kitchen Display System",
      description: "Streamline kitchen operations with digital order displays and preparation tracking.",
      features: ["Order Queue", "Prep Time Tracking", "Kitchen Analytics", "Staff Communication"],
      icon: "👨‍🍳"
    }
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Comprehensive insights into sales, inventory, and customer behavior"
    },
    {
      icon: "⚡",
      title: "Faster Service",
      description: "Streamlined operations reduce wait times and improve customer satisfaction"
    },
    {
      icon: "💰",
      title: "Cost Control",
      description: "Better inventory management and waste reduction increase profitability"
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Manage your restaurant from anywhere with mobile-responsive design"
    },
    {
      icon: "🔄",
      title: "Integration Ready",
      description: "Seamlessly connects with delivery platforms and accounting software"
    },
    {
      icon: "👥",
      title: "Staff Management",
      description: "Schedule staff, track performance, and manage payroll efficiently"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Restaurant Assessment",
      description: "Analyze your current operations, workflow, and specific business requirements"
    },
    {
      step: "02",
      title: "System Design",
      description: "Create a customized solution tailored to your restaurant's unique needs"
    },
    {
      step: "03",
      title: "Hardware Setup",
      description: "Install and configure POS terminals, kitchen displays, and other hardware"
    },
    {
      step: "04",
      title: "Software Configuration",
      description: "Set up menu items, pricing, staff accounts, and system preferences"
    },
    {
      step: "05",
      title: "Staff Training",
      description: "Comprehensive training for all staff members on system usage"
    },
    {
      step: "06",
      title: "Go-Live Support",
      description: "Launch support and ongoing maintenance for smooth operations"
    }
  ];

  const modules = [
    { name: "POS System", description: "Complete point-of-sale solution" },
    { name: "Inventory Control", description: "Smart stock management" },
    { name: "Customer Management", description: "CRM and loyalty programs" },
    { name: "Reporting & Analytics", description: "Business intelligence tools" },
    { name: "Online Ordering", description: "Web and mobile ordering" },
    { name: "Delivery Integration", description: "Third-party delivery platforms" }
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
            <span className="cursor-pointer hover:text-[#0F7993]">Solutions</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Restaurant Management System</span>
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
              🍽️ Restaurant Management System
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Streamline Your Restaurant
              <span className="block text-[#0F7993]">Operations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive restaurant management solution that integrates POS, inventory, 
              staff management, and analytics to optimize your restaurant's performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Complete Restaurant Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful restaurant operation from front-of-house to back-of-house
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rmsFeatures.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Transform Your Restaurant Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that drive efficiency, profitability, and customer satisfaction
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology for seamless restaurant management system deployment
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

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              System Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated modules that work together to provide a complete restaurant management solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
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
              Ready to Revolutionize Your Restaurant?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's build a custom restaurant management system that streamlines your operations and boosts profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
