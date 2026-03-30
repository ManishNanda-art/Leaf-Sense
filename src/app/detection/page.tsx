"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Fingerprint, Zap, ShieldCheck, Microscope, Search, AlertCircle, Cpu, Crosshair } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const pathogens = [
  {
    name: "Late Blight",
    latin: "Phytophthora infestans",
    threat: "Critical",
    signature: "Fluorescent variance at 680-710nm",
    description: "Rapidly spreading fungal pathogen capable of destroying entire potato and tomato crops within days of first detection.",
    color: "bg-rose-500",
  },
  {
    name: "Soybean Rust",
    latin: "Phakopsora pachyrhizi",
    threat: "High",
    signature: "Near-Infrared (NIR) absorption spike",
    description: "Aggressive foliar disease causing significant yield loss by reducing photosynthetic capacity of the plant.",
    color: "bg-amber-500",
  },
  {
    name: "Downy Mildew",
    latin: "Peronosporaceae",
    threat: "Medium",
    signature: "Red-Edge reflectance shift",
    description: "Affects a wide range of vegetable and ornamental crops, thriving in cool, moist environmental conditions.",
    color: "bg-electricCyan",
  },
];

// Pathogen Hotspots for the interactive scan
const hotspots = [
  { id: 1, x: 30, y: 40, label: "Pathogen Cluster Alpha" },
  { id: 2, x: 70, y: 30, label: "Cellular Stress Detected" },
  { id: 3, x: 50, y: 70, label: "Fungal Spore Colony" },
];

