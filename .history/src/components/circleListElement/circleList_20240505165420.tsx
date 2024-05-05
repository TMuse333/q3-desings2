import React from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";

const CircleListElement: React.FC = () => {

    const { secondCircleComplete }  = useGeneralContext()

    const headerVariants 


    return (
        <div className=" relative flex flex-col">
<AppearingCircle
image={ball}
/>
<h1 className="text-white">Slatty</h1>
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