import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RedirectManager() {
  const location = useLocation();

  useEffect(() => {
    const isWww = window.location.hostname.startsWith('www.');
    const isCustomDomain = window.location.hostname === 'luminexsocial.com';

    if (isCustomDomain && !isWww) {
      // Perform 301-like permanent redirect to www
      const newUrl = `https://www.luminexsocial.com${location.pathname}${location.search}${location.hash}`;
      window.location.replace(newUrl);
    }
  }, [location]);

  return null;
}
