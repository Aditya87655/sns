import { motion } from "framer-motion";

export default function CustomWebDevelopment() {
  const developmentServices = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to meet your specific business requirements and workflows.",
      features: ["Custom Functionality", "Database Integration", "User Management", "API Development"],
      icon: "⚙️"
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive frontend interfaces using the latest technologies and frameworks.",
      features: ["React/Vue/Angular", "Responsive Design", "Performance Optimization", "Cross-Browser Support"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions that power your web applications with scalability and security.",
      features: ["RESTful APIs", "Database Design", "Server Configuration", "Security Implementation"],
      icon: "🔧"
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete web development solutions from frontend to backend and everything in between.",
      features: ["End-to-End Development", "System Integration", "Third-Party APIs", "Cloud Deployment"],
      icon: "🚀"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep dive into your business needs and technical requirements"
    },
    {
      step: "02",
      title: "Architecture Planning",
      description: "Designing scalable and maintainable system architecture"
    },
    {
      step: "03",
      title: "Development Sprint",
      description: "Agile development with regular updates and feedback cycles"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and performance"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Smooth deployment and go-live support"
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
            <span className="text-[#0F7993] font-medium">Custom Website Development</span>
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
              💻 Custom Website Development
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Custom Web Solutions
              <span className="block text-[#0F7993]">Built for Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into powerful web applications with our custom development services 
              tailored to your unique business requirements.
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
              Our Custom Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex web applications, we build custom solutions that grow with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
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

      {/* Technologies */}
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
              Modern technologies and frameworks to build robust, scalable web applications
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
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your custom web solution is delivered on time and exceeds expectations
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your requirements and create a custom web application that perfectly fits your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Custom Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
