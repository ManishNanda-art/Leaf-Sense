"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#050505]/75 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* subtle leaf icon placeholder */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-leafGreen to-electricCyan" />
          <span className="font-semibold text-lg tracking-tight">Leaf Sense</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="/#overview" className="hover:text-white transition-colors">Overview</Link>
          <Link href="/technology" className={`transition-colors ${pathname === '/technology' ? 'text-leafGreen font-bold' : 'hover:text-white'}`}>Technology</Link>
          <Link href="/detection" className={`transition-colors ${pathname === '/detection' ? 'text-leafGreen font-bold' : 'hover:text-white'}`}>Detection</Link>
          <Link href="/insights" className={`transition-colors ${pathname === '/insights' ? 'text-leafGreen font-bold' : 'hover:text-white'}`}>Insights</Link>
          <Link href="/impact" className={`transition-colors ${pathname === '/impact' ? 'text-leafGreen font-bold' : 'hover:text-white'}`}>Impact</Link>
        </div>

        <a 
          href="https://leaf-sense-plum.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-md transition-all border border-white/5 hover:border-white/20"
        >
          Try Leaf Sense
        </a>
      </div>
    </motion.nav>
  );
}
