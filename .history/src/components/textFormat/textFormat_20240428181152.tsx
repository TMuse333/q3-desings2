import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

const TextFormat: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

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
      className="w-screen absolute top-0 left-0"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.h1 className="text-2xl pb-5 text-left ml-4">Lorem ipsum dolor sit.</motion.h1>
      <motion.p className="text-lg w-screen pr-2 pl-4 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem!</motion.p>
      <motion.ul className="text-left pl-8 pt-5 list-disc">
        {points.map((point, index) => (
          <motion.li key={index} variants={pointVariants(index)} initial="initial" animate={isVisible ? "animate" : "initial"}>
            {point}
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        className="mt-5 w-3/5 ml-0 -translate-x-4 rounded-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: points.length * 0.3 }}
      >
        slat
      </motion.button>
    </motion.article>
  );
};

export default TextFormat;
