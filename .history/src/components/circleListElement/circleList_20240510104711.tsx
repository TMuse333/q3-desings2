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
   
    index:number
secondCircleComplete: boolean,
handleCircleComplete: (index: number, value: boolean) => void;
}

const CircleListElement: React.FC<CircleProps> = ({image,title, description,
    handleCircleComplete,secondCircleComplete,index
}) => {

    const [descriptionClicked, setDescriptionClicked] = useState<boolean>(false)

    function handleDescriptionClick() {
        setDescriptionClicked(!descriptionClicked)
    }

    


    const { isMobile }  = useGeneralContext()

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
        <div className=" relative flex  justify-center 
        h- md:h-[220px] 
        md:flex-row w-[calc(100vw-5px)]  md:w-[40vw] align-center mb-10 md:mt-3 bg-[#011f29] 
        rounded-3xl max-w-[490px] ml-auto mr-auto border border-q-blue">
<AppearingCircle
secondCircleComplete={secondCircleComplete}
handleCircleComplete={handleCircleComplete}
image={image}
index={index}


/>
<section className="relative flex flex-col bg-[#011f29] rounded-3xl pr-5
h-auto min-h-0 max-h-full -translate-x-6  items-center">
<motion.h1
onClick={handleDescriptionClick}
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white md:text-2xl  w-[100px]  ml-auto mr-auto mt-5
 text-lg
 ">{title}
 </motion.h1>

<p className={`rounded-lg 
 text-left mt-3 pl-3 pr-3 bg-blue-600 transition-height ease-in duration-300 bg-blue-800 ${descriptionClicked ? ' h-[220px] w-[125px] overflow-scroll pt-5 border-2 border-rose-500' : 'h-0 w-[125px]  overflow-hidden pt-0'}`}>
  {description}
</p>
</section>

        </div>
    )
}



const CircleList: React.FC = () => {

    const {secondCircleComplete, handleCircleComplete}
    = useGeneralContext()

    return (
        <>
        <h1>We get it done</h1>
 <section className="relative 
         md:grid md:grid-cols-2 gap-4 max-w-[1200px] ml-auto
         mr-auto justify-center items-center 
">
            {/* <div className="-translate-x-5"> */}
            <CircleListElement
            handleCircleComplete={handleCircleComplete}
            secondCircleComplete={secondCircleComplete[0]}
        index={0}
            image={ball}
            title='Absolute Tenacity'
            description='Be a man of your word'
            />
            {/* </div> */}
            <CircleListElement
            secondCircleComplete={secondCircleComplete[1]}
            handleCircleComplete={handleCircleComplete}
            index={1}
            image={laptop}
       
            title='Extreme Discipline'
            description='Gym. Code. Quantum Realm. Repeat'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[2]}
            handleCircleComplete={handleCircleComplete}
            index={2}
            image={ball}
            title='Code over templates'
            description='We are not template using pussies we write banging code'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[3]}
            handleCircleComplete={handleCircleComplete}
            index={3}
            image={ball}
            title='Excellent Communication'
            description='Gym. Code. Quantum Realm. Repeat'
            />

<CircleListElement
secondCircleComplete={secondCircleComplete[4]}
handleCircleComplete={handleCircleComplete}
index={4}
            image={ball}
            title='Code over templates'
            description='We are not template using pussies we write banging code'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[5]}
            handleCircleComplete={handleCircleComplete}
            index={5}
            image={ball}
            title='Outstanding Design'
            description='Gym. Code. Quantum Realm. Repeat'
            />


            
        </section>
        </>
    )
}

export default CircleList