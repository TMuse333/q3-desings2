import React, { useEffect, useRef, useState } from 'react';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [circleRadius, setCircleRadius] = useState(0);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        // Set canvas size
        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;

        // Initial circle properties
        const maxRadius = 75;
        const growthRate = 1;

        // Animation function
        const animate = () => {
            // Clear canvas
            c.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient with changing colors
            const gradient = c.createLinearGradient(0, 0, canvasSize.width * 0, canvasSize.height * 0.4);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(0.5, 'blue');
            gradient.addColorStop(1, 'green');

            c.fillStyle = gradient;

            // Set gradient as stroke style
            c.strokeStyle = '#00bfff';

            // Draw circle border
            c.beginPath();
            c.arc(canvasSize.width / 2, canvasSize.height / 2, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            c.stroke();

            // Increase radius until it reaches maxRadius
            if (circleRadius < maxRadius) {
                setCircleRadius(prevRadius => prevRadius + growthRate);
            }
        };

        // Start animation loop
        const animationLoop = () => {
            animate();
            animationRef.current = requestAnimationFrame(animationLoop);
        };

        animationLoop();

        // Cleanup animation loop
        return () => cancelAnimationFrame(1);
    }, [canvasSize, circleRadius]);

    useEffect(() => {
        const resizeCanvas = () => {
            // Update canvas size
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        };

        // Resize canvas when the window is resized
        window.addEventListener('resize', resizeCanvas);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas className='relative' ref={canvasRef}></canvas>
    );
}

export default CircleContent;
