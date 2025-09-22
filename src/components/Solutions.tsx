import { motion } from "framer-motion";

// Hardcoded demo solutions data
const demoSolutions = [
  {
    _id: "1",
    icon: "🚀",
    title: "Startup Launch",
    category: "Startup",
    description: "Agile, scalable solutions to help startups launch and grow quickly.",
    benefits: [
      "Rapid MVP development",
      "Cost-effective cloud hosting",
      "Mentorship & strategy support"
    ]
  },
  {
    _id: "2",
    icon: "🏢",
    title: "SMB Growth",
    category: "SMB",
    description: "Digital tools and automation to help small and medium businesses scale.",
    benefits: [
      "Process automation",
      "Custom CRM solutions",
      "E-commerce integration"
    ]
  },
  {
    _id: "3",
    icon: "🏦",
    title: "Enterprise Transformation",
    category: "Enterprise",
    description: "Robust, secure, and compliant solutions for large organizations.",
    benefits: [
      "Enterprise-grade security",
      "Data analytics & AI",
      "Legacy system modernization"
    ]
  }
];

export default function Solutions() {
  const solutions = demoSolutions;

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F7993]/10 text-[#0F7993] text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailored Solutions
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Solutions for Every
            <span className="block text-[#0F7993]">Business Size</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprise organizations, we deliver customized 
            solutions that scale with your business needs and objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution._id}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Category Badge */}
              <motion.div
                className="absolute -top-4 left-8 px-4 py-2 bg-[#0F7993] text-white text-sm font-semibold rounded-full shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {solution.category}
              </motion.div>

              <div className="pt-6">
                <motion.div
                  className="text-6xl mb-6 filter drop-shadow-sm"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {solution.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0F7993] transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + benefitIndex * 0.05 }}
                    >
                      <div className="w-5 h-5 bg-[#0F7993] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F7993]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl hover:from-[#0a5a6b] hover:to-[#0F7993] transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F7993] rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0F7993]/70 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 p-12 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] rounded-3xl text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can drive your digital transformation and accelerate growth.
          </p>
          <motion.button
            className="px-8 py-4 bg-white text-[#0F7993] font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}