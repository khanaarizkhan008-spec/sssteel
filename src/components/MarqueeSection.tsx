import React from 'react';

const AUTHORIZED_BRANDS = [
  "TATA ASTRUM", "JSW STEEL", "SAIL", "AMMAN-TRY '500 GUARD'", "APL APOLLO", "JINDAL PANTHER", "RINL VIZAG"
];

const CORE_MATERIALS = [
  "HR & CR SHEETS", "ERW STEEL PIPES", "PREMIUM CEMENT", "HIGH-STRENGTH TMT BARS", "STRUCTURAL BEAMS", "CHEQUERED PLATES", "GALVANIZED COILS"
];

const MarqueeSection = () => {
  return (
    <section className="relative w-full py-24 bg-midnight-950 overflow-hidden border-t border-b border-white/5">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-midnight-800/20 via-midnight-950 to-midnight-950 pointer-events-none" />

      {/* Marquee Container with edge fading */}
      <div className="relative w-full flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Top Marquee - Brands (Right to Left) */}
        <div className="group relative flex overflow-hidden w-full">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS].map((brand, idx) => (
              <div 
                key={`brand-${idx}`}
                className="flex items-center justify-center mx-4 px-8 py-4 bg-midnight-900/40 backdrop-blur-sm border border-white/5 rounded-sm hover:border-molten-500/50 hover:bg-molten-500/5 transition-all duration-300 cursor-default shadow-lg hover:shadow-molten"
              >
                <span className="font-display font-bold text-xl md:text-2xl text-molten-500 tracking-widest whitespace-nowrap uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee - Materials (Left to Right) */}
        <div className="group relative flex overflow-hidden w-full">
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...CORE_MATERIALS, ...CORE_MATERIALS, ...CORE_MATERIALS, ...CORE_MATERIALS].map((material, idx) => (
              <div 
                key={`mat-${idx}`}
                className="flex items-center justify-center mx-4 px-8 py-4 bg-midnight-900/40 backdrop-blur-sm border border-white/5 rounded-sm hover:border-white/20 transition-all duration-300 cursor-default shadow-lg hover:shadow-steel"
              >
                <span className="font-display font-bold text-xl md:text-2xl text-white/50 group-hover:text-white/60 hover:!text-white transition-colors duration-300 tracking-widest whitespace-nowrap uppercase">
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
