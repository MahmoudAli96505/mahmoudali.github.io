import { motion } from 'framer-motion';
import { FileText, Code, Database, User, Clock, Languages } from 'lucide-react';
import { hoverScale } from '../../constants/animations';

interface SkillsProps {
  isActive: boolean;
}

export const Skills = ({ isActive }: SkillsProps) => {
  const skills = [
    { name: "Microsoft Office Applications", icon: <FileText className="w-6 h-6" /> },
    { name: "HTML & CSS", icon: <Code className="w-6 h-6" /> },
    { name: "Data Entry & Management", icon: <Database className="w-6 h-6" /> },
    { name: "Fast Typing (100+ WPM)", icon: <FileText className="w-6 h-6" /> },
    { name: "Sales & Customer Service", icon: <User className="w-6 h-6" /> },
    { name: "Cash Handling and Accuracy", icon: <FileText className="w-6 h-6" /> },
    { name: "Work Efficiency", icon: <FileText className="w-6 h-6" /> },
    { name: "Time Management", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      className={`${isActive ? 'block' : 'hidden'}`}
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={hoverScale}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-800"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-blue-400">{skill.icon}</div>
                <span className="text-base sm:text-lg text-gray-300">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          whileHover={hoverScale}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-800"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <Languages className="w-6 h-6 sm:w-8 sm:h-8" /> Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div 
              whileHover={hoverScale}
              className="p-4 sm:p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <p className="text-lg sm:text-xl font-semibold text-white mb-2">English</p>
              <p className="text-base sm:text-lg text-gray-300">Intermediate (B1/B2)</p>
            </motion.div>
            <motion.div 
              whileHover={hoverScale}
              className="p-4 sm:p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <p className="text-lg sm:text-xl font-semibold text-white mb-2">Arabic</p>
              <p className="text-base sm:text-lg text-gray-300">Native</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};