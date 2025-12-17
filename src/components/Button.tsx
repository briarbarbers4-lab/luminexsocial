import React, { useState, useRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `bg-royal-blue text-soft-white hover:shadow-lg hover:shadow-royal-blue/50 active:scale-95 transition-all duration-300`,
    secondary: `bg-transparent text-soft-white border border-royal-blue/50 hover:border-royal-blue hover:bg-royal-blue/10 transition-all duration-300`,
    glass: `bg-transparent text-soft-white border border-royal-blue/30 backdrop-blur-sm hover:border-royal-blue hover:bg-royal-blue/20 transition-all duration-300`,
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = rippleIdRef.current++;
    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  const baseClasses = `
    relative font-medium rounded-lg transition-all duration-300
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-blue
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden group
    will-animate
  `;

  const content = (
    <>
      {/* Ripple effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none bg-soft-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            animation: `ripple 0.6s ease-out`,
            '--tw-translate-x': `-50%`,
            '--tw-translate-y': `-50%`,
            transform: 'translate(var(--tw-translate-x), var(--tw-translate-y))',
          }}
        />
      ))}

      {/* Text content */}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

      {/* Glow effect on hover (primary only) */}
      {variant === 'primary' && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-soft-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Focus ring pulse effect */}
      {variant === 'primary' && (
        <div
          className="absolute inset-0 rounded-lg border-2 border-royal-blue opacity-0 group-focus-within:opacity-50 animate-pulse"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </>
  );

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleRipple}
      className={buttonClasses}
      {...props}
    >
      {content}
    </button>
  );
}
