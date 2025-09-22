import { motion } from "framer-motion";

// Hardcoded demo services data
const demoServices = [
  {
    _id: "1",
    icon: "💡",
    title: "Strategy & Consulting",
    description: "Expert guidance to shape your digital vision and roadmap.",
    features: [
      "Digital strategy workshops",
      "Technology roadmap planning",
      "Business process optimization",
    ],
  },
  {
    _id: "2",
    icon: "🛠️",
    title: "Custom Development",
    description: "Tailored software solutions for your unique business needs.",
    features: [
      "Full-stack web development",
      "Mobile app development",
      "API & integration services",
    ],
  },
  {
    _id: "3",
    icon: "🌐",
    title: "Web & Mobile Apps",
    description: "Modern, scalable apps for web and mobile platforms.",
    features: [
      "Progressive web apps",
      "Cross-platform mobile apps",
      "UI/UX design",
    ],
  },
  {
    _id: "4",
    icon: "🔒",
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security solutions.",
    features: [
      "Vulnerability assessments",
      "Security audits",
      "Compliance consulting",
    ],
  },
  {
    _id: "5",
    icon: "☁️",
    title: "Cloud Services",
    description: "Seamless migration and management of cloud infrastructure.",
    features: [
      "Cloud migration",
      "DevOps & automation",
      "Cloud cost optimization",
    ],
  },
  {
    _id: "6",
    icon: "📈",
    title: "Analytics & AI",
    description: "Leverage data and AI to drive smarter business decisions.",
    features: [
      "Business intelligence dashboards",
      "Predictive analytics",
      "AI/ML solutions",
    ],
  },
];

export default function Services() {
  const services = demoServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Section 1: Hero Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              Our Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="block text-[#0F7993]">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end technology services that transform businesses 
              and drive sustainable growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Service Overview Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
              { number: "150+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-[#0F7993] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Core Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions designed to address your unique business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F7993]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6 filter drop-shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0F7993] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-4 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-8 flex items-center text-[#0F7993] font-semibold group-hover:text-[#0a5a6b] transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[#0F7993]/10 to-[#0F7993]/20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-[#0F7993]/20 to-[#0F7993]/30 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Service Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive solution roadmap" },
              { step: "03", title: "Implementation", description: "Executing with precision and attention to detail" },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#0F7993] text-white rounded-2xl flex items-center justify-center mx-auto font-bold text-lg group-hover:bg-[#0a5a6b] transition-colors">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and platforms to build robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Node.js", "Python", "AWS", "Azure", "Docker",
              "Kubernetes", "MongoDB", "PostgreSQL", "TensorFlow", "Blockchain", "IoT"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-gray-700 font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Service Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/10 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantages that set us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Rapid Deployment",
                description: "Quick implementation with minimal disruption to your operations"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level security protocols to protect your sensitive data"
              },
              {
                icon: "📈",
                title: "Scalable Solutions",
                description: "Architecture that grows with your business needs"
              },
              {
                icon: "🎯",
                title: "Custom Approach",
                description: "Tailored solutions designed specifically for your industry"
              },
              {
                icon: "🔧",
                title: "Ongoing Support",
                description: "24/7 technical support and maintenance services"
              },
              {
                icon: "💡",
                title: "Innovation Focus",
                description: "Latest technologies and best practices implementation"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our services can drive your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0a5a6b] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
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