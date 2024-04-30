import React, { useRef, useState } from "react";
import bottom from '../../media/bottom-mountain.png'
import top from '../../media/top-mountain.png'
import full from '../../media/no-bg-mountain.png'
import q3 from '../../media/q3-words.png'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-20%", "200%"]);
  
    return (
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
       <motion.div className="z-10 relative"
         style={{ y: textY }}>
        {/* <motion.img

        src={q3}
          className=""
        /> */}
        <
         
       
        <motion.p style={{
             y:textY
        }}
         className="text-white relative z-10 mt-6">Elevating Brands with discipline and creativity
         </motion.p>
         </motion.div>
       
  
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${full})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(${bottom})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    );
  }