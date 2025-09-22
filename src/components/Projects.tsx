import { motion } from "framer-motion";
import { useState } from "react";

// Hardcoded demo projects data
const demoProjects = [
  {
    _id: "a",
    featured: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    title: "NextGen E-Commerce",
    description: "A scalable, cloud-native e-commerce platform for global brands.",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "AWS", "Stripe"],
  },
  {
    _id: "b",
    featured: true,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "AI Analytics Suite",
    description: "Advanced analytics and AI-powered insights for enterprises.",
    category: "Analytics",
    technologies: ["Python", "TensorFlow", "BigQuery", "React"],
  },
  {
    _id: "c",
    featured: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Mobile Banking App",
    description: "Secure, user-friendly mobile banking for millions of users.",
    category: "Fintech",
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
  {
    _id: "d",
    featured: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Healthcare Portal",
    description: "A HIPAA-compliant portal for patient engagement.",
    category: "Healthcare",
    technologies: ["Angular", "Java", "Azure"],
  },
  {
    _id: "e",
    featured: false,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    title: "Logistics Dashboard",
    description: "Real-time logistics and fleet management dashboard.",
    category: "Logistics",
    technologies: ["Vue.js", "Go", "PostgreSQL"],
  },
];

export default function Projects() {
  const projects = demoProjects;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Section 1: Hero Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              Case Studies
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories &
              <span className="block text-[#0F7993]">Project Highlights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful digital transformations and 
              innovative solutions across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Project Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { number: "500+", label: "Projects Completed", description: "Across all industries" },
              { number: "98%", label: "Client Satisfaction", description: "Average rating" },
              { number: "2.5x", label: "ROI Improvement", description: "Average client gain" },
              { number: "45%", label: "Efficiency Boost", description: "Process optimization" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-[#0F7993] mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Industry Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across diverse sectors and business domains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏥", name: "Healthcare", projects: "45+" },
              { icon: "🏦", name: "Finance", projects: "38+" },
              { icon: "🛒", name: "E-Commerce", projects: "62+" },
              { icon: "🏭", name: "Manufacturing", projects: "29+" },
              { icon: "🎓", name: "Education", projects: "33+" },
              { icon: "🚗", name: "Automotive", projects: "21+" },
              { icon: "🏢", name: "Real Estate", projects: "27+" },
              { icon: "⚡", name: "Energy", projects: "18+" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{industry.name}</div>
                <div className="text-[#0F7993] text-sm font-medium">{industry.projects} Projects</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Project Categories Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Browse our portfolio by category to see relevant case studies
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-[#0F7993] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-[#0F7993]/10 hover:text-[#0F7993] shadow-md border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-[#0F7993] text-white text-sm font-semibold rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>

                <div className="p-8">
                  <div className="mb-3">
                    <span className="text-sm text-[#0F7993] font-semibold bg-[#0F7993]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0F7993] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#e6f6fa", color: "#0F7993" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-[#0F7993]/10 text-[#0F7993] rounded-full text-sm font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.button
                    className="w-full py-3 text-[#0F7993] font-semibold hover:text-white hover:bg-[#0F7993] border-2 border-[#0F7993] rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: Project Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/10 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning",
                icon: "📋",
                description: "Comprehensive requirement analysis and strategic planning",
                duration: "2-4 weeks"
              },
              {
                phase: "Development",
                icon: "⚙️",
                description: "Agile development with regular client feedback loops",
                duration: "8-16 weeks"
              },
              {
                phase: "Deployment",
                icon: "🚀",
                description: "Seamless launch with ongoing support and optimization",
                duration: "1-2 weeks"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                <div className="text-[#0F7993] font-semibold text-sm">{phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our proven expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0a5a6b] transition-all duration-300"
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
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}