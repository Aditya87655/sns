import { motion } from "framer-motion";

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const serviceCategories = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
      services: ["Custom Website Development", "E-commerce Solutions", "Web Applications", "API Development"]
    },
    {
      id: "cms-development",
      title: "CMS Development",
      description: "Content management systems tailored to your business needs",
      icon: "📝",
      color: "from-green-500 to-green-600",
      services: ["WordPress Development", "Custom CMS", "Headless CMS", "Content Strategy"]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Services",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      icon: "📈",
      color: "from-purple-500 to-purple-600",
      services: ["SEO Optimization", "Social Media Marketing", "PPC Advertising", "Content Marketing"]
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      color: "from-teal-500 to-teal-600",
      services: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "☁️",
      color: "from-indigo-500 to-indigo-600",
      services: ["Cloud Migration", "AWS Solutions", "Azure Services", "DevOps"]
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description: "Strategic technology consulting and digital transformation guidance",
      icon: "🎯",
      color: "from-orange-500 to-orange-600",
      services: ["Digital Strategy", "Technology Audit", "System Integration", "Process Optimization"]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (setCurrentPage) {
      setCurrentPage(serviceId);
    }
  };

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
              🚀 Our Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Comprehensive
              <span className="block text-[#0F7993]">Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From web development to digital marketing, we provide end-to-end technology services 
              to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#0F7993] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Services:</h4>
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full mr-2 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-sm text-[#0F7993] font-medium">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>

                <div className="flex items-center text-[#0F7993] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Services</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose SNS Future Tech
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality"
              },
              {
                icon: "🎯",
                title: "Tailored Solutions",
                description: "Custom solutions designed for your specific needs"
              },
              {
                icon: "🔧",
                title: "Ongoing Support",
                description: "Continuous maintenance and support services"
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description: "Analytics and insights to measure success"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project requirements and create a solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
