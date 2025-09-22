import { motion } from "framer-motion";

export default function SocialMediaMarketing() {
  const smmServices = [
    {
      title: "Paid Social Advertising",
      description: "Strategic paid campaigns across social platforms to maximize reach and conversions.",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads"],
      icon: "🎯"
    },
    {
      title: "Content Marketing",
      description: "Engaging content creation and distribution to build brand awareness and engagement.",
      features: ["Visual Content", "Video Marketing", "Story Creation", "User-Generated Content"],
      icon: "📸"
    },
    {
      title: "Influencer Marketing",
      description: "Partner with relevant influencers to expand your reach and build authentic connections.",
      features: ["Influencer Outreach", "Campaign Management", "Performance Tracking", "ROI Analysis"],
      icon: "🌟"
    },
    {
      title: "Community Management",
      description: "Build and nurture engaged communities around your brand across social platforms.",
      features: ["Daily Engagement", "Customer Support", "Crisis Management", "Brand Monitoring"],
      icon: "👥"
    }
  ];

  const strategies = [
    {
      icon: "📊",
      title: "Data-Driven Campaigns",
      description: "Use analytics and insights to optimize campaign performance"
    },
    {
      icon: "🎨",
      title: "Creative Excellence",
      description: "Compelling visuals and copy that capture attention"
    },
    {
      icon: "🎯",
      title: "Precise Targeting",
      description: "Reach the right audience with advanced targeting options"
    },
    {
      icon: "💰",
      title: "Budget Optimization",
      description: "Maximize ROI with smart budget allocation and bidding"
    },
    {
      icon: "📱",
      title: "Multi-Platform Approach",
      description: "Coordinated campaigns across all relevant social channels"
    },
    {
      icon: "🔄",
      title: "Continuous Optimization",
      description: "Regular testing and refinement for better results"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Develop comprehensive social media marketing strategy aligned with business goals"
    },
    {
      step: "02",
      title: "Audience Research",
      description: "Identify and analyze your target audience across different social platforms"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Develop engaging, platform-specific content that drives action"
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "Execute multi-platform campaigns with precise targeting and optimization"
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "Track key metrics and optimize campaigns for maximum ROI"
    },
    {
      step: "06",
      title: "Reporting & Analysis",
      description: "Provide detailed reports and insights for continuous improvement"
    }
  ];

  const platforms = [
    { name: "Facebook", users: "2.9B+", strength: "Broad reach & detailed targeting" },
    { name: "Instagram", users: "2B+", strength: "Visual storytelling & engagement" },
    { name: "LinkedIn", users: "900M+", strength: "B2B marketing & professional networking" },
    { name: "Twitter", users: "450M+", strength: "Real-time engagement & trending topics" },
    { name: "TikTok", users: "1B+", strength: "Viral content & younger demographics" },
    { name: "YouTube", users: "2.7B+", strength: "Video marketing & long-form content" }
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
            <span className="text-[#0F7993] font-medium">Social Media Marketing</span>
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
              📱 Social Media Marketing
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Drive Results with
              <span className="block text-[#0F7993]">Social Media Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach your target audience, build brand awareness, and drive conversions with 
              strategic social media marketing campaigns that deliver measurable results.
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
              Our Social Media Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media marketing solutions to grow your brand and drive business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smmServices.map((service, index) => (
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

      {/* Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Marketing Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven strategies that drive engagement, conversions, and business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">{strategy.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{strategy.description}</p>
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
              Our Marketing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to social media marketing that delivers consistent results
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
              Platform Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the unique strengths of each social media platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-bold text-black mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{platform.users} active users</p>
                <p className="text-gray-600 text-sm leading-relaxed">{platform.strength}</p>
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
              Ready to Amplify Your Social Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create powerful social media campaigns that drive engagement and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Campaign
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Strategy Session
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
