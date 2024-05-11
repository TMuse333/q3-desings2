import React, {useState} from 'react'


interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>(0)

    return (
        <section className='overflow-hidden relative w-screen'>

            <div className='flex bg-red-200'>
                {images.map((image,index) => (
                    <img src={image}
                    className='h-[500px]'
                    style={{
                        transform:`translateX(-${imageIndex * 100}%)`
                    }}
                    />
                ))}
            </div>

        </section>
    )
}

export default Carousel