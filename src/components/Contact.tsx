import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Digital Transformation",
    "Cloud Solutions",
    "Data Analytics",
    "Cybersecurity",
    "Custom Development",
    "Other"
  ];

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
              Get In Touch
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Transform
              <span className="block text-[#0F7993]">Your Business?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project requirements and explore how our innovative 
              solutions can drive your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Us",
                primary: "hello@SNS Future Tech.com",
                secondary: "Response within 2 hours",
                action: "Send Email"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Call Us",
                primary: "+1 (555) 123-4567",
                secondary: "Mon-Fri, 8am-6pm EST",
                action: "Call Now"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-1 12a2 2 0 002 2h6a2 2 0 002-2L16 7m-6 0V3" />
                  </svg>
                ),
                title: "Schedule Meeting",
                primary: "Book a consultation",
                secondary: "30-minute strategy session",
                action: "Book Now"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#0F7993] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-[#0F7993] font-semibold mb-2">{method.primary}</p>
                <p className="text-gray-600 text-sm mb-6">{method.secondary}</p>
                <motion.button
                  className="px-6 py-2 bg-[#0F7993] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our team of experts is ready to help you navigate your digital transformation 
                  journey. Reach out to us through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    content: "hello@SNS Future Tech.com",
                    description: "Send us an email anytime"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    description: "Mon-Fri from 8am to 6pm EST"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Office",
                    content: "123 Innovation Drive",
                    description: "San Francisco, CA 94105"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-[#0F7993] text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-[#0F7993] font-semibold mb-1">{item.content}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                className="mt-12 p-8 bg-gradient-to-br from-[#0F7993] to-blue-700 rounded-3xl text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-2xl font-bold mb-4">Why Choose SNS Future Tech?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">24/7</div>
                    <div className="text-[#FFFFFF] text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">98%</div>
                    <div className="text-[#FFFFFF] text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">150+</div>
                    <div className="text-[#FFFFFF] text-sm">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">12+</div>
                    <div className="text-[#FFFFFF] text-sm">Years</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all bg-white shadow-sm"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all bg-white shadow-sm"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all bg-white shadow-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all bg-white shadow-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all bg-white shadow-sm"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </motion.select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0F7993] focus:border-transparent transition-all resize-none bg-white shadow-sm"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0F7993] to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Most projects range from 8-16 weeks, with smaller implementations taking 4-6 weeks."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and technical assistance."
              },
              {
                question: "Can you work with our existing technology stack?",
                answer: "Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack."
              },
              {
                question: "What industries do you serve?",
                answer: "We serve clients across healthcare, finance, e-commerce, manufacturing, education, and many other industries."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices worldwide, we're always close to our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                address: "123 Innovation Drive",
                details: "San Francisco, CA 94105",
                timezone: "PST (UTC-8)"
              },
              {
                city: "New York",
                address: "456 Business Ave",
                details: "New York, NY 10001",
                timezone: "EST (UTC-5)"
              },
              {
                city: "London",
                address: "789 Tech Street",
                details: "London, UK EC1A 1BB",
                timezone: "GMT (UTC+0)"
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <p className="text-gray-600 mb-2">{office.address}</p>
                <p className="text-gray-600 mb-4">{office.details}</p>
                <p className="text-[#0F7993] font-medium text-sm">{office.timezone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Response Time Guarantee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Response Commitment
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We guarantee quick response times to keep your project moving forward
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { time: "< 2 Hours", type: "Email Response", description: "During business hours" },
                { time: "< 15 Minutes", type: "Phone Response", description: "For urgent matters" },
                { time: "< 24 Hours", type: "Proposal Delivery", description: "For new projects" }
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-[#0F7993] mb-2">{commitment.time}</div>
                  <div className="text-gray-900 font-semibold mb-1">{commitment.type}</div>
                  <div className="text-gray-600 text-sm">{commitment.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your digital transformation journey starts with a single conversation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-[#0F7993] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
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
                Schedule Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
