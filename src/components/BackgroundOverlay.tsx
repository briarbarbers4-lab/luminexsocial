export default function BackgroundOverlay() {
  return (
    <>
      {/* Fixed Premium Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-opacity">
        {/* Base dark gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0B0D12 0%, #0a0c10 50%, #0B0D12 100%)',
          }}
        />

        {/* Radial gradient center glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(13, 33, 161, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Perspective Grid Lines - Radiating from center */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Gradient for horizontal lines */}
            <linearGradient id="lineGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(13, 33, 161, 0)" />
              <stop offset="20%" stopColor="rgba(13, 33, 161, 0.3)" />
              <stop offset="50%" stopColor="rgba(13, 33, 161, 0.5)" />
              <stop offset="80%" stopColor="rgba(13, 33, 161, 0.3)" />
              <stop offset="100%" stopColor="rgba(13, 33, 161, 0)" />
            </linearGradient>
            
            {/* Gradient for vertical lines */}
            <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(247, 248, 252, 0)" />
              <stop offset="30%" stopColor="rgba(247, 248, 252, 0.08)" />
              <stop offset="50%" stopColor="rgba(247, 248, 252, 0.12)" />
              <stop offset="70%" stopColor="rgba(247, 248, 252, 0.08)" />
              <stop offset="100%" stopColor="rgba(247, 248, 252, 0)" />
            </linearGradient>

            {/* Radial fade for perspective effect */}
            <radialGradient id="perspectiveFade" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="rgba(13, 33, 161, 0.4)" />
              <stop offset="50%" stopColor="rgba(13, 33, 161, 0.15)" />
              <stop offset="100%" stopColor="rgba(13, 33, 161, 0)" />
            </radialGradient>
          </defs>

          {/* Horizontal perspective lines - fading outward */}
          {[15, 25, 35, 45, 55, 65, 75, 85].map((y, i) => (
            <line
              key={`h-${i}`}
              x1="0%"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="url(#lineGradientH)"
              strokeWidth={i === 3 || i === 4 ? "1" : "0.5"}
              opacity={0.4 - Math.abs(i - 3.5) * 0.08}
            />
          ))}

          {/* Vertical perspective lines - converging toward horizon */}
          {[-30, -15, 0, 15, 30, 45, 60, 75, 90, 105, 120].map((x, i) => (
            <line
              key={`v-${i}`}
              x1={`${x}%`}
              y1="100%"
              x2={`${50 + (x - 50) * 0.3}%`}
              y2="0%"
              stroke="url(#lineGradientV)"
              strokeWidth="0.5"
              opacity={0.15}
            />
          ))}

          {/* Diagonal accent lines */}
          <line x1="0%" y1="60%" x2="40%" y2="20%" stroke="rgba(13, 33, 161, 0.2)" strokeWidth="0.5" />
          <line x1="100%" y1="60%" x2="60%" y2="20%" stroke="rgba(13, 33, 161, 0.2)" strokeWidth="0.5" />
          
          {/* Center horizon glow line */}
          <line x1="10%" y1="40%" x2="90%" y2="40%" stroke="url(#lineGradientH)" strokeWidth="1.5" opacity="0.3" />
        </svg>

        {/* Floating gradient orbs */}
        <div
          className="absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full blur-[100px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.25) 0%, transparent 70%)',
          }}
        />
        
        <div
          className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.2) 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />

        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.1) 0%, transparent 60%)',
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(247, 248, 252, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247, 248, 252, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Noise texture for premium feel - Optimized */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/%3E%3C/filter%3E%3Crect width='200' height='200' fill='transparent'/%3E%3Crect width='200' height='200' fill='%23F7F8FC' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />

        {/* Accent glow spots */}
        <div
          className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full"
          style={{
            background: '#0D21A1',
            boxShadow: '0 0 40px 20px rgba(13, 33, 161, 0.3)',
          }}
        />
        <div
          className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full"
          style={{
            background: '#0D21A1',
            boxShadow: '0 0 30px 15px rgba(13, 33, 161, 0.25)',
          }}
        />
        <div
          className="absolute bottom-[25%] left-[40%] w-1 h-1 rounded-full"
          style={{
            background: 'rgba(247, 248, 252, 0.8)',
            boxShadow: '0 0 20px 10px rgba(247, 248, 252, 0.1)',
          }}
        />
      </div>

      {/* Vignette effect for depth */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(11, 13, 18, 0.4) 100%)',
        }}
      />
    </>
  );
}
