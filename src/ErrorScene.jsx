import { useEffect, useRef } from 'react';
import rough from 'roughjs';
import { Badge, Button, Card } from 'sketchbook-ui';

const shellStyle = {
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  padding: '24px',
  background: 'radial-gradient(circle at 15% 20%, #ffbe0b 0, transparent 35%), radial-gradient(circle at 85% 10%, #3a86ff 0, transparent 28%), linear-gradient(145deg, #fbf8f3, #fde7d6)',
  color: '#1d2430',
  fontFamily: 'Sora, Trebuchet MS, sans-serif'
};

const canvasWrapStyle = {
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none'
};

const cardWrapStyle = {
  width: 'min(640px, 100%)',
  zIndex: 2
};

const cardBodyStyle = {
  display: 'grid',
  gap: '14px',
  textAlign: 'center'
};

const titleStyle = {
  margin: 0,
  fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase'
};

const messageStyle = {
  margin: 0,
  lineHeight: 1.7,
  fontSize: '1rem'
};

export default function ErrorScene({ code, title, message }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const rc = rough.canvas(canvas);
      rc.rectangle(40, 42, width - 80, height - 84, {
        roughness: 2.8,
        stroke: '#1f4e79',
        strokeWidth: 3,
        fill: '#ffffff',
        fillStyle: 'hachure',
        fillWeight: 0.8,
        hachureGap: 9
      });

      rc.line(48, height - 130, width - 48, 100, {
        roughness: 1.8,
        stroke: '#ef476f',
        strokeWidth: 2
      });

      rc.circle(width * 0.82, height * 0.24, 160, {
        roughness: 1.9,
        stroke: '#ff9f1c',
        strokeWidth: 2.2
      });
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <main style={shellStyle}>
      <div style={canvasWrapStyle}>
        <canvas ref={canvasRef} />
      </div>

      <div style={cardWrapStyle}>
        <Card>
          <div style={cardBodyStyle}>
            <Badge>{`Error ${code}`}</Badge>
            <h1 style={titleStyle}>{title}</h1>
            <p style={messageStyle}>{message}</p>
            <Button onClick={() => window.location.assign('/404')}>Go To 404</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
