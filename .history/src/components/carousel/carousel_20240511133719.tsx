import React, {useState} from 'react'


interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    const [imageIndex, setImageIndex] = useState<number>()

    return (
        <section className='overflow-hidden relative'>

            <div>
                {images.map((image,index) => (
                    <img src={image}
                    className='h-[500px]'
                    style={{
                        transform:
                    }}
                    />
                ))}
            </div>

        </section>
    )
}