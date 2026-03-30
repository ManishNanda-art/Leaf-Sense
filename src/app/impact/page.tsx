"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, Shield, Droplets, ArrowRight, Target, Leaf } from "lucide-react";

export default function ImpactPage() {
  const { scrollYProgress } = useScroll();
  
  const globeY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <main className="relative bg-deepBlack text-white min-h-[400vh] selection:bg-leafGreen selection:text-black overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top,#0a0a0a_0%,#000000_100%)]" />

      {/* Code-Based Rotating Globe Grid (Hero Background) */}
      <motion.div 
         className="fixed top-0 left-0 w-full h-[120vh] pointer-events-none flex items-center justify-center z-0 perspective-[1000px]"
         style={{ y: globeY, opacity: globeOpacity }}
      >
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] md:w-[100vw] md:h-[100vw] rounded-full border border-white/5 opacity-50 flex items-center justify-center [transform-style:preserve-3d] animate-[spin_60s_linear_infinite]">
             {/* Latitude Lines */}
             {[...Array(6)].map((_, i) => (
                <div key={`lat-${i}`} className="absolute w-full h-full rounded-full border border-electricCyan/10 drop-shadow-[0_0_15px_rgba(0,214,255,0.2)]" style={{ transform: `rotateX(${i * 30}deg)` }} />
             ))}
             {/* Longitude Lines */}
             {[...Array(6)].map((_, i) => (
                <div key={`lon-${i}`} className="absolute w-full h-full rounded-full border border-leafGreen/10 drop-shadow-[0_0_15px_rgba(0,168,107,0.2)]" style={{ transform: `rotateY(${i * 30}deg)` }} />
             ))}
             {/* Core Glow */}
             <div className="absolute w-1/3 h-1/3 bg-electricCyan/5 rounded-full blur-[100px]" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepBlack/80 to-deepBlack" />
      </motion.div>

      <div className="relative z-10 w-full">
        {/* Navigation back */}
        <nav className="fixed top-24 left-0 w-full p-6 lg:px-10 z-[60] pointer-events-none">
           <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-[#050505]/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl hover:shadow-[0_0_20px_rgba(0,168,107,0.3)]">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold tracking-wide uppercase text-sm">Return Home</span>
           </Link>
        </nav>

        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 bg-[#050505]/50 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,168,107,0.2)]">
               <Globe className="w-8 h-8 text-white animate-[pulse_4s_ease-in-out_infinite]" />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-black tracking-tighter mb-8 text-white drop-shadow-2xl max-w-5xl leading-[1.1]">
              Feeding the future <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-leafGreen to-electricCyan">without destroying it.</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium text-white/60 max-w-3xl mx-auto drop-shadow-md">
              A paradigm shift from reactive chemical flooding to proactive, hyper-local precision.
            </p>
          </motion.div>
        </section>

        {/* THE CHEMICAL COLLAPSE (Dual Scroll) */}
        <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto relative">
           <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-electricCyan mb-16 text-center">The Environmental Imperative</h2>
           
           <div className="flex flex-col lg:flex-row gap-16 item-start">
              
              {/* Sticky Left Column */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-48 h-fit self-start">
                 <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                    The end of <span className="text-rose-500">blind saturation.</span>
                 </h3>
                 <p className="text-lg text-white/60 mb-8 leading-relaxed font-medium">
                    Traditional commercial agriculture relies on preventative blanket-spraying. Treating entire fields for a localized fungus inevitably poisons nearby groundwater, destabilizes topsoil, and wastes hundreds of thousands of dollars.
                 </p>
                 <div className="flex items-center gap-4 text-white/80 font-bold bg-white/5 p-4 rounded-xl border border-white/10">
                    <Target className="w-6 h-6 text-leafGreen" />
                    <span>Leaf Sense targets exactly 1 plant.</span>
                 </div>
              </div>

              {/* Scrolling Right Column (Cards) */}
              <div className="w-full lg:w-2/3 flex flex-col gap-8">
                 <motion.div 
                   className="bg-[#050505]/80 backdrop-blur-lg border border-rose-500/20 rounded-[2rem] p-10 shadow-[0_30px_60px_rgba(244,63,94,0.1)] hover:border-rose-500/50 transition-colors"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-10%" }}
                   transition={{ duration: 0.6 }}
                 >
                     <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mb-6 text-rose-500">
                         <Droplets className="w-6 h-6" />
                     </div>
                     <h4 className="text-2xl font-bold text-white mb-4">The Old Paradigm</h4>
                     <p className="text-white/60 text-lg leading-relaxed">
                       A farmer notices yellowing leaves in one corner of a 1,000-acre cornfield. Fearing a massive outbreak of Blight, the entire 1,000 acres is saturated with chemical fungicides using crop dusters. 95% of the chemicals land on healthy plants or soil.
                     </p>
                 </motion.div>

                 <motion.div 
                   className="bg-[#050505]/80 backdrop-blur-lg border border-leafGreen/30 rounded-[2rem] p-10 shadow-[0_30px_60px_rgba(0,168,107,0.1)] relative overflow-hidden group"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-10%" }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                 >
                     <div className="absolute inset-0 bg-gradient-to-br from-leafGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="w-12 h-12 rounded-full bg-leafGreen/20 flex items-center justify-center mb-6 text-leafGreen relative z-10">
                         <Shield className="w-6 h-6" />
                     </div>
                     <h4 className="text-2xl font-bold text-white mb-4 relative z-10">The Leaf Sense Paradigm</h4>
                     <p className="text-white/60 text-lg leading-relaxed relative z-10">
                       Leaf Sense AI flags a microscopic fluorescent variance in 3 specific plants, 5 days before they turn yellow. The platform dispatches an automated micro-spray drone specifically to coordinates <code className="font-mono text-electricCyan text-sm bg-white/5 px-2 py-1 rounded">34.12, -118.45</code>. The outbreak dies instantly. The groundwater remains pure.
                     </p>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* FOOD SECURITY (Massive Stats) */}
        <section className="py-32 bg-[#050505]/50 border-y border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-electricCyan/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
           <div className="max-w-7xl mx-auto px-6 lg:px-24">
               <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Global Food Security</h2>
                  <p className="text-xl text-white/60 max-w-3xl leading-relaxed">By preventing pathogen spread before the first physical symptoms even manifest, we stabilize global yields against an increasingly volatile climate.</p>
               </motion.div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                     <div className="text-7xl lg:text-[7rem] font-black text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.3)] tracking-tighter mb-4">-30%</div>
                     <div className="text-2xl font-bold text-white mb-2">Current Global Crop Loss</div>
                     <p className="text-white/50 text-lg font-medium">Almost a third of all food grown is destroyed by disease and pests before harvest under traditional systems.</p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <div className="text-7xl lg:text-[7rem] font-black text-leafGreen drop-shadow-[0_0_20px_rgba(0,168,107,0.3)] tracking-tighter mb-4">+600M</div>
                     <div className="text-2xl font-bold text-white mb-2">Lives Supported</div>
                     <p className="text-white/50 text-lg font-medium">Recapturing that lost 30% yield provides enough stable sustenance to feed over 600 million people annually.</p>
                  </motion.div>
               </div>
           </div>
        </section>

        {/* FINAL CTA (The Imperative) */}
        <section className="min-h-[70vh] flex items-center justify-center text-center px-6 py-32 relative">
           <div className="absolute inset-0 bg-[#050505]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.1)_0%,transparent_60%)]" />
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-leafGreen/50 to-transparent shadow-[0_0_20px_#00A86B]" />

           <motion.div 
             className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <Leaf className="w-16 h-16 text-leafGreen mb-8 drop-shadow-[0_0_20px_rgba(0,168,107,0.5)]" />
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
                The intelligence <br/>for a better harvest.
              </h2>
              <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl font-medium">
                Whether you operate a sprawling commercial mega-farm or build agricultural drone hardware, the Leaf Sense network is ready for deployment.
              </p>
              
              <a 
                href="https://deepaksaimohapatra.github.io/Leaf-Sense/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-white text-deepBlack px-10 py-5 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-white via-[#e2e2e2] to-white group-hover:scale-x-110 transition-transform duration-500" />
                 <span className="relative z-10 flex items-center gap-3">
                    Deploy Leaf Sense <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </span>
              </a>
           </motion.div>
        </section>

      </div>
    </main>
  );
}
