import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface IndustryProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export default function Industry({ currentPage, setCurrentPage }: IndustryProps) {
  const [isIndustryExpanded, setIsIndustryExpanded] = useState(false);

  const industries = [
    { id: "manufacturing", label: "Manufacturing", icon: "🏭" },
    { id: "financial-services", label: "Financial Services", icon: "🏦" },
    { id: "healthcare", label: "Healthcare", icon: "🏥" },
    { id: "real-estate", label: "Real Estate", icon: "🏢" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "agriculture", label: "Agriculture", icon: "🌾" },
    { id: "food-industry", label: "Food Industry", icon: "🍽️" },
    { id: "tourism-hospitality", label: "Tourism and Hospitality", icon: "🏨" },
    { id: "automobiles", label: "Automobiles", icon: "🚗" }
  ];

  const menuItems = [
    { id: "faq", label: "FAQ", icon: "❓" },
    { id: "careers", label: "Careers", icon: "🚀" }
  ];

  const handleIndustryClick = (industryId: string) => {
    setCurrentPage?.(industryId);
  };

  const handleMenuClick = (menuId: string) => {
    setCurrentPage?.(menuId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
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
              📋 About SNS Future Tech
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Discover More
              <span className="block text-[#0F7993]">About Our Company</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our industry expertise, get answers to common questions, 
              and discover career opportunities with SNS Future Tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Menu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Menu Header */}
            <div className="bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] px-8 py-6">
              <h2 className="text-2xl font-bold text-white">About Menu</h2>
              <p className="text-white/80 mt-2">Navigate through our company information</p>
            </div>

            {/* Menu Content */}
            <div className="p-8">
              <nav className="space-y-2" role="navigation" aria-label="About menu">
                
                {/* Industry Section */}
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <motion.button
                    onClick={() => setIsIndustryExpanded(!isIndustryExpanded)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0F7993] focus:ring-offset-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={isIndustryExpanded}
                    aria-controls="industry-submenu"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">🏢</span>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-[#0F7993] transition-colors duration-300">
                        Industries
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isIndustryExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#0F7993]"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.button>

                  {/* Industry Submenu */}
                  <AnimatePresence>
                    {isIndustryExpanded && (
                      <motion.div
                        id="industry-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-4 mt-2"
                      >
                        <div className="space-y-1 pl-8 border-l-2 border-[#0F7993]/20">
                          {industries.map((industry, index) => (
                            <motion.button
                              key={industry.id}
                              onClick={() => handleIndustryClick(industry.id)}
                              className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0F7993] focus:ring-offset-2 group ${
                                currentPage === industry.id
                                  ? "bg-[#0F7993]/10 text-[#0F7993] shadow-md"
                                  : "hover:bg-gray-50 text-gray-700 hover:text-[#0F7993]"
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {industry.icon}
                              </span>
                              <span className="font-medium">{industry.label}</span>
                              {currentPage === industry.id && (
                                <motion.div
                                  className="ml-auto w-2 h-2 bg-[#0F7993] rounded-full"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Menu Items */}
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0F7993] focus:ring-offset-2 group ${
                        currentPage === item.id
                          ? "bg-[#0F7993]/10 text-[#0F7993] shadow-md"
                          : "hover:bg-gray-50 text-gray-700 hover:text-[#0F7993]"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-lg font-semibold">{item.label}</span>
                      {currentPage === item.id && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-[#0F7993] rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                Need help navigating? <span className="text-[#0F7993] font-medium cursor-pointer hover:underline">Contact our support team</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jump directly to the most popular sections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Discover how we serve different industries with tailored solutions",
                icon: "🏢",
                action: () => setIsIndustryExpanded(true),
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Frequently Asked Questions",
                description: "Get instant answers to common questions about our services",
                icon: "❓",
                action: () => handleMenuClick("faq"),
                color: "from-green-500 to-green-600"
              },
              {
                title: "Career Opportunities",
                description: "Join our team and build your career with innovative projects",
                icon: "🚀",
                action: () => handleMenuClick("careers"),
                color: "from-purple-500 to-purple-600"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={card.action}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 mx-auto`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-center">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{card.description}</p>
                <div className="mt-6 flex justify-center">
                  <motion.div
                    className="flex items-center text-[#0F7993] font-medium"
                    whileHover={{ x: 4 }}
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
