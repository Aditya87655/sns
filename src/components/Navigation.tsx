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
      { label: "Custom Website Development", to: "/services/web/custom" },
      { label: "E-Commerce Web Development", to: "/services/web/ecommerce-development" },
      { label: "Progressive Web App Development", to: "/services/web/progressive-web-app" },
    ],
  },
  {
    label: "Cms Development", to: "/services/cms-development",
    children: [
      { label: "WordPress Development", to: "/services/cms/wordpress" },
      { label: "Shopify Website Development", to: "/services/cms/shopify" },
      { label: "Wix Website Development", to: "/services/cms/wix" },
      { label: "Hubspot Development", to: "/services/cms/hubspot" },
      { label: "Salesforce Development", to: "/services/cms/salesforce" },
      { label: "Squarespace Website Development", to: "/services/cms/squarespace" },
    ],
  },
  { label: "Mobile Apps Development", to: "/services/mobile-apps" },
  { label: "Website Maintenance Services", to: "/services/web-maintenance" },
  { label: "DevOps Services", to: "/services/devops" },
  {
    label: "Digital Marketing Services", to: "/services/digital-marketing",
    children: [
      { label: "Search Engine Optimization", to: "/services/digital/search-engine-optimization" },
      { label: "Social Media Optimization", to: "/services/digital/social-media-optimization" },
      { label: "Social Media Marketing", to: "/services/digital/social-media-marketing" },
      { label: "E-Commerce Marketing", to: "/services/digital/ecommerce-marketing" },
      { label: "Online Reputation Management", to: "/services/digital/online-reputation-management" },
    ],
  },
  { label: "Software Testing", to: "/services/testing" },
  {
    label: "Cloud Solutions", to: "/services/cloud-solutions",
    children: [
      { label: "Learning Management System", to: "/services/solutions/learning-management-system" },
      { label: "Restaurant Management System", to: "/services/solutions/restaurant-management-system" },
      { label: "CRM and Lead Management Software", to: "/services/solutions/crm-lead-management-software" },
    ],
  },
];

