import React, {useState} from 'react'


interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    return (
        <section className='overflow-hidden relative'>

            <div className='flex bg-red-700'>
                {images.map((image,index) => (
                    <img src={image}
                    key={index}
                    className='h-[500px]'
                    style={{
                        transform:`translateX(-${imageIndex * 100}%)`
                    }}
                    />
                ))}
            </div>

            <div className='absolute'>
                
            </div>

        </section>
    )
}

export default Carousel