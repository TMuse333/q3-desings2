import React, {useEffect, useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import {motion, AnimatePresence} from 'framer-motion'
import { image } from '@tensorflow/tfjs';


interface CarouselProps {
    images:{
        url:string,
        imageIndex:number
        title:string,
        description:string
     
      
    }[],
    hasDescription?:boolean
    

}


const Carousel:React.FC<CarouselProps> = ({images,
hasDescription}) =>{

    const [shift,setShift] = useState<number>(0)

    const [currentImage, setCurrentImage] = useState<number>(0)
    


    function handlePrevClick(){

        if(shift === 0){
            setShift(-images.length + 1)
            setCurrentImage(images.length -1)
        }
        else{
            setShift(prev => prev + 1);
            setCurrentImage(prev => prev -1)
        }
      
            
    }

    function handleNextClick(){
        if(shift === -images.length +1){
            setShift(0)
            setCurrentImage(0)
        }

        else{
            setShift(prev => prev - 1);
            setCurrentImage(prev => prev + 1)
        }
       
       

}

        const [firstImageOnEdge,
        setFirstImageOnEdge] = useState<boolean>(true)

        const edgeShift = images.length

        useEffect(()=> {
           if(firstImageOnEdge){
                images[image.length]
           }
        },[shift])



    return (
        <>

        <section
        className='w-screen max-w-[1300px] relative
        flex flex-col md2:flex-row ml-auto mr-auto

        
    
          justify-center items-center
         
        mb-5'>

      

       <div className={`mt-10
        flex 
       relative 
       ${hasDescription ? 'md:w-[50%]' : 'w-[100%]'}`}>
       
      
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[100vw]
        w-[70vw]
        max-h-[804px]
       h-[95vw]
        sm:h-[50vw] overflow-hidden
        max-w-[900px] z-3
        max-h-[420px]
        md:max-h-[520px]
    
        '>

       
        {images.map((image,index) => (
            <>

            {/*this dictates the height and width of the image*/}
   <div  key={index}
   className='w-[90vw] 
   sm:w-[70vw]
h-[80vw]
sm:h-[50vw]

     ml-auto
   mr-auto
   mb-auto
   max-h-[390px]
   md:max-h-[520px]
   absolute transition-transform duration-500


   '
  
   style={{
    transform: `translateX(${(shift * 100) + (100 * image.imageIndex)}%)`,
    transitionTimingFunction: 'cubic-bezier(0.48, -0.25, 0.17, 1.33)',
   }}
>
       <img
       key={image.imageIndex}
        src={image.url}
       className='w-[80%] 
            max-w-[405px]
            max-h-[424px]
       h-[100%] object-cover
       object-bottom
      
       
       ml-auto mr-auto'/>
   </div>



   </>
   
        ))}
<div key={0}
className='relative z-3 
w-[100vw] flex justify-between
items-center

max-h-[434px]
////sm:w-[70vw]
max-w-[460px]

md:top-auto

'>
     
        <button className='bg-transparent p-0
'>
        <ChevronLeft
            onClick={handlePrevClick}
            size={40}/>
        </button>
       
        <button className=' bg-transparent p-0'>
            <ChevronRight
            size={40}
            onClick={handleNextClick}/>
        </button>
        </div>

          
        

         </section>
     
       </div>

       {hasDescription && (
      <AnimatePresence
      key={currentImage}
       mode='wait'>
      <motion.div
        
        className="w-[100%] relative
         md2:w-[50%] md:-translate-y-[5rem]
    ml-auto
    md2:-translate-x-[2rem]
        mr-auto
  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }} // Adjust duration as needed
      >
        <h1 className='md2:text-left
        md2:pl-5'>{images[currentImage].title}</h1>
        <p className="text-white
        text-center pl-5 pr-5 pt-5
        md2:pr-0 pl-0 md2:text-left
       ">{images[currentImage].description}</p>
      </motion.div>
    </AnimatePresence>
       )}
       </section>


            </>
   
    )
}

export default Carousel