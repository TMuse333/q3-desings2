import React, {useState} from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";

interface CircleProps {
    image:string,
    title: string,
    description:string
}

const CircleListElement: React.FC<CircleProps> = ({image,title, description}) => {

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
        <div className=" relative flex flex-row bg-red-200 translate-x-[3]
        sm:flex-row w-3/5 sm:w-1/4 
       sm:justify-stretch">
<AppearingCircle
image={image}
/>
<section>
<motion.h1
onClick={handleDescriptionClick}
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white">{title}</motion.h1>

<p className={`text-left mt-3 pl-3 pr-3 bg-blue-600 transition-height ease-in duration-300 bg-blue-800 ${descriptionClicked ? 'h-[220px] overflow-scroll pt-5' : 'h-0 overflow-hidden pt-0'}`}>
  {description}
</p>
</section>

        </div>
    )
}



const CircleList: React.FC = () => {

    return (
        <section className="relative 
         sm:grid sm:grid-cols-2 gap-4 max-w-[1200px] ml-auto
         mr-auto justify-center items-center">
            <CircleListElement
            image={ball}
            title='Absolute Determination'
            description='Be a man of your word'
            />
            <CircleListElement
            image={ball}
            title='Extreme Discipline'
            description='Gym. Code. Quantum Realm. Repeat'
            />

            <CircleListElement
            image={ball}
            title='Code over templates'
            description='We are not template using pussies we write banging code'
            />

            <CircleListElement
            image={ball}
            title='Outstanding Design'
            description='Gym. Code. Quantum Realm. Repeat'
            />


            
        </section>
    )
}

export default CircleList