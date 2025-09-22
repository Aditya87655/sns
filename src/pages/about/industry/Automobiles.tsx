import { motion } from "framer-motion";

export default function Automobiles() {
  const autoSolutions = [
    {
      title: "Dealership Management Systems",
      description: "Comprehensive solutions for automotive dealerships including inventory, sales, and customer management.",
      features: ["Inventory Management", "Sales Tracking", "Customer CRM", "Service Scheduling"],
      icon: "🏪"
    },
    {
      title: "Manufacturing Solutions",
      description: "Advanced manufacturing systems for automotive production lines and quality control.",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Equipment Monitoring"],
      icon: "🏭"
    },
    {
      title: "Connected Vehicle Platforms",
      description: "IoT and telematics solutions for connected vehicles and fleet management.",
      features: ["Vehicle Tracking", "Diagnostics", "Fleet Analytics", "Remote Monitoring"],
      icon: "🚗"
    },
    {
      title: "Parts & Service Management",
      description: "Streamlined parts inventory and service management systems for automotive businesses.",
      features: ["Parts Catalog", "Service Booking", "Technician Scheduling", "Warranty Tracking"],
      icon: "🔧"
    }
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Operational Excellence",
      description: "Streamline operations across manufacturing, sales, and service departments"
    },
    {
      icon: "🔍",
      title: "Real-time Visibility",
      description: "Complete visibility into inventory, production, and vehicle performance"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Reduce operational costs through automation and process optimization"
    },
    {
      icon: "🎯",
      title: "Customer Experience",
      description: "Enhanced customer experience through digital solutions and personalization"
    },
    {
      icon: "📈",
      title: "Data-Driven Insights",
      description: "Advanced analytics for better decision-making and business intelligence"
    },
    {
      icon: "🔄",
      title: "Integration Ready",
      description: "Seamless integration with existing automotive systems and platforms"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Industry Analysis",
      description: "Comprehensive analysis of your automotive business operations and requirements"
    },
    {
      step: "02",
      title: "Solution Architecture",
      description: "Design scalable solutions tailored to automotive industry standards"
    },
    {
      step: "03",
      title: "System Integration",
      description: "Integrate with existing automotive systems, OEM platforms, and third-party tools"
    },
    {
      step: "04",
      title: "Compliance Setup",
      description: "Ensure compliance with automotive industry regulations and standards"
    },
    {
      step: "05",
      title: "Training & Deployment",
      description: "Comprehensive staff training and phased deployment across locations"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous support, updates, and performance optimization"
    }
  ];

  const technologies = [
    "IoT Sensors", "Telematics", "AI/ML", "Blockchain", 
    "Cloud Computing", "Mobile Apps", "ERP Systems", "API Integration"
  ];

  const useCases = [
    { title: "Automotive Dealerships", description: "Complete dealership management solutions" },
    { title: "Manufacturing Plants", description: "Production line optimization and quality control" },
    { title: "Fleet Management", description: "Vehicle tracking and fleet optimization" },
    { title: "Parts Suppliers", description: "Supply chain and inventory management" },
    { title: "Service Centers", description: "Service scheduling and customer management" },
    { title: "Rental Companies", description: "Vehicle rental and fleet management systems" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-[#0F7993]">Industries</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Automotive Industry</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F7993]/20 to-transparent"></div>
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
              🚗 Automotive Industry Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Drive Innovation in
              <span className="block text-[#0F7993]">Automotive Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced technology solutions for automotive manufacturing, dealerships, 
              fleet management, and connected vehicle platforms that accelerate digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Automotive Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions for every aspect of the automotive industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autoSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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
              Transform Your Automotive Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that drive efficiency, innovation, and competitive advantage
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
              A proven methodology for implementing automotive technology solutions
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
                <div className="flex-shrink-0 w-16 h-16 bg-[#0F7993] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Industry Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for different segments of the automotive industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
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
              Cutting-edge technologies that power our automotive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className="font-semibold text-gray-800">{tech}</p>
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
              Ready to Accelerate Your Automotive Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our automotive solutions can drive innovation and efficiency in your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Industry Assessment
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
