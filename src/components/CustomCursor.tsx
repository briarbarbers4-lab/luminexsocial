import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Magnetic trailing cursor effect
      setTrailingPosition(prev => ({
        x: prev.x + (e.clientX - prev.x) * 0.15,
        y: prev.y + (e.clientY - prev.y) * 0.15,
      }));
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('interactive');
      setIsHoveringInteractive(isInteractive);
    };

    const handleMouseOut = () => {
      setIsHoveringInteractive(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor - small circle */}
      <div
        className="fixed w-2 h-2 bg-royal-blue rounded-full pointer-events-none z-50 transition-all duration-150"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHoveringInteractive ? 0.8 : 0.6,
        }}
      />

      {/* Trailing cursor - larger circle with delay */}
      <div
        className="fixed rounded-full pointer-events-none z-40 transition-all duration-300"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHoveringInteractive ? '32px' : '24px',
          height: isHoveringInteractive ? '32px' : '24px',
          border: '2px solid rgba(13, 33, 161, 0.3)',
          boxShadow: isHoveringInteractive 
            ? '0 0 20px rgba(13, 33, 161, 0.5)' 
            : '0 0 10px rgba(13, 33, 161, 0.2)',
        }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
}
