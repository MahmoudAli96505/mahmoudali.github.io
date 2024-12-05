import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { hoverScale } from '../../constants/animations';

interface EducationProps {
  isActive: boolean;
}

export const Education = ({ isActive }: EducationProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      className={`${isActive ? 'block' : 'hidden'}`}
    >
      <motion.div
        whileHover={hoverScale}
        className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800"
      >
        <div className="flex items-center gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Bachelor's Degree in Management Information Systems
            </h3>
            <p className="text-xl text-gray-300 mt-2">Alexandria University | 2019 - 2023</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};