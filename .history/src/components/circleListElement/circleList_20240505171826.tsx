import React from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";

const CircleListElement: React.FC = () => {

    const { secondCircleComplete, isMobile }  = useGeneralContext()

    const headerVariants: Variants = {
        initial:{
            opacity:0,
            y: isMobile ? -20 : 0,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                
            }
        }

    }


    return (
        <div className=" relative flex flex-col">
<AppearingCircle
image={ball}
/>
<motion.h1
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white">Slatty</motion.h1>

 <p className="text-left mt-3 pl-3 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic ullam? Molestias fugiat neque asperiores sint reprehenderit provident officiis amet?</p>
        </div>
    )
}



const CircleList: React.FC = () => {

    return (
        <section className="relative">
            <CircleListElement/>
        </section>
    )
}

export default CircleList