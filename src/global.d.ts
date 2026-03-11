import React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'spline-viewer': SplineViewerProps;
      }
    }
  }
}

interface SplineViewerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  url?: string;
}