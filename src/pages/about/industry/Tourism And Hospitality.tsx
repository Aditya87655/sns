import { motion } from "framer-motion";

export default function TourismHospitality() {
  const hospitalitySolutions = [
    {
      title: "Hotel Management Systems",
      description: "Comprehensive property management solutions for hotels, resorts, and hospitality businesses.",
      features: ["Reservation Management", "Guest Services", "Housekeeping", "Revenue Management"],
      icon: "🏨"
    },
    {
      title: "Booking & Reservation Platforms",
      description: "Advanced booking systems with real-time availability and dynamic pricing capabilities.",
      features: ["Online Booking", "Channel Management", "Dynamic Pricing", "Payment Processing"],
      icon: "📅"
    },
    {
      title: "Guest Experience Solutions",
      description: "Digital solutions to enhance guest experience from check-in to check-out.",
      features: ["Mobile Check-in", "Digital Concierge", "Guest Communication", "Feedback Management"],
      icon: "⭐"
    },
    {
      title: "Tourism Marketing Platforms",
      description: "Digital marketing and promotion tools for tourism businesses and destinations.",
      features: ["Destination Marketing", "Social Media Integration", "Analytics Dashboard", "Content Management"],
      icon: "📱"
    }
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Revenue Optimization",
      description: "Maximize revenue through dynamic pricing and occupancy optimization"
    },
    {
      icon: "🎯",
      title: "Enhanced Guest Experience",
      description: "Personalized services and seamless digital experiences for guests"
    },
    {
      icon: "⚡",
      title: "Operational Efficiency",
      description: "Streamline operations and reduce manual processes across departments"
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Expand market reach through online channels and distribution networks"
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Comprehensive analytics for better decision-making and performance tracking"
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect with existing systems and third-party platforms effortlessly"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Business Assessment",
      description: "Analyze your hospitality operations, guest journey, and business objectives"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design customized solutions that enhance guest experience and operational efficiency"
    },
    {
      step: "03",
      title: "System Integration",
      description: "Integrate with existing PMS, booking engines, and hospitality platforms"
    },
    {
      step: "04",
      title: "Staff Training",
      description: "Comprehensive training for staff on new systems and guest service protocols"
    },
    {
      step: "05",
      title: "Guest Onboarding",
      description: "Implement guest-facing features and communication strategies"
    },
    {
      step: "06",
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization based on guest feedback and analytics"
    }
  ];

  const technologies = [
    "Cloud Computing", "Mobile Apps", "AI/ML", "IoT Devices", 
    "Payment Gateways", "CRM Systems", "Analytics Platforms", "API Integration"
  ];

  const sectors = [
    { name: "Hotels & Resorts", description: "Complete property management solutions" },
    { name: "Travel Agencies", description: "Booking and customer management systems" },
    { name: "Restaurants", description: "Reservation and order management platforms" },
    { name: "Tour Operators", description: "Tour planning and booking solutions" },
    { name: "Event Venues", description: "Event management and booking systems" },
    { name: "Transportation", description: "Fleet and booking management solutions" }
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
            <span className="text-[#0F7993] font-medium">Tourism & Hospitality</span>
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
              🏨 Tourism & Hospitality Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Elevate Guest Experiences with
              <span className="block text-[#0F7993]">Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital transformation solutions for hotels, restaurants, tourism businesses, 
              and hospitality providers that enhance guest satisfaction and operational efficiency.
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
              Our Hospitality Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative technology solutions designed for the tourism and hospitality industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hospitalitySolutions.map((solution, index) => (
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
              Transform Your Hospitality Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that drive guest satisfaction, operational efficiency, and business growth
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
              A guest-centric approach to implementing hospitality technology solutions
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

      {/* Sectors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Industry Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for different segments of the tourism and hospitality industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{sector.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
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
              Modern technologies that power exceptional hospitality experiences
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
              Ready to Enhance Your Guest Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our hospitality solutions can transform your operations and delight your guests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Hospitality Assessment
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
