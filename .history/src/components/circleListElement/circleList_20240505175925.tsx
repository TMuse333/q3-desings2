import React, {useState} from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";

interface CircleProps {
    image:string,
    
}

const CircleListElement: React.FC<CircleProps> = ({image,text}) => {

    const [descriptionClicked, setDescriptionClicked] = useState<boolean>(false)

    function handleDescriptionClick() {
        setDescriptionClicked(!descriptionClicked)
    }

    const descriptionStyle = {
        height: descriptionClicked ? '200px' : 0,
        overflow: descriptionClicked ? 'scroll' : 'hidden',
        transition: 'height 0.3s ease-in'
    }

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
                delay: 0.3
            }
        }

    }




    return (
        <div className=" relative flex flex-col">
<AppearingCircle
image={image}
/>
<motion.h1
onClick={handleDescriptionClick}
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white"></motion.h1>

<p className={`text-left mt-3 pl-3 pr-3  transition-height ease-in duration-300 bg-blue-800 ${descriptionClicked ? 'h-[220px] overflow-scroll pt-5' : 'h-0 overflow-hidden pt-0'}`}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic ullam? Molestias fugiat neque asperiores sint reprehenderit provident officiis amet?
</p>

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