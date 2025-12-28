import React from 'react';

const AbstractWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0B0D12]">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#0D21A1]/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#0D21A1]/10 blur-[100px]" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D21A1" stopOpacity="0" />
            <stop offset="50%" stopColor="#0D21A1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0D21A1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3ADF" stopOpacity="0" />
            <stop offset="50%" stopColor="#1E3ADF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1E3ADF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F7F8FC" stopOpacity="0" />
            <stop offset="50%" stopColor="#F7F8FC" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F7F8FC" stopOpacity="0" />
          </linearGradient>
          
          <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>

        {/* Background Waves (Blurry & Faint) */}
        <g filter="url(#blur-filter)">
          <path
            d="M-100 600 Q300 400 700 600 T1500 600"
            fill="none"
            stroke="url(#wave-gradient-2)"
            strokeWidth="2"
            className="animate-wave-slow"
          />
          <path
            d="M-100 550 Q400 350 800 550 T1500 550"
            fill="none"
            stroke="url(#wave-gradient-2)"
            strokeWidth="1.5"
            className="animate-wave-reverse"
          />
        </g>

        {/* Middle Waves */}
        <path
          d="M-100 500 Q350 300 720 500 T1540 500"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="3"
          className="animate-wave-medium"
        />
        <path
          d="M-100 480 Q500 280 900 480 T1500 480"
          fill="none"
          stroke="url(#wave-gradient-3)"
          strokeWidth="1"
          className="animate-wave-slow"
        />

        {/* Foreground Waves (Sharp & Bright) */}
        <path
          d="M-100 400 Q450 200 750 400 T1500 400"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="4"
          className="animate-wave-fast"
        />
        <path
          d="M-100 420 Q550 220 1000 420 T1500 420"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="2"
          className="animate-wave-medium"
        />
      </svg>
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D12] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent opacity-40" />
    </div>
  );
};

export default AbstractWaves;
