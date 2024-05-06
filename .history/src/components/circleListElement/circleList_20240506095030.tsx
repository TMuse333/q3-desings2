import React, {useState} from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";
import laptop from '../../media/Gemini_Generated_Image_r055a1r055a1r055-removebg-preview.png'

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
        <div className=" relative flex flex-col justify-center h-[220px] 
        sm:flex-row w-screen sm:w-1/4 md:w-3/4 align-center mt-5 md:mt-3 
   ">
<AppearingCircle
image={image}
/>
<section className="relative flex flex-col justify-center items-center
h-auto min-h-0 max-h-full translate-x-4">
<motion.h1
onClick={handleDescriptionClick}
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white text-xl md:w-[100px]   mt-5">{title}
 </motion.h1>

<p className={`rounded-lg text-left mt-3 pl-3 pr-3 bg-blue-600 transition-height ease-in duration-300 bg-blue-800 ${descriptionClicked ? 'h-[220px] w-[125px] overflow-scroll pt-5' : 'h-0  w-0 overflow-hidden pt-0'}`}>
  {description}
</p>
</section>

        </div>
    )
}



const CircleList: React.FC = () => {

    return (
        <>
 <section className="relative 
         sm2:grid sm:grid-cols-2 gap-4 max-w-[1200px] ml-auto
         mr-auto justify-center items-center">
            {/* <div className="-translate-x-5"> */}
            <CircleListElement
            image={ball}
            title='Absolute Tenacity'
            description='Be a man of your word'
            />
            {/* </div> */}
            <CircleListElement
            image={laptop}
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
            title='Excellent Communication'
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
        </>
    )
}

export default CircleList