"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function ScrollOverlays() {
  const { scrollYProgress } = useScroll();

  // 1. HERO (0–15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // 2. BIOLOGICAL (15–40%)
  const bioOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const bioY = useTransform(scrollYProgress, [0.15, 0.2], [50, 0]);

  // 3. AI DETECTION (40–65%)
  const aiOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const aiY = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);

  // 4. INSIGHTS (65–85%)
  const insightsOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);

  // 5. FINAL (85-100%)
  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.85, 0.95], [0.9, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center p-6" style={{ zIndex: 10 }}>
        
        {/* HERO SECTION */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ opacity: heroOpacity, y: heroY }}
        >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Leaf Sense
            </h1>
            <p className="text-xl md:text-3xl font-medium text-white/90 mb-4 tracking-tight shadow-black drop-shadow-md">
              See what plants cannot say.
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto shadow-black drop-shadow-md">
              Advanced optical analysis for healthier crops and a smarter future.
            </p>
        </motion.div>

        {/* BIOLOGICAL BREAKDOWN */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
            style={{ opacity: bioOpacity, y: bioY }}
        >
            <div className="max-w-md bg-[#050505]/85 backdrop-blur-3xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-leafGreen drop-shadow-md">
                  Engineered to understand nature.
                </h2>
                <ul className="space-y-4 text-white font-medium">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-softLime mt-2" />
                        <p>Analyzes microscopic patterns invisible to the human eye.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-softLime mt-2" />
                        <p>Understands plant structure at multiple biological levels.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-softLime mt-2" />
                        <p>Built for precision, designed for real-world farming.</p>
                    </li>
                </ul>
            </div>
        </motion.div>

        {/* AI DETECTION EFFECT */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
            style={{ opacity: aiOpacity, y: aiY }}
        >
            <div className="max-w-md bg-[#050505]/85 backdrop-blur-3xl p-8 rounded-3xl border border-electricCyan/40 shadow-[0_0_50px_rgba(0,214,255,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-electricCyan animate-pulse shadow-[0_0_10px_#00D6FF]" />
                    <span className="text-electricCyan font-bold tracking-widest text-sm uppercase">Live Network</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
                  Precision that detects before damage spreads.
                </h2>
                <ul className="space-y-4 text-white/95 font-medium">
                    <li className="border-l-2 border-white/10 pl-4 py-1 hover:border-electricCyan transition-colors">
                        Deep learning models trained on thousands of plant diseases.
                    </li>
                    <li className="border-l-2 border-white/10 pl-4 py-1 hover:border-electricCyan transition-colors">
                        Real-time detection with high accuracy.
                    </li>
                    <li className="border-l-2 border-white/10 pl-4 py-1 hover:border-electricCyan transition-colors">
                        Instant insights, anywhere.
                    </li>
                </ul>
            </div>
        </motion.div>

        {/* INSIGHTS */}
        <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center pt-32 px-4"
            style={{ opacity: insightsOpacity }}
        >
            <div className="text-center mb-16 bg-[#050505]/60 backdrop-blur-xl px-10 py-5 rounded-full border border-white/5 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">From detection to decision.</h2>
                <p className="text-white/70">Protect yield. Reduce loss. Improve outcomes.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative">
               <div className="bg-[#050505]/85 backdrop-blur-3xl border border-rose-500/50 p-8 rounded-3xl md:-translate-y-8 shadow-[0_15px_60px_rgba(244,63,94,0.25)]">
                   <div className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-2">Detected</div>
                   <div className="text-2xl font-bold text-white mb-3">Fungal Infection</div>
                   <p className="text-white/80 text-sm leading-relaxed font-medium">Actionable insights tailored to each plant's specific needs and conditions.</p>
               </div>
               
               <div className="bg-[#050505]/85 backdrop-blur-3xl border border-amber-500/50 p-8 rounded-3xl md:translate-y-8 shadow-[0_15px_60px_rgba(245,158,11,0.25)]">
                   <div className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-2">Warning</div>
                   <div className="text-2xl font-bold text-white mb-3">Early Blight</div>
                   <p className="text-white/80 text-sm leading-relaxed font-medium">Treatment recommendations powered by robust predictive modeling in real time.</p>
               </div>

               <div className="bg-[#050505]/85 backdrop-blur-3xl border border-leafGreen/50 p-8 rounded-3xl md:-translate-y-12 shadow-[0_15px_60px_rgba(0,168,107,0.25)]">
                   <div className="text-leafGreen text-sm font-bold tracking-wider uppercase mb-2">Observation</div>
                   <div className="text-2xl font-bold text-white mb-3">Nutrient Deficiency</div>
                   <p className="text-white/80 text-sm leading-relaxed font-medium">Optimize fertilizer distribution with extreme precision mapping.</p>
               </div>
            </div>
        </motion.div>

        {/* FINAL STATE */}
        <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10"
            style={{ opacity: finalOpacity, scale: finalScale }}
        >
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              Smarter farming starts here.
             </h2>
             <p className="text-xl md:text-3xl text-leafGreen font-bold mb-10 tracking-tight drop-shadow-md">
              Leaf Sense. Intelligence for every leaf.
             </p>
             <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
                 <a 
                   href="https://deepaksaimohapatra.github.io/Leaf-Sense/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-white text-deepBlack hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                 >
                   Try Leaf Sense
                 </a>
                 <Link href="/technology" className="bg-[#050505]/50 text-white hover:bg-white/10 border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-md">
                     View Technology
                 </Link>
             </div>
        </motion.div>

    </div>
  );
}
