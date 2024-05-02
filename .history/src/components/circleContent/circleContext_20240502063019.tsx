import React, { useEffect, useRef } from 'react';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Set canvas size
        canvas.width = 400;
        canvas.height = 400;

        // Draw a circle
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fillStyle = 'blue';
        context.fill();
    }, []);

    return (
        <canvas ref={canvasRef}></canvas>
    );
}

export default CircleContent;
