import { motion } from "framer-motion";

export default function CRMLeadManagement() {
  const crmFeatures = [
    {
      title: "Lead Capture & Tracking",
      description: "Automatically capture leads from multiple sources and track their journey through your sales funnel.",
      features: ["Multi-channel Lead Capture", "Lead Scoring", "Activity Tracking", "Source Attribution"],
      icon: "🎯"
    },
    {
      title: "Contact Management",
      description: "Centralized customer database with detailed profiles, interaction history, and preferences.",
      features: ["Customer Profiles", "Interaction History", "Segmentation", "Custom Fields"],
      icon: "👥"
    },
    {
      title: "Sales Pipeline",
      description: "Visual sales pipeline management with customizable stages and automated workflows.",
      features: ["Pipeline Visualization", "Deal Tracking", "Stage Automation", "Forecasting"],
      icon: "📊"
    },
    {
      title: "Communication Hub",
      description: "Integrated communication tools for email, calls, and messaging with full conversation history.",
      features: ["Email Integration", "Call Logging", "SMS Messaging", "Communication Timeline"],
      icon: "💬"
    }
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Increased Sales",
      description: "Better lead management and follow-up processes drive higher conversion rates"
    },
    {
      icon: "⏰",
      title: "Time Savings",
      description: "Automation reduces manual tasks and streamlines sales processes"
    },
    {
      icon: "🎯",
      title: "Better Targeting",
      description: "Advanced segmentation and lead scoring improve marketing effectiveness"
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Comprehensive analytics help optimize sales and marketing strategies"
    },
    {
      icon: "🤝",
      title: "Improved Relationships",
      description: "Better customer data management leads to stronger relationships"
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connects with your existing tools and marketing platforms"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Analyze your current sales process, lead sources, and business requirements"
    },
    {
      step: "02",
      title: "System Architecture",
      description: "Design a CRM solution tailored to your sales workflow and team structure"
    },
    {
      step: "03",
      title: "Data Migration",
      description: "Safely migrate existing customer data and lead information to the new system"
    },
    {
      step: "04",
      title: "Customization",
      description: "Configure fields, workflows, and automation rules specific to your business"
    },
    {
      step: "05",
      title: "Integration Setup",
      description: "Connect with your existing tools, email platforms, and marketing systems"
    },
    {
      step: "06",
      title: "Training & Launch",
      description: "Comprehensive team training and ongoing support for successful adoption"
    }
  ];

  const integrations = [
    { name: "Email Marketing", description: "Mailchimp, Constant Contact, HubSpot" },
    { name: "Communication", description: "Slack, Microsoft Teams, Zoom" },
    { name: "Analytics", description: "Google Analytics, Facebook Pixel" },
    { name: "E-commerce", description: "Shopify, WooCommerce, Magento" },
    { name: "Accounting", description: "QuickBooks, Xero, FreshBooks" },
    { name: "Social Media", description: "Facebook, LinkedIn, Twitter" }
  ];

  const stats = [
    { number: "41%", label: "increase in sales productivity with CRM" },
    { number: "47%", label: "improvement in customer retention" },
    { number: "300%", label: "average ROI from CRM implementation" },
    { number: "27%", label: "increase in lead conversion rates" }
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
            <span className="cursor-pointer hover:text-[#0F7993]">Solutions</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0F7993] font-medium">CRM & Lead Management</span>
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
              🚀 CRM & Lead Management
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Supercharge Your Sales with
              <span className="block text-[#0F7993]">Smart CRM Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your sales process with our comprehensive CRM and lead management system 
              designed to capture, nurture, and convert leads into loyal customers.
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

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Comprehensive CRM Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage leads, nurture relationships, and drive sales growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crmFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
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
              Drive Business Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that transform your sales process and accelerate business growth
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
              A strategic approach to implementing your custom CRM and lead management system
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

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with your favorite tools and platforms for a unified business ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{integration.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{integration.description}</p>
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
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's build a custom CRM solution that captures more leads and drives higher conversions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
