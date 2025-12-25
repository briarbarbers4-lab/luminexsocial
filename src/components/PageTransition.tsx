import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="opacity-100 transition-opacity duration-300">
      {children}
    </div>
  );
}
