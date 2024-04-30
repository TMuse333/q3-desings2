import React, { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, motionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import laptop from '../../media/laptop.jpg'
import {useTextYPositionContext} from '../context/context'

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white relative">
      <TextParallaxContent
        imgUrl={laptop}
        subheading="Collaborate"
        heading="Built for all of us."
      >
       
      </TextParallaxContent>
    
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  video
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
  video
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl}
        textPosition={21} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, textPosition }: { imgUrl: string, textPosition: number }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const {textYPosition} = useTextYPositionContext()

  const motionTextYPosition = motionValue(textYPosition);

  const brightness = useTransform(
    motionTextYPosition,
    [0, -100],  // Range of scrollYProgress values
    [0.2, 1] // Range of brightness values
  );

  const [imgBrightness, setImgBrightness] = useState(0.2)


  useEffect(() => {
    const unsubscribe = brightness.onChange((value) => {
     
      setImgBrightness(value)
    });

    return () => {
      unsubscribe();
    };
  }, [brightness]);



 
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        filter: `brightness(${imgBrightness})`,
       
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl relative"
    >
       
      <motion.div
        className="absolute inset-0 "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
    subheading,
    heading,
  }: {
    subheading: string;
    heading: string;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const {textYPosition, setTextYPosition} = useTextYPositionContext()
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    // Log the y position
    useEffect(() => {
        const unsubscribe = y.onChange((value) => {
          console.log("Y position:", value);

          setTextYPosition(value)
        });
        return unsubscribe;
      }, []);



  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };
  

