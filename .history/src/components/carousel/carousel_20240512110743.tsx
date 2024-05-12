import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion, AnimatePresence,Variants } from "framer-motion";

interface CarouselProps {
    images:{
        url:string,
        imageIndex:number
    }[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [shift,setShift] = useState<number>(0)

    

    function handlePrevClick(){

        if(shift === 0){
            setShift(-images.length + 1)
        }
        else{
            setShift(prev => prev + 1);
        }
      
            
    }

    function handleNextClick(){
        if(shift === -images.length +1){
            setShift(0)
        }

        else{
            setShift(prev => prev - 1);
        }
       
       

}

    const imageVarinats = (shift:nu)

    return (
        <>

       <div className='mt-10
       w-[100%]  flex
       relative  h-screen'>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[100vw]
        sm:w-[70vw]

        h-screen overflow-hidden
        max-w-[900px] z-3
        '>

       
        {images.map((image,index) => (
            <>

            {/*this dictates the height and width of the image*/}
   <div className='w-[90vw] 
   sm:w-[70vw]
h-[80vw]
sm:h-[60vw]
     ml-auto
   mr-auto
   mb-auto

   absolute transition-transform duration-500
top-[25%]
   '
   key={index}
   style={{
    transform: `translateX(${(shift * 100) + (100 * image.imageIndex)}%)`

   }}>
       <img src={image.url}
       className='w-[80%] 
            max-w-[405px]
            max-h-[434px]
 

       h-[100%] object-cover
       object-bottom
       ml-auto mr-auto'/>
   </div>



   </>
   
        ))}
<div className='absolute 
w-screen flex justify-between
sm:w-[70vw]
max-w-[425px]

'>
<button className=' bg-transparent p-0
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
            </>
   
    )
}

export default Carousel