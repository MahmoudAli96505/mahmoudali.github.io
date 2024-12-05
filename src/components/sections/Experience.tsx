import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { hoverScale } from '../../constants/animations';

interface ExperienceProps {
  isActive: boolean;
}

export const Experience = ({ isActive }: ExperienceProps) => {
  const workExperience = [
    {
      title: "Freelance Data Entry",
      company: "Self-Employed",
      period: "01/2024 - 05/2024",
      duties: [
        "Completed accurate data entry tasks for various clients, meeting deadlines consistently",
        "Ensured data integrity and precision across different formats and platforms"
      ]
    },
    {
      title: "Data Entry",
      company: "Smart Digital",
      period: "06/2023 - 12/2023",
      duties: [
        "Handled large volumes of data with accuracy, following company standards",
        "Contributed to database maintenance and performed quality checks regularly"
      ]
    },
    {
      title: "Data Entry",
      company: "Al Hamd Group",
      period: "05/2022 - 05/2023",
      duties: [
        "Executed data entry tasks with precision, maintaining accuracy in records",
        "Assisted in database management and verified data for consistency"
      ]
    },
    {
      title: "Manager",
      company: "Computer Store",
      period: "08/2021 - 04/2022",
      duties: [
        "Oversaw sales, repairs, and customer service, improving efficiency",
        "Managed inventory and vendor relations, ensuring timely stock replenishment",
        "Conducted hardware repairs and software installations",
        "Provided technical support and troubleshooting for hardware and software issues"
      ]
    },
    {
      title: "Supervisor",
      company: "Wegzo Restaurant",
      period: "12/2019 - 05/2021",
      duties: [
        "Supervised staff and daily operations to ensure smooth workflow",
        "Managed customer inquiries and complaints, ensuring high satisfaction levels"
      ]
    },
    {
      title: "Head Cashier",
      company: "Shawermizer Restaurant",
      period: "11/2018 - 10/2019",
      duties: [
        "Handled daily cash transactions, maintaining accuracy in cash handling",
        "Trained junior cashiers on financial protocols and customer service"
      ]
    },
    {
      title: "Sales Representative",
      company: "Nestlé Waters",
      period: "05/2017 - 08/2018",
      duties: [
        "Promoted products and achieved sales targets in assigned regions",
        "Maintained relationships with customers, providing high-quality service"
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      className={`${isActive ? 'block' : 'hidden'}`}
    >
      <div className="grid gap-6">
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            whileHover={hoverScale}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {job.title}
                </h3>
                <p className="text-xl text-gray-400 mt-1">{job.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{job.period}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {job.duties.map((duty, i) => (
                <li key={i} className="text-gray-300 flex items-start text-lg">
                  <span className="mr-3 text-blue-400">•</span> {duty}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};