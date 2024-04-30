import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string,
    customText: React.ReactNode,
    description:string | null
}

const Content: React.FC<contentProps> = ({image, customText, description}) => {

    return (
        <article className='flex flex-col justify-center align-center
        md:flex-row relative max-w-[1200px] mr-auto ml-auto'>

            <img
            className='w-[90vw] h-[55vw] object-cover 
             ml-auto mr-auto max-h-[500px]' src={image}/>
            {customText ? (
                <>
                {customText}
                </>
            ) : <p className='mt-6 pl-5 text-left'>
            {description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat voluptatibus dolores deleniti consequuntur harum asperiores?'}
            <br/>
            <button className='mt-4 -translate-x-2'>slat</button></p>
            }

        </article>
    )

}

export default Content