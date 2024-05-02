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

        // Initial circle properties
        let radius = 0;
        const maxRadius = 75;
        const growthRate = 1;

        const width = window.innerWidth
        const height= window.innerHeight

        // Animation function
        const animate = () => {
            // Clear canvas
            c.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient with changing colors
            const gradient = c.createLinearGradient(0, 0, width * 0, height * 0.4);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(0.5, 'blue');
            gradient.addColorStop(1, 'green');



            c.fillStyle = gradient

            c.fillRect(0,0,200,200)

            const radialGradient = c.createRadialGradient(width, 0, 2, width/2, 0, 3)
            radialGradient.addColorStop(0,'red')
            radialGradient.addColorStop(0.33,'blue')
            c.fillStyle = radialGradient

            c.fillRect
            




            // Set gradient as stroke style
            c.strokeStyle = gradient;



            // Draw circle border
            c.beginPath();
            c.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            c.stroke();



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
        <canvas className='relative' ref={canvasRef}></canvas>
    );
}

export default CircleContent;
