import { motion } from "framer-motion";

export default function OnlineReputationManagement() {
  const ormServices = [
    {
      title: "Review Management",
      description: "Monitor, respond to, and manage online reviews across all major platforms.",
      features: ["Review Monitoring", "Response Management", "Review Generation", "Rating Improvement"],
      icon: "⭐"
    },
    {
      title: "Brand Monitoring",
      description: "Track mentions of your brand across the web and social media platforms.",
      features: ["Mention Tracking", "Sentiment Analysis", "Alert Systems", "Competitor Monitoring"],
      icon: "👁️"
    },
    {
      title: "Crisis Management",
      description: "Rapid response strategies to address negative publicity and protect your reputation.",
      features: ["Crisis Response", "Damage Control", "PR Strategy", "Media Relations"],
      icon: "🚨"
    },
    {
      title: "Content Optimization",
      description: "Create and optimize positive content to improve your online reputation.",
      features: ["SEO Content", "Press Releases", "Social Content", "Thought Leadership"],
      icon: "📝"
    }
  ];

  const benefits = [
    {
      icon: "🛡️",
      title: "Protect Brand Image",
      description: "Safeguard your brand reputation from negative content"
    },
    {
      icon: "📈",
      title: "Increase Trust",
      description: "Build customer confidence with positive online presence"
    },
    {
      icon: "💰",
      title: "Drive Revenue",
      description: "Better reputation leads to increased sales and conversions"
    },
    {
      icon: "🎯",
      title: "Competitive Advantage",
      description: "Stand out from competitors with superior reputation"
    },
    {
      icon: "🔍",
      title: "Search Visibility",
      description: "Improve search results with positive content"
    },
    {
      icon: "👥",
      title: "Customer Loyalty",
      description: "Build stronger relationships with satisfied customers"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Reputation Audit",
      description: "Comprehensive analysis of your current online reputation across all platforms"
    },
    {
      step: "02",
      title: "Monitoring Setup",
      description: "Implement advanced monitoring systems to track mentions and reviews"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create a customized reputation management strategy for your business"
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop positive content to improve your online presence"
    },
    {
      step: "05",
      title: "Review Management",
      description: "Actively manage and respond to customer reviews and feedback"
    },
    {
      step: "06",
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and proactive reputation management"
    }
  ];

  const platforms = [
    { name: "Google My Business", icon: "🔍" },
    { name: "Yelp", icon: "📱" },
    { name: "Facebook", icon: "📘" },
    { name: "TripAdvisor", icon: "✈️" },
    { name: "Better Business Bureau", icon: "🏢" },
    { name: "Industry-Specific Sites", icon: "🏭" }
  ];

  const stats = [
    { number: "90%", label: "of consumers read reviews before visiting a business" },
    { number: "84%", label: "trust online reviews as much as personal recommendations" },
    { number: "68%", label: "of consumers form an opinion after reading 1-6 reviews" },
    { number: "73%", label: "of consumers trust a business more with positive reviews" }
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
            <span className="cursor-pointer hover:text-[#0F7993]">Digital Marketing</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Online Reputation Management</span>
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
              🛡️ Online Reputation Management
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Protect & Enhance Your
              <span className="block text-[#0F7993]">Online Reputation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Monitor, manage, and improve your online reputation with our comprehensive 
              reputation management services that build trust and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#0F7993] mb-2">{stat.number}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Our Reputation Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to monitor, protect, and enhance your online reputation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ormServices.map((service, index) => (
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
              Benefits of Reputation Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key advantages of actively managing your online reputation
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
              Our Reputation Management Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to building and maintaining a positive online reputation
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

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Platforms We Monitor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We monitor your reputation across all major review and social platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold text-black">{platform.name}</h3>
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
              Ready to Take Control of Your Reputation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's protect and enhance your online reputation to build trust and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Reputation Audit
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
