import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    return (
      <div className="max-w-lg mr-auto ml-auto"> 
        <section className='overflow-hidden relative bg-red-200  '>

            <div className='flex bg-red-700 relative '>
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
                left-[0%] top-'>
                    <ChevronLeft
                    size={40}/>
                </button>
              
                <button className='bg-transparent '>
                 <ChevronRight
                 size={40}/>
                </button>
            </div>
            </div>

        

        </section>
        </div>
    )
}

export default Carousel