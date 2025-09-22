import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.div
          className="logo-container mb-8 mx-auto"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex justify-center items-center h-20 w-full">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="logo-image"
            />
          </div>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#0F7993] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-[#0F7993] font-medium text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading your digital experience...
        </motion.p>
      </motion.div>
    </div>
  );
}
