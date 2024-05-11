import React, {useState} from "react";

interface Props {
    images:string[]
}

const Carousel:React.FC<Props> = ({images}) => {

    const [currentImageIndex, setCurrentImageIndex]
    = useState<number>(0)

    return (
        <section className="overflow-hidden 
        relative">

            <div className="flex transition-transform
            ease-out duration-500"
            style={{
                transformStyle
            }}

        </section>
    )
}