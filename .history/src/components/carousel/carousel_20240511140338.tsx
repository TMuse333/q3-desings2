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

            <div className='flex  relative '
             >
                {images.map((image,index) => (
                    <img src={image}
                    key={index}
                    className='transition-transform bg-red-200
                    '
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
                   import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
} <ChevronLeft
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
    )
}

export default Carousel