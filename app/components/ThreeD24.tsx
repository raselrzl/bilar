'use client';

import { useEffect, useState } from 'react';

export default function ThreeD24() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prev => !prev);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const transformStyle = toggle
    ? 'translateZ(100px) rotateX(-45deg) rotateY(15deg) rotateZ(5deg)'
    : 'translateZ(100px) rotateX(-15deg) rotateY(-35deg) rotateZ(-5deg)';

  return (
    <div
      style={{
        height: '60px',
        display: 'flex',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '900',
          color: '#991B1B', // Tailwind red-800
          textShadow:
            `10px 10px 0 #7a1616, ` +        // shadow layers for depth
            `15px 15px 5px #5c1111, ` +
            `20px 20px 30px rgba(0,0,0,0.5)`,
          userSelect: 'none',
          fontFamily: "'Arial Black', Gadget, sans-serif",
          transform: transformStyle,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease',
        }}
      >
        24
      </h1>
    </div>
  );
}
