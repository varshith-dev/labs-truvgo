import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import rough from 'roughjs';
import { Button, Card } from 'sketchbook-ui';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    const rc = rough.canvas(canvas);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Draw animated network nodes with roughjs
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        rc.circle(x, y, Math.random() * 60 + 20, {
          roughness: 2,
          stroke: '#00fff0',
          strokeWidth: 1.5,
          opacity: 0.3
        });
      }

      // Draw connecting lines
      for (let i = 0; i < 6; i++) {
        const x1 = Math.random() * w;
        const y1 = Math.random() * h;
        const x2 = Math.random() * w;
        const y2 = Math.random() * h;
        rc.line(x1, y1, x2, y2, {
          roughness: 1.5,
          stroke: '#ff2d95',
          strokeWidth: 1,
          opacity: 0.2
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section style={{ position: 'relative', padding: '4rem 2rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #050813 0%, #0a0e27 100%)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 1 }} />
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00fff0',
            marginBottom: '2rem',
            textShadow: '0 0 10px rgba(0, 255, 240, 0.5)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Futuristic Innovation Collective
        </motion.p>

        <motion.h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 900,
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff, #00fff0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          TWISTEMS
        </motion.h1>

        <motion.p
          style={{
            fontSize: '1.25rem',
            color: '#a0aec0',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Engineering the Future Through Innovation
        </motion.p>

        <motion.p
          style={{
            fontSize: '1rem',
            color: '#a0aec0',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Building Systems Beyond Templates • Where Startups, Software & Vision Converge
        </motion.p>

        <motion.div
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button primary>Explore Projects</Button>
          <Button primary>Meet The Team</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
