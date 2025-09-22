import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F7993]/10 to-white relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="coding-background">
          {/* Floating Code Elements */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#0F7993]/8 font-mono text-xs select-none pointer-events-none"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.2, 0],
                rotate: [0, 180]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              {['</>', '{}', '[]', '()', 'API', 'SQL', 'JSON', 'HTTP', 'REST', 'GraphQL'][Math.floor(Math.random() * 10)]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 1: Hero Header */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
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
              About SNS Future Tech
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pioneering Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F7993] to-[#0a5a6b]">
                Innovation Since 2012
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists, strategists, and innovators 
              dedicated to transforming businesses through cutting-edge digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Mission & Vision */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver exceptional digital experiences",
                    "Foster long-term client partnerships",
                    "Drive measurable business outcomes",
                    "Maintain the highest quality standards"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl mb-6">🚀</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be the global leader in digital transformation, recognized for our 
                  innovation, expertise, and commitment to client success.
                </p>
                <ul className="space-y-3">
                  {[
                    "Shape the future of digital business",
                    "Set industry standards for excellence",
                    "Create sustainable technological impact",
                    "Build a legacy of innovation"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "We constantly push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We build trust through transparency, honesty, and ethical practices in all our interactions."
              },
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for perfection in every project, delivering quality that exceeds expectations."
              },
              {
                icon: "🌟",
                title: "Client-Centric",
                description: "Our clients' success is our success. We prioritize their needs and goals above all else."
              },
              {
                icon: "🚀",
                title: "Agility",
                description: "We adapt quickly to changing requirements and market conditions to stay ahead of the curve."
              },
              {
                icon: "🔬",
                title: "Continuous Learning",
                description: "We invest in our team's growth and stay updated with the latest industry trends and technologies."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Story */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader - the SNS Future Tech story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0F7993] to-[#0a5a6b] rounded-full"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: "2012",
                  title: "The Beginning",
                  description: "Founded by three passionate developers with a vision to transform how businesses leverage technology."
                },
                {
                  year: "2015",
                  title: "First Major Milestone",
                  description: "Reached 50 successful projects and established our reputation in the digital transformation space."
                },
                {
                  year: "2018",
                  title: "Global Expansion",
                  description: "Opened offices in New York and London, expanding our reach to serve international clients."
                },
                {
                  year: "2021",
                  title: "Innovation Leadership",
                  description: "Launched our AI and machine learning division, becoming pioneers in intelligent business solutions."
                },
                {
                  year: "2024",
                  title: "Industry Recognition",
                  description: "Recognized as a top digital transformation partner with 500+ successful projects and 98% client satisfaction."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex-1 px-8">
                    <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <div className="text-2xl font-bold text-[#0F7993] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Leadership Team */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "15+ years in digital transformation with expertise in strategic planning and business development.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Technology visionary with deep expertise in cloud architecture, AI, and scalable systems.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "Emily Johnson",
                role: "VP of Operations",
                bio: "Operations expert ensuring seamless project delivery and exceptional client experiences.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-[#0F7993] font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Our Expertise */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep technical knowledge across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Node.js", "Python", "AWS", "Azure", "Docker",
              "Kubernetes", "MongoDB", "PostgreSQL", "TensorFlow", "Blockchain", "IoT",
              "GraphQL", "TypeScript", "Next.js", "Microservices", "DevOps", "CI/CD"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:border-[#0F7993] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-gray-700 font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Company Stats */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/10 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", description: "Across all industries" },
              { number: "98%", label: "Client Satisfaction", description: "Average rating" },
              { number: "150+", label: "Happy Clients", description: "Worldwide" },
              { number: "12+", label: "Years Experience", description: "In the industry" },
              { number: "50+", label: "Team Members", description: "Expert professionals" },
              { number: "24/7", label: "Support", description: "Always available" },
              { number: "3", label: "Global Offices", description: "US, UK presence" },
              { number: "99.9%", label: "Uptime", description: "System reliability" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl font-bold text-[#0F7993] mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Call to Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with our expertise and innovation
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
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}