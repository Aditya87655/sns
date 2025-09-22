import { motion } from "framer-motion";

export default function DigitalMarketing() {
  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines to drive organic traffic.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
      icon: "🔍"
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across social media platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
      icon: "📱"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive immediate traffic and conversions with targeted paid advertising campaigns.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"],
      icon: "💰"
    },
    {
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and retains your target audience.",
      features: ["Content Strategy", "Blog Writing", "Video Content", "Email Marketing"],
      icon: "📝"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships with targeted email campaigns.",
      features: ["Campaign Design", "Automation", "Segmentation", "Performance Analytics"],
      icon: "📧"
    },
    {
      title: "Analytics & Reporting",
      description: "Track, measure, and optimize your digital marketing performance with detailed insights.",
      features: ["Google Analytics", "Custom Dashboards", "ROI Analysis", "Monthly Reports"],
      icon: "📊"
    }
  ];

  const platforms = [
    { name: "Google Ads", icon: "🔴" },
    { name: "Facebook", icon: "🔵" },
    { name: "Instagram", icon: "🟣" },
    { name: "LinkedIn", icon: "🔷" },
    { name: "Twitter", icon: "🐦" },
    { name: "YouTube", icon: "📺" }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Analyzing your business goals and target audience to create a comprehensive digital marketing strategy"
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Setting up campaigns across chosen platforms with proper tracking and optimization"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Developing engaging content that resonates with your audience and drives action"
    },
    {
      step: "04",
      title: "Launch & Monitor",
      description: "Launching campaigns and continuously monitoring performance for optimization opportunities"
    },
    {
      step: "05",
      title: "Optimize & Scale",
      description: "Analyzing results and scaling successful campaigns while optimizing underperforming ones"
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
            <span className="text-[#0F7993] font-medium">Digital Marketing Services</span>
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F7993]/15 text-[#0F7993] text-[#0F7993] font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📈 Digital Marketing Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Grow Your Business
              <span className="block text-[#0F7993]">Online</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing strategies that drive traffic, generate leads, 
              and increase conversions for your business.
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
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From SEO to social media marketing, we offer comprehensive solutions to boost your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
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

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the power of leading digital marketing platforms to maximize your reach
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-800">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
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
              A data-driven approach to ensure maximum ROI from your marketing investment
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

      {/* Results & Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What You Can Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results that drive real business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📈",
                title: "Increased Traffic",
                description: "More qualified visitors to your website"
              },
              {
                icon: "🎯",
                title: "Better Targeting",
                description: "Reach the right audience at the right time"
              },
              {
                icon: "💰",
                title: "Higher ROI",
                description: "Maximize return on marketing investment"
              },
              {
                icon: "📊",
                title: "Data-Driven Insights",
                description: "Clear metrics and actionable insights"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{result.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create a digital marketing strategy that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Marketing Campaign
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Marketing Audit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
