import { motion } from "framer-motion";

export default function Healthcare() {
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
              🏥 Healthcare Industry
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Revolutionizing
              <span className="block text-[#0F7993]">Healthcare Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering healthcare providers with innovative digital solutions that improve patient care, 
              streamline operations, and ensure regulatory compliance.
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
              Healthcare Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modernizing healthcare through technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👩‍⚕️",
                title: "Patient Care Systems",
                description: "Electronic health records, patient portals, and telemedicine platforms for enhanced care delivery."
              },
              {
                icon: "📊",
                title: "Healthcare Analytics",
                description: "Data-driven insights for clinical decision making, population health management, and operational efficiency."
              },
              {
                icon: "🔒",
                title: "HIPAA Compliance",
                description: "Secure, compliant solutions that protect patient data and meet regulatory requirements."
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

      {/* Key Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions for modern healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Electronic Health Records (EHR)",
                description: "Comprehensive patient data management systems with intuitive interfaces and seamless integration.",
                features: ["Patient data management", "Clinical workflows", "Interoperability", "Mobile access"]
              },
              {
                title: "Telemedicine Platforms",
                description: "Secure video consultation platforms enabling remote patient care and virtual health services.",
                features: ["Video consultations", "Appointment scheduling", "Prescription management", "Patient monitoring"]
              },
              {
                title: "Healthcare Analytics",
                description: "Advanced analytics platforms for clinical insights, operational efficiency, and population health.",
                features: ["Clinical decision support", "Predictive analytics", "Performance dashboards", "Quality metrics"]
              },
              {
                title: "Patient Engagement Tools",
                description: "Mobile apps and portals that empower patients to actively participate in their healthcare journey.",
                features: ["Patient portals", "Mobile health apps", "Appointment booking", "Health tracking"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-bold text-black mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transform Your Healthcare Organization
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our healthcare technology solutions can improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Healthcare Transformation
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Healthcare Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
