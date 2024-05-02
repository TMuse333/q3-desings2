import React, { useEffect, useRef } from 'react';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const width = window.innerWidth
        const height = window.innerHeight

        // Initial circle properties
        let radius = 0;
        const maxRadius = 75;
        const growthRate = 1;

        // Animation function
        const animate = () => {
            // Clear canvas
            c.clearRect(0, 0, canvas.width, canvas.height);

            // Set border color
            c.strokeStyle = '#00bfff';

            // Draw circle border
            c.beginPath();
            c.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
            c.lineWidth = 2; // Set border width
            c.stroke();

            c.moveTo(width/2,height/2) 
            c.lineTo(width/2,)           

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
