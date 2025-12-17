export default function BackgroundOverlay() {
  return (
    <>
      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D12] via-[#0D21A1]/10 to-[#0B0D12]" />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30 animate-gradient-shift"
          style={{
            background: 'linear-gradient(45deg, transparent, #0D21A1/20, transparent)',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23F7F8FC' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Floating Glassmorphic Orbs */}
        {/* Orb 1 - Top Right */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.3) 0%, transparent 70%)',
            boxShadow: '0 0 60px rgba(13, 33, 161, 0.2)',
          }}
        />

        {/* Orb 2 - Bottom Left */}
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.2) 0%, transparent 70%)',
            boxShadow: '0 0 80px rgba(13, 33, 161, 0.15)',
            animationDelay: '2s',
          }}
        />

        {/* Orb 3 - Top Left */}
        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.25) 0%, transparent 70%)',
            boxShadow: '0 0 50px rgba(13, 33, 161, 0.15)',
            animationDelay: '4s',
          }}
        />

        {/* Orb 4 - Bottom Right */}
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(13, 33, 161, 0.2) 0%, transparent 70%)',
            boxShadow: '0 0 60px rgba(13, 33, 161, 0.15)',
            animationDelay: '3s',
          }}
        />

        {/* Glowing Ring 1 */}
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 border-2 border-royal-blue/20 rounded-full animate-pulse"
          style={{
            boxShadow: 'inset 0 0 30px rgba(13, 33, 161, 0.2), 0 0 20px rgba(13, 33, 161, 0.3)',
          }}
        />

        {/* Glowing Ring 2 */}
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-royal-blue/10 rounded-full animate-pulse"
          style={{
            boxShadow: 'inset 0 0 20px rgba(13, 33, 161, 0.15), 0 0 15px rgba(13, 33, 161, 0.2)',
            animationDelay: '1s',
          }}
        />

        {/* Accent Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <line
            x1="10%"
            y1="30%"
            x2="90%"
            y2="30%"
            stroke="#F7F8FC"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="20%"
            y1="70%"
            x2="80%"
            y2="70%"
            stroke="#F7F8FC"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Parallax orbs for depth */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(247, 248, 252, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'drift 20s linear infinite',
          }}
        />
      </div>
    </>
  );
}
