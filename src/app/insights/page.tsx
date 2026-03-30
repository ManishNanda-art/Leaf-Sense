"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, CloudRain, Network, Eye, AlertTriangle, ShieldCheck } from "lucide-react";

export default function InsightsPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const dashboardY = useTransform(scrollYProgress, [0, 0.4], [100, -50]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const dashboardRotateX = useTransform(scrollYProgress, [0, 0.4], [15, 0]);

  return (
    <main className="relative bg-deepBlack text-white min-h-[300vh] selection:bg-leafGreen selection:text-black overflow-hidden">
      {/* Background Matrix & Subtle Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-electricCyan/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-leafGreen/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Navigation back */}
        <nav className="fixed top-24 left-0 w-full p-6 lg:px-10 z-[60] pointer-events-none">
           <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-[#050505]/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl hover:shadow-[0_0_20px_rgba(0,168,107,0.3)]">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold tracking-wide uppercase text-sm">Return Home</span>
           </Link>
        </nav>

        {/* HERO */}
        <section className="pt-48 pb-32 px-6 lg:px-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-[0_0_20px_rgba(0,214,255,0.1)]">
               <span className="w-2.5 h-2.5 rounded-full bg-electricCyan animate-ping absolute" />
               <span className="w-2.5 h-2.5 rounded-full bg-electricCyan relative shadow-[0_0_10px_#00D6FF]" />
               <span className="text-sm font-semibold tracking-widest uppercase text-white/70 ml-2">Live Telemetry</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 text-white drop-shadow-2xl leading-none">
              Intelligence <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-leafGreen to-electricCyan">over intuition.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/60 max-w-3xl mx-auto mb-16 px-4">
              Stop guessing. Leaf Sense transforms billions of microscopic data points into a centralized, actionable command center for your entire operation.
            </p>
          </motion.div>

          {/* CODE-BASED DASHBOARD MOCKUP */}
          <motion.div 
            className="w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] shadow-[0_40px_100px_rgba(0,168,107,0.15)] flex flex-col overflow-hidden relative"
            style={{ y: dashboardY, scale: dashboardScale, rotateX: dashboardRotateX, transformPerspective: 1200 }}
          >
             {/* App Window Header */}
             <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-leafGreen/80" />
                <div className="mx-auto flex items-center gap-2 text-white/40 text-xs font-semibold tracking-widest uppercase">
                   <LayoutDashboard className="w-4 h-4" /> Command Center
                </div>
             </div>

             {/* App Body */}
             <div className="flex-1 flex p-4 md:p-6 gap-6 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]">
                 {/* Sidebar */}
                 <div className="hidden lg:flex flex-col gap-4 w-64">
                    <div className="h-12 bg-white/10 rounded-xl w-3/4 mb-4" />
                    <div className="h-12 bg-electricCyan/20 border-b-2 border-electricCyan rounded-xl w-full flex items-center px-4 gap-3 text-electricCyan font-bold tracking-wide shadow-[0_0_20px_rgba(0,214,255,0.1)]">
                       <Eye className="w-5 h-5" /> TELEMETRY
                    </div>
                    {/* Faux Terminal */}
                    <div className="flex-1 bg-[rgba(0,0,0,0.4)] border border-white/5 rounded-xl p-4 relative overflow-hidden flex flex-col justify-end">
                       <motion.div 
                         className="flex flex-col gap-2 font-mono text-[10px] text-electricCyan/50"
                         animate={{ y: [0, -40] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                       >
                          <div>&gt; INIT OPTICAL_SCAN</div>
                          <div>&gt; SYNC DRONE_4G</div>
                          <div>&gt; ANALYZING SECTOR_7...</div>
                          <div className="text-leafGreen">&gt; HEALTH OPTIMAL</div>
                          <div>&gt; REFRESHING DATA...</div>
                       </motion.div>
                       <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
                    </div>
                 </div>
                 
                 {/* Main Content Area */}
                 <div className="flex-1 flex flex-col gap-4 md:gap-6 relative">
                    {/* Top Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors">
                          <div className="text-white/50 text-xs font-bold uppercase mb-4 tracking-wider">Total Yield Protected</div>
                          <div className="text-4xl font-black text-white">$1.2M</div>
                       </div>
                       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors relative overflow-hidden">
                          <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full" />
                          <div className="text-white/50 text-xs font-bold uppercase mb-4 tracking-wider">Active Alerts</div>
                          <div className="text-4xl font-black text-amber-400 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"><motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>3</motion.span> <AlertTriangle className="w-7 h-7" /></div>
                       </div>
                       <div className="bg-leafGreen/10 border border-leafGreen/30 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,168,107,0.15)] relative overflow-hidden">
                          <div className="absolute right-0 top-0 w-24 h-24 bg-leafGreen/20 blur-2xl rounded-full" />
                          <div className="text-leafGreen text-xs font-bold uppercase mb-4 tracking-wider">System Status</div>
                          <div className="text-4xl font-black text-leafGreen flex items-center gap-3 drop-shadow-[0_0_10px_rgba(0,168,107,0.5)]">Optimal <ShieldCheck className="w-7 h-7" /></div>
                       </div>
                    </div>

                    {/* Fake Data Map Area */}
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[200px] border-b-4 border-b-electricCyan/20">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                       
                       {/* Radar Ring */}
                       <div className="w-48 h-48 rounded-full border border-electricCyan/30 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,214,255,0.1)]">
                           <div className="absolute inset-2 rounded-full border border-dashed border-leafGreen/20" />
                           <div className="absolute w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,214,255,0.4)_360deg)] animate-[spin_4s_linear_infinite]" />
                           <Network className="w-8 h-8 text-electricCyan relative z-10" />
                       </div>

                       {/* Faux Hotspots */}
                       <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-rose-500 animate-[ping_2s_infinite]" />
                       <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-amber-400 border border-amber-200 animate-pulse" />
                       <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-leafGreen/50 animate-pulse" />
                       
                       <div className="absolute bottom-4 left-4 bg-[#050505]/80 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-bold tracking-[0.2em] text-electricCyan uppercase border border-electricCyan/20">
                          Scanner Active
                       </div>
                    </div>
                 </div>
             </div>
          </motion.div>
        </section>

        {/* ECONOMICS / ROI SECTION */}
        <section className="py-32 px-6 lg:px-24 bg-[linear-gradient(to_bottom,transparent,rgba(5,5,5,0.8),transparent)] relative">
           <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-xl">Every leaf scanned is a dollar saved.</h2>
                  <p className="text-xl md:text-2xl font-medium text-white/60 max-w-3xl mx-auto leading-relaxed">
                    By isolating treatments exclusively to infected crop quadrants, Leaf Sense drastically restructures farm economics.
                  </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  {[
                    { val: "-40%", label: "Chemical Waste", color: "text-electricCyan", shadow: "shadow-[0_0_40px_rgba(0,214,255,0.2)]" },
                    { val: "-20%", label: "Water & Irrigation", color: "text-amber-400", shadow: "shadow-[0_0_40px_rgba(245,158,11,0.2)]" },
                    { val: "+15%", label: "Yield Protection", color: "text-leafGreen", shadow: "shadow-[0_0_40px_rgba(0,168,107,0.2)]" }
                  ].map((stat, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, scale: 0.8, y: 30 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       viewport={{ once: false }}
                       transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                       className={`relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-12 hover:bg-white/10 transition-all cursor-pointer ${stat.shadow}`}
                     >
                        <div className={`text-6xl lg:text-8xl font-black mb-6 ${stat.color} drop-shadow-[0_0_20px_currentColor] group-hover:scale-110 transition-transform duration-500`}>
                           {stat.val}
                        </div>
                        <div className="text-lg font-bold text-white tracking-widest uppercase">{stat.label}</div>
                     </motion.div>
                  ))}
              </div>
           </div>
        </section>

        {/* PREDICTIVE FORECASTING SECTION */}
        <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto overflow-visible">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Text Layer */}
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-leafGreen/20 flex items-center justify-center border border-leafGreen/30">
                       <CloudRain className="w-6 h-6 text-leafGreen" />
                    </div>
                    <span className="text-leafGreen font-bold tracking-widest uppercase text-sm">Predictive Forecasting</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
                    See the future of your field.
                 </h2>
                 <p className="text-xl text-white/70 leading-relaxed font-medium">
                    Insights aren't just looking at the past. By aggregating real-time multispectral signatures with hyper-local weather APIs and soil saturation models, Leaf Sense accurately predicts pathogen spread up to 5 days before it manifests visually.
                 </p>
              </motion.div>

              {/* Graphical Timeline */}
              <motion.div 
                className="flex-1 w-full bg-[#050505]/80 backdrop-blur-lg border border-white/10 p-10 lg:p-14 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative"
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                 {/* Internal glowing light */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(244,63,94,0.15)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2" />
                 
                 <div className="space-y-8 relative z-10">
                    {/* Timeline Event 1 */}
                    <div className="flex gap-6 items-start">
                       <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          <span className="text-white/50 font-bold tracking-wider">T-0</span>
                       </div>
                       <div className="pt-2">
                          <h4 className="text-white font-bold text-xl mb-1">Stress Signature Detected</h4>
                          <p className="text-white/60 font-medium">High humidity + microscopic variance in Sector 4G immediately flagged.</p>
                       </div>
                    </div>

                    {/* Vertical Line */}
                    <div className="w-1 h-10 bg-white/10 ml-[27px] rounded-full" />

                    {/* Timeline Event 2 */}
                    <div className="flex gap-6 items-start">
                       <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.3)] bg-amber-500/10 backdrop-blur-md relative">
                          <span className="text-amber-400 font-black tracking-wider drop-shadow-lg relative z-10">T+3</span>
                          <div className="absolute inset-0 rounded-full border border-amber-400 animate-[spin_3s_linear_infinite]" />
                       </div>
                       <div className="pt-2">
                          <h4 className="text-amber-400 font-bold text-xl mb-1 drop-shadow-sm">Fungal Prediction Warning</h4>
                          <p className="text-white/80 font-medium">Conditions optimal for Early Blight. AI recommends immediate preventative micro-spray.</p>
                       </div>
                    </div>

                    {/* Vertical Line */}
                    <div className="w-1 h-10 bg-white/10 ml-[27px] rounded-full" />

                    {/* Timeline Event 3 */}
                    <div className="flex gap-6 items-start opacity-30 cursor-not-allowed">
                       <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                          <span className="text-white/50 font-bold tracking-wider">T+5</span>
                       </div>
                       <div className="pt-2">
                          <h4 className="text-white font-bold text-xl mb-1 line-through decoration-rose-500 decoration-2">Widespread Outbreak</h4>
                          <p className="text-rose-400 font-bold text-sm tracking-wide uppercase">Averted natively by Leaf Sense.</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

      </div>
    </main>
  );
}
