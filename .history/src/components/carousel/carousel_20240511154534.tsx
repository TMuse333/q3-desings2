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

       <div className='w-screen bg-blue-200 flex'>
        slat
        <section>

       
        {[...Array(2)].map((_,index) => (
   <div className='w-[500px] h-[500px]
   border border-white
    bg-green-200 ml-auto
   mr-auto'>
       green
   </div>
        ))}
         </section>
     
       </div>
            </>
   
    )
}

export default Carousel