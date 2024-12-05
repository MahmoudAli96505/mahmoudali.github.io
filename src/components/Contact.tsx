import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Flag, Shield, Book } from 'lucide-react';
import { hoverScale } from '../constants/animations';

interface ContactProps {
  isActive: boolean;
}

export const Contact = ({ isActive }: ContactProps) => {
  const contactInfo = {
    email: "Mahmoud.ali01245@gmail.com",
    phone: "+201097831301",
    location: "Alexandria, Egypt"
  };

  const additionalInfo = [
    { icon: <Calendar className="w-5 h-5" />, label: "Date of Birth", value: "September 19, 2001" },
    { icon: <Flag className="w-5 h-5" />, label: "Nationality", value: "Egyptian" },
    { icon: <Shield className="w-5 h-5" />, label: "Military Service", value: "Exempt" },
    { icon: <Book className="w-5 h-5" />, label: "Religion", value: "Muslim" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      className={`${isActive ? 'block' : 'hidden'}`}
    >
      <div className="grid gap-6">
        <motion.div
          whileHover={hoverScale}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Contact Information
          </h2>
          <div className="space-y-6">
            <motion.div 
              whileHover={hoverScale}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
            </motion.div>
            <motion.div 
              whileHover={hoverScale}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <a 
                href={`https://wa.me/${contactInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                +{contactInfo.phone}
              </a>
            </motion.div>
            <motion.div 
              whileHover={hoverScale}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-300">{contactInfo.location}</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          whileHover={hoverScale}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={hoverScale}
                className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-lg text-white mt-1">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};