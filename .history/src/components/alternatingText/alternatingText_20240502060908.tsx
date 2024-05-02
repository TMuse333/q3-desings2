import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';


const AlternatingText: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    // Define the text array
    const text: string[] = [
        'Your custom Built Platform to showcase your knowledge',
        'How you win over clients',
        'A 24/7 lead generator',
        'Your competitive advantage',
        'The difference between being average and great'
    ];

    // UseEffect hook to create and update Typed.js instance
    useEffect(() => {
      
        const options: Typed.TypedOptions = {
            strings: [text[index]], // Set the current text based on index
            typeSpeed: 40, // Typing speed in milliseconds
            // startDelay: 1000, // Delay before typing starts (adjust as needed)
            loop: false, // Do not loop through the strings
            showCursor: true, // Show the cursor
            cursorChar: '|', // Character for the cursor
            onComplete: () => {
                // Callback function when typing completes
                setTimeout(() => {
                    // Increment index to move to the next text
                    setIndex((prevIndex) => (prevIndex + 1) % text.length);
                }, 2000); // Delay before moving to the next text (adjust as needed)
            }
        };

        // Create a new instance of Typed.js
        const typed = new Typed('.typed-text', options);

        // Clean up function to destroy Typed instance
        return () => {
            typed.destroy();
        };
    }, [index, text]); // Re-run effect whenever index or text array changes

    return (
        <section className="alternating-text-container relative ">
            <h1 className='text-white text-4xl '>Your website is...</h1>
            {/* Display the typed text */}
            <h2 className="typed-text text-white relative text-2xl"></h2>
        </section>
    );
};

export default AlternatingText;
