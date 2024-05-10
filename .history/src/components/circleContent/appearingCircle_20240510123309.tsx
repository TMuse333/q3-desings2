import React, { useEffect, useRef, useState } from 'react';
import { useGeneralContext } from '../../context/context';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver';
import {motion, Variants} from 'framer-motion'

interface CircleProps  {
    image: string,
    secondCircleComplete: boolean;
   
    handleCircleComplete: (index: number, value: boolean) => void;
    index:number
}

const AppearingCircle: React.FC<CircleProps> = ({image,secondCircleComplete,
    handleCircleComplete,index}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement>(null); // Ref for the offscreen canvas
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [circleRadius, setCircleRadius] = useState<number>(0);
    const [fraction, setFraction] = useState<number>(0.1);
    const [firstCircleComplete, setFirstCircleComplete] = useState<boolean>(false);
    const [redraw, setRedraw] = useState<boolean>(true)
    const [resized, setResized] = useState<boolean>(false);



    const [inView, setInView] = useState(false); // State for tracking whether the component is in view
    // const quarter = Math.PI / 2;
    // const circle = Math.PI * 2;

    const [initialScreenSize, setInitialScreenSize]
    = useState<number>(window.innerWidth)

    const [circleThickness] = useState<number>(4)

    const {isMobile2} = useGeneralContext()



    useEffect(() => {
        // Initialize the previous window width to the initial screen size
        let prevWindowWidth = initialScreenSize;
    
        const handleScroll = () => {
            // Get the current window width
            const currentWindowWidth = window.innerWidth;
          
            // Compare the current and previous window widths
            if (prevWindowWidth >= 800 && currentWindowWidth < 800) {
                // Screen size has changed
                setResized(true);
                set
                console.log('The screen has been resized');
            }
    
            // Update the previous window width for the next scroll event
            prevWindowWidth = currentWindowWidth;
        };
    
        // Add scroll event listener
        window.addEventListener('resize', handleScroll);
    
        // Cleanup: remove event listener
        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, [initialScreenSize]); // Add initialScreenSize to the dependency array if it changes
    



      

 
    

    const circleRadiusLimit = isMobile2 ? 50 : 80

    const secondCircleRadius = isMobile2 ? 60 : 100

    const circleOriginX = isMobile2 ? canvasSize.width / 2 : canvasSize.width /2
    const circleOriginY = isMobile2 ? canvasSize.height / 2 : canvasSize.height /2


  


const imageVariants: Variants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1
    }
}
    

   
    // Configure intersection observer options
    const options = {
        root: null,
        rootMargin: '-25px',
        threshold: 1,
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
    
        const padding = isMobile2 ? 65 : 110; // Adjust the padding as needed
    
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
    

   

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas  || !redraw ) return;
    
        const c = canvas.getContext('2d');
        if (!c) return;
    
        const animate = () => {
            c.clearRect(0, 0, canvas.width, canvas.height);

          

              if(!resized){

              
    
            // Draw circle border
            c.strokeStyle = '#00bfff';
            c.beginPath();


            c.arc(circleOriginX, circleOriginY, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            
            c.stroke();

        if(firstCircleComplete){
            c.beginPath();
            c.arc(circleOriginX, circleOriginY, 120, 0, (1 * Math.PI) * 2, false);
            c.lineWidth = circleThickness; 
            c.strokeStyle = '#048dba'; // Set stroke color to red
            c.stroke();
        }

    }
    
    
            requestAnimationFrame(animate);
        };
    
        animate();
    }, [canvasSize, circleRadius,firstCircleComplete,fraction,, circleThickness]);

    const [size, setSize ] = useState(100)

    useEffect(() => {
        if (resized) {
            console.warn('time to erase')
            const canvas = canvasRef.current;
            if (canvas) {
                const context = canvas.getContext('2d');
                if (context) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
        }
    }, [resized]);
    

    useEffect(() => {

        if(!inView || !redraw){
            console.log('radius not increased')
            return
        }
   
        const intervalId = setInterval(() => {
        

       
            if (circleRadius < circleRadiusLimit ) {
                // console.log('circle radius',circleRadius)
                setCircleRadius(prev => prev + 1);
               
            } else {
                clearInterval(intervalId);
                setFirstCircleComplete(true);
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [circleRadius,inView]);


    useEffect(() => {
        if(!inView  || !redraw){
            return
        }
        const intervalId = setInterval(() => {
            if (fraction < 1 && firstCircleComplete) {
                setFraction(prev => prev + 0.03);
                // console.log('fraction',fraction)

            }

                else if(fraction > 0.96){
                    handleCircleComplete(index,true);
                    setRedraw(false)
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
            <div ref={componentRef} className='relative mr-auto ml-auto
            h-[150px]'>
                <motion.img 
                variants={imageVariants}
                initial={'initial'}
                animate={secondCircleComplete ? 'animate' : 'initial'}
                // style={imageStyle}
                src={image}
                className='absolute w-3/5 top-[20%] left-[50%] -translate-x-[50%]'/>
            <canvas className='relative ' ref={canvasRef}></canvas>
            <canvas style={{ display: 'none' }} ref={offscreenCanvasRef}></canvas> 
            {/* Offscreen canvas */}
            </div>
        </>
    );
};

export default AppearingCircle;