import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BarChart2, Database, Globe, TrendingUp, PieChart, Layers, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Market Analysis',
    category: 'Market Intelligence',
    description: 'Analyzing consumer behavior and price elasticity across 500+ global brands using Python and SQL.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    icon: TrendingUp,
    stats: { label: 'Accuracy', value: '98.5%' },
    tags: ['Python', 'Tableau', 'SQL'],
    size: 'large'
  },
  {
    id: 2,
    title: 'Financial Risk Modeling',
    category: 'Risk Management',
    description: 'Predictive modeling for credit risk assessment using machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop',
    icon: Database,
    stats: { label: 'Risk Reduction', value: '22%' },
    tags: ['R', 'Scikit-Learn'],
    size: 'small'
  },
  {
    id: 3,
    title: 'Supply Chain Optimization',
    category: 'Operations',
    description: 'Real-time logistics tracking and bottleneck identification for a global shipping firm.',
    image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?q=80&w=1000&auto=format&fit=crop',
    icon: Layers,
    stats: { label: 'Efficiency', value: '+15%' },
    tags: ['Power BI', 'Excel'],
    size: 'medium'
  },
  {
    id: 4,
    title: 'Health Data Insights',
    category: 'Healthcare',
    description: 'Visualizing patient outcomes and resource allocation during peak seasonal demand.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
    icon: PieChart,
    stats: { label: 'Data Points', value: '2M+' },
    tags: ['D3.js', 'Python'],
    size: 'medium'
  },
  {
    id: 5,
    title: 'Social Media Sentiment',
    category: 'Marketing',
    description: 'Natural Language Processing to gauge brand perception across major social platforms.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    icon: Globe,
    stats: { label: 'Sentiment', value: 'Positive' },
    tags: ['NLP', 'AWS'],
    size: 'small'
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="portfolio" ref={containerRef} className="py-32 px-6 bg-off-white relative overflow-hidden">
      {/* Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-40 left-0 w-full pointer-events-none opacity-[0.03] select-none text-center"
      >
        <h2 className="text-[25vw] font-black uppercase leading-none tracking-tighter">Analysis</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Case Studies</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Selected<br />Projects
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm space-y-6"
          >
            <p className="text-sm text-black/60 uppercase tracking-widest font-medium leading-relaxed">
              Transforming raw data into strategic narratives through advanced analytics and visualization.
            </p>
            <div className="h-px w-24 bg-accent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[400px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={`group relative rounded-[2rem] overflow-hidden bg-black border border-black/5 ${
                project.size === 'large' ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image with Parallax-like effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                    <project.icon size={24} />
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/10 text-white/70 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{project.stats.label}</span>
                      <span className="text-xl font-black text-accent">{project.stats.value}</span>
                    </div>
                    <button className="text-white/50 hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-full bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-black text-off-white text-xs font-bold uppercase tracking-[0.3em] transition-all hover:pr-16">
            <span className="relative z-10">View All Case Studies</span>
            <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowUpRight className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-500" size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

