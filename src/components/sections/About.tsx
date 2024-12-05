import { motion } from 'framer-motion';
import { hoverScale } from '../../constants/animations';

interface AboutProps {
  isActive: boolean;
}

export const About = ({ isActive }: AboutProps) => {
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
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          A highly motivated and detail-oriented graduate in Management Information Systems with extensive experience in sales, 
          cashiering, customer service, data entry, and supervisory roles. Proven ability to work effectively under pressure, 
          manage tasks with accuracy, and deliver high-quality results. Seeking opportunities to leverage my diverse skill set 
          in a dynamic work environment where I can contribute to organizational success while continuing to grow professionally.
        </p>
      </motion.div>
    </motion.section>
  );
};