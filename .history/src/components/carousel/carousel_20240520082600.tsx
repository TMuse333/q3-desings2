import React, {useEffect, useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import {motion, AnimatePresence} from 'framer-motion'

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

    const [leftClicked, setLeftClicked] = useState<boolean>(false)
    
    const [leftEdgeShift, setLeftEdgeShift] = useState<number>(-100)

    const [leftEdgeCase, setLeftEdgeCase] = useState<boolean>(true)

    const [rightClicked, setRightClicked] = useState<boolean>(false)

    const [rightEdgeCase, setRightEdgeCase] = useState<boolean>(false)

    const [rightEdgeShift, setRightEdgeShift] = useState<number>(0)

    const updatedImages = images.map((image, index) => ({
        ...image,
        transformValue: (shift * 100) + (100 * image.imageIndex)
    }));

    // useEffect(() => {
    //     updatedImages.forEach(image => {
    //         console.log(`Title: ${image.title}, Transform Value: ${image.transformValue}`);
    //     });
    // }, [shift, images, updatedImages]);

    //(shift * 100) + (100 * image.imageIndex)

    function handlePrevClick(){

        setLeftClicked(true)
        setShift(prev => prev +1)

        if(shift === 0){
            setLeftEdgeCase(true)
        }
    }

    function handleNextClick(){

        setRightClicked(true)
        setLeftClicked(false)
        if(shift === -images.length +1){
            setShift(0)
            setCurrentImage(0)
        }

        else{
            setShift(prev => prev - 1);
            // setCurrentImage(prev => prev + 1)
        }
       
       

}

        useEffect(()=> {

     
            if(shift === -images.length + 1){
                setRightEdgeShift(100)
            }
            else{
                    setRightEdgeShift(shift * 100)
            }
     

         if(leftEdgeCase === true &&
            leftClicked === true){
                
               
                setLeftEdgeCase(false)
                setShift(-images.length +1)
             
               setLeftEdgeShift(0)
               setLeftClicked(false)

            }

            if(shift === 0){
                setLeftEdgeShift(-100)
               
                
            }

      else{
       
        setLeftEdgeShift((shift * 100)
        +(100 * (images.length -1)))
        // console.warn('the left edge case is not longer true')
      }

      if(leftClicked === true){
        setLeftClicked(false)
      }

    
      
         

         

            // if(shift === 0){
            //     console.warn('we are on left edge case')
               
            // }
            // else{
            //     // console.warn('not on left edge case')
            //     setLeftEdgeShift((shift * 100) + (100 * images.length - 1))
            // }


        },[leftEdgeCase,shift,currentImage,leftClicked])

        // ( updatedImages[index].transformValue === 0 || (updatedImages[index].transformValue === 100 && image.imageIndex !== images.length -1)
        // || image.imageIndex === 0 && leftClicked
        // ) && (leftClicked && updatedImages[index].transformValue !== 100)

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
        sm:h-[50vw]
        max-w-[900px] z-3
        max-h-[420px]
        md:max-h-[520px]
        overflow-hidden
        '>

       
        {updatedImages.map((image,index) => (
            <>

            {/*this dictates the height and width of the image*/}
   <div className={`w-[90vw] 
   sm:w-[70vw]
h-[80vw]
sm:h-[50vw]

     ml-auto
   mr-auto
   mb-auto
   max-h-[390px]
   md:max-h-[520px]
   absolute  

   ${(image.imageIndex === currentImage )
   || ()
  ? 'transition-transform duration-500' : ''}


   `}
   key={index}
   style={{
    transform: `translateX(${image.imageIndex === images.length - 1 ? leftEdgeShift : 
        image.imageIndex === 0 ? rightEdgeShift :
          updatedImages[index].transformValue}%)`,
    // transitionTimingFunction: 'cubic-bezier(0.48, -0.25, 0.17, 1.33)',
   }}
>
       <img
       
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
<div className='relative z-3 
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

       {/* {hasDescription && (
      <AnimatePresence mode='wait'>
      <motion.div
        key={currentImage}
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
       )} */}
       </section>


            </>
   
    )
}

export default Carousel