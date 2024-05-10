import React from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'

interface CircleProps {
    image:string
}

const CircleElement: React.FC<CircleProps = ({image}) => {

    return (
        <section className="rounded-full bg-[#232a91]
        h-[70vw] w-[70vw] border border-q-blue
        flex flex-col ">
            <h1 className="text-lg mt-7">Rounded element</h1>
        </section>
    )
}


export const CircleInfoGraphic = () => {

    return (
        <section className="flex justify-center">
            <CircleElement/>
        </section>
    )
}