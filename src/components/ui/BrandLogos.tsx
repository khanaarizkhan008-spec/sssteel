import React from 'react'

interface BrandLogoProps {
  name: string
  className?: string
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ name, className = "h-9 md:h-12 w-auto" }) => {
  const cleanName = name.toUpperCase()

  if (cleanName.includes('TATA')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#00529b] transition-all duration-300 ${className}`}>
        {/* TATA Blue Oval Emblem */}
        <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="46" ry="46" fill="#00529b" />
          <path d="M25 35 H75 V44 H54 V78 H46 V44 H25 Z" fill="#ffffff" />
          <path d="M32 44 H68 V50 H32 Z" fill="#00529b" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-lg md:text-xl text-[#00529b] tracking-wider leading-none">TATA</span>
          <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] leading-none mt-1">STEEL ASTRUM</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('JSW')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#e31b23] transition-all duration-300 ${className}`}>
        {/* JSW Dynamic Red Wing + Navy Text */}
        <svg className="h-7 w-9 flex-shrink-0" viewBox="0 0 120 80" fill="none">
          <path d="M10 60 C 30 20, 70 10, 110 15 C 80 35, 50 55, 10 60 Z" fill="#e31b23" />
          <path d="M25 45 C 45 25, 80 20, 115 25 C 90 40, 65 50, 25 45 Z" fill="#003366" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-xl md:text-2xl text-[#003366] tracking-tighter leading-none">JSW</span>
          <span className="text-[10px] font-bold text-[#e31b23] tracking-[0.25em] leading-none mt-0.5">STEEL</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('SAIL')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#004b87] transition-all duration-300 ${className}`}>
        {/* SAIL Emblem */}
        <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#004b87" />
          <path d="M20 75 L50 25 L80 75 H62 L50 50 L38 75 Z" fill="#ffffff" />
          <circle cx="50" cy="35" r="7" fill="#ffffff" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-xl md:text-2xl text-[#004b87] tracking-widest leading-none">SAIL</span>
          <span className="text-[9px] font-bold text-slate-500 tracking-wider leading-none mt-1">STEEL AUTHORITY</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('AMMAN')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#1b4d3e] transition-all duration-300 ${className}`}>
        {/* AMMAN-TRY Shield */}
        <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 100 100" fill="none">
          <path d="M50 5 L90 25 V60 C90 80 50 95 50 95 C50 95 10 80 10 60 V25 Z" fill="#1b4d3e" stroke="#d32f2f" strokeWidth="4" />
          <path d="M30 45 L50 30 L70 45 L50 70 Z" fill="#ffb703" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-lg md:text-xl text-[#d32f2f] tracking-tight leading-none">AMMAN-TRY</span>
          <span className="text-[9px] font-bold text-[#1b4d3e] tracking-widest leading-none mt-1">500 GUARD TMT</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('APL') || cleanName.includes('APOLLO')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#c8102e] transition-all duration-300 ${className}`}>
        {/* APL APOLLO */}
        <svg className="h-7 w-8 flex-shrink-0" viewBox="0 0 100 80" fill="none">
          <path d="M10 70 L50 10 L90 70 H68 L50 38 L32 70 Z" fill="#c8102e" />
          <circle cx="50" cy="55" r="10" fill="#0c2340" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-lg md:text-xl text-[#0c2340] tracking-wider leading-none">APL APOLLO</span>
          <span className="text-[9px] font-bold text-[#c8102e] tracking-widest leading-none mt-1">STEEL PIPES</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('JINDAL')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#00502b] transition-all duration-300 ${className}`}>
        {/* JINDAL PANTHER */}
        <svg className="h-7 w-8 flex-shrink-0" viewBox="0 0 100 80" fill="none">
          <rect width="100" height="80" rx="12" fill="#002b49" />
          <path d="M20 20 L80 20 L50 65 Z" fill="#00502b" />
          <path d="M35 30 L65 30 L50 52 Z" fill="#ffb703" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-lg md:text-xl text-[#002b49] tracking-tight leading-none">JINDAL</span>
          <span className="text-[9px] font-bold text-[#00502b] tracking-[0.2em] leading-none mt-1">PANTHER TMT</span>
        </div>
      </div>
    )
  }

  if (cleanName.includes('RINL') || cleanName.includes('VIZAG')) {
    return (
      <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-[#e65100] transition-all duration-300 ${className}`}>
        {/* VIZAG STEEL */}
        <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#0c3260" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="#e65100" strokeWidth="10" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-black text-lg md:text-xl text-[#0c3260] tracking-wider leading-none">VIZAG</span>
          <span className="text-[9px] font-bold text-[#e65100] tracking-[0.2em] leading-none mt-1">RINL STEEL</span>
        </div>
      </div>
    )
  }

  // Fallback brand badge
  return (
    <div className={`flex items-center gap-3 bg-white/90 border border-slate-200 shadow-sm px-6 py-3.5 rounded-2xl hover:border-molten-500 transition-all duration-300 ${className}`}>
      <span className="font-display font-bold text-lg md:text-xl text-navy-900 tracking-wider uppercase">
        {name}
      </span>
    </div>
  )
}

export default BrandLogo
