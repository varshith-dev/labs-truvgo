import { useEffect, useRef } from 'react';
import rough from 'roughjs';

export default function SketchBackground({ opacity = 0.2 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rc = rough.canvas(canvas);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Draw sketch grid
      for (let i = 0; i < w; i += 100) {
        rc.line(i, 0, i, h, {
          roughness: 0.5,
          stroke: 'rgba(0, 255, 240, 0.05)',
          strokeWidth: 0.5
        });
      }
      for (let i = 0; i < h; i += 100) {
        rc.line(0, i, w, i, {
          roughness: 0.5,
          stroke: 'rgba(0, 255, 240, 0.05)',
          strokeWidth: 0.5
        });
      }

      // Draw random accent shapes
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const size = Math.random() * 80 + 40;
        rc.circle(x, y, size, {
          roughness: 2,
          stroke: 'rgba(255, 45, 149, 0.08)',
          strokeWidth: 1
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
