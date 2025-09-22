import { motion } from "framer-motion";

export default function SearchEngineOptimization() {
  const seoServices = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawling and indexing.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "XML Sitemaps"],
      icon: "⚙️"
    },
    {
      title: "On-Page SEO",
      description: "Optimize individual pages to rank higher and earn more relevant traffic from search engines.",
      features: ["Keyword Optimization", "Meta Tags", "Content Optimization", "Internal Linking"],
      icon: "📄"
    },
    {
      title: "Off-Page SEO",
      description: "Build authority and trust through external signals and high-quality backlink acquisition.",
      features: ["Link Building", "Local Citations", "Brand Mentions", "Social Signals"],
      icon: "🔗"
    },
    {
      title: "Local SEO",
      description: "Optimize your online presence to attract more business from relevant local searches.",
      features: ["Google My Business", "Local Keywords", "Review Management", "Local Directories"],
      icon: "📍"
    }
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Increased Visibility",
      description: "Higher rankings in search results for targeted keywords"
    },
    {
      icon: "🎯",
      title: "Targeted Traffic",
      description: "Attract qualified visitors actively searching for your services"
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description: "Long-term organic growth with better ROI than paid advertising"
    },
    {
      icon: "🏆",
      title: "Brand Authority",
      description: "Establish credibility and trust with higher search rankings"
    },
    {
      icon: "📊",
      title: "Measurable Results",
      description: "Track progress with detailed analytics and reporting"
    },
    {
      icon: "⏰",
      title: "Long-Term Growth",
      description: "Sustainable organic traffic that compounds over time"
    }
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance and competitor research"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your business goals and target audience"
    },
    {
      step: "03",
      title: "On-Page Optimization",
      description: "Optimize website content, structure, and technical elements for search engines"
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop high-quality, SEO-optimized content that engages your target audience"
    },
    {
      step: "05",
      title: "Link Building",
      description: "Build high-quality backlinks to increase domain authority and search rankings"
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description: "Continuous monitoring and monthly reporting on SEO performance and improvements"
    }
  ];

  const tools = [
    "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", 
    "Moz Pro", "Screaming Frog", "GTMetrix", "Google PageSpeed Insights"
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
            <span className="text-[#0F7993] font-medium">Search Engine Optimization</span>
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
              🔍 Search Engine Optimization
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Dominate Search Results
              <span className="block text-[#0F7993]">with Expert SEO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Increase your online visibility and drive organic traffic with our comprehensive 
              SEO strategies that deliver measurable results and long-term growth.
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
              Our SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your search rankings and drive qualified traffic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
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
              Why Choose Our SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that make our SEO approach deliver exceptional results
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
              Our SEO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers sustainable SEO results and long-term growth
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

      {/* Tools & Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              SEO Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use industry-leading tools to deliver comprehensive SEO analysis and optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className="font-semibold text-gray-800">{tool}</p>
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
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's develop a custom SEO strategy that drives organic traffic and grows your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get SEO Audit
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
