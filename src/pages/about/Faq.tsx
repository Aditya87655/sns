import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    "General",
    "Services",
    "Support",
    "Policies",
    "Contact"
  ];

  const faqData = {
    General: [
      {
        question: "What services does SNS Future Tech offer?",
        answer: "We offer comprehensive digital solutions including web development, mobile app development, cloud solutions, AI & machine learning, digital transformation consulting, and ongoing technical support."
      },
      {
        question: "How long has SNS Future Tech been in business?",
        answer: "SNS Future Tech has been pioneering digital innovation since 2012, with over a decade of experience in transforming businesses through technology."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including manufacturing, financial services, healthcare, real estate, education, agriculture, food industry, tourism, hospitality, and automotive sectors."
      },
      {
        question: "Do you work with startups and small businesses?",
        answer: "Yes, we work with businesses of all sizes, from startups to enterprise-level organizations. We tailor our solutions to meet your specific needs and budget."
      },
      {
        question: "What makes SNS Future Tech different from other tech companies?",
        answer: "Our unique combination of technical expertise, industry knowledge, and client-centric approach sets us apart. We focus on delivering measurable business outcomes, not just technical solutions."
      }
    ],
    Services: [
      {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern web technologies (React, Node.js, Python), mobile development (React Native, Flutter), cloud platforms (AWS, Azure, Google Cloud), AI/ML frameworks, and emerging technologies like IoT and blockchain."
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes, we offer comprehensive maintenance and support packages including regular updates, security patches, performance monitoring, and 24/7 technical support."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely. We have extensive experience in system integration and can seamlessly connect new solutions with your existing infrastructure, databases, and third-party services."
      },
      {
        question: "Do you offer custom software development?",
        answer: "Yes, we specialize in custom software development tailored to your specific business requirements. We build scalable, secure, and user-friendly applications from the ground up."
      },
      {
        question: "What is your approach to project management?",
        answer: "We follow agile methodologies with regular sprints, continuous communication, and iterative development. You'll have full visibility into the project progress with regular updates and demos."
      }
    ],
    Support: [
      {
        question: "What support channels do you offer?",
        answer: "We provide multiple support channels including email, phone, live chat, and a dedicated client portal. For enterprise clients, we also offer dedicated account managers."
      },
      {
        question: "What are your support hours?",
        answer: "Our standard support is available Monday-Friday, 9 AM-6 PM EST. We also offer 24/7 support packages for critical applications and enterprise clients."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "We aim to respond to all support requests within 2 hours during business hours. Critical issues are addressed immediately, often within 30 minutes."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we offer comprehensive training programs for your team, including user training, administrator training, and technical documentation to ensure smooth adoption of new systems."
      },
      {
        question: "What if we need emergency support outside business hours?",
        answer: "We offer emergency support packages that provide 24/7 coverage for critical issues. Contact details for emergency support are provided to all clients with this service level."
      }
    ],
    Policies: [
      {
        question: "What is your data security and privacy policy?",
        answer: "We follow industry-standard security practices including data encryption, secure hosting, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations."
      },
      {
        question: "Do you sign NDAs and confidentiality agreements?",
        answer: "Yes, we routinely sign NDAs and confidentiality agreements to protect your sensitive business information and intellectual property."
      },
      {
        question: "What is your refund policy?",
        answer: "We offer a satisfaction guarantee on our services. If you're not satisfied with our work within the first 30 days, we'll work to make it right or provide a full refund."
      },
      {
        question: "Who owns the intellectual property of the developed solution?",
        answer: "You retain full ownership of all intellectual property, including source code, designs, and documentation. We provide complete ownership transfer upon project completion."
      },
      {
        question: "What happens if we need to terminate the project early?",
        answer: "We understand that business needs can change. We offer flexible contract terms and will provide all completed work and documentation if a project needs to be terminated early."
      }
    ],
    Contact: [
      {
        question: "How can I get a quote for my project?",
        answer: "You can request a quote by filling out our contact form, calling us directly, or scheduling a free consultation. We'll discuss your requirements and provide a detailed proposal within 48 hours."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations to understand your needs and discuss how we can help. This includes a preliminary assessment and recommendations."
      },
      {
        question: "What information do you need to provide an accurate quote?",
        answer: "We need details about your project scope, timeline, budget range, technical requirements, and business objectives. The more information you provide, the more accurate our quote will be."
      },
      {
        question: "How long does it take to start a project?",
        answer: "Once we agree on the project scope and terms, we can typically start within 1-2 weeks. For urgent projects, we can often begin within a few days."
      },
      {
        question: "Can we schedule a demo of your previous work?",
        answer: "Absolutely! We'd be happy to showcase our previous projects and demonstrate our capabilities. Contact us to schedule a personalized demo session."
      }
    ]
  };

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
              ❓ Frequently Asked Questions
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Got Questions?
              <span className="block text-[#0F7993]">We Have Answers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most commonly asked questions about our services, 
              processes, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
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

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {faqData[activeCategory as keyof typeof faqData].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
