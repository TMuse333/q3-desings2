import React from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'

interface CircleProps {
    image:string
}

const CircleElement: React.FC<CircleProps> = ({image}) => {

    return (
        <section className="rounded-full bg-[#232a91]
        h-[100vw] w-[100vw] border border-q-blue
        flex flex-col ">
            <img className="w-[40vw] h-[40vw] object-cover 
            mr-auto ml-auto"
            src={image}
            />
            <h1 className="text-lg ">Rounded element</h1>
        </section>
    )
}


export const CircleInfoGraphic = () => {

    return (
        <section className="flex justify-center">
            <CircleElement
            image={ball}/>
        </section>
    )
}