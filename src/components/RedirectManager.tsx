import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RedirectManager() {
  const location = useLocation();

  useEffect(() => {
    // Check if we're in production (not on Replit dev domain)
    const isDev = window.location.hostname.includes('replit.dev');
    const isWww = window.location.hostname.startsWith('www.');
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (!isDev && !isLocal && !isWww) {
      // Perform 301-like permanent redirect to www
      const newUrl = `https://www.luminexsocial.com${location.pathname}${location.search}${location.hash}`;
      window.location.replace(newUrl);
    }
  }, [location]);

  return null;
}
