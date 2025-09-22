import { motion } from "framer-motion";

export default function DevOpsServices() {
  const devopsServices = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automated continuous integration and deployment pipelines for faster, reliable software delivery.",
      features: ["Automated Testing", "Code Quality Gates", "Deployment Automation", "Rollback Strategies"],
      icon: "🔄"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and scalability.",
      features: ["Terraform", "CloudFormation", "Ansible", "Version Control"],
      icon: "🏗️"
    },
    {
      title: "Container Orchestration",
      description: "Docker and Kubernetes solutions for scalable, portable application deployment.",
      features: ["Docker Containerization", "Kubernetes Clusters", "Service Mesh", "Auto-scaling"],
      icon: "📦"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring, logging, and alerting solutions for system reliability.",
      features: ["Application Monitoring", "Log Aggregation", "Performance Metrics", "Alert Management"],
      icon: "📊"
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Faster Deployment",
      description: "Reduce deployment time from hours to minutes with automated pipelines"
    },
    {
      icon: "🛡️",
      title: "Improved Reliability",
      description: "Minimize downtime and errors through automated testing and monitoring"
    },
    {
      icon: "📈",
      title: "Scalability",
      description: "Easily scale applications and infrastructure based on demand"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Optimize cloud costs through efficient resource management"
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Integrate security practices throughout the development lifecycle"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Break down silos between development and operations teams"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Current State Assessment",
      description: "Evaluate existing development and deployment processes, tools, and infrastructure"
    },
    {
      step: "02",
      title: "DevOps Strategy Design",
      description: "Create a comprehensive DevOps roadmap aligned with business objectives"
    },
    {
      step: "03",
      title: "Tool Selection & Setup",
      description: "Choose and configure the right DevOps tools for your technology stack"
    },
    {
      step: "04",
      title: "Pipeline Implementation",
      description: "Build automated CI/CD pipelines with testing and deployment automation"
    },
    {
      step: "05",
      title: "Monitoring & Security",
      description: "Implement comprehensive monitoring, logging, and security measures"
    },
    {
      step: "06",
      title: "Training & Optimization",
      description: "Team training and continuous optimization of DevOps processes"
    }
  ];

  const tools = [
    "Jenkins", "GitLab CI", "Docker", "Kubernetes", 
    "Terraform", "Ansible", "Prometheus", "Grafana"
  ];

  const practices = [
    { name: "Continuous Integration", description: "Automated code integration and testing" },
    { name: "Continuous Deployment", description: "Automated application deployment" },
    { name: "Infrastructure as Code", description: "Version-controlled infrastructure management" },
    { name: "Microservices Architecture", description: "Scalable, maintainable service design" },
    { name: "Site Reliability Engineering", description: "Operational excellence and reliability" },
    { name: "Security Integration", description: "DevSecOps practices and security automation" }
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
            <span className="text-[#0F7993] font-medium">DevOps Services</span>
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
              🚀 DevOps Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Accelerate Development with
              <span className="block text-[#0F7993]">DevOps Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your software development lifecycle with our comprehensive DevOps services 
              that enable faster delivery, improved reliability, and seamless collaboration.
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
              Our DevOps Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive DevOps solutions to streamline your development and deployment processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devopsServices.map((service, index) => (
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
              Transform Your Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that drive efficiency, reliability, and business growth
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
              Our DevOps Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful DevOps transformation
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

      {/* DevOps Practices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              DevOps Best Practices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-proven practices we implement to ensure DevOps success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{practice.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools that power our DevOps solutions
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
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's transform your development process with our comprehensive DevOps solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get DevOps Assessment
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
