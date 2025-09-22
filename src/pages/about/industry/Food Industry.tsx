import { motion } from "framer-motion";

export default function FoodIndustry() {
  const foodSolutions = [
    {
      title: "Supply Chain Management",
      description: "End-to-end visibility and control over your food supply chain from farm to table.",
      features: ["Inventory Tracking", "Supplier Management", "Cold Chain Monitoring", "Compliance Reporting"],
      icon: "🚚"
    },
    {
      title: "Quality Control Systems",
      description: "Comprehensive quality assurance and food safety management solutions.",
      features: ["HACCP Compliance", "Quality Testing", "Batch Tracking", "Recall Management"],
      icon: "🔬"
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant operations management from POS to kitchen display systems.",
      features: ["POS Integration", "Kitchen Management", "Staff Scheduling", "Customer Analytics"],
      icon: "🍽️"
    },
    {
      title: "Food Production Planning",
      description: "Optimize production schedules, resource allocation, and manufacturing processes.",
      features: ["Production Scheduling", "Resource Planning", "Waste Reduction", "Cost Optimization"],
      icon: "🏭"
    }
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Operational Efficiency",
      description: "Streamline operations and reduce waste across the entire food value chain"
    },
    {
      icon: "🛡️",
      title: "Food Safety Compliance",
      description: "Ensure compliance with FDA, USDA, and other regulatory requirements"
    },
    {
      icon: "📈",
      title: "Cost Reduction",
      description: "Optimize inventory, reduce waste, and improve profit margins"
    },
    {
      icon: "🔍",
      title: "Traceability",
      description: "Complete product traceability from source to consumer"
    },
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description: "Monitor temperature, humidity, and other critical parameters in real-time"
    },
    {
      icon: "📱",
      title: "Mobile Solutions",
      description: "Access critical information and controls from anywhere, anytime"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Industry Assessment",
      description: "Analyze your current food operations, compliance requirements, and business objectives"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design customized solutions that meet food industry standards and regulations"
    },
    {
      step: "03",
      title: "System Integration",
      description: "Integrate with existing equipment, sensors, and management systems"
    },
    {
      step: "04",
      title: "Compliance Setup",
      description: "Configure systems to meet FDA, HACCP, and other regulatory requirements"
    },
    {
      step: "05",
      title: "Staff Training",
      description: "Comprehensive training on food safety protocols and system usage"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and compliance support"
    }
  ];

  const technologies = [
    "IoT Sensors", "RFID Tracking", "Blockchain", "AI/ML Analytics", 
    "Cloud Computing", "Mobile Apps", "ERP Integration", "API Management"
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
            <span className="text-[#0F7993] font-medium">Food Industry</span>
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
              🍽️ Food Industry Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transform Your Food
              <span className="block text-[#0F7993]">Business Operations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions for food production, processing, distribution, 
              and restaurant operations that ensure quality, safety, and efficiency.
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
              Our Food Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized technology solutions designed for every aspect of the food industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodSolutions.map((solution, index) => (
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
              Why Choose Our Food Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that drive efficiency, compliance, and profitability in food operations
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
              A systematic approach to implementing food industry technology solutions
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

      {/* Technologies Section */}
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
              Cutting-edge technologies that power our food industry solutions
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
              Ready to Transform Your Food Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our food industry solutions can improve your operations, ensure compliance, and drive growth
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
