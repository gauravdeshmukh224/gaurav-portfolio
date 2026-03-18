import { motion } from 'motion/react';
import { Database, BarChart3, Code2, LineChart, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: '01',
    title: 'Data Analysis',
    icon: Database,
    tools: ['SQL', 'Python', 'Pandas', 'NumPy', 'Excel'],
    description: 'Extracting, cleaning, and processing large datasets to uncover meaningful patterns.'
  },
  {
    id: '02',
    title: 'Visualization',
    icon: BarChart3,
    tools: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'D3.js'],
    description: 'Creating interactive dashboards and visual stories that communicate complex insights.'
  },
  {
    id: '03',
    title: 'Statistical Modeling',
    icon: LineChart,
    tools: ['R', 'SciPy', 'Statsmodels', 'A/B Testing'],
    description: 'Applying mathematical frameworks to predict trends and validate hypotheses.'
  },
  {
    id: '04',
    title: 'Python',
    icon: Terminal,
    tools: ['Automation', 'Web Scraping', 'Data Wrangling', 'API Integration'],
    description: 'Developing efficient scripts and automated workflows to streamline data collection and processing.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-off-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 left-0 w-full pointer-events-none opacity-[0.05] select-none">
        <h2 className="text-[20vw] font-black uppercase leading-none whitespace-nowrap">
          expertise . expertise .
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
            skills &<br />tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-off-white p-12 hover:bg-black hover:text-off-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                  <category.icon size={24} />
                </div>
                <span className="text-sm font-bold opacity-30 group-hover:opacity-50">{category.id}</span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                {category.title}
              </h3>
              
              <p className="text-sm opacity-60 mb-8 leading-relaxed max-w-xs">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest group-hover:border-white/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
