import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";


interface CarouselProps {
    images:{
        url:string,
        imageIndex:number
        description?:string
    }[],
    hasDescription?:boolean

}


const Carousel:React.FC<CarouselProps> = ({images,
hasDescription}) =>{

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

const imageVariants = {
    initial: { // Initial state
      x: 30 // Initial X offset
    },
    animate: (custom:number) => ({ // Animated state, custom prop is passed
      x: custom * 100 // Move the image horizontally based on its index
    })
  };

    return (
        <>

        <section
        className='w-screen max-w-[1000px] relative
        flex flex-col md:flex-row ml-auto mr-auto
        h-[90vh] justify-center items-center'>

      

       <div className={`mt-10
        flex bg-blue-200
       relative  h-[90vh]
       ${hasDescription ? 'md:w-[50%]' : 'w-[100%]'}`}>
       
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
    transform: `translateX(${(shift * 100) + (100 * image.imageIndex)}%)`,
    transitionTimingFunction: 'cubic-bezier(0.48, -0.25, 0.17, 1.33)',
   }}
>
       <img
       
        src={image.url}
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
        <div className='  bg-red-200
       
   '>
            <h1>Title Here</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illo ex quae et fuga nobis est voluptatum architecto labore laudantium.
        </p>
        </div>
       )}
       </section>


            </>
   
    )
}

export default Carousel