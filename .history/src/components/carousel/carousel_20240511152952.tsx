import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    const handleNext = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log('image index',imageIndex)
      };
    
      const handlePrev = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

    return (
        <>

        <div className='w-screen  z-3
flex
justify-center items-center'>

   
        <section className='overflow-hidden relative w-[700px]
  flex justify-center items-center'>
           

         

            <div className='flex   relative'
             >
                {images.map((image,index) => (
            
                        
           
            <img
                src={image}
                className='transition-transform ml-auto mr-auto border border-white w-[500px] object-cover'
                style={{ transform: `translateX(-${imageIndex * 100}%)` }}
                alt={`Image ${index}`}
            />
    
                    
                ))}
                    <div className=' w-[100%]
                    flex flex-row justify-between
                    top-[50%]'>
                      


                <button className='bg-transparent absolute
                left-[0%] top-[50%] p-0'>
                    <ChevronLeft
                    onClick={handlePrev}
                    size={40}/>
                </button>
              
                <button className='bg-transparent absolute
                right-[0%] top-[50%] p-0'>
                 <ChevronRight
                 onClick={handleNext}
                 size={40}/>
                </button>
            </div>
            </div>
        </section>
        </div>
            </>
   
    )
}

export default Carousel