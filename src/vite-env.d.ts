/// <reference types="vite/client" />
// Spline Viewer Web Component
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': SplineViewerProps;
  }
}

interface SplineViewerProps {
  url: string;
  style?: React.CSSProperties;
  [key: string]: any;
}