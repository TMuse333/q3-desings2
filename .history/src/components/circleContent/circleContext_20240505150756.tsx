import React, { useEffect, useRef, useState } from 'react';
import { useTextYPositionContext } from '../../context/context';
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

    const {isMobile} = useTextYPositionContext()
    

    const circleRadiusLimit = isMobile ? 50 : 80

    const secondCircleRadius = isMobile ? 60 : 100
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
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const c = canvas.getContext('2d');
        if (!c) return;
    
        const animate = () => {
            c.clearRect(0, 0, canvas.width, canvas.height);
    
            // Draw circle border
            c.strokeStyle = '#00bfff';
            c.beginPath();

            const circleOriginX =  canvasSize.width / 5
            const circleOriginY =  canvasSize.height / 5

            c.arc(circleOriginX, circleOriginY, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            
            c.stroke();

        if(firstCircleComplete){
            c.beginPath();
            c.arc(circleOriginX, circleOriginY, secondCircleRadius, 0, (fraction * Math.PI) * 2, false);
            c.lineWidth = 4; 
            c.strokeStyle = '#FF0000'; // Set stroke color to red
            c.stroke();
        }

        if (secondCircleComplete) {
            // Calculate adjusted control points for the Bézier curve
            const cp1x = !isMobile ? (canvasSize.width / 4 + 90) : (canvasSize.width / 4 + 70);
            const cp1y = !isMobile ? ((canvasSize.height / 5) + 60) : ((canvasSize.height / 5) + 40); // Adjusted y-coordinate
           
            const cp2x = !isMobile ? (canvasSize.width / 4 + 90) : (canvasSize.width / 4 + 70);
            const cp2y = !isMobile ? ((canvasSize.height / 5) + 50) : ((canvasSize.height / 5) + 30);
        
            // Define the ending point
            const endX = !isMobile ? (canvasSize.width / 4 + 320) : (canvasSize.width / 4 + 200);
            const endY = !isMobile ? ((canvasSize.height / 5) + 48
            );

            const originX = !isMobile ? (canvasSize.width / 5) : 
            140

        
            // Draw the adjusted Bézier curve
            c.beginPath();
            c.moveTo(originX , (canvasSize.height / 5)); // Move to the starting point
            c.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);  // Draw the curve
            c.stroke();
        }
        
    
            requestAnimationFrame(animate);
        };
    
        animate();
    }, [canvasSize, circleRadius,firstCircleComplete,fraction,secondCircleComplete]);
    

    useEffect(() => {

        if(!inView){
            console.log('radius not increased')
            return
        }
   
        const intervalId = setInterval(() => {
        

       
            if (circleRadius < circleRadiusLimit ) {
                console.log('circle radius',circleRadius)
                setCircleRadius(prev => prev + 1);
               
            } else {
                clearInterval(intervalId);
                setFirstCircleComplete(true);
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [circleRadius,inView]);

    useEffect(() => {
        if(!inView){
            return
        }
        const intervalId = setInterval(() => {
            if (fraction < 1 && firstCircleComplete) {
                setFraction(prev => prev + 0.03);
                console.log('fraction',fraction)

            }

                else if(fraction > 0.96){
                    setSecondCircleComplete(true);
                    // console.warn('second circle complete')
                }

             else {
                clearInterval(intervalId);
               
             
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [fraction, firstCircleComplete,inView]);

    return (
        <>
            <div ref={componentRef} className='relative'>
            <canvas className='relative ml-auto mr-auto' ref={canvasRef}></canvas>
            <canvas style={{ display: 'none' }} ref={offscreenCanvasRef}></canvas> 
            {/* Offscreen canvas */}
            </div>
        </>
    );
};

export default CircleContent;
