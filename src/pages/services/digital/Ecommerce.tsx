import { motion } from "framer-motion";

export default function EcommerceMarketing() {
  const ecommerceServices = [
    {
      title: "Conversion Rate Optimization",
      description: "Optimize your e-commerce site to convert more visitors into paying customers.",
      features: ["A/B Testing", "User Experience Analysis", "Checkout Optimization", "Product Page Enhancement"],
      icon: "📈"
    },
    {
      title: "Shopping Ads Management",
      description: "Strategic Google Shopping and social commerce campaigns to drive product sales.",
      features: ["Google Shopping Ads", "Facebook Shop", "Instagram Shopping", "Product Feed Optimization"],
      icon: "🛒"
    },
    {
      title: "Email Marketing Automation",
      description: "Automated email campaigns to nurture leads and increase customer lifetime value.",
      features: ["Welcome Series", "Abandoned Cart Recovery", "Post-Purchase Follow-up", "Segmentation"],
      icon: "📧"
    },
    {
      title: "Marketplace Optimization",
      description: "Optimize your presence on major e-commerce marketplaces for maximum visibility.",
      features: ["Amazon SEO", "eBay Optimization", "Etsy Marketing", "Marketplace Advertising"],
      icon: "🏪"
    }
  ];

  const strategies = [
    {
      icon: "🎯",
      title: "Customer Journey Mapping",
      description: "Understand and optimize every touchpoint in the buying process"
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Use analytics to make informed marketing decisions"
    },
    {
      icon: "🔄",
      title: "Retargeting Campaigns",
      description: "Re-engage visitors who didn't complete their purchase"
    },
    {
      icon: "💎",
      title: "Product Positioning",
      description: "Strategic positioning to highlight unique value propositions"
    },
    {
      icon: "📱",
      title: "Mobile Commerce",
      description: "Optimize for the growing mobile shopping audience"
    },
    {
      icon: "🎁",
      title: "Promotional Strategies",
      description: "Strategic discounts and offers to drive sales"
    }
  ];

  const process = [
    {
      step: "01",
      title: "E-commerce Audit",
      description: "Comprehensive analysis of your current e-commerce performance and opportunities"
    },
    {
      step: "02",
      title: "Customer Research",
      description: "Deep dive into your target audience behavior and preferences"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create a customized e-commerce marketing strategy aligned with your goals"
    },
    {
      step: "04",
      title: "Campaign Implementation",
      description: "Execute multi-channel campaigns across all relevant platforms"
    },
    {
      step: "05",
      title: "Conversion Optimization",
      description: "Continuously test and optimize for better conversion rates"
    },
    {
      step: "06",
      title: "Performance Analysis",
      description: "Regular reporting and analysis to maximize ROI and growth"
    }
  ];

  const metrics = [
    { metric: "Conversion Rate", description: "Percentage of visitors who make a purchase" },
    { metric: "Average Order Value", description: "Average amount spent per transaction" },
    { metric: "Customer Lifetime Value", description: "Total value a customer brings over time" },
    { metric: "Return on Ad Spend", description: "Revenue generated per dollar spent on advertising" },
    { metric: "Cart Abandonment Rate", description: "Percentage of shoppers who abandon their cart" },
    { metric: "Customer Acquisition Cost", description: "Cost to acquire a new customer" }
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
            <span className="text-[#0F7993] font-medium">E-Commerce Marketing</span>
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
              🛒 E-Commerce Marketing
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Boost Your Online
              <span className="block text-[#0F7993]">Store Sales</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Drive more traffic, increase conversions, and maximize revenue with our comprehensive 
              e-commerce marketing strategies tailored for online retailers.
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
              Our E-Commerce Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing solutions designed specifically for online stores and e-commerce businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
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
              Our E-Commerce Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven strategies that drive online sales and customer loyalty
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
              Our E-Commerce Marketing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to e-commerce marketing that maximizes sales and ROI
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

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Key E-Commerce Metrics We Track
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important metrics that help measure and optimize your e-commerce performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{item.metric}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
              Ready to Scale Your E-Commerce Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create a comprehensive marketing strategy that drives sales and grows your online store
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start E-Commerce Audit
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Marketing Strategy
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
