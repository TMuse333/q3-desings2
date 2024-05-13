import React, { useState, } from 'react';
import { Variants, motion } from 'framer-motion';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver'
import { useGeneralContext } from '../../context/context';

interface contentProps {
  image: string;
  customText: React.ReactNode;
  description: string[] | null ;
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

 const {isMobile} = useGeneralContext()

  // Configure intersection observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: isMobile ? 0.6 : 0.8,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);


  const imageVariants: Variants = {
    initial: {
      // x: reverse ? 180 : -150,
      // opacity: 0,
    },
    animate: {
      opacity: 1,
      // x: reverse  && !isMobile? 50 : 0,
      y: floatingImage ? [0, -5, 0] : 0,
      transition: {
     

        opacity: {
          delay:0.25,
          duration: 1,
        },
        x: {
          // delay:0.25,
          duration: 0.5,
          ease: 'easeInOut',
        },
        y: {
          delay: 2.45,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  const textVariants = (delay: number): Variants => {
    return {
      initial: {
        x: reverse ? -30 : 30,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
        },
      },
    };
  };

  const headerVariants = (delay:number): Variants => {
    return {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:delay
        }
    }
  }
}

const nullVariant: Variants = {

}




  

  return (
    <article
      ref={componentRef}
      className={`flex flex-col justify-center align-center pt-8 pb-8
       relative mr-auto ml-auto
       md:w-[95vw] md:max-w-[1200px] sm:max-w-[668px]
       
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <motion.img
        variants={hasAnimation ? imageVariants : nullVariant}
        initial={hasAnimation ? 'initial' : ''}
        animate={hasAnimation && inView ? 'animate' : ''}
        className="w-[90vw] h-[55vw] object-cover ml-auto mr-auto max-h-[567px] max-w-[668px]
        md: "
        src={image}
      />

      {customText ? (
        <>
          {customText}
        </>
      ) : (
        <div >
          <motion.h1
          variants={headerVariants(0)}
          initial={hasAnimation ? 'initial' : ''}
          animate={hasAnimation && inView ? 'animate' : ''}
           className="text-left pl-5 sm:pl-12 pt-5
           bg-gradient-to-br from-white to-gray-400 bg-clip-text">{mainTitle}</motion.h1>
          <motion.p
          variants={textVariants(0.45)}
       initial={hasAnimation ? 'initial' : ''}
       animate={inView && hasAnimation? 'animate' : ''}
          className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line">
            {description != null ? description[0] :
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'}
               </motion.p>
            <motion.p
             variants={textVariants(0.65)}
             initial={hasAnimation ? 'initial' : ''}
             animate={inView && hasAnimation? 'animate' : ''}
             className="mt-6 text-left pl-5 sm:pl-12"
             >
              {description != null ? description[1] :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident odio labore recusandae est accusantium voluptatibus ad doloremque! Quo corrupti cum delectus ad praesentium minus voluptates soluta consectetur perspiciatis veniam? Pariatur vel, error cum possimus ad asperiores inventore obcaecati suscipit.'}
                <br/>
                <motion.button
                  variants={headerVariants(1.2)}
                  initial={hasAnimation ? 'initial' : ''}
                  animate={hasAnimation && inView ? 'animate' : ''}
                 className="mt-6 ">{description !== null ? description[2] : 'button'}</motion.button>
            </motion.p>
            
         
        </div>
      )}
    </article>
  );
};

export default Content;
