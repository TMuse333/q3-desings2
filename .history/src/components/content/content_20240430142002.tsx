import react, {useState, useEffect} from 'react'
import {Variants, motion} from 'framer-motion'


interface contentProps {
    image: string,
    customText: React.ReactNode,
    description:string | null,
    reverse: boolean | null,
    mainTitle: string | null,
    floatingImage: boolean,
    hasAnimation:boolean
}

const Content: React.FC<contentProps> = ({image, customText, description,reverse
,mainTitle,floatingImage,hasAnimation}) => {


    const imageVariants: Variants = {
        initial: {
            x: reverse ? 150 : -150,
            opacity:0 // Set initial x position based on reverse prop
            // Set initial y position with or without oscillating movement
        },
        animate: {
            opacity:1,
            x: 0,
           y: floatingImage ? [0,-5,0] : 0,
            transition: {
                opacity:{
                    duration:2
                },
                x: {
                    duration: 1,
                    ease: 'easeInOut',
                },
                y:{
                    delay:1.5,
                   duration:2,
                   repeat:Infinity,
                   ease:'easeInOut'
                }
                
            },
        },
    };



    
    return (
        <article className={`flex flex-col justify-center align-center pt-8
       relative mr-auto  ml-auto  
       md:w-[90vw] md:max-w-[1200px] sm:max-w-[668px]
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

  {/* <div>


<h2 className='text-white'>{mainTitle}</h2> */}
            <motion.img
         variants={imageVariants}
         initial='initial'
         animate='animate'
            className='w-[90vw] h-[55vw] object-cover 
             ml-auto mr-auto max-h-[567px] max-w-[668px] ' 
             src={image}/>
               {/* </div> */}


            {customText ? (
                <>
               


                {customText}
            
                </>
            ) :<div>

                <h1 className=' text-left pl-5 sm:pl-12 pt-5'>{mainTitle}</h1>
             <p className=' text-white mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line'>
            {description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'
}
            <br/>
            <button className='mt-4 -translate-x-2'>slat</button></p>
            </div>
            }

        </article>
    )

}

export default Content