// Navigation.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

interface MenuItem {
  label: string;
  to?: string;
  children?: MenuItem[];
}

const aboutMenu: MenuItem[] = [
  {
    label: "Industry", to: "/industry",
    children: [
      { label: "Manufacturing", to: "/industry/manufacturing" },
      { label: "Financial Services", to: "/industry/financial-services" },
      { label: "Healthcare", to: "/industry/healthcare" },
      { label: "Real Estate", to: "/industry/real-estate" },
      { label: "Education", to: "/industry/education" },
      { label: "Agriculture", to: "/industry/agriculture" },
      { label: "Food Industry", to: "/industry/food-industry" },
      { label: "Tourism And Hospitality", to: "/industry/tourism-hospitality" },
      { label: "Automobiles", to: "/industry/automobiles" },
    ],
  },
  { label: "FAQ", to: "/faq" },
  { label: "Careers", to: "/careers" },
];

const servicesMenu: MenuItem[] = [
  { label: "Website Design", to: "/services/website-design" },
  {
    label: "Web Development", to: "/services/web-development",
    children: [
      { label: "Custom Website Development", to: "/services/web-development/custom" },
      { label: "E-commerce Solutions", to: "/services/web-development/ecommerce" },
      { label: "Website Maintenance", to: "/services/web-development/maintenance" },
      { label: "Responsive Web Design", to: "/services/web-development/responsive" },
      { label: "API Development", to: "/services/web-development/api" },
      { label: "Performance Optimization", to: "/services/web-development/performance" },
    ],
  },
  {
    label: "CMS Development", to: "/services/cms-development",
    children: [
      { label: "Wordpress Development", to: "/services/cms-development/wordpress" },
      { label: "Shopify Development", to: "/services/cms-development/shopify" },
      { label: "Drupal Development", to: "/services/cms-development/drupal" },
      { label: "Joomla Development", to: "/services/cms-development/joomla" },
    ],
  },
  {
    label: "Digital Marketing Services", to: "/services/digital-marketing",
    children: [
      { label: "SEO Services", to: "/services/digital-marketing/seo" },
      { label: "PPC Management", to: "/services/digital-marketing/ppc" },
      { label: "Content Marketing", to: "/services/digital-marketing/content" },
      { label: "Social Media Marketing", to: "/services/digital-marketing/smm" },
    ],
  },
  { label: "Mobile App Development", to: "/services/mobile-app-development" },
  { label: "UI/UX Design", to: "/services/ui-ux-design" },
  { label: "Cloud Services", to: "/services/cloud-services" },
];

const navItems: MenuItem[] = [
  { label: "Home", to: "/" },
  { label: "About", children: aboutMenu },
  { label: "Services", children: servicesMenu },
  { label: "Projects", to: "/projects" },
  { label: "Solutions", to: "/solutions" },
  { label: "Team", to: "/team" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const handleDropdownToggle = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? "" : label);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -50,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo - Left Aligned */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-10 w-auto object-contain" 
              />
            </Link>
          </motion.div>

          {/* Main Nav Links - Centered */}
          <div className="hidden md:flex flex-grow-1 justify-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.label} className="relative"
                onHoverStart={() => handleDropdownToggle(item.label)}
                onHoverEnd={() => handleDropdownToggle("")}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center text-black font-semibold hover:text-[#0F7993] transition-colors">
                      {item.label}
                      <svg
                        className={`ml-1 h-5 w-5 transition-transform duration-300 transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === item.label && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={menuVariants}
                          className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden py-2"
                        >
                          {item.children.map((child) => (
                            <motion.div key={child.label} variants={itemVariants}>
                              {child.children ? (
                                <div className="relative group">
                                  <button className="w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition-colors flex justify-between items-center">
                                    {child.label}
                                    <svg
                                      className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                  <motion.div
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={menuVariants}
                                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden py-2"
                                  >
                                    {child.children.map((subChild) => (
                                      <motion.div key={subChild.label} variants={itemVariants}>
                                        <Link
                                          to={subChild.to!}
                                          className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors"
                                        >
                                          {subChild.label}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </motion.div>
                                </div>
                              ) : (
                                <Link
                                  to={child.to!}
                                  className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.to!}
                    className="text-black font-semibold hover:text-[#0F7993] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Let's Connect Button - Right Aligned */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleDialog}
              className="py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Dialog Box */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black bg-opacity-70 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] p-6 relative overflow-y-auto"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <button
                onClick={toggleDialog}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h2>
                <p className="text-gray-600 mb-6">
                  Ready to start a project? Tell us about your needs.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-gray-700 mb-2">We can help you with:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    Web Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    Mobile App Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    Digital Marketing
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-gray-700 mb-2">Contact Us:</p>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  <a href="mailto:info@company.com" className="text-gray-600 hover:text-blue-500 transition-colors">info@company.com</a>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.006 11.006 0 007.03 7.03l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.05 18 3 13.95 3 8V5z"></path></svg>
                  <span className="text-gray-600">+1 (123) 456-7890</span>
                </div>
              </div>

              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full border-gray-300 rounded-lg px-3 py-2 focus:border-[#0F7993] focus:ring-[#0F7993] transition-colors" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border-gray-300 rounded-lg px-3 py-2 focus:border-[#0F7993] focus:ring-[#0F7993] transition-colors" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
                  <textarea className="w-full border-gray-300 rounded-lg px-3 py-2 focus:border-[#0F7993] focus:ring-[#0F7993] transition-colors" rows={3}></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What is 1 + 5 ?</label>
                  <input type="text" className="w-full border-gray-300 rounded-lg px-3 py-2 focus:border-[#0F7993] focus:ring-[#0F7993] transition-colors" required />
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full z-40 md:hidden bg-white shadow-lg overflow-y-auto"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="py-6 px-4">
              <div className="flex justify-between items-center mb-6">
                <Link to="/" className="text-2xl font-bold text-[#0F7993] hover:text-[#0a5a6b] transition-colors">
                  Logo
                </Link>
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full text-left py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-black hover:text-[#0F7993] hover:bg-gray-50"
                        >
                          {item.label}
                          <svg
                            className={`ml-2 h-5 w-5 transition-transform duration-300 transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 pl-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <div key={child.label}>
                                  {child.children ? (
                                    <>
                                      <button
                                        onClick={() => handleDropdownToggle(child.label)}
                                        className="flex items-center justify-between w-full text-left py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-black hover:text-[#0F7993] hover:bg-gray-50"
                                      >
                                        {child.label}
                                        <svg
                                          className={`ml-2 h-4 w-4 transition-transform duration-300 transform ${dropdownOpen === child.label ? "rotate-180" : ""}`}
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </button>
                                      <AnimatePresence>
                                        {dropdownOpen === child.label && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-1 pl-4 space-y-1"
                                          >
                                            {child.children.map((subChild) => (
                                              <Link
                                                key={subChild.label}
                                                to={subChild.to!}
                                                className="block w-full text-left py-2 px-4 rounded-lg text-black hover:text-[#0F7993] hover:bg-gray-50"
                                                onClick={toggleMenu}
                                              >
                                                {subChild.label}
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      to={child.to!}
                                      className="block w-full text-left py-2 px-4 rounded-lg text-black hover:text-[#0F7993] hover:bg-gray-50"
                                      onClick={toggleMenu}
                                    >
                                      {child.label}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.to!}
                        className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-black hover:text-[#0F7993] hover:bg-gray-50`}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    toggleDialog();
                    toggleMenu();
                  }}
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;