import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
}
