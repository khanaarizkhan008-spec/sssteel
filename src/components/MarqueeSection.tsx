import React from 'react';
import { BrandLogo } from './ui/BrandLogos';

const AUTHORIZED_BRANDS = [
  "TATA ASTRUM", "JSW STEEL", "SAIL", "AMMAN-TRY", "APL APOLLO", "JINDAL PANTHER", "RINL VIZAG"
];

const CORE_MATERIALS = [
  "HR & CR SHEETS", "ERW STEEL PIPES", "PREMIUM CEMENT", "HIGH-STRENGTH TMT BARS", "STRUCTURAL BEAMS", "CHEQUERED PLATES", "GALVANIZED COILS"
];

const MarqueeSection = () => {
  return (
    <section className="relative w-full py-20 bg-slate-100/70 overflow-hidden border-t border-b border-slate-200">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-slate-100/50 to-slate-100 pointer-events-none" />

      {/* Marquee Container with edge fading */}
      <div className="relative w-full flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Top Marquee - Brands with Original Logos */}
        <div className="group relative flex overflow-hidden w-full py-2">
          <div className="flex w-max items-center gap-6 animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS].map((brand, idx) => (
              <div 
                key={`brand-${idx}`}
                className="flex-shrink-0 mx-2 transform hover:scale-105 transition-transform duration-300"
              >
                <BrandLogo name={brand} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee - Core Materials */}
        <div className="group relative flex overflow-hidden w-full">
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...CORE_MATERIALS, ...CORE_MATERIALS, ...CORE_MATERIALS, ...CORE_MATERIALS].map((material, idx) => (
              <div 
                key={`mat-${idx}`}
                className="flex items-center justify-center mx-4 px-8 py-3.5 bg-navy-900/5 backdrop-blur-sm border border-navy-900/10 rounded-2xl hover:border-navy-900/30 transition-all duration-300 cursor-default shadow-sm"
              >
                <span className="font-display font-bold text-lg md:text-xl text-navy-900/80 hover:text-navy-900 transition-colors duration-300 tracking-widest whitespace-nowrap uppercase">
                  {material}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarqueeSection;
