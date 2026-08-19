import React from "react";
import "./Logo.css";

export default function Logo({ size = "md", layout = "inline", showSubtitle = true, onClick }) {
  // Generate 28 spiral vortex paths for the signature Aura Base icon
  const spiralPaths = Array.from({ length: 28 }).map((_, i) => {
    const angleDeg = (i * 360) / 28;
    const angleRad = (angleDeg * Math.PI) / 180;
    const endAngleRad = ((angleDeg + 35) * Math.PI) / 180;
    
    const r1 = 22; // Inner radius
    const r2 = 47; // Outer radius
    
    const x1 = 50 + r1 * Math.cos(angleRad);
    const y1 = 50 + r1 * Math.sin(angleRad);
    
    const cpX = 50 + (r1 + r2) * 0.55 * Math.cos(angleRad + 0.3);
    const cpY = 50 + (r1 + r2) * 0.55 * Math.sin(angleRad + 0.3);
    
    const x2 = 50 + r2 * Math.cos(endAngleRad);
    const y2 = 50 + r2 * Math.sin(endAngleRad);
    
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${cpX.toFixed(2)} ${cpY.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  });

  return (
    <div className={`aurabase-logo-wrapper logo-${size} logo-layout-${layout}`} onClick={onClick}>
      <div className="aurabase-logo-icon-container">
        <svg viewBox="0 0 100 100" className="aurabase-logo-svg">
          <defs>
            <linearGradient id="auraSwirlGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5E00" />
              <stop offset="35%" stopColor="#FF007A" />
              <stop offset="70%" stopColor="#C026D3" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <filter id="auraGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Spiral Rays */}
          <g filter="url(#auraGlow)" stroke="url(#auraSwirlGrad)" strokeWidth="2.8" strokeLinecap="round" fill="none">
            {spiralPaths.map((d, idx) => (
              <path key={idx} d={d} />
            ))}
          </g>

          {/* Central Dark Badge */}
          <circle cx="50" cy="50" r="21" fill="#0B0B10" stroke="url(#auraSwirlGrad)" strokeWidth="1.2" />

          {/* Central 'A' */}
          <text
            x="50"
            y="57.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="21"
          >
            A
          </text>
        </svg>
      </div>

      <div className="aurabase-logo-text-group">
        <span className="aurabase-logo-title">AURA BASE</span>
        {showSubtitle && <span className="aurabase-logo-subtitle">LEARN HERE</span>}
      </div>
    </div>
  );
}
