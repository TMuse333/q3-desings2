import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import moneyBall from '../../media/futuristic-money-ball-removebg-preview.png'
interface CarouselProps {
    im
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{





    return (
        <>

       <div className='w-screen bg-blue-200 flex
       relative h-screen'>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[500px] '>

       
        {[...Array(1)].map((_,index) => (
            <>
   <div className='w-[500px] h-[500px]
   border border-white
    bg-green-200 ml-auto
   mr-auto
   absolute'
   style={{
    transform:`translateX(-${100 * index}%)`
   }}>
       <img src={moneyBall}
       className='w-[300px]
       ml-auto mr-auto'/>
   </div>

   <div className='w-[500px] h-[500px]
   border border-white
    bg-red-200 ml-auto
   mr-auto absolute'
   style={{
    transform:`translateX(${100 * 1}%)`
   }}>
       green
   </div>

   </>
   
        ))}
         </section>
     
       </div>
            </>
   
    )
}

export default Carousel