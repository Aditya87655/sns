import { motion } from "framer-motion";

export default function WebsiteMaintenance() {
  const maintenanceServices = [
    {
      title: "Regular Updates",
      description: "Keep your website updated with the latest security patches and feature updates.",
      features: ["Security Updates", "Plugin Updates", "Content Updates", "Performance Monitoring"],
      icon: "🔄"
    },
    {
      title: "Backup & Recovery",
      description: "Automated backups and quick recovery solutions to protect your website data.",
      features: ["Daily Backups", "Cloud Storage", "Quick Recovery", "Data Protection"],
      icon: "💾"
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure your website runs at peak performance.",
      features: ["Speed Optimization", "Database Cleanup", "Image Compression", "Caching Setup"],
      icon: "⚡"
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and protection against threats and vulnerabilities.",
      features: ["Malware Scanning", "Security Patches", "Firewall Protection", "SSL Management"],
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8">🔧</div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Website Maintenance Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Keep your website running smoothly with our comprehensive maintenance services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
