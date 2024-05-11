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

    console.log('images length',images.length)

    function handlePrevClick(){

        if(shift === 0){
            setShift(-images.length + 1)
        }
        else{
            setShift(prev => prev + 1);
        }
      
            console.log('current shift',shift)
    }

    function handleNextClick(){
        if(shift === -images.length +1){
            setShift(0)
        }

        else{
            setShift(prev => prev - 1);
        }
       
        console.log('current shift',shift)

}

    return (
        <>

       <div className='mt-10
       w-[100%]  flex
       relative h-screen '>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[90vw] overflow-hidden
        max-w-[900px]
        '>

       
        {images.map((image,index) => (
            <>
   <div className='w-[90vw] 
  h-[80vw]
    bg-transparent ml-auto
   mr-auto
   mb-auto
   top-[0%]
   absolute transition-transform duration-500
   
   '
   key={index}
   style={{
    transform: `translateX(${(shift * 100) + (100 * image.imageIndex)}%)`

   }}>
       <img src={image.url}
       className='w-[80%] 
   inset-0

       h-[50%] object-cover
       ml-auto mr-auto'/>
   </div>



   </>
   
        ))}

        <button className='absolute top-[50%]
        left-0 bg-transparent p-0'>
            <ChevronLeft
            onClick={handlePrevClick}
            size={40}/>
        </button>
        <button className='absolute top-[50%]
        right-0 bg-transparent p-0'>
            <ChevronRight
            size={40}
            onClick={handleNextClick}/>
        </button>

         </section>
     
       </div>
            </>
   
    )
}

export default Carousel