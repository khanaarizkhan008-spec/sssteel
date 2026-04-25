"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Info, ShoppingBag, Award, Mail, Menu } from "lucide-react";

const FloatingNav = () => {
  const [active, setActive] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const items = [
    { id: 0, icon: <Home size={20} />, label: "Home", href: "#home" },
    { id: 1, icon: <Info size={20} />, label: "About", href: "#about" },
    { id: 2, icon: <ShoppingBag size={20} />, label: "Products", href: "#products" },
    { id: 3, icon: <Award size={20} />, label: "Quality", href: "#quality" },
    { id: 4, icon: <Mail size={20} />, label: "Contact", href: "#contact" },
  ];

  // Update indicator position when active changes or resize
  useEffect(() => {
    const updateIndicator = () => {
      if (btnRefs.current[active] && containerRef.current) {
        const btn = btnRefs.current[active];
        const container = containerRef.current;
        if (!btn) return;
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicatorStyle({
          width: btnRect.width,
          left: btnRect.left - containerRect.left,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 pointer-events-none md:hidden">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between bg-midnight-950/80 backdrop-blur-xl shadow-2xl rounded-2xl px-1 py-1 border border-white/5 pointer-events-auto"
      >
        {items.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            ref={(el) => {
              if (el) {
                // @ts-ignore
                btnRefs.current[index] = el;
              }
            }}
            onClick={() => setActive(index)}
            className="relative flex flex-col items-center justify-center flex-1 px-2 py-3 text-[10px] font-bold uppercase tracking-tighter transition-colors duration-300 no-underline"
            style={{ color: active === index ? '#FF4500' : 'rgba(255, 255, 255, 0.4)' }}
          >
            <div className="z-10 mb-1">{item.icon}</div>
            <span className="z-10">{item.label}</span>
          </a>
        ))}

        {/* Sliding Active Indicator */}
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-1 bottom-1 rounded-xl bg-molten-500/10 border border-molten-500/20"
        />
      </div>
    </div>
  );
};

export default FloatingNav;
