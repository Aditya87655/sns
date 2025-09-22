import { motion } from "framer-motion";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
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
              💻 Web Development Services
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Custom Web
              <span className="block text-[#0F7993]">Development Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build powerful, scalable, and user-friendly web applications that drive business growth 
              and deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Service Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Frontend Development",
                description: "Modern, responsive user interfaces built with React, Vue.js, and cutting-edge technologies."
              },
              {
                icon: "⚙️",
                title: "Backend Development",
                description: "Robust server-side solutions using Node.js, Python, and scalable cloud architectures."
              },
              {
                icon: "🔗",
                title: "Full-Stack Solutions",
                description: "End-to-end web applications with seamless integration between frontend and backend."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why choose our web development services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Responsive Design",
                description: "Mobile-first approach ensuring perfect functionality across all devices and screen sizes.",
                benefits: ["Mobile optimization", "Cross-browser compatibility", "Touch-friendly interfaces", "Adaptive layouts"]
              },
              {
                title: "Performance Optimization",
                description: "Lightning-fast loading times and smooth user experiences through advanced optimization techniques.",
                benefits: ["Fast loading speeds", "SEO optimization", "Image optimization", "Code minification"]
              },
              {
                title: "Security & Reliability",
                description: "Enterprise-grade security measures and robust architecture for maximum uptime and data protection.",
                benefits: ["SSL encryption", "Data protection", "Regular backups", "99.9% uptime guarantee"]
              },
              {
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business and handle increasing traffic demands.",
                benefits: ["Cloud-ready infrastructure", "Microservices architecture", "Auto-scaling capabilities", "Load balancing"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies and Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies we use to build exceptional web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Python", "Express.js", "Django", "FastAPI", "GraphQL"]
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"]
              },
              {
                category: "Cloud & DevOps",
                technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-[#0F7993] mb-6">{tech.category}</h3>
                <div className="space-y-3">
                  {tech.technologies.map((technology, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium text-center"
                      whileHover={{ backgroundColor: "#0F7993", color: "#ffffff", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {technology}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured methodology ensuring successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements, goals, and creating a detailed project roadmap.",
                duration: "1-2 weeks"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Creating wireframes, mockups, and interactive prototypes for user validation.",
                duration: "2-3 weeks"
              },
              {
                step: "03",
                title: "Development",
                description: "Building the application using agile methodology with regular progress updates.",
                duration: "4-12 weeks"
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Comprehensive testing including functionality, performance, and security testing.",
                duration: "1-2 weeks"
              },
              {
                step: "05",
                title: "Deployment",
                description: "Launching your application with proper monitoring and performance optimization.",
                duration: "1 week"
              },
              {
                step: "06",
                title: "Maintenance",
                description: "Ongoing support, updates, and enhancements to keep your application running smoothly.",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl font-bold text-[#0F7993] mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-black mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{phase.description}</p>
                <div className="text-sm font-semibold text-[#0F7993]">Duration: {phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our web development projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                client: "TechStart Inc.",
                project: "E-commerce Platform",
                challenge: "Needed a scalable e-commerce solution to handle rapid business growth",
                solution: "Built a custom React-based platform with Node.js backend and cloud infrastructure",
                results: ["300% increase in online sales", "50% faster page load times", "99.9% uptime achieved", "Mobile conversion up 200%"]
              },
              {
                client: "HealthCare Solutions",
                project: "Patient Management System",
                challenge: "Required HIPAA-compliant web application for patient data management",
                solution: "Developed secure web application with advanced encryption and audit trails",
                results: ["100% HIPAA compliance", "60% reduction in admin time", "Enhanced patient satisfaction", "Streamlined workflows"]
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-[#0F7993] mb-2">{story.client}</h3>
                <h4 className="text-lg font-semibold text-black mb-4">{story.project}</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Challenge:</h5>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-2">Solution:</h5>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-2">Results:</h5>
                    <ul className="space-y-1">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#0F7993] rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit your project needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                model: "Fixed Price",
                description: "Best for well-defined projects with clear requirements",
                features: ["Detailed project scope", "Fixed timeline", "Predictable costs", "Milestone-based payments"],
                ideal: "Small to medium projects"
              },
              {
                model: "Time & Materials",
                description: "Flexible approach for evolving requirements and complex projects",
                features: ["Hourly billing", "Flexible scope", "Regular reporting", "Agile development"],
                ideal: "Large, complex projects"
              },
              {
                model: "Dedicated Team",
                description: "Long-term partnership with dedicated developers for your project",
                features: ["Dedicated resources", "Full-time commitment", "Direct communication", "Scalable team size"],
                ideal: "Ongoing development"
              }
            ].map((pricing, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-bold text-[#0F7993] mb-4">{pricing.model}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pricing.description}</p>
                
                <div className="space-y-3 mb-6">
                  {pricing.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-black">Ideal for: </span>
                  <span className="text-sm text-gray-600">{pricing.ideal}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project requirements and create a solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
