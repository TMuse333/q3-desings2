import React, {useState} from 'react'


interface CarouselProps {
    images:string[]
}


const Carousel:React.FC<CarouselProps> = ({images}) =>{

    return (
        <section className='overflow-hidden relative'>

            <div>
                {images.map((image,index) => (
                    <img src={image}
                    className=
                    />
                ))}
            </div>

        </section>
    )
}