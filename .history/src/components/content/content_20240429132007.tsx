import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string,
    customText: React.ReactNode 
}

const Content: React.FC<contentProps> = ({image, customText}) => {

    return (
        <article className='flex flex-col justify-center align-center '>
            <section className=''
            <img
            className='w-screen h-[55vw] object-cover pl-4 pr-4 ml-auto mr-auto' src={image}/>
            {customText ? (
                <>
                {customText}
                </>
            ) : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error laudantium, sapiente natus soluta dolor tempora laborum dolores dolorum nisi!</p>}
        </article>
    )

}

export default Content