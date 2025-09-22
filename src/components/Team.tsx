import { motion } from "framer-motion";

const teamMembers = [
  {
    _id: "1",
    name: "Aditi Sharma",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in full-stack development and cloud architecture. Aditi leads our engineering team with a focus on scalable, secure, and high-performance solutions.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    linkedin: "https://linkedin.com/in/aditi-sharma"
  },
  {
    _id: "2",
    name: "Rahul Mehra",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Rahul drives product vision and ensures client success. He bridges the gap between business and technology for seamless delivery.",
    skills: ["Agile", "UI/UX", "Scrum"],
    linkedin: "https://linkedin.com/in/rahul-mehra"
  },
  {
    _id: "3",
    name: "Priya Singh",
    role: "AI/ML Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Specialist in machine learning and data analytics. Priya brings intelligence and automation to our digital products.",
    skills: ["Python", "TensorFlow", "Data Science"],
    linkedin: "https://linkedin.com/in/priya-singh"
  },
  {
    _id: "4",
    name: "Vikram Patel",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Automates deployments and optimizes cloud infrastructure. Vikram ensures reliability and speed in our delivery pipelines.",
    skills: ["DevOps", "Docker", "Kubernetes", "Azure"],
    linkedin: "https://linkedin.com/in/vikram-patel"
  }
];

const hiringBenefits = [
  {
    icon: "🌏",
    title: "Global Talent Pool",
    desc: "Access top-tier developers, designers, and engineers from around the world."
  },
  {
    icon: "⏱️",
    title: "Flexible Engagement",
    desc: "Hire full-time, part-time, or on-demand resources as per your project needs."
  },
  {
    icon: "💸",
    title: "Cost Effective",
    desc: "Reduce overheads and scale your team without the hassle of local hiring."
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    desc: "We ensure IP protection, NDAs, and compliance with international standards."
  }
];

const industries = [
  {
    icon: "💼",
    title: "Fintech",
    desc: "Secure, scalable solutions for banking, payments, and financial services.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Robust platforms for online retail, logistics, and digital marketplaces.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "HIPAA-compliant apps, telemedicine, and patient engagement platforms.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: "🎓",
    title: "EdTech",
    desc: "Learning management systems, e-learning, and digital classrooms.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

const testimonials = [
  {
    name: "Sonia Verma",
    role: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    content: "The remote team model gave us the flexibility and expertise we needed. Communication and delivery were top-notch!"
  },
  {
    name: "Amit Joshi",
    role: "CEO, FinanceFirst",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    content: "We scaled our product team in weeks, not months. Highly recommend for fast-growing startups."
  }
];

const faqs = [
  {
    q: "How do you ensure quality and communication?",
    a: "We assign dedicated project managers, use agile processes, and provide regular updates via your preferred channels."
  },
  {
    q: "Can I interview and select team members?",
    a: "Absolutely! You can review profiles, conduct interviews, and select the best-fit experts for your needs."
  },
  {
    q: "What about time zone differences?",
    a: "Our teams are flexible and can align with your preferred working hours for seamless collaboration."
  },
  {
    q: "Is my data and IP secure?",
    a: "Yes, we sign NDAs and ensure strict compliance with international data security standards."
  }
];

const techStack = [
  {
    name: "Node Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  {
    name: "Dot NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Shopify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  },
  {
    name: "Wix",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Full Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg",
  },
  {
    name: "Mean Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mern Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

export default function Team() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Image */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F7993]/10 text-[#0F7993] text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Remote Team Solutions
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build Your <span className="text-[#0F7993]">Remote Team</span> with Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hire dedicated developers, designers, and technology experts to accelerate your digital transformation. 
            Our remote team model gives you the flexibility, expertise, and reliability you need to scale your business.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#0a5a6b] hover:to-[#0F7993] transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.a>
        </div>
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Remote Team Collaboration"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </div>

       {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
          Hire Dedicated Remote Developers
        </h2>
        <p className="text-center text-gray-600 mb-10">
          SNS Future Tech provides dedicated remote developers skilled in latest technologies, tools, and frameworks.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-8">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ scale: 1.07, y: -4 }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-3 object-contain"
                loading="lazy"
              />
              <span className="font-semibold text-gray-800 text-base group-hover:text-[#0F7993] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#0a5a6b] hover:to-[#0F7993] transition-all"
          >
            Hire Developers
          </a>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {hiringBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl shadow p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{benefit.icon}</div>
              <div className="font-bold text-[#0F7993] mb-1">{benefit.title}</div>
              <div className="text-gray-600 text-sm">{benefit.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <img src={ind.img} alt={ind.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-center">
                <div className="text-3xl mb-2">{ind.icon}</div>
                <h3 className="font-bold text-[#0F7993] mb-1">{ind.title}</h3>
                <p className="text-gray-600 text-sm">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Meet Our Dedicated Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member._id}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-2xl object-cover mb-4 shadow group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 6 }}
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0F7993] transition-colors">
                {member.name}
              </h3>
              <div className="text-[#0F7993] font-semibold mb-2 text-sm">{member.role}</div>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#0F7993]/10 text-[#0F7993] rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-[#0F7993] text-white rounded-full hover:bg-[#0a5a6b] transition-colors shadow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          How Our Remote Team Model Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Share Your Requirements",
              desc: "Tell us about your project, required skills, and team size."
            },
            {
              step: "2",
              title: "Get the Best Match",
              desc: "We shortlist and present the best-fit experts for your needs."
            },
            {
              step: "3",
              title: "Onboard & Collaborate",
              desc: "Start working with your dedicated remote team, managed by you."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              className="bg-white rounded-2xl shadow p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-[#0F7993] mb-2 group-hover:scale-125 transition-transform">{item.step}</div>
              <div className="font-bold mb-1">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#0F7993] shadow group-hover:scale-110 transition-transform duration-300" />
              <div>
                <div className="font-bold text-[#0F7993]">{t.name}</div>
                <div className="text-gray-500 text-sm mb-2">{t.role}</div>
                <div className="text-gray-700 italic">"{t.content}"</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              className="bg-white rounded-2xl shadow p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-semibold text-[#0F7993] mb-2">{faq.q}</div>
              <div className="text-gray-600">{faq.a}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Your Remote Team?
        </motion.h3>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact us today to discuss your requirements and get a free consultation with our experts.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#0F7993] to-[#0a5a6b] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#0a5a6b] hover:to-[#0F7993] transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hire Remote Team
        </motion.a>
      </div>
    </section>
  );
}