import React from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'

interface CircleProps {
    image:string
}

const CircleElement: React.FC<CircleProps> = ({image}) => {

    return (
        <section className="mt-5
        rounded-full bg-[#232a91]
        h-[95vw] w-[95vw] border border-q-blue
        flex flex-col  shadow-2xl shadow-red-500/60">
            <div className="mt-4">
            <img className="w-[35vw] h-[35vw] object-cover 
            mr-auto ml-auto"
            src={image}
            />
            <h1 className="text-3xl ">Rounded element</h1>
            <p className=" ml-auto mr-auto text-sm pr-5 pl-5 pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, cum vel! Numquam illo ex odio debitis dolore deserunt, iste odit omnis architecto ipsa voluptates at autem consectetur quam, alias delectus!</p>
            </div>
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