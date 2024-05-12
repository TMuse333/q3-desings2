import React from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'

interface CircleProps {
    image:string
}

const CircleElement: React.FC<CircleProps> = ({image}) => {

    return (
        <section className="mt-5 mb-5 glow
        rounded-full bg-[#003647] mr-auto ml-auto
        h-[95vw] w-[95vw] border border-q-blue
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px] shadow-indigo-500/60
        sm:w-[48vw] sm:h-[48vw]
        lg:w-[32vw] lg:h-[32vw]">
        
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
        </section>
    )
}


export const CircleInfoGraphic = () => {

    return (
        <>
        <section className="flex
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 lg:grid-cols-3
           gap-4 w-screen max-w-[1500px]  ml-auto mr-auto">
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
        w-[90vw] h-[10px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]">
           
       </div>
       </>
    )
}