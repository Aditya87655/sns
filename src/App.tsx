import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Solutions from "./components/Solutions";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import whatsappIcon from "/whatsapp-icon.png";

// Import of all dedicated pages for about
import Industry from "./pages/about/Industry";

import Manufacturing from "./pages/about/industry/Manufacturing";
import FinancialServices from "./pages/about/industry/Financial";
import Healthcare from "./pages/about/industry/Healthcare";
import RealEstate from "./pages/about/industry/Real Estate";
import Education from "./pages/about/industry/Education";
import Agriculture from "./pages/about/industry/Agriculture";
import FoodIndustry from "./pages/about/industry/Food Industry";
import TourismHospitality from "./pages/about/industry/Tourism And Hospitality";
import Automobiles from "./pages/about/industry/Automobiles";

import FAQ from "./pages/about/Faq";
import Careers from "./pages/about/Career";

// Import of all dedicated pages for services

import WebsiteDesign from "./pages/services/Website Design";

import WebDevelopment from "./pages/services/Web Development";
import CustomWebsite from "./pages/services/web/Custom";
import EcommerceWeb from "./pages/services/web/Ecommerce";
import ProgressiveWebApp from "./pages/services/web/Web app";

import CMSDevelopment from "./pages/services/Cms Development";
import WordPressDev from "./pages/services/cms/Wordpress";
import ShopifyDev from "./pages/services/cms/Shopify";
import WixDev from "./pages/services/cms/Wix Development";
import HubspotDev from "./pages/services/cms/Hubspot";
import SalesforceDev from "./pages/services/cms/Salesforce";
import SquarespaceDev from "./pages/services/cms/Squarespace";

import MobileApps from "./pages/services/Mobile App";
import WebMaintenance from "./pages/services/Web  Maintainance";
import DevOps from "./pages/services/Devops";

import DigitalMarketing from "./pages/services/Digital Marketing";
import SEO from "./pages/services/digital/Seo";
import SMO from "./pages/services/digital/Smo";
import SMM from "./pages/services/digital/Smm";
import EcommerceMarketing from "./pages/services/digital/Ecommerce";
import ORM from "./pages/services/digital/Orm";

import Testing from "./pages/services/Software Testing";

import CloudSolutions from "./pages/services/Cloud Solutions";
import LMS from "./pages/services/solutions/Lms";
import RMS from "./pages/services/solutions/Rms";
import CRM from "./pages/services/solutions/Crm";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            {/* Main nav links */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />

            {/* About submenu */}
            <Route path="/industry" element={<Industry />} />
            <Route path="/industry/manufacturing" element={<Manufacturing />} />
            <Route path="/industry/financial-services" element={<FinancialServices />} />
            <Route path="/industry/healthcare" element={<Healthcare />} />
            <Route path="/industry/real-estate" element={<RealEstate />} />
            <Route path="/industry/education" element={<Education />} />
            <Route path="/industry/agriculture" element={<Agriculture />} />
            <Route path="/industry/food-industry" element={<FoodIndustry />} />
            <Route path="/industry/tourism-hospitality" element={<TourismHospitality />} />
            <Route path="/industry/automobiles" element={<Automobiles />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />

            {/* Services submenu */}
            <Route path="/services/website-design" element={<WebsiteDesign />} />

            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web/custom" element={<CustomWebsite />} />
            <Route path="/services/web/ecommerce-development" element={<EcommerceWeb />} />
            <Route path="/services/web/progressive-web-app" element={<ProgressiveWebApp />} />

            <Route path="/services/cms-Development" element={<CMSDevelopment />} />
            <Route path="/services/cms/wordpress" element={<WordPressDev />} />
            <Route path="/services/cms/wix" element={<WixDev />} />
            <Route path="/services/cms/shopify" element={<ShopifyDev />} />
            <Route path="/services/cms/hubspot" element={<HubspotDev />} />
            <Route path="/services/cms/salesforce" element={<SalesforceDev />} />
            <Route path="/services/cms/squarespace" element={<SquarespaceDev />} />

            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/web-maintenance" element={<WebMaintenance />} />
            <Route path="/services/devops" element={<DevOps />} />

            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/digital/search-engine-optimization" element={<SEO />} />
            <Route path="/services/digital/social-media-optimization" element={<SMO />} />
            <Route path="/services/digital/social-media-marketing" element={<SMM />} />
            <Route path="/services/digital/ecommerce-marketing" element={<EcommerceMarketing />} />
            <Route path="/services/digital/online-reputation-management" element={<ORM />} />

            <Route path="/services/testing" element={<Testing />} />

            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/solutions/learning-management-system" element={<LMS />} />
            <Route path="/services/solutions/restaurant-management-system" element={<RMS />} />
            <Route path="/services/solutions/crm-lead-management-software" element={<CRM />} />


            {/* Optionally, a catch-all for 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
          {/* WhatsApp Quick Chat Button */}
          <a
            href="https://wa.me/918418942402"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp Chat"
              className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </main>
    </Router>
  );
}