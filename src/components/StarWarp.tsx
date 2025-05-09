'use client';

import { useRef, useEffect } from 'react';

export default function StarWarp() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const numStars = 300;
    const speed = 0.1;

    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width - centerX,
      y: Math.random() * height - centerY,
      z: Math.random() * width,
    }));

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px < width && py >= 0 && py < height) {
          const size = (1 - star.z / width) * 2;
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
      style={{
        willChange: 'opacity',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
