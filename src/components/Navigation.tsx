import { motion } from 'framer-motion';
import { hoverScale } from '../constants/animations';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: string[];
}

export const Navigation = ({ activeSection, setActiveSection, sections }: NavigationProps) => {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg sticky top-0 z-50 py-4 mb-8 shadow-2xl border-b border-gray-800 overflow-x-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 min-w-max">
          {sections.map((section) => (
            <motion.button
              key={section}
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                activeSection === section 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};