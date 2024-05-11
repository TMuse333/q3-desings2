import React, {useState,useRef } from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {inView, motion,Variants} from 'framer-motion'
import useIntersectionObserver from "../intersectionObserver/intersectionObserver";
interface CircleProps {
    image:string
}

const CircleElement: React.FC<CircleProps> = ({image}) => {

    const [inView, setInView] = useState<boolean>(false)

    const options = {
        root: null,
        rootMargin: '-25px',
        threshold: 1,
    };

    // Apply intersection observer hook to detect when the component is in view
    const componentRef = useIntersectionObserver(setInView, options);

    const circleVariants:Variants =  {
        initial:{
            opacity:0,
            y:-60
        },
        animate:{
            opacity:1,
            y:0
        }
    }

    return (
        <motion.section
        ref={componentRef}
        variants={circleVariants}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
         className={`mt-5 mb-5 
        rounded-full bg-[#071f26] mr-auto ml-auto
        h-[95vw] w-[95vw] border border-[#2dc0eb]
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[48vw] sm:h-[48vw]
        lg:w-[32vw] lg:h-[32vw]
        ${inView ? 'glow' : ''}`}>
        
            <div className="mt-4">
            <img className="w-[35vw]
            max-w-[115px] max-h-[115px] h-[35vw]
            sm:w-[10vw] sm:h-[10vw] object-cover 
            mr-auto ml-auto"
            src={image}
            />
            <h1 className="text-3xl sm:text-lm lg:text-lg ">Rounded element</h1>
            <p className=" ml-auto mr-auto text-sm sm:text-xs pr-5 pl-5 pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, cum vel! Numquam illo ex odio debitis dolore deserunt, iste odit omnis architecto ipsa voluptates at autem consectetur quam, alias delectus!</p>
            </div>
        </motion.section>
    )
}


export const CircleInfoGraphic = () => {

    return (
        <>
          <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]">
           
       </div>
        <section className={`flex
         justify-evenly flex-col items-center
          sm:grid sm:grid-cols-2 lg:grid-cols-3
           gap-4 w-screen max-w-[1500px]  ml-auto mr-auto
          `}>
            <CircleElement
            image={ball}/>
             <CircleElement
            image={ball}/>
                  <CircleElement
            image={ball}/>
             <CircleElement
            image={ball}/>
             <CircleElement
            image={ball}/>
                  <CircleElement
            image={ball}/>
        </section>
        <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]">
           
       </div>
       </>
    )
}