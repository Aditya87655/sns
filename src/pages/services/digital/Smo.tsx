import { motion } from "framer-motion";

export default function SocialMediaOptimization() {
  const smoServices = [
    {
      title: "Profile Optimization",
      description: "Optimize your social media profiles for maximum visibility and professional appearance.",
      features: ["Profile Setup", "Bio Optimization", "Visual Branding", "Contact Information"],
      icon: "👤"
    },
    {
      title: "Content Strategy",
      description: "Develop engaging content strategies that resonate with your target audience.",
      features: ["Content Planning", "Visual Content", "Hashtag Strategy", "Posting Schedule"],
      icon: "📝"
    },
    {
      title: "Audience Growth",
      description: "Grow your social media following with targeted strategies and organic engagement.",
      features: ["Follower Growth", "Engagement Tactics", "Community Building", "Influencer Outreach"],
      icon: "📈"
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance and optimize your social media presence with detailed analytics.",
      features: ["Performance Tracking", "Engagement Metrics", "Growth Analysis", "ROI Reporting"],
      icon: "📊"
    }
  ];

  const platforms = [
    {
      icon: "📘",
      name: "Facebook",
      description: "Optimize for the world's largest social network"
    },
    {
      icon: "📸",
      name: "Instagram",
      description: "Visual storytelling and brand engagement"
    },
    {
      icon: "🐦",
      name: "Twitter",
      description: "Real-time engagement and thought leadership"
    },
    {
      icon: "💼",
      name: "LinkedIn",
      description: "Professional networking and B2B marketing"
    },
    {
      icon: "🎵",
      name: "TikTok",
      description: "Short-form video content and viral marketing"
    },
    {
      icon: "📺",
      name: "YouTube",
      description: "Video marketing and channel optimization"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Social Media Audit",
      description: "Comprehensive analysis of your current social media presence and performance"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SMO strategy aligned with your business objectives"
    },
    {
      step: "03",
      title: "Profile Optimization",
      description: "Optimize all social media profiles for maximum visibility and engagement"
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop engaging, platform-specific content that drives interaction"
    },
    {
      step: "05",
      title: "Community Management",
      description: "Active engagement with your audience to build strong relationships"
    },
    {
      step: "06",
      title: "Performance Monitoring",
      description: "Continuous tracking and optimization based on analytics and insights"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Targeted Reach",
      description: "Connect with your ideal audience on their preferred platforms"
    },
    {
      icon: "💬",
      title: "Enhanced Engagement",
      description: "Build meaningful relationships with your community"
    },
    {
      icon: "🏆",
      title: "Brand Authority",
      description: "Establish thought leadership in your industry"
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Reach users on their mobile devices effectively"
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description: "Achieve marketing goals with lower costs than traditional advertising"
    },
    {
      icon: "🔄",
      title: "Real-Time Feedback",
      description: "Get instant feedback and adapt strategies quickly"
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
            <span className="cursor-pointer hover:text-[#0F7993]">Digital Marketing</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">Social Media Optimization</span>
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
              📱 Social Media Optimization
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Maximize Your Social
              <span className="block text-[#0F7993]">Media Impact</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Optimize your social media presence to build stronger connections, increase engagement, 
              and drive meaningful business results across all platforms.
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
              Our SMO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media optimization to enhance your online presence and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smoServices.map((service, index) => (
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
              Platforms We Optimize
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We optimize your presence across all major social media platforms
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
                <h3 className="text-lg font-bold text-black mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{platform.description}</p>
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
              Our SMO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A strategic approach to optimize your social media presence for maximum impact
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
              Benefits of SMO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key advantages of optimizing your social media presence
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Optimize Your Social Media?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's enhance your social media presence and build stronger connections with your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get SMO Strategy
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
