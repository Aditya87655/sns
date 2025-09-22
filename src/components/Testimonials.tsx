import { motion } from "framer-motion";

// Hardcoded demo testimonials data
const demoTestimonials = [
  {
    _id: "1",
    name: "Sonia Verma",
    role: "CTO",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 5,
    content: "The team delivered beyond our expectations. Their expertise and dedication made our digital transformation seamless."
  },
  {
    _id: "2",
    name: "Amit Joshi",
    role: "CEO",
    company: "FinanceFirst",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
    content: "Professional, innovative, and always available. We saw measurable results within months of launch."
  },
  {
    _id: "3",
    name: "Priya Nair",
    role: "Head of Product",
    company: "InnovateHealth",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    content: "Their solutions helped us scale rapidly and improve our customer experience. Highly recommended!"
  }
];

export default function Testimonials() {
  const testimonials = demoTestimonials;

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
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
            Client Testimonials
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block text-[#0F7993]">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and 
            satisfied clients have to say about our solutions and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F7993]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Quote Icon */}
                <motion.div
                  className="text-6xl text-[#0F7993] mb-6 opacity-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  "
                </motion.div>
                
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.svg
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + starIndex * 0.05 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F7993]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#0F7993] transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#0F7993] font-semibold text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#0F7993]/20 to-[#0F7993]/30 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-br from-[#0F7993]/30 to-[#0F7993]/40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-8 text-lg">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            {["TechCorp", "InnovateHealth", "FinanceFirst", "GlobalManufacturing", "DataDriven"].map((company, index) => (
              <motion.div
                key={company}
                className="px-6 py-3 bg-gray-100 rounded-lg text-gray-600 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}