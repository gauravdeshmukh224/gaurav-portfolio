import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-off-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available for new projects
              </div>
              <h2 className="text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Let's talk<br />
                <span className="text-accent">Data & Strategy</span>
              </h2>
              <p className="text-lg text-off-white/50 max-w-md leading-relaxed">
                Whether you're looking to build a predictive model, design a dashboard, or need a deep dive into your business metrics, I'm here to help.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent">
                  <Mail size={18} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Email</span>
                </div>
                <a href="mailto:gouravdeshmukh207@gmail.com" className="text-lg font-bold hover:text-accent transition-colors block">
                  gouravdeshmukh207@gmail.com
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent">
                  <MapPin size={18} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Location</span>
                </div>
                <span className="text-lg font-bold block">Pune, India</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-white/10"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-6">Connect on Social</span>
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: MessageSquare, href: '#', label: 'Discord' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md border border-white/10 relative">
              <div className="absolute top-0 right-12 w-px h-24 bg-gradient-to-b from-accent to-transparent" />
              
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-white/10 py-4 px-1 focus:outline-none focus:border-accent transition-colors text-lg placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-transparent border-b border-white/10 py-4 px-1 focus:outline-none focus:border-accent transition-colors text-lg placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent ml-1">Project Type</label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['Data Analysis', 'Visualization', 'Machine Learning', 'Consulting'].map((type) => (
                      <button 
                        key={type}
                        type="button"
                        className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your data challenges..."
                    className="w-full bg-transparent border-b border-white/10 py-4 px-1 focus:outline-none focus:border-accent transition-colors text-lg resize-none placeholder:text-white/10"
                  />
                </div>
                
                <button className="group relative w-full py-6 bg-accent text-black rounded-2xl font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,153,0.3)]">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Inquiry
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

