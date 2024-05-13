import React from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
// import { motion,Variants} from 'framer-motion'
// import useIntersectionObserver from "../intersectionObserver/intersectionObserver";
import {description1} from '../../data/data'
interface CircleProps {
    image:string,
    title:string,
    description:string
}

const CircleElement: React.FC<CircleProps> = ({image,
title, description}) => {

    // const [inView, setInView] = useState<boolean>(false)

    // const options = {
    //     root: null,
    //     rootMargin: '-25px',
    //     threshold: 0.6,
    // };

    // Apply intersection observer hook to detect when the component is in view
    // const componentRef = useIntersectionObserver(setInView, options);

  

    return (
        <div
    
         className={`mt-5 mb-5 p-0
        rounded-full bg-[#071f26] hover:bg-[#0e3a47]
        mr-auto ml-auto transition-all
        h-[95vw] w-[95vw] border border-[#2dc0eb]
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[48vw] sm:h-[48vw]
        lg:w-[32vw] lg:h-[32vw]
      glow`}

        >
        {/*        ${inView ? 'glow' : ''}`}*/}
            <div className="mt-4">
            <img className="w-[35vw]
            max-w-[115px] max-h-[115px] h-[35vw]
            sm:w-[10vw] sm:h-[10vw] object-cover 
            mr-auto ml-auto"
            src={image}
            />
            <h1 className="text-3xl sm:text-lm lg:text-lg ">{title}</h1>
            <p className=" ml-auto mr-auto text-sm sm:text-xs pr-5 pl-5 pt-2">
                {description}
            </p>
            </div>
        </div>
    )
}

interface InfographicProps {
    image?:string
    title:string
    description:string
}


export const CircleInfoGraphic:React.FC<InfographicProps> = ({
    image, title, description
}) => {

    return (
        <>
          <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]
        ">
           
       </div>
        <section className={`flex
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 lg:grid-cols-3
           gap-4 lg:gap-0 w-screen max-w-[1500px]  ml-auto mr-auto
          `}>
            <CircleElement
            {...description1[0]}
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
        {/* <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]">
           
       </div> */}
       </>
    )
}