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
            setShift((prev)=> prev--)
            console.log('current shift',shift)
    }

    function handleNextClick(){
        setShift((prev)=> prev++)
        console.log('current shift',shift)
}


    return (
        <>

       <div className='w-screen bg-blue-200 flex
       relative h-screen'>
       
        <section className='flex relative
        justify-center items-center ml-auto
        mr-auto w-[500px] '>

       
        {/* {images.map((image,index) => ( */}
            <>
   <div className='w-[500px] h-[500px]
   border border-white
    bg-green-200 ml-auto
   mr-auto
   absolute '
   key={0}
   style={{
    transform: `translateX(${0 * (100 + 0)}%)`

   }}>
       <img src={images[0].url}
       className='w-[300px]
       ml-auto mr-auto'/>
   </div>

   <div className='w-[500px] h-[500px]
   border border-white
    bg-green-200 ml-auto
   mr-auto
   absolute '
   key={0}
   style={{
    transform: `translateX(${1 * (100 + 1)}%)`

   }}>
       <img src={images[0].url}
       className='w-[300px]
       ml-auto mr-auto'/>
   </div>



   </>
   
        {/* ))} */}

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