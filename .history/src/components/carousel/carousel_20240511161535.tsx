import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import moneyBall from '../../media/futuristic-money-ball-removebg-preview.png'
interface CarouselProps {
    images:{
        url:string,
        imageIndex:number
    }[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [shift,setShift] = useState<number>(0)

    function handlePrevClick(){
            setShift((prev)=>prev--)
    }


    return (
        <>

       <div className='w-screen bg-blue-200 flex
       relative h-screen'>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[500px] '>

       
        {images.map((image,index) => (
            <>
   <div className='w-[500px] h-[500px]
   border border-white
    bg-green-200 ml-auto
   mr-auto
   absolute'
   key={index}
   style={{
    transform:`translateX(${shift * image.imageIndex}%)`
   }}>
       <img src={moneyBall}
       className='w-[300px]
       ml-auto mr-auto'/>
   </div>



   </>
   
        ))}

        <button className='absolute top-[50%]
        left-0 bg-transparent p-0'>
            <ChevronLeft
            size={40}/>
        </button>
        <button className='absolute top-[50%]
        left-0 bg-transparent p-0'>
            <ChevronLeft
            size={40}/>
        </button>

         </section>
     
       </div>
            </>
   
    )
}

export default Carousel