import React from 'react';
import './AuraOrb.css';

export default function AuraOrb({ state = 'idle', size = 48 }) {
  return (
    <div
      className={`aura-orb ${state}`}
      style={{ width: size, height: size }}
    >
      <div className="aura-orb-core" />
      <div className="aura-orb-ring ring-1" />
      <div className="aura-orb-ring ring-2" />
    </div>
  );
}
