import React, { useEffect, useRef, useState } from 'react';

const CircleContent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [circleRadius, setCircleRadius] = useState<number>(0)

    const [fraction, setFraction] = useState<number>(0.1)

    const [firstCircleComplete, setFirstCircleComplete] = useState<boolean>(false)

    const 


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        const resizeCanvas = () => {
            // Update canvas size
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Resize canvas when the window is resized
        window.addEventListener('resize', resizeCanvas);

        // Initialize canvas size
        resizeCanvas();

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        // Initial circle properties


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
            // c.beginPath();
            // c.arc(canvasSize.width / 2, canvasSize.height / 2, circleRadius, 0, 2 * Math.PI);
            // c.lineWidth = 4; // Set border width
            // c.stroke();

            c.beginPath()
            // c.moveTo(canvasSize.width * 0.75, canvasSize.height)
            
            c.arc(canvasSize.width * 2/3, canvasSize.height / 2, 75, 0,  fraction * Math.PI * 2);
            c.lineWidth = 4; // Set border width
            c.strokeStyle = 'red'
            c.stroke();

            // Increase radius until it reaches maxRadius
            
                
                requestAnimationFrame(animate);
            }
   
        

        // Start animation
        animate();
    }, [canvasSize,circleRadius,fraction]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (circleRadius < 80) {
    //             console.log('circle radius',circleRadius)
    //             setCircleRadius(prev => prev + 1);

                
    //         } 
            
    //         else {
    //             clearInterval(intervalId);
    //         }
    //     }, 5); // Adjust the interval time as needed

    //     return () => clearInterval(intervalId); // Cleanup function to clear the interval
    // }, [circleRadius]);

      useEffect(() => {
        const intervalId = setInterval(() => {
            if (fraction < 1/3) {
                console.log('circle radius',circleRadius)
                setFraction(prev => prev + 0.01);

                
            } 
            
            else {
                clearInterval(intervalId);
            }
        }, 16); // Adjust the interval time as needed

        return () => clearInterval(intervalId); // Cleanup function to clear the interval
    }, [fraction]);




    
    // Call increaseFraction to gradually increase the fraction
 

    return (
        <canvas className='relative' ref={canvasRef}></canvas>
    );
}

export default CircleContent;
