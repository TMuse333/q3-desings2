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

       <div className='w-screen  flex
       relative h-[80vw]'>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[500px] overflow-hidden
        '>

       
        {images.map((image,index) => (
            <>
   <div className='w-[500px] h-[500px] 
  
    bg-transparent ml-auto
   mr-auto
   absolute transition-transform duration-500
   
   '
   key={index}
   style={{
    transform: `translateX(${(shift * 100) + (100 * image.imageIndex)}%)`

   }}>
       <img src={image.url}
       className='w-[80%] 
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