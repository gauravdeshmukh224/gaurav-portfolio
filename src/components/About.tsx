import { motion } from 'motion/react';
import { Database, TrendingUp, Search, BarChart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-off-white overflow-hidden relative">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[22vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter">
          STRATEGY . INSIGHT .
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Who I Am</span>
                <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                  About<br />Me
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-off-white/60 leading-relaxed max-w-xl font-medium">
                <p>
                  I am an aspiring Data Analyst with a passion for uncovering hidden patterns and turning complex data into meaningful insights. As a fresh graduate, I bring a modern perspective and a strong foundation in statistical analysis and data visualization.
                </p>
                <p>
                  My goal is to leverage my technical skills in Python, SQL, and PowerBI to help organizations make data-driven decisions. I am a quick learner, dedicated to continuous growth and solving real-world problems through analytical thinking.
                </p>
              </div>

              <div className="pt-8 space-y-8">
                <div className="space-y-4">
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Technical Toolkit</span>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'SQL', 'Pandas', 'Power BI', 'Tableau', 'Excel', 'Statistics'].map((tool) => (
                      <span 
                        key={tool}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Abstract Data Visualization Shape */}
              <div className="absolute -inset-20 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
              
              <div className="relative z-10 w-full max-w-md aspect-square rounded-[3rem] overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                  <img 
                    src="https://i.ibb.co/5gzvmCF9/Whats-App-Image-2026-03-10-at-4-27-58-PM.jpg" 
                    alt="Gaurav Deshmukh" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Data UI Overlay */}
                  <div className="absolute top-6 left-6 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-white">Data Enthusiast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-accent/30 rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-accent/30 rounded-bl-3xl" />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-32 h-32 border border-dashed border-white/10 rounded-full pointer-events-none"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

