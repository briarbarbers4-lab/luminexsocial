import React from 'react';

interface PremiumLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export default function PremiumLink({ children, href, ...props }: PremiumLinkProps) {
  return (
    <a
      href={href}
      className="link-underline relative inline-block text-royal-blue/90 hover:text-royal-blue transition-colors duration-300 font-medium"
      {...props}
    >
      {children}
    </a>
  );
}
