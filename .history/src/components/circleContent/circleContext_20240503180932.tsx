import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement>(null); // Ref for the offscreen canvas
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [circleRadius, setCircleRadius] = useState<number>(0);
    const [fraction, setFraction] = useState<number>(0.1);
    const [firstCircleComplete, setFirstCircleComplete] = useState<boolean>(false);
    const [secondCircleComplete, setSecondCircleComplete] = useState<boolean>(false);
    const [inView, setInView] = useState(false); // State for tracking whether the component is in view
    const quarter = Math.PI / 2;
    const circle = Math.PI * 2;

    // Configure intersection observer options
    const options = {
        root: null,
        rootMargin: '175px',
        threshold: 0.8,
    };

    // Apply intersection observer hook to detect when the component is in view
    const componentRef = useIntersectionObserver(setInView, options);

 

    useEffect(() => {
  
        const canvas = canvasRef.current;
        const offscreenCanvas = offscreenCanvasRef.current;
        if (!canvas || !offscreenCanvas) return;

        const c = canvas.getContext('2d');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        if (!c || !offscreenCtx) return;

        const resizeCanvas = () => {
            const maxWidth = 1200;
            const canvasWidth = Math.min(window.innerWidth, maxWidth);

            setCanvasSize({ width: canvasWidth, height: window.innerHeight });
            canvas.width = canvasWidth;
            canvas.height = window.innerHeight;
            offscreenCanvas.width = canvasWidth; // Set offscreen canvas size
            offscreenCanvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Draw repeated objects on the offscreen canvas
        offscreenCtx.fillStyle = 'transparent';
        offscreenCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height); // Example drawing
        // Draw other repeated objects as needed

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    useEffect(() => {

        // if(!inView ){
        //     console.log('not in view')
        //     return
        // }
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        const animate = () => {
            c.clearRect(0, 0, canvas.width, canvas.height);

            // Render offscreen canvas onto main canvas
            // c.drawImage(offscreenCanvasRef.current!, 0, 0);

            // Draw circle border
            c.beginPath();
            c.arc(canvasSize.width / 5, canvasSize.height / 5, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            c.stroke();

            // Draw second circle if first is complete and component is in view
            if (firstCircleComplete && inView) {
                c.beginPath();
                c.arc(canvasSize.width / 5, canvasSize.height / 5, 100, 0, (fraction * Math.PI) * 2, false);
                c.lineWidth = 4; // Set border width
                c.strokeStyle = 'red';
                c.stroke();

                // Draw horizontal line
                const lineLength = 50;
                const endX = canvasSize.width / 2 + Math.cos(fraction * Math.PI) * 90;
                const endY = canvasSize.height / 4 + Math.sin(fraction * Math.PI) * 90;
                c.beginPath();
                c.moveTo(canvasSize.width / 5, (canvasSize.height / 4) + 20);
                c.lineTo(endX, endY);
                c.strokeStyle = 'blue'; // Set the color of the line
                c.stroke();
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, [canvasSize, circleRadius, fraction, firstCircleComplete, inView]);

    useEffect(() => {

        if(!inView){
            console.log('radius not increased')
            return
        }
   
        const intervalId = setInterval(() => {
        
       
            if (circleRadius < 80 ) {
                setCircleRadius(prev => prev + 1);
                console.log('circle radius',circleRadius)
            } else {
                clearInterval(intervalId);
                setFirstCircleComplete(true);
            }
        }, 5);

        return () => clearInterval(intervalId);
    }, [circleRadius,inView]);

    useEffect(() => {
        if(!inView){
            return
        }
        const intervalId = setInterval(() => {
            if (fraction < 1 && firstCircleComplete) {
                setFraction(prev => prev + 0.03);
            } else {
                clearInterval(intervalId);
                setSecondCircleComplete(true);
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [fraction, firstCircleComplete,inView]);

    return (
        <>
            {/* <div ref={componentRef} className='relative'> */}
            <canvas className='relative ml-auto mr-auto' ref={canvasRef}></canvas>
            <canvas style={{ display: 'none' }} ref={offscreenCanvasRef}></canvas> 
            {/* Offscreen canvas */}
            {/* </div> */}
        </>
    );
};

export default CircleContent;