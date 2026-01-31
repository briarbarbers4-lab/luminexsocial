import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0B0D12] flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#0D21A1]/30 border-t-[#0D21A1] rounded-full animate-spin" />
        <p className="text-[#F7F8FC]/60 font-inter text-sm">Loading Luminex...</p>
      </div>
    </div>
  );
}

function AppWithLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after app is mounted and initial render is complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithLoading />
  </StrictMode>
);
