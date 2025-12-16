export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative w-12 h-12">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-royal-blue border-r-royal-blue animate-spin" />
        
        {/* Middle pulsing ring */}
        <div className="absolute inset-2 rounded-full border-2 border-royal-blue opacity-30 animate-pulse" />
        
        {/* Inner dot */}
        <div className="absolute inset-4 rounded-full bg-royal-blue animate-pulse" />
      </div>
    </div>
  );
}
