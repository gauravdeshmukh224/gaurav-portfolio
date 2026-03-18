import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-off-white pt-32 pb-12 px-6 relative overflow-hidden border-t border-black/5">
      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.02] select-none text-center">
        <h2 className="text-[22vw] font-black uppercase leading-[0.7] tracking-tighter">
          Insights
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-accent">
                <Terminal size={20} />
              </div>
              <h3 className="text-3xl font-black tracking-tighter uppercase">
                GD<span className="text-accent">.</span>Analytics
              </h3>
            </div>
            <p className="max-w-md text-base text-black/60 leading-relaxed font-medium">
              Turning complex datasets into actionable strategic narratives. Specializing in predictive modeling, data visualization, and business intelligence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:gouravdeshmukh207@gmail.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-off-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent">Navigation</span>
              <ul className="space-y-4">
                {['Home', 'About', 'Projects', 'Skills & Tools', 'Contact'].map(item => (
                  <li key={item}>
                    <a 
                      href={`#${item === 'Projects' ? 'portfolio' : item === 'Skills & Tools' ? 'skills' : item.toLowerCase()}`} 
                      className="group flex items-center gap-2 text-sm font-bold hover:text-accent transition-colors uppercase tracking-tighter"
                    >
                      {item}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent">Expertise</span>
              <ul className="space-y-4">
                {['Data Analysis', 'Visualization', 'Machine Learning', 'Consulting'].map(item => (
                  <li key={item} className="text-sm font-bold text-black/40 uppercase tracking-tighter">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent">Newsletter</span>
              <p className="text-xs text-black/50 leading-relaxed mb-4">
                Get the latest insights on data trends and analytics.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-black/5 border-b border-black/10 py-3 px-1 text-xs focus:outline-none focus:border-accent transition-colors"
                />
                <button className="absolute right-0 bottom-3 text-accent hover:text-black transition-colors">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
            <span>© {currentYear} Gaurav Deshmukh.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            System Status: Optimal
          </div>
        </div>
      </div>
    </footer>
  );
}

