import React, { useState, useEffect, useRef } from 'react';

const SpriteAnimator = ({ frames = [], fps = 4, className = '', alt = 'Personaje animado' }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!frames.length) return;
    const id = setInterval(() => setCurrentFrame(p => (p + 1) % frames.length), 1000 / fps);
    return () => clearInterval(id);
  }, [frames, fps]);

  if (!frames.length) return null;

  return (
    <div ref={ref} className={`relative select-none ${className}`}>
      {frames.map((src, i) => (
        <img key={src} src={src} alt={i === 0 ? alt : ''} aria-hidden={i !== 0} draggable={false}
          className={`w-full h-full object-contain ${i === currentFrame ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          style={{ transition: 'opacity 60ms' }}
        />
      ))}
    </div>
  );
};

export default SpriteAnimator;
