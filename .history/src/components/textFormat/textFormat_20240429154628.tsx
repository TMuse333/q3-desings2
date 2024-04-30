import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

interface TextFormatProps {
  isAnimated: boolean | null,
  reverse: boolean | null
}

const TextFormat: React.FC<TextFormatProps> = ({ isAnimated, reverse }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use Intersection Observer only if isAnimated is null
    if (isAnimated === null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update the state based on whether the component is in view
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5
        }
      );

      if (componentRef.current) {
        observer.observe(componentRef.current);
      }

      return () => {
        if (componentRef.current) {
          observer.unobserve(componentRef.current);
        }
      };
    } else if (isAnimated) {
      // Trigger animations immediately if isAnimated is true
      setIsVisible(true);
    }
  }, [isAnimated]);

  const pointVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: 25
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3
        }
      }
    };
  };

  const points: string[] = [
    'be a real one',
    'dont stop, keep going',
    'go to the quantum realm',
    'go to the gym',
    'playas play, playa'
  ];

  return (
    <motion.article
      ref={componentRef}
      className="w-4/5   pr-4 relative 
      sm:mt-8  sm:pl-8
       md:pl-6
      md:max-w-[450px] "   
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
    >
       
     
      {/* <div className={`${reverse ? 'md:-translate-x-0' : 'md:translate-x-6'}`}> */}
      <motion.h1 className="text-2xl pb-5 text-left ml-0 font-bold ">Lorem ipsum dolor sit.</motion.h1>
      <motion.p className="text-lg w-screen pr-2 pl-0  text-left w-[90vw]
      md:w-[50vw] max-w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, excepturi.
      </motion.p>
      <motion.ul className="text-left  pl-4 pt-5 list-disc
     ">
        {points.map((point, index) => (
          <motion.li key={index} variants={pointVariants(index)} initial="initial" animate={isVisible ? "animate" : "initial"}>
            {point}
          </motion.li>
        ))}
         <motion.button
        className="mt-5 w-[150px] ml-0  rounded-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: points.length * 0.3 }}
      >
        slat
      </motion.button>
      </motion.ul>
      {/* </div> */}
    </motion.article>
  );
};

export default TextFormat;
