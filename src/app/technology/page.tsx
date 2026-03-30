"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cpu, Activity, Zap } from "lucide-react";
import Image from "next/image";

export default function TechnologyPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax background scale & opacity
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.1]);

  return (
    <main className="relative bg-deepBlack text-white min-h-[300vh] selection:bg-leafGreen selection:text-black">
      {/* Background Image Container */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ scale: bgScale, opacity: bgOpacity, willChange: "transform, opacity" }}
      >
        <Image 
          src="/tech-bg.png"
          alt="Plant Analytics Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Soft radial fade to naturally blend the image edges onto deepBlack */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505] opacity-50" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10">
        
        {/* Navigation back */}
        <nav className="fixed top-24 left-0 w-full p-6 lg:px-10 z-[60] pointer-events-none">
           <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-[#050505]/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl hover:shadow-[0_0_20px_rgba(0,168,107,0.3)]">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold tracking-wide uppercase text-sm">Return Home</span>
           </Link>
        </nav>

        {/* HERO SECTION */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             <div className="w-16 h-16 rounded-full border border-white/10 bg-[#050505]/50 backdrop-blur-md flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,214,255,0.2)]">
                <Cpu className="w-8 h-8 text-electricCyan animate-pulse" />
             </div>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
               The engine inside.
             </h1>
             <p className="text-xl md:text-3xl font-medium text-white/80 max-w-2xl mx-auto drop-shadow-md">
               Unprecedented processing power mapped directly to botanical biology.
             </p>
          </motion.div>
        </section>

        {/* STATS & METRICS SECTION */}
        <section className="min-h-screen py-32 px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
             
             {/* Left Text */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, margin: "-20%" }}
               transition={{ duration: 0.5, ease: "easeOut" }}
             >
                <div className="text-leafGreen font-bold tracking-widest text-sm uppercase mb-4">The Core Model</div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 drop-shadow-lg">
                   Billion-parameter botanical accuracy.
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-medium mb-8">
                   Rather than relying purely on RGB cameras, Leaf Sense’s core model reads multispectral fluorescence, piercing the cellular wall to detect microscopic stress indicators up to a week before physical symptoms appear.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div>
                       <div className="text-5xl font-black text-white mb-2 shadow-black drop-shadow-lg">99.8%</div>
                       <div className="text-sm font-semibold text-white/50 uppercase tracking-widest">Classification Rate</div>
                   </div>
                   <div>
                       <div className="text-5xl font-black text-electricCyan mb-2 shadow-black drop-shadow-lg">&lt;150ms</div>
                       <div className="text-sm font-semibold text-white/50 uppercase tracking-widest">Inference Speed</div>
                   </div>
                </div>
             </motion.div>

             {/* Right Graphic UI */}
             <motion.div 
               className="relative aspect-square rounded-[3rem] border border-white/5 bg-[#050505]/80 backdrop-blur-md flex items-center justify-center p-12 shadow-[0_0_50px_rgba(0,168,107,0.1)] overflow-hidden"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: false }}
               transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
             >
                {/* Simulated Neural Network Glow */}
                <div className="absolute inset-0 rounded-[3rem] border border-electricCyan/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-dashed border-leafGreen/30 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md">
                   <div className="w-full h-full rounded-full bg-gradient-to-tr from-leafGreen/40 to-electricCyan/40 blur-3xl animate-pulse" />
                </div>
                
                <Activity className="w-20 h-20 text-white relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
             </motion.div>
          </div>
        </section>

        {/* EDGE DEPLOYMENT SECTION */}
        <section className="py-32 px-6 lg:px-24">
           <motion.div 
             className="max-w-5xl mx-auto bg-[#050505]/85 backdrop-blur-lg border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-2xl overflow-hidden relative"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, margin: "-10%" }}
             transition={{ duration: 0.5, ease: "easeOut" }}
           >
               {/* Accent Glow inside card */}
               <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] bg-[radial-gradient(circle,rgba(0,214,255,0.08)_0%,transparent_70%)] pointer-events-none" />

               <div className="flex items-center gap-4 mb-8">
                   <Zap className="w-8 h-8 text-amber-400 drop-shadow-[0_0_15px_#FBBF24]" />
                   <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Deploy anywhere. Instantly.</h3>
               </div>
               
               <p className="text-xl md:text-2xl text-white/70 font-medium mb-16 max-w-2xl leading-relaxed">
                   Built for the field, not just the lab. The Leaf Sense runtime is optimized heavily to run directly on low-power edge devices, providing real-time oversight without requiring server connectivity.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                   {['Drones & Aerial', 'Greenhouse Cameras', 'Mobile iOS/Android'].map((title, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
                           <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white font-bold group-hover:bg-electricCyan group-hover:text-deepBlack transition-colors">{i+1}</div>
                           <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
                           <p className="text-white/60 text-sm font-medium">Native integration capabilities designed for low-latency diagnostic streams directly at the plant level.</p>
                       </div>
                   ))}
               </div>
           </motion.div>
        </section>

      </div>
    </main>
  );
}
