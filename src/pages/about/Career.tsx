import { motion } from "framer-motion";
import { useState } from "react";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Engineering", "Design", "Marketing", "Sales", "Operations"];

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain CI/CD pipelines, cloud infrastructure, and monitoring systems."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "New York",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive digital marketing campaigns and growth strategies across multiple channels."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "5+ years",
      description: "Identify and develop new business opportunities and strategic partnerships."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead cross-functional teams to deliver projects on time and within budget."
    }
  ];

  const filteredJobs = selectedDepartment === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

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
              🚀 Join Our Team
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Build Your Career
              <span className="block text-[#0F7993]">With SNS Future Tech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are shaping the future of digital technology. 
              Grow your career while making a meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes SNS Future Tech a great place to work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Innovation First",
                description: "We encourage creative thinking and provide the resources to turn ideas into reality."
              },
              {
                icon: "🤝",
                title: "Collaborative Environment",
                description: "Work with talented individuals who support each other's growth and success."
              },
              {
                icon: "📈",
                title: "Continuous Learning",
                description: "Access to training, conferences, and certifications to advance your skills."
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description: "Flexible schedules and remote work options to maintain a healthy balance."
              },
              {
                icon: "🎯",
                title: "Impact-Driven",
                description: "Work on projects that make a real difference for our clients and their customers."
              },
              {
                icon: "🏆",
                title: "Recognition & Growth",
                description: "Clear career paths with opportunities for advancement and leadership roles."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find your next opportunity with us
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {departments.map((department) => (
              <motion.button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === department
                    ? "bg-[#0F7993] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-[#0F7993]/10 hover:text-[#0F7993] shadow-md border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {department}
              </motion.button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#0F7993]/10 text-[#0F7993] rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.experience}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {job.description}
                </p>
                
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits package designed for your well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏥",
                title: "Health & Wellness",
                benefits: ["Medical, dental, vision insurance", "Mental health support", "Wellness programs", "Gym membership"]
              },
              {
                icon: "💰",
                title: "Financial",
                benefits: ["Competitive salary", "Performance bonuses", "401(k) matching", "Stock options"]
              },
              {
                icon: "🏖️",
                title: "Time Off",
                benefits: ["Unlimited PTO", "Paid holidays", "Sabbatical program", "Parental leave"]
              },
              {
                icon: "📚",
                title: "Development",
                benefits: ["Learning budget", "Conference attendance", "Certification support", "Mentorship programs"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-[#0F7993] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Career Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your growth is our priority
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Onboarding",
                description: "Comprehensive orientation program to get you started on the right foot with mentorship and training."
              },
              {
                step: "02",
                title: "Skill Development",
                description: "Continuous learning opportunities through workshops, courses, and hands-on projects with cutting-edge technologies."
              },
              {
                step: "03",
                title: "Career Advancement",
                description: "Clear promotion paths with regular performance reviews and opportunities to take on leadership roles."
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-6xl font-bold text-[#0F7993]/20 mb-4">{stage.step}</div>
                <h3 className="text-xl font-bold text-black mb-4">{stage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple and transparent hiring process
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Apply Online",
                description: "Submit your application through our careers page with your resume and cover letter."
              },
              {
                step: 2,
                title: "Initial Screening",
                description: "Our HR team will review your application and conduct an initial phone screening."
              },
              {
                step: 3,
                title: "Technical Interview",
                description: "Meet with our technical team to discuss your skills and experience relevant to the role."
              },
              {
                step: 4,
                title: "Final Interview",
                description: "Final interview with the hiring manager and team members you'll be working with."
              },
              {
                step: 5,
                title: "Offer & Onboarding",
                description: "Receive your offer and begin the onboarding process to join the SNS Future Tech family."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F7993] text-white rounded-full flex items-center justify-center font-bold">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F7993]/5 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Our Team Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our employees about their experience at SNS Future Tech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Developer",
                quote: "SNS Future Tech has provided me with incredible opportunities to grow both technically and professionally. The collaborative environment and cutting-edge projects keep me excited about coming to work every day.",
                avatar: "👩‍💻"
              },
              {
                name: "Michael Chen",
                role: "UX Designer",
                quote: "The work-life balance here is exceptional. I can focus on creating amazing user experiences while still having time for my personal life. The team is supportive and the projects are challenging in the best way.",
                avatar: "👨‍🎨"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>
                    <p className="text-[#0F7993] font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.quote}"</p>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take the next step in your career and become part of our innovative team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[#0F7993] text-[#0F7993] font-semibold rounded-xl hover:bg-[#0F7993] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
