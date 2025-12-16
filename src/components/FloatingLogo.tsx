export default function FloatingLogo() {
  return (
    <div className="fixed top-6 left-6 z-40 pointer-events-auto">
      {/* Logo Container */}
      <a href="/" className="block">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-royal-blue/70 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-royal-blue/50 animate-float overflow-hidden">
          <img 
            src="https://ik.imagekit.io/luminexsocial/Logo_V1.png?updatedAt=1765875231435" 
            alt="Luminex Social Logo" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </a>
    </div>
  );
}
