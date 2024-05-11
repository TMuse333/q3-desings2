import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    const handleNext = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrev = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

    return (
      <div className="max-w-lg mr-auto ml-auto"> 
        <section className='overflow-hidden relative  '>

            <div className='flex  relative '>
                {images.map((image,index) => (
                    <img src={image}
                    key={index}
                    className='h-[500px]'
                    style={{
                        transform:`translateX(-${imageIndex * 100}%)`
                    }}
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
                 onC
                 size={40}/>
                </button>
            </div>
            </div>

        

        </section>
        </div>
    )
}

export default Carousel