import React, { useEffect, useRef, useState } from 'react';
import { useTextYPositionContext } from '../../context/context';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver';

interface AppearingCircleProps {
    imageSrc: string; // Image source URL
}

const AppearingCircle: React.FC<AppearingCircleProps> = ({ imageSrc }) => {
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

    const [circleThickness, setCircleThickness] = useState<number>(4)

    const {isMobile} = useTextYPositionContext()
    
    const circleRadiusLimit = isMobile ? 50 : 80
    const secondCircleRadius = isMobile ? 60 : 100
    const circleOriginX = isMobile ? canvasSize.width / 2 : canvasSize.width /5
    const circleOriginY = isMobile ? canvasSize.height / 2 : canvasSize.height /5

    const loadImage = (url: string, callback: (img: HTMLImageElement) => void) => {
        const img = new Image();
        img.onload = () => {
            console.log('Image loaded:', img.width, img.height);
            callback(img);
        };
        img.src = url;
    };
    

    const drawImageCentered = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, width: number, height: number) => {
        c.drawImage(img, x - width / 2, y - height / 2, width, height);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const offscreenCanvas = offscreenCanvasRef.current;
        if (!canvas || !offscreenCanvas) return;
    
        const c = canvas.getContext('2d');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        if (!c || !offscreenCtx) return;
    
        const padding = 65; // Adjust the padding as needed
    
        const calculateCanvasSize = () => {
            const maxWidth = 1200;
            const canvasWidth = Math.min(window.innerWidth, maxWidth);
    
            // Calculate the required canvas size based on circle positions and sizes
            const requiredWidth = Math.max(circleOriginX + secondCircleRadius, circleOriginX + circleRadius) + padding;
            const requiredHeight = Math.max(circleOriginY + secondCircleRadius, circleOriginY + circleRadius) + padding;
    
            setCanvasSize({ width: Math.min(canvasWidth, requiredWidth), height: Math.min(window.innerHeight, requiredHeight) });
            canvas.width = Math.min(canvasWidth, requiredWidth);
            canvas.height = Math.min(window.innerHeight, requiredHeight);
            offscreenCanvas.width = Math.min(canvasWidth, requiredWidth); // Set offscreen canvas size
            offscreenCanvas.height = Math.min(window.innerHeight, requiredHeight);
        };
    
        window.addEventListener('resize', calculateCanvasSize);
        calculateCanvasSize();
    
        // Draw repeated objects on the offscreen canvas
        offscreenCtx.fillStyle = 'transparent';
        offscreenCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height); // Example drawing
        // Draw other repeated objects as needed
    
        return () => {
            window.removeEventListener('resize', calculateCanvasSize);
        };
    }, []);

    const options = {
        root: null,
        rootMargin: '175px',
        threshold: 0.8,
    };

    const componentRef = useIntersectionObserver(setInView, options);

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
            c.arc(circleOriginX, circleOriginY, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            c.stroke();
    
            if (firstCircleComplete) {
                c.beginPath();
                c.arc(circleOriginX, circleOriginY, secondCircleRadius, 0, (fraction * Math.PI) * 2, false);
                c.lineWidth = circleThickness; 
                c.strokeStyle = '#FF0000'; // Set stroke color to red
                c.stroke();

                // Draw image centered inside the smaller circle
                loadImage(imageSrc, (img) => {
                    drawImageCentered(c, img, circleOriginX, circleOriginY, secondCircleRadius * 2, secondCircleRadius * 2);
                });
            }

            requestAnimationFrame(animate);
        };
    
        animate();
    }, [canvasSize, circleRadius,firstCircleComplete,fraction,secondCircleComplete, circleThickness, imageSrc]);
    

    useEffect(() => {

        if(!inView){
            console.log('radius not increased')
            return
        }
   
        const intervalId = setInterval(() => {
            if (circleRadius < circleRadiusLimit ) {
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
            } else if(fraction > 0.96){
                setSecondCircleComplete(true);
            } else {
                clearInterval(intervalId);
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [fraction, firstCircleComplete,inView]);

    return (
        <div ref={componentRef} className='relative mr-auto ml-auto '>
            <canvas className='relative' ref={canvasRef}></canvas>
            <canvas style={{ display: 'none' }} ref={offscreenCanvasRef}></canvas> 
            {/* Offscreen canvas */}
        </div>
    );
};

export default AppearingCircle;
