import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string,
    customText: React.ReactNode 
}

const Content: React.FC<contentProps> = ({image, customText}) => {

    return (
        <article className='flex flex-col justify-center align-center
        md:flex-row relative'>

            <img
            className='w-screen h-[55vw] object-cover pl-4 pr-4
             ml-auto mr-auto md:max-h-[500px]' src={image}/>
            {customText ? (
                <>
                {customText}
                </>
            ) : <p className='mt-6 pl-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error laudantium, sapiente natus soluta dolor tempora laborum dolores dolorum nisi!
            <br/>
            <button className='mt-4 -translate-x-2'>slat</button></p>}
        </article>
    )

}

export default Content