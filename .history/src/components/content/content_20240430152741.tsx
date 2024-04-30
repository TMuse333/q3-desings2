import React, { useState, useEffect, useRef } from 'react';
import { Variants, motion } from 'framer-motion';

interface contentProps {
  image: string;
  customText: React.ReactNode;
  description: string | null;
  reverse: boolean | null;
  mainTitle: string | null;
  floatingImage: boolean;
  hasAnimation: boolean;
}

const Content: React.FC<contentProps> = ({
  image,
  customText,
  description,
  reverse,
  mainTitle,
  floatingImage,
  hasAnimation,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const imageVariants: Variants = {
    initial: {
      x: reverse ? 150 : -150,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: floatingImage ? [0, -5, 0] : 0,
      transition: {
        opacity: {
          duration: 2,
        },
        x: {
          duration: 1,
          ease: 'easeInOut',
        },
        y: {
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  



  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Intersection ratio required to trigger callback
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the element enters or leaves the viewport
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <article
      ref={ref}
      className={`flex flex-col justify-center align-center pt-8
       relative mr-auto ml-auto
       md:w-[90vw] md:max-w-[1200px] sm:max-w-[668px]
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <motion.img
        variants={imageVariants}
        initial={hasAnimation ? 'initial' : ''}
        animate={hasAnimation && inView ? 'animate' : ''}
        className="w-[90vw] h-[55vw] object-cover ml-auto mr-auto max-h-[567px] max-w-[668px] "
        src={image}
      />

      {customText ? (
        <>
          {customText}
        </>
      ) : (
        <div>
          <h1 className="text-left pl-5 sm:pl-12 pt-5">{mainTitle}</h1>
          <motion.p
          className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line">
            {description ||
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'}
               </motion.p>
            <motion.p className="mt-6 text-left pl-5 sm:pl-12">
              {description ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident odio labore recusandae est accusantium voluptatibus ad doloremque! Quo corrupti cum delectus ad praesentium minus voluptates soluta consectetur perspiciatis veniam? Pariatur vel, error cum possimus ad asperiores inventore obcaecati suscipit.'}
            </motion.p>
            <motion.button className="mt-4 -translate-x-2">slat</motion.button>
         
        </div>
      )}
    </article>
  );
};

export default Content;
