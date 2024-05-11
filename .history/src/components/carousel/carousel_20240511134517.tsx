import React, {useState} from 'react'


interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    return (
      <div className="max-w-lg mr-auto ml-auto"> 
        <section className='overflow-hidden relative bg-red-200'>

            <div className='flex bg-red-700 relative w-[60vw]'>
                {images.map((image,index) => (
                    <img src={image}
                    key={index}
                    className='h-[500px]'
                    style={{
                        transform:`translateX(-${imageIndex * 100}%)`
                    }}
                    />
                ))}
                    <div className='absolute w-[100%]
                    flex flex-row justify-between
                    top-[50%]'>
                <button className='bg-blue-200'>
                    prev
                </button>
                <button className='bg-blue-200'>
                    next
                </button>
            </div>
            </div>

        

        </section>
    )
}

export default Carousel