export default function DetectionPage() {
  const { scrollYProgress } = useScroll();
  const [isScanning, setIsScanning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [pathogenDensity, setPathogenDensity] = useState(0);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    // Dynamic density calculation based on proximity to nearest hotspot
    let minDistance = 1000;
    let nearestId = null;
    hotspots.forEach(h => {
        const hX = (h.x / 100) * rect.width;
        const hY = (h.y / 100) * rect.height;
        const dist = Math.sqrt(Math.pow(x - hX, 2) + Math.pow(y - hY, 2));
        if (dist < minDistance) minDistance = dist;
        if (dist < 80) nearestId = h.id;
    });

    setHoveredHotspot(nearestId);
    setPathogenDensity(Math.max(0, Math.floor(100 - (minDistance / 2))));
  };

  return (
    <main className="relative bg-[#050505] text-white min-h-[400vh] selection:bg-leafGreen selection:text-black overflow-hidden font-sans">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,168,107,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Navigation back */}
        <nav className="fixed top-24 left-0 w-full p-6 lg:px-10 z-[60] pointer-events-none flex justify-start">
           <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 text-white/80 hover:text-white transition-all group bg-[#050505]/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl hover:shadow-[0_0_20px_rgba(0,168,107,0.3)] hover:-translate-y-1">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold tracking-wide uppercase text-sm">Return Home</span>
           </Link>
        </nav>

        {/* HERO - Pathogen Index */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 relative">
          <motion.div
            style={{ opacity, scale }}
            className="flex flex-col items-center text-center max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm animate-fade-in-down">
               <Fingerprint className="w-4 h-4 text-electricCyan" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">Forensic Bio-Analysis</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-none">
              Scanning for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-leafGreen to-electricCyan">the unseen.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/50 max-w-3xl mb-24">
              Our neural networks are trained on billions of multispectral signatures, identifying pathogens at the cellular level before visible damage occurs.
            </p>
          </motion.div>

          {/* Pathogen Cards Carousel */}
          <div className="w-full max-w-7xl overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex gap-8 px-4 justify-center">
              {pathogens.map((pathogen, i) => (
                <motion.div
                  key={pathogen.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="min-w-[320px] md:min-w-[400px] bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm hover:border-leafGreen/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${pathogen.color} text-black`}>
                      Threat: {pathogen.threat}
                    </div>
                    <Microscope className="w-6 h-6 text-white/20 group-hover:text-leafGreen transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{pathogen.name}</h3>
                  <p className="text-sm font-mono text-leafGreen mb-6">{pathogen.latin}</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Optical Signature</p>
                      <p className="text-sm font-semibold">{pathogen.signature}</p>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {pathogen.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MULTISPECTRAL AUTOPSY - UPGRADED TO CURSOR LENS */}
        <section className="py-48 px-6 lg:px-24 max-w-7xl mx-auto relative overflow-visible">
           <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-leafGreen/20 flex items-center justify-center border border-leafGreen/30">
                       <Crosshair className="w-6 h-6 text-leafGreen" />
                    </div>
                    <span className="text-leafGreen font-bold tracking-widest uppercase text-sm">Active Autopsy</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
                    The Forensic <br className="hidden md:block" /> <span className="text-electricCyan">Thermal Lens.</span>
                 </h2>
                 <p className="text-xl text-white/50 leading-relaxed font-medium mb-12">
                    Reveal the invisible. Move your lens over the leaf to decode its internal multispectral signatures. Pathogens glow as heat signatures in NIR spectrums long before physical decay.
                 </p>
                 
                 {/* HUD Metrics */}
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-electricCyan/50 transition-colors">
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Infection Density</div>
                       <div className="text-3xl font-black text-electricCyan drop-shadow-[0_0_10px_rgba(0,214,255,0.3)]">{pathogenDensity}%</div>
                       <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-electricCyan shadow-[0_0_10px_#00D6FF]"
                          animate={{ width: `${pathogenDensity}%` }}
                       />
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-leafGreen/50 transition-colors">
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Confidence Matrix</div>
                       <div className="text-3xl font-black text-leafGreen drop-shadow-[0_0_10px_rgba(0,168,107,0.3)]">{pathogenDensity > 0 ? "99.8%" : "STDBY"}</div>
                    </div>
                 </div>
              </div>

              {/* UPGRADED CURSOR LENS CONTAINER */}
              <div 
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsScanning(true)}
                onMouseLeave={() => { setIsScanning(false); setPathogenDensity(0); setHoveredHotspot(null); }}
                className="flex-1 w-full aspect-square relative rounded-[4rem] overflow-hidden bg-black/50 border border-white/10 cursor-none group shadow-[0_40px_100px_rgba(0,214,255,0.05)]"
              >
                 {/* Base Image (Standard Green) */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597113366853-9a93ad3f5451?q=80&w=1200')] bg-cover bg-center transition-all duration-700" />
                 
                 {/* NIR Layer (Infected Glow) */}
                 <motion.div 
                    style={{ 
                      backgroundImage: "url('https://images.unsplash.com/photo-1597113366853-9a93ad3f5451?q=80&w=1200')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      WebkitMaskImage: `radial-gradient(circle 120px at var(--x) var(--y), black 100%, transparent 100%)`,
                      maskImage: `radial-gradient(circle 120px at var(--x) var(--y), black 100%, transparent 100%)`,
                      // Custom properties for the mask center
                      '--x': springX as any,
                      '--y': springY as any,
                    } as any}
                    className="absolute inset-0 mix-blend-screen filter hue-rotate-180 saturate-[10] contrast-[3] brightness-125 transition-opacity duration-300 pointer-events-none"
                    animate={{ opacity: isScanning ? 1 : 0 }}
                 />

                 {/* Forensic Grid lines */}
                 <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10%_10%]" />

                 {/* Hotspot Markers (Lock-on) */}
                 {hotspots.map(h => (
                    <div 
                        key={h.id}
                        className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    >
                        <motion.div 
                           className="w-full h-full border-2 border-electricCyan shadow-[0_0_10px_#00D6FF] rounded-sm"
                           initial={{ scale: 0, opacity: 0 }}
                           animate={hoveredHotspot === h.id ? { scale: [1, 1.2, 1], opacity: 1, rotate: [0, 90, 180] } : { scale: 0, opacity: 0 }}
                           transition={{ repeat: Infinity, duration: 1 }}
                        />
                        {hoveredHotspot === h.id && (
                             <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 25 }}
                                className="absolute top-0 whitespace-nowrap bg-electricCyan text-black px-2 py-1 text-[10px] font-black uppercase rounded"
                             >
                                LOCK: {h.label}
                             </motion.div>
                        )}
                    </div>
                 ))}

                 {/* The Interactive Lens HUD that follows cursor */}
                 <motion.div 
                    className="absolute pointer-events-none z-50 flex flex-col items-center gap-4 transition-opacity duration-300"
                    style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
                    animate={{ opacity: isScanning ? 1 : 0 }}
                 >
                    <div className="w-64 h-64 border-4 border-white/20 rounded-full flex items-center justify-center relative shadow-[0_0_100px_rgba(0,214,255,0.2)]">
                       <div className="absolute inset-0 rounded-full border border-electricCyan/50 animate-[spin_10s_linear_infinite]" />
                       <div className="absolute w-full h-[1px] bg-electricCyan/20" />
                       <div className="absolute h-full w-[1px] bg-electricCyan/20" />
                    </div>
                 </motion.div>

                 <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 text-right pointer-events-none">
                    <div className="text-[10px] font-bold text-electricCyan uppercase tracking-widest px-3 py-1 bg-black/80 rounded backdrop-blur-md border border-electricCyan/20">
                       Forensic Probe: Active
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* THE 500ms PIPELINE */}
        <section className="py-48 bg-white/5 border-y border-white/5 relative">
           <div className="max-w-7xl mx-auto px-6 lg:px-24">
              <div className="text-center mb-32">
                 <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Speed is the cure.</h2>
                 <p className="text-xl text-white/50 max-w-3xl mx-auto">Pathogens multiply exponentially. Our edge-compute pipeline reacts in real-time, completing the entire loop in half a second.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                 {/* Connector Line */}
                 <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 hidden md:block -translate-y-1/2" />
                 
                 {[
                    { label: "Capture", icon: Target, time: "T-0ms", desc: "Multispectral Trigger" },
                    { label: "Predict", icon: Cpu, time: "T+15ms", desc: "Neural Inference" },
                    { label: "Validate", icon: ShieldCheck, time: "T+150ms", desc: "Pathogen Confirmed" },
                    { label: "Deploy", icon: Zap, time: "T+500ms", desc: "Remidiation Active" }
                 ].map((step, i) => (
                    <motion.div 
                      key={step.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="relative z-10 bg-[#050505] border border-white/10 rounded-3xl p-8 hover:border-leafGreen/50 transition-all flex flex-col items-center text-center group"
                    >
                       <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-leafGreen/10 transition-colors">
                          <step.icon className="w-8 h-8 text-white group-hover:text-leafGreen transition-colors" />
                       </div>
                       <div className="text-leafGreen font-black text-xl mb-1 tracking-tighter">{step.time}</div>
                       <div className="text-lg font-bold mb-2">{step.label}</div>
                       <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{step.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* CONFIDENCE MATRIX */}
        <section className="py-48 px-6 lg:px-24 max-w-7xl mx-auto overflow-visible">
           <div className="bg-[#050505] border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.05)_0%,transparent_70%)] pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                  <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-10 animate-pulse" />
                  <h2 className="text-4xl md:text-6xl font-black mb-8">Zero-Waste Accuracy.</h2>
                  <p className="text-xl text-white/50 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Our platform utilizes a double-validation logic. A detection event only triggers remediation if both the raw spectral signature and the contextual AI vision model reach a 98% confidence threshold, virtually eliminating false positives and expensive chemical waste.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                     <div className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-leafGreen shadow-[0_0_10px_#00A86B]" />
                        <span className="text-sm font-bold uppercase tracking-widest text-white/70">Contextual Validation</span>
                     </div>
                     <div className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-electricCyan shadow-[0_0_10px_#00D6FF]" />
                        <span className="text-sm font-bold uppercase tracking-widest text-white/70">Spectral Matching</span>
                     </div>
                  </div>
              </motion.div>
           </div>
        </section>

      </div>
    </main>
  );
}
