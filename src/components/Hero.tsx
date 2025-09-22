import { motion } from "framer-motion";

// Hardcoded demo data
const demoServices = [
  {
    _id: "1",
    icon: "💡",
    title: "Strategy & Consulting",
    description: "Expert guidance to shape your digital vision and roadmap.",
  },
  {
    _id: "2",
    icon: "🛠️",
    title: "Custom Development",
    description: "Tailored software solutions for your unique business needs.",
  },
  {
    _id: "3",
    icon: "🌐",
    title: "Web & Mobile Apps",
    description: "Modern, scalable apps for web and mobile platforms.",
  },
  {
    _id: "4",
    icon: "🔒",
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security solutions.",
  },
  {
    _id: "5",
    icon: "☁️",
    title: "Cloud Services",
    description: "Seamless migration and management of cloud infrastructure.",
  },
  {
    _id: "6",
    icon: "📈",
    title: "Analytics & AI",
    description: "Leverage data and AI to drive smarter business decisions.",
  },
];

const demoProjects = [
  {
    _id: "a",
    featured: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    title: "NextGen E-Commerce",
    description: "A scalable, cloud-native e-commerce platform for global brands.",
    category: "E-Commerce",
  },
  {
    _id: "b",
    featured: true,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "AI Analytics Suite",
    description: "Advanced analytics and AI-powered insights for enterprises.",
    category: "Analytics",
  },
  {
    _id: "c",
    featured: true,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Mobile Banking App",
    description: "Secure, user-friendly mobile banking for millions of users.",
    category: "Fintech",
  },
];

// Sample preview data for Solutions, Team, and Testimonials
const demoSolutions = [
  {
    _id: "1",
    icon: "🚀",
    title: "Startup Launch",
    description: "Agile, scalable solutions to help startups launch and grow quickly.",
  },
  {
    _id: "2",
    icon: "🏢",
    title: "SMB Growth",
    description: "Digital tools and automation to help small and medium businesses scale.",
  },
  {
    _id: "3",
    icon: "🏦",
    title: "Enterprise Transformation",
    description: "Robust, secure, and compliant solutions for large organizations.",
  }
];

const demoTeam = [
  {
    _id: "1",
    name: "Aditi Sharma",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    _id: "2",
    name: "Rahul Mehra",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    _id: "3",
    name: "Priya Singh",
    role: "AI/ML Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

const demoTestimonials = [
  {
    _id: "1",
    name: "Sonia Verma",
    role: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    content: "The team delivered beyond our expectations. Their expertise and dedication made our digital transformation seamless."
  },
  {
    _id: "2",
    name: "Amit Joshi",
    role: "CEO, FinanceFirst",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    content: "Professional, innovative, and always available. We saw measurable results within months of launch."
  }
];

export default function Hero() {
  // Use hardcoded demo data instead of API
  const services = demoServices;
  const projects = demoProjects;

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                🚀 Transforming Digital Futures
              </motion.div>

              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                Elevate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F7993] to-[#0a5a6b]">
                  Digital Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                We craft innovative technology solutions that transform
                businesses, drive growth, and create lasting digital impact in the
                modern world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                  Explore Solutions
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  { number: "500+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "150+", label: "Happy Clients" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-[#0F7993] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-200 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other sections with original styling */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          {services && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service._id}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#0F7993] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest successful digital transformations
            </p>
          </motion.div>

          {projects && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .slice(0, 3)
                .map((project, index) => (
                  <motion.div
                    key={project._id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <span className="text-sm text-[#0F7993] font-semibold bg-[#0F7993]/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-black mt-4 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored digital solutions for startups, SMBs, and enterprises
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoSolutions.map((solution, index) => (
              <motion.div
                key={solution._id}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-[#0F7993] mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experts dedicated to your success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoTeam.map((member, index) => (
              <motion.div
                key={member._id}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-[#0F7993] mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from those who trust us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F7993]">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our innovative solutions can drive your digital
              transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
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