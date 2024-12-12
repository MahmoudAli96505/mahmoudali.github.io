import { motion } from 'framer-motion';
import { hoverScale } from '../constants/animations';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <div className="text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={hoverScale}
        >
          Mahmoud Ali
        </motion.h1>
        <p className="text-xl sm:text-2xl text-gray-300">Management Information Systems Graduate</p>
      </div>
    </motion.header>
  );
};