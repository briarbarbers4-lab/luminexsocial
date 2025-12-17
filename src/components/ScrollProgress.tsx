import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-royal-blue via-royal-blue to-royal-blue z-1000 transition-all duration-200 ease-out"
      style={{ 
        width: `${scrollProgress}%`,
        boxShadow: `0 0 ${Math.max(10, scrollProgress / 5)}px rgba(13, 33, 161, ${0.4 + scrollProgress / 250})`,
      }}
      aria-label={`Page scrolled ${Math.round(scrollProgress)}%`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
