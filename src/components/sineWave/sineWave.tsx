import React, { useEffect, useRef } from 'react';

interface SineWaveProps {
  colors: string[];
}

const SineWave: React.FC<SineWaveProps> = ({ colors }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    const waves = [
      {
        amplitude: 15,
        frequency: 0.02,
        speed: 0.035,
        xOffset: 0,
        color: colors[0], // Using colors prop
      },
      {
        amplitude: 20,
        frequency: 0.02,
        speed: 0.03,
        xOffset: 0,
        color: colors[1], // Using colors prop
      },
      {
        amplitude: 10,
        frequency: 0.05,
        speed: 0.04,
        xOffset: 0,
        color: colors[2], // Using colors prop
      },
      {
        amplitude: 10,
        frequency: 0.015,
        speed: 0.025,
        xOffset: 0,
        color: colors[3], // Using colors prop
      },
      {
        amplitude: 15,
        frequency: 0.025,
        speed: 0.035,
        xOffset: 0,
        color: colors[4], // Using colors prop
      },
    ];

    const resizeHandler = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    const draw = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      waves.forEach((wave) => {
        c.beginPath();
        c.moveTo(0, canvas.height / 2);
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + Math.sin(x * wave.frequency + wave.xOffset) * wave.amplitude;
          c.lineTo(x, y);
        }
        c.strokeStyle = wave.color;
        c.stroke();
        wave.xOffset += wave.speed;
      });
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [colors]);

  return (
    <div className='w-screen  relative h-[200px]  ml-auto mr-auto'>
      <canvas className='h-full w-full mt-auto mb-auto' ref={canvasRef} />
    </div>
  );
};

export default SineWave;
