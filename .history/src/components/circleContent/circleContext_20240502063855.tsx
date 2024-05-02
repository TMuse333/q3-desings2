import React, { useEffect, useRef } from 'react';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!context) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initial circle properties
        let radius = 0;
        const maxRadius = 75;
        const growthRate = 1;

        // Animation function
        const animate = () => {
            // Clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Set border color
            context.strokeStyle = '#00bfff';

            // Draw circle border
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
            context.lineWidth = 2; // Set border width
            context.stroke();

            // Increase radius until it reaches maxRadius
            if (radius < maxRadius) {
                radius += growthRate;
                requestAnimationFrame(animate);
            }
        };

        // Start animation
        animate();
    }, []);

    return (
        <canvas className='relative'
        ref={canvasRef}></canvas>
    );
}

export default CircleContent;
