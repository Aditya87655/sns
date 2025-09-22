import { motion } from "framer-motion";

export default function CloudSolutions() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure and applications to the cloud with minimal downtime.",
      features: ["Infrastructure Assessment", "Migration Planning", "Data Transfer", "Testing & Validation"],
      icon: "☁️"
    },
    {
      title: "AWS Solutions",
      description: "Comprehensive Amazon Web Services implementation and management for scalable cloud infrastructure.",
      features: ["EC2 & Lambda", "S3 Storage", "RDS Databases", "CloudFront CDN"],
      icon: "🟠"
    },
    {
      title: "Azure Services",
      description: "Microsoft Azure cloud solutions for enterprise-grade applications and hybrid cloud environments.",
      features: ["Azure VMs", "Azure Storage", "Azure SQL", "Azure Active Directory"],
      icon: "🔵"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and DevOps practices for faster, more reliable software delivery.",
      features: ["Continuous Integration", "Automated Deployment", "Infrastructure as Code", "Monitoring & Logging"],
      icon: "🔄"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity Management", "Data Encryption", "Network Security", "Compliance Monitoring"],
      icon: "🔒"
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for better performance and cost efficiency.",
      features: ["Cost Analysis", "Performance Tuning", "Resource Scaling", "Architecture Review"],
      icon: "⚡"
    }
  ];

  const cloudProviders = [
    { name: "AWS", icon: "🟠" },
    { name: "Microsoft Azure", icon: "🔵" },
    { name: "Google Cloud", icon: "🔴" },
    { name: "DigitalOcean", icon: "🔷" },
    { name: "Heroku", icon: "🟣" },
    { name: "Vercel", icon: "⚫" }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyzing your current infrastructure and creating a comprehensive cloud strategy"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Designing scalable and secure cloud architecture tailored to your needs"
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description: "Executing the migration plan with minimal disruption to your operations"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization of your cloud environment"
    },
    {
      step: "05",
      title: "Monitoring & Support",
      description: "Ongoing monitoring, maintenance, and support for your cloud infrastructure"
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
            <span className="text-[#0F7993] font-medium">Cloud Solutions</span>
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
              ☁️ Cloud Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Scale Your Business
              <span className="block text-[#0F7993]">With Cloud Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud solutions 
              that grow with your needs and drive innovation.
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
              Our Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions from migration to optimization, designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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

      {/* Cloud Providers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Cloud Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with leading cloud providers to deliver the best solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl mb-3">{provider.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">{provider.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Migration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures smooth and successful cloud adoption
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

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Benefits of Cloud Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why businesses choose cloud solutions for their digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "Cost Savings",
                description: "Reduce infrastructure costs and pay only for what you use"
              },
              {
                icon: "📈",
                title: "Scalability",
                description: "Scale resources up or down based on demand"
              },
              {
                icon: "🔒",
                title: "Enhanced Security",
                description: "Enterprise-grade security and compliance"
              },
              {
                icon: "🌍",
                title: "Global Accessibility",
                description: "Access your applications from anywhere in the world"
              }
            ].map((benefit, index) => (
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your cloud strategy and create a migration plan that minimizes risk and maximizes benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Cloud Journey
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Cloud Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
