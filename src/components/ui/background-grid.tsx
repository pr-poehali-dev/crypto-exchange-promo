
import React from 'react';

interface BackgroundGridProps {
  className?: string;
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({ className }) => {
  return (
    <style jsx="true">{`
      .bg-grid-pattern {
        background-image: radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `}</style>
  );
};

export default BackgroundGrid;
