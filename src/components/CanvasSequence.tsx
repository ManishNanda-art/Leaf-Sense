"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const { scrollYProgress } = useScroll(); // 0 to 1 based on page scroll
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameCount = 240; // Using all 240 frames for ultimate smoothness
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // Load every single high-res frame sequentially
        const frameIndex = i.toString().padStart(3, '0');
        img.src = `/exploadedvid/ezgif-frame-${frameIndex}.jpg`;

        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
                // Initial draw once all are loaded
                if (canvasRef.current && loadedImages[0]) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        drawCenter(ctx, loadedImages[0], canvasRef.current);
                    }
                }
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update canvas on scroll dynamically using requestAnimationFrame for butter-smooth fps
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0 || !canvasRef.current) return;
    
    if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
        // Map scroll progress to a frame index (0 to 119)
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(latest * frameCount)
        );
        
        const img = images[frameIndex];
        if (img && img.complete && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                drawCenter(ctx, img, canvasRef.current);
            }
        }
    });
  });

  // Handle window resize & high DPI (Retina) configurations
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        const dpr = window.devicePixelRatio || 1;
        // Scale internal canvas resolution by devicePixelRatio to eliminate blurriness
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // Redraw current frame
        const latestInfo = scrollYProgress.get();
        const frameIndex = Math.min(frameCount - 1, Math.floor(latestInfo * frameCount));
        const img = images[frameIndex];
        const ctx = canvasRef.current.getContext("2d");
        if (ctx && img && img.complete) {
             drawCenter(ctx, img, canvasRef.current);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once to set initial sizes
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Helper to draw image centered and cover logic
  const drawCenter = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
        // Clear canvas with deepBlack
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio to cover the screen entirely
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio); 
        
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        // By setting image smoothing to true, we guarantee high fidelity
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  return (
    <div className="sticky top-0 h-screen w-full bg-deepBlack overflow-hidden z-0">
        {/* w-full h-full object-cover handles the optical sizing while retina resolution handles internal sharpness */}
        <canvas ref={canvasRef} className="w-full h-full object-cover" style={{ width: '100vw', height: '100vh' }} />
        {/* Stronger blending overlays to drastically improve UI visibility and legibility */}
        <div className="absolute inset-0 bg-deepBlack/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-100 pointer-events-none" />
    </div>
  );
}
