import { motion } from "framer-motion";

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F7993]/10 text-[#0F7993] text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🏭 Manufacturing Industry
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transforming
              <span className="block text-[#0F7993]">Manufacturing Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your manufacturing operations with cutting-edge digital solutions, 
              IoT integration, and smart automation technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Industry Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The manufacturing sector is undergoing a digital transformation revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Smart Factories",
                description: "IoT-enabled production lines with real-time monitoring and predictive maintenance capabilities."
              },
              {
                icon: "📊",
                title: "Data Analytics",
                description: "Advanced analytics for production optimization, quality control, and supply chain management."
              },
              {
                icon: "🤖",
                title: "Automation",
                description: "Robotic process automation and AI-driven manufacturing processes for enhanced efficiency."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Trends and Innovations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Key Trends & Innovations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Emerging technologies reshaping the manufacturing landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Industry 4.0 Integration",
                description: "Seamless connectivity between machines, systems, and people through advanced IoT networks.",
                features: ["Real-time monitoring", "Predictive analytics", "Automated workflows", "Digital twins"]
              },
              {
                title: "Sustainable Manufacturing",
                description: "Green technologies and sustainable practices for environmentally responsible production.",
                features: ["Energy optimization", "Waste reduction", "Carbon footprint tracking", "Circular economy"]
              },
              {
                title: "AI-Powered Quality Control",
                description: "Machine learning algorithms for automated quality inspection and defect detection.",
                features: ["Computer vision", "Pattern recognition", "Automated testing", "Quality prediction"]
              },
              {
                title: "Supply Chain Digitization",
                description: "End-to-end supply chain visibility and optimization through digital platforms.",
                features: ["Inventory management", "Demand forecasting", "Supplier integration", "Logistics optimization"]
              }
            ].map((trend, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-bold text-black mb-4">{trend.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{trend.description}</p>
                <div className="space-y-2">
                  {trend.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges and Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Challenges & Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigating the complexities of modern manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0F7993] rounded-3xl p-8 border border-[#0F7993]">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚠️</span>
                  Key Challenges
                </h3>
                <div className="space-y-4">
                  {[
                    "Legacy system integration complexities",
                    "Cybersecurity threats and data protection",
                    "Skilled workforce shortage",
                    "High initial investment costs",
                    "Regulatory compliance requirements"
                  ].map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-white font-medium">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0F7993] rounded-3xl p-8 border border-[#0F7993]">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <span className="text-3xl mr-3">🚀</span>
                  Growth Opportunities
                </h3>
                <div className="space-y-4">
                  {[
                    "Increased operational efficiency and productivity",
                    "Enhanced product quality and consistency",
                    "Reduced operational costs and waste",
                    "New revenue streams through data monetization",
                    "Improved customer satisfaction and loyalty"
                  ].map((opportunity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-white font-medium">{opportunity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world transformations in manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "AutoTech Manufacturing",
                challenge: "Reducing production downtime and improving quality control",
                solution: "Implemented IoT sensors and predictive maintenance system",
                results: ["45% reduction in downtime", "30% improvement in quality", "25% cost savings"]
              },
              {
                company: "Global Electronics Corp",
                challenge: "Optimizing supply chain and inventory management",
                solution: "Deployed AI-powered demand forecasting and inventory optimization",
                results: ["40% reduction in inventory costs", "95% order fulfillment rate", "20% faster delivery"]
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-[#0F7993] mb-4">{study.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Future Outlook
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The next decade of manufacturing innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024-2025",
                title: "AI Integration",
                description: "Widespread adoption of AI for predictive maintenance and quality control"
              },
              {
                year: "2026-2027",
                title: "Autonomous Factories",
                description: "Fully automated production lines with minimal human intervention"
              },
              {
                year: "2028-2030",
                title: "Sustainable Manufacturing",
                description: "Carbon-neutral production and circular economy implementation"
              }
            ].map((outlook, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#0F7993]/5 to-[#0F7993]/10 rounded-3xl p-8 border border-[#0F7993]/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-sm font-semibold text-[#0F7993] mb-2">{outlook.year}</div>
                <h3 className="text-xl font-bold text-black mb-4">{outlook.title}</h3>
                <p className="text-gray-600 leading-relaxed">{outlook.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our manufacturing solutions can optimize your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Digital Transformation
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