function Dropdown({ items, parentLabel }: { items: MenuItem[]; parentLabel?: string }) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <motion.div
      className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black/10 z-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <div className="py-2">
        {/* Added a link for the parent menu item */}
        {parentLabel && (
          <Link
            to={`/${parentLabel.toLowerCase()}`}
            className="block px-6 py-2 hover:bg-gray-50 text-gray-800 font-semibold border-b"
          >
            {`All ${parentLabel}`}
          </Link>
        )}
        {items.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => setOpenSubmenu(item.label)}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            {item.children ? (
              <>
                <Link
                  to={item.to!}
                  className="flex items-center justify-between w-full px-6 py-2 hover:bg-gray-50 text-gray-800"
                >
                  <span>→ {item.label}</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <AnimatePresence>
                  {openSubmenu === item.label && (
                    <motion.div
                      className="absolute top-0 left-full ml-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black/10 z-30"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <Dropdown items={item.children} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to={item.to!}
                className="block px-6 py-2 hover:bg-gray-50 text-gray-800"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const navItems: MenuItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about", children: aboutMenu },
  { label: "Services", to: "/services", children: servicesMenu },
  { label: "Projects", to: "/projects" },
  { label: "Solutions", to: "/solutions" },
  { label: "Team", to: "/team" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer logo-container"
            onClick={() => setCurrentPage?.("home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/logo.png" alt="Company Logo" className="logo-image" />
          </motion.div>
          {/* Navigation */}
          <div className="flex-1 hidden md:flex justify-center items-center">
            <div className="space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative inline-block"
                  onMouseEnter={() => {
                    if (item.label === "About") setAboutOpen(true);
                    if (item.label === "Services") setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.label === "About") setAboutOpen(false);
                    if (item.label === "Services") setServicesOpen(false);
                  }}
                >
                  <Link
                    to={item.to!}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 text-black hover:text-[#0F7993]`}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {item.label === "About" && aboutOpen && (
                      <Dropdown items={aboutMenu} parentLabel="About" />
                    )}
                    {item.label === "Services" && servicesOpen && (
                      <Dropdown items={servicesMenu} parentLabel="Services" />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          {/* Let's Connect Button */}
          <button
            onClick={() => setShowDialog(true)}
            className="ml-4 px-6 py-2 bg-gradient-to-r from-[#0F7993] to-[#0a5a6a] text-white rounded-xl font-semibold shadow hover:from-[#0a5a6b] hover:to-[#0F7993] transition-all"
          >
            Let's Connect
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-lg text-black hover:text-[#0F7993] hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Let's Connect Dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              className="relative rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side */}
              <div className="bg-[#f5faff] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 flex-1 min-w-[280px]">
                <h3 className="text-xl font-bold mb-6">Need Help With?</h3>
                <ol className="list-decimal list-inside text-[#0F7993] font-semibold mb-6 space-y-1">
                  <li>Website Design</li>
                  <li>Custom Website Development</li>
                  <li>Mobile App Development</li>
                  <li>Digital Marketing Services</li>
                  <li>Software Testing</li>
                </ol>
                <div className="space-y-4 text-gray-700 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0F7993]/10 rounded-full">
                      <svg className="w-5 h-5 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0H8" />
                      </svg>
                    </span>
                    <span>Email Us<br /><span className="font-semibold text-black">connect@SNS Future Tech.com</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0F7993]/10 rounded-full">
                      <svg className="w-5 h-5 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                      </svg>
                    </span>
                    <span>Call Us<br /><span className="font-semibold text-black">+91 8xxxxxxxxx</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0F7993]/10 rounded-full">
                      <svg className="w-5 h-5 text-[#0F7993]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16.72 12.06a11.05 11.05 0 01-4.78-4.78l1.06-2.12a1 1 0 00-.21-1.09l-2.2-2.2a1 1 0 00-1.09-.21l-3.18 1.27a2 2 0 00-1.18 2.18c.27 2.09 1.09 4.13 2.41 6.05a17.93 17.93 0 006.05 6.05c1.92 1.32 3.96 2.14 6.05 2.41a2 2 0 002.18-1.18l1.27-3.18a1 1 0 00-.21-1.09l-2.2-2.2a1 1 0 00-1.09-.21l-2.12 1.06z" />
                      </svg>
                    </span>
                    <span>Whatsapp<br /><span className="font-semibold text-black">+91 8xxxxxxxxx</span></span>
                  </div>
                </div>
              </div>
              {/* Right Side (Form) */}
              <div className="flex-1 min-w-[320px] p-8 bg-[#fafdff] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
                  onClick={() => setShowDialog(false)}
                >
                  &times;
                </button>
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Full name *</label>
                      <input type="text" className="w-full border rounded-lg px-3 py-2" required />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Work email address *</label>
                      <input type="email" className="w-full border rounded-lg px-3 py-2" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number *</label>
                    <input type="tel" className="w-full border rounded-lg px-3 py-2" required />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Available Resources *</label>
                      <select className="w-full border rounded-lg px-3 py-2" required>
                        <option value="">--Please choose an option--</option>
                        <option>Web Developer</option>
                        <option>Mobile Developer</option>
                        <option>UI/UX Designer</option>
                        <option>QA Engineer</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Time Commitment *</label>
                      <select className="w-full border rounded-lg px-3 py-2" required>
                        <option value="">--Please choose an option--</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Hourly</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">How can we help you?</label>
                    <textarea className="w-full border rounded-lg px-3 py-2" rows={3}></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">What is 1 + 5 ?</label>
                    <input type="text" className="w-full border rounded-lg px-3 py-2" required />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 bg-[#0F7993] text-white font-semibold rounded-lg hover:bg-[#0a5a6b] transition-all"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white border-t border-gray-200"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to!}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-black hover:text-[#0F7993] hover:bg-gray-50`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